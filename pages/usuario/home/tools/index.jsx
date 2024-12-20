import { NavLink } from "react-router-dom";

// IMPORTACAO DOS ICONES
import Financiamento from "../../../../src/assets/img/icons/clientes/Financiamento.svg?react";
import Fipe from "../../../../src/assets/img/icons/clientes/Fipe.svg?react";
import Lojas from "../../../../src/assets/img/icons/clientes/lojas.svg?react";
import Blog from "../../../../src/assets/img/icons/clientes/blog.svg?react";
import PosVenda from "../../../../src/assets/img/icons/clientes/posVenda.svg?react";

// IMPORTACAO DA ESTILIZACAO
import "./style.min.css";


const ClienteIconesBody = ({ icone, link, descricao }) => {
    return (
        <NavLink to={link} className="clienteIconeBody">
            <span className="icone">{icone}</span>
            <p>{descricao}</p>
        </NavLink>
    );
};

export default function HomeFerramentas(props) {
    return (
        <>
            <section className={props.className}>
                <div className="titulosCard">
                    <h4>NOSSAS FERRAMENTAS</h4>
                </div>

                <div className="containerFerramentas">
                    <ClienteIconesBody
                        icone={<Financiamento />}
                        link="#"
                        descricao="Financiamento"
                    />
                    <ClienteIconesBody
                        icone={<Fipe />}
                        link="/fipe"
                        descricao="Fipe"
                    />
                    <ClienteIconesBody
                        icone={<Lojas />}
                        link="/lojas"
                        descricao="Lojas"
                    />
                    <ClienteIconesBody
                        icone={<Blog />}
                        link="/blog"
                        descricao="Blog"
                    />
                    <ClienteIconesBody
                        icone={<PosVenda />}
                        link="/pos-venda"
                        descricao="Pós venda"
                    />
                </div>
            </section>
        </>
    );
}
