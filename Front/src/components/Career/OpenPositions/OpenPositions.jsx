import Container from "../../AboutUs/Container/Container.jsx";
import { useTranslation } from "react-i18next";

const OpenPositions = () => {

  const { t } = useTranslation();

  const jobs = [
    {
      id: 1,
      title: `${t("Career.OpenPositions.job1.title")}`,
      type: `${t("Career.OpenPositions.job1.type")}`,
      description: `${t("Career.OpenPositions.job1.description")}`
    },
    {
      id: 2,
      title: `${t("Career.OpenPositions.job2.title")}`,
      type: `${t("Career.OpenPositions.job2.type")}`,
      description: `${t("Career.OpenPositions.job2.description")}`
    },
    {
      id: 3,
      title: `${t("Career.OpenPositions.job3.title")}`,
      type: `${t("Career.OpenPositions.job3.type")}`,
      description: `${t("Career.OpenPositions.job3.description")}`
    }
  ];

  return (
    <section className="mt-16 md:mt-[100px] py-16 md:py-20">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#1D2B4F] text-center mb-12">
          {t("Career.OpenPositions.current")}
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

  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1D2B4F]">{job.title}</h3>
          <p className="text-[#0ED789] text-sm md:text-base mt-1">{job.type}</p>
          <p className="text-[#808080] text-sm md:text-base mt-2">{job.description}</p>
        </div>
        <button className="py-2 px-6 md:py-[10px] md:px-[20px] border border-[#0ED789] rounded-[10px] text-[#0ED789] text-sm md:text-base hover:bg-[#0ED789] hover:text-white transition-colors cursor-pointer whitespace-nowrap self-start">
          {t("Career.OpenPositions.apply")}
        </button>
      </div>
    </div>
  );
};
  
export default OpenPositions;