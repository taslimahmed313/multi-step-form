import React from 'react';

const SecondStep = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="text"
          className="border-b-2 mt-24 pl-[15px] lg:w-[90px] focus:outline-none"
          placeholder="+880"
          readOnly
        />
        <input
          type="text"
          className="border-b-2 mt-24 pl-[15px] lg:w-[271px] ml-[7px] focus:outline-none"
          placeholder="1xxxxxxxxx"
          value={formData.phone_number}
          onChange={(event) =>
            setFormData({ ...formData, phone_number: event.target.value })
          }
        />
      </div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="email"
          className="border-b-2 mt-[60px] pl-[15px] lg:w-[368px] focus:outline-none"
          placeholder="Write Email Address"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export default SecondStep;