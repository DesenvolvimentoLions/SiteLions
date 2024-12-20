import { Link } from "react-router-dom";
import FooterClient from "../../../../components/footer_client";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";

import Img from "../../../../src/assets/img/trabalheConosco/imgVagas/vaga.jpg";

import "./style.min.css";

export default function TrabalheConocoscoVaga() {
    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Blog Lions Seminovos"
                description="Novidades no mundo automotivo e muito mais! Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerVaga">
                <section className="containerWidth">
                    <section className="vaga">
                        <h1>Vaga para Mecânico</h1>

                        <div className="descricao">
                            <p>
                                Viemos para equilibrar as forças entre os
                                lojistas e os bancos, criando um mercado justo
                                para que o empreendedor brasileiro seja
                                protagonista nas suas decisões. Somos um
                                ecossistema de empresas de tecnologia, na
                                incansável busca das melhores soluções para
                                apoiar integralmente a nossa razão: o
                                empreendedor brasileiro. Nosso propósito é claro
                                e nossa Cultura é única. Viemos para equilibrar
                                as forças entre os lojistas e os bancos, criando
                                um mercado justo para que o empreendedor
                                brasileiro seja protagonista nas suas decisões.
                                Somos um ecossistema de empresas de tecnologia,
                                na incansável busca das melhores soluções para
                                apoiar integralmente a nossa razão: o
                                empreendedor brasileiro. Nosso propósito é claro
                                e nossa Cultura é única. Viemos para equilibrar
                                as forças entre os lojistas e os bancos, criando
                                um mercado justo para que o empreendedor
                                brasileiro seja protagonista nas suas decisões.
                                Somos um ecossistema de empresas de tecnologia,
                                na incansável busca das melhores soluções para
                                apoiar integralmente a nossa razão: o
                                empreendedor brasileiro. Nosso propósito é claro
                                e nossa Cultura é única. Viemos para equilibrar
                                as forças entre os lojistas e os bancos, criando
                                um mercado justo para que o empreendedor
                                brasileiro seja protagonista nas suas decisões.
                                Somos um ecossistema de empresas de tecnologia,
                                na incansável busca das melhores soluções para
                                apoiar integralmente a nossa razão: o
                                empreendedor brasileiro.
                            </p>
                        </div>
                    </section>
                    <section className="imgRepresentativa">
                        <figure>
                            <img
                                draggable="false"
                                src={Img}
                                alt="Img relativa a vaga"
                            />
                            <figcaption>
                                <Link>Inscreva-se</Link>
                                <Link to={"/trabalheConosco"}>
                                    Voltar para vagas
                                </Link>
                            </figcaption>
                        </figure>
                    </section>
                </section>
            </section>

            <FooterClient />
        </>
    );
}
