import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from '../../assets/Img/login.jpg'



const Login = () => {

    const {login, logInWithGoogle } = useContext(AuthContext);
     const [error, setError] = useState('');
 
 
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/'
 
     const handleLogIn = event => {
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         
 
         // console.log(email, password)
         
         if(password.length < 6) {
             toast.error("please set at least 6 characters ")
             return
           }
 
         login(email, password) 
         .then(result => {
             const user = result.user;
             console.log(user);
             toast.success('Login Successful')
             navigate(from, {replace: true})
             event.target.reset();
             return setError('')
         })
         .catch(error => {
             setError('Wrong email and password')
         })
     }
 
    //  const googleLogIn = () => {
    //      logInWithGoogle()
    //  }
 
 
    return (
        <>
           
            <h1 className="text-5xl primary-text font-bold text-center mt-4">Login Now</h1>

            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                             
                              
                              <input type="password" name="password" placeholder="password" className="input input-bordered required: " />
                              
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value='Login' className="btn font-bold text-xl primary-bg" />
                            </div>
                        </form>
                        {/* <SocialLogin></SocialLogin> */}
                        <p className="pl-8 mb-4">New Here? <Link to='/signup' className="primary-text link"> Create an account</Link></p>
                        
                    </div>
                    <div className="text-center md:w-full lg:text-left">

                        <p className="py-6">
                            <img src={img} alt="" />
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;