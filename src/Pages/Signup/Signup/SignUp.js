import React, { useState } from 'react';

const SignUp = () => {
    const [pageChange, setPageChange] = useState(0);
    const [storeData, setStoreData] = useState(null);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // const phone = form.phone.value;
        console.log(name)
        // setStoreData(...storeData, name)
        // console.log(event.target.phone)
    }
    // console.log(storeData);
    return (
      <div>
        <form onSubmit={handleSignUp}>
          {pageChange === 0 && (
            <div>
              <p>It is First Page</p>
              <input
                className="border border-teal-300"
                type="text"
                name="name"
                id=""
              />
              <button
                onClick={() => setPageChange(pageChange + 1)}
                className="btn bg-neutral-700"
              >
                Next
              </button>
              <input type="submit" value="Try It" />
            </div>
            //   ) : (
            //     <div>
            //       <div>
            //         <p>It is Third Page</p>
            //         <input
            //           className="border border-teal-300"
            //           type="text"
            //           name="email"
            //           id=""
            //         />
            //         <input
            //           type="submit"
            //           value="Submit"
            //           className="btn bg-slate-800"
            //         />
            //       </div>
            //     </div>
          )}
          {pageChange === 1 && (
            <div>
              <p>It is Second Page</p>
              <input
                className="border border-teal-300"
                type="text"
                name="email"
                id=""
              />
              <button
                onClick={() => setPageChange(pageChange + 1)}
                className="btn bg-neutral-700"
              >
                Next
              </button>
            </div>
          )}
          {pageChange === 2 && (
            //   (
            //     <div>
            //       <p>It is Second Page</p>
            //       <input
            //         className="border border-teal-300"
            //         type="text"
            //         name="email"
            //         id=""
            //       />
            //       <button
            //         onClick={() => setPageChange(pageChange + 1)}
            //         className="btn bg-neutral-700"
            //       >
            //         Next
            //       </button>
            //     </div>
            //   ) : (
            <div>
              <div>
                <p>It is Third Page</p>
                <input
                  className="border border-teal-300"
                  type="text"
                  name="phone"
                  id=""
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn bg-slate-800"
                />
              </div>
            </div>
          )}
        </form>
      </div>
    );
};

export default SignUp;