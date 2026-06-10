import { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="navbar__container">
                    <h1 className="navbar__logo">VicNet</h1>
                    <ul className={`navbar__menu ${menuOpen ? "open" : ""}`}>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre mí</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                    <div className="navbar__actions">
                        <a href="#" className="btn__outline">Ingresar</a>
                        <a href="#" className="btn__solid">Registrarse</a>
                    </div>
                    <button
                        className={`navbar__toggle ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <section className="hero">
                <div className="hero__badge">✦ Disponible para proyectos</div>
                <h2 className="hero__title">
                    Bienvenido a mi<br />
                    <span className="accent">portafolio</span>
                </h2>
                <p className="hero__sub">Soy un apasionado por la tecnología y el desarrollo de software</p>
                <a href="#" className="hero__cta">Hoja de vida</a>
            </section>
        </header>
    );
}

export default Header;