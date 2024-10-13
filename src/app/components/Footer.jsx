import React from "react";

const Footer = () => {
  return (
    <footer className="footer grid border z-10 py-8 px-10 border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent text-white">
      <div className="container grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate-200 text-center">All rights reserved </p>
          <p className="text-md text-primary-500 text-center">
            Eng. Mhd Moaz Tello
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
