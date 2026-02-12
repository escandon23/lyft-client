import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import Package from "./package";

import "swiper/css";

import "./packages.scss";

const Packages = () => {

 


const PackagesData = [
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
      <div className="packages">
            <div className="header">
                <h1>Secure a spot with us</h1>
            </div>
             <div className="package-wrapper sm">
              <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable : true}}>
                {PackagesData.map((data , index) => (
                  <SwiperSlide key={index} >
                      <Package name={data.name} amount={data.amount} details={data.details}/>
                  </SwiperSlide>)) }
              </Swiper>'      
             </div>

              <div className="package-wrapper lg">
              {PackagesData.map((data, index) => (
                  <Package
                  key={index}
                  name={data.name}
                  amount={data.amount}
                  details={data.details}
                  />
              ))}
               </div>
      

        </div>

  );
};

export default Packages;



