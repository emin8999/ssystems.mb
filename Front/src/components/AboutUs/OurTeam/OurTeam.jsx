import { useState } from "react";
import Container from "../Container/Container"
import employee1 from '../../../assets/images/employee1.svg'
import employee2 from '../../../assets/images/employee2.svg'
import employee3 from '../../../assets/images/employee3.svg'

const OurTeam = () => {
  const [showAll, setShowAll] = useState(false);

  const allEmployees = [
    { id: 1, img: employee1, name: "Zain Vetrovs", position: "Welding Technician" },
    { id: 2, img: employee2, name: "Zain Vetrovs", position: "Painting Technician" },
    { id: 3, img: employee3, name: "Zain Vetrovs", position: "Electrical Technician" },
    { id: 4, img: employee1, name: "Zain Vetrovs", position: "Senior Technician" },
    { id: 5, img: employee2, name: "Zain Vetrovs", position: "Installation Expert" },
    { id: 6, img: employee3, name: "Zain Vetrovs", position: "Quality Controller" }
  ];

  const employeesToShow = showAll ? allEmployees : allEmployees.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mt-16 md:mt-[100px] font-inter">
        <Container>
            <div className="flex flex-col gap-8 md:gap-[50px]">
                
                {/* Başlık ve Açıklama */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 lg:h-[152px]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#1D2B4F] w-full lg:max-w-[543px] text-center lg:text-left">
                        Meet Our Awesome Team
                    </h3>
                    <p className="text-sm md:text-[16px] text-[#808080] w-full lg:max-w-[544px] text-center lg:text-left leading-relaxed">
                        Each member of our team is highly skilled, experienced, and trained to handle a wide range of plumbing issues efficiently and effectively. Whether it's a simple repair or a complex installation, you can trust our team to get the job done right the first time.
                    </p>
                </div>
                
                {/* Çalışan Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[32px]">
                  {employeesToShow.map((employee) => (
                    <div key={employee.id} className="flex flex-col justify-center items-center gap-4 md:gap-[24px]">
                      <img 
                        src={employee.img} 
                        alt={employee.name} 
                        className="w-full max-w-[280px] md:max-w-none h-auto object-cover"
                      />
                      <div className="flex flex-col justify-center items-center text-center">
                        <h4 className="text-lg md:text-[20px] font-semibold">
                          {employee.name}
                        </h4>
                        <p className="text-[#808080] mt-1 text-sm md:text-base">
                          {employee.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Butonu */}
                {allEmployees.length > 3 && (
                  <div className="flex justify-center">
                    <button 
                      onClick={toggleShowAll}
                      className="py-2 px-6 md:py-[10px] md:px-[20px] border border-[#0ED789] rounded-[10px] text-[#0ED789] text-sm md:text-[16px] hover:bg-[#0ED789] hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {showAll ? "Show Less" : "View More"}
                    </button>
                  </div>
                )}
            </div>
        </Container>
    </div>
  )
}

export default OurTeam