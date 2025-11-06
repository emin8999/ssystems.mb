import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Vector from "../../icon/Vector.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-[#054E32] text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Vector} alt="SSYSTEMS MB Logo" className="h-9" />
              </div>
              <span className="text-lg sm:text-xl font-bold">SSYSTEMS MB</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {t("Footer.fromWorn")}
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("Footer.myCompany")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aboutUs"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {t("Footer.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {t("Footer.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {t("Footer.contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("Footer.ourResource")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/career"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {t("Footer.career")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors block py-1"
                >
                  {t("Footer.blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{t("Footer.contactUs")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-xs sm:text-sm">
                  <a href="tel:+37065963444" className="hover:text-white transition-colors">
                    +370 659 63444
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="text-xs sm:text-sm">
                  <a href="mailto:Sss.santechnika@gmail.com" className="hover:text-white transition-colors break-all">
                    Sss.santechnika@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Link to="/contact" className="flex items-start gap-2 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Litva Klaipeda Artojo g 7 E</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 sm:pt-6">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            {t("Footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;