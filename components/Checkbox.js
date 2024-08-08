import React, { useRef, useEffect } from "react";

export default function Checkbox({
  autoFocus = false,
  fill = false,
  isChecked = false,
  ...props
}) {
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      checkboxRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <button
      {...props}
      ref={checkboxRef}
      tabIndex='0'
      className={`
      flex items-center justify-center w-6 h-6
      rounded cursor-pointer border
      focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-20
      ${
        fill
          ? isChecked
            ? "hover:opacity-80 bg-[#2563eb] text-white"
            : "text-white hover:text-slate-400"
          : isChecked
          ? "hover:opacity-80 text-slate-400"
          : "text-white hover:text-slate-400"
      }
    `}
    >
      <CheckIcon className='w-5 h-5' />
    </button>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
}
