import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import axios from "axios";

const FoodCard = ({ item }) => {
    const {name, recipe, image, price} = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();


    const handleAddToCart = food => {
        if(user && user.email){
            const cartItem = {
                menuId: food._id,
                email: user.email,
                name,
                image, 
                price,
                recipe,
            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(result=>{
                console.log(result.data);
                if(result.data.insertedId){
                    Swal.fire("Successfully Added to Cart");
                }
            })
        }else{
            Swal.fire("Please Sign In First!");
            navigate('/login', {state: {from:location}});
        }
    }

    return (
        <div>
            <img src={item.image} alt="" />
            <div className='bg-base-200 px-3'>
                <h2 className='text-xl text-center pt-5 font-bold'>{item.name}</h2>
                <p className='text-sm text-center pt-1'>{item.recipe}</p>
                <div className='flex justify-center pt-5 pb-7'>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className='px-4 py-2 bg-base-300 rounded-lg border-b-2 border-yellow-600 uppercase hover:bg-black hover:text-white hover:duration-700'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;