import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFipeStore from "../../../../../components/context/fipe";
import { useQuery } from "@tanstack/react-query";

export default function useFipeVeiculo() {
    const param = useParams();

    // PEGANDO DADOS DO LOCAL STORAGE
    const pegarLocal = JSON.parse(localStorage.getItem(`modeloFipeConsultado`));

    // ARMAZENA OS 12 ULTIMOS MES DE MODELOS DA FIPE
    const [ultimosMeses, setUltmosMeses] = useState([]);

    // ARMAZENA OS ULTIMOS MESES POREM COM O VALOR INT
    const [valoresInteiros, setValoresInteiros] = useState([]);

    // ARMAZENA A VALORIZACAO
    const [valorizacao, setValorizacao] = useState(0);

    const [dadosGerais, setDadosGerais] = useState({});

    const { fetchDataFipe } = useFipeStore();

    // PEGANDO OS DADOS DO VEICULO POR INTEIRO
    useEffect(() => {
        // SE TIVER VEICULO NO LOCALSTORAGE
        if (
            pegarLocal &&
            pegarLocal.Type === param.tipo &&
            pegarLocal.FipeCode === param.fipe &&
            pegarLocal.YearCode === param.ano
        ) {
            setDadosGerais(pegarLocal);
        } else {
            const worker = new Worker(new URL("./worker.js", import.meta.url));

            const teste = async () => {
                await fetch("/fipe.json")
                    .then((res) => res.json())
                    .then((data) => {
                        worker.postMessage({
                            data,
                            type: param.tipo,
                            fipe: param.fipe,
                            ano: param.ano,
                        });
                    })
                    .catch((error) => console.log(error));

                worker.onmessage = (e) => {
                    const filteredData = e.data;
                    setDadosGerais(...filteredData);
                };
            };

            teste();
        }
    }, []);

    // FILTRANDO OS ULTIMOS 12 MESES
    const fetchUltimosMeses = async (dadosGerais) => {
        if (Object.keys(dadosGerais).length === 0) return [];

        try {
            const reference = await fetchDataFipe(`references`);

            const interaMeses = Array.from({ length: 12 }, (_, i) => i);

            const promessas = interaMeses.map(async (item) => {
                try {
                    const dadosMes = await fetchDataFipe(
                        `${dadosGerais.Type.toLowerCase()}s/brands/${
                            dadosGerais.BrandCode
                        }/models/${dadosGerais.ModelCode}/years/${
                            dadosGerais.YearCode
                        }?reference=${reference[0].code - item}`
                    );

                    return dadosMes;
                } catch (err) {
                    console.error(
                        `Erro ao buscar dados para o mês ${item}:`,
                        err
                    );
                    return null;
                }
            });

            const resultados = await Promise.all(promessas);

            return resultados.filter((item) => item !== null);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const { data } = useQuery({
        queryKey: ["ultimosMeses"],
        queryFn: () => fetchUltimosMeses(dadosGerais),
        enabled: "Type" in dadosGerais,
    });

    useEffect(() => {
        if (data) {
            setUltmosMeses(data);
        }
    }, [data]);

    useEffect(() => {
        let dados = [];
        ultimosMeses.map((item) => {
            if (item) {
                let valorInteiro = parseFloat(
                    item.price
                        .replace("R$", "")
                        .replace(".", "")
                        .replace(",", ".")
                );

                // Pega os 3 primeiros caracteres
                const primeirosTres = item.referenceMonth.slice(0, 3);

                // Transforma a primeira letra em maiúscula
                const resultado =
                    primeirosTres.charAt(0).toUpperCase() +
                    primeirosTres.slice(1);

                // return resultado + "/" + item.referenceMonth.split(" ")[2];

                // console.log(item);
                dados.push({
                    ...item,
                    price: valorInteiro,
                    referenceMonth:
                        resultado + "/" + item.referenceMonth.split(" ")[2],
                });
            }
        });
        setValoresInteiros(dados.reverse());
    }, [ultimosMeses]);

    useEffect(() => {
        function calcularVariacaoPercentual(precoAnterior, precoAtual) {
            const diferenca = precoAtual - precoAnterior;
            const percentual = (diferenca / precoAnterior) * 100;
            return percentual;
        }

        if (valoresInteiros.length != 0) {
            const variacao = calcularVariacaoPercentual(
                valoresInteiros[0].price,
                valoresInteiros[valoresInteiros.length - 1].price
            );

            setValorizacao(variacao.toFixed(2));
        }
    }, [valoresInteiros]);

    const valorEmReal = (numero) => {
        return numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    return { dadosGerais, valoresInteiros, valorEmReal, valorizacao };
}
