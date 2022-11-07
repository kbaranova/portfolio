import Image from "next/image";
import { motion } from "framer-motion";

export default function Project({ title, image, text, site, git, logos }) {
  return (
    <motion.div
      className="project-wrapper"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
      }}
    >
      <Image
        className="img-self"
        src={`${image}`}
        quality={100}
        height={300}
        width={600}
        alt="Photo"
      />
      <div className="info-wrapper">
        <div className="title-wrapper">
          <hr className="line-hrz" />
          <h4>{title}</h4>
          <hr className="line-hrz" />
        </div>
        <p>{text}</p>
        <div className="logo-wrapper">
          {logos.map((el, i) => {
            return (
              <Image
                src={`/logos/${el}.svg`}
                height={30}
                width={30}
                alt="logo"
                key={i}
                className="logo-project"
              />
            );
          })}
        </div>
        <div className="button-wrapper">
          <a href={`${site}`} target="_blank" rel="noreferrer">
            <button>Site</button>
          </a>
          <a href={`${git}`} target="_blank" rel="noreferrer">
            <button>Code</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
