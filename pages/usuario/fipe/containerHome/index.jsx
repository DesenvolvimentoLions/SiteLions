import { NavLink, useNavigate } from "react-router-dom";

import "./style.min.css";

const padronizarUrl = (url) => {
    return url
        .normalize("NFD") // Normaliza a string para decompor caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
        .toLowerCase() // Converte para mulas
        .replace(/[^a-z0-9\s-]/g, ""); // Remove caracteres especiais, mantendo apenas letras, números e espaços
};

const FipePrincipal = ({ dados, titulo, linkMais }) => {
    const navigate = useNavigate();

    /////////////////////////////
    // NAVEGANDO PARA O MODELO //
    /////////////////////////////
    const navModelo = (link) => {
        const linkSplit = link.split("/")[1];
        const padrao = padronizarUrl(linkSplit);

        localStorage.setItem("nomeMarca", linkSplit);

        // NAVEGA PARA O COMPONENTE LISTA MODELO
        navigate(`/fipe/${link.split("/")[0]}/${padrao}`);
    };
    return (
        <>
            <section className="containerMarcas">
                <div className="tituloContainer">
                    <h3>PRINCIPAIS MARCAS DE {titulo}</h3>
                </div>

                <div className="containerFlex">
                    <div
                        className={`marcas ${linkMais ? "" : "tamanhoMaximo"}`}
                    >
                        {dados.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    navModelo(item.link, item.descricao);
                                }}
                                title={item.descricao}
                                className="linkMarcas"
                            >
                                <div className="icone">{item.icone}</div>
                            </button>
                        ))}
                    </div>

                    {linkMais && (
                        <NavLink to={linkMais} className="verMais">
                            OUTRAS MARCAS
                        </NavLink>
                    )}
                </div>
            </section>
        </>
    );
};

export default FipePrincipal;
