import Testimonial from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";


import "./Testimonials.scss"


const TestimonialData = [
    {
        name : "Diana Collins",
        designation : "CEO - Ample",
        image : "/testimonials/image1.jpg",
        comment : " I started investing in bitcoin and the crypto trading in January. 'A friend showed me how much money she had made on bitcoin trading with lyftfx ! I needed to give them a trial, to cut the long story short, I am now a crypto millionaire!'"

    },
        {
        name : "Blake ",
        designation : "Senior Software Engineer - Amazon",
        image : "/testimonials/image2.jpg",
        comment : " Saving doesn’t make one rich, investing does! A key goal of saving and investing, even at an early age, should be to help ensure that you have enough money after you stop working. I have made more money investing than I ever did working in the U.S Navy! Way to go, Crypto !!."

    },
        {
        name : "Jaden yung",
        designation : "CEO - Jimbali Enterprise",
        image : "/testimonials/image3.jpg",
        comment : "I started investing in crypto back in 2017. I would say l was 4 on a scale of 1 to 10 when it came to it then! But today, I know all the basics, and already made over 5 million investing with CoinCircle compared to several friends of mine who took their money else where."

    },
]

const Testimonials = () => {


    return (
        <div className="testimonials">
            <div className="header">
                <h1>What our clients are saying..... </h1>
            </div>
             <div className="testimonials-wrapper sm">

      
            <Swiper
                modules={[Pagination ]}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides
                pagination={{ clickable: true }}
            >
                {TestimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <Testimonial
                    name={testimonial.name}
                    image={testimonial.image}
                    comment={testimonial.comment}
                    designation={testimonial.designation}
                    />
                </SwiperSlide>
                ))}
            
            </Swiper>
       
         
        </div>

        <div className="testimonials-wrapper lg">
        {TestimonialData.map((testimonial, index) => (
            <Testimonial
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            comment={testimonial.comment}
            designation={testimonial.designation}
            />
        ))}
        </div>
      

        </div>


        
           
    )
    
    ;
  }



export default Testimonials

