import React, { useEffect, useState } from 'react';
import {
   motion as m,
   useMotionValue,
   useTransform,
   useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import { exit } from 'process';
import Footer from '../src/components/Footer';

const animateVariant = {
   initial: {
      x: '-100vw',
   },
   enter: {
      x: 0,
      transition: {
         type: 'spring',
         duration: 1,
         bounce: 0.3,
      },
   },
   exit: {
      y: '-100vh',
      transition: {
         duration: 0.5,
         delay: 1,
      },
   },
};

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
         <div className="w-full flex h-screen bg-green-300 justify-center items-center text-4xl px-24">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur, vitae voluptates. Illo est aspernatur alias autem, sit
            hic quam fuga nesciunt eaque pariatur. Soluta a, laudantium beatae
            deleniti cumque amet.
         </div>
         <div ref={ref}>

            <m.div
               variants={animateVariant}
               initial="initial"
               animate="enter"
               exit="exit"
               className="gap-20 flex h-full flex-col justify-center">
               <Footer color="bg-orange-100" />
            </m.div>
         </div>
      </>
   );
};

export default Scroll;
