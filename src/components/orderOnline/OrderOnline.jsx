import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const OrderOnline = () => {
    return (
        <div className='py-10 block'>
            <div>
                <h2 className="text-lg text-[#D99904] text-center italic">---From 11:00am to 10:00pm---</h2>
                <div className='flex justify-center my-3'>
                    <hr className='w-[40%]' />
                </div>
                <h2 className="text-5xl uppercase font-light text-center">ORDER ONLINE</h2>
                <div className='flex justify-center mt-3 mb-10'>
                    <hr className='w-[40%]' />
                </div>
            </div>
            <div className='mx-5 md:px-40'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={12}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slide1} className="pb-10" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} className="pb-10" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide3} className="pb-10" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide4} className="pb-10" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide5} className="pb-10" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OrderOnline;