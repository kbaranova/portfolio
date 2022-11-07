import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillsAnim() {
  const containers = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const child = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      scale: 1.2,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  return (
    <motion.div
      className="grid-container"
      variants={containers}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/HTML5.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>HTML</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/CSS3.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>Css</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/JavaScript.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>JavaScript</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/JQuery.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>jQuery</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/React.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>React</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/nextJs.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>Next.js</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/rest-api.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>API</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/Sass.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>Sass</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/Bootstrap.svg"
          height={70}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>Bootstrap</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/WordPress.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>WordPress</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/Visual_Studio.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>VS Code</h5>
      </motion.div>
      <motion.div className="wrapper" variants={child}>
        <Image
          src="/logos/Adobe.svg"
          height={80}
          width={80}
          alt="Logo"
          className="logo-img"
        />
        <h5>Adobe Creative Cloud</h5>
      </motion.div>
    </motion.div>
  );
}
