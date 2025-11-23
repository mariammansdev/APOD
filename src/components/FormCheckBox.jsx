import React from 'react'

const FormCheckBox = ({ label, name, defaultValue, size }) => {
    return (
        <div className='form-control items-center'>
            <label className='cursor-pointer label' htmlFor={name} >
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                id={name}
                type='checkbox'
                name={name}
                defaultChecked={defaultValue}
                className={`checkbox checkbox-primary ${size}`}
            />
        </div>
    )
}

export default FormCheckBox