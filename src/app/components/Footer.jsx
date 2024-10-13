import React from "react";

const Footer = () => {
  return (
    <footer className="footer grid border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-200">
          All rights reserved{" "}
          <span className="text-md text-slate-100">
            Mhd Moaz Tello Developer 👨🏻‍💻
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
