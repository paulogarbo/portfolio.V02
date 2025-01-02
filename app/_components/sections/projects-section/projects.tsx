
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import { Card } from "../../ui/card"
import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"
import { projects } from "./constants"

const ProjectCards = () => {
  return (
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
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <Badge variant={project.status === "Finalizado" ? "outline" : "secondary"}>
                {project.status}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline">
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
  )
}

export default ProjectCards