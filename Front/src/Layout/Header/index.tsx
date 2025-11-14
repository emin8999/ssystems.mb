import { useState, useEffect } from "react"; // 🔹 useEffect əlavə olundu
import { Link, NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import ssystems from "../../assets/images/ssystms.png";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Scroll problemi üçün fix:
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  // 🔹 Bura qədər əlavədir

  const navLinks = [
    { to: "/", label: t("Header.home") },
    { to: "/aboutUs", label: t("Header.aboutUs") },
    { to: "/services", label: t("Header.service") },
    { to: "/contacts", label: t("Header.contact") },
    { to: "/blog", label: t("Header.blog") },
    { to: "/career", label: t("Header.career") },
  ];

  return (
    <header className="w-full bg-[#054E32] text-white shadow-sm">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[70px] px-4 sm:px-6 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={ssystems}
            alt="logo"
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-25 md:h-25 ml-[-20px] sm:ml-[-30px] md:ml-[-40px]"
          />
          <span className="font-semibold text-base sm:text-lg md:text-lg tracking-wide">
            SSYSTEMS MB
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
          <ul className="flex gap-6 lg:gap-7">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#0A8B58] transition-colors ${isActive ? "text-[#0A8B58]" : ""}`
                }
              >
                {t("Header.home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `hover:text-[#0A8B58] transition-colors ${isActive ? "text-[#0A8B58]" : ""}`
                }
              >
                {t("Header.aboutUs")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-[#0A8B58] transition-colors ${isActive ? "text-[#0A8B58]" : ""}`
                }
              >
                {t("Header.service")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `hover:text-[#0A8B58] transition-colors ${isActive ? "text-[#0A8B58]" : ""}`
                }
              >
                {t("Header.contact")}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-4 text-sm">
          <a
            href="tel:+37065963444"
            className="hidden sm:flex items-center gap-2 hover:text-[#0A8B58] transition-colors"
          >
            <FiPhone className="text-lg sm:text-xl" aria-label="Phone" />
            <span className="text-sm sm:text-base">+37065963444</span>
          </a>

          <div className="hidden sm:block">
            <LanguageDropdown />
          </div>

          <button
            className="md:hidden text-2xl p-1 hover:text-[#0A8B58] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

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
                  `block py-2 hover:text-[#0A8B58] transition-colors text-base ${isActive ? "text-[#0A8B58] font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={ssystems} alt="logo" className="w-10 h-10" />
              <span className="font-semibold text-[#0A8B58] text-lg">SSYSTEMS MB</span>
            </div>

            <div className="mb-4">
              <Link to={"/"}>
                <p className="font-semibold mb-2 text-base">{t("Header.home")}</p>

              </Link>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/career" className="hover:text-[#0A8B58] transition-colors block py-1">
                    {t("Header.career")}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#0A8B58] transition-colors block py-1">
                    {t("Header.blog")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-3 text-base">{t("Header.contactUs")}</p>
              <div className="flex items-center gap-2 mb-2">
                <FiPhone className="text-[#0A8B58]" />
                <a href="tel:+37065963444" className="hover:text-[#0A8B58] transition-colors">
                  +37065963444
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-1">nvt.isst.nute@gmail.com</p>
              <p className="text-gray-600 text-sm">Litva Klaipeda Artojo g 7 E</p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 sm:hidden">
              <a
                href="tel:+37065963444"
                className="flex items-center justify-center gap-2 bg-[#054E32] text-white py-3 rounded-lg hover:bg-[#0A8B58] transition-colors"
              >
                <FiPhone className="text-lg" />
                <span className="font-medium">Call +37065963444</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
