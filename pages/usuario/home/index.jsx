import MenuCliente from "../../../components/menu_client";

// IMPORTACAO DO CABECALHO DA PAGINA
import HomeHeader from "./header";

// IMPORTACAO DO COMPONENTE DE RENDERIZACAO
// DOS VIDEOS DA HOME PAGE
import HomeVideo from "../../../components/videos_home_page";

// IMPORTACAO DO VIDEO PARA EXIBIR EM TELA
import VideoTesla from "../../../src/assets/video/tesla.webm";
import CapaVideoTesla from "../../../src/assets/video/teslaImg.webp";

// IMPORTACAO DO ESTILO DA PAGINA
import "./style.min.css";
import HomeFerramentas from "./tools";
import FooterClient from "../../../components/footer_client";
import { useRef, useState } from "react";

const Home = () => {
    // REFERENCIA O HOME PARA A BARRA DE ROLAGEM ALTERAR A COR AO ROLAR
    const home = useRef(null);
    const [verificarScroll, setVerificarScroll] = useState();

    // VERIFICANDO SE A PÁGINA FOI SCROLLADA
    const handleScroll = () => {
        const container = home.current;

        if (container) {
            setVerificarScroll(container.scrollTop > 0);
        }
    };

    return (
        <>
            <MenuCliente verificarScroll={verificarScroll} />
            <section className="home" ref={home} onScroll={handleScroll}>
                <HomeHeader className="headerBody" />

                {/* VIDEO COM BARRA DE BUSCA */}
                <section className="centralizar">
                    <section className="containerVideo tamanhoPadrao">
                        <HomeVideo video={VideoTesla} poster={CapaVideoTesla} />

                        <div className="busca">
                            <input
                                type="text"
                                placeholder="Busque seu veículo"
                            />
                        </div>
                    </section>
                </section>

                {/* BARRA COM FERRAMENTAS NECESSÁRIAS */}
                <section className="centralizar">
                    <HomeFerramentas className="ferramentasBody" />
                </section>

                {/* VIDEO COM AGENDAMENTO DE VISITA */}
                <section className="centralizar">
                    <section className="containerVideo tamanhoPadrao">
                        <HomeVideo video={VideoTesla} poster={CapaVideoTesla} />

                        <div className="agendamento">
                            <h4>AGENDE UMA VISITA</h4>
                            <div className="flexContainer">
                                <button>IN HOUSE</button>
                                <button>EM LOJA</button>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="centralizar footer">
                    <FooterClient />
                </section>
            </section>
        </>
    );
};

export default Home;
