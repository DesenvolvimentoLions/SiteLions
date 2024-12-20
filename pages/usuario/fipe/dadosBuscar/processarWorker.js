// searchWorker.js
self.onmessage = (event) => {
    const { data, query } = event.data;

    const marcaResults = data.filter(
        (item) =>
            item.BrandValue &&
            typeof item.BrandValue === "string" &&
            item.BrandValue.toLowerCase().includes(query.toLowerCase())
    );

    // Filtra também por tipo, se necessário
    const carsResults = data.filter(
        (item) =>
            item.Type === "CAR" &&
            ((item.BrandValue &&
                typeof item.BrandValue === "string" &&
                item.BrandValue.toLowerCase().includes(query.toLowerCase())) ||
                (item.ModelValue &&
                    typeof item.ModelValue === "string" &&
                    item.ModelValue.toLowerCase().includes(
                        query.toLowerCase()
                    )))
    );

    const motorcyclesResults = data.filter(
        (item) =>
            item.Type === "MOTORCYCLE" &&
            ((item.BrandValue &&
                typeof item.BrandValue === "string" &&
                item.BrandValue.toLowerCase().includes(query.toLowerCase())) ||
                (item.ModelValue &&
                    typeof item.ModelValue === "string" &&
                    item.ModelValue.toLowerCase().includes(
                        query.toLowerCase()
                    )))
    );

    const trucksResults = data.filter(
        (item) =>
            item.Type === "TRUCK" &&
            ((item.BrandValue &&
                typeof item.BrandValue === "string" &&
                item.BrandValue.toLowerCase().includes(query.toLowerCase())) ||
                (item.ModelValue &&
                    typeof item.ModelValue === "string" &&
                    item.ModelValue.toLowerCase().includes(
                        query.toLowerCase()
                    )))
    );

    // Adicione mais filtros conforme necessário

    self.postMessage({
        carsResults,
        motorcyclesResults,
        trucksResults,
        marcaResults,
    });
};
