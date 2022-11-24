import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { container, item } from '../animations'

export default function Home() {
  return (
    <m.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='bg-orange-100 page_style'
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='my-96 lg:my-40 p-1 overflow-hidden'>
          <m.h1
            animate={{ x: 0 }}
            initial={{ x: '100%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='main_title'>Happy Pickle</m.h1>
        </div>
        <div
          className='flex justify-between '>

          <m.div
          variants={container}
          initial='hidden'
          animate='show'>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>Design</m.h2>
            </div>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>company</m.h2>
            </div>
            <div className='overflow-hidden'>
              <m.h2 variants={item}>2022</m.h2>
            </div>
          </m.div>


          <div>
            <h3>This Pickle gonna make you smile.</h3>
            <h3>Scottish designs to make you happy.</h3>
            <h3>Click contact for cool transition.</h3>
          </div>
        </div>
      </main>



    </m.div>
  )
}
