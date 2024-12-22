import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFormat from "../apod_components/hooks/useFormat";

const IconButtonDatepicker = (props) => {
  var { setSearchQuery, date, setDate } = props

  const CustomInput = ({ value, onClick }) => (
    <button
      type="button"
      onClick={onClick}
    >
      <i className="fa-solid fa-calendar"></i>
    </button>
  );

  function onSearchQuery(date) {
    setSearchQuery(useFormat(date));
    setDate(date);
  }

  return (
    <div>
      <DatePicker
        id="datepicker"
        selected={date}
        onChange={(date) => onSearchQuery(date)}
        dateFormat="YYYY-MM-DD"
        customInput={<CustomInput />}
        className="datepicker-input-hidden"
      />
    </div>
  );
};

export default IconButtonDatepicker;
