import React from 'react'
import { FiLinkedin, FiPhone } from "react-icons/fi"
import { FaXTwitter, FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa6"



const LeftSidebar = () => {
  return (
    <div className=' p-2 max-w-fit flex-col items-center fixed bottom-0 text-lightest_slate sb:flex hidden glassmorphism'>
      <div className='flex flex-col gap-5 text-4xl '>
        {/* <a href='tel:+918700738711' target='_blank' rel="noreferrer"><FiPhone className='  hover:text-primary cursor-pointer duration-200' /></a> */}
        <a href='https://discord.com/invite/3JYJhdtjZb' target='_blank' rel="noreferrer"><FaDiscord className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://www.linkedin.com/company/galgotias-international-hackathon/' target='_blank' rel="noreferrer"><FiLinkedin className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://x.com/gcet_council' target='_blank' rel="noreferrer"><FaXTwitter className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://chat.whatsapp.com/H6MwsoFW5NnCTfuoHwBQCs' target='_blank' rel="noreferrer"><FaWhatsapp className='  hover:text-primary cursor-pointer duration-200' /></a>
        <a href='https://instagram.com/galgotias_hackathon' target='_blank' rel="noreferrer"><FaInstagram className='  hover:text-primary cursor-pointer duration-200' /></a>
      </div>
      <div className='h-[130px] bg-lightest_slate w-[1px] mt-8'>
      </div>
    </div>
  )
}

export default LeftSidebar