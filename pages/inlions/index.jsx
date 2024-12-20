import FooterClient from "../../components/footer_client";
import MenuCliente from "../../components/menu_client";
import PaginaCabecalhos from "../../components/pagina_cabecalhos";
import InLionsHeader from "./header";
import InlionsListaServicos from "./listaServicos";

import "./style.min.css";
import InlionsUltimasNoticias from "./ultimasNoticias";

export default function InLions() {
    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Blog Lions Seminovos"
                description="Novidades no mundo automotivo e muito mais! Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerInlions">
                <InLionsHeader />

                <InlionsListaServicos />

                <InlionsUltimasNoticias />
            </section>

            <FooterClient />
        </>
    );
}
