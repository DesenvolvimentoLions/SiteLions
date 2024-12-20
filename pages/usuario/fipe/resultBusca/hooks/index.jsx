import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const padronizarUrl = (url) => {
    return url
        .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .toLowerCase() // Converte para mulas
        .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
};
export default function useFipeResultBusca() {
    const navigate = useNavigate();
    const param = useParams();

    // ARMAZENA OS DADOS CRU
    const [dadosCru, setDadosCru] = useState([]);

    // ARMAZENA A ULTIMA LISTAGEM
    const [ultimaListagem, setUltimaListagem] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [descricaoVeiculo, setDescricaoVeiculo] = useState("");
    const [tipoVeicular, setTipoVeicular] = useState("");

    const navVeiculo = (link) => {
        localStorage.setItem("modeloFipeConsultado", JSON.stringify(link));

        navigate(
            `/fipe/dados/${padronizarUrl(link.ModelValue)}/${String(
                link.YearCode
            )}/${link.FipeCode}/${link.Type}`
        );
    };

    // PUXAR OS DADOS DO JSON
    const setandoDados = useCallback(async () => {
        const response = await fetch("/fipe.json");
        const jsonData = await response.json();

        setDadosCru(jsonData);
    });

    useEffect(() => {
        setandoDados();
    }, []);

    useEffect(() => {
        const dadosFiltrados = dadosCru.filter(
            (item) => String(item.FipeCode) == String(param.fipe)
        );

        console.log("Dados cru::::",dadosCru)

        const groupByYear = () => {
            const seenYears = new Set();
            const grupo = dadosFiltrados.reduce((acc, item) => {
                const year = item.YearCode.split("-")[0];
                acc.push({ year, ...item });
                seenYears.add(year);
                return acc;
            }, []);

            // Ordenar por ano
            return grupo.sort((a, b) => b.year - a.year);
        };

        console.log(groupByYear())

        setTitulo(dadosFiltrados[0]?.BrandValue);
        setDescricaoVeiculo(dadosFiltrados[0]?.ModelValue);
        setUltimaListagem(groupByYear());

        switch (dadosFiltrados[0]?.Type) {
            case "CAR":
                setTipoVeicular("Carros");
                break;
            case "MOTORCYCLE":
                setTipoVeicular("Motos");
                break;
            case "TRUCK":
                setTipoVeicular("Caminhões");
                break;
        }
    }, [dadosCru]);

    return {
        tipoVeicular,
        titulo,
        descricaoVeiculo,
        ultimaListagem,
        navVeiculo,
    };
}
