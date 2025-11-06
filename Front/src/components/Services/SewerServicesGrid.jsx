import { useTranslation } from "react-i18next";

export default function SewerServicesGrid() {

  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: `${t("Service.SewerServices.service1.title")}`,
      description: `${t("Service.SewerServices.service1.description")}`,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 2,
      title: `${t("Service.SewerServices.service2.title")}`,
      description: `${t("Service.SewerServices.service2.description")}`,
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "right",
    },
    {
      id: 3,
      title: `${t("Service.SewerServices.service3.title")}`,
      description: `${t("Service.SewerServices.service3.description")}`,
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 4,
      title: `${t("Service.SewerServices.service4.title")}`,
      description:`${t("Service.SewerServices.service4.description")}`,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      imagePosition: "right",
    },
    {
      id: 5,
      title: `${t("Service.SewerServices.service5.title")}`,
      description:`${t("Service.SewerServices.service5.description")}`,
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 6,
      title: `${t("Service.SewerServices.service6.title")}`,
      description:`${t("Service.SewerServices.service6.description")}`,
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      imagePosition: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto px-[2.8%] space-y-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row ${
              service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <div className="relative overflow-hidden rounded-[20px] w-full lg:w-[544px] h-[300px] sm:h-[400px] lg:h-[500px] shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 max-w-[600px]">
              <h2
                className="font-bold text-[#101010] mb-6 leading-tight"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                }}
              >
                {service.title}
              </h2>
              <p
                className="text-[#808080] mb-6 leading-relaxed"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                }}
              >
                {service.description}
              </p>
              <button className="px-6 py-3 border-2 border-[#0ED789] text-[#0ED789] rounded-[10px] text-lg font-medium hover:bg-emerald-50 transition-colors duration-300 cursor-pointer">
                {t("Service.SewerServices.learnMore")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
