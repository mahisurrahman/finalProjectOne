import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import HeadingSubHeading from './../../../components/headingSubHeading/HeadingSubHeading';
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const UserCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        refetch();
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })
            }
          });
    }

    return (
        <div className='py-10 w-11/12 mx-auto '>
            <HeadingSubHeading subHeading={"My Cart"} heading={"WANNA ADD MORE?"}></HeadingSubHeading>

            <div className='bg-white my-10 py-5 px-10 rounded-lg'>
                <div className='font-cinzel-font text-xl font-bold'>
                    <div className='flex justify-between items-center'>
                        <h2>Total Orders: {cart.length} </h2>
                        <h2>Total Price: {totalPrice} $</h2>
                        <button className='px-4 py-2 rounded-lg bg-[#D1A054] text-white hover:bg-black hover:text-[#D1A054] hover:duration-700'>Pay</button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className="overflow-x-auto rounded-t-xl">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-[#D1A054] text-white'>
                                <tr className='text-md tracking-wider'>
                                    <th></th>
                                    <th className='font-normal'>Item Image</th>
                                    <th className='font-normal'>Item Name</th>
                                    <th className='font-normal'>Price</th>
                                    <th className='font-normal'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index+1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{item.name}</span>
                                        </td>
                                        <td>{item.price}$</td>
                                        <th>
                                            <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-sm"><AiFillDelete className='text-red-800 text-3xl'></AiFillDelete></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCart;