import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import Vector from "../../icon/Vector.svg";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {

  const { t } = useTranslation();

  
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/services", label: "Service" },
    { to: "/contacts", label: "Contact" },
  ];

  return (
    <header className="w-full bg-[#054E32] text-white shadow-sm">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[70px] px-4 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Vector} alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg tracking-wide">
            {t("welcome")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
        <ul className="flex  gap-3.5">
          <li>{t("Header.Home")}</li>
          <li>{t("Header.AboutUs")}</li>
          <li>{t("Header.Home")}</li>
          <li>{t("Header.Home")}</li>
        </ul>
        </nav>

        {/* Telefon + Language + Mobile Menu */}
        <div className="flex items-center gap-4 text-sm">
          {/* Telefon */}
          <a href="tel:8075550101" className="hidden sm:flex items-center gap-2">
            <FiPhone className="text-xl" aria-label="Phone" />
            <span><a href="tel: +37065963444">+37065963444</a></span>
          </a>

          {/* Language Dropdown */}
          <div className="hidden sm:block">
            <LanguageDropdown />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white text-[#054E32] text-sm font-medium px-6 py-6 overflow-y-auto z-40 md:hidden">
          <div className="flex justify-start gap-3 mb-6">
            <LanguageDropdown />
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-[#0A8B58] transition-colors ${
                    isActive ? "text-[#0A8B58] font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Əlaqə və info */}
          <div className="mt-8 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2 mb-3">
              <img src={Vector} alt="logo" className="w-8 h-8" />
              <span className="font-semibold text-[#0A8B58]">SSYSTEMS MB</span>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2">Our Resource</p>
              <ul className="space-y-1 text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#0A8B58]">Career</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0A8B58]">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Contact Us</p>
              <div className="flex items-center gap-2 mb-1">
                <FiPhone className="text-[#0A8B58]" />
                <a href="tel:9075550101" className="hover:text-[#0A8B58]">(907) 555-0101</a>
              </div>
              <p className="text-gray-600 text-sm">nvt.isst.nute@gmail.com</p>
              <p className="text-gray-600 text-sm">Litva Klaipeda Artojo g 7 E</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
