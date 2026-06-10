import "./Footer.css";
import contactImg from "../../assets/contacto.svg";

function Footer() {
    return (
        <footer className="contact" id="contacto">
            <div className="contact__container">
                <div className="contact__content">
                    <h2 className="contact__title">Contactame</h2>

                    <div className="contact__socials">
                        <a href="#" className="social__btn" target="_blank" rel="noreferrer">
                            <i className="ti ti-brand-facebook"></i>
                        </a>
                        <a href="#" className="social__btn" target="_blank" rel="noreferrer">
                            <i className="ti ti-brand-x"></i>
                        </a>
                        <a href="#" className="social__btn" target="_blank" rel="noreferrer">
                            <i className="ti ti-brand-github"></i>
                        </a>
                        <a href="#" className="social__btn" target="_blank" rel="noreferrer">
                            <i className="ti ti-brand-whatsapp"></i>
                        </a>
                    </div>

                    <p className="contact__copy">Derechos reservados © VicNet</p>
                </div>

                <div className="contact__image">
                    <img src={contactImg} alt="contact illustration" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;