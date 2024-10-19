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

  const linkStyle = `bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 px-10`
  const gibhubStyle = `bg-deep-blue text-yellow hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair`

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={linkStyle}>
            { link && (
                  <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"   
                  >
                  Deploy
                </a>
              )}
          </div>
          <div className={gibhubStyle}>
            {link && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"     
                >
                GibHub
              </a>
            )}
          </div>
        </motion.div>
     
    
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

export function Projects () {
  return (
    <section id="proyectos" className="pt-48 pb-48">
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
            <span className="text-red">Pro</span>yectos
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          En mi portafolio personal podrás encontrar ejemplos de mi trabajo. <br/> 
          y explorar mis proyectos en GitHub
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
       
          <Project 
            title="Proyecto 1" 
            description="Esta es una landing page de viajes, utilizando tailwind. Tiene mode dark"
            link="https://cinlo82.github.io/travel-tailwind/"
            githubLink="https://github.com/CinLo82/travel-tailwind"
          />
          
          <Project 
            title="Proyecto 2" 
            description="Clon de Landing Page de Tesla para Desktop, realizada con Astro y tailwind" 
            link="https://648615c72fa55b438225bff1--playful-begonia-48453d.netlify.app/"
            githubLink="https://github.com/CinLo82/tesla-landing"
          />
          <Project 
            title="Proyecto 3" 
            description="Clon de React Router; y publicacion del paquete en npm" 
            link="https://www.npmjs.com/package/cinlo-router?activeTab=readme" 
            githubLink="https://github.com/CinLo82/react-midu/tree/main/projects/07-cinlo-router"
          />

          {/* ROW 2 */}
          <Project 
            title="Proyecto 4" 
            description="videojuego creado con HTML, CSS y JavaScript" 
            link="https://cinlo82.github.io/tallerPractJSVideogames/" 
            githubLink="https://github.com/CinLo82/tallerPractJSVideogames"
          />
          <Project 
            title="Proyecto 5" 
            description="E-commerce con React, Tailwind" 
            link="https://glowing-rabanadas-36590b.netlify.app"
            githubLink="https://github.com/CinLo82/react-course"
          />
           <Project 
            title="Proyecto 6" 
            description="App de tareas con React" 
            link="https://cinlo82.github.io/todo-react/"
            githubLink="https://github.com/CinLo82/todo-react"
          />

          {/* ROW 3 */}
          <Project 
            title="Proyecto 7" 
            description="Dashboard de estadisticas, se ultilizo react, Material UI, Data Grid. Modo claro, oscuro" 
            link="https://6484b3722c003b7ed4beabcc--melodious-cocada-950751.netlify.app/"
            githubLink="https://github.com/CinLo82/reactDashboardApp"
          />
          <Project 
            title="Proyecto 8" 
            description="buscador de películas completamente funcional gracias a la API de The Movie DB" 
            link="https://cinlo82.github.io/api-rest-js-practico/"
            githubLink="https://github.com/CinLo82/api-rest-js-practico"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Trabajando en la creación de nuevos proyectos
          </div>
        </motion.div> 
       
      </div>
    </section>
  );
}

