import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Home = () => {
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
            <img src="https://th.bing.com/th/id/R.cb7e3a7103f1f6416ae37dbf6ec1bc56?rik=JeFlt6x%2bc77BSw&pid=ImgRaw&r=0" alt="" className='max-w-full' />
          </div>
        </section>

        <section id='contact'></section>
      </div>
    </>
  )
}

export default Home