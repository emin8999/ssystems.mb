import Container from "../Container/Container"

const Header = () => {
  return (
    <div className="bg-[#054E32] font-inter text-white">
        <Container>
            <div className="flex flex-col gap-6 md:gap-[20px] max-w-full md:max-w-[640px] pt-8 md:pt-[36px] pb-16 md:pb-[166px]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left">
                    About Us
                </h1>
                <p className="text-sm md:text-[16px] font-normal leading-relaxed md:leading-[24px] h-auto md:h-[96px] text-center md:text-left">
                    SSYSTEMS MB proudly serves customers in Lithuania and its surrounding regions, providing prompt and reliable repairing solutions to homes and businesses alike. Whether you're located in the heart of the city or in the outskirts, we're here to assist you.
                </p>
            </div>
        </Container>
    </div>
  )
}

export default Header