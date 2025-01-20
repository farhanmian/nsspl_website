import React from 'react'

const Listed = () => {
  return (
     <section className='flex flex-col lg:flex-row sm:justify-center items-center gap-2 lg:gap-20 md:gap-5 py-2'>
         <h2 className='text-3xl font-bold text-heading md:mt-8'>We are listed on</h2>

     <div className='flex flex-col justify-around items-center mt-10 md:flex-row sm:gap-5 md:gap-1 '>
            <div className='h-20 w-60 flex justify-center items-center sm:h-10 sm:w-30'><a target="_blank" href='https://www.google.com/search?q=neo+sypher+systems+pvt.+ltd.+(nsspl)&oq=neo+sypher+&aqs=chrome.1.69i57j69i59j69i61l2j69i60.6264j0j1&sourceid=chrome&ie=UTF-8'><img className='grayscale hover:grayscale-0 transition-all'  src='/awards/google.png'  /></a></div>
            <div className='h-20 w-60 flex justify-center items-center sm:h-10 sm:w-30'><a target="_blank" href='https://www.goodfirms.co/company/nss-private-limited'><img className='grayscale hover:grayscale-0 transition-all' src='/awards/goodfirms.png'  /></a></div>
            <div className='h-20 w-60 flex justify-center items-center sm:h-10 sm:w-30'><a target="_blank" href='https://clutch.co/profile/nss-private'><img className='contrast-0 hover:contrast-100 transition-all' src='/awards/clutch.png'  /></a></div>
     </div>
 </section>
  )
}

export default Listed