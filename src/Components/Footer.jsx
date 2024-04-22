import React from 'react'
import { FiLinkedin, } from "react-icons/fi"
import { FaXTwitter, FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <div className='flex lg:hidden gap-4 text-2xl mt-10 '>
        <a href='https://discord.gg/TPJEsUxNG6' target='_blank' rel="noreferrer"><FaDiscord className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://www.linkedin.com/in/#' target='_blank' rel="noreferrer"><FaXTwitter className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://x.com/#' target='_blank' rel="noreferrer"><FiLinkedin className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://wa.me/8700738711' target='_blank' rel="noreferrer"><FaWhatsapp className='   hover:text-primary cursor-pointer duration-300' /></a>
        <a href='https://instagram.com/galgotias_hackathon' target='_blank' rel="noreferrer"><FaInstagram className='   hover:text-primary cursor-pointer duration-300' /></a>
      </div>
      <a href='mailto:galgotiahackathon24@gmail.com' target='_blank' rel="noreferrer"><div className=' font-mono hover:text-primary text-center text-lightest_slate my-8 cursor-default duration-300'>© 2024 GalgotiasInternationalHackathon</div></a>

    </>
  )
}

export default Footer