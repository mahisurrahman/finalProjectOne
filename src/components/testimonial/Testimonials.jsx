
import HeadingSubHeading from './../headingSubHeading/HeadingSubHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Testimonials = () => {

    const [reviews, setReviews]= useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data));
    },[])
    return (
        <div>
            <div>
                <HeadingSubHeading subHeading={"What Our Client Say"} heading={"Testimonials"}></HeadingSubHeading>
            </div>
            <div className='my-10'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                   {
                    reviews.map(review=><SwiperSlide 
                    key={review._id}>
                        <div className='px-40 text-center'>
                            
                            <p className='text-xl'>{review.details}</p>
                            <h3 className='text-3xl text-yellow-500 my-5'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                   }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;