import FooterClient from "../../../components/footer_client";
import MenuCliente from "../../../components/menu_client";
import PaginaCabecalhos from "../../../components/pagina_cabecalhos";
// import BlogDemaisNoticiasHome from "./blogDemaisNoticiasHome";
import BlogComponentHeader from "./blogHeader";
import BlogComponentNovidade from "./blogNovidade";
import BlogComponentSlide from "./blogSlide";

import "./style.min.css";

export default function Blog() {
    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Blog Lions Seminovos"
                description="Novidades no mundo automotivo e muito mais! Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerBlog">
                <section className="tamanhoPadrao">
                    <div className="containerTitulo">
                        <h1 className="fonteBlogTitulo">
                            Mantenha-se Informado
                        </h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Faça sua busca aqui!"
                                required
                            />
                        </form>
                    </div>

                    <BlogComponentHeader />

                    <div style={{ marginTop: "10rem" }}></div>
                    <BlogComponentNovidade titulo="NOVAS NOTÍCIAS" />
                    <div style={{ marginTop: "10rem" }}></div>
                    <BlogComponentNovidade titulo="DUAS RODAS" reverse={true} />
                    <div style={{ marginTop: "10rem" }}></div>
                    {/* <BlogDemaisNoticiasHome /> */}

                    <div className="btnVerMais">
                        <button>Ver mais notícias!</button>
                    </div>

                    <div style={{ marginTop: "10rem" }}></div>
                    <BlogComponentSlide titulo="ACONTECIMENTOS DA SEMANA" />
                </section>
            </section>

            <FooterClient />
        </>
    );
}
