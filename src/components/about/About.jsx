import "./About.css";
import illustration from "../../assets/about.svg";

function About() {
    return (
        <section className="about" id="sobre-mi">
            <div className="about__container">
                <div className="about__image">
                    <div className="about__img-wrapper">
                        <img src={illustration} alt="developer illustration" className="about__illustration" />
                    </div>
                </div>

                <div className="about__content">
                    <h2 className="about__title">About <span className="accent">Me</span></h2>
                    <p className="about__text">
                        Soy desarrollador de software con experiencia técnica en Java, Python, React y SQL, enfocado en diseñar soluciones web eficientes y escalables. Mi trabajo combina metodologías ágiles con una sólida capacidad para configurar entornos de desarrollo, integrar bases de datos y liderar proyectos de principio a fin, siempre bajo un enfoque de aprendizaje continuo y mejora tecnológica
                    </p>

                    <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="about__cta">
                        Check my GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;