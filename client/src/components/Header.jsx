import React, { useEffect, useState } from "react";
import rakhi from "../assets/rrr.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiHome, FiAward, FiUser, FiTool } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";

const navLinks = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/about", label: "About", icon: FiUser },
  { to: "/skill", label: "Skill", icon: FiTool },
  { to: "/project", label: "Project", icon: FaRegFolder },
  { to: "/hackathons", label: "Hackathons", icon: LuTrophy },
  { to: "/certificates", label: "Certificates", icon: FiAward },
  { to: "/experience", label: "Experience", icon: FiBriefcase },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {isHome ? (
        <>
          {/* ================= DESKTOP FLOATING DOCK ================= */}
          <div className="hidden sm:fixed sm:right-6 sm:top-1/2 sm:z-50 sm:flex sm:-translate-y-1/2">
            <div
              className={`flex flex-col items-center gap-2 rounded-full border px-2.5 py-6
              transition-all duration-500 ease-out
              ${mounted ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
              style={{
                background: "rgba(15,15,25,0.6)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
              }}
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    title={link.label}
                    className="group relative"
                  >
                    {/* Tooltip */}
                    <span
                      className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-md border px-2.5 py-1 text-xs font-medium text-white/90 opacity-0
                      transition-all duration-200 ease-out
                      group-hover:translate-x-0 group-hover:opacity-100"
                      style={{
                        background: "rgba(15,15,25,0.95)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      {link.label}
                    </span>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full
                      transition-all duration-250 ease-out
                      ${isActive ? "" : "hover:bg-white/6"}`}
                      style={
                        isActive
                          ? {
                              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                            }
                          : undefined
                      }
                    >
                      <Icon
                        className={`text-base transition-colors duration-250 ${
                          isActive ? "text-white" : "text-white/55 group-hover:text-white/90"
                        }`}
                      />
                    </div>

                    {/* Active indicator dot */}
                    {isActive && (
                      <span
                        className="absolute -left-1.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full"
                        style={{ background: "#EC4899" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="sm:hidden fixed top-10 right-4 z-50 text-white">
            <button
              className="rounded-full p-3 text-xl border transition-transform duration-200 active:scale-90"
              style={{
                background: "rgba(15,15,25,0.6)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(30px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </>
      ) : (
        /* ================= OTHER PAGES NAVBAR ================= */
        <div className="sticky top-4 z-30 mx-4 sm:mx-auto mt-4 sm:mt-6 max-w-5xl">
          <div
  className={`flex items-center justify-between rounded-full border py-2 px-3 sm:px-6
  transition-all duration-500 ease-out
  ${mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
  style={{
    background: "rgba(15,15,25,0.6)",
    borderColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
  }}
>
            {/* Logo */}
            <Link to="/" aria-label="Go to home" className="shrink-0">
              <img
                src={rakhi}
                alt="Rakhi"
                className="h-9 w-9 sm:h-10 sm:w-10 "
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1 text-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group relative px-4 py-2 text-white/60 transition-colors duration-250 hover:text-white"
                  >
                    <span className={isActive ? "text-white" : ""}>
                      {link.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px origin-center rounded-full bg-pink-400
                      transition-transform duration-250 ease-out
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                className="text-xl rounded-full p-2 text-white transition-transform duration-200 active:scale-90"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaXmark /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE DRAWER (GLOBAL) ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-sm overflow-hidden border-l
        transition-transform duration-300 ease-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          background: "rgba(15,15,25,0.9)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between border-b p-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <h2 className="text-sm font-semibold tracking-wide text-white/70">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full p-2 transition-colors duration-200 hover:bg-white/10"
          >
            <FaXmark />
          </button>
        </div>

        {/* Profile Section */}
        <div
          className={`flex items-center gap-3 border-b p-4
          transition-all duration-400 ease-out
          ${menuOpen ? "translate-x-0 opacity-100 delay-100" : "translate-x-4 opacity-0"}`}
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <img
            src={rakhi}
            alt="Rakhi Rani"
            className="h-11 w-11  "
          />
          <div>
            <p className="text-sm font-semibold text-white">Rakhi Rani</p>
            <p className="text-xs text-white/45">Full Stack Developer</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <div
                key={link.to}
                className="transition-all duration-350 ease-out"
                style={{
                  transitionDelay: menuOpen ? `${120 + i * 50}ms` : "0ms",
                  transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-250 ${
                    isActive ? "bg-white/6" : "hover:bg-white/4"
                  }`}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #8B5CF6, #EC4899)"
                        : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <Icon className={`text-sm ${isActive ? "text-white" : "text-white/60"}`} />
                  </div>
                  <span className={`text-sm font-medium ${isActive ? "text-white" : "text-white/75"}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span
                      className="ml-auto h-1.5 w-1.5 rounded-full"
                      style={{ background: "#EC4899" }}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;