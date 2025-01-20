import Head from 'next/head'
import { useState } from 'react'
import JobItem from '../../components/Career/JobItem'

const index = () => {
    const [data,setData] = useState([1,2,3,4,5,6,7,8,9])
    return (<>
    <Head>
      <title>Career - Build your career with NSS</title>
    </Head>
      <section id="hero1" className="d-flex align-items-center !h-60">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h1 className=' !font-semibold text-[#555555]' >Career Oppurtunity at NSS</h1>
      </div>
      
    </section>
  
    <section>
      <div>
        <h1>Current Openings</h1>
      </div>
      <div className='flex flex-wrap gap-4 justify-around'>
        {data.map(item=>(
          <JobItem key={item} job={{id:item,title:"Frontend Engineer",desc:"We are looking for an SEO/SEM expert to manage all search engi..."}} />
        ))}
  
      </div>
    </section>
    </>)
}

export default index