
import HeadingSubHeading from './../../../components/headingSubHeading/HeadingSubHeading';
const UserCart = () => {
    return (
        <div className='py-10 w-11/12 mx-auto '>
            <HeadingSubHeading subHeading={"My Cart"} heading={"WANNA ADD MORE?"}></HeadingSubHeading>

            <div className='bg-white my-10 py-5 px-10 rounded-lg'>
                <div className='font-cinzel-font text-xl font-bold'>
                    <div className='flex justify-between items-center'>
                        <h2>Total Orders: </h2>
                        <h2>Total Price: </h2>
                        <button className='px-4 py-2 rounded-lg bg-[#D1A054] text-white hover:bg-black hover:text-[#D1A054] hover:duration-700'>Pay</button>
                    </div>
                </div>
                <div className='mt-10'>

                </div>
            </div>
        </div>
    );
};

export default UserCart;