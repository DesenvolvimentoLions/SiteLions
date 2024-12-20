import "./style.min.css";
const ContainerLojas = ({ titulo, dados, handleModal, dadosRetorno }) => {
    return (
        <>
            <section className="containerLojas">
                <h5 className="titulo">{titulo}</h5>
                <section className="container">
                    {dados.map((item, index) => (
                        <section
                            className="card"
                            key={index}
                            onClick={() => {
                                handleModal(), dadosRetorno(item);
                            }}
                        >
                            <div className="containerImgLoja">
                                <img src={item.img} alt={item.nomeLoja} />
                            </div>
                            <div className="descricaoLoja">
                                <h5>{item.nomeLoja}</h5>
                                <p>{item.enderecoLoja}</p>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </>
    );
};

export default ContainerLojas;
