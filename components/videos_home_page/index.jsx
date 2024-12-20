import { useEffect, useRef, useState } from "react";

const VideoAutoPlayBack = (options) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    const cb = (entries) => {
        const [entry] = entries;

        if (videoRef.current && isVideoReady) {
            // Verifique se o vídeo está pronto
            if (entry.isIntersecting) {
                videoRef.current.play().catch((error) => {
                    console.error("Error attempting to play:", error);
                });
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(cb, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [options, isVideoReady]);

    return [containerRef, videoRef, setIsVideoReady];
};

export default function HomeVideo(props) {
    const [containerRef, videoRef, setIsVideoReady] = VideoAutoPlayBack({
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
    });

    return (
        <>
            <div className="containerParaVideo" ref={containerRef}>
                <video
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    autoPlay
                    muted
                    loop
                    preload={props.preLoad}
                    poster={props.poster}
                    playsInline
                    ref={videoRef}
                    data-src={props.video}
                    onCanPlayThrough={() => setIsVideoReady(true)}
                >
                    <source src={props.video} type="video/webm"></source>
                </video>
            </div>
        </>
    );
}
