import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHookMenu = () => {
    const rota = useLocation().pathname;

    const [scrollPosition, setScrollPosition] = useState(0);

    const [btnMenuMobile, setBtnMenuMobile] = useState(false);

    // FUNCAO PARA MUDAR O BOTAO DE MENU MOBILE
    const mudarBotao = () => {
        setBtnMenuMobile(!btnMenuMobile);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Captura a posição vertical do scroll
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup: Remove o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        rota,
        scrollPosition,
        btnMenuMobile,
        mudarBotao,
    };
};
