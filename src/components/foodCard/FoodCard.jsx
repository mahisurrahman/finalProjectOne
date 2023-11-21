

const FoodCard = ({item}) => {
    const handleAddToCart = food =>{
        console.log(food);
    }
    return (
        <div>
            <img src={item.image} alt="" />
            <div className='bg-base-200 px-3'>
                <h2 className='text-xl text-center pt-5 font-bold'>{item.name}</h2>
                <p className='text-sm text-center pt-1'>{item.recipe}</p>
                <div className='flex justify-center pt-5 pb-7'>
                    <button  
                    onClick={()=>handleAddToCart(item)}
                    className='px-4 py-2 bg-base-300 rounded-lg border-b-2 border-yellow-600 uppercase hover:bg-black hover:text-white hover:duration-700'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;