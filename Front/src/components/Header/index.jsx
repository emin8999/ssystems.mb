import React from "react";
import { useTranslation } from "react-i18next";

const Index = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#054E32] flex flex-col justify-center text-white font-inter p-4 md:p-16">
      <div className="md:ml-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          {t("Contact.Header.title")}
        </h1>
        <p className="w-full sm:w-3/4 md:w-2/5 font-light text-base leading-6 tracking-normal">
          {t("Contact.Header.text")}
        </p>
      </div>
    </div>
  );
};

export default Index;