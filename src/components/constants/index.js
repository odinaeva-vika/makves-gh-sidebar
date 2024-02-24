const textAnimation = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const textAnimationBottom = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const btnAnimation = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

/* const showAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}; */

export { textAnimation, textAnimationBottom, btnAnimation };
