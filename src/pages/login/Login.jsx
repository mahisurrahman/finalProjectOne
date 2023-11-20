import './login.css';
import loginImage from '../../assets/others/authentication2.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [inputDisabled, setInputDisabled] = useState(false);
    const { signInUser, googleSignIn, facebookSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                Swal.fire(`Successfully Logged In as ${user.email}`);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            setInputDisabled(true);
        } else {
            setDisabled(true);
            Swal.fire({
                title: 'Captcha Invalid!',
                text: 'Do you want to Try Again?',
                icon: 'error',
                confirmButtonText: 'Yes'
            })
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
    }

    const handleFacebookSignIn = () => {
        facebookSignIn();
    }

    const handleGitHubSignIn = ()=>{
        gitHubSignIn();
    }

    return (
        <>
            <Helmet>
                <title>Login | Bistro Boss </title>
            </Helmet>
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
                                <input type="email" id="email" name='email' className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Here" required />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="block text-sm font-medium text-black dark:text-black">Your password</label>
                                <input type="password" id="password" name='password' className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Your Password Here' required />
                            </div>
                            <div className="mt-4 mb-2">
                                <LoadCanvasTemplate />
                            </div>
                            <div className="mb-2 flex gap-2">
                                <input type="text" disabled={inputDisabled} id="captchaInput" name='captcha' ref={captchaRef} className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter The Above Captcha Here' />
                                <button onClick={handleValidateCaptcha} className='border rounded-lg border-black py-2 px-4 hover:bg-black hover:text-white hover:duration-700'>Validate</button>
                            </div>
                            {/* <input disabled={disabled} type="submit" className="w-full text-white font-medium rounded-lg text-sm px-5 py-2 text-center bg-[#d1a054b3] hover:bg-black hover:text-[#d1a054b3] hover:duration-700 dark:focus:ring-blue-800" value="Sign In" /> */}
                            <input disabled={disabled} className='btn btn-outline w-full bg-[#d1a054b3] text-white hover:bg-black hover:duration-700' type="submit" value="Sign In" />
                        </form>
                        <div className='my-2 flex items-center justify-center gap-1'>
                            <h2 className='text-md text-[#d1a054b3]'>New Here?</h2>
                            <NavLink to="/register"><button className='text-md text-[#d1a054b3] font-bold hover:text-black hover:duration-700'>Create a New Account</button></NavLink>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-sm text-black text-center font-bold tracking-widest'>Or Sign In With</h2>
                            <div className='mt-2 flex justify-center gap-10'>
                                <NavLink><button onClick={handleFacebookSignIn} className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaFacebookF></FaFacebookF></button></NavLink>
                                <NavLink><button onClick={handleGoogleSignIn} className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGoogle></FaGoogle></button></NavLink>
                                <NavLink><button onClick={handleGitHubSignIn} className='border rounded-full border-gray-700 px-2 py-2 hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer'><FaGithub></FaGithub></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
