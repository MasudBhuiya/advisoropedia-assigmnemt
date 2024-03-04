
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const [error, setError]=useState('')
    const [check, setCheck] = useState(false);
    const {signUp, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
     const from = location.state?.from?.pathname || '/';
    const handleRegister = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      const photoURL = form.photo.value;
      console.log(email, password);
    
   setError('');
   signUp(email, password)
   .then(result=>{
     const loggedUser = result.user;
     // console.log(loggedUser);
     navigate(from)
     updateUserProfile(name, photoURL)
     .then(()=>{
       const saveUser = {name: loggedUser.displayName, role: 'user', email: loggedUser.email, image: loggedUser.photoURL};
       fetch('https://advisoropedia-assignment-server.vercel.app/users', {
         method: 'POST',
         headers: {
           'content-type' : 'application/json'
         },
         body: JSON.stringify(saveUser)
       })
       .then(res => res.json())
       .then( data => {
         if(data.insertedId){
           form.reset()
       Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'User created successfully',
         showConfirmButton: false,
         timer: 1500
       })
         }
       } )
       
     })
     .catch(error => {
       setError(error.message)
     })
   })
   .catch(error => {
     setError(error.message)
   })
 }

    const {signInwithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{
        signInwithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user);
          
            const loggedUser = {
              email: user.email
            }
            console.log(loggedUser);
            fetch('https://advisoropedia-assignment-server.vercel.app/jwt', {
              method: "POST",
              headers: {
                'content-type': 'Application/json'
              },
              body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
              Swal.fire({
                icon: 'success',
                title: 'Wow!',
                text: 'Login Successfully'
              })
              console.log(data);
              localStorage.setItem('post-acces-token', data.token)
              navigate(from, {replace: true});
            })
      })
        .catch(error=>setError(error.message))
    }
    
    // const handleCheck = () => {
    //     setCheck(!check);
    // }
    console.log(check);
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col w-full justify-between gap-16 lg:flex-row">
  <div className="w-full md:w-1/2">
      <img className="w-full h-[95vh] " src='https://i.ibb.co/f28rSfd/Rectangle-6122.png' alt="" />
    </div>
    
    <div className="w-full md:w-1/2 flex flex-col items-center ">
    
   <div className=" flex-shrink-0 w-full bg-[#f5f3f3] p-6 md:py-10 md:px-16  shadow-xl ">

      <div className="">
      <h1 className="text-5xl mb-5 text-center font-bold ">Sign Up!</h1>
        <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-3">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered rounded border-none" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-3">Photo URL</span>
          </label>
          <input type="url" placeholder="Photo URL" name='photo' className="input input-bordered rounded border-none" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-3">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered rounded border-none" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-3">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered rounded border-none" required/>
          
        </div>
        <div className="form-control">
  <label className="label justify-start gap-4 mt-3 cursor-pointer">
    <input type="checkbox" onClick={()=>setCheck(!check)} className="checkbox" />
    <span  className="label-text">Remember me</span> 
  </label>
</div>
        <div className="form-control mt-4">
          <input className={`${!check  ? 'btn-disabled': 'block'} btn border-none rounded hover:bg-cyan-900 text-lg  bg-cyan-700 text-white`} type="submit" value='Sign Up' name="" id="" />
        </div>
        </form>
        <h1 className="my-4">New to This Site? Please <Link className='text-blue-500 font-bold' to='/login'><u>Login</u></Link></h1>
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

export default Register;