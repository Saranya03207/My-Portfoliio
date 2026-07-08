import "./Skills.css";
import skills from "../../data/skills";

// Programming
import javaIcon from "../../assets/icons/java.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import pythonIcon from "../../assets/icons/python.svg";
import htmlIcon from "../../assets/icons/html5.svg";
import cssIcon from "../../assets/icons/css3.svg";

// Frontend
import reactIcon from "../../assets/icons/react.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";

// Backend
import springIcon from "../../assets/icons/spring.svg";
import nodeIcon from "../../assets/icons/nodejs.svg";

// Database
import mysqlIcon from "../../assets/icons/mysql.svg";
import mongoIcon from "../../assets/icons/mongodb.svg";

// Cloud & DevOps
import awsIcon from "../../assets/icons/aws.svg";
import dockerIcon from "../../assets/icons/docker.svg";
import jenkinsIcon from "../../assets/icons/jenkins.svg";
import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github.svg";

const skillIcons = {
  Java: javaIcon,
  JavaScript: jsIcon,
  Python: pythonIcon,
  HTML: htmlIcon,
  CSS: cssIcon,

  React: reactIcon,
  Bootstrap: bootstrapIcon,
  "Tailwind CSS": tailwindIcon,

  "Spring Boot": springIcon,
  "Node.js": nodeIcon,

  MySQL: mysqlIcon,
  MongoDB: mongoIcon,

  AWS: awsIcon,
  Docker: dockerIcon,
  Jenkins: jenkinsIcon,
  Git: gitIcon,
  GitHub: githubIcon,
};

function SkillBadge({ name }) {
  return (
    <div className="skill-badge">
      {skillIcons[name] && (
        <img
          src={skillIcons[name]}
          alt={name}
          className="skill-icon"
        />
      )}
      <span>{name}</span>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="skill-card">

      <h3>{title}</h3>

      <div className="skill-list">
        {items.map((item, index) => (
          <SkillBadge key={index} name={item} />
        ))}
      </div>

    </div>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="title">
        Technical Skills
      </h2>

      <p className="subtitle">
        Technologies I use to design, develop and deploy scalable applications.
      </p>

      <div className="skills-grid">

        <SkillCard
          title="Programming"
          items={skills.languages}
        />

        <SkillCard
          title="Frontend"
          items={skills.frontend}
        />

        <SkillCard
          title="Backend"
          items={skills.backend}
        />

        <SkillCard
          title="Database"
          items={skills.database}
        />

        <SkillCard
          title="Cloud & DevOps"
          items={[...skills.cloud, ...skills.devops]}
        />

        <SkillCard
          title="Core Concepts"
          items={skills.concepts}
        />

      </div>

    </section>
  );
}

export default Skills;