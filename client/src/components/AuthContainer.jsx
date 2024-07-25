import React from "react";

export default function AuthContainer({header, children}) {
  return (
    <div className="flex flex-col justify-center items-center w-96 h-screen   mx-auto">
      <div className="  w-[375px] p-6 rounded-lg shadow-xl bg-black   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {header}
        </h1>
        {children}
      </div>
    </div>
  );
}
