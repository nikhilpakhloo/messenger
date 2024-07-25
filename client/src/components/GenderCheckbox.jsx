import React, { useState } from "react";

export default function GenderRadioButtons() {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="flex items-center">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            className=""
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-textm text-white">Female</span>
          <input
            type="radio"
            className=""
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={handleGenderChange}
          />
        </label>
      </div>
    </div>
  );
}
