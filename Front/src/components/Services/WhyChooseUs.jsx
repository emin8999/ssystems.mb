import React from "react";
import { Phone, DollarSign, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {

  const { t } = useTranslation();

  const features = [
    {
      icon: Phone,
      title: `${t("Service.WhyChooseUs.feature1.title")}`,
      description: `${t("Service.WhyChooseUs.feature1.description")}`,
    },
    {
      icon: DollarSign,
      title: `${t("Service.WhyChooseUs.feature2.title")}`,
      description: `${t("Service.WhyChooseUs.feature2.description")}`,
    },
    {
      icon: Wrench,
      title: `${t("Service.WhyChooseUs.feature3.title")}`,
      description: `${t("Service.WhyChooseUs.feature3.description")}`,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1240px] mx-auto px-[5%] md:px-[2.8%]">
        <h2
          className="font-bold text-center text-[#101010] mb-16 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {t("Service.WhyChooseUs.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-[#D9D9D9] flex items-center justify-center mb-6">
                <feature.icon
                  className="w-12 h-12 text-[#0ED789]"
                  strokeWidth={2.5}
                />
              </div>

              <h3
                className="font-semibold text-gray-900 mb-4"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                }}
              >
                {feature.title}
              </h3>

              <p
                className="text-[#808080] leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
