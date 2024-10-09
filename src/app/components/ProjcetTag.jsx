import React from "react";

const ProjcetTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE]border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full ${buttonStyles} border-2 hover:border-white px-6 py-2 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjcetTag;
