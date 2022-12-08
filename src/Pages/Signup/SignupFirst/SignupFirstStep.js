import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SignupSecondStep from '../SignupSecondStep/SignupSecondStep';

const SignupFirstStep = () => {
    const { register, handleSubmit } = useForm();
    const [signupData, setSignupData] = useState('');
    const [count, setCount] = useState(0);

    // const handleSignUp = data =>{
    //     console.log(data)
    //     setSignupData(data)
    // }
    // console.log(count)


    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name)
        setSignupData(name)
    }

    return (
      <div className=" w-[516px] h-[630px] lg:ml-[149px] lg:mr-[35px] lg:mt-[19px] lg:mb-[11px] border border-red-500 ">
        {count === 1 ? (
          <>
            <SignupSecondStep signupData={signupData}></SignupSecondStep>
          </>
        ) : (
          <form onSubmit={handleSignUp}>
            <input className="border-b-2" name="name" />
            {/* <input type="submit" onClick={() => setCount(count + 1)} /> */}
            <button type="submit" onClick={() => setCount(count + 1)}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
};

export default SignupFirstStep;