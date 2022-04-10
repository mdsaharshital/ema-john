import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./shipment.css";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const handleAdressBlur = (e) => {
    setAdress(e.target.value);
  };

  const handleShipment = (e) => {
    e.preventDefault();
    const shipment = { name, email, phone, adress };
    console.log(shipment);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipment Information</h2>
        <form onSubmit={handleShipment}>
          <div className="input-group">
            <label htmlFor="name">Your name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="adress">Adress</label>
            <input
              onBlur={handleAdressBlur}
              type="text"
              name="adress"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input onBlur={handlePhoneBlur} type="text" name="phone" required />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
