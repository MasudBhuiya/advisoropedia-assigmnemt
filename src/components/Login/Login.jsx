// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const [error, setError] = useState('')
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(location)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Wow!',
                text: 'Login Successfully'
              })
              
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error)
        })

    }
    
    const {signInwithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{
        signInwithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error=>setError(error.message))
    }



    return (
        <div className="hero min-h-screen px-2 md:px-0">
  <div className="hero-content flex-col w-full justify-between gap-16 lg:flex-row">
    <div className="w-full md:w-1/2">
      <img className="w-full h-[95vh]" src='https://i.ibb.co/f28rSfd/Rectangle-6122.png' alt="" />
    </div>
   <div className="w-full md:w-1/2 flex flex-col items-center ">
    
   <div className=" flex-shrink-0 w-full bg-[#f5f3f3] p-6 md:p-16  shadow-xl ">

      <div className="">
      <h1 className="text-5xl mb-5 text-center font-bold ">Sign In!</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered rounded-none border-none" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered rounded-none border-none" />
          
        </div>
        <div className="text-end mt-2">
            <u className="text-blue-500 ">Forget Password?</u>
        </div>
        <div className="form-control mt-3">
          <input className="btn border-none rounded-none hover:bg-cyan-900 bg-cyan-700 text-white" type="submit" value='Login' name="" id="" />
        </div>
        </form>
        <h1 className="my-4">New to This Site? Please <Link className='text-blue-500 font-bold' to='/register'><u>Register</u></Link></h1>
        <p className="text-red-600 ">{error.message}</p>

        <h1 className="text-center mt-2">OR</h1>

        <div>
            <button onClick={handleGoogle} className="btn btn-block  mt-4 text-lg text-blue-500 bg-white"><img src="https://i.ibb.co/jkBJkXy/Google-Pay-Logo-wine.png" alt="" />Continue with Google</button>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
    );
};

export default Login;