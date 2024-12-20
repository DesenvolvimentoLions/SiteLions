import { NavLink } from "react-router-dom";

import { DadosBlog, PrincipaisNoticias } from "./dadosTemp";

import "./style.min.css";

export default function BlogComponentHeader() {
    // PARA APAGAR
    const lancarCookie = (e) => {
        localStorage.setItem("paraApagar", JSON.stringify(e));
    };

    return (
        <>
            <section className="gridContainerHeader">
                {/* CARD PEQUENO COM A PRIMEIRA IMAGEM */}
                <NavLink
                    to={`/blog/noticia/${DadosBlog[1].id}/${DadosBlog[1].title}`}
                    className="containerBLog container1 cardMiniBlog"
                    onClick={() => lancarCookie(DadosBlog[1])}
                >
                    <picture className="imgs">
                        <source
                            type="image/jpg"
                            srcSet={DadosBlog[1].imgMobile}
                            sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                        />
                        <img
                            className="MuiBox-root css-15fi12k"
                            loading="lazy"
                            title={DadosBlog[1].title}
                            alt={DadosBlog[1].title}
                            src={DadosBlog[1].img}
                        />
                    </picture>

                    <div className="categoria">
                        <h5>{DadosBlog[1].category}</h5>
                    </div>
                    <div className="titulo">
                        <p>{DadosBlog[1].title}</p>
                    </div>
                </NavLink>

                {/* CARD PEQUENO COM A SEGUNDA IMAGEM */}
                <NavLink
                    to={`/blog/noticia/${DadosBlog[2].id}/${DadosBlog[2].title}`}
                    className="containerBLog container2 cardMiniBlog"
                    onClick={() => lancarCookie(DadosBlog[2])}
                >
                    <picture className="imgs">
                        <source
                            type="image/jpg"
                            srcSet={DadosBlog[2].imgMobile}
                            sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                        />
                        <img
                            loading="lazy"
                            title={DadosBlog[2].title}
                            alt={DadosBlog[2].title}
                            src={DadosBlog[2].img}
                        />
                    </picture>
                    <div className="categoria">
                        <h5>{DadosBlog[2].category}</h5>
                    </div>
                    <div className="titulo">
                        <p>{DadosBlog[2].title}</p>
                    </div>
                </NavLink>

                {/* CARD GRANDE PRINCIPAL */}
                <NavLink
                    to={`/blog/noticia/${DadosBlog[0].id}/${DadosBlog[0].title}`}
                    className="containerBLog container3"
                    onClick={() => lancarCookie(DadosBlog[0])}
                >
                    <picture className="imgs">
                        <img
                            loading="lazy"
                            title={DadosBlog[0].title}
                            alt={DadosBlog[0].title}
                            src={DadosBlog[0].img}
                        />
                    </picture>
                    <div className="categoria">
                        <h5>{DadosBlog[0].category}</h5>
                    </div>
                    <div className="titulo">
                        <p>{DadosBlog[0].title}</p>
                    </div>
                </NavLink>

                {/* LISTA COM AS PRINCIPAIS NOTICIAS */}
                <section className="listaPrincipalNoticia container4 ">
                    <h5 className="fonteBlogTitulo tituloPrincipalNoticia">
                        Principais noticias
                    </h5>

                    <ul className="lista">
                        {PrincipaisNoticias.map((item, index) => (
                            <li key={index}>
                                <NavLink>
                                    <div className="categoria">
                                        <h5>{item.category}</h5>
                                    </div>
                                    <div className="titulo">
                                        <p>{item.title}</p>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
}
