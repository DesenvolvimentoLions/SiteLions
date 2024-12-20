import FooterClient from "../../../../components/footer_client";
import MenuCliente from "../../../../components/menu_client";
import PaginaCabecalhos from "../../../../components/pagina_cabecalhos";
import ReactHtmlParser from "html-react-parser";
import useBlogComponentNoticia from "./hooks";

import "./style.min.css";
export default function BlogNoticia() {
    const { dadosAmostraCookie, param } = useBlogComponentNoticia();

    return (
        <>
            <MenuCliente />
            <PaginaCabecalhos
                title="Blog Lions Seminovos"
                description="Novidades no mundo automotivo e muito mais! Confira aqui na Lions Seminovos!"
                url="https://www.lionsseminovos.com.br/lojas"
            />

            <section className="containerNoticiaBlog">
                <section className="tamanhoPadraoNoticia">
                    <div className="containerTitulo">
                        <h1 className="fonteBlogTitulo">
                            {dadosAmostraCookie.title}
                        </h1>
                        <div className="detalhes">
                            <p>
                                Por <strong>{dadosAmostraCookie.author}</strong>
                            </p>
                            <p>{dadosAmostraCookie.data}</p>
                        </div>
                    </div>

                    <div className="imgDestaque">
                        <picture>
                            <source
                                type="image/jpg"
                                srcSet={dadosAmostraCookie.img}
                                sizes="@media (min-width:834px) 300px, @media (min-width:0px) 500px"
                            />
                            <img
                                className="MuiBox-root css-15fi12k"
                                loading="lazy"
                                title={param.title}
                                alt={param.title}
                                src={dadosAmostraCookie.imgMobile}
                            />
                        </picture>
                    </div>

                    <div className="containerContent">
                        {/* TRANSFORME A ESTRUTURA EM UM HTML */}
                        {/* <p>
                            A Black Friday 2024 acontece no dia 29 de Novembro,
                            e com certeza é uma das datas mais esperadas por
                            todos. A data, que é famosa no varejo, também tem
                            algumas promoções incríveis para quem está
                            procurando um carro novo barato ou até mesmo um
                            seminovo em promoção. Separamos 5 modelos de carros
                            seminovos de primeira mão para você ficar de olho
                            nesta data. Vamos pras dicas.
                        </p>
                        <h5>PEUGEOT 208</h5>
                        <img src={dadosAmostraCookie.img} alt=""></img>
                        <p>
                            Desde a formação do Grupo Stellantis, a Peugeot
                            mudou e se reinventou com a parceria com a
                            engenharia italiana da FIAT. O Peugeot 208 é hoje,
                            sem sombra de dúvida, um dos melhores hatchs
                            seminovos do mercado, e também é um dos mais
                            baratos. O Peugeot 208 Like 1.6 2022 é um dos
                            melhores custo-benefício para quem procura beleza e
                            dignidade. O hatch francês vem equipado com um motor
                            1.6 que entrega 115 cv e 15,4 kgfm na gasolina. O
                            câmbio manual de 5 marchas é bem acertado para o
                            carro, que tem 4,05 de comprimento e 2,54 de
                            entre-eixos. Além disso, o porta-malas comporta 265
                            litros.
                        </p>
                        <p>
                            O Peugeot 208 Like 1.6 2022 tem direção elétrica,
                            ar-condicionado, controle de estabilidade e 4
                            airbags. Entre os equipamente temos um volante
                            multifuncional, central multimídia com tela de 7
                            polegadas com Android Auto e Apple CarPlay. Com a
                            nova geração já disponível nas lojas, este é o
                            momento perfeito para comprar um 208 com preços
                            ainda melhores.
                        </p>
                        <h5>RENAULT LOGAN</h5>
                        <img src={dadosAmostraCookie.img} alt="" />
                        <p>
                            Apesar de já ter se despedido do segmento dos carros
                            0km, o Renault Logan ainda continua vivo no mercado
                            de carros seminovos. Além de ser um dos maiores
                            ícones dos sedãs, o Renault Logan é um dos
                            queridinhos dos taxistas e motoristas de aplicativo
                            devido ao seu espaço interno e porta-malas espaçoso.
                            O Renault Logan Zen 1.0 2021 é um sedã de entrada
                            que conta com o clássico SCe 12V com 82 cv e 10,2
                            kgfm de torque utilizando gasolina, suficiente para
                            ser um carro econômico e bom de guiar. O grande
                            destaque do sedã francês está em seu porta-malas de
                            510 litros, além de seus 2,64 metros de entre-eixos.
                            Em outros palavras, o Renault Logan é extremamente
                            espaçoso.
                        </p>
                        <p>
                            A versão de entrada conta com itens básicos como
                            faróis diurnos de LED, multimídia com tela de 7
                            polegadas compatível com Android Auto e Apple
                            CarPlay e ar-condicionado. Além disso, o sedã conta
                            com 4 airbags, alarme e travamento automático das
                            portas a partir dos 6km/h. Por mais básico que
                            pareça, o Renault Logan ainda é uma excelente opção
                            para quem deseja um carro para a família ou quer
                            entrar nos aplicativos de corrida.
                        </p>
                        <h5>CHEVROLET ONIX</h5>
                        <img src={dadosAmostraCookie.img} alt="" />
                        <p>
                            Entre os hatches compactos, o Chevrolet Onix ainda
                            segue como uma referência, e não é para menos já que
                            o veículo desbancou nomes como o antigo Volkswagen
                            Gol. Próximo de ganhar sua nova geração, o Chevrolet
                            Onix LT 1.0 2020 conta com um motor 1.0 aspirado com
                            78 cv e torque de 9,5 kgfm na gasolina. Apesar de
                            parecer pouco, é suficiente para entregar economia e
                            potência num carro de pouco mais de 1 tonelada. Para
                            quem tem o pé pesado e busca um carro econômico, o
                            Onix certamente é a escolha certa.
                        </p>
                        <p>
                            O hatch da Chevrolet vem com o sistema MyLink em sua
                            multimídia de 7 poelgadas, com os já conhecidos
                            Android Auto e Apple CarPlay. Além disso, temos
                            conexão bluetooth para até dois celulares. Já na
                            segurança, são 6 airbags, assistente de partida em
                            rampa e controle de tração e estabilidade.
                        </p>
                        <h5>VOLKSWAGEN VOYAGE</h5>
                        <p>
                            Substituído pelo Volkswagen Virtus, o Volkswagen
                            Voyage fez história no Brasil durante mais de 40
                            anos. O Volkswagen Voyage MPI 1.0 2022 é o
                            representante da última geração do sedã alemão. São
                            84 cv de potência e 10,4 kgfm de torque no
                            consagrado motor MPI da VW. Em termos de espaço, o
                            Voyage é mais humilde do que seu antigo rival (o
                            Renault Logan), com um porta-malas de 480 litros e
                            um entre-eixos de 2,46 metros. Apesar de ser menor,
                            ele é tão espaçoso quanto o Logan, além de ter a
                            qualidade alemã que muitas pessoas preferiram
                            durante anos.
                        </p>
                        <p>
                            Os itens são os mais básicos, mas o Volkswagen
                            Voyage ainda oferece um bom conjunto para seu preço
                            na Tabela FIPE: ar-condicionado, direção assistida,
                            freios abs e airbags frontais. Conectividade não é o
                            ponto forte do Voyage, mas isso também é justificado
                            pelo preço do sedã. Para quem procura um carro
                            espaçoso e básico, certamente ele é uma boa escolha.
                        </p>
                        <h5>CITRÖEN C4 CACTUS</h5>
                        <img src="CACTUS" alt="" />
                        <p>
                            Apesar de ter perdido seu espaço para o Citröen
                            Basalt, o Citröen C4 Cactus é um SUV barato para
                            quem deseja um veículo maior e mais atualizado. O
                            Citröen C4 Cactus Feel 2022 conta com um motor 1.6
                            aspirado com 113 cv de potência e 15,4 kgfm. O
                            câmbio é automático de 6 marchas. Apesar de estar
                            numa categoria recheada de opções, o C4 Cactus é um
                            SUV compacto de entrada que se destaca pela sua
                            qualidade e preço justo para a categoria. Dentro os
                            itens de série, temos ar-condicionado digital, luzes
                            diurnas de LED, multimídia de 7 polegadas e volante
                            multifuncional. O SUV também conta com airbag duplo,
                            controle de tração e estabilidade e assistente de
                            partida em rampa. Para quem busca subir de
                            categoria, o Citröen C4 Cactus Feel provavelmente é
                            uma das melhores opções disponíveis.
                        </p>
                        <p>
                            Essas foram as dicas que separamos para você. Tá
                            querendo encontrar um desses carros? Acesse o nosso
                            estoque agora mesmo e confira os modelos que temos
                            em estoque para garantir já o seu. Temos diversas
                            condições como entrada em até 18X no cartão e
                            financiamento em até 60X. Também aceitamos o seu
                            carro na troca. Vem pra Lions e saia já de carro
                            novo.
                        </p> */}
                        {ReactHtmlParser(String(dadosAmostraCookie.content))}
                        {/* {dadosAmostraCookie.content} */}
                    </div>
                </section>
            </section>

            <FooterClient />
        </>
    );
}
