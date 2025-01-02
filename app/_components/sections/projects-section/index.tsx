import { Badge } from "../../ui/badge";
import ProjectCards from "./projects";

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="container mx-auto px-6 py-20">
      <div className="mb-12 flex justify-center">
        <Badge variant="portfolio">Projetos</Badge>
      </div>

      <div className="flex flex-col items-center gap-10">
        <h3 className="m-auto text-center text-xl lg:max-w-[50%]">
          Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas
          habilidades e experiência em diferentes tecnologias:
        </h3>

        <ProjectCards />
      </div>
    </section>
  );
};

export default ProjectsSection;
