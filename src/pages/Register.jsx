import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 bg-base-100 shadow-lg flex flex-col p-8 gap-y-5">
        <h4 className="text-center text-xl font-bold">Register</h4>
        <FormInput label='User Name' name='usertname' type='text'/>
        <FormInput label='Email' name='email' type='email'/>
        <FormInput label='Password' name='password' type='password'/>
        <div className="mt-4">
          <SubmitBtn text='Register' />
          <p className="text-center" >Already a member ? <Link to='/login' className="link link-hover link-primary capitalize">Login</Link> </p>
        </div>
      </Form>
    </section>
  )
}

export default Register