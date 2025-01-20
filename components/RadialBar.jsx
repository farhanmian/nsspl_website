import React from 'react'

const RadialBar = ({title,percent}) => {
  return (
    <div className='flex items-center justify-around'>
        <div className='flex justify-evenly'>
            <h1 className='text-3xl uppercase'>{title}</h1>
        </div>
        <div>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":percent}}>{percent}%</div>
        </div>
    </div>
  )
}

export default RadialBar