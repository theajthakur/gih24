import React from 'react'
import { FiLinkedin, FiPhone, } from "react-icons/fi"
import { FaXTwitter, FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <div className='flex gap-4 text-2xl mt-10 glassmorphism md:text-4xl '>
        <a href='tel:+918700738711' target='_blank' rel="noreferrer"><FiPhone className='  hover:text-primary cursor-pointer duration-300 ' /></a>
        <a href='https://discord.gg/TPJEsUxNG6' target='_blank' rel="noreferrer"><FaDiscord className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://www.linkedin.com/company/galgotias-international-hackathon/' target='_blank' rel="noreferrer"><FiLinkedin className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://x.com/gcet_council' target='_blank' rel="noreferrer"><FaXTwitter className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://wa.me/8700738711' target='_blank' rel="noreferrer"><FaWhatsapp className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://instagram.com/galgotias_hackathon' target='_blank' rel="noreferrer"><FaInstagram className='   hover:text-primary cursor-pointer duration-300' /></a>
      </div>
      <a href='mailto:galgotiahackathon24@gmail.com' target='_blank' rel="noreferrer"><div className=' font-mono hover:text-primary text-center text-lightest_slate my-4 cursor-default duration-300 glassmorphism'>© 2024 GalgotiasInternationalHackathon</div></a>
      <a href='https://www.instagram.com/gcetloop' target='_blank' rel="noreferrer"><div className=' text-[30px] flex items-center justify-center font-mono hover:text-primary text-center text-lightest_slate cursor-default duration-300 glassmorphism gap-2 hover:scale-125'><div>Designed & built by </div> <img src='/images/loop.png' alt='loop' className='h-20 mb-1 ' />  </div></a>

    </>
  )
}

export default Footer