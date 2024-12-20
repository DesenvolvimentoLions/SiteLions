import FooterClient from "../../../components/footer_client";
import MenuCliente from "../../../components/menu_client";
import PaginaCabecalhos from "../../../components/pagina_cabecalhos";
import { Button, InputSearch } from "../../../components/form/inputsForms";
import FipeBuscar from "./dadosBuscar";
import FipePrincipal from "./containerHome";
import { CAMINHOES, CARROS, MOTOS } from "./marcas";

import "./style.min.css";
import { useFipe } from "./hooks";
import CarregamentoLogo from "../../../components/carregamentos";

export default function Fipe() {
    const {
        navigate,
        dadosForm,
        setDadosForm,
        abrirBusca,
        setAbrirBusca,
        buscaRef,
        padronizarUrl,
        navModelo,
    } = useFipe();

    const {
        marcasFiltradas,
        carrosFiltrados,
        motosFiltradas,
        caminhoesFiltrados,
        carregamento,
        retornoVazio,
    } = FipeBuscar(dadosForm);
    const limite = 10;

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerFipe">
                <section className="tamanhoPadraoFipe">
                    <div className="titulo">
                        <h3>TABELA FIPE</h3>
                    </div>

                    <section className="containerBusca">
                        <div className="btnsSelects">
                            <div
                                className="btnSelect"
                                onClick={() => navigate(`./motos`)}
                            >
                                <Button texto="MOTOS" />
                            </div>
                            <div
                                className="btnSelect"
                                onClick={() => navigate(`./carros`)}
                            >
                                <Button texto="CARROS" />
                            </div>
                            <div
                                className="btnSelect"
                                onClick={() => navigate(`./caminhoes`)}
                            >
                                <Button texto="CAMINHÕES" />
                            </div>
                        </div>

                        <div className="containerSearch">
                            <InputSearch
                                postValue={(e) => {
                                    setDadosForm(e.target.value),
                                        setAbrirBusca(true);
                                }}
                                placeholder="PESQUISE POR MARCA OU MODELO"
                                name="busca"
                            />

                            {dadosForm.length >= 1 && carregamento && (
                                <section className="resultBusca" ref={buscaRef}>
                                    <CarregamentoLogo color="black" />
                                </section>
                            )}

                            {retornoVazio && !carregamento && (
                                <section className="resultBusca" ref={buscaRef}>
                                    <p>Nenhum veiculo encontrado</p>
                                </section>
                            )}

                            {/* ////////////////////////// */}
                            {/* EXIBE O RESULTADO DA BUSCA */}
                            {/* ////////////////////////// */}
                            {dadosForm != "" &&
                                abrirBusca &&
                                !retornoVazio &&
                                !carregamento && (
                                    <>
                                        <section
                                            className="resultBusca"
                                            ref={buscaRef}
                                        >
                                            {marcasFiltradas.length != 0 && (
                                                <div className="container">
                                                    <div className="tituloBusca">
                                                        <h3>MARCAS</h3>
                                                    </div>
                                                    <div className="veiculos">
                                                        {/* EXIBE AS MARCAS DE CARROS */}
                                                        <h4>
                                                            {marcasFiltradas.some(
                                                                (item) =>
                                                                    item.Type ===
                                                                    "CAR"
                                                            ) && "CARROS"}
                                                        </h4>
                                                        <ul>
                                                            {marcasFiltradas
                                                                .slice(
                                                                    0,
                                                                    limite
                                                                )
                                                                .map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        if (
                                                                            item.Type ===
                                                                            "CAR"
                                                                        ) {
                                                                            return (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            navModelo(
                                                                                                `carros/${item.BrandValue}`
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            item.BrandValue
                                                                                        }
                                                                                    </button>
                                                                                </li>
                                                                            );
                                                                        }
                                                                    }
                                                                )}
                                                        </ul>
                                                        {/* EXIBE AS MARCAS DE CAMINHÕES */}
                                                        <h4>
                                                            {marcasFiltradas.some(
                                                                (item) =>
                                                                    item.Type ===
                                                                    "TRUCK"
                                                            ) && "CAMINHÕES"}
                                                        </h4>
                                                        <ul>
                                                            {marcasFiltradas
                                                                .slice(
                                                                    0,
                                                                    limite
                                                                )
                                                                .map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        if (
                                                                            item.Type ===
                                                                            "TRUCK"
                                                                        ) {
                                                                            return (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            navModelo(
                                                                                                `caminhoes/${item.BrandValue}`
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            item.BrandValue
                                                                                        }
                                                                                    </button>
                                                                                </li>
                                                                            );
                                                                        }
                                                                    }
                                                                )}
                                                        </ul>
                                                        {/* EXIBE AS MARCAS DE MOTOS */}
                                                        <h4>
                                                            {marcasFiltradas.some(
                                                                (item) =>
                                                                    item.Type ===
                                                                    "MOTORCYCLE"
                                                            ) && "MOTOS"}
                                                        </h4>
                                                        <ul>
                                                            {marcasFiltradas
                                                                .slice(
                                                                    0,
                                                                    limite
                                                                )
                                                                .map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        if (
                                                                            item.Type ===
                                                                            "MOTORCYCLE"
                                                                        ) {
                                                                            return (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <button
                                                                                        onClick={() => {
                                                                                            navModelo(
                                                                                                `motos/${item.BrandValue}`
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            item.BrandValue
                                                                                        }
                                                                                    </button>
                                                                                </li>
                                                                            );
                                                                        }
                                                                    }
                                                                )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}

                                            {/* EXIBINDO A BUSCA VARIADAS DE VEICULOS */}
                                            {carrosFiltrados.length != 0 && (
                                                <>
                                                    <div className="container">
                                                        <div className="tituloBusca">
                                                            <h3>
                                                                {carrosFiltrados.some(
                                                                    (item) =>
                                                                        item.Type ===
                                                                        "CAR"
                                                                ) && "CARROS"}
                                                            </h3>
                                                        </div>
                                                        <div className="containerBusca veiculos">
                                                            {/* EXIBE AS MARCAS DE CARROS */}

                                                            <ul>
                                                                {carrosFiltrados
                                                                    .slice(
                                                                        0,
                                                                        limite
                                                                    )
                                                                    .map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => {
                                                                            if (
                                                                                item.Type ===
                                                                                "CAR"
                                                                            ) {
                                                                                return (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <button
                                                                                            onClick={() =>
                                                                                                navigate(
                                                                                                    `/fipe/veiculo/${padronizarUrl(
                                                                                                        item.ModelValue
                                                                                                    )}/${
                                                                                                        item.FipeCode
                                                                                                    }`
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                item.ModelValue
                                                                                            }
                                                                                        </button>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        }
                                                                    )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* EXIBINDO A BUSCA VARIADAS DE VEICULOS */}
                                            {motosFiltradas.length != 0 && (
                                                <>
                                                    <div className="container">
                                                        <div className="tituloBusca">
                                                            <h3>
                                                                {motosFiltradas.some(
                                                                    (item) =>
                                                                        item.Type ===
                                                                        "MOTORCYCLE"
                                                                ) && "MOTOS"}
                                                            </h3>
                                                        </div>
                                                        <div className="containerBusca veiculos">
                                                            {/* EXIBE AS MARCAS DE CARROS */}

                                                            <ul>
                                                                {motosFiltradas
                                                                    .slice(
                                                                        0,
                                                                        limite
                                                                    )
                                                                    .map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => {
                                                                            if (
                                                                                item.Type ===
                                                                                "MOTORCYCLE"
                                                                            ) {
                                                                                return (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <button
                                                                                            onClick={() =>
                                                                                                navigate(
                                                                                                    `/fipe/veiculo/${padronizarUrl(
                                                                                                        item.ModelValue
                                                                                                    )}/${
                                                                                                        item.FipeCode
                                                                                                    }`
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                item.ModelValue
                                                                                            }
                                                                                        </button>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        }
                                                                    )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* EXIBINDO A BUSCA VARIADAS DE VEICULOS */}
                                            {caminhoesFiltrados.length != 0 && (
                                                <>
                                                    <div className="container">
                                                        <div className="tituloBusca">
                                                            <h3>
                                                                {caminhoesFiltrados.some(
                                                                    (item) =>
                                                                        item.Type ===
                                                                        "TRUCK"
                                                                ) &&
                                                                    "CAMINHÕES"}
                                                            </h3>
                                                        </div>
                                                        <div className="containerBusca veiculos">
                                                            {/* EXIBE AS MARCAS DE CARROS */}

                                                            <ul>
                                                                {caminhoesFiltrados
                                                                    .slice(
                                                                        0,
                                                                        limite
                                                                    )
                                                                    .map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => {
                                                                            if (
                                                                                item.Type ===
                                                                                "TRUCK"
                                                                            ) {
                                                                                return (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <button
                                                                                            onClick={() =>
                                                                                                navigate(
                                                                                                    `/fipe/veiculo/${padronizarUrl(
                                                                                                        item.ModelValue
                                                                                                    )}/${
                                                                                                        item.FipeCode
                                                                                                    }`
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                item.ModelValue
                                                                                            }
                                                                                        </button>
                                                                                    </li>
                                                                                );
                                                                            }
                                                                        }
                                                                    )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </section>
                                    </>
                                )}
                        </div>
                    </section>

                    {/* CONTAINER GERAL PARA MARCAS */}
                    <section className="globalMarcas">
                        <FipePrincipal
                            dados={CARROS}
                            titulo="Carros"
                            linkMais="carros"
                        />
                        <FipePrincipal
                            dados={MOTOS}
                            titulo="Motos"
                            linkMais="motos"
                        />
                        <FipePrincipal
                            dados={CAMINHOES}
                            titulo="Caminhões"
                            linkMais="caminhoes"
                        />
                    </section>
                </section>
            </section>

            <FooterClient />
        </>
    );
}
