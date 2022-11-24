import React from 'react'
import { motion as m } from 'framer-motion'


const Contact = () => {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className=' bg-red-400 page_style'>
      <div className='my-96 p-1'>
        <h1 className='main_title'>Let's Talk</h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me: </h4>
        </div>
        <div className='lg:text-6xl text-2xl underline '>
          <ul>
            <li className='pb-2'>Twitter</li>
            <li className='pb-2'>Instagram</li>
            <li className='pb-2'>Facebook</li>
          </ul>
        </div>
      </div>
    </m.main>
  )
}

export default Contact