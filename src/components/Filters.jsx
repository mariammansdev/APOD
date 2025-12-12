import FormCheckbox from './FormCheckBox'
import FormInput from './FormInput'
import FormDate from './FormDate.jsx';
import FormRange from './FormRange';
import { Form, useLoaderData, Link } from 'react-router-dom';

//apodurl+ &date=${dateParam}

const Filters = () => {
    const { /*meta,*/ params } = useLoaderData();
    const { search, date } = params;
    const today = new Date().toISOString().split("T")[0];

    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* DATE */}
            <FormInput
                label=''
                type='date'
                name='date'
                defaultValue={today}
            />
            {/* <FormCheckbox
                name=''
                label=''
                size='checkbox-sm'
                defaultValue={shipping}
            /> */}
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