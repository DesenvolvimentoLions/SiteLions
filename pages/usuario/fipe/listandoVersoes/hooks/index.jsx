import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useListandoVersoes() {
    const param = useParams();

    const [tipoVeicular, setTipoVeicular] = useState("");

    // ARMAZENA O PRIMEIRO FILRO
    const [primeiroFiltro, setPrimeiroFiltro] = useState([]);

    // ARMAZENA A ULTIMA LISTAGEM
    const [ultimaListagem, setUltimaListagem] = useState([]);

    // PEGA O TITULO DA PAGINA NO LOCALSTORAGE
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

    // REALIZA O FILTRO COM WEB WORKER
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
                            modelo: param.modelo,
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

    useEffect(() => {
        const groupByYear = () => {
            const seenYears = new Set();
            const grupo = primeiroFiltro.reduce((acc, item) => {
                const year = item.YearCode.split("-")[0];
                if (!seenYears.has(year)) {
                    acc.push({ year, ...item });
                    seenYears.add(year);
                }
                return acc;
            }, []);

            // Ordenar por ano
            return grupo.sort((a, b) => b.year - a.year);
        };

        setUltimaListagem(groupByYear());
    }, [primeiroFiltro]);

    const navigate = useNavigate();
    const navVersoes = (link, ano) => {
        navigate(`./${ano}`);
    };

    return {
        param,
        titulo,
        ultimaListagem,
        navVersoes,
    };
}
