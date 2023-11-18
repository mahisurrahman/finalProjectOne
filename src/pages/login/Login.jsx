import './login.css';
import loginImage from '../../assets/others/authentication2.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2'

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [inputDisabled, setInputDisabled]= useState(false);

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
            setInputDisabled(true);
        }else{
            setDisabled(true);
            Swal.fire({
                title: 'Captcha Invalid!',
                text: 'Do you want to Try Again?',
                icon: 'error',
                confirmButtonText: 'Yes'
              })
        }
    }
    
    return (
        <div className="loginDiv h-screen px-28 py-10 max-w-full mx-auto font-inter-font">
            <div className='loginDivTwo h-full border-2 shadow-xl shadow-gray-400 grid grid-cols-2 px-20 py-5'>
                <div className='flex items-center'>
                    <img src={loginImage} className='w-96' alt="" />
                </div>
                <div className='px-5'>
                    <div>
                        <h2 className='text-center text-2xl font-bold'>Login</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-black">Your email</label>
                            <input type="email" id="email" name='email' className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Here" required/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-black dark:text-black">Your password</label>
                            <input type="password" id="password" name='password'className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Password Here' required/>
                        </div>
                        <div className="mt-4 mb-2">
                            <LoadCanvasTemplate />
                        </div>
                        <div className="mb-2 flex gap-2">
                            <input type="text" disabled={inputDisabled} id="captchaInput" name='captcha' ref={captchaRef} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter The Above Captcha Here'/>
                            <button onClick={handleValidateCaptcha} className='border rounded-lg border-black py-2 px-4 hover:bg-black hover:text-white hover:duration-700'>Validate</button>
                        </div>
                        {/* <input disabled={disabled} type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 py-2 text-center bg-[#d1a054b3] hover:bg-black hover:text-[#d1a054b3] hover:duration-700 dark:focus:ring-blue-800" value="Sign In" /> */}
                        <input disabled={disabled} className='btn btn-outline w-full bg-[#d1a054b3] text-white hover:bg-black hover:duration-700' type="submit" value="Sign In" />
                    </form>
                    <div className='my-2 flex items-center justify-center gap-1'>
                        <h2 className='text-md text-[#d1a054b3]'>New Here?</h2>
                        <NavLink><button className='text-md text-[#d1a054b3] font-bold hover:text-black hover:duration-700'>Create a New Account</button></NavLink>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-sm text-black text-center font-bold tracking-widest'>Or Sign In With</h2>
                        <div className='mt-2 flex justify-center gap-10'>
                            <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaFacebookF></FaFacebookF></button></NavLink>
                            <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGoogle></FaGoogle></button></NavLink>
                            <NavLink><button className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGithub></FaGithub></button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

{/* <div className='text-center py-10 md:py-0 lg:py-0'>
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold uppercase">Login</h2>
                    <div className='px-2 md:px-20'>
                        <form className='text-left' action="">
                            <div className='mb-5 md:mb-1 lg:mb-2'>
                                <label className='md:text-xs lg:text-lg ml-1' htmlFor="email">Email<br /></label>
                                <input className='w-full h-10 md:h-10 lg:h-10 rounded-md px-4 text-sm' placeholder='Type Here' type="email" name="email" id="" /> <br />
                            </div>
                            <div className='mb-5 md:mb-1 lg:mb-2'>
                                <label className='md:text-xs lg:text-lg ml-1' htmlFor="password">Password<br /></label>
                                <input className='w-full h-10 md:h-10 lg:h-10 rounded-md px-4 text-sm' placeholder='Enter Your Password' type="password" name="password" id="" /> <br />
                            </div>
                            <div className='mb-5 md:mb-1 lg:mb-4'>
                                 <label className='md:text-xs lg:text-lg ml-1' htmlFor="captcha">Captcha<br /></label>
                                <input className='w-full h-10 md:h-10 lg:h-10 rounded-md px-4 text-sm' placeholder='Type Here' type="password" name="password" id="" /> <br />
                            </div>
                            <div className='md:mt-6 lg:mt-5'>
                                <input className='w-full h-10 md:h-10 lg:h-10 rounded-md px-4 text-sm' placeholder='Type Here' type="text" name="captcha" id="" /> <br />
                            </div>
                            <div className='mt-4'>
                                <input className='w-full h-10 rounded-md text-white font-bold tracking-widest hover:bg-white hover:border-[#d1a054b3] hover:text-[#d1a054b3] hover:cursor-pointer hover:duration-700 border md:text-sm lg:text-lg bg-[#d1a054b3]' type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className='mt-2 md:flex justify-center items-center gap-1'>
                            <h2 className='text-[#d1a054b3] md:text-xs lg:text-md'>New Here?</h2>
                            <NavLink><button className='font-bold text-[#d1a054b3] md:text-xs lg:text-md'>Create a New Account</button></NavLink>
                        </div>
                        <div className='md:mt-4 lg:mt-2'>
                            <h2 className='text-center text-lg md:text-xs lg:text-xs text-black font-bold'>Or Sign In With</h2>
                        </div>
                        <div className='mt-5 md:mt-2 flex justify-center gap-10'>
                            <NavLink><button className='border rounded-full border-black px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaFacebookF></FaFacebookF></button></NavLink>
                            <NavLink><button className='border rounded-full border-black px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGoogle></FaGoogle></button></NavLink>
                            <NavLink><button className='border rounded-full border-black px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGithub></FaGithub></button></NavLink>
                        </div>
                    </div>
                </div> */}