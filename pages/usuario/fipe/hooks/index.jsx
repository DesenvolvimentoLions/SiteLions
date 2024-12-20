import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//////////////////////////////////////
// HOOKS PARA A TELA INCIAL DA FIPE //
//////////////////////////////////////
export function useFipe() {
    // NEVGA PARA A DETERMINADA PAGINA
    const navigate = useNavigate();

    // CAPTURANDO OS DADOS DA BUSCA
    const [dadosForm, setDadosForm] = useState("");

    // CONSTANTE PARA VERIFICAR A ABERTURA DO RESULTADO DA BUSCA
    const [abrirBusca, setAbrirBusca] = useState(false);

    // REFERENCIA O INPUT DE BUSCA
    const buscaRef = useRef(null);

    // FUNCAO PARA VERIFICAR SE O USUARIO CLICOU FORA DO CONTAINER
    // DE RESUTLADO DE BUSCA
    const AoClicarFora = (e) => {
        if (buscaRef.current && !buscaRef.current.contains(e.target)) {
            setAbrirBusca(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", AoClicarFora);

        return () => {
            document.removeEventListener("mousedown", AoClicarFora);
        };
    }, []);

    // PADRONIZANDO A URL PARA SER PASSADA NO CORPO DA URL
    const padronizarUrl = (url) => {
        return url
            .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
            .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
            .toLowerCase() // Converte para mulas
            .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
    };

    // FUNCAO PARA NAVEGACAO PARA PROXIMA PAGINA
    const navModelo = (link) => {
        const linkSplit = link.split("/")[1];
        const padrao = padronizarUrl(linkSplit);

        localStorage.setItem("nomeMarca", linkSplit);

        // NAVEGA PARA O COMPONENTE LISTA MODELO
        navigate(`./${link.split("/")[0]}/${padrao}`);
    };

    return {
        navigate,
        dadosForm,
        setDadosForm,
        abrirBusca,
        setAbrirBusca,
        buscaRef,
        padronizarUrl,
        navModelo,
    };
}
///////////
/// FIM ///
///////////


