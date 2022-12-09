import React from 'react';

const FirstStep = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="text"
          className="border-b-2 mt-24 pl-[15px] lg:w-[368px] focus:outline-none"
          placeholder="Write First Name"
          value={formData.first_name}
          onChange={(event) =>
            setFormData({ ...formData, first_name: event.target.value })
          }
        />
      </div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="text"
          className="border-b-2 mt-[60px] pl-[15px] lg:w-[368px] focus:outline-none"
          placeholder="Write Last Name"
          value={formData.last_Name}
          onChange={(event) =>
            setFormData({ ...formData, last_Name: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export default FirstStep;