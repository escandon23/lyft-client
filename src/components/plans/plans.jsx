import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import Plan from "./plan";
import "swiper/css";
import "./plans.scss";

const Plans = () => {


const PlansData = [
  {
    name: "Basic",
    amount: 5000,
    details: [
      "Account Size: $15,000",
      "Welcome Bonus: 20%",
      "Leverage: Up to 1:200",
      "Spreads: From 1.9 pips",
      "Negative Balance Protection",
      "Market Execution",
      "Email Support"
    ]
  },
  {
    name: "Standard",
    amount: 7500,
    details: [
      "Account Size: $20,000",
      "Welcome Bonus: 30%",
      "Leverage: Up to 1:300",
      "Spreads: From 1.5 pips",
      "Scalping & Hedging Allowed",
      "Daily Trading Signals",
      "Priority Support"
    ]
  },
  {
    name: "Premium",
    amount: 10000,
    details: [
      "Account Size: $30,000",
      "Welcome Bonus: 50%",
      "Leverage: Up to 1:500",
      "Spreads: From 1.2 pips",
      "Daily Trading Signals",
      "Personal Account Manager",
      "24/7 Priority Support"
    ]
  }
];



  return (
    <>

      <div className="plans">
            <div className="header">
                <h1>Secure a spot with us</h1>
            </div>
             <div className="plans-wrapper sm">

      
            <Swiper
                modules={[Pagination ]}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides
                pagination={{ clickable: true }}
            >
                {PlansData.map((plan, index) => (
                <SwiperSlide key={index}>
                    <Plan
                    key={index}
                    name={plan.name}
                    amount={plan.amount}
                    details={plan.details}/>
                </SwiperSlide>
                            ))}
            
            </Swiper>
       
         
        </div>

        <div className="plans-wrapper lg">
        {PlansData.map((plan, index) => (
      
            <Plan
            key={index}
            name={plan.name}
            amount={plan.amount}
            details={plan.details}
            />
        ))}
        </div>
      

        </div>

    

  

    
    </>
  );
};

export default Plans;



        
