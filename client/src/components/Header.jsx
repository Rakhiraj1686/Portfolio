import React, { useState } from "react";
import rakhi from "../assets/rakhiL.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTrophy,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaBriefcase } from "react-icons/fa";
import { FiTool } from "react-icons/fi";

const navLinks = [
  { to: "/", label: "Home", icon: FaHome },
  { to: "/about", label: "About", icon: FaUser },
  { to: "/skill", label: "Skill", icon: FiTool },
  { to: "/project", label: "Project", icon: FaProjectDiagram },
  { to: "/experience", label: "Experience", icon: FaBriefcase },
  { to: "/hackathons", label: "Hackathons", icon: FaTrophy },
  { to: "/certificates", label: "Certificates", icon: LiaCertificateSolid },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {isHome ? (
        <>
          {/* Desktop: vertical sidebar on right */}
          <div className="hidden sm:fixed sm:flex sm:flex-col sm:z-50 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-4 gap-6 items-center text-white shadow-[0_20px_50px_rgba(5,3,7,0.45)]">
            <Link
              to="/"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Home"
            >
              <FaHome />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="About"
            >
              <FaUser />
            </Link>
            <Link
              to="/skill"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Skills"
            >
              <FiTool />
            </Link>
            <Link
              to="/project"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Projects"
            >
              <FaProjectDiagram />
            </Link>
            <Link
              to="/hackathons"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Hackathons"
            >
              <FaTrophy />
            </Link>
            <Link
              to="/experience"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Experience"
            >
              <FaBriefcase />
            </Link>
            <Link
              to="/certificates"
              className="flex items-center gap-3 hover:text-(--color-accent)"
              title="Certificates"
            >
              <LiaCertificateSolid />
            </Link>
          </div>

          {/* Mobile: hamburger in top-right corner */}
          <div className="sm:hidden fixed top-4 right-4 z-50 text-white">
            <button
              className="bg-black/45 backdrop-blur-md border border-white/10 rounded-full p-3 text-xl shadow-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {menuOpen && (
              <div
                className="fixed inset-0 z-60 bg-black/45 backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
              >
                <div
                  className="ml-auto h-full w-[84%] max-w-sm bg-black/90 backdrop-blur-lg p-4 border-l border-white/10 shadow-2xl overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <p className="text-xs uppercase tracking-wider text-white/60">Menu</p>
                    <button
                      className="rounded-full p-1.5 bg-white/10 hover:bg-white/20 transition-colors"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = location.pathname === link.to;
                      return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`rounded-xl px-3 py-2.5 flex items-center gap-3 transition-colors ${
                          isActive
                            ? "bg-white/15 text-(--color-primary)"
                            : "hover:bg-white/10 hover:text-(--color-primary)"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="text-sm" />
                        <span>{link.label}</span>
                      </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-full max-w-5xl mx-4 sm:mx-auto mt-4 sm:mt-10 flex justify-between items-center text-white backdrop-blur-md bg-black/40 border border-white/10 shadow-[0_20px_50px_rgba(5,3,7,0.4)]">
          <img
            src={rakhi}
            alt=""
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-(--color-accent)"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-xl rounded-full p-2 bg-black/35 border border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div
              className="fixed inset-0 z-60 backdrop-blur-sm bg-black/45 md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <div
                className="ml-auto h-full w-[84%] max-w-sm bg-black/90 backdrop-blur-lg p-4 border-l border-white/10 shadow-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4 mt-2">
                  <p className="text-xs uppercase tracking-wider text-white/60">Menu</p>
                  <button
                    className="rounded-full p-1.5 bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-sm" />
                  </button>
                </div>
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`rounded-xl px-3 py-2.5 flex items-center gap-3 transition-colors ${
                          isActive
                            ? "bg-white/15 text-(--color-primary)"
                            : "hover:bg-white/10 hover:text-(--color-primary)"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="text-sm" />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
