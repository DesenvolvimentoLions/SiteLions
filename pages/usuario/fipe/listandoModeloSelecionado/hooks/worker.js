self.onmessage = (e) => {
    const { data, type, marca, modelo, ano } = e.data;

    // Função para padronizar URL removendo acentos e caracteres especiais
    const padronizarUrl = (url) => {
        return url
            .normalize("NFD") // Decompõe acentos
            .replace(/[\u0300-\u036f]/g, "") // Remove acentuação
            .toLowerCase() // Converte para minúsculas
            .replace(/[^a-z0-9\s]/g, ""); // Remove caracteres especiais, mantém espaços
    };

    try {
        const dadosFiltrados = data.filter(
            (item) =>
                item.Type === type &&
                padronizarUrl(item.BrandValue) == padronizarUrl(marca) &&
                new RegExp(`\\b${String(modelo).toLowerCase()}\\b`).test(
                    String(item.ModelValue).toLowerCase()
                ) &&
                new RegExp(`\\b${String(ano).toLowerCase()}\\b`).test(
                    String(item.YearCode).toLowerCase().split("-")[0]
                )
        );

        self.postMessage(dadosFiltrados);
    } catch (error) {
        self.postMessage({ error: error.message });
    }
};
