import React from "react";
import { NavLink } from "../components/Links";
export const NavigationMenu = () => {
  return (
    <header className=" fixed right-20 top-10">
      <div className="container mx-auto flex justify-end items-center px-4">
        <nav className="space-x-5">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About Me</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavigationMenu;
