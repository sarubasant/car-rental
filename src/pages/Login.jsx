import React, { useState } from 'react'
import useUserStore from '../store/useUserStore'
import { useNavigate,Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'

const Login = () => {
  const users = useUserStore((state) => state.users)
  const setCurrentUser = useUserStore((state) => state.setCurrentUser)
  const [error, setError] = useState('') 
  const navigate = useNavigate();
  // console.log(users)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const userEmail = data.email
    const password = data.password

    const user = users.find((user) => user.email === userEmail && user.password === password)
    // console.log(user)
    if (user) {
      //login successful
      setCurrentUser(user.email) // Set the currently logged-in user's email in the store
      // console.log('login successful')
      navigate('/') // Navigate to the welcome page
    } else {
      setError('Username or Password don not match')
    }
  }

  return (
    <>
      <div className='flex items-center justify-center my-8'>
        <div className="main md:w-[40%] mx-auto shadow-xl p-4 py-6">
          <div className='head mb-4'>
            <h1 className='text-center font-extrabold text-xl '>Login</h1>

          </div>

          <div className='form p-4'>
            <form name='login' className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>

              <label htmlFor="Username" className={`mb-2 ${errors.email && 'text-red-700'}`}>Username</label>
              <input className={`border mb-2 p-1.5 rounded-md ${errors.email && 'border-red-700'}`} type="text" placeholder='Email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email required"
                  },
                  pattern: {
                    value: /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm,
                    message: "Email is invalid"
                  }
                })} />

              {errors.email && <p className='text-red-700'>{errors.email.message} </p>}
              <label htmlFor="password" className={`mb-2 ${errors.password && 'text-red-700'} `}>Password</label>
              <input className={`border p-1.5 rounded-md mb-2 ${errors.password && 'border-red-700'}`} type="password"
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "required"
                    }
                  })} placeholder='Password' />

              {errors.password && <p className='text-red-700'>{errors.password.message} </p>}
              {errors && <p className='text-red-700'>{error} </p>}

              {/* <button type="submit" className='border rounded-full  p-4 text-white bg-blue-600 hover:bg-blue-500'>Sign In</button> */}
              <Button title='Sign in' />
            </form>
            <p className='text-sm text-center'>Don't have an account?  <Link className='text-blue-800 underline cursor-pointer' to='/register'>Register</Link></p>
            <p className='text-sm text-center'><Link className='text-blue-800 underline cursor-pointer' to='/forgot'>Forgot Password?</Link></p>


          </div>

        </div>
      </div>

    </>
  )
}

export default Login