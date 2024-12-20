import { NavLink } from "react-router-dom";

// IMPORTACAO DA LOGO DA EMPRESA E DAS REDES SOCIAIS
import Logo from "../../src/assets/img/logoWhite.svg?react";
import Instagram from "../../src/assets/img/icons/socialMedia/insta2.svg?react";
import Facebook from "../../src/assets/img/icons/socialMedia/facebook.svg?react";

import "./style.min.css";
import { useHookMenu } from "./hooks/hookPersonalizado";

const MenuCliente = (props) => {
    const { rota, scrollPosition, btnMenuMobile, mudarBotao } = useHookMenu();

    return (
        <section
            className={`navBar ${
                props.verificarScroll || scrollPosition > 0 ? "active" : ""
            } ${rota != "/" ? "sticky" : ""}`}
            style={{
                backgroundColor:
                    props.backgroundMenu || btnMenuMobile
                        ? "rgba(0, 0, 0, 0.63)"
                        : "",
            }}
        >
            <section className="tamanhoPadrao containerNav">
                <figure className="logo">
                    <NavLink to={"/"}>
                        <Logo />
                    </NavLink>
                </figure>

                <section className="containerMenu">
                    <button
                        className={`iconeMobile ${btnMenuMobile && "active"}`}
                        onClick={mudarBotao}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`navegacao ${btnMenuMobile && "active"}`}>
                        <ul>
                            <li>
                                <NavLink>Financiamento</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/fipe"}
                                    onClick={() => mudarBotao()}
                                >
                                    Fipe
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/lojas"}
                                    onClick={() => mudarBotao()}
                                >
                                    Lojas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/blog"}
                                    onClick={() => mudarBotao()}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>Pós venda</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/catalogo"}>Catálogo</NavLink>
                            </li>
                            <li>
                                <NavLink>Agendar uma visita</NavLink>
                            </li>
                        </ul>

                        <div className="socialMidiaMobileMenu">
                            <div>
                                <NavLink>
                                    <figure>
                                        <Instagram />
                                    </figure>
                                </NavLink>
                                <NavLink>
                                    <figure>
                                        <Facebook />
                                    </figure>
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </section>

                <div className="socialMidiaDesktopMenu">
                    <div>
                        <NavLink>
                            <figure>
                                <Instagram />
                            </figure>
                        </NavLink>
                        <NavLink>
                            <figure>
                                <Facebook />
                            </figure>
                        </NavLink>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default MenuCliente;
