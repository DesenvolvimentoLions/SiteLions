import { vagas } from "./dadosTemp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./style.min.css";
import useTrabalheConoscoSlide from "./hooks";

export default function TrabalheConoscoSlide() {
    const { navigate, pg } = useTrabalheConoscoSlide();

    return (
        <section className="slideTrabalheConosco">
            <section className="tamanhoPadrao containerSlide">
                <Swiper
                    modules={[Pagination]}
                    pagination={pg}
                    speed={700}
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    className="containerSlideFale"
                >
                    {vagas.map((item, index) => (
                        <SwiperSlide key={index} className="swiperSlide">
                            <button
                                onClick={() =>
                                    navigate(
                                        `/trabalheConosco/${item.setor}/${item.id}`
                                    )
                                }
                                className="cardVaga"
                            >
                                <img src={item.img} alt={item.setor} />

                                <div className="descricao">
                                    <h5>{item.setor}</h5>
                                    <p>{item.vagas} vagas</p>
                                </div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </section>
    );
}
