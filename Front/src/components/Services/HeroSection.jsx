import { useTranslation } from "react-i18next";

const HeroSection = () => {

  const { t } = useTranslation();

  return (
    <section className="bg-[#054E32] text-white flex items-center min-h-[400px] md:min-h-[464px]">
      <div className="max-w-[1240px] mx-auto w-full px-[5%] md:px-[2.8%] py-16 md:py-20 flex flex-col space-y-6">
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          {t("Service.Hero.title1")} <br /> {t("Service.Hero.title2")}
        </h1>

        <p
          className="text-[#FFFFFF] max-w-2xl leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          }}
        >
          {t("Service.Hero.text")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
