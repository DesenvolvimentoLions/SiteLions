import { Link } from "react-router-dom";

// import Insta from "../../src/assets/img/icons/socialMedia/instagram.svg?react";
// import Facebook from "../../src/assets/img/icons/socialMedia/facebook.svg?react";

// IMPORTACAO DA ESTILIZACAO
import "./style.min.css";

export default function FooterClient() {
    return (
        <footer className="footerBottom">
            {/* <div className="socialMedia">
                <section className="icones">
                    <a href="#">
                        <Insta />
                    </a>
                    <a href="#">
                        <Facebook />
                    </a>
                </section>

                <h5>SIGA NOSSAS REDES</h5>
            </div> */}
            <h3>Desenvolvido pela LIONS</h3>
            <div className="menus">
                <Link to="/trabalheConosco">TRABALHE CONOSCO</Link>
                <a href="#">PARCEIRO DE NEGÓCIOS</a>
            </div>
        </footer>
    );
}
