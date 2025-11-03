import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Vector from "../../icon/Vector.svg";

const Footer = () => {
  return (
    <footer className="bg-[#054E32] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg[#054E32] items-center justify-center">
                <img src={Vector} className=" h-9 text-[#054E32]">
                </img>
              </div>
              <span className="text-xl font-bold">SSYSTEMS MB</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              From worn joints to complete rebuilds, our skilled welders provide
              lasting results with professional care.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">My Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/aboutUs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Resource</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 shrink-0" />
                <span>
                  <a href="tel: +37065963444">+37065963444</a>
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 shrink-0" />
                <span><a href="mailto:Sss.santechnika@gmail.com">Sss.santechnika@gmail.com</a></span>

              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <a href="/contacts" className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>Litva Klaipeda Artojo g 7 E</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-sm text-gray-400">
            © 2025 SSYSTEMS MB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
