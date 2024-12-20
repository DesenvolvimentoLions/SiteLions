import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const padronizarUrl = (url) => {
    return url
        .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .toLowerCase() // Converte para mulas
        .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
};

export default function useListandoModeloSelecionado() {
    // PEGANDOS OS PARAMETROS PASSADOS
    const param = useParams();

    // PASSANDO O USENAVIGATE
    const navigate = useNavigate();

    // ARMAZENA O TIPO DE VEICULO
    const [tipoVeicular, setTipoVeicular] = useState("");

    // ARMAZENA O PRIMEIRO FILRO
    const [primeiroFiltro, setPrimeiroFiltro] = useState([]);

    const titulo = localStorage.getItem("nomeMarca");

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

    // REALIZANDO O FILTRO COM WEB WORKER
    useEffect(() => {
        if (tipoVeicular) {
            const worker = new Worker(new URL("./worker.js", import.meta.url));

            const teste = async () => {
                await fetch("/fipe.json")
                    .then((res) => res.json())
                    .then((data) => {
                        worker.postMessage({
                            data,
                            type: tipoVeicular,
                            marca: param.marca,
                            modelo: param.modelo.replace(/\./g, ""),
                            ano: param.ano,
                        });
                    })
                    .catch((error) => console.log(error));

                worker.onmessage = (e) => {
                    const filteredData = e.data;
                    setPrimeiroFiltro(filteredData);
                };
            };

            teste();
        }
    }, [tipoVeicular]);

    // RECORTANDO OS DOIS ULTIMOS ZEROS APOS VIRGURA
    const TirarZeros = (e) => {
        const split = e.split(",");

        return split[0];
    };

    // NAVEGANDO PARA A TELA DO VEICULO EM SI
    const navVeiculo = (link) => {
        localStorage.setItem("modeloFipeConsultado", JSON.stringify(link));

        navigate(
            `/fipe/dados/${padronizarUrl(link.ModelValue)}/${String(
                link.YearCode
            )}/${link.FipeCode}/${link.Type}
            `
        );
    };

    return {
        titulo,
        param,
        primeiroFiltro,
        navVeiculo,
        TirarZeros,
    };
}
