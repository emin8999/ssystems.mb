import React from "react";
import HeroSection from "../../components/Services/HeroSection";
import WhyChooseUs from "../../components/Services/WhyChooseUs";
import SewerServicesGrid from "../../components/Services/SewerServicesGrid";
import CustomerTestimonials from "../../components/Services/CustomerTestimonials";

export default function ServicePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyChooseUs />
      <SewerServicesGrid />
      <CustomerTestimonials />
    </div>
  );
}
