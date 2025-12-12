
const FormInput = ({label, name, type, defaultValue}) => {
  return (
    <div className="form-control">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} className="input" placeholder="Type here" name={name} defaultValue={defaultValue}/>

      </fieldset>
     
    </div>
  )
}

export default FormInput