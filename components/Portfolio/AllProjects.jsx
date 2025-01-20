import ProjectItem from './ProjectItem'

const AllProjects = () => {
    let data  = [1,2,3,4,5,6]
  return (
    <div>
        <div>
            <h1 className='text-[42px] text-center font-bold'>All <span className='text-primary'> Projects</span></h1>
        </div>
        <div className='flex flex-col gap-4 sm:mx-10'>
            {data.map(item=>(
                <ProjectItem />
            ))}
        </div>
    </div>
  )
}

export default AllProjects