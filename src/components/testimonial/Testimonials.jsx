
import HeadingSubHeading from './../headingSubHeading/HeadingSubHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <div>
                <HeadingSubHeading subHeading={"What Our Client Say"} heading={"Testimonials"}></HeadingSubHeading>
            </div>
            <div className='my-0 md:my-10'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className='px-12 md:px-40 text-center'>
                                <div className='flex justify-center pb-5 md:pb-10'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className='flex justify-center md:mb-5 '>
                                    <FaCanadianMapleLeaf  className='text-7xl font-extrabold' />
                                </div>
                                <p className='text-md md:text-xl'>{review.details}</p>
                                <h3 className='text-xl md:text-3xl text-yellow-500 my-5'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;