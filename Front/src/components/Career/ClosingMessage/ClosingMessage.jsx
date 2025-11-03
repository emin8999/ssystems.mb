import Container from "../../AboutUs/Container/Container.jsx"

const ClosingMessage = () => {
  return (
    <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-[100px]">
      <Container>
        <div className="relative bg-gradient-to-r from-[#054E32] to-[#0A6B47] rounded-2xl sm:rounded-3xl overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 text-center">
          
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#0ED789] opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0ED789] opacity-5 rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0ED789] rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-2xl font-bold">✓</span>
              </div>
            </div>
            
            <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight sm:leading-snug mb-6 sm:mb-8 max-w-4xl mx-auto">
              "Together, we build not just structures — we build trust."
            </blockquote>

            <div className="w-20 h-1 bg-[#0ED789] mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-[#E8F5E8] text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto">
              Join us in creating lasting impact through quality craftsmanship and unwavering reliability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClosingMessage;