import type { Variants } from "framer-motion";
import { ANIMATION } from "./animation-config";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: ANIMATION.distance.medium },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      delay,
      ease: ANIMATION.easing,
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -ANIMATION.distance.small },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.fast,
      delay,
      ease: ANIMATION.easing,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: ANIMATION.distance.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing,
    },
  },
};
