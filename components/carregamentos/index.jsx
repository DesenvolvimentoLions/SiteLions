// import Logo from "../../assets/img/logoWhite.svg?react";
import Logo from "../../src/assets/img/logoWhite.svg?react";

import "./style.min.css";

const CarregamentoLogo = ({ color }) => {
    return (
        <section className="carregamentoLogo">
            <figure className={`${color ? "black" : ""}`}>
                <Logo />
                <figcaption>Carregando...</figcaption>
            </figure>
        </section>
    );
};

export default CarregamentoLogo;
