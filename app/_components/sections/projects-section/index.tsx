import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { projects } from "./constants";

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md dark:shadow-zinc-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-6">
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe size={20} />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={20} />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
