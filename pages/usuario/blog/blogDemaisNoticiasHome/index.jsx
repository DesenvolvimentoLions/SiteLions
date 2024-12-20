import { Link } from "react-router-dom";
import { demaisNoticias } from "./dadosTemp";

import "./style.min.css";

export default function BlogDemaisNoticiasHome() {
    return (
        <>
            <section className="demaisNoticias">
                <section className="centralizar">
                    <div className="titulo">
                        <h1>Mais notícias</h1>
                    </div>

                    <div className="containerNoticias">
                        <ul className="listaNoticias">
                            {demaisNoticias.map((noticia, index) => (
                                <li key={index}>
                                    <Link href={noticia.url}>
                                        <div className="text">
                                            <h2>{noticia.titulo}</h2>
                                            <p>{noticia.subtitulo}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button>Ver mais!</button>
                </section>
            </section>
        </>
    );
}
