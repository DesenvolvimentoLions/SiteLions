import FooterClient from "../../../components/footer_client";
import MenuCliente from "../../../components/menu_client";
import PaginaCabecalhos from "../../../components/pagina_cabecalhos";
import TrabalheConoscoSlide from "./slider";

import cabecalhoMobile from "../../../src/assets/img/trabalheConosco/cabecalhoMobile.jpg";
import cabecalhoDesktop from "../../../src/assets/img/trabalheConosco/cabecalhoDesktop.jpg";
import veiculo from "../../../src/assets/img/trabalheConosco/veiculo.jpg";
import veiculoDesktop from "../../../src/assets/img/trabalheConosco/veiculoDesktop.jpg";
import representativoMobile from "../../../src/assets/img/trabalheConosco/representativoMobile.jpg";
import representativoDesktop from "../../../src/assets/img/trabalheConosco/representativoDesktop.jpg";

import "./style.min.css";

export default function TrabalheConosco() {
    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Blog Lions Seminovos"
                description="Novidades no mundo automotivo e muito mais! Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />
            <section className="containerTrabalheConosco">
                {/* HEADER */}
                <section className="headerTrabalheConosco">
                    <picture>
                        <source
                            media="(min-width:1024px)"
                            srcSet={cabecalhoDesktop}
                        />
                        <img
                            src={cabecalhoMobile}
                            alt="cabecalhoMobile"
                            draggable="false"
                        />
                    </picture>
                </section>

                <section className="tamanhoPadrao containerPadding">
                    {/* CONTAINER POR QUE EXISTIMOS */}
                    <div className="containerExistimos">
                        <div className="grid">
                            <div className="column">
                                <picture>
                                    <source
                                        media="(min-width:650px)"
                                        srcSet={veiculoDesktop}
                                    />
                                    <img
                                        src={veiculo}
                                        alt="Representativo de veículo"
                                        draggable="false"
                                    />
                                </picture>
                            </div>
                            <div className="column">
                                <h5>POR QUE EXISTIMOS?</h5>
                                <p>
                                    Viemos para equilibrar as forças entre os
                                    lojistas e os bancos, criando um mercado
                                    justo para que o empreendedor brasileiro
                                    seja protagonista nas suas decisões. Somos
                                    um ecossistema de empresas de tecnologia, na
                                    incansável busca das melhores soluções para
                                    apoiar integralmente a nossa razão: o
                                    empreendedor brasileiro. Nosso propósito é
                                    claro e nossa Cultura é única.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTAINER PARA AGRUPAR OS SLIDES COM AS VAGAS */}
                <TrabalheConoscoSlide />

                <section className="tamanhoPadrao containerPadding">
                    {/* CONTAINER POR QUE EXISTIMOS */}
                    <div className="containerExistimos">
                        <div className="grid">
                            <div className="column">
                                <picture>
                                    <source
                                        media="(min-width:650px)"
                                        srcSet={representativoDesktop}
                                    />
                                    <img
                                        src={representativoMobile}
                                        alt="Representativo de veículo"
                                        draggable="false"
                                    />
                                </picture>
                            </div>
                            <div className="column">
                                <h5>OPORTUNIDADE</h5>
                                <p>
                                    Prezamos pela constante criação de
                                    oportunidades para nossos colaboradores.
                                    Procuramos profissionais que estejam
                                    buscando uma oportunidade para se
                                    desenvolverem diariamente, sempre almejando
                                    uma constante evolução como indivíduos e
                                    profissionais do mercado de trabalho. Com
                                    dedicação e esforço, é garantido que
                                    oportunidades surgirão na trajetória de
                                    nossas profissionais.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <FooterClient />
        </>
    );
}
