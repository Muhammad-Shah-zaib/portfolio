// variants.ts
export const cardVariants = {
  // Variants for the left card
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    hover: { scale: 1.1, transition: { delay: 0, duration: 0.2 } },
  },
  // Variants for the right card
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    hover: { scale: 1.1, transition: { delay: 0, duration: 0.2 } },
  },
  // Variants for the middle card
  center: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.3 },
    hover: { scale: 1.1, transition: { delay: 0, duration: 0.2 } },
  },
};
