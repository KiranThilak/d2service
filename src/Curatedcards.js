import React from "react";

const Curatedcards = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={icon} alt="Card Icon" className="w-10 h-10 mb-2" />
      <h3 className="text-lg font-bold mb-1 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Curatedcards;
