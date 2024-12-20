import CarregamentoLogo from "../../../../components/carregamentos";
import { BtnVoltar } from "../../../../components/fipe/btns";
import FooterClient from "../../../../components/footer_client";
import { InputSearch } from "../../../../components/form/inputsForms";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import FipePrincipal from "../containerHome";
import useListandoMarcas from "./hooks";

import "../style.min.css";

export default function FipeListandoMarcas() {
    const {
        setDadosBusca,
        dadosExibidos,
        dadosFiltrados,
        dadosBusca,
        listagemMarcasPadrao,
        tituloPagina,
        navModelo,
    } = useListandoMarcas();

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="fipeContainerVeiculo">
                <section className="tamanhoPadraoFipe">
                    <BtnVoltar pagina="Marcas" link={"./"} />
                </section>
                <section className="tamanhoPadraoFipeMain">
                    <section className="containerBusca">
                        <div className="containerSearch">
                            <InputSearch
                                nome="busca"
                                postValue={(e) => {
                                    setDadosBusca(e.target.value);
                                }}
                                placeholder={
                                    dadosExibidos.length == 0
                                        ? "Carregando..."
                                        : "PESQUISE POR MARCA"
                                }
                                disabled={
                                    dadosExibidos.length == 0 ? true : false
                                }
                            />
                        </div>
                    </section>

                    {dadosFiltrados.length == 0 && dadosBusca.length == 0 && (
                        <>
                            {/* CONTAINER CARROS */}
                            <section className="globalMarcas">
                                <FipePrincipal
                                    dados={listagemMarcasPadrao}
                                    titulo={tituloPagina}
                                />
                            </section>

                            {/* CONTIANER COM LISTAGEM DE VEICULOS */}
                            <div className="tituloLista">
                                <h5>Lista de A-z</h5>
                            </div>
                        </>
                    )}

                    {dadosExibidos.length == 0 ? (
                        <CarregamentoLogo />
                    ) : dadosFiltrados.length == 0 && dadosBusca.length > 0 ? (
                        <p className="nenhumModelo" style={{ color: "#fff" }}>
                            Nenhum veículo encontrado!
                        </p>
                    ) : dadosFiltrados.length != 0 && dadosBusca.length > 0 ? (
                        <section className="listagemFipe">
                            <section className="global">
                                <ul>
                                    {dadosFiltrados.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() =>
                                                    navModelo(
                                                        item.BrandValue,
                                                        item.Type
                                                    )
                                                }
                                            >
                                                {item.BrandValue}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    ) : (
                        <section className="listagemFipe">
                            <section className="global">
                                <ul>
                                    {dadosExibidos.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() =>
                                                    navModelo(
                                                        item.BrandValue,
                                                        item.Type
                                                    )
                                                }
                                            >
                                                {item.BrandValue}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    )}
                </section>
            </section>

            <FooterClient />
        </>
    );
}
