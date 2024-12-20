import FooterClient from "../../components/footer_client";
import PaginaCabecalhos from "../../components/pagina_cabecalhos";

import Resultados from "../../src/assets/img/investidores/icones/resultados.svg?react";
import Apresentacao from "../../src/assets/img/investidores/icones/apresentacao.svg?react";
import PlanoNegocio from "../../src/assets/img/investidores/icones/planoNegocios.svg?react";

import Vehicle from "../../src/assets/img/investidores/icones/spots/vehicles.svg?react";
import Share from "../../src/assets/img/investidores/icones/spots/share.svg?react";
import Crescimento from "../../src/assets/img/investidores/icones/spots/crescimento.svg?react";

import "./style.min.css";
import MenuInvestidores from "../../components/menu_investidores";

export default function PageInvestidores() {
    return (
        <>
            <MenuInvestidores />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />
            <section className="containerInvestidores">
                <section className="header"></section>

                {/* BARRA DESTACADA DE NAVEGACAO */}
                <ul className="destaqueBarraNavegacao tamanhoPadrao">
                    <li>
                        <a href="#">
                            <span className="icone">
                                <Resultados />
                            </span>
                            Resultados
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icone">
                                <Apresentacao />
                            </span>
                            Apresentação
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icone">
                                <PlanoNegocio />
                            </span>
                            Plano de Negócio
                        </a>
                    </li>
                </ul>

                <section className="spots">
                    <section className="tamanhoPadrao">
                        <h1>Somos o maior dealer independente do Brasil </h1>
                        <h5>
                            A LIONS expandiu, evoluiu, multiplicou seus negócios
                            e, ao longo de sua trajetória, se tornou o maior
                            dealer independente do Brasil, sempre buscando
                            revolucionar o mercado de vendas automotivas com
                            cada vez mais inovações.
                        </h5>

                        <ul className="listaSpots">
                            <li>
                                <span className="iconeSpot">
                                    <Vehicle />
                                </span>
                                <h5>+ de 20mil</h5>
                                <p>Carros vendidos e sonhos realizados</p>
                            </li>
                            <li>
                                <span className="iconeSpot">
                                    <Crescimento />
                                </span>
                                <h5>Crescimento</h5>
                                <p>
                                    Empresa em constate evolução e crescimento
                                </p>
                            </li>
                            <li>
                                <span className="iconeSpot">
                                    <Share />
                                </span>
                                <h5>Market Share</h5>
                                <p>
                                    Entre os revendedores independentes do
                                    Brasil
                                </p>
                            </li>

                            <li>
                                <span className="iconeSpot">
                                    <Vehicle />
                                </span>
                                <h5>+ de 20mil</h5>
                                <p>Carros vendidos e sonhos realizados</p>
                            </li>
                            <li>
                                <span className="iconeSpot">
                                    <Crescimento />
                                </span>
                                <h5>Crescimento</h5>
                                <p>
                                    Empresa em constate evolução e crescimento
                                </p>
                            </li>
                            <li>
                                <span className="iconeSpot">
                                    <Share />
                                </span>
                                <h5>Market Share</h5>
                                <p>
                                    Entre os revendedores independentes do
                                    Brasil
                                </p>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
            <FooterClient />
        </>
    );
}
