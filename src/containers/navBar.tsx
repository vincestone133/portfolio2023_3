import React from "react";
export const NavigationMenu: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <h1 className="text-lg font-bold">Logo</h1>
        <ul className="flex space-x-4 ml-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <button className="bg-white text-gray-800 rounded-md py-2 px-4">
        Sign In
      </button>
    </nav>
  );
};

export default NavigationMenu;
