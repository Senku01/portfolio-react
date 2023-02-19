import React from 'react'
import WorkItem from './WorkItem'
import { data } from '../data/data'
function Projects() {
  const project = data

  return (
    <div className="" name='work'>
      <div className='pb-8 flex justify-center'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 sm:flex justify-start'>
          Work
        </p>
      </div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-7"> 
				{data.map(work => (
					<WorkItem
						key={work.title}
						imgUrl={work.imgUrl}
						title={work.title}
						workUrl={work.workUrl}
					/>
				))}
			</div>
		</div>
  )
}

export default Projects