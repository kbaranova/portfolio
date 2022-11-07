import { motion } from "framer-motion";

export default function WavyText({ presets, text, type }) {
  const letters = Array.from(text);
  // console.log(inview);
  const containers = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const child = {
    visible: {
      opacity: presets.opacity,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 160,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  if (type === "textH1") {
    return (
      <motion.h1
        variants={containers}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // animate="visible"
        {...presets}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    );
  } else if (type === "textSVG") {
    return (
      <motion.text
        variants={containers}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...presets}
      >
        {letters.map((letter, index) => (
          <motion.tspan key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter}
          </motion.tspan>
        ))}
      </motion.text>
    );
  }
}
