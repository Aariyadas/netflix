import React, { useState } from "react";
import Header from "../components/Header";

const Login = () => {
    const [isSignInForm,setIsSignForm] =useState(true)
    const toggleSignIn =()=>{
      setIsSignForm(!isSignInForm)
    }




  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background Img"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && (
          <input className="p-4 my-4 w-full" type="text"placeholder="Full Name"/>
        )}
        <input  className="p-4 my-4 w-full"type="text" placeholder="Your email adress"/>
        <input  className="p-4 my-4 w-full" type="password" placeholder="Password" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer underline" onClick={toggleSignIn}>{isSignInForm? "New to Netflix? Sign Up Now!":"Already registered ,Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
