import React from 'react';
import { motion as m } from 'framer-motion';
import { container, item } from '../animations';
import Footer from '../src/components/Footer';

const Contact = () => {
   return (
      <>
         <div className='flex w-full h-screen'>
            <m.main
               initial={{ y: '100%' }}
               animate={{ y: '0%' }}
               exit={{ opacity: 1 }}
               transition={{ duration: 0.5, ease: 'easeInOut' }}
               className=" bg-red-400 page_scroll_container">
               <div className="page_content_container">
                  <div className="main_title">
                     <m.h1
                        animate={{ y: 0 }}
                        initial={{ y: '100%' }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="main_title">
                        Let&apos;s Talk
                     </m.h1>
                  </div>
                  <div className="flex gap-40">
                     <div className="lg:text-2xl text-base">
                        <h4>Find me: </h4>
                     </div>

                     <div className="lg:text-6xl text-2xl underline ">
                        <m.ul
                           variants={container}
                           initial="hidden"
                           animate="show">
                           <div className="overflow-hidden">
                              <m.li variants={item} className="pb-2">
                                 Twitter
                              </m.li>
                           </div>
                           <div className="overflow-hidden">
                              <m.li variants={item} className="pb-2">
                                 Instagram
                              </m.li>
                           </div>
                           <div className="overflow-hidden">
                              <m.li variants={item} className="pb-2">
                                 Facebook
                              </m.li>
                           </div>
                        </m.ul>
                     </div>
                  </div>
               </div>
            </m.main>
         </div>
         <Footer color='bg-green-300'/>
      </>
   );
};

export default Contact;
