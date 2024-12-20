import { useEffect, useState } from "react";

export default function useMenuInvestidores() {
    const [btnMenuMobile, setBtnMenuMobile] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);

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
    return { scrollPosition, btnMenuMobile, mudarBotao };
}
