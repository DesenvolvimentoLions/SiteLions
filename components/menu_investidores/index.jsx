import { NavLink } from "react-router-dom";
import Logo from "../../src/assets/img/logoWhite.svg?react";

import "./style.min.css";
import useMenuInvestidores from "./hooks";

export default function MenuInvestidores() {
    const { scrollPosition, btnMenuMobile, mudarBotao } = useMenuInvestidores();

    return (
        <>
            <section
                className={`navBar sticky ${
                    scrollPosition > 0 && "active"
                } investidores`}
            >
                <section className="tamanhoPadrao containerNav">
                    <figure className="logo">
                        <NavLink to="/investidores">
                            <Logo />
                        </NavLink>
                    </figure>

                    <section className="containerMenu">
                        <button
                            className={`iconeMobile ${
                                btnMenuMobile && "active"
                            }`}
                            onClick={mudarBotao}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav
                            className={`navegacao ${btnMenuMobile && "active"}`}
                        >
                            <ul>
                                <li>
                                    <NavLink>Sobre a Lions</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/fipe"}
                                        onClick={() => mudarBotao()}
                                    >
                                        Informações Financeiras
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/lojas"}
                                        onClick={() => mudarBotao()}
                                    >
                                        Arquivos CVM
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"/blog"}
                                        onClick={() => mudarBotao()}
                                    >
                                        Cadastre-se no Mailing
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </section>
            </section>
        </>
    );
}
