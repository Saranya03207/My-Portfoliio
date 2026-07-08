import "./Projects.css";
import projects from "../../data/projects";

import {
 FaGithub,
 FaYoutube
} from "react-icons/fa";

function Projects() {

return (

<section className="projects" id="projects">

<h2 className="section-title">

Featured Projects

</h2>

<p className="section-subtitle">

Some of the projects I've built using Java, Spring Boot, React, Python and Cloud technologies.

</p>

<div className="project-container">

{

projects.map((project)=>(

<div
className="project-card"
key={project.id}
>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="project-content">

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div className="tech-stack">

{

project.technologies.map((tech,index)=>(

<span key={index}>

{tech}

</span>

))

}

</div>

<div className="project-buttons">

{

project.github &&

<a
href={project.github}
target="_blank"
rel="noreferrer"
>

<FaGithub/>

GitHub

</a>

}

{

project.youtube &&

<a
href={project.youtube}
target="_blank"
rel="noreferrer"
>

<FaYoutube/>

Watch Demo

</a>

}

</div>

</div>

</div>

))

}

</div>

</section>

);

}

export default Projects;