import Ceo from "../../../src/assets/img/inlions/ceo.jpg";
import Noticia from "../../../src/assets/img/inlions/noticias.jpg";

export default function InLionsHeader() {
    return (
        <main>
            <section className="header tamanhoPadrao">
                {/* MENSAGEM DO CEO */}
                <div className="msgCeo">
                    <div className="msg">
                        <h4>Mensagem do CEO</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras nec massa a lacus ullamcorper dapibus.
                            Donec viverra lectus nec faucibus semper.
                            Suspendisse elementum laoreet mauris eget dictum.
                            Sed eget fringilla mi. Suspendisse porttitor
                            ullamcorper elit, at porta ante ultrices nec. Sed
                            aliquam, purus et dapibus sollicitudin.
                        </p>
                    </div>

                    <picture className="imgCeo">
                        <img src={Ceo} alt="ImgCeo" />
                    </picture>
                </div>

                {/* LISTA DE ULTIMAS NOTICIAS */}
                <div className="ultimasNoticias">
                    <h2>Ultimas noticias</h2>

                    <ul className="listaNoticias">
                        <li>
                            <button>
                                <div className="img">
                                    <picture>
                                        <img
                                            src={Noticia}
                                            alt="Imagem da noticia"
                                        />
                                    </picture>
                                </div>

                                <div className="descritivo">
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras nec massa a lacus
                                        ullamcorper dapibus.
                                    </p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button>
                                <div className="img">
                                    <picture>
                                        <img
                                            src={Noticia}
                                            alt="Imagem da noticia"
                                        />
                                    </picture>
                                </div>

                                <div className="descritivo">
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras nec massa a lacus
                                        ullamcorper dapibus.
                                    </p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button>
                                <div className="img">
                                    <picture>
                                        <img
                                            src={Noticia}
                                            alt="Imagem da noticia"
                                        />
                                    </picture>
                                </div>

                                <div className="descritivo">
                                    <h5>Lorem Ipsum</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Cras nec massa a lacus
                                        ullamcorper dapibus.
                                    </p>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
