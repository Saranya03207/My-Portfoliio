import "./About.css";

import {
 FaGraduationCap,
 FaMapMarkerAlt,
 FaLaptopCode,
 FaLanguage
} from "react-icons/fa";

function About() {

return (

<section className="about" id="about">

<h2 className="title">

About Me

</h2>

<p className="subtitle">

A passionate Computer Science Engineering student who enjoys building scalable web applications and continuously learning Cloud, DevOps and Artificial Intelligence.

</p>

<div className="about-container">

<div className="info-card">

<FaGraduationCap className="icon"/>

<h3>Education</h3>

<p>B.E Computer Science Engineering</p>

<p>Karpagam Institute of Technology</p>

<p>CGPA : 8.84</p>

</div>

<div className="info-card">

<FaMapMarkerAlt className="icon"/>

<h3>Location</h3>

<p>Currently</p>

<p>Coimbatore</p>

<p>Native : Salem</p>

</div>

<div className="info-card">

<FaLaptopCode className="icon"/>

<h3>Current Focus</h3>

<p>Spring Boot</p>

<p>React</p>

<p>AWS</p>

<p>DevOps</p>

</div>

<div className="info-card">

<FaLanguage className="icon"/>

<h3>Languages</h3>

<p>English</p>

<p>Tamil</p>

</div>

</div>

</section>

)

}

export default About;