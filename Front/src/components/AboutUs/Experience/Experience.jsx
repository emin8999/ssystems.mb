import { useState, useEffect, useRef } from "react";
import Container from "../Container/Container"
import experiencedCompany from "../../../assets/images/experiencedCompany1.png";
import { useTranslation } from "react-i18next";

const AnimatedCounter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const startValue = 0;
          const endValue = end;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + easeOut * (endValue - startValue));
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  const displayValue = end === 20 ? `${count}K${suffix}` : `${count}${suffix}`;

  return <span ref={countRef}>{displayValue}</span>;
};

const Experience = () => {

  const { t } = useTranslation();

  return (
    <div className="mt-16 md:mt-[100px]">
        <Container>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-[27px] font-inter items-center xl:items-start">
                <div className="w-full xl:w-auto flex justify-center xl:block">
                    <img 
                        src={experiencedCompany} 
                        alt="experience" 
                        className="max-w-[280px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-none xl:w-auto rounded-[20px] lg:max-w-[549px] lg:h-[800px]"
                    />
                </div>
                

                <div className="flex flex-col gap-8 xl:gap-[50px] w-full xl:w-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[64px] text-[#1D2B4F] text-center xl:text-left xl:leading-none">
                        {t("AboutUs.Experience.title")}
                    </h2>
                    
                    <div className="flex flex-col gap-6 xl:gap-[36px] text-[#808080] text-sm md:text-base xl:text-[16px]">
                        <p className="text-center xl:text-left xl:leading-normal">
                            {t("AboutUs.Experience.weAre")}
                        </p>
                        <p className="text-center xl:text-left xl:leading-normal">
                            {t("AboutUs.Experience.weBelieve")}
                        </p>
                        <p className="text-center xl:text-left xl:leading-normal">
                            {t("AboutUs.Experience.ourMission")}
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 xl:gap-[27px] mt-8 xl:mt-[50px] justify-center xl:justify-start">
                        
                        <div className="text-center xl:text-left">
                            <p className="text-[#0ED789] text-3xl sm:text-4xl md:text-5xl xl:text-[64px] xl:leading-none">
                                <AnimatedCounter end={10} duration={1500} />
                            </p>
                            <h3 className="text-[#1D2B4F] text-sm md:text-base xl:text-[18px] mt-2 xl:mt-0">
                                {t("AboutUs.Experience.years")}
                            </h3>
                        </div>
                        
                        <div className="text-center xl:text-left">
                            <p className="text-[#0ED789] text-3xl sm:text-4xl md:text-5xl xl:text-[64px] xl:leading-none">
                                <AnimatedCounter end={20} duration={2000} />
                            </p>
                            <h3 className="text-[#1D2B4F] text-sm md:text-base xl:text-[18px] mt-2 xl:mt-0">
                                {t("AboutUs.Experience.happy")}
                            </h3>
                        </div>
                        
                        <div className="text-center xl:text-left">
                            <p className="text-[#0ED789] text-3xl sm:text-4xl md:text-5xl xl:text-[64px] xl:leading-none">
                                <AnimatedCounter end={250} duration={1800} suffix="" />
                            </p>
                            <h3 className="text-[#1D2B4F] text-sm md:text-base xl:text-[18px] mt-2 xl:mt-0">
                                {t("AboutUs.Experience.qualified")}
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Experience;