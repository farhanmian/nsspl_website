import Link from 'next/link'
import React from 'react'

const JobItem = ({job}) => {
  return (
    <div className='bg-lightGreen h-[262px] w-[360px] flex flex-col justify-center items-center p-4'>
        <Link href={`/career/${job.id}`} ><h4 className='hover:text-standardGreen text-lg'>{job.title}</h4></Link>
        <div className='p-4'>
            <p className='text-[#687188] text-sm'>{job.desc}</p>
        </div>
        <div>
            {/* <Button>Apply Now</Button> */}
            {/* <JobModel /> */}
        </div>
    </div>
  )
}

export default JobItem