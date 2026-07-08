import "./Certificates.css";

import aws from "../../assets/certificates/aws.jpg";
import cisco from "../../assets/certificates/cisco.jpg";
import linkedin from "../../assets/certificates/linkedin.jpg";
import nptel from "../../assets/certificates/nptel.jpg";
import servicenow from "../../assets/certificates/servicenow.jpg";
import mlt from "../../assets/certificates/mlt.png";

const certificates = [
  {
    title: "NPTEL Business Intelligence & Analytics",
    issuer: "NPTEL",
    year: "2026",
    image: nptel,
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    image: aws,
  },
  {
    title: "Cisco Networking Career Path",
    issuer: "Cisco",
    year: "2025",
    image: cisco,
  },
  {
    title: "ServiceNow AI Foundations",
    issuer: "ServiceNow",
    year: "2026",
    image: servicenow,
  },
  {
    title: "LinkedIn Full Stack Learning",
    issuer: "LinkedIn Learning",
    year: "2026",
    image: linkedin,
  },
  {
    title: "MLT Certificate",
    issuer: "Achievement",
    year: "2026",
    image: mlt,
  },
];

function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <h2 className="section-title">Certificates</h2>

      <p className="section-subtitle">
        Professional certifications, workshops and achievements that strengthened
        my skills in Cloud, Full Stack Development and AI.
      </p>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <img
              src={certificate.image}
              alt={certificate.title}
            />

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;