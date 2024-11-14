import React, { useState } from "react";
import profileImg from "./Ellipse 2.jpg";
import "./card.css";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main">
      <div className="first">
        <img src={profileImg} alt="Profile" />
      </div>
      <div className="second">
        <h1>Anjali Sharma</h1>
        <h6>Mumbai</h6>
      </div>
      <div className="third">
        <div className="contact-info">
          <h3>9099980888</h3>
          <button className="btn" onClick={handleOpenModal}>
            Fetch Details
          </button>
        </div>
        <p>Available on phone</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Details for Anjali Sharma</h2>
            <p>Location: Mumbai</p>
            <p>Contact No: 9099980888</p>
            <p>Profile Image:</p>
            <div className="first">
              <img src={profileImg} alt="Profile" />
            </div>
            <button className="btn-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
