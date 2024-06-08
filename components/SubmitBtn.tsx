import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();  // for loading indicator

  return (
    <button
      type="submit"
      className="group flex items-center rounded-[5px] justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white text-light dark:text-dark"></div>
      ) : (
        <div className="flex items-center font-medium gap-2 text-light dark:text-dark">
          <p>SUBMIT{" "}</p>
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </div>
      )}
    </button>
  );
}