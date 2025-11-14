import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import ssystems from "../../assets/images/ssystms.png";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="bg-[#054E32] text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 ">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={ssystems} alt="SSYSTEMS MB Logo" className="w-full" />
              </div>
              <span className="text-lg sm:text-xl font-bold">SSYSTEMS MB</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              {t("Footer.fromWorn")}
            </p>
            <div className="flex gap-2 sm:gap-3">
            
         
              <Link
                to="https://www.linkedin.com/in/mb-ssystems-ba4437377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0D5C4B] transition-colors"
                aria-label="Twitter"
              >
               <img className="w-4 h-4 sm:w-6 sm:h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUueLb///8gcrMxe7gHbLDs8/gYcLL0+fyUttbA1OckdLQQbrGMrtHe5/F9p8+3y+GpxN5uncnH2OmGrNFKiL5VjcHa5O/M3OtdksM8gbujwNywyOB+ps3k7fVmmcdCg7wAaK/njD8SAAADhUlEQVR4nO3c7XKiMBSAYYIa9VAVxC+0tnv/V7ltqbNVclx3oJySfZ+/pR3eCWDA0CQBAAAAAAAAAAAAAAAAAAAAAADomaT+TSrW+/FdfFLMVvN5Xm6y1HpfvkNWnabu06IcRzeOkubuq8nBW+9St6RauBuzqBKlmtwGOnccW+9Wh6Qxgu/KeEYxO4UCndvEcrmRTTjQrWMZxGyuFLptJINYaYHuFMcgyrNaeI5jbuNztdBZ71s3sr1eGMeJmO30whcKB8Gv9cKN9c51Ij3qhVEMYSKFGriL4/MwkalWOIvj8/DOB+Kr9a51RZTAPJKD9O1aUwYDJ9b71SEfvLuIY0LzKQ18JhbRHKMfxre3+dE9bEuy4upZzWoU0yFaE1lebjLO+Sa2AayJl82yfH6pUh/fAF6IpBJvHQAMinyw3otvIt4n1WZ7OBw2r1Xi0x+yKEDSIHlkq6stsqo47SaXZwbT8+5Ubv0PmD9I+RR0uN615+BG2z9/Jiv2gQcik3xrvipgrNzjXz+mGYUf51w2EnkKfJFcWxTG4zhWHkXdFIYDnuqNfKH2vdttTefy7QtFVvf63h0zo7p3rQulOv8t0Lm1YWLbwnSrPnH9amd3LrYslMcCndubPWBuV+iVHwTkVgdqu8Jfd76du3UwOlBbFZazxwPdxOg4bVV4fPAk/PyTNh+LrQr/zWQUe+FlChRx4SL6Qpvve3otPFpca3otPFsszO210GQlWb+FhcGJ2FHhdJ2Xy2I5W93f0OJE7KRw/5JlPhWR1I8PdxYDur3B9LuDwkmRfTn4JAuvfag3HWThubo5uby+0GpqMHFrXThNGlePTL/lMLiFal1YBKZioj66MbiYti0MvrUg6qlY9j81bVsYPuzUBYEG6wFbFp7DF0f1NQ6D5XItC4/hMVFWyzm3GtwYatdG7WWj+eDGUNvhTNneYFLTrlC9HRorvzC4QvX7CO01h93QClfqUarMvwdXqFxK3wqVFzkWQytUP8DDK48HWKg+AfXKt6aDK1SnmdEULrVbBQp7RGGNwgYKe0RhjcIGCntEYY3CBgp7RGGNwgYKe0RhjcIGCntEYY3CBgp7RGGNwgYKe0RhjcIGCntEYe3/LXweQKFfzUPW18uVR6fwVur/qU2f1sHfyA1eX/Nht+vvH9rqizT8C5H8y1AAAAAAAAAAAAAAAAAAAAAAAPDz/QbkZkUj4AARIwAAAABJRU5ErkJggg==" alt="" />
              </Link>
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

              {/* Phone */}
              <Link to="/contacts" className="block hover:text-white transition-colors">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-xs sm:text-sm">+370 659 63444</span>
                </li>
              </Link>

              {/* Mail */}
              <Link to="/contacts" className="block hover:text-white transition-colors">
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-xs sm:text-sm break-all">Sss.santechnika@gmail.com</span>
                </li>
              </Link>

              {/* Address */}
              <Link to="/contacts" className="block hover:text-white transition-colors">
                <li className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">Litva Klaipeda Artojo g 7 E</span>
                </li>
              </Link>
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