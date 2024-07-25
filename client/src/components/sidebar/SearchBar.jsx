import React from "react";
import FormField from "../FormField";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form className="flex items-center gap-2">
      <FormField type="text" placeholder="Search" />
      <button type="submit" className="btn btn-circle text-white bg-sky-500">
        <IoSearchSharp className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
}
