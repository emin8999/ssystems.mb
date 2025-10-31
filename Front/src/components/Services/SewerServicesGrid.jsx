export default function SewerServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Sewer Line Inspection and Repair",
      description:
        "Our sewer line inspection and repair service utilize state-of-the-art camera inspection technology to identify issues within your sewer line quickly. Whether it's tree root intrusion, cracks, or blockages.",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Water Heater Services",
      description:
        "Professional water heater installation, maintenance and repair services. We ensure your system operates efficiently and reliably for consistent hot water supply.",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Water Heater Services",
      description:
        "Professional water heater installation, maintenance and repair services. We ensure your system operates efficiently and reliably for consistent hot water supply.",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Sewer Line Inspection and Repair",
      description:
        "Our sewer line inspection and repair service utilize state-of-the-art camera inspection technology to identify issues within your sewer line quickly. Whether it's tree root intrusion, cracks, or blockages.",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      imagePosition: "right",
    },
    {
      id: 5,
      title: "Water Heater Services",
      description:
        "Professional water heater installation, maintenance and repair services. We ensure your system operates efficiently and reliably for consistent hot water supply.",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      imagePosition: "left",
    },
    {
      id: 6,
      title: "Sewer Line Inspection and Repair",
      description:
        "Our sewer line inspection and repair service utilize state-of-the-art camera inspection technology to identify issues within your sewer line quickly. Whether it's tree root intrusion, cracks, or blockages.",
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
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
