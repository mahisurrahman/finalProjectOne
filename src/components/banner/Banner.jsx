import bannerImg from '../../assets/home/banner.jpg'

const Banner = () => {
    return (
        <div className="mx-5 md:mx-40 my-3 md:my-10 relative h-[300px] md:h-[420px] border-2">
          <img src={bannerImg} className='absolute w-full h-full' alt="" />  
          <div className='mx-5 md:mx-20 my-10 md:my-20 px-5 md:px-20 py-5 md:py-20 absolute bg-white text-center'>
            <h2 className='font-cinzel-font text-4xl'>Bistro Boss</h2>
            <p className='text-sm py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
        </div>
    );
};

export default Banner;