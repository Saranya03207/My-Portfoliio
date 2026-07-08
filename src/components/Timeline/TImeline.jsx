import "./Timeline.css";
import journey from "../../data/journey";

function Timeline() {
  return (
   <section className="timeline" id="journey">

      <h2 className="title">
        My Journey
      </h2>

      <p className="subtitle">
        My growth from a Computer Science student to a Full Stack Developer.
      </p>

      <div className="timeline-container">

        {journey.map((item,index)=>(

          <div className="timeline-card" key={index}>

            <div className="circle">
              {item.year}
            </div>

            <div className="content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;