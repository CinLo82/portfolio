import AnchorLink from "react-anchor-link-smooth-scroll";

// eslint-disable-next-line react/prop-types
export function DotGroup ({ selectedPage, setSelectedPage }) {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink
          href="#inicio"
          className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
          onClick={() => setSelectedPage("home")}
        />
        
        <AnchorLink
          href="#habilidades"
          className={`${
            selectedPage === "skills" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
          onClick={() => setSelectedPage("skills")}
        />

        <AnchorLink
          href="#proyectos"
          className={`${
            selectedPage === "projects" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
          onClick={() => setSelectedPage("projects")}
        />

        <AnchorLink
          href="#contacto"
          className={`${
            selectedPage === "contact" ? selectedStyles : "bg-dark-grey"} w-3 h-3 rounded-full`}
          onClick={() => setSelectedPage("contact")}
        />
    </div>
  );
}