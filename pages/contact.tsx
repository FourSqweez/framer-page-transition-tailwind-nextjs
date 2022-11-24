import React from 'react'
import { motion as m } from 'framer-motion'
import { container, item } from '../animations'


const Contact = () => {
  return (
    <m.main
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className=' bg-red-400 page_style'>
      <div className='my-96 lg:my-40 p-1 overflow-hidden'>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='main_title'>Let's Talk</m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me: </h4>
        </div>
        
        <div className='lg:text-6xl text-2xl underline '>
          <m.ul variants={container} initial='hidden' animate='show'>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>Twitter</m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>Instagram</m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>Facebook</m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  )
}

export default Contact