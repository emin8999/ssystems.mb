import Hero from "../../components/Home/Header/Hero.jsx";
import SolutionsSection from "../../components/Home/SolutionsSection/SolutionsSection.jsx";
import ServingSection from "../../components/Home/ServingSection/ServingSection.jsx";
import StepsSection from "../../components/Home/StepsSection/StepsSection.jsx";
import TeamSection from "../../components/Home/TeamSection/TeamSection.jsx";
import FeedbackSection from "../../components/Home/FeedbackSection/FeedbackSection.jsx";
import BookingSection from "../../components/Home/BookingSection/BookingSection.jsx";


function index() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <ServingSection />
      <StepsSection />
      <TeamSection />
      <FeedbackSection />
      <BookingSection />
    </>
  );
}

export default index;
