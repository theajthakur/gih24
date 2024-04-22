import React from 'react'

const RightSidebar = () => {
  return (
    <div className=' p-2 max-w-fit flex-col items-center bottom-0 right-[20px] text-lightest_slate fixed lg:flex hidden glassmorphism '>
      <a href='mailto:galgotiahackathon24@gmail.com'>
        <div className='flex flex-col gap-4 font-mono text-2xl vertical-text cursor-pointer hover:text-primary duration-200 '>
          galgotiahackathon24@gmail.com
        </div>
      </a>

      <div className='h-[130px] bg-lightest_slate w-[1px] mt-8'>
      </div>
    </div>
  )
}

export default RightSidebar