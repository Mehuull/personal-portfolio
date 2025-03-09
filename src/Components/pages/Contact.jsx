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
    </section>
  );
};

export default Contact;
