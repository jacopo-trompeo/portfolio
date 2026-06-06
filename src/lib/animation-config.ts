export const ANIMATION = {
  duration: {
    fast: 0.4,
    normal: 0.5,
    slow: 0.6,
  },
  delay: {
    base: 0.08,
    max: 0.16,
    stagger: 0.15,
  },
  easing: "easeOut",
  distance: {
    small: 16,
    medium: 24,
  },
  viewport: {
    margin: "-40px",
    marginSection: "-80px",
  },
} as const;
