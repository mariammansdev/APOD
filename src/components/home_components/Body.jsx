import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import IconButtonDatepicker from './DatePicker';
import useFormat from '../apod_components/hooks/useFormat';

function Body() {
  const navigate = useNavigate();
  var [searchQuery, setSearchQuery] = useState('');
  var [date, setDate] = useState(null);
  var [isValidDate, setIsValidDate] = useState(true);
  var [isHiddenCalendar, setHiddenCalendar] = useState(true);

  function onSearchQuery(e) {
    const value = e.target.value;
    setSearchQuery(value);
    if (!value) {
      setDate(new Date());
      setHiddenCalendar(true);
      return;
    }

    const parsedDate = new Date(value);
    const isValidDate = !isNaN(parsedDate.getTime());
    if (isValidDate) setDate(parsedDate);
    setIsValidDate(isValidDate);
  }

  function onClickInput() {
    setHiddenCalendar(false);
  }

  return (
    <div className='bodyC'>
      <div className='bodyContent'>
        <h2>Explore Your Universe!</h2>
        {/* <p> APOD offers a daily visual feast of our universe, bringing the latest discoveries, breathtaking imagery, and educational content to the public, one picture at a time.</p> */}
      </div>

      <div className='searchContainer'>
        <div className='searchBar'>
          <input
            type="text"
            placeholder={`${useFormat()}`}
            value={searchQuery}
            onChange={onSearchQuery}
            onClick={onClickInput}
          />
          {!isHiddenCalendar && <IconButtonDatepicker setSearchQuery={setSearchQuery} date={date} setDate={setDate} />}
        </div>

        <button 
        className='searchBtn'
        onClick={() => {
          if (!isValidDate)
            return false;
          navigate('/apod', {
            state: { date: date }
          });
        }}> <i class="fa-solid fa-rocket"></i> Go!</button>
      </div>

    </div>
  );
}

export default Body