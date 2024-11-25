import React from 'react'
import {PROJECTS} from '../../Index/index'
const Projects = () => {
  return (
    <div className='pb-4'>
    <div className=' border-b-[0.5px] border-gray-400 dark:border-gray-200'>
      <h2 className='my-20 text-center text-4xl dark:text-yellow-50'>Full-Stack projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap
            lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <img src={project.image} alt={project.title}
                    width={350}
                    height={350}
                    className='mb-6 rounded mr-6'  />

                </div>
                <div className='w-full max-w-xl lg:w-3/4 ml-6'>
                    <a className='mb-3 font-semibold text-3xl ' href={project.link}>
                        {project.title}
                    </a>
                    <p className='mb-4 mt-5 text-stone-400'>
                        {project.description}
                    </p>
                    {
                        project.technologies.map((tech, index) => (
                            <span className='mr-2 rounded bg-gray-400
                            p-2 text-sm font-medium text-stone-300' key={index}>
                                {tech}
                            </span>
                        ))
                    }
                </div>

            </div>
            
        ))}
      </div>
      </div>
      <div className='border-b-[0.5px] border-gray-400 dark:border-gray-200'>
      <h2 className='my-20 text-center text-4xl dark:text-yellow-50'>Software Engineering
      projects</h2>
        <h2 className='my-20 text-center text-2xl dark:text-yellow-50'>No projects yet
        </h2>
        </div>
        <h2 className='my-20 text-center text-4xl dark:text-yellow-50' >Cyber Security Engineering
      projects</h2>
        <h2 className='my-20 text-center text-2xl dark:text-yellow-50'>No projects yet
        </h2>  
    </div>
  )
}

export default Projects;