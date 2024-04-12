import React from 'react'

const Button = (props) => {
  return (
  <>
  <button className='border-collapse rounded-lg px-4 p-2 m-2 bg-blue-700 hover:bg-blue-600 text-white' type={props.type}>{props.title} </button>
  </>
  )
}

export default Button