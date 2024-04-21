import React from 'react'
import Button from '../UI elements/Button'

const Contact = () => {
  return (
    <div className=' text-center max-w-[580px] flex flex-col items-center' id='contact'>
      <div className=' text-primary text-lg font-mono mb-2'>04. What's Next?</div>
      <div className=' font-bold text-off_white text-[48px]'>How to Reach?</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.8691103218587!2d77.49633798912436!3d28.45730669394026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1dc8b29c0e1%3A0x4ee84fe65c694f0!2sGALGOTIAS%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY%2C%20Knowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1713647077698!5m2!1sen!2sin"
        width="800"
        className='opacity-80 hover:opacity-100 duration-200 my-10'
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      {/* <div className=' text-lightest_slate my-3 mb-12'>Feel free to reach out! I'm currently open to new freelancing projects and eager to explore exciting opportunities. Let's connect and discuss how we can collaborate on innovative and impactful ventures. Looking forward to hearing from you!</div> */}
      <a href='https://www.linkedin.com/in/shriyamgera' target='_blank' rel="noreferrer"><Button title={"Contact Us!"} /></a>
    </div>
  )
}

export default Contact