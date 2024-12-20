import { useState } from "react";
import FooterClient from "../../../components/footer_client";
import MenuCliente from "../../../components/menu_client";
import PaginaCabecalhos from "../../../components/pagina_cabecalhos";
import { ModalPadraoLojas } from "../../../components/modal/lojas";
import ContainerLojas from "./containerLojas";

import {
    dadosLojasRioDeJaneiro,
    dadosLojasSaoPaulo,
    dadosLojasOrlando,
} from "./dadosTemp";

import "./style.min.css";

export default function Lojas() {
    const [modal, setModal] = useState(false);
    const [dadosRetorno, setDadosRetorno] = useState([]);

    const handleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <PaginaCabecalhos
                title="Lojas | Lions Seminovos"
                description="Conhecendo as lojas Lions Seminovos"
                url="https://www.lionsseminovos.com.br/lojas"
            />
            <MenuCliente />

            {/* //////////////////////////////////////////// */}
            {/* //////// MODAL DAS LOJAS /////////////////// */}
            {/* //////////////////////////////////////////// */}
            <ModalPadraoLojas handleModal={handleModal} botaoModal={modal}>
                <section
                    className={`conteudoModal ${modal ? "active" : "inactive"}`}
                >
                    <div className={`imgLoja`}>
                        <img
                            src={dadosRetorno.img}
                            alt={dadosRetorno.nomeLoja}
                        />
                    </div>

                    <div className={`descricaoLoja`}>
                        <h5>{dadosRetorno.nomeLoja}</h5>
                        <p>{dadosRetorno.enderecoLoja}</p>
                    </div>

                    <div className="horarios">
                        <h5>NOSSOS HORÁRIOS</h5>
                        <div className="hora">
                            <p>
                                <span>Seg a sex</span>
                                {dadosRetorno.horarios?.SegSexta}
                            </p>
                            <p>
                                <span>Sábado</span>
                                {dadosRetorno.horarios?.Sabado}
                            </p>
                            <p>
                                <span>Domingo</span>
                                {dadosRetorno.horarios?.Domingo}
                            </p>
                        </div>
                    </div>

                    <div className={`btnVerNoMapa`}>
                        <a href="#">Ver no mapa</a>
                    </div>

                    <div className={`btnAgendamento`}>
                        <button>
                            <p>Agende sua visita</p>
                        </button>
                    </div>
                </section>
            </ModalPadraoLojas>
            {/* //////////////////////////////////////// */}

            <section className="containerLojas">
                <section className="tamanhoPadrao2">
                    <ContainerLojas
                        titulo="RIO DE JANEIRO"
                        dados={dadosLojasRioDeJaneiro}
                        handleModal={handleModal}
                        dadosRetorno={(e) => setDadosRetorno(e)}
                    />
                    <ContainerLojas
                        titulo="São paulo"
                        dados={dadosLojasSaoPaulo}
                        handleModal={handleModal}
                        dadosRetorno={(e) => setDadosRetorno(e)}
                    />
                    <ContainerLojas
                        titulo="Orlando"
                        dados={dadosLojasOrlando}
                        handleModal={handleModal}
                        dadosRetorno={(e) => setDadosRetorno(e)}
                    />
                </section>
            </section>

            <FooterClient />
        </>
    );
}
