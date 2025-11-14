import Container from "../../AboutUs/Container/Container.jsx"
import { useTranslation } from "react-i18next";

const Header = () => {

  const { t } = useTranslation();

  return (
    <div className="bg-[#054E32] font-inter text-white">
        <Container>
            <div className="flex flex-col gap-6 md:gap-[20px] max-w-full md:max-w-[640px] pt-8 md:pt-[36px] pb-16 md:pb-[166px]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left">
                    {t("Career.Header.build")}
                </h1>
                <p className="text-sm md:text-[16px] font-normal leading-relaxed md:leading-[24px] h-auto md:h-[96px] text-center md:text-left">
                   {t("Career.Header.text")}
                </p>
                <div className="flex justify-center md:justify-start">
            
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header;