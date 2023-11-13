

const HeadingSubHeading = ({subHeading, heading}) => {
    return (
        <div>
            <h2 className="text-lg text-[#D99904] text-center italic">---{subHeading}---</h2>
            <div className='flex justify-center my-3'>
                <hr className='w-[40%]' />
            </div>
            <h2 className="text-5xl uppercase font-light text-center">{heading}</h2>
            <div className='flex justify-center mt-3 mb-10'>
                <hr className='w-[40%]' />
            </div>
        </div>
    );
};

export default HeadingSubHeading;