const HeroSection = () => {
  return (
    <section className="bg-[#054E32] text-white flex items-center min-h-[400px] md:min-h-[464px]">
      <div className="max-w-[1240px] mx-auto w-full px-[5%] md:px-[2.8%] py-16 md:py-20 flex flex-col space-y-6">
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          We Provide The Best <br /> Service for You
        </h1>

        <p
          className="text-[#FFFFFF] max-w-2xl leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          }}
        >
          SSYSTEMS MB proudly serves customers in Lithuania and its surrounding
          regions, providing prompt and reliable repairing solutions to homes
          and businesses alike. Whether you're located in the heart of the city
          or in the outskirts, we're here to assist you.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
