import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="  flex flex-col md:flex-row gap-6 justify-between bg-black text-gray-400  border border-red-600 p-4 px-6">
                <div className="left">
                    <div className="logo mb-2"><img src="/static/images/logo.png" className='w-[124px] h-[124px]' alt="" /></div>
                    <div className="info">
                        <ul>
                            <li className='uppercase font-bold'>Grievance Officer</li>
                            <li>Basanta Saru</li>
                            <li>Contact: +9779812345678</li>
                            <li>Email: support@carnepal.com.np</li>
                            <li className='ml-[52px]    '>info@carnepal.com.np</li>
                        </ul>
                    </div>
                </div>

                <div className="about flex-1 m">
                    <ul>
                        <li className='font-bold'>About Car Nepal</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eveniet repudiandae cumque sapiente debitis, laborum quaerat exercitationem dicta assumenda illo minus totam ad nobis voluptatibus adipisci nostrum deleniti quis facere.</li>
                    </ul>
                </div>


                <div className="mid flex-1">
                    <ul>
                        <li className='uppercase font-bold'>Policy</li>
                        <li>Privacy Policies</li>
                        <li>Information Security Policy</li>
                        <li>Terms and conditions</li>
                        <li>Report Dispute, Fraud and Misuse</li>
                        <li>Transaction Limits</li>
                    </ul>
                </div>

                <div className="right flex flex-col gap-4">
                    <p className='font-bold text-center'>Newsletter</p>
                    <input type="text" name="" id="" className='rounded-full p-2 border text-black' />
                    <button className='h-10 hover:bg-blue-400 rounded-full bg-blue-500 text-white'>Subscribe</button>
                </div>
            </footer>
        </>
    )
}

export default Footer