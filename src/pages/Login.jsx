import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
        <Form method="post" className="card w-96 b-8 bg-base-100 shadow-lg flex flex-col gap-y-4 p-7 ">
          <h1 className="text-center mb-5 font-bold text-4xl">Login</h1>
          <FormInput label = 'Email' type='email' name = 'identifier' defaultValue='test@test.com'/>
          <FormInput label = 'Password' type='password' name='password' defaultValue='secret'/>
          <div className="mt-4 flex flex-col gap-y-3">
            <SubmitBtn text='Login'/>
            <button className="btn btn-secondary btn-block">Guest User</button>
            <p className="text-center" >Not a member ? <Link to='/register' className="link link-hover link-primary capitalize">Register</Link> </p>
          </div>
          
        </Form>
        
    </section>
    
  )
}

export default Login