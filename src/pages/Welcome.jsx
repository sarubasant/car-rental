import React from 'react'
import Navbar from '../components/Navbar'
import useUserStore from '../store/useUserStore'
import Footer from '../components/Footer'

const Welcome = () => {
    const currentUser = useUserStore((state) => state.currentUser)
  if(currentUser){
    console.log('you are logged in')

  }
  else{
    console.log('you are not logged in')
  }
    return (
    <>
   
    <div className='text-center'>Welcome <b> {currentUser}!</b></div>
    
    </>
  )
}

export default Welcome