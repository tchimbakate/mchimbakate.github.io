import React, { useState } from "react";
import { database, ref, set } from "../firebase"; // Import Firebase setup

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmissionRef = ref(database, "submissions/" + Date.now());
    set(newSubmissionRef, formData)
      .then(() => {
        setIsSuccess(true);
        setModalMessage(
          "Your request is being reviewed and member of our team will be in touch shortly."
        );
        setShowModal(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsSuccess(false);
        setModalMessage("There was an error submitting your form.");
        setShowModal(true);
        console.error("Error submitting form:", error);
      });
  };

  return (
    <section
      className="py-7 bg-dark section-angle top-right bottom-right"
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h2 className="text-white heading-black">Talk to us</h2>
          </div>
        </div>
        <div className="container">
          <h1 className="my-4">Contact Us</h1>
          <form id="contactForm" className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputFirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="inputMessage"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <div className="col-12">
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bootstrap Modal for Submission Confirmation */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="submissionModal"
        tabIndex="-1"
        aria-labelledby="submissionModalLabel"
        aria-hidden={!showModal}
        style={{
          display: showModal ? "block" : "none",
          background: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-white border-0">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="submissionModalLabel">
                {isSuccess ? "Thank you" : "Something Went Wrong"}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body text-center border-0">
              {isSuccess && (
                <img
                  src="/img/thankyou.png"
                  alt="Thank you"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "200px" }}
                />
              )}
              <p>{modalMessage}</p>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
