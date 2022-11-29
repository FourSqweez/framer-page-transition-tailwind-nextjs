import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';

interface PropsType {
   children: React.ReactNode;
   redirectPath: string
}

const CustomRedirect = ({ children, redirectPath }: PropsType) => {
   const router = useRouter();

   const { ref, inView } = useInView({
      threshold: 1,
   });
   const animation = useAnimation();

   useEffect(() => {
      if (inView) {
         router.push(redirectPath);
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
   return <div ref={ref}>{children}</div>;
};

export default CustomRedirect;
