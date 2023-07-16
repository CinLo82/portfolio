import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// eslint-disable-next-line react/prop-types
const Project = ({ title, description, link, githubLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // eslint-disable-next-line react/prop-types
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"       
            className="text-deep-blue underline mt-4">
            Ver proyecto
          </a>
        )}
         {link && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"       
            className="text-deep-blue underline mt-4">
            GibHub
          </a>
        )}
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

export function Projects () {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          En mi portafolio personal podrás encontrar ejemplos de mi trabajo. <br/> 
          Además, podrás explorar mis proyectos en GitHub
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project 
            title="Project 1" 
            description="Esta es una landing page de viajes, utilizando tailwind. Tiene mode dark"
            link="https://cinlo82.github.io/travel-tailwind/"
            githubLink="https://github.com/CinLo82/travel-tailwind"
          />
          
          <Project 
            title="Project 2" 
            description="Clon de Landing Page de Tesla para Desktop, realizada con Astro y tailwind" 
            link="https://648615c72fa55b438225bff1--playful-begonia-48453d.netlify.app/"
            githubLink="https://github.com/CinLo82/tesla-landing"
          />

          {/* ROW 2 */}
          <Project 
            title="Project 3" 
            description="Clon de React Router; y publicacion del paquete en npm" 
            link="https://www.npmjs.com/package/cinlo-router?activeTab=readme" 
            githubLink="https://github.com/CinLo82/react-midu/tree/main/projects/07-cinlo-router"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            CREATING NEW PROJECTS
          </div>
          <Project 
            title="Project 5" 
            description="E-commerce con React, Tailwind" 
            link="https://glowing-rabanadas-36590b.netlify.app"
            githubLink="https://github.com/CinLo82/react-course"
          />

          {/* ROW 3 */}
          <Project 
            title="Project 6" 
            description="Todo's realizado con react" 
            link="https://cinlo82.github.io/curso-intro-react/"
            githubLink="https://github.com/CinLo82/curso-intro-react"
          />
          <Project 
            title="Project 7" 
            description="Dashboard de estadisticas, se ultilizo react, Material UI, Data Grid. Modo claro, oscuro" 
            link="https://6484b3722c003b7ed4beabcc--melodious-cocada-950751.netlify.app/"
            githubLink="https://github.com/CinLo82/reactDashboardApp"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
}