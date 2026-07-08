import "./Hero.css";
import profile from "../../data/profile";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/images/profile.png";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="left">

        <p>{profile.greeting}</p>

        <h1>{profile.name}</h1>

        <TypeAnimation
          sequence={[
            profile.roles[0],2000,
            profile.roles[1],2000,
            profile.roles[2],2000,
            profile.roles[3],2000,
            profile.roles[4],2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />

        <p className="desc">
          {profile.description}
        </p>

        <div className="buttons">

         <a href={profile.resume} download>

<button className="download-btn">

<FaDownload/>

Download Resume

</button>

</a>

         <a
href="#projects"
className="project-btn"
>

🚀 View Projects

</a>

        </div>

        <div className="social-links">

          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>

        </div>

      </div>

      <div className="right">

       <div className="hero-circle">

    <img
        src={profileImage}
        alt="Saranya"
        className="profile-image"
    />

</div>

      </div>

<a href="#about" className="scroll-down">
    ↓
</a>

    </section>
  );
}

export default Hero;