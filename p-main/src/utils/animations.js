// Framer Motion animation variants - Professional Green Theme

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 120
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 80
    },
  },
};

export const glowEffect = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)",
    transition: {
      duration: 0.3,
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const slideInScale = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
    },
  },
};
