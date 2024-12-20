self.onmessage = (e) => {
    const { data, type } = e.data;


    // Filtrar os dados
    const filteredData = data.filter((item) => item.Type === type);

    // Enviar os resultados de volta
    self.postMessage(filteredData);
};
