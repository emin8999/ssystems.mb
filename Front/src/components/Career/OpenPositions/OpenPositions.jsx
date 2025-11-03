import Container from "../../AboutUs/Container/Container.jsx"

const OpenPositions = () => {
  const jobs = [
    {
      id: 1,
      title: "Welder",
      type: "Full-time / On-site",
      description: "Experience with MIG, TIG, and stick welding required."
    },
    {
      id: 2,
      title: "Construction Worker",
      type: "Full-time / Project-based",
      description: "Knowledge of modern tools and safety procedures is a must."
    },
    {
      id: 3,
      title: "Ship Repair Technician",
      type: "Full-time",
      description: "Work in port area; technical education preferred."
    }
  ];

  return (
    <section className="mt-16 md:mt-[100px] py-16 md:py-20">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#1D2B4F] text-center mb-12">
          Current Job Openings
        </h2>
        
        <div className="flex flex-col gap-6 md:gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1D2B4F]">{job.title}</h3>
          <p className="text-[#0ED789] text-sm md:text-base mt-1">{job.type}</p>
          <p className="text-[#808080] text-sm md:text-base mt-2">{job.description}</p>
        </div>
        <button className="py-2 px-6 md:py-[10px] md:px-[20px] border border-[#0ED789] rounded-[10px] text-[#0ED789] text-sm md:text-base hover:bg-[#0ED789] hover:text-white transition-colors cursor-pointer whitespace-nowrap self-start">
          Apply Now
        </button>
      </div>
    </div>
  );
};
  
export default OpenPositions;