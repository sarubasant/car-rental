import React, { useState } from 'react';
import useUserStore from '../store/useUserStore';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);
    const users = useUserStore((state) => state.users);
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        const isRegistered = users.some((user) => user.email === email)
        // console.log(users)
        // console.log('email:', email)
        // console.log('isRegistered:', isRegistered)
        if (isRegistered) {
            setError('email', { type: 'custom', message: 'Email already registered' })
            return;
        }
        //Register new user
        setUser({ email, password })
        alert('Registered, Proceed now to login')
        // console.log(errors)
        navigate('/login')

    }

    return (
        <>
            <div className="outer my-6 flex">
                <div className="main md:w-[40%] mx-auto shadow-xl p-6 my-auto">
                    <div className='head mb-4'>
                        <h1 className='font-bold'>Welcome to Design Community</h1>
                        <p className='text-sm'>Already have an account? <Link className='text-blue-800 underline' to='/login'>Log in</Link></p>
                    </div>

                    <div className='form p-4'>
                        <form name='register' className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input className={`border mb-2 p-1.5 rounded-md ${errors.email && 'border-red-700'}`} type="text" name="email" id="" placeholder='Email'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email required"
                                    },
                                    pattern: {
                                        value: /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm,
                                        message: "Email is invalid"
                                    }
                                })}

                            />
                            {errors.email && <span className='font-bold text-red-700'>{errors.email.message} </span>}

                            <label htmlFor="password" className='mb-2'>Password</label>
                            <input className={`border mb-2 p-1.5 rounded-md ${errors.password && 'border-red-700'}`} type="password" placeholder='Password'

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Minimum 8 characters required"
                                    },
                                    // pattern: {
                                    //     value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                    //     message: "Password must contain at least one letter, one number and one special character"
                                    // }

                                })}
                            />
                            {errors.password && <span className='font-bold text-red-700'>{errors.password.message} </span>}

                            <label htmlFor="cpassword" className='mb-2'>Confirm Password</label>
                            <input className={`border mb-2 p-1.5 rounded-md ${errors.cpassword && 'border-red-700'}`} placeholder='Confirm Password'
                                type="password"
                                name="cpassword"
                                {...register("cpassword", {
                                    validate: (value) => value === watch('password') || 'Passwords do not match',
                                })}
                            />
                            {errors.cpassword && <span className='font-bold text-red-700'>{errors.cpassword.message} </span>}

                            <ul className='text-sm flex flex-wrap gap-6 text-gray-500 list-disc px-4 my-4 '>
                                <li>Use 8 or more characters</li>
                                <li>One Uppercase character</li>
                                <li>One lowercase character</li>
                                <li>One special character</li>
                                <li>One number</li>
                            </ul>

                            <div className='text-sm mb-4'>
                                <input type="checkbox" name="" id="" className='mr-2 size-4' />
                                I want to receive emails about the product, feature updates, events, and marketing promotions.
                            </div>
                            <p className='text-sm mb-4'>By creating an account, you agree to the <Link to='/terms' className='text-blue-800 underline'>Terms of use</Link> and <Link to="/privacy" className='text-blue-800 underline'>Privacy Policy</Link></p>
                            {/* <button className='border rounded-full w-fit p-4 text-white bg-blue-600 hover:bg-blue-500' type="submit">Create an account</button> */}
                            <Button title='Create an account'/>
                        </form>
                        <p className='text-sm'>Already have an account? <Link className='text-blue-800 underline' to='/login'>Log in</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
