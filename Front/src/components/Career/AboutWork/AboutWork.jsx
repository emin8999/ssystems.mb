import Container from "../../AboutUs/Container/Container.jsx"
import experience from "../../../assets/images/experience.svg"

const AboutWork = () => {
  const benefits = [
    "Stable and long-term employment",
    "Safe and supportive work environment", 
    "Career growth opportunities",
    "Training and skill development programs",
    "Competitive salary and bonuses"
  ];

  return (
    <section className="mt-16 md:mt-[100px]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[70px] items-center">
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
            <img 
              src={experience} 
              alt="Experience illustration" 
              className="w-full h-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none object-contain"
            />
          </div>

          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#1D2B4F] text-center lg:text-left mb-6 lg:mb-12">
              Why Work With Us?
            </h2>
            <p className="text-[#808080] text-sm md:text-base leading-relaxed mb-6 lg:mb-8 text-center lg:text-left">
              We believe that great results come from teamwork, respect, and dedication. Our employees are the foundation of everything we build. Whether you're a welder, engineer, or construction expert, you'll have opportunities to grow, learn, and contribute to projects that make a difference.
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