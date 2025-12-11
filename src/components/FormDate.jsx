// import {cally} from 'cally'
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
const FormDate = ({ label, name, list, defaultValue, size }) => {

const [selectedDate, setSelectedDate] = useState("Pick a date");
  const callyRef = useRef(null);

  const [date, setDate] = useState();
  return (
    <>
      <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" }}>
        {date ? date.toLocaleDateString() : "Pick a date"}
      </button>
      <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" }}>
        <DayPicker className="react-day-picker" mode="single" selected={date} onSelect={setDate} />
      </div>
    </>

  )
};
export default FormDate;
