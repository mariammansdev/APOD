import FormCheckbox from './FormCheckBox'
import FormInput from './FormInput'
import FormRange from './FormRange';
import { Form, useLoaderData, Link } from 'react-router-dom';
import { useState } from 'react';

const Filters = () => {
    const { /*meta,*/ params } = useLoaderData();
    const { count, date, end_date, start_date } = params;
    const today = new Date().toISOString().split("T")[0];
    const stDateValue = start_date || date || today;

    const [endDate, setEndDate] = useState(end_date || stDateValue);
    const [startDate, setStartDate] = useState(stDateValue);
    const [random, setRandom] = useState(!(startDate || endDate));

    const stDateName = endDate ? 'start_date' : 'date';

    const minDate = '1995-06-16';
    const maxDate = today;

    return (
        <Form className='bg-base-200 rounded-md px-6 py-4 grid gap-x-8  gap-y-8 sm:grid-cols-2  lg:grid-cols-4 items-center'>
            {/* DATE */}
            <FormInput
                label='Start Date'
                type='date'
                name={stDateName}
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                min={minDate}
                max={maxDate}
                disabled={random}
            />
            <FormInput
                label='End Date'
                type='date'
                name='end_date'
                value={endDate}
                onChange={(e) => {
                    setEndDate(e.target.value);

                }}
                min={startDate}
                max={maxDate}
                disabled={!startDate || random}
            />
            <FormCheckbox
                name=''
                label='Make it random!'
                size='checkbox-sm'
                defaultValue={random}
                onChange={() => {
                    setStartDate('');
                    setEndDate('');
                    setRandom(!random);
                }}
            />
            {random && <FormRange
                name='count'
                label=''
                size='range-sm'
            // count={count}
            />}
            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm'>
                search
            </button>
            <Link to='/events/' className='btn btn-accent btn-sm'>
                reset
            </Link>
        </Form>
    )
}

export default Filters