import React from 'react'

function WorkItem({imgUrl,title,workUrl}) {
  return (
    <a
			href={workUrl}
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
		>
			<img
				src={imgUrl}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="p-5 bg-[#161b26] dark:text-gray-300 ">
				<h3 className="text-lg text-white md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				{/* <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
					{tech.map(item => (
						<span
							key={item}
							className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
						>
							{item}
						</span>
					))}
				</p> */}
			</div>
		</a>
  )
}

export default WorkItem