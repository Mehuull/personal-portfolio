import React, { useState } from "react";
import "./Contact.css";
import contactimg from "../../assets/contact-transformed.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xwppknnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-section">
      <div
        className="contact-container"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="contact-image">
          <img src={contactimg} alt="Contact Illustration" />
        </div>
        <div className="contact-form">
          <h2> Get In Touch </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <i className="fa fa-user"></i>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fa fa-envelope"></i>
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <i className="fa fa-comment"></i>
              </label>
              <textarea
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="sendbtn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </div>
      <div className="Contact-message"  data-aos="fade-down"
        data-aos-duration="1000">
        I am available on almost every social media. You can message me, I will
        reply within 24 hours. I can help you with React, Next, Web Development.
      </div>
      <div class="social-buttons"
       data-aos="fade-down"
       data-aos-duration="1000">
        <a
          href="https://github.com/Mehuull"
          class="social-button social-button--github"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/mehul-rana-904b54340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          class="social-button social-button--linkedin"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>

        <a
          href="https://www.instagram.com/m3huul_10/#"
          class="social-button social-button--instagram"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=919586298992"
          class="social-button social-button--whatsapp"
          aria-label="WhatsApp"
        >
          <i class="fab fa-whatsapp"></i>
        </a>

        <a
          href="https://linktr.ee/mehuul"
          class="social-button social-button--Email"
          aria-label="Email"
        >
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
