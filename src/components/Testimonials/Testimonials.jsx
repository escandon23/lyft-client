import Testimonial from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";


import "./Testimonials.scss"


const TestimonialData = [

     {
        name : "Blake ",
        designation : "Senior Software Engineer - Amazon",
        image : "/testimonials/image2.jpg", 
        comment: "Since joining Lyft Fx , my trading experience has completely changed. The tools, execution speed, and account options helped me scale my strategy and achieve steady returns over time."

    },
    {
        name : "Diana Collins",
        designation : "CEO - Ample",
        image : "/testimonials/image1.jpg",
        comment: "A reliable trading platform with fast execution and professional tools. Perfect for both beginners and experienced traders."

    },
   
        {
        name : "Jaden yung",
        designation : "CEO - Jimbali Enterprise",
        image : "/testimonials/image3.jpg",
        comment: "Reliable execution, transparent pricing, and a professional trading environment. Lyft Fx has given me the confidence and infrastructure needed to trade efficiently in global markets."

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

