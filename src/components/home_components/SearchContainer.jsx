import IconButtonDatepicker from "./DatePicker";
import UseFormat from '../../hooks/useFormat';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react'

function SearchContainer() {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const [isValidDate, setIsValidDate] = useState(true);
    const [isHiddenCalendar, setHiddenCalendar] = useState(true);
    const inputRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    function onClickInput() {
        if (isHiddenCalendar) setHiddenCalendar(false);
    };
    function onClickSearch () {
        if (!isValidDate)
            return false;
        navigate('/apod', {
            state: { date: UseFormat(date) }
        });
    }
    function onSearchQuery(e) {
        const value = e.target.value;
        setSearchQuery(value);
        if (!value) {
            setDate(new Date());
            return;
        }

        const parsedDate = new Date(value);
        const isValidDate = !isNaN(parsedDate.getTime());
        if (isValidDate) setDate(parsedDate);
        setIsValidDate(isValidDate);
    }

    return (
        <div className='searchContainer'
            onClick={onClickInput}
        >
            <div className='searchDate'>
                <input
                    ref={inputRef} autoFocus={inputRef.current === document.activeElement}
                    type="text"
                    placeholder={`${UseFormat()}`}
                    value={searchQuery}
                    onChange={onSearchQuery}
                />
                {!isHiddenCalendar && <IconButtonDatepicker setSearchQuery={setSearchQuery} date={date} setDate={setDate} />}
            </div>

            <button
                className='searchBtn'
                onClick={onClickSearch}> 
                <i className="fa-solid fa-rocket"></i>
                Go!
            </button>
        </div>
    )
}

export default SearchContainer;