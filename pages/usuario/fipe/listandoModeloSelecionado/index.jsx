import CarregamentoLogo from "../../../../components/carregamentos";
import { FipeTitulo } from "../../../../components/fipe/btns";
import FooterClient from "../../../../components/footer_client";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import useListandoModeloSelecionado from "./hooks";

import "./style.min.css";

const FipeLinstandoModeloSelecionado = () => {
    const { titulo, param, primeiroFiltro, navVeiculo, TirarZeros } =
        useListandoModeloSelecionado();

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerVersoesFipe">
                <section className="tamanhoPadraoFipe">
                    <FipeTitulo>
                        <h3>
                            Carros <span>{`${titulo} ${param.modelo} `}</span>
                            {param.ano == "32000" ? "0Km" : param.ano}
                        </h3>
                        <p>
                            {`Todas as versões do(a) ${param.modelo} ${
                                param.ano == "32000" ? "0Km" : param.ano
                            }`}
                        </p>
                    </FipeTitulo>

                    {primeiroFiltro.length == 0 ? (
                        <CarregamentoLogo />
                    ) : (
                        <table className="tabelaModelos">
                            <thead>
                                <tr>
                                    <th>
                                        <p>Versão</p>
                                    </th>
                                    <th>
                                        <p>Cód. Fipe</p>
                                    </th>
                                    <th>
                                        <p>Preço</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {primeiroFiltro.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <button
                                                onClick={() => navVeiculo(item)}
                                            >
                                                {item.ModelValue}
                                            </button>
                                        </td>
                                        <td>
                                            <p>{item.FipeCode}</p>
                                        </td>
                                        <td>
                                            <p>{TirarZeros(item.Price)}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </section>
            <FooterClient />
        </>
    );
};

export default FipeLinstandoModeloSelecionado;
