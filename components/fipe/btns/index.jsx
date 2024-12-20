import { useNavigate } from "react-router-dom";
// import "./style.min.css";
import { Icon } from "@iconify/react/dist/iconify.js";


import "./style.min.css";

export const FipeTitulo = ({ children }) => {
    return <section className="tituloFipe">{children}</section>;
};

export const BtnVoltar = ({ pagina }) => {
    const history = useNavigate();

    return (
        <section className="navegacaoFipe">
            <button onClick={() => history(-1)} className="btnVoltar">
                <Icon icon="mingcute:arrow-left-fill" />
            </button>

            <h5>{pagina}</h5>
        </section>
    );
};
