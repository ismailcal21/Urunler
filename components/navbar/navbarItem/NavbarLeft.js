import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className="cursor-pointer text-5xl">
      ShopZon
    </div>
  );
};

export default NavbarLeft;
