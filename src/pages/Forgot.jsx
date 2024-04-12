import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Forgot = () => {
    return (
        <>
        
            <div className="main justify-center flex p-4 h-screen">
                <div className="forgot flex flex-col gap-4 w-7/12 h-44 shadow-xl p-4 my-auto">
                    <p className='font-semibold'>Enter your email to get recovery code:</p>
                    <div className="input flex flex-col">
                        <input className='border p-2 mr-2 mb-2' type="text" name="email" id="" />
                        <button className='border p-2 rounded-2xl w-20 hover:bg-gray-500'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot