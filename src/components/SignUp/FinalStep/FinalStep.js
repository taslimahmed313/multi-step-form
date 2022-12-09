import React from 'react';

const FinalStep = ({ formData, setFormData }) => {
  return (
    <div className="lg:w-[368px] mx-auto">
      <input
        type="password"
        className="border-b-2 mt-24 pl-[15px] lg:w-[368px] focus:outline-none"
        placeholder="Write Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </div>
  );
};

export default FinalStep;