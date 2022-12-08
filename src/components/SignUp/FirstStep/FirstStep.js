import React from 'react';

const FirstStep = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="text"
          className="border-b-2 mt-24 pl-[15px] lg:w-[368px]"
          placeholder="Write First Name"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <div className="lg:w-[368px] mx-auto">
        <input
          type="text"
          className="border-b-2 mt-[60px] pl-[15px] lg:w-[368px]"
          placeholder="Write Last Name"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export default FirstStep;