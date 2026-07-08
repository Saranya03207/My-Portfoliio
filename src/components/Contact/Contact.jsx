import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title">Contact Me</h2>

      <p className="subtitle">
        I'm currently looking for internships and full-time opportunities.
        Feel free to reach out if you'd like to collaborate or discuss a project.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <h3>Email</h3>
            <p>saranyapalanisamy207@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 8248351508</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Coimbatore, Tamil Nadu</p>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}

        </form>

      </div>
    </section>
  );
}

export default Contact;