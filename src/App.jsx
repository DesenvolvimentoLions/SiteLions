// IMPORTACAO DO RESETCSS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/resetCss/global.css";
import { lazy, Suspense } from "react";
import CarregamentoLogo from "../components/carregamentos";
/////////////////////////////////////////
// IMPORTACAO DA PAGINA INCIAL DO CLIENTE
/////////////////////////////////////////
// const Home = lazy(() => import("../pages/usuario/home"));
import Home from "../pages/usuario/home";

/////////////////////////////////////////
// IMPORTACAO DA PAGINA DE LOJAS
/////////////////////////////////////////
const Lojas = lazy(() => import("../pages/usuario/stores"));
/////////////////////////////////////////
// IMPORTACAO DA PAGINA FIPE
/////////////////////////////////////////
const Fipe = lazy(() => import("../pages/usuario/fipe"));
import FipeListandoModelos from "../pages/usuario/fipe/listandoModelos";
import FipeListandoMarcas from "../pages/usuario/fipe/ListandoMarcas";
import FipeListandoVersoes from "../pages/usuario/fipe/listandoVersoes";
import FipeLinstandoModeloSelecionado from "../pages/usuario/fipe/listandoModeloSelecionado";
const FipeVeiculo = lazy(() => import("../pages/usuario/fipe/veiculo"));
const FipeResultBusca = lazy(() => import("../pages/usuario/fipe/resultBusca"));
/////////////////////////////////////////
// IMPORTACAO DA PAGINA DE BLOG
/////////////////////////////////////////
const Blog = lazy(() => import("../pages/usuario/blog"));
import BlogNoticia from "../pages/usuario/blog/noticia";
/////////////////////////////////////////
// IMPORTACAO DA PAGINA DE INVESTIDORES
/////////////////////////////////////////
import PageInvestidores from "../pages/investidores";
/////////////////////////////////////////
// IMPORTACAO DA PAGINA TRABALHE CONOSCO
/////////////////////////////////////////
const TrabalheConosco = lazy(() => import("../pages/usuario/trabalheConosco"));
const TrabalheConocoscoVaga = lazy(() =>
    import("../pages/usuario/trabalheConosco/vaga")
);
// import TrabalheConosco from "../pages/usuario/trabalheConosco";
// import TrabalheConocoscoVaga from "../pages/usuario/trabalheConosco/vaga";
const InLions = lazy(() => import("../pages/inlions"));

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/lojas"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <Lojas />
                        </Suspense>
                    }
                />

                {/* /////////////////////// */}
                {/* NOVAS ROTAS PARA A FIPE */}
                {/* /////////////////////// */}
                <Route
                    path="/fipe"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <Fipe />
                        </Suspense>
                    }
                />

                {/* MOSTRANDO A MARCA DO FABRICANTE SELECIONADO */}
                <Route
                    path="/fipe/:veiculo/:marca"
                    element={<FipeListandoModelos />}
                />

                {/* MOSTRANDO AS FABRICANTES  */}
                <Route path="/fipe/:veiculo" element={<FipeListandoMarcas />} />

                {/* LISTANDO OS MODELOS DOS VEICULOS SELECIONADOS */}
                <Route
                    path="/fipe/:veiculo/:marca/:modelo"
                    element={<FipeListandoVersoes />}
                />

                {/* LISTANDO MODELO SELECIONADO */}
                <Route
                    path="/fipe/:veiculo/:marca/:modelo/:ano"
                    element={<FipeLinstandoModeloSelecionado />}
                />

                {/* DADOS DO VEICULO */}
                <Route
                    path="/fipe/dados/:veiculo/:ano/:fipe/:tipo"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <FipeVeiculo />
                        </Suspense>
                    }
                />

                {/* LISTANDO O RESULTADO DAS BUSCAS DA FIPE */}
                <Route
                    path="/fipe/veiculo/:veiculo/:fipe"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <FipeResultBusca />
                        </Suspense>
                    }
                />
                {/*
                <Route
                    path="/fipe/dados/:veiculo/:ano/:fipe/:tipo"
                    element={<FipeVeiculo />}
                /> */}
                {/* /////////////////////// */}
                {/* /////////////////////// */}

                {/* ///////////////// */}
                {/* ROTAS PARA O BLOG */}
                {/* ///////////////// */}
                <Route
                    path="/blog"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <Blog />
                        </Suspense>
                    }
                />
                <Route
                    path="/blog/noticia/:id/:title"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <BlogNoticia />
                        </Suspense>
                    }
                />
                {/* ///////////////// */}
                {/* ///////////////// */}

                {/* ////////////////////// */}
                {/* ROTA PARA INVESTIDORES */}
                {/* ////////////////////// */}
                <Route
                    path="/investidores"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <PageInvestidores />
                        </Suspense>
                    }
                />

                {/* ///////////////// */}
                {/* ///////////////// */}

                {/* ////////////////////////// */}
                {/* ROTA PARA TRABALHE CONOSCO */}
                {/* ////////////////////////// */}
                <Route
                    path="/trabalheconosco"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <TrabalheConosco />
                        </Suspense>
                    }
                />
                <Route
                    path="/trabalheconosco/:vaga/:id"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <TrabalheConocoscoVaga />
                        </Suspense>
                    }
                />
                {/* ///////////////// */}
                {/* ///////////////// */}

                {/* ////////////////////////// */}
                {/* ROTA PARA O INLIONS */}
                {/* ////////////////////////// */}
                <Route
                    path="/inlions"
                    element={
                        <Suspense fallback={<CarregamentoLogo />}>
                            <InLions />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
