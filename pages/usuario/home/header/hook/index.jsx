import axios from "axios";
import { useEffect, useState } from "react";

const useHookHeaderHomePage = () => {
    // Trazendo os dados da API
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    // "https://jsonplaceholder.typicode.com/posts"
                    "https://192.168.0.208:5209/api/Pages/PageHome"
                );
                // const jsonData = await response.json();
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return { data };
};

export default useHookHeaderHomePage;
