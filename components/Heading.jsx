import React from 'react'

const Heading = ({title,highlighted,details}) => {
  return (
    <div className="py-2">
        <h1 className='font-bold text-4xl py-2 text-heading text-center'>{title} <span className='text-primary'> {highlighted} </span></h1>
        <p className='text-center text-[#7E7E7E] px-5 sm:px-10 md:px-40'>{details}</p>
    </div>
  )
}

export default Heading