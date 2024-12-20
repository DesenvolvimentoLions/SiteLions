self.onmessage = (e) => {
    const { data, type } = e.data;

    try {
        // PEGANDO OS DADOS PARA PASSAR PELO PRIMEIRO FILTRO

        const dadosFiltrados = data.filter((item) => item.Type === type);

        const nomes = new Set();

        const filtro = dadosFiltrados
            .filter((item) => {
                const primeiroNome = String(item.BrandValue).split(" ")[0];

                if (nomes.has(primeiroNome)) {
                    return false;
                } else {
                    nomes.add(primeiroNome);
                    return true;
                }
            })
            .map((item) => ({
                BrandValue: String(item.BrandValue),
                Type: String(item.Type),
            }));

        self.postMessage(filtro);
    } catch (error) {
        self.postMessage({ error: error.message });
    }
};
