import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const padronizarUrl = (url) => {
    return url
        .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .toLowerCase() // Converte para mulas
        .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
};

export const useListandoModelos = () => {
    const navigate = useNavigate();
    // PEGANDO OS PARAMENTROS DA URL
    const param = useParams();

    // ARMAZENA OS DADOS SEM FILTRO
    const [dados, setDados] = useState([]);

    const [tipoVeicular, setTipoVeicular] = useState("");

    // ARMAZENA OS DADOS COM FILTRO
    const [retornoFiltroCompleto, setRetornoFiltroCompleto] = useState([]);

    // TITULO DA PAGINA
    const titulo = localStorage.getItem("nomeMarca");

    // ARMAZENA O INPUT DE BUSCA
    const [dadosBusca, setDadosBusca] = useState("");

    // ARMAZENA O RETORNO DO FILTRO
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    // SETANDO O TIPO DE VEICULO
    useEffect(() => {
        switch (param.veiculo) {
            case "carros":
                setTipoVeicular("CAR");
                break;
            case "caminhoes":
                setTipoVeicular("TRUCK");
                break;
            default:
                setTipoVeicular("MOTORCYCLE");
                break;
        }
    }, []);

    useEffect(() => {
        if (tipoVeicular) {
            const worker = new Worker(new URL("./worker.js", import.meta.url));
            const teste = async () => {
                await fetch("/fipe.json")
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);

                        worker.postMessage({ data, type: tipoVeicular });
                    })
                    .catch((error) => console.log(error));

                worker.onmessage = (e) => {
                    const filteredData = e.data;
                    setDados(filteredData);
                };
            };
            teste();
        }
    }, [tipoVeicular]);

    // REALIZA O FILTRO
    useEffect(() => {
        const dadosFiltrados = dados.filter(
            (item) =>
                item.Type === tipoVeicular &&
                padronizarUrl(item.BrandValue) == padronizarUrl(param.marca)
        );

        const nomes = new Set();

        const filtro = dadosFiltrados
            .filter((item) => {
                const primeiroNome = String(item.ModelValue).split(" ")[0];

                if (nomes.has(primeiroNome)) {
                    return false;
                } else {
                    nomes.add(primeiroNome);
                    return true;
                }
            })
            .map((item) => ({ ModelValue: String(item.ModelValue) }));

        setRetornoFiltroCompleto(filtro);
    }, [dados]);

    // FUNCAO PARA O CAMPO DE BUSCA
    useEffect(() => {
        const buscaVeicular = retornoFiltroCompleto.filter((item) => {
            return item.ModelValue.toLocaleLowerCase().includes(
                dadosBusca.toLocaleLowerCase()
            );
        });

        if (dadosBusca.length == 0) {
            setDadosFiltrados([]);
        } else {
            setDadosFiltrados(buscaVeicular);
        }
    }, [dadosBusca]);

    /////////////////////////////
    // NAVEGANDO PARA OS ANOS //
    /////////////////////////////
    const navAno = (link) => {
        navigate(`./${link}`);
    };

    return {
        titulo,
        setDadosBusca,
        dadosBusca,
        dadosFiltrados,
        retornoFiltroCompleto,
        navAno,
    };
};
