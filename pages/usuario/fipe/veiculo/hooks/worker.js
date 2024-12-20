self.onmessage = (e) => {
    const { data, type, fipe, ano } = e.data;

    try {
        // Filtrar os dados
        const filteredData = data.filter((item) => {
            return (
                item.Type === type &&
                String(item.FipeCode) === String(fipe) &&
                String(item.YearCode) === String(ano)
            );
        });

        // Enviar os resultados de volta para o código principal
        self.postMessage(filteredData);
    } catch (error) {
        // Tratamento de erro no Worker
        self.postMessage({ error: error.message });
    }
};
