import "./Project.css";
import petsos from "../../assets/petsos.png";

const projects = [
    {
        id: 1,
        title: "PetSOS",
        description: "Aplicación para ayudar a encontrar mascotas perdidas. Conecta a dueños con personas que han visto a su mascota.",
        tags: ["React", "Node.js"],
        image: petsos
    }
];

function Projects() {
    return (
        <section className="projects" id="proyectos">
            <div className="projects__container">
                <div className="projects__header">
                    <h2 className="projects__title">My <span className="accent">Projects</span></h2>
                    <p className="projects__sub">Algunos de los proyectos en los que he trabajado</p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div className="project__card" key={project.id}>
                            <div className="project__image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project__placeholder">
                                        <span>🐾</span>
                                        <p>Imagen próximamente</p>
                                    </div>
                                )}
                            </div>
                            <div className="project__content">
                                <h3 className="project__name">{project.title}</h3>
                                <p className="project__desc">{project.description}</p>
                                <div className="project__tags">
                                    {project.tags.map((tag) => (
                                        <span className="project__tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project__actions">
                                    <a href="#" className="project__btn outline">Repositorio</a>
                                    <a href="#" className="project__btn solid">Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;