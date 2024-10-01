import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = "^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$"
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setError("Please enter valid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Please enter valid email");
    }else{
      setError("");
      console.log("Form Submitted")
    }
  }
  return (
    <div className="booking-form-container" onSubmit={handleSubmit}>
      <h3 className="responsive-heading">Contact Us</h3>
      <h2 className="appointment-heading">Make an Appointment</h2>
      <div className="booking-form">
        <div className="form-group">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select id="department" name="department">
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="hr">HR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select id="time" name="time">
            <option value="10am">10:00</option>
            <option value="11am">11:00</option>
            <option value="12am">12:00</option>
          </select>
        </div>
        <div className="form-group textarea-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="button-container">
        <button type="submit" className="book-btn">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default App;
