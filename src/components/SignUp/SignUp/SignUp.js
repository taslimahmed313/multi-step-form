import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FinalStep from '../FinalStep/FinalStep';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';

const SignUp = () => {
      const [page, setPage] = useState(0);
      const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone_number: "",
      });

      const FormTitles = ["Sign Up", "Personal Info", "Other"];

      const PageDisplay = () => {
        if (page === 0) {
          return <FirstStep formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
          return <SecondStep formData={formData} setFormData={setFormData} />;
        } else {
          return <FinalStep formData={formData} setFormData={setFormData} />;
        }
      };



    return (
      <div className="w-[516px] h-[630px] shadow-xl lg:ml-[149px] lg:mr-[35px] lg:mt-[19px] lg:mb-[11px]">
        <div className="text-xl font-bold text-center">
          <h1 className="lg:mt-[109px]">SignUp Form</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="">
          <div className="flex items-center w-[250px] mx-auto">
            <div
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              {page === 1 && 
                <p className="mt-[68px] mr-16 cursor-pointer">Back</p>
              }
              {page === 2 && 
               
                <p className="mt-[104px] mr-16 cursor-pointer">Back</p>
              }
            </div>
            <div>
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? (
                  <div
                    className="flex items-center mt-[104px] bg-[#1678CB] text-white drop- 
                     shadow-2xl font-semibold rounded-2xl px-5 py-[15px] hover:bg-white 
                  hover:text-[#1678CB] hover:rounded-2xl border-transparent border 
                   hover:border-[#1678CB]"
                  >
                    <div>
                      <p className="text-[16px]">Sign Up</p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex items-center mt-[68px] bg-[#1678CB] text-white drop- 
                     shadow-2xl font-semibold rounded-2xl px-5 py-[15px] hover:bg-white 
                  hover:text-[#1678CB] hover:rounded-2xl border-transparent border 
                   hover:border-[#1678CB]"
                  >
                    <div>
                      <p className="text-[16px]">Next Step</p>
                    </div>
                    <div>
                      <FaArrowRight className="w-[16px] ml-[10px] mx-auto"></FaArrowRight>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          {page === 0 && (
            <p className="mt-[100px] ml-[200px]">
              <span className="text-[12px] text-[#7E7E7E]">
                Already have an account?
              </span>{" "}
              <Link
                to="/login"
                className="text-[#1678CB] text-[14px] font-semibold underline"
              >
                LOGIN HERE
              </Link>
            </p>
          )}
        </div>
      </div>
    );
};

export default SignUp;