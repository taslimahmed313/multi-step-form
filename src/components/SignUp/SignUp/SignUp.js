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
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
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
      <div className="w-[516px] h-[630px] lg:ml-[149px] lg:mr-[35px] lg:mt-[19px] lg:mb-[11px] border border-red-500">
        <div className="text-xl font-bold text-center">
          <h1 className="lg:mt-[109px]">SignUp Form</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            {page === 0 ? <></> : "Back"}
          </button>
          <div className="w-[142px] mx-auto">
            <button
              className="w-[142px] mx-auto"
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
                "Sign Up"
              ) : (
                <div
                  className="flex items-center mt-[38px] bg-[#1678CB] text-white drop-shadow-xl font- 
                   semibold rounded-2xl px-5 py-[15px] hover:bg-white hover:text-[#1678CB] 
                   hover:rounded-2xl border-transparent border hover:border-[#1678CB] "
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
          {page === 0 && (
            <p className="mt-[100px]">
              Already have an account? <Link to="/login">LOGIN HERE</Link>
            </p>
          )}
        </div>
      </div>
    );
};

export default SignUp;