import ImgLoja from "../../../src/assets/img/inlions/noticias.jpg";

const InlionsUltimasNoticias = () => {
    return (
        <>
            <section className="tamanhoPadrao ultimasNoticias">
                <section className="containerUltimasNoticias">
                    <div className="barraTitulo">
                        <h3>Noticias recentes</h3>
                    </div>

                    <ul className="listagemNoticias">
                        <li>
                            <button>
                                <figure>
                                    <img src={ImgLoja} alt="" />

                                    <figcaption>
                                        <h4 className="titulo">Titulo 1</h4>
                                        <p className="descricao">
                                            The standard chunk of Lorem Ipsum
                                            used since the 1500s is reproduced
                                            below for those interested.
                                        </p>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>
                        <li>
                            <button>
                                <figure>
                                    <img src={ImgLoja} alt="" />

                                    <figcaption>
                                        <h4 className="titulo">Titulo 2</h4>
                                        <p className="descricao">
                                            The standard chunk of Lorem Ipsum
                                            used since the 1500s is reproduced
                                            below for those interested.
                                        </p>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>
                        <li>
                            <button>
                                <figure>
                                    <img src={ImgLoja} alt="" />

                                    <figcaption>
                                        <h4 className="titulo">Titulo 3</h4>
                                        <p className="descricao">
                                            The standard chunk of Lorem Ipsum
                                            used since the 1500s is reproduced
                                            below for those interested.
                                        </p>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>
                        <li>
                            <button>
                                <figure>
                                    <img src={ImgLoja} alt="" />

                                    <figcaption>
                                        <h4 className="titulo">Titulo 4</h4>
                                        <p className="descricao">
                                            The standard chunk of Lorem Ipsum
                                            used since the 1500s is reproduced
                                            below for those interested.
                                        </p>
                                    </figcaption>
                                </figure>
                            </button>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    );
};

export default InlionsUltimasNoticias;
