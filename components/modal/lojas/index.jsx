import { Icon } from "@iconify/react/dist/iconify.js";

import "./style.min.css";
import { Helmet } from "react-helmet-async";
/////////////////////////////////////////////
/// MODAL APRESENTACAO DAS LOJAS ////////////
/////////////////////////////////////////////
export const ModalPadraoLojas = ({ children, botaoModal, handleModal }) => {
    return (
        <>
            <Helmet>
                <body
                    className={`paginaLojas ${botaoModal && "active"}`}
                ></body>
            </Helmet>

            <section
                className={`modalPadraoLojas ${
                    botaoModal ? "active" : "inactive"
                }`}
                onClick={() => handleModal(true)}
            >
                <section className="background">
                    <section
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <section
                            className={`containerItensModal ${
                                botaoModal ? "active" : "inactive"
                            }`}
                        >
                            <section className="conteudo">{children}</section>

                            <button onClick={handleModal} className="close">
                                <Icon icon="ic:round-close" />
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
};
/////////
// FIM //
/////////
