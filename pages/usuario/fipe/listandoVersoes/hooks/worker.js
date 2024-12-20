self.onmessage = (e) => {
    const { data, type, marca, modelo } = e.data;

    // Função para padronizar URL removendo acentos e caracteres especiais
    const padronizarUrl = (url) => {
        return url
            .normalize("NFD") // Decompõe acentos
            .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
            .toLowerCase() // Converte para minúsculas
            .replace(/[^a-z0-9\s]/g, ""); // Remove caracteres especiais, mantém espaços
    };

    try {
        // Filtrar os dados
        const filteredData = data.filter((item) => {
            return (
                item.Type === type &&
                padronizarUrl(item.BrandValue) === padronizarUrl(marca) &&
                padronizarUrl(item.ModelValue).includes(padronizarUrl(modelo))
            );
        });

        // Enviar os resultados de volta para o código principal
        self.postMessage(filteredData);
    } catch (error) {
        // Tratamento de erro no Worker
        self.postMessage({ error: error.message });
    }
};
