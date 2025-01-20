import Link from 'next/link'
import { useState } from 'react'

const ClientFocusTab = () => {
  let [active,setActive] = useState(1)
  return (<>
    <section className='mx-5 py-2 shadow-lg lg:shadow-none rounded-lg md:flex lg:gap-20 md:justify-center '>
         <div className='px-5 py-10 sm:text-2xl '>
            <ul className='flex text-base gap-2 sm:justify-center w-full sm:gap-5 overflow-x-scroll md:flex-col'>
              <li className={` border-primary md:border-0 cursor-pointer ${active==1? "border-b-2 text-primary":""}`} onClick={()=>setActive(1)}>Startup</li>
              <li className={` border-primary md:border-0 cursor-pointer ${active==2? "border-b-2 text-primary":""}`} onClick={()=>setActive(2)}>Digital Agencies</li>
              <li className={` border-primary md:border-0 cursor-pointer ${active==3? "border-b-2 text-primary":""}`} onClick={()=>setActive(3)}>Enterprise</li>
            </ul>
         </div>
         {/* <div className=''> */}
          {/* content goes here */}
            <div className={`${active==1 ? "":" hidden"} flex flex-col sm:flex-row gap-6 sm:gap-6 items-center  p-4`}>
              <div className='flex-1'>
                <h1 className='text-3xl mb-4 font-bold'>Startup</h1>
                {/* <p className='leading-6 text-para'>If you are looking forward to building a new solution then you would need a dedicated team that works as a unit of your organization. A dedicated mobile app development team would</p> */}
                <ul className='list-disc flex flex-col gap-4 max-w-[300px]'>
                  <li className='marker:text-primary'>Fixed price estimates</li>
                  <li className='marker:text-primary'>Iterative prototyping services for fast delivery of a fully verified MVP</li>
                  <li className='marker:text-primary'>Dedicated scrum masters and advanced Agile delivery practices</li>
                  <li className='marker:text-primary'>Capacity to rapidly grow the web & mobile app development teams</li>
                </ul>
                <Link href='/contact'>
                  <button className="p-2 mt-6 bg-primary text-white rounded-sm hover:scale-105 transition-all">Talk to our Consultant</button>
                </Link>
              </div>
              <div className='flex-1 max-h-[300px] max-w-[300px] '>
                <img className=' object-contain' src='/imgs/clientfocus1.webp' />
              </div>
            </div>
          
            <div className={`${active==2 ? "":" hidden"} flex flex-col sm:flex-row gap-6 sm:gap-6 items-center  p-4`}>
            <div className='flex-1'>
              <h1 className='text-3xl mb-4 font-bold'>Digital Agencies</h1>
              {/* <p className='leading-6 text-para'>If you are looking forward to building a new solution then you would need a dedicated team that works as a unit of your organization. A dedicated mobile app development team would</p> */}
              <ul className='list-disc flex flex-col gap-4 max-w-[300px]'>
                <li className='marker:text-primary'>Tested and Proven environment optimization techniques</li>
                <li className='marker:text-primary'>Flexible engagement models for varying delivery risks</li>
                <li className='marker:text-primary'>Capacity to support an ongoing stream of projects</li>
                <li className='marker:text-primary'>Hands-on project delivery experience with value-added services</li>
              </ul>
              <Link href='/contact'>
                  <button className="p-2 mt-6 bg-primary text-white rounded-sm hover:scale-105 transition-all">Talk to our Consultant</button>
                </Link>
            </div>
            <div className='flex-1 '>
              <img className=' object-contain' src='/imgs/clientfocus2.webp' />
            </div>
          </div>
          
         
        
          <div className={`${active==3 ? "":" hidden"} flex flex-col sm:flex-row gap-6 sm:gap-6 items-center  p-4`}>
          <div className='flex-1'>
            <h1 className='text-3xl mb-4 font-bold'>Enterprise</h1>
            {/* <p className='leading-6 text-para'>If you are looking forward to building a new solution then you would need a dedicated team that works as a unit of your organization. A dedicated mobile app development team would</p> */}
            <ul className='list-disc flex flex-col gap-4 max-w-[300px]'>
              <li className='marker:text-primary'>Professional consulting and assistance for large agencies</li>
              <li className='marker:text-primary'>Process transparency and contracting engagements</li>
              <li className='marker:text-primary'>Adherence to standards and regulation</li>
              <li className='marker:text-primary'>Upgrade of Legacy Systems in Enterprises</li>
            </ul>
            <Link href='/contact'>
                  <button className="p-2 mt-6 bg-primary text-white rounded-sm hover:scale-105 transition-all">Talk to our Consultant</button>
            </Link>
          </div>
          <div className='flex-1 '>
            <img className=' object-contain' src='/imgs/clientfocus3.webp' />
          </div>
        </div>
          

         {/* </div> */}
      </section>
</>)
}

export default ClientFocusTab