import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div
        className="w-[516px] h-[630px] shadow-xl lg:ml-[149px] lg:mr-[35px] lg:mt-[19px] 
       lg:mb-[11px]"
      >
        <form>
          <h1 className="text-xl font-bold text-center lg:mt-[109px]">
            Log in Form
          </h1>
          <div className="lg:w-[368px] mx-auto">
            <input
              type="text"
              className="border-b-2 mt-24 pl-[15px] lg:w-[368px] focus:outline-none"
              placeholder="Write Email Address"
            />
          </div>
          <div className="lg:w-[368px] mx-auto">
            <input
              type="text"
              className="border-b-2 mt-[60px] pl-[15px] lg:w-[368px] focus:outline-none"
              placeholder="Write Password"
            />
          </div>
          <div
            className="flex items-center w-[94px] mx-auto mt-[58px] bg-[#1678CB] text-white drop- 
                     shadow-2xl font-semibold rounded-2xl px-5 py-[15px] hover:bg-white 
                  hover:text-[#1678CB] hover:rounded-2xl border-transparent border 
                   hover:border-[#1678CB]"
          >
            <p className="text-[16px] text-center">Log In</p>
          </div>
          <p className="mt-[100px] ml-[200px]">
            <span className="text-[12px] text-[#7E7E7E]">
              Don't have an account?
            </span>{" "}
            <Link
              to="/"
              className="text-[#1678CB] text-[14px] font-semibold underline"
            >
              SIGNUP HERE
            </Link>
          </p>
        </form>
      </div>
    );
};

export default Login;