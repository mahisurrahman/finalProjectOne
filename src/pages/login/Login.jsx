import './login.css';
import loginImage from '../../assets/others/authentication2.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Login = () => {
    return (
        <div className="loginDiv max-w-full h-screen px-20 py-10 font-inter-font">
            <div className='loginDivTwo h-full border-2 shadow-xl shadow-gray-400 grid grid-cols-2 px-10 py-5'>
                <div className='flex items-center'>
                    <img src={loginImage} className='w-96' alt="" />
                </div>
                <div>
                    <div>
                        <h2 className='text-center text-2xl font-bold'>Login</h2>
                    </div>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-black">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Here" required/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-black dark:text-black">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Password Here' required/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="captchaDisplay" className="block text-sm font-medium text-black dark:text-black">Captcha</label>
                            <input type="text" id="captchaDisplay" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            <a className='text-xs font-semibold text-blue-800 tracking-widest' href="">Reload Captcha</a>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="captchaInput" className="block text-sm font-medium text-blue dark:text-black"></label>
                            <input type="text" id="captchaInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter The Above Captcha Here' required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#d1a054b3] dark:hover:bg-black dark:hover:text-[#d1a054b3] dark:hover:duration-700 dark:focus:ring-blue-800">Sign In</button>
                    </form>
                    <div className='my-2 flex items-center justify-center gap-1'>
                        <h2 className='text-md text-[#d1a054b3]'>New Here?</h2>
                        <NavLink><button className='text-md text-[#d1a054b3] font-bold hover:text-black hover:duration-700'>Create a New Account</button></NavLink>
                    </div>
                    <div className='mt-8'>
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