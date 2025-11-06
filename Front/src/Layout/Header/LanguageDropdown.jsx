import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import i18n from "../../language/i18n.js"; 
import georga from "../../icon/georga.png";
import russia from "../../icon/russian.png";
import Lituan from "../../icon/Lituan.png";
import german from "../../icon/german.png";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: "Eng",
    label: "England",
    icon: georga,
    lng: "en",
  });

  const dropdownRef = useRef(null);

  // Kənara kliklə bağlılıq
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setOpen(!open);

  // Dil seçimi
  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    i18n.changeLanguage(lang.lng); // 🟢 Saytın dilini dəyiş
  };

  const languages = [
    { code: "Lit", label: "Lithuania", icon: Lituan, lng: "lt" },
    { code: "Eng", label: "England", icon: georga, lng: "en" },
    { code: "Ger", label: "Germany", icon: german, lng: "de" },
    { code: "Rus", label: "Russian", icon: russia, lng: "ru" },
  ];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-[140px] px-4 py-2 rounded-md border  shadow-sm  "
      >
        <div className="flex items-center gap-1.5">
          <img src={selected.icon} alt={selected.label} className="w-4 h-4" />
          {selected.label}
        </div>
        <FaChevronDown className="mr-[-10px]" />
      </button>

      {open && (
        <div className="absolute mt-1 w-[150px] border rounded-md shadow-lg bg-white text-black z-50">
          <ul className="p-3 flex flex-col gap-2">
            {languages.map((lang) => (
              <li
                key={lang.code}
                className={`py-2 px-2 cursor-pointer rounded hover:bg-gray-100 flex items-center gap-2 ${
                  selected.code === lang.code ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => handleSelect(lang)}
              >
                <img src={lang.icon} alt={lang.label} className="w-4 h-4" />
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
