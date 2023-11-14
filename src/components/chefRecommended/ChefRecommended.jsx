
import HeadingSubHeading from './../headingSubHeading/HeadingSubHeading';
import image from '../../assets/home/featured.jpg';

const ChefRecommended = () => {
    return (
        <div className="mx-5 md:mx-40 my-20">
            <div>
                <HeadingSubHeading heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></HeadingSubHeading>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                <div>
                    <img src={image} alt="" />
                    <div className='bg-base-200 px-3'>
                        <h2 className='text-xl text-center pt-5 font-bold'>Caesar Salad</h2>
                        <p className='text-sm text-center pt-1'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className='flex justify-center pt-5 pb-7'>
                            <button className='px-4 py-2 bg-base-300 rounded-lg border-b-2 border-yellow-600 uppercase hover:bg-black hover:text-white hover:duration-700'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                    <div className='bg-base-200 px-3'>
                        <h2 className='text-xl text-center pt-5 font-bold'>Caesar Salad</h2>
                        <p className='text-sm text-center pt-1'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className='flex justify-center pt-5 pb-7'>
                            <button className='px-4 py-2 rounded-lg border-b-2 border-yellow-600 uppercase bg-black text-white hover:duration-700 hover:bg-white hover:text-yellow-600'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                    <div className='bg-base-200 px-3'>
                        <h2 className='text-xl text-center pt-5 font-bold'>Caesar Salad</h2>
                        <p className='text-sm text-center pt-1'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className='flex justify-center pt-5 pb-7'>
                            <button className='px-4 py-2 bg-base-300 rounded-lg border-b-2 border-yellow-600 uppercase hover:bg-black hover:text-white hover:duration-700'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ChefRecommended;