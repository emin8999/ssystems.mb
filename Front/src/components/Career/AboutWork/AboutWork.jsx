import Container from "../../AboutUs/Container/Container.jsx"
import office from "../../../assets/images/office.png"
import { useTranslation } from "react-i18next";

const AboutWork = () => {

  const { t } = useTranslation();

  const benefits = [
    `${t("Career.AboutWork.benefit1")}`,
    `${t("Career.AboutWork.benefit2")}`, 
    `${t("Career.AboutWork.benefit3")}`,
    `${t("Career.AboutWork.benefit4")}`,
    `${t("Career.AboutWork.benefit5")}`
  ];

  return (
    <section className="mt-16 md:mt-[100px]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[70px] items-center">
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
            <img 
              src={office} 
              alt="Experience illustration" 
              className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none object-contain rounded-[20px] lg:rounded-[30px]"
            />
          </div>

          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#1D2B4F] text-center lg:text-left mb-6 lg:mb-12">
              {t("Career.AboutWork.title")}
            </h2>
            <p className="text-[#808080] text-sm md:text-base leading-relaxed mb-6 lg:mb-8 text-center lg:text-left">
              {t("Career.AboutWork.text")}
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#0ED789] rounded-full flex-shrink-0"></div>
                  <span className="text-[#1D2B4F] text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutWork;