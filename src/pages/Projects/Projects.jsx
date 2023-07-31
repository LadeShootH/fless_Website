import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import projects from "./projects";

export default ({setCurrentPage}) => {

    return (
        <>
            <div className="title-area" onClick={() => setCurrentPage("home")}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <h1>Fleß</h1>
            </div>

            <div className="project-area">
                {projects.map((project, index) => (
                    <a className="project-item" key={index} href={project.link} target="_blank">
                        <div className="info-area">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <img src={project.image} alt={project.title} />
                    </a>
                ))}
            </div>
        </>
    )
}