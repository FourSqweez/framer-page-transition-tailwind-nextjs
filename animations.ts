export const container  = {
  hidden : {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  } 
}


export const footerContainer = {
  hidden : {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    }
  } 
}

export const footerItemContainer = {
  hidden : {y: '-100%'},
  show: {
    y: '0%',
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  },
}

export const item = {
  hidden : {x: '-100%'},
  show: {
    x: '0%',
    transition: {
      duration: 0.5
    }
  },
}