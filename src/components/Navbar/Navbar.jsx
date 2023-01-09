import React from "react";
import { FaPlay } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  return (
    <div
      className="w-full h-[70px] p-10 flex justify-between absolute top-0 left-0 z-10"
      style={{ color: isHome ? "white" : "red" }}
    >
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FaPlay size={28} />
        <span className="font-semibold text-3xl mx-4">ConVin</span>
      </div>
    </div>
  );
}

export default Navbar;
