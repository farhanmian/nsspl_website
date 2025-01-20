import React from 'react'

const Achievements = () => {
  return (
    <div className=' bg-lightGray py-10'>
        <div>
            <h1 className='text-heading text-[42px] font-bold text-center'>Explore <span className='text-primary'> Achievements</span></h1>
        </div>
        <div className='flex flex-col py-5 px-20 justify-around items-center lg:flex-row '>

                <h1 className='lg:mt-8 text-3xl font-bold'>Since 2005:</h1>
            <div className='flex flex-col mt-10 gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
                <div className='flex gap-2'>
                    <img src='/icons/cup.svg' height={50} width={52} />
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>18+</h1>
                        <p>Successful Years</p>

                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src='/icons/code.svg' height={50} width={52} />
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>1000+</h1>
                        <p>Projects</p>

                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src='/icons/love.svg' height={50} width={52} />
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>500+</h1>
                        <p>Happy Clients</p>

                    </div>
                </div>
                <div className='flex gap-2'>
                    <img src='/icons/team.svg' height={50} width={52} />
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-2xl'>100+</h1>
                        <p>IT Professionals</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements