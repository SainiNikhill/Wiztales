import React, { useState } from 'react'
import {DayPicker} from "react-day-picker"
import moment from 'moment' 
import { MdOutlineDateRange ,MdClose } from "react-icons/md";

const DateSelector = ({date,setDate}) => {

    const [openDatePicker, setOpenDatePicker] = useState(false)
  return (
    <div>
      <button
        className="inline-flex items-center gap-2 text-[13px] font-medium text-medium text-sky-600  bg-sky-200/40 hover:bg-sky-200/70 rounded px-2 py-1 cursor-pointer"
        onClick={() => {
          setOpenDatePicker(true);
        }}
      >
        <MdOutlineDateRange className="text-lg" />
        {date
          ? moment(date).format("Do MMM YYYY")
          : moment().format("Do MMM YYYY")}
      </button>
      {openDatePicker && (
        <div className="overflow-y-scroll p-5 bg-sky-50/80 rounded-lg relative pt-9 scrollbar">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-100 hover:bg-sky-100 absolute top-2 right-2"
            onClick={() => {
              setOpenDatePicker(false);
            }}
          >
            <MdClose className="text-xl cursor-pointer text-sky-600" />
          </button>

          <DayPicker
            captionLayout="dropdown"
            mode="single"
            selected={date}
            onSelect={setDate}
            pagedNavigation
            
            
          />
        </div>
      )}
    </div>
  );
}

export default DateSelector