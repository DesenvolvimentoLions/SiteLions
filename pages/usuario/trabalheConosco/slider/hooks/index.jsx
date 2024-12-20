import { useNavigate } from "react-router-dom";

export default function useTrabalheConoscoSlide() {
    const navigate = useNavigate();

    // DOT DA PAGINACAO
    const pg = {
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="dotSlide ' + className + '"></span>';
        },
    };

    return {
        navigate,
        pg,
    };
}
