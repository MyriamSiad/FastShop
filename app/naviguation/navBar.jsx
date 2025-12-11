import React from 'react';
import { NavLink } from 'react-router';
import myLogo from "#/images/logo.jpg"
import { useState } from "react";



export default function NavBar() {
const [open, setOpen] = useState(false)
  return (
    <>
    <nav className="w-full bg-[#F47555] text-white shadow-md">
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
            <span className="block h-1 w-6 bg-white rounded"></span>
            <span className="block h-1 w-6 bg-white rounded"></span>
            <span className="block h-1 w-6 bg-white rounded"></span>
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
                    ? "bg-white text-[#F47555] font-semibold"
                    : "text-white"
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
                    ? "bg-white text-[#F47555] font-semibold"
                    : "text-white"
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
                    ? "bg-white text-[#F47555] font-semibold"
                    : "text-white"
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
                    ? "bg-white text-[#F47555] font-semibold"
                    : "text-white"
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
