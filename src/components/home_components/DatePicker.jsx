import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFormat from "../apod_components/hooks/useFormat";

const IconButtonDatepicker = (props) => {
  var { setSearchQuery, date, setDate } = props

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="searchBtn datepicker-input"
      type="button"
      onClick={onClick}
      ref={ref}
    >
      <i className="fa-solid fa-calendar"></i>
    </button>
  ));

  function onSearchQuery(date) {
    setSearchQuery(useFormat(date));
    setDate(date);
  }

  return (
    <DatePicker
      id="datepicker"
      selected={date}
      onChange={(date) => onSearchQuery(date)}
      dateFormat="YYYY-MM-DD"
      customInput={<CustomInput />}
      popperPlacement="top-start"
    />
  );
};

export default IconButtonDatepicker;
