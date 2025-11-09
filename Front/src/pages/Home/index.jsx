import SolutionImgSectond from "../../img/Solutuonimg.svg";
import SolutionImgFirst from "../../img/Solutionimg1.svg";
import TemirIcon from "../../icon/Temir.svg";
import CantaIcon from "../../icon/Canta.svg";
import elektirikIcon from "../../icon/elektirik.svg";
import gemiIcon from "../../icon/Gemi.svg";
import TemizIcon from "../../icon/Temiz.svg";
import Button from "../../components/button/button";
import Frame1 from "../../img/Frame 1.svg";
import Img117 from "../../icon/Frame 1171276024.svg";
import Book1 from "../../icon/Book1.svg";
import Book2 from "../../icon/Book2.svg";
import Book3 from "../../icon/Book3.svg";
import employee3 from '../../../src/assets/images/employee3.jpg';
import employee1 from '../../../src/assets/images/employee1.jpeg'
import employee2 from '../../../src/assets/images/employee2.jpeg'
import Start from "../../icon/star.svg";
import Marvin from "../../img/Martvin.jpg";
import SonImg from "../../img/Son.svg";
import serviceArea from "../../assets/images/serviceArea1.png";
import quality from "../../assets/images/quality1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function index() {
  const { t } = useTranslation();

  const cardsData = [
    {
      id: 1,
      img: TemirIcon,
      title: `${t("HomePage.Extensive.card1.title")}`,
      text: `${t("HomePage.Extensive.card1.text")}`,
    },
    {
      id: 2,
      img: CantaIcon,
      title: `${t("HomePage.Extensive.card2.title")}`,
      text: `${t("HomePage.Extensive.card2.text")}`,
    },
    {
      id: 3,
      img: elektirikIcon,
      title: `${t("HomePage.Extensive.card3.title")}`,
      text: `${t("HomePage.Extensive.card3.text")}`,
    },
    {
      id: 4,
      img: gemiIcon,
      title: `${t("HomePage.Extensive.card4.title")}`,
      text: `${t("HomePage.Extensive.card4.text")}`,
    },
    {
      id: 5,
      img: TemirIcon,
      title: `${t("HomePage.Extensive.card5.title")}`,
      text: `${t("HomePage.Extensive.card5.text")}`,
    },
    {
      id: 6,
      img: TemirIcon,
      title: `${t("HomePage.Extensive.card6.title")}`,
      text: `${t("HomePage.Extensive.card6.text")}`,
    },
  ];

  return (
    <div>
      <section
        className="Solutions flex flex-col-reverse lg:flex-row justify-between  bg-[#054E32]
  px-4 sm:px-10 md:px-[80px] lg:px-[120px]  py-10"
      >
        <div
          className="text text-[#fff] w-full lg:w-[598px] lg:ml-[60px] mt-7
    text-center sm:text-left"
        >
          <h1
            style={{ fontWeight: 500 }}
            className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[64px]
      leading-[38px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] font-medium"
          >
            {t("HomePage.Solutions.title")}
          </h1>

          <p
            style={{ fontWeight: 400 }}
            className="text-[14px] sm:text-[15px] md:text-[16px] mt-4 mb-8 sm:mb-[50px]
      text-[#E8E8E8] max-w-[600px] mx-auto sm:mx-0"
          >
            {t("HomePage.Solutions.welcome")}
          </p>

          <div className="flex justify-center  sm:justify-start gap-4">
              <Link
                to="/services"
                className="bg-transparent border   border-[#0ED789] text-[#0ACF83] w-[118px] h-[44px] rounded-xl font-medium transition-all duration-300 hover:bg-[#0ED789] hover:text-white hover:scale-105 inline-flex items-center justify-center"
              >
                {t("HomePage.Solutions.learnMore")}
              </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mb-8 lg:mb-0  ">
          <div className="relative w-full max-w-[500px] md:max-w-[600px]">
            <img src={SolutionImgFirst} alt="" className="w-full" />
            {/* <img
              src={SolutionImgSectond}
              alt=""
              className="absolute w-[100px] sm:w-[130px] md:w-[160px] lg:w-[170px]
        top-[80px] sm:top-[100px] md:top-[130px] lg:top-[90px]
        right-[110px] sm:right-[80px] md:right-[170px] lg:right-[160px]"
            /> */}
          </div>
        </div>
      </section>

      <section className="Extensive">
        <div className="ExtensiveText flex justify-center flex-col items-center text-center mb-10 px-4 mt-[100px]">
          <h1
            style={{ fontStyle: "Medium" }}
            className="text-[64px] font-[500] sm:text-[32px] md:text-[64px] leading-tight"
          >
            {t("HomePage.Extensive.title")}
          </h1>
          <p className="text-[16px] font-[400] text-[#00000080] sm:text-[14px]">
            {t("HomePage.Extensive.fromRoutine1")}
            <br />
            {t("HomePage.Extensive.fromRoutine2")}
          </p>
        </div>

        {/* Cards */}
        <div
          className="ExtensiveCard 
  px-[20px] md:px-[80px] lg:px-[200px] 
  flex flex-wrap justify-center gap-[20px] md:gap-[25px] lg:gap-[30px] mb-10
"
        >
          {cardsData.map((card) => (
            <div
              key={card.id}
              style={{ border: "1px solid #0ED789" }}
              className="
        card 
        w-full sm:w-[300px] md:w-[320px] lg:w-[352px] 
        p-[16px] md:p-[18px] lg:p-[20px] 
        rounded-3xl  
        bg-white
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0ED789]/40 hover:border-[#0ACF83]
      "
            >
              <div className="w-full md:w-[280px] lg:w-[292px] mx-auto text-center">
                <img src={card.img} alt={card.title} className="mx-auto" />
                <h1 className="text-[18px] md:text-[19px] lg:text-[20px] mt-5 font-[500]">
                  {card.title}
                </h1>
                <p className="text-[15px] md:text-[16px] font-[400] mt-4 text-[#00000080]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button - cards-dan ayrı */}
   
      </section>

      <section
        className="
    Beyond 
    flex flex-col md:flex-row 
    items-center md:items-start
    px-[20px] md:px-[80px] lg:px-[200px] 
    mt-[60px] md:mt-[80px] lg:mt-[100px] 
    mb-[30px] md:mb-[40px]
    gap-[30px] md:gap-[50px]
  "
      >
        <div className="image w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={serviceArea}
            alt=""
            className="w-[90%] md:w-[100%] lg:w-auto object-contain rounded-[20px] lg:rounded-[30px]"
          />
        </div>

        <div className="text w-full md:w-1/2 lg:w-[500px] text-center md:text-left">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-tight">
            {t("HomePage.Beyond.title")}
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#808080] font-[400] mt-4">
            {t("HomePage.Beyond.text")}
          </p>
          <img className="mt-7 mx-auto md:mx-0 ml-3" src={Img117} alt="" />
          <Link to="/services">
  <Button className="mt-6 flex justify-center md:justify-start">
    Hizmetler
  </Button>
</Link>

        </div>
      </section>

      <section
        className="
    Book 
    px-[20px] md:px-[80px] lg:px-[200px] 
    mt-[60px] md:mt-[80px] lg:mt-[100px] 
    mb-[30px] md:mb-[40px]
  "
      >
        <div className="top">
          <h1 className="text-[28px] md:text-[48px] lg:text-[64px] font-semibold leading-tight text-center">
            {t("HomePage.Book.title")}
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#808080] font-[400] mt-4 text-center">
            {t("HomePage.Book.easySteps1")} <br className="hidden md:block" />
            {t("HomePage.Book.easySteps2")}
          </p>
        </div>

        <div
          className="
      cards 
      flex flex-col md:flex-row flex-wrap 
      justify-center items-center 
      gap-[25px] md:gap-[27px]
      mt-10
    "
        >
          <div
            className="
        card 
        w-full sm:w-[320px] md:w-[330px] lg:w-[355px]
        flex flex-col items-center text-center 
      "
          >
            <img
              src={Book1}
              alt=""
              className="w-[100px] md:w-[120px] lg:w-auto"
            />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
              {t("HomePage.Book.card1.title")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#00000080] mt-5">
              {t("HomePage.Book.card1.text")}
            </p>
          </div>

          <div
            className="
        card 
        w-full sm:w-[320px] md:w-[330px] lg:w-[355px]
        flex flex-col items-center text-center
      "
          >
            <img
              src={Book2}
              alt=""
              className="w-[100px] md:w-[120px] lg:w-auto"
            />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
              {t("HomePage.Book.card2.title")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#00000080] mt-5">
              {t("HomePage.Book.card2.text")}
            </p>
          </div>

          <div
            className="
        card 
        w-full sm:w-[320px] md:w-[330px] lg:w-[355px]
        flex flex-col items-center text-center
      "
          >
            <img
              src={Book3}
              alt=""
              className="w-[100px] md:w-[120px] lg:w-auto"
            />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
              {t("HomePage.Book.card3.title")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#00000080] mt-5">
              {t("HomePage.Book.card3.text")}
            </p>
          </div>
        </div>
      </section>
      {/* {""} */}

      <section
        className="
    Expert 
    px-[20px] md:px-[80px] lg:px-[200px]
    mt-[60px] md:mt-[80px] lg:mt-[100px]
  "
      >
        <div
          className="
      top 
      flex flex-col md:flex-row 
      items-center md:items-start 
      justify-center md:justify-between 
      text-center md:text-left
    "
        >
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-tight mb-5">
            {t("HomePage.Expert.title1")} <br className="hidden md:block" />{" "}
            {t("HomePage.Expert.title2")}
          </h1>
          <p className="text-[15px] md:text-[16px] text-[#808080] md:w-[450px] lg:w-[500px]">
            {t("HomePage.Expert.eachMember")}
          </p>
        </div>

        <div
          className="
      bottom 
      mt-[40px] md:mt-[50px] mb-10
      flex flex-col md:flex-row flex-wrap 
      items-center justify-center
      gap-[25px] md:gap-[30px] lg:gap-[32px]
    "
        >
          <div className="card w-full sm:w-[300px] md:w-[330px] lg:w-[352px] flex flex-col items-center text-center">
            <img src={employee3} alt=""   className="w-[280px] h-[320px] md:w-[320px] md:h-[360px] object-cover rounded-2xl shadow-md" />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
              {t("HomePage.Expert.card1.name")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#808080] mt-1">
              {t("HomePage.Expert.card1.job")}
            </p>
          </div>

          <div className="card w-full sm:w-[300px] md:w-[330px] lg:w-[352px] flex flex-col items-center text-center">
            <img src={employee2} alt=""   className="w-[280px] h-[320px] md:w-[320px] md:h-[360px] object-cover rounded-2xl shadow-md" />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
              {t("HomePage.Expert.card2.name")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#808080] mt-1">
              {t("HomePage.Expert.card2.job")}
            </p>
          </div>

          <div className="card w-full sm:w-[300px] md:w-[330px] lg:w-[352px] flex flex-col items-center text-center">
            <img src={employee1} alt=""   className="w-[280px] h-[320px] md:w-[320px] md:h-[360px] object-cover rounded-2xl shadow-md" />
            <h1 className="text-[18px] md:text-[20px] font-[500] mt-5">
            {t("HomePage.Expert.card2.job")}
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#808080] mt-1">
              {t("HomePage.Expert.card3.job")}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center mt-[100px]  md:px-20 sm:px-4">
        <div className="text-center mb-10 px-2 sm:px-0">
          <h1 className="text-[64px] font-bold mb-4 sm:text-[28px] md:text-[64px] leading-tight">
            {t("HomePage.Customers.title")}
          </h1>
          <p className="text-[#808080] text-[16px] sm:text-[14px] max-w-[600px] mx-auto">
            {t("HomePage.Customers.text")}
          </p>
        </div>

        <div className="flex justify-between gap-6 flex-wrap w-full max-w-[1120px]">
          <div className="flex flex-col p-4 sm:p-6 border border-[#0ED789] rounded-2xl w-[540px] sm:w-full md:w-[48%] bg-white shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <img
                src={Marvin}
                alt="Customer"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-[16px] sm:text-[14px]">
                  {t("HomePage.Customers.card1.name")}
                </h3>
                <p className="text-[14px] sm:text-[12px] text-[#808080]">
                  {t("HomePage.Customers.card1.job")}
                </p>
              </div>
            </div>
            <div className="flex mb-3">
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
            </div>
            <p className="text-[15px] sm:text-[14px] text-[#808080] leading-relaxed">
              {t("HomePage.Customers.card1.comment")}
            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-6 border border-[#0ED789] rounded-2xl w-[540px] sm:w-full md:w-[48%] bg-white shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <img
                src={Marvin}
                alt="Customer"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-[16px] sm:text-[14px]">
                  {t("HomePage.Customers.card2.name")}
                </h3>
                <p className="text-[14px] sm:text-[12px] text-[#808080]">
                  {t("HomePage.Customers.card2.job")}
                </p>
              </div>
            </div>
            <div className="flex mb-3">
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
              <img src={Start} alt="star" />
            </div>
            <p className="text-[15px] sm:text-[14px] text-[#808080] leading-relaxed">
              {t("HomePage.Customers.card2.comment")}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-[100px] lg:px-[200px] mt-[100px] mb-[100px] ">
        <div className="bg-[#0ED789] rounded-xl p-6 sm:p-8 md:flex md:items-center md:gap-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={quality}
              alt="Service"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-[64px] font-semibold mb-4">
              {t("HomePage.QualityServices.title1")} <br />{" "}
              {t("HomePage.QualityServices.title2")}
            </h1>
            <p className="text-sm sm:text-base mb-6">
              {t("HomePage.QualityServices.take")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-12">
  {/* Contact Us button */}
  <a
    href="/contacts"
    className="bg-white text-green-500 px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-md text-center"
  >
    {t("HomePage.QualityServices.contactUs")}
  </a>

  {/* Learn More button */}
  <a
    href="/services"
    className="border border-white text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-green-500 hover:scale-105 hover:shadow-md text-center"
  >
    {t("HomePage.QualityServices.learnMore")}
  </a>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
