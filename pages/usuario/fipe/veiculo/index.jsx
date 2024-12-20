import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import CarregamentoLogo from "../../../../components/carregamentos";
import FooterClient from "../../../../components/footer_client";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import useFipeVeiculo from "./hooks";

import "./style.min.css";

export default function FipeVeiculo() {
    const { dadosGerais, valoresInteiros, valorEmReal, valorizacao } =
        useFipeVeiculo();

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Fipe | Lions Seminovos"
                description="Consulte a Tabela Fipe e descubra o valor de mercado do seu veículo. Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />
            <section className="containerFipeDadosVeiculo">
                <section className="tamanhoPadrao">
                    <section className="tituloVeicular">
                        <h1>
                            {dadosGerais.BrandValue} {dadosGerais.ModelValue}
                        </h1>
                    </section>

                    <i>{`"Valores baseados nos últimos 12 meses"`}</i>

                    <section className="containerValoresAtuais">
                        <div className="containerGeral">
                            <div className="containerValorAtual">
                                <h5>Valor atual fipe:</h5>
                                <p>{dadosGerais.Price}</p>
                            </div>

                            <div className="containerValoresMedios">
                                <strong>
                                    Valor médio fipe:
                                    <span>
                                        {" "}
                                        {valoresInteiros.length != 0
                                            ? valorEmReal(
                                                  valoresInteiros.reduce(
                                                      (acc, dado) =>
                                                          acc + dado.price,
                                                      0
                                                  ) / valoresInteiros.length
                                              )
                                            : "Carregando..."}
                                    </span>
                                </strong>
                            </div>

                            <div className="porcentagemContainer">
                                <strong>
                                    {valorizacao &&
                                    valorizacao.split("")[0] === "-"
                                        ? "Desvalorização"
                                        : "Valorização"}
                                    :{" "}
                                    <span
                                        className={`porcentagem ${
                                            valorizacao &&
                                            valorizacao.split("")[0] === "-"
                                                ? "desvalorizacao"
                                                : "valorizacao"
                                        }`}
                                    >
                                        {valorizacao}%
                                    </span>
                                </strong>
                            </div>
                        </div>
                    </section>

                    {valoresInteiros.length == 0 ? (
                        <CarregamentoLogo />
                    ) : (
                        <div className="containerGrafico">
                            <>
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart
                                        width={730}
                                        height={250}
                                        data={valoresInteiros}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <defs>
                                            <linearGradient
                                                id="colorUv"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#fff"
                                                    stopOpacity={0.8}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#fff"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="colorPv"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="5%"
                                                    stopColor="#82ca9d"
                                                    stopOpacity={0.8}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="#82ca9d"
                                                    stopOpacity={0}
                                                />
                                            </linearGradient>
                                        </defs>
                                        <XAxis
                                            dataKey="referenceMonth"
                                            tick={{
                                                fill: "#fff",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                color: "#fff",
                                            }}
                                            tickSize={15}
                                        />
                                        <YAxis
                                            tickFormatter={(decimal) =>
                                                `R$ ${new Intl.NumberFormat(
                                                    "pt-BR"
                                                ).format(decimal)}`
                                            }
                                            width={100}
                                            domain={["auto", "auto"]}
                                            tick={{
                                                fill: "#fff",
                                                fontWeight: "bold",
                                                fontSize: "13px",
                                                color: "#fff",
                                            }}
                                        />
                                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                        <Tooltip
                                            labelStyle={{ fontWeight: "bold" }}
                                            itemStyle={{
                                                color: "#000",
                                            }}
                                            contentStyle={{
                                                borderRadius: 10,
                                                overflow: "hidden",
                                            }}
                                            label={"Teste"}
                                            payload={[
                                                {
                                                    name: "05-01",
                                                    value: 12,
                                                    unit: "kg",
                                                },
                                            ]}
                                            formatter={(value) => [
                                                `R$ ${new Intl.NumberFormat(
                                                    "pt-BR"
                                                ).format(value)}`,
                                                `Valor`,
                                            ]}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="price"
                                            stroke="#fff"
                                            fillOpacity={1}
                                            fill="url(#colorUv)"
                                            dot={true}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </>
                        </div>
                    )}
                </section>
            </section>

            <FooterClient />
        </>
    );
}
