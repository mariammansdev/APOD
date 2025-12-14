import { useState } from 'react';
const FormRange = ({ label, name, size, count }) => {
    const step = 1;
    const maxCount = 100;
    const [selectedCount, setSelectedCount] = useState(count || maxCount);

    return (
        <div className='form-control'>
            <label htmlFor={name} className='label cursor-pointer'>
                <span className='label-text capitalize'>{label}</span>
                <span>{selectedCount}</span>
            </label>
            <input
                type='range'
                name={name}
                min={1}
                max={maxCount}
                value={selectedCount}
                onChange={(e) => setSelectedCount(e.target.value)}
                className={`range range-primary ${size}`}
                step={step}
            />
            <div className='w-full flex justify-between text-xs px-2 mt-2'>
                <span className='font-bold text-md'>0</span>
                <span className='font-bold text-md'>Max : {maxCount}</span>
            </div>
        </div>
    );
};
export default FormRange;
