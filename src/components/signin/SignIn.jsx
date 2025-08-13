import React from "react";
import { Link } from "react-router-dom";
import fbb from "./fbb.png";
import logo from "./signin.png";
import gmail from "./gmail.png";
import xb from "./xb.png";
function SignIn() {
  return (
    <>
      <section>
        <div className="flex justify-center bg-sky-700">
          <Link to="/">
            <img src={logo} alt="logo" className="pb-30 pt-10" />
          </Link>
        </div>
        <div className="md:left-[25%] md:w-6/12 absolute top-2/12 left-3.5 flex justify-center bg-white shadow-lg rounded-lg w-11/12">
          <div className="w-10/12">
            <div>
              <h1 className="text-2xl font-semibold text-center py-5">
                Sign In
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-2">Email Address</p>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border-b border-gray-400 focus:outline-none focus:border-b-2 focus:border-sky-700 w-full my-2"
              />
            </div>
            <div>
              <p className="text-gray-500 text-sm pt-2">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-b border-gray-400 focus:outline-none focus:border-b-2 focus:border-sky-700 w-full my-2"
              />
            </div>
            <div className="flex justify-end text-sky-700 mb-2">
              <Link href="#" className="hover:text-sky-900">
                Forget Password
              </Link>
            </div>
            <div className="bg-sky-700 text-white text-center font-semibold rounded-md hover:bg-sky-900 cursor-pointer py-2">
              <button className="cursor-pointer">Sign In</button>
            </div>
            <div>
              <p className="text-gray-500 text-center text-sm py-3">Or</p>
            </div>
            <div className="flex justify-center gap-1">
              <div className="border border-gray-50 rounded-sm shadow px-6 py-2">
                <img src={gmail} alt="gmail" />
              </div>
              <div className="border border-gray-50 rounded-sm shadow px-6 py-2">
                <img src={fbb} alt="fb" />
              </div>
              <div className="border border-gray-50 rounded-sm shadow px-6 py-2">
                <img src={xb} alt="X" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-1 py-4">
              <p className="font-semibold text-sm">
                Don't have an account yet?
              </p>
              <Link href="signup.html" className="text-sky-700">
                Sign Up.
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default SignIn;
