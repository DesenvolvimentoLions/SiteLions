import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useBlogComponentNoticia() {
    const param = useParams();

    const [dadosAmostraCookie, setDadosAmostraCookie] = useState([]);
    useEffect(() => {
        setDadosAmostraCookie(JSON.parse(localStorage.getItem("paraApagar")));
    }, []);

    return {
        dadosAmostraCookie,
        param,
    };
}
