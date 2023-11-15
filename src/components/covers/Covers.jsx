

const Covers = ({ img, title, subTitle }) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 z-10">
                <div className="w-full px-[320px] py-10 font-cinzel-font tracking-wider">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Covers;