import Head from "next/head";
import Image from "next/image";
import Project from "../components/project";
import ParticlesBG from "../components/particles";
import { motion } from "framer-motion";
import WavyText from "../components/wavy-text";
import SkillsAnim from "../components/skills-anim";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kateryna Baranova - portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <ParticlesBG />
        <motion.div
          className="flex-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 2,
          }}
          id="social"
        >
          <hr className="line-vtc" />
          <a
            href="//www.linkedin.com/in/kateryna-baranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/LinkedIn.svg"
              height={25}
              width={25}
              alt="Social logo"
            />
          </a>
          <a
            href="https://github.com/kbaranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/Github.svg"
              height={25}
              width={25}
              alt="Social logo"
            />
          </a>
          <a
            href="https://codepen.io/katiaBaranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/codepen.svg"
              height={25}
              width={25}
              alt="Social logo"
            />
          </a>
          <hr className="line-vtc" />
        </motion.div>
        <section id="intro">
          <WavyText
            presets={{ className: "intro-text", opacity: 1 }}
            text="Hi, I'm Kateryna!"
            type="textH1"
          />
          <svg id="reflIntro" width="100%" height="100%">
            <defs>
              <filter id="textFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.08"
                  numOctaves="2"
                  result="turbulence"
                  data-filterid="5"
                />
                <feDisplacementMap
                  id="distortion"
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="50"
                >
                  <animate
                    attributeName="scale"
                    values="30; 50; 30"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animate>
                </feDisplacementMap>
              </filter>
            </defs>
            <WavyText
              presets={{
                x: "50%",
                y: "0%",
                textAnchor: "middle",
                className: "reflection",
                fill: "#fff",
                stroke: "none",
                filter: "url(#textFilter)",
                opacity: "0.3",
              }}
              text="Hi, I'm Kateryna!"
              type="textSVG"
            />
          </svg>

          <motion.div
            animate={{ y: [-20, 0, 0], opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: 2,
              times: [0, 0.6, 1],
            }}
          >
            <Image
              src="/arrow.png"
              height={50}
              width={35}
              alt="Social logo"
              id="arrow"
            />
          </motion.div>
        </section>
        <section id="about">
          <WavyText
            presets={{ className: "", opacity: 1 }}
            text="About me"
            type="textH1"
          />
          <motion.div
            className="flex-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
            }}
          >
            <p>
              Hi, I’m Kateryna Baranova. I’m a Front-end developer and Web
              designer based in Lisbon. Having graduated with a Audiovisual and
              Multimedia degree allows me to use my diverse background to find
              all kinds of solutions for interesting and engaging experiences.
              I’m passionate about both programming and design that allows
              creating optimal user experiences. Being hardworking and result
              oriented, I always work towards achieving best results on each
              project I develop. In my free time you can find me drawing or
              exploring the world. Currently, I’m eager to start my career as a
              Front-end developer.
            </p>
            <Image src="/me.png" height={400} width={400} alt="Photo" />
          </motion.div>
        </section>
        <section id="skills">
          <WavyText
            presets={{ className: "", opacity: 1 }}
            text="Skills"
            type="textH1"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills and tecnologies I use for my projects
          </motion.p>
          <SkillsAnim />
        </section>
        <section id="projects">
          <WavyText
            presets={{ className: "", opacity: 1 }}
            text="Projects"
            type="textH1"
          />
          <div className="flex-container">
            <Project
              title="Css generator"
              image="/screen1.png"
              text="A fun and engaging project that allows you to design your gradient background, buttons and text generating a Css code for your project."
              site="https://css-generators.netlify.app"
              git="https://github.com/kbaranova/generator.github.io"
              logos={["HTML5", "CSS3", "Javascript"]}
            />
            <Project
              title="Budget App"
              image="/screen2.png"
              text="A project made with Create React App that allows you to input your income and expenses, count your budget and sort those expenses by categories."
              site="https://kbaranova.github.io/budget-app/"
              git="https://github.com/kbaranova/budget-app"
              logos={["React", "Sass", "rest-api"]}
            />
          </div>
        </section>
      </main>

      <footer>
        <div id="social-mobile">
          <hr className="line-vtc" />
          <a
            href="//www.linkedin.com/in/kateryna-baranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/LinkedIn.svg"
              height={30}
              width={30}
              alt="Social logo"
            />
          </a>
          <a
            href="https://github.com/kbaranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/Github.svg"
              height={30}
              width={30}
              alt="Social logo"
            />
          </a>
          <a
            href="https://codepen.io/katiaBaranova"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/logos/codepen.svg"
              height={30}
              width={30}
              alt="Social logo"
            />
          </a>
          <hr className="line-vtc" />
        </div>
        <p>
          This portfolio was made with Next.js, tsparticles and Framer Motion.
          Check its code on{" "}
          <a
            href="https://kbaranova.github.io/portfolio/"
            target="_blank"
            className="text-link"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
        <h5>All rights reserved 2022 © Kateryna Baranova</h5>
      </footer>
    </div>
  );
}
