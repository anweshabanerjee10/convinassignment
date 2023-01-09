import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import "./home.css";
import Button from "../../components/Button/Button";

function Home() {
  const navigate = useNavigate();
  const [load, setOnLoad] = useState(false);
  useEffect(() => {
    setOnLoad(true);
  }, []);
  return (
    <div className="home-container">
      <img className="bg-wave" src="/images/bg-wave.png" alt="bg-wave" />
      <div className="home-container-wrapper">
        <div className={`home-left ${load ? "loaded" : ""}`}>
          <h1 className="font-semibold">Video Vibes</h1>
          <p>
            We built this website to help you watch your saved video seamlessly.
          </p>
          <div className="home-button-container">
            <Button
              style={{
                width: "250px",
                fontWeight: "600",
              }}
              onClick={() => {
                navigate("/videos");
              }}
            >
              <div className="flex justify-center items-center gap-2">
                <FiPlay />
                <span>Get Started</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="home-right">
          <img
            className={`${load ? "loaded" : ""}`}
            src="/images/phone-laptop.png"
            alt="mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
