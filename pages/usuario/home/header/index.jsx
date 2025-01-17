import { useEffect, useState } from "react";

// IMPORTACAO DA IMAGEM DE CABECALHO DO SITE
import HeaderMobile from "../../../../src/assets/img/banner/bannerFull.webp";
import HeaderDesktop from "../../../../src/assets/img/banner/bannerDesktop.webp";

const { innerWidth: width } = window;

import "./style.min.css";
import useHookHeaderHomePage from "./hook";

export default function HomeHeader(props) {
    const { data } = useHookHeaderHomePage();
    console.log(data);

    const [imgHeader, setImgHeader] = useState(null);

    useEffect(() => {
        if (width < 860) {
            setImgHeader(HeaderMobile);
        } else {
            setImgHeader(HeaderDesktop);
        }
    }, []);

    return (
        <header
            className={props.className}
            style={{ backgroundImage: `url(${imgHeader})`, height: "100vh" }}
        >
            <section className="descricao tamanhoPadrao">
                <h1>Conheça nossas condições exclusivas</h1>
                <p>
                    Estamos com condições especiais para você que é apaixonado
                    pelas versões SUV
                </p>

                <div className="btnSaibaMais">
                    <a href="#">Saiba Mais</a>
                </div>
            </section>
        </header>
    );
}
