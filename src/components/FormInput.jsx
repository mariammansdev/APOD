
const FormInput = ({ label, name, type, defaultValue, value, onChange, id, min, max, disabled }) => {

  return (
    <div className="form-control">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input
          id={id}
          type={type}
          className="input"
          placeholder="Type here"
          name={name}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          min={min} max={max}
          disabled={disabled}
        />

      </fieldset>

    </div>
  )
}

export default FormInput