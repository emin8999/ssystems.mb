import React from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CustomerTestimonials() {

  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: `${t("Service.Customer.testimonial1.name")}`,
      position: `${t("Service.Customer.testimonial1.position")}`,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
      text: `${t("Service.Customer.testimonial1.text")}`,
    },
    {
      id: 2,
      name: `${t("Service.Customer.testimonial2.name")}`,
      position: `${t("Service.Customer.testimonial2.position")}`,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
      text: `${t("Service.Customer.testimonial2.text")}`,
    },
  ];

  return (
    <div className="bg-white py-16 ">
      <div className="max-w-[1220px] mx-auto px-[2.8%] md:px-[2.8%] lg:px-[2.8%]">
        <div className="text-center mb-12">
          <h2
            className="font-bold text-[#101010] mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {t("Service.Customer.title")}
          </h2>
          <p
            className="text-[#808080] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            {t("Service.Customer.text")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border-2 border-[#0ED789] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3
                    className="font-bold text-gray-900"
                    style={{ fontSize: "clamp(1.125rem, 2vw, 1.25rem)" }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className="text-gray-500"
                    style={{ fontSize: "clamp(0.875rem, 1.8vw, 1rem)" }}
                  >
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p
                className="text-[#808080] leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
