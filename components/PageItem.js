import React from "react";
import Checkbox from "./Checkbox";

export default function PageItem({ pageTitle, isChecked, onChange }) {
  return (
    <div className='flex items-center p-2 justify-between'>
      <p>{pageTitle}</p>
      <Checkbox
        isChecked={isChecked}
        onClick={() => onChange(!isChecked)}
        //removing fill will make the background white
        fill={true}
      />
    </div>
  );
}
