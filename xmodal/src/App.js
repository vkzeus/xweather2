import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Validate Phone Number (must be 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Validate Date of Birth (must not be empty)
    if (!dob) {
      alert("Invalid Date of Birth. Please select a valid date.");
      return;
    }

    // If all validations pass, you can process the form data here
    alert("Form submitted successfully!");
    closeModal(); // Close the modal after successful submission
  };

  return (
    <div className="App">
      {/* Button to open the form modal */}
      <h2>User Details Modal</h2>
      <button onClick={openModal} style={{color:"blue"}}>Open Form</button>

      {/* Modal structure */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Fill out the form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  required
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  required
                />
              </div>
              <div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
