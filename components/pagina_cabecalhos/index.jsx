import { Helmet } from "react-helmet-async";


export default function PaginaCabecalhos(props) {
    return (
        <Helmet>
            <meta property="description" content={props.description} />
            {/* REDES SOCIAIS */}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content="URL-da-imagem.jpg" />
            <meta property="og:url" content={props.url} />
            <meta property="og:type" content="website" />

            {/* TWITTER CARDS */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content="URL-da-imagem.jpg" />
        </Helmet>
    );
}
