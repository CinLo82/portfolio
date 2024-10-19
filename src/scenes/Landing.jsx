import { SocialMediaIcons } from "../components/SocialMediaIcon";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Landing (setSelectedPage) {
    const isAboveLarge = useMediaQuery("(min-widht: 1060px)")

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/CinloLosada.pdf'; 
        link.target = '_blank'; 
        link.download = 'CinloLosada.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    

    return (
        <section 
            id="inicio" 
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-48"
        >

            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32" >
                {isAboveLarge ? (
                    <div 
                    className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img 
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full  max-w-[400px] "
                            src="/assets/image-profile.png"
                        />
                    </div>
                ) : (
                    <img 
                        alt="profile"
                        className="z-10 w-80% max-w-[400px] rounded-full overflow-hidden" 
                        src="assets/profile-image.png"
                    />
                )}
            </div>
                {/* MAIN TEXT */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32" >
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Cintia {""}
                            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]" >
                                Losada
                            </span>
                        </p>
                        <p className="mt-10 mb-5 text-sm text-center md:text-start" >
                        ¡Hola! Soy Cintia, desarrolladora Full Stack.<br/>
                        Me apasiona la tecnología y la creatividad. Aquí encontrarás mis proyectos y
                        habilidades en el desarrollo web.
                        Estoy comprometida en crecer en este campo y expandir mis habilidades y conocimientos para colaborar en nuevos proyectos.
                        
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
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
                        <AnchorLink
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contacto"
                        >
                            Contáctame!
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        >
                            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                                <button onClick={handleDownload}>CV</button>
                            </div>
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <SocialMediaIcons />
                    </motion.div>
                </div>
        </section>
    );
}

