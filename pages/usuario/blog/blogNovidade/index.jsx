import { NavLink } from "react-router-dom";
import { Novidades } from "./dadosTemp";

import "./style.min.css";

export default function BlogComponentNovidade({ reverse, titulo }) {
    return (
        <>
            <section className={`componenteNovidade ${reverse && "reverse"}`}>
                <section className="containerTitulo">
                    <h2>{titulo}</h2>
                </section>

                <section className="containerGeral">
                    {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                    <NavLink
                        to={`/blog/noticia/${Novidades[0].id}/${Novidades[0].title}`}
                        className="containerBLog container1 cardMiniBlog"
                    >
                        <picture className="imgs">
                            <source
                                type="image/jpg"
                                srcSet={Novidades[0].imgMobile}
                                sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                            />
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={Novidades[0].title}
                                alt={Novidades[0].title}
                                src={Novidades[0].img}
                            />
                        </picture>

                        <div className="titulo">
                            <p>{Novidades[0].title}</p>
                        </div>
                    </NavLink>

                    {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                    <NavLink
                        to={`/blog/noticia/${Novidades[1].id}/${Novidades[1].title}`}
                        className="containerBLog container2 cardMiniBlog"
                    >
                        <picture className="imgs">
                            <source
                                type="image/jpg"
                                srcSet={Novidades[1].imgMobile}
                                sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                            />
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={Novidades[1].title}
                                alt={Novidades[1].title}
                                src={Novidades[1].img}
                            />
                        </picture>

                        <div className="titulo">
                            <p>{Novidades[1].title}</p>
                        </div>
                    </NavLink>

                    {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                    <NavLink
                        to={`/blog/noticia/${Novidades[2].id}/${Novidades[2].title}`}
                        className="containerBLog container3 cardMiniBlog"
                    >
                        <picture className="imgs">
                            <source
                                type="image/jpg"
                                srcSet={Novidades[2].imgMobile}
                                sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                            />
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={Novidades[2].title}
                                alt={Novidades[2].title}
                                src={Novidades[2].img}
                            />
                        </picture>

                        <div className="titulo">
                            <p>{Novidades[2].title}</p>
                        </div>
                    </NavLink>

                    {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                    <NavLink
                        to={`/blog/noticia/${Novidades[3].id}/${Novidades[3].title}`}
                        className="containerBLog container4 cardMiniBlog"
                    >
                        <picture className="imgs">
                            <source
                                type="image/jpg"
                                srcSet={Novidades[3].imgMobile}
                                sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                            />
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={Novidades[3].title}
                                alt={Novidades[3].title}
                                src={Novidades[3].img}
                            />
                        </picture>

                        <div className="titulo">
                            <p>{Novidades[3].title}</p>
                        </div>
                    </NavLink>

                    {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                    <NavLink
                        to={`/blog/noticia/${Novidades[4].id}/${Novidades[4].title}`}
                        className="containerBLog container5 cardMiniBlog"
                    >
                        <picture className="imgs">
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={Novidades[4].title}
                                alt={Novidades[4].title}
                                src={Novidades[4].img}
                            />
                        </picture>

                        <div className="titulo principal">
                            <p>{Novidades[4].title}</p>
                        </div>
                    </NavLink>
                </section>
            </section>
        </>
    );
}
