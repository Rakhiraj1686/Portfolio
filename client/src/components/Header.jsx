import React, { useEffect, useState } from "react";
import rakhi from "../assets/rrr.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiHome, FiAward, FiUser, FiTool } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa6";


const navLinks = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/about", label: "About", icon: FiUser },
  { to: "/skill", label: "Skill", icon: FiTool },
  { to: "/project", label: "Project", icon: FaRegFolder },
  { to: "/hackathons", label: "Hackathons", icon: LuTrophy },
  { to: "/certificates", label: "Certificates", icon: FiAward },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {isHome ? (
        <>
          {/* Desktop Sidebar */}
          <div className="hidden sm:fixed sm:flex  sm:flex-col sm:z-50 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-3 py-10 gap-10 items-center  text-white shadow-[0_20px_50px_rgba(5,3,7,0.45)] px-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.to} to={link.to} title={link.label}>
                  <Icon className="text-xl  hover:text-purple-400 transition" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="sm:hidden fixed top-10 right-4 z-50 text-white">
            <button
              className=" backdrop-blur-md  rounded-full p-3 text-xl shadow-lg"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </>
      ) : (
        <div className="sticky top-3 z-30 p-4 sm:p-3 rounded-full sm:px-8 max-w-7xl mx-4 sm:mx-auto mt-4 sm:mt-6 flex justify-between items-center text-white backdrop-blur-md bg-black/40 border border-white/10 shadow-[0_20px_50px_rgba(5,3,7,0.4)]">
          {/* Logo */}
          <Link to="/" aria-label="Go to home">
            <img
              src={rakhi}
              alt="Rakhi"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-purple-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              className="text-xl rounded-full p-2 "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      )}

      {/* ================= MOBILE DRAWER (GLOBAL) ================= */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] max-w-sm z-50
        bg-[#0f0f17]/95 backdrop-blur-2xl
        border-l border-white/10
        shadow-[-10px_0_40px_rgba(0,0,0,0.6)]
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-sm font-semibold tracking-wide text-white/80">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <FaXmark />
          </button>
        </div>

        {/* Profile Section */}
        {/* <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <img src={rakhi} alt="" className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-medium">Your Name</p>
            <p className="text-xs text-white/50">Developer</p>
          </div>
        </div> */}

        {/* Navigation Links */}
        <div className="flex flex-col p-3 gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-linear-to-r from-purple-500/20 to-pink-500/20 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {/* Icon */}
                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10">
                  <Icon className="text-sm" />
                </div>

                {/* Label */}
                <span className="text-sm font-medium">{link.label}</span>

                {/* Active Dot */}
                {isActive && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-purple-400"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
