import { Variants } from 'framer-motion';

export const enterPageVariantContainer: Variants = {
  init: {
    y: '80%',
  },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
  exit: {
    y: '-100vh',
    transition: { duration: 0.8, delay: 1 },
  },
};

export const fadeInTransitionY = (
  direction: 'up' | 'down' = 'up'
): Variants => {
  return {
    init: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
      
    },
  };
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const footerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const footerItemContainer = {
  hidden: { y: '-100%' },
  show: {
    y: '0%',
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { x: '-100%' },
  show: {
    x: '0%',
    transition: {
      duration: 0.5,
    },
  },
};
