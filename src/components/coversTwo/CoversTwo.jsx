

const CoversTwo = ({ img, title, subTitle }) => {
    return (
        <div className="hero h-[300px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white bg-black bg-opacity-40 z-10 mx-5 md:mx-28">
                <div className="w-full px-2 md:px-[100px] py-5 font-inter-font">
                    <h1 className="mb-5 text-3xl font-bold">{title}</h1>
                    <p className="mb-5 text-sm md:text-xs tracking-widest">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default CoversTwo;