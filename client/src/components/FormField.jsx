import React from "react";

export default function FormField({ label, placeholder, type }) {
  return (
    <>
      <label className="label p-2">
        <span className="text-base label-text text-white">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full input input-accent  p-5 text-white h-10 focus:outline-none"
      />
    </>
  );
}
