import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from '../components/Button'
import {useForm} from 'react-hook-form'

const Home = () => {
  const {register, handleSubmit,formState:{errors}} = useForm();
  const onSubmit=(data)=>{
    
  }
  return (
    <>
      <div className="main ">
        <section id='hero' className=" text-center py-8">
          <h1 className='text-5xl font-bold p-2'>Welcome to Car Nepal</h1>
          <p className='my-2'>Nepal's No. 1 Car Rental Portal. </p>
          <Button title='Get Started' />
        </section>

        <section id='about' className='flex flex-col gap-4 md:flex-row py-8'>
          <div className="left flex-1">
            <h1 className='text-3xl font-semibold m-4'>About Car Nepal</h1>
            <p className='m-4'>Car Nepal is your go-to destination for convenient and reliable car rentals. With a wide selection of vehicles and easy booking options, we make your journey in Nepal a seamless experience. </p>
            <p className='m-4'>Whether you're exploring the city or heading out for an adventure, Car Nepal has you covered.</p>
            <Button title="Hire Now"/>
          </div>
          <div className="flex items-center flex-1 ">
            <img src="/static/images/R.png" alt="" className='max-w-full' />
          </div>
        </section>

        <section id='contact' className='flex flex-col'>
          <div>
            <h1 className='text-3xl font-semibold p-4 text-center'>Contact Us</h1>
            <p className='p-2 text-center'>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className="form flex-1 md:justify-center ">
              <form name='contact' className='md:mx-auto flex flex-col m-4 md:w-96' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Your Name' className={`border mb-2 p-1.5 rounded-md `}
                  {...register("fname",
                    {
                      required: "Name is required",
                      pattern: { value: /^[A-Za-z\s]+$/i, message: "Only alphabets allowed" }
                    })}
                />
                {errors.fname && <p className='text-red-700'>{errors.fname.message} </p>}

                <input className={`border mb-2 p-1.5 rounded-md `} type="text" placeholder='Email'
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

                <input className={`border mb-2 p-1.5 rounded-md `} type="text" placeholder='Subject'
                  {...register("subject", {
                    pattern: { value: /^[A-Za-z\s]+$/i, message: "Only alphabets allowed" }
                  })} />
                {errors.subject && <p className='text-red-700'>{errors.subject.message} </p>}

                <textarea className={`border mb-2 p-1.5 rounded-md `} type="text" placeholder='Your message here'
                  {...register("message", {
                    required: "Message is required"
                  })} rows={4}></textarea>
                {errors.message && <p className='text-red-700'>{errors.message.message} </p>}

                <Button title='Send' type='submit' />
              </form>

            </div>
            <div className="contact flex-1 flex justify-evenly items-center flex-col ">
              <span><FaLocationDot size={24} /></span>
              <p className='mb-4 md:mb-0'>Tilottama-4, Rupandehi, Nepal</p>
              <span><FaPhoneAlt size={24} /></span>
              <p className='mb-4 md:mb-0'>+977 9812345678</p>
              <span><IoMdMail size={24} /></span>
              <p className='mb-4 md:mb-0'>info@carnepal.com.np</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home