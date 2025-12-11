import React from 'react';
import { NavLink } from 'react-router';
import myLogo from "#/images/logo-noBg.png"
import { useState } from "react";



export default function NavBar() {
const [open, setOpen] = useState(false)
  return (
    <>
    <nav className="w-full bg-white text-[#F47555] shadow-md">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <img
            src={myLogo}
            alt="Logo"
            className="h-12 w-auto"
          />
          <span className="font-semibold text-lg">FastShop</span>
        </div>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-[#F47555] rounded"></span>
            <span className="block h-1 w-6 bg-[#F47555] rounded"></span>
            <span className="block h-1 w-6 bg-[#F47555] rounded"></span>
          </div>
        </button>
      </div>

      {/* MENU DÉROULANT */}
      {open && (
        <ul className="flex flex-col gap-2 px-4 pb-3 animate-fadeIn">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md ${
                  isActive
                    ? "bg-[#F47555] text-white font-semibold"
                    : "text-black"
                }`
              }
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/connexion"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md ${
                  isActive
                    ? "bg-[#F47555] text-white font-semibold"
                    : "text-black"
                }`
              }
            >
              Connexion
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/magasins"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md ${
                  isActive
                   ? "bg-[#F47555] text-white font-semibold"
                    : "text-black"
                }`
              }
            >
              Les magasins
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/listecourse"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-3 rounded-md ${
                  isActive
                   ? "bg-[#F47555] text-white font-semibold"
                    : "text-black"
                }`
              }
            >
              Liste de course
            </NavLink>
          </li>
        </ul>
      )}
    </nav>

    </>
  );
}
