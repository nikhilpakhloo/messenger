import React from "react";

export default function Button({ title }) {
  return (
    <button className=" mt-4 btn-block p-2 rounded-2xl cursor-pointer h-10 border border-white">
      <span className="text-white"> {title}</span>
    </button>
  );
}
