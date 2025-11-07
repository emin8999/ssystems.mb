import { Link } from "react-router-dom";
import Container from "../Container/Container"
import worker from '../../../assets/images/worker.svg';
import ourServices from "../../../assets/images/ourServices.png"
import { useTranslation } from "react-i18next";

const OurServices = () => {

    const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-[100px]">
        <Container>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[70px] bg-[#0ED789] rounded-2xl lg:rounded-[20px] py-8 lg:py-[50px] px-6 lg:px-[50px] text-white items-center w-full min-h-[300px] lg:min-h-[460px]">
                <div className="flex-shrink-0 flex justify-center lg:block">
                    <img 
                        src={ourServices} 
                        alt="worker" 
                        className="h-[200px] sm:h-[280px] lg:h-[360px] w-auto object-contain rounded-[20px] lg:rounded-[30px]"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1 h-full gap-6 lg:gap-0">
                    <div className="font-inter gap-4 lg:gap-[20px] flex flex-col text-center lg:text-left">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-medium leading-tight lg:leading-[1.1]">
                            {t("AboutUs.OurServices.title")}
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            {t("AboutUs.OurServices.take")}
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-[16px] mt-4 lg:mt-8 justify-center lg:justify-start">
                        <Link 
                            to="/contacts" 
                            className="py-2 px-6 lg:py-[12px] lg:px-[24px] bg-[#FFFFFF] rounded-lg lg:rounded-[10px] text-[#0ED789] cursor-pointer font-semibold hover:bg-[#f0f0f0] transition-colors text-sm lg:text-base whitespace-nowrap text-center"
                        >
                            {t("AboutUs.OurServices.contactUs")}
                        </Link>
                        <Link 
                            to="/services" 
                            className="py-2 px-6 lg:py-[12px] lg:px-[24px] border border-[#FFFFFF] rounded-lg lg:rounded-[10px] text-[#FFFFFF] cursor-pointer font-semibold hover:bg-[#FFFFFF] hover:text-[#0ED789] transition-colors text-sm lg:text-base whitespace-nowrap text-center"
                        >
                            {t("AboutUs.OurServices.learnMore")}
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default OurServices;