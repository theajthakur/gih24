import React from 'react'
import { FiLinkedin, } from "react-icons/fi"
import { FaXTwitter, FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa6"



const LeftSidebar = () => {
  return (
    <div className=' p-2 max-w-fit flex-col items-center fixed bottom-0 text-lightest_slate lg:flex hidden glassmorphism'>
      <div className='flex flex-col gap-4 text-2xl '>
        <a href='https://discord.gg/TPJEsUxNG6' target='_blank' rel="noreferrer"><FaDiscord className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://www.linkedin.com/in/#' target='_blank' rel="noreferrer"><FaXTwitter className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://x.com/#' target='_blank' rel="noreferrer"><FiLinkedin className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://wa.me/8700738711' target='_blank' rel="noreferrer"><FaWhatsapp className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://instagram.com/galgotias_hackathon' target='_blank' rel="noreferrer"><FaInstagram className='  hover:text-primary cursor-pointer duration-200' /></a>
      </div>
      <div className='h-[130px] bg-lightest_slate w-[1px] mt-8'>
      </div>
    </div>
  )
}

export default LeftSidebar