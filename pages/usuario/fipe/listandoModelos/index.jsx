import CarregamentoLogo from "../../../../components/carregamentos";
import { BtnVoltar, FipeTitulo } from "../../../../components/fipe/btns";
import FooterClient from "../../../../components/footer_client";
import { InputSearch } from "../../../../components/form/inputsForms";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import { useListandoModelos } from "./hooks";

export default function FipeListandoModelos() {
    const {
        titulo,
        setDadosBusca,
        dadosBusca,
        dadosFiltrados,
        retornoFiltroCompleto,
        navAno
    } = useListandoModelos();

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="listagemFipe">
                <section className="tamanhoPadraoFipe">
                    <BtnVoltar pagina={"Modelos"} link="/fipe" />

                    <FipeTitulo>
                        <h3>
                            Carros <span>{titulo}</span>
                        </h3>
                        <p>Todos os modelos {titulo}</p>
                    </FipeTitulo>

                    <section className="containerBusca">
                        <div className="containerSearch">
                            <InputSearch
                                nome="busca"
                                postValue={(e) => {
                                    setDadosBusca(e.target.value);
                                }}
                                placeholder={
                                    retornoFiltroCompleto.length == 0
                                        ? "Carregando..."
                                        : "PESQUISE POR MODELOS..."
                                }
                                disabled={
                                    retornoFiltroCompleto.length == 0
                                        ? true
                                        : false
                                }
                            />
                        </div>
                    </section>

                    {retornoFiltroCompleto.length == 0 ? (
                        <CarregamentoLogo />
                    ) : dadosFiltrados.length == 0 && dadosBusca.length > 0 ? (
                        <p className="nenhumModelo" style={{ color: "#fff" }}>
                            Nenhum veículo encontrado!
                        </p>
                    ) : dadosFiltrados.length != 0 && dadosBusca.length > 0 ? (
                        /* CONTAINER PARA OS MODELOS */
                        <section className="global">
                            <ul>
                                {dadosFiltrados.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() =>
                                                navAno(
                                                    item.ModelValue.split(
                                                        " "
                                                    )[0]
                                                )
                                            }
                                        >
                                            {item.ModelValue.split(" ")[0]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : (
                        /* CONTAINER PARA OS MODELOS */
                        <section className="global">
                            <ul>
                                {retornoFiltroCompleto.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() =>
                                                navAno(
                                                    item.ModelValue.split(
                                                        " "
                                                    )[0]
                                                )
                                            }
                                        >
                                            {item.ModelValue.split(" ")[0]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </section>
            </section>

            <FooterClient />
        </>
    );
}
