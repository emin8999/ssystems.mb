import { Link } from "react-router-dom";
import Container from "../Container/Container"
import worker from '../../../assets/images/worker.svg'

const OurServices = () => {
  return (
    <div className="mt-16 md:mt-[100px]">
        <Container>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[70px] bg-[#0ED789] rounded-2xl lg:rounded-[20px] py-8 lg:py-[50px] px-6 lg:px-[50px] text-white items-center w-full min-h-[300px] lg:min-h-[460px]">
                <div className="flex-shrink-0 flex justify-center lg:block">
                    <img 
                        src={worker} 
                        alt="worker" 
                        className="h-[200px] sm:h-[280px] lg:h-[360px] w-auto object-contain"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1 h-full gap-6 lg:gap-0">
                    <div className="font-inter gap-4 lg:gap-[20px] flex flex-col text-center lg:text-left">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-medium leading-tight lg:leading-[1.1]">
                            Ready to Experience Quality Services
                        </h4>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            Take the first step towards resolving your issues by contacting us today. Our team of skilled professionals is ready to assist you with all your repairing needs.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-[16px] mt-4 lg:mt-8 justify-center lg:justify-start">
                        <Link 
                            to="/contacts" 
                            className="py-2 px-6 lg:py-[12px] lg:px-[24px] bg-[#FFFFFF] rounded-lg lg:rounded-[10px] text-[#0ED789] cursor-pointer font-semibold hover:bg-[#f0f0f0] transition-colors text-sm lg:text-base whitespace-nowrap text-center"
                        >
                            Contact Us
                        </Link>
                        <Link 
                            to="/services" 
                            className="py-2 px-6 lg:py-[12px] lg:px-[24px] border border-[#FFFFFF] rounded-lg lg:rounded-[10px] text-[#FFFFFF] cursor-pointer font-semibold hover:bg-[#FFFFFF] hover:text-[#0ED789] transition-colors text-sm lg:text-base whitespace-nowrap text-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default OurServices