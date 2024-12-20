import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useBlogComponentSlide from "./hooks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import "./style.min.css";

export default function BlogComponentSlide() {
    const { dados, videoRefs, setCurrentPlaying, currentPlaying, togglePlay } =
        useBlogComponentSlide();

    return (
        <>
            <Swiper
                modules={[Pagination, Navigation]}
                navigation={true}
                spaceBetween={10}
                slidesPerView={"auto"}
                grabCursor={true}
                className="swiperBlogColors"
                centeredSlides={innerWidth <= 667}
            >
                {dados.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="swiperSlideBlog">
                            <section>
                                {item.typeFocus === "video" ? (
                                    <>
                                        <div className="containerMidia">
                                            <div className="midia">
                                                <div key={index}>
                                                    <video
                                                        ref={(el) =>
                                                            (videoRefs.current[
                                                                index
                                                            ] = el)
                                                        }
                                                        width="600"
                                                        onEnded={() =>
                                                            setCurrentPlaying(
                                                                null
                                                            )
                                                        } // Quando o vídeo termina
                                                        controls
                                                    >
                                                        <source
                                                            src={item.video}
                                                            type="video/webm"
                                                        />
                                                        Seu navegador não
                                                        suporta o elemento de
                                                        vídeo.
                                                    </video>

                                                    <button
                                                        onClick={() =>
                                                            togglePlay(index)
                                                        }
                                                    >
                                                        {currentPlaying ===
                                                        index
                                                            ? "Pausar"
                                                            : "Reproduzir"}
                                                    </button>
                                                </div>
                                            </div>

                                            <NavLink className="titulo">
                                                <h3>{item.titulo}</h3>
                                            </NavLink>
                                        </div>
                                    </>
                                ) : (
                                    <NavLink className={"containerMidia"}>
                                        <div className="midia">
                                            <img src={item.img} alt="" />
                                        </div>

                                        <div className="titulo">
                                            <h3>{item.titulo}</h3>
                                        </div>
                                    </NavLink>
                                )}
                            </section>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
