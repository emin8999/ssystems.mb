import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full bg-[#054E32] text-white shadow-sm">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-[70px] md:px-12">
        <div className="flex items-center gap-2">
          <img src="/public/Vector.png" alt="logo" className="w-8 h-8" />
          <span className="font-semibold text-lg tracking-wide">
            SSYSTEMS MB
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors">
            Service
          </Link>
          <Link to="/contacts" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden sm:flex items-center gap-2 text-sm">
          <FiPhone className="text-xl" />
          <span>(807) 555-0101</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
