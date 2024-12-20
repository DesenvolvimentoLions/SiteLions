import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CAMINHOES, CARROS, MOTOS } from "../../marcas";

const padronizarUrl = (url) => {
    return url
        .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .toLowerCase() // Converte para mulas
        .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
};

export default function useListandoMarcas() {
    // NAVEGACAO
    const navigate = useNavigate();

    // PEGANDOS OS PARAMETROS DA URL
    const param = useParams();

    // TIPO DE VEICULO
    const [tipoVeicular, setTipoVeicular] = useState("");

    // LISTAGEM DAS MARCAS
    const [listagemMarcasPadrao, setListagemMarcaPadrao] = useState([]);

    // TITULO DA PAGINA
    const [tituloPagina, setTituloPagina] = useState("");

    // PEGA OS DADOS DA BUSCA
    const [dadosBusca, setDadosBusca] = useState("");
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    // TRAZENDO OS DADOS
    const [dadosExibidos, setDadosExibidos] = useState([]);

    // FAZENDO A BUSCA
    useEffect(() => {
        const buscaVeicular = dadosExibidos.filter((item) => {
            return item.BrandValue.toLocaleLowerCase().includes(
                dadosBusca.toLocaleLowerCase()
            );
        });

        if (dadosBusca.length == 0) {
            setDadosFiltrados([]);
        } else {
            setDadosFiltrados(buscaVeicular);
        }
    }, [dadosBusca]);

    // SETANDO O TIPO DE VEICULO
    useEffect(() => {
        switch (param.veiculo) {
            case "carros":
                setTipoVeicular("CAR");
                setListagemMarcaPadrao(CARROS);
                setTituloPagina("Carros");
                break;
            case "caminhoes":
                setTipoVeicular("TRUCK");
                setListagemMarcaPadrao(CAMINHOES);
                setTituloPagina("Caminhoes");
                break;
            default:
                setTipoVeicular("MOTORCYCLE");
                setTituloPagina("Motos");
                setListagemMarcaPadrao(MOTOS);
                break;
        }
    }, []);

    // PUXAR OS DADOS DO JSON

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
                        });
                    })
                    .catch((error) => console.log(error));

                worker.onmessage = (e) => {
                    console.log(e.data);
                    setDadosExibidos(e.data);
                };
            };

            teste();
        }
    }, [tipoVeicular]);

    const navModelo = (link, veiculoGet) => {
        const linkSplit = link;
        const padrao = padronizarUrl(linkSplit);

        localStorage.setItem("nomeMarca", linkSplit);
        let veiculo = veiculoGet;
        switch (veiculoGet) {
            case "CAR":
                veiculo = "carros";
                break;
            case "TRUCK":
                veiculo = "caminhoes";
                break;
            default:
                veiculo = "motos";
                break;
        }

        // NAVEGA PARA O COMPONENTE LISTA MODELO
        navigate(`/fipe/${veiculo}/${padrao}`);
    };

    return {
        setDadosBusca,
        dadosExibidos,
        dadosFiltrados,
        dadosBusca,
        listagemMarcasPadrao,
        tituloPagina,
        navModelo,
    };
}
