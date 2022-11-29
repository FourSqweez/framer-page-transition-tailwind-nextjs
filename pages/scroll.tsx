import React, { useEffect, useState } from 'react';
import {
   motion as m,
   useMotionValue,
   useTransform,
   useAnimation,
} from 'framer-motion';
import { useRouter } from 'next/router';
import { exit } from 'process';
import Footer from '../src/components/Footer';
import { enterPageVariantContainer } from '../animations';

import { useInView } from 'react-intersection-observer';


// const animateVariant = {
//    initial: {
//       x: '-100vw',
//    },
//    enter: {
//       x: 0,
//       transition: {
//          type: 'spring',
//          duration: 1,
//          bounce: 0.3,
//       },
//    },
//    exit: {
//       y: '-100vh',
//       transition: {
//          duration: 0.5,
//          delay: 1,
//       },
//    },
// };

const Scroll = () => {
      const router = useRouter();
      const { ref, inView } = useInView({
         threshold: 1,
      });
      const animation = useAnimation();

      useEffect(() => {
         if (inView) {
            router.push('/');
            animation.start({
               x: 0,
               transition: {
                  type: '',
                  duration: 1,
                  bounce: 0.3,
               },
            });
         }

         if (!inView) {
            animation.start({ x: '-100vw' });
         }
         console.log('use effect hook, inView = ', inView);
      }, [inView, animation, router]);

   return (
      <>
         <div className="flex w-full h-screen">
            <m.main
               variants={enterPageVariantContainer}
               initial="init"
               animate="show"
               exit={'exit'}
               className="page_scroll_container bg-green-300">
               <div className="page_content_container">
                  <div className="main_title">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Saepe, magni.
                  </div>
               </div>
            </m.main>
         </div>
         <div  ref={ref}>
            <Footer color="bg-orange-100" />{' '}
         </div>
      </>
   );
};

export default Scroll;
