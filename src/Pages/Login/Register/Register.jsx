import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";

import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');

    const register = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, password, email, photo)

        if(password.length < 6) {
            Toaster.error("please set at least 6 characters ")
            return
          }

        createUser( email, password, displayName, photoURL)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
           
            event.target.reset();
            return toast.success("Registration Successful")
        })
        .catch(error => {
            console.log(error)
           setError(toast.error('Already Register this email')) 
           
           
        })
    }

    return (
       
        <div className="hero-content mx-auto rounded-b-full shadow-2xl">
            
            <div className="card w-full ">
                <div className="card-body">
                    <h1 className="text-4xl font-bold primary-text">Registration Form </h1>
                    <form onSubmit={register} >

                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="text-2xl secondary-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-[96%] mx-auto">
                            <label className="label font-bold">
                                <span className="text-2xl secondary-text">Picture</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control w-[86%] mx-auto">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type Your Email" required className="input input-bordered" />
                        </div>

                        <div className="form-control w-[71%] mx-auto">
                            <label className="label font-bold">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Type password" required className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6 w-[53%] mx-auto">
                            <input className="btn primary-bg text-white" type="submit" value="Registration" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an Account <Link className='link primary-text font-bold' to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
   
    );
};

export default Register;