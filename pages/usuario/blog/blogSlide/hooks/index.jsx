import { useEffect, useRef, useState } from "react";

// IMPORTACAO DE MIDIAS PARA TESTE
import VideoTesla from "../../../../../src/assets/video/tesla.webm";
import ImgTeste from "../../../../../src/assets/img/veiculo/1.jpg";
import ImgTeste2 from "../../../../../src/assets/img/veiculosBlog/News/mobile/1header.jpg";


export default function useBlogComponentSlide() {
    const [dados, setDados] = useState([]);

    // APENAS PARA USO DIDATICO SEM FUNCIONALIDADE
    useEffect(() => {
        for (let index = 0; index <= 9; index++) {
            setDados((veiculos) => [
                ...veiculos,
                {
                    typeFocus: "img",
                    img: ImgTeste2,
                    video: VideoTesla,
                    capaVideo: ImgTeste,
                    titulo: "Conversivel H3",
                    descricao: "",
                    link: "",
                },
            ]);
        }
    }, []);

    const videoRefs = useRef([]); // Referências para cada vídeo
    const [currentPlaying, setCurrentPlaying] = useState(null); // Índice do vídeo em reprodução

    const togglePlay = (index) => {
        const video = videoRefs.current[index];
        if (currentPlaying === index) {
            video.pause();
            setCurrentPlaying(null);
        } else {
            // Pausa os outros vídeos
            videoRefs.current.forEach(
                (ref, idx) => idx !== index && ref.pause()
            );
            video.play();
            setCurrentPlaying(index);
        }
    };

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            video?.addEventListener("play", () => setCurrentPlaying(index));
            video?.addEventListener(
                "pause",
                () => currentPlaying === index && setCurrentPlaying(null)
            );
        });

        return () => {
            videoRefs.current.forEach((video, index) => {
                video?.removeEventListener("play", () =>
                    setCurrentPlaying(index)
                );
                video?.removeEventListener(
                    "pause",
                    () => currentPlaying === index && setCurrentPlaying(null)
                );
            });
        };
    }, [currentPlaying]);

    return {
        dados,
        videoRefs,
        setCurrentPlaying,
        currentPlaying,
        togglePlay,
    };
}
