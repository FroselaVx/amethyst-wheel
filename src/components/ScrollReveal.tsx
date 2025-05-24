import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.5"],
  });

  const directionMap = {
    up: { y: [150, 0] },
    down: { y: [-150, 0] },
    left: { x: [150, 0] },
    right: { x: [-150, 0] },
  };

  const selectedDirection = directionMap[direction];
  const animationProperty = Object.keys(selectedDirection)[0];
  const [start, end] = selectedDirection[animationProperty];

  const motionValue = useTransform(scrollYProgress, [0, 1], [start, end]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, [animationProperty]: start }}
      style={{
        opacity: opacityValue,
        scale: scaleValue,
        [animationProperty]: motionValue,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom easing for a more dynamic feel
      }}
    >
      {children}
    </motion.div>
  );
}
