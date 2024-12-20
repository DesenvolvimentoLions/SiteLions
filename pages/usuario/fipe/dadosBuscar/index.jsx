import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

export default function FipeBuscar(busca) {
    /////////////////////////////////
    /// PEGAR OS ITENS PARA BUSCA ///
    /////////////////////////////////
    // ARMAZENAR O JSON QUE CONTEM TODOS OS VEICULOS
    const [data, setData] = useState([]);
    // ARMAZENA AS MARCAS DA CONSULTA COMPLETO
    const [marcaResults, setMarcaResults] = useState([]);
    // ARMAZENA OS CARROS DA CONSULTA COMPLETO
    const [carsResults, setCarsResults] = useState([]);
    // ARMAZENA AS MOTOS DA CONSULTA COMPLETO
    const [motorcyclesResults, setMotorcyclesResults] = useState([]);
    // ARMAZENA OS CAMINHOES DA CONSULTA COMPLETO
    const [trucksResults, setTrucksResults] = useState([]);
    // ARMAZENA AS MARCAS FILTRADAS
    const [marcasFiltradas, setMarcasFiltradas] = useState([]);
    // ARMAZENA OS CARROS FILTRADOS
    const [carrosFiltrados, setCarrosFiltrados] = useState([]);
    // ARMAZENA AS MOTOS FILTRADAS
    const [motosFiltradas, setMotosFiltradas] = useState([]);
    // ARMAZENA OS CAMINHOES FILTRADOS
    const [caminhoesFiltrados, setCaminhoesFiltrados] = useState([]);
    // RETORNO PARA DERRUBAR O CARREGAMENTO
    const [carregamento, setCarregamento] = useState(true);
    // CASO NÃO ENCONTRE NENHUM RESULTADO
    const [retornoVazio, setRetornoVazio] = useState(true);
    // REFERENCIA O WORK (TRABALHO POR BAIXO DOS PANOS)
    const workerRef = useRef();

    // CARREGANDO O ARQUIVO JSON
    useEffect(() => {
        // FAZ UMA CHAMADA ASYNCRONA PARA TAZER OS DADOS DO JSON ASSIM MELHORANDO O DESEMPENHO COM O AWAIT
        const loadData = async () => {
            const response = await fetch("/fipe.json");
            const jsonData = await response.json();
            setData(jsonData);
        };
        loadData();

        // UTILIZA O WORKER PARA BUSCAR ONDE ESTA OS FILTROS PARA O WORK
        workerRef.current = new Worker(
            new URL("./processarWorker.js", import.meta.url)
        );

        // EXECUTA O WORK PARA TRAZER OS DADOS QUE ESTAO NO buscarWorker.js
        workerRef.current.onmessage = (event) => {
            setMarcaResults(event.data.marcaResults);
            setCarsResults(event.data.carsResults);
            setMotorcyclesResults(event.data.motorcyclesResults);
            setTrucksResults(event.data.trucksResults);
        };
        return () => {
            workerRef.current.terminate();
        };
    }, []);

    // CRIA UM DELAY NA BUSCA PARA PODER ESPERAR O USUARIO DIGITAR COMPLETAMENTE
    // A BUSCA
    const handleSearch = debounce(
        (searchQuery) => {
            workerRef.current.postMessage({ query: searchQuery, data });
        },
        1000,
        { leading: true, trailing: false }
    );

    // PASSA OS DADOS DA BUSCA PARA O DEBOUNCE ONDE OCORRERA A ESPERA DA BUSCA
    useEffect(() => {
        handleSearch(busca);
    }, [busca]);

    // SEPARA A MARCA DO VEICULO
    useEffect(() => {
        const names = new Set();

        const marcaCarros = [];
        const marcaMotos = [];
        const marcaCaminhoes = [];

        marcaResults.forEach((item) => {
            if (!names.has(item.BrandValue)) {
                names.add(item.BrandValue);

                // Agora que temos um item único, categorize
                if (item.Type === "CAR") {
                    marcaCarros.push(item);
                } else if (item.Type === "MOTORCYCLE") {
                    marcaMotos.push(item);
                } else if (item.Type === "TRUCK") {
                    marcaCaminhoes.push(item);
                }
            }

            setCarregamento(false);
        });

        setMarcasFiltradas([...marcaCarros, ...marcaMotos, ...marcaCaminhoes]);
    }, [marcaResults]);

    // JUNTA OS VEICULOS QUE POSSUEM O MESMO NOME
    useEffect(() => {
        const names = new Set();

        const filtro = carsResults
            .filter((item) => {
                const nome = item.ModelValue;

                if (names.has(nome)) {
                    return false;
                } else {
                    names.add(nome);
                    return true;
                }
            })
            .map((item) => item);

        setCarrosFiltrados(filtro);
    }, [carsResults]);

    // JUNTA AS MOTOS QUE POSSUEM O MESMO NOME
    useEffect(() => {
        const names = new Set();

        const filtro = motorcyclesResults
            .filter((item) => {
                const nome = item.ModelValue;

                if (names.has(nome)) {
                    return false;
                } else {
                    names.add(nome);
                    return true;
                }
            })
            .map((item) => item);

        setMotosFiltradas(filtro);
    }, [motorcyclesResults]);

    // JUNTA OS CAMINHOES QUE POSSUEM O MESMO NOME
    useEffect(() => {
        const names = new Set();

        const filtro = trucksResults
            .filter((item) => {
                const nome = item.ModelValue;

                if (names.has(nome)) {
                    return false;
                } else {
                    names.add(nome);
                    return true;
                }
            })
            .map((item) => item);

        setCaminhoesFiltrados(filtro);
    }, [trucksResults]);

    useEffect(() => {
        if (
            busca.length >= 1 &&
            carsResults.length === 0 &&
            motorcyclesResults.length === 0 &&
            trucksResults.length === 0 &&
            marcaResults.length === 0
        ) {
            setRetornoVazio(true);
        } else {
            setRetornoVazio(false);
        }
    }, [marcaResults, carsResults, motorcyclesResults, trucksResults, busca]);

    return {
        marcasFiltradas,
        carrosFiltrados,
        motosFiltradas,
        caminhoesFiltrados,
        carregamento,
        retornoVazio,
    };
}
