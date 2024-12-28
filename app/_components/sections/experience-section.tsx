import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack Jr",
      company: "X Software House",
      period: "Maio 2024 - Julho 2024",
      achievements: [
        "Desenvolvimento de APIs RESTful utilizando Node.js e Express, garantindo alta performance e escalabilidade",
        "Implementação de interfaces responsivas com React.js e TypeScript, seguindo as melhores práticas de UI/UX",
        "Colaboração em equipe ágil com metodologia Scrum, participando ativamente das cerimônias e entregas",
        "Integração de sistemas terceiros e implementação de novos recursos para clientes enterprise",
      ],
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "Express",
        "SQL",
        "Git",
      ],
    },
    {
      title: "Desenvolvedor Full Stack Jr",
      company: "Clicksoft",
      period: "Julho 2024 - Presente",
      achievements: [
        "Desenvolvimento de features front-end utilizando React.js e Tailwind CSS, garantindo uma experiência de usuário atraente e intuitiva",
        "Implementação de testes unitários e integração com Jest e Testing Library",
        "Otimização de queries SQL e endpoints REST para melhor performance",
        "Participação ativa em code reviews e documentação técnica do projeto",
      ],
      skills: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Adoni.js",
        "Jest",
        "SQL",
      ],
    },
  ];

  return (
    <section id="experience-section" className="bg-muted py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-center">
          <Badge variant="portfolio" className="mb-4">
            Experiência Profissional
          </Badge>
          <h2 className="text-center text-3xl font-bold">
            Minha Jornada Profissional
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group transition-shadow duration-300 hover:shadow-lg dark:shadow-zinc-300"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold">
                    {exp.title}
                  </CardTitle>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-primary">•</span>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 border-t pt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
