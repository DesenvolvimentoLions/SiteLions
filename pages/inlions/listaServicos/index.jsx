// IMPORTACAO DOS ICONES DO SERVICOS
import Download from "../../../src/assets/img/inlions/icones/download.svg?react";
import Support from "../../../src/assets/img/inlions/icones/suport.svg?react";
import Ranking from "../../../src/assets/img/inlions/icones/ranking.svg?react";
import Compras from "../../../src/assets/img/inlions/icones/compras.svg?react";
import Ciad from "../../../src/assets/img/inlions/icones/ciad.svg?react";
import Pagciad from "../../../src/assets/img/inlions/icones/ciad.svg?react";
import Calculadora from "../../../src/assets/img/inlions/icones/calculadora.svg?react";
import SimuladorCartao from "../../../src/assets/img/inlions/icones/simuladorCartao.svg?react";

export default function InlionsListaServicos() {
    return (
        <>
            <ul className="listaServicos tamanhoPadrao">
                <li>
                    <button>
                        <figure>
                            <Download />
                        </figure>
                        <p>Download</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Support />
                        </figure>
                        <p>Support</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Ranking />
                        </figure>
                        <p>Ranking</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Compras />
                        </figure>
                        <p>Compras</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Ciad />
                        </figure>
                        <p>CIAD</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Pagciad />
                        </figure>
                        <p>Pag Corp</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <Calculadora />
                        </figure>
                        <p>Calculadora</p>
                    </button>
                </li>
                <li>
                    <button>
                        <figure>
                            <SimuladorCartao />
                        </figure>
                        <p>Simulador de cartão</p>
                    </button>
                </li>
            </ul>
        </>
    );
}
