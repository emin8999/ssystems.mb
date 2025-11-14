import Container from "../Container/Container"
import customer from '../../../assets/images/customer.svg'
import star from '../../../assets/icons/star.svg';
import { useTranslation } from "react-i18next";

const CustomerSay = () => {

  const { t } = useTranslation();

  const customerReviews = [
    {
      id: 1,
      name: `${t("AboutUs.CustomerSay.customerReview1.name")}`,
      position: `${t("AboutUs.CustomerSay.customerReview1.position")}`,
      rating: 5,
      comment: `${t("AboutUs.CustomerSay.customerReview1.comment")}`
    },
    {
      id: 2,
      name: `${t("AboutUs.CustomerSay.customerReview2.name")}`,
      position: `${t("AboutUs.CustomerSay.customerReview2.position")}`,
      rating: 3,
      comment: `${t("AboutUs.CustomerSay.customerReview2.comment")}`
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <img 
            key={index}
            src={star} 
            alt="star" 
            className={`w-4 h-4 md:w-5 md:h-5 ${index < rating ? 'opacity-100' : 'opacity-30'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-16 md:mt-[100px]">
        <Container>
            <div className="flex flex-col justify-center items-center gap-8 md:gap-[50px] font-inter">
                <div className="flex flex-col gap-4 md:gap-[20px] items-center justify-center text-center">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold px-4">
                        {t("AboutUs.CustomerSay.title")}
                    </h3>
                    <p className="text-[#808080] max-w-full md:max-w-[513px] text-sm md:text-base px-4">
                        {t("AboutUs.CustomerSay.text")}
                    </p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-6 md:gap-[32px] w-full px-4 md:px-0">
                  {customerReviews.map((review) => (
                    <div key={review.id} className="flex flex-col gap-4 md:gap-[20px] border border-[#0ED789] p-4 md:p-[20px] rounded-2xl md:rounded-[20px] w-full">
                        <div className="flex gap-4 md:gap-[16px] items-center">
                            <img 
                                src={customer} 
                                alt="customer" 
                                className="w-12 h-12 md:w-14 md:h-14"
                            />
                            <div className="flex flex-col gap-1">
                                <h4 className="font-semibold text-base md:text-lg">
                                    {review.name}
                                </h4>
                                <p className="text-[#808080] text-xs md:text-sm">
                                    {review.position}
                                </p>
                            </div>
                        </div>
                        <div >
                            {renderStars(review.rating)}
                        </div>

                        <div>
                            <p className="text-[#00000080] text-sm md:text-base leading-relaxed">
                                {review.comment}
                            </p>
                        </div>
                    </div>
                  ))}
                </div>
            </div>    
        </Container>    
    </div>
  )
}

export default CustomerSay;