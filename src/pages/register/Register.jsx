import { NavLink, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/others/authentication2.png';
import './register.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser (data.email, data.password)
        .then(result=>{
            const createdUser = result.user;
            Swal.fire(`Successfully Signed Up as ${createdUser.email}`);
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <>
            <Helmet>
                <title>Register | Bistro Boss </title>
            </Helmet>
            <div className='registerDiv font-inter-font px-40 py-5 min-h-screen'>
                <div className='registerDivTwo'>
                    <div className='px-20 pt-5 pb-5 flex gap-14 justify-center items-center shadow-gray-600 shadow-xl rounded-lg'>
                        <div className='flex-[1]'>
                            <div className='w-10/12'>
                                <h2 className='text-center font-bold text-xl'>Register</h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} action="" className='pt-5'>
                                <div className='flex flex-col'>
                                    <label htmlFor="name">Name</label>
                                    <input className='w-10/12 py-2 text-md placeholder:text-sm px-2 rounded-lg' type="text" {...register("name", { required: true })} name="name" id="" placeholder="Type Here"
                                    />
                                    {errors.name && <span className='text-xs text-red-400'>This Field is Required</span>}
                                    <br />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="name">Email</label>
                                    <input className='w-10/12 py-2 text-md placeholder:text-sm px-2 rounded-lg' type="email" {...register("email", { required: true })} name="email" id="" placeholder="Type Here"
                                    />
                                    {errors.email && <span className='text-xs text-red-400'>This Field is Required</span>}
                                    <br />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="name">Password</label>
                                    <input className='w-10/12 py-2 text-md placeholder:text-sm px-2 rounded-lg' type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/
                                    })} name="password" id="" placeholder="Enter Your Password Here"
                                    />
                                    {errors.password?.type === 'minLength' && <span className='text-xs text-red-400'>Password must be 6 characters</span>}
                                    <br />
                                    {errors.password?.type === 'pattern' && <span className='text-xs text-red-400'>Password must contain atleast 1 uppercase 1 lowercase 1 number and 1 character</span>}
                                    <br />
                                </div>
                                <div>
                                    <input className='w-10/12 rounded-md bg-[#D1A054] text-white font-bold py-2 hover:cursor-pointer hover:bg-black hover:duration-700' type="submit" value="Register" />
                                </div>
                            </form>
                            <div className='w-10/12 mt-2'>
                                <div className='flex items-center justify-center gap-1'>
                                    <h2 className='text-md text-[#d1a054b3]'>Already Registered?</h2>
                                    <NavLink to="/login"><button className='text-md text-[#d1a054b3] font-bold hover:text-black hover:duration-700'>Go to Login</button></NavLink>
                                </div>
                                <div className='mt-5'>
                                    <h2 className='text-sm text-black text-center font-bold tracking-widest'>Or Sign In With</h2>
                                    <div className='mt-5 flex justify-center gap-10'>
                                        <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaFacebookF></FaFacebookF></button></NavLink>
                                        <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGoogle></FaGoogle></button></NavLink>
                                        <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGithub></FaGithub></button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-[1]'>
                            <img src={registerImage} className='w-full h-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;