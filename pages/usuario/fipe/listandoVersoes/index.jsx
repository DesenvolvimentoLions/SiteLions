import CarregamentoLogo from "../../../../components/carregamentos";
import { BtnVoltar, FipeTitulo } from "../../../../components/fipe/btns";
import FooterClient from "../../../../components/footer_client";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import useListandoVersoes from "./hooks";

export default function FipeListandoVersoes() {
    const { param, titulo, ultimaListagem, navVersoes } = useListandoVersoes();

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
                    <BtnVoltar pagina="ANO" />

                    <FipeTitulo>
                        <h3>
                            {param.veiculo.charAt(0).toUpperCase() +
                                param.veiculo.slice(1)}{" "}
                            <span>
                                {titulo} {param.modelo}
                            </span>
                        </h3>
                        <p>Todos os modelos {param.modelo}</p>
                    </FipeTitulo>

                    {/* CONTAINER PARA OS MODELOS */}
                    {ultimaListagem.length == 0 ? (
                        <CarregamentoLogo />
                    ) : (
                        <section className="global">
                            <ul>
                                {ultimaListagem.map((item, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() =>
                                                navVersoes(
                                                    item.ModelValue.split(
                                                        " "
                                                    )[0],
                                                    item.year
                                                )
                                            }
                                        >
                                            {param.modelo}{" "}
                                            {item.year == "32000"
                                                ? "0Km"
                                                : item.year}
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
