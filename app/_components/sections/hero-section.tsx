import Image from "next/image";
import StatusIndicator from "../status-indicator";
import { Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { href: "https://www.linkedin.com/in/paulo-alexgarba/", icon: Linkedin },
  { href: "https://github.com/paulogarbo", icon: Github },
];

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="container mx-auto flex flex-col items-center justify-center px-4 py-14 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4">
        <div className="order-2 space-y-12 lg:order-1">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold leading-relaxed lg:leading-relaxed xl:text-4xl xl:font-bold 2xl:text-5xl 2xl:leading-loose">
              Olá, Eu sou o Garba!
            </h1>
            <p className="text-sm lg:text-base">
              Sou desenvolvedor full stack com um ano de experiência e estudante
              de Ciência da Computação no quinto semestre. Foco em criar
              experiências digitais excepcionais que são rápidas, acessíveis,
              atraentes e responsivas. Sou apaixonado pelo desenvolvimento de
              aplicações web e estou sempre aprendendo e aprimorando minhas
              habilidades.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin size={24} />
              <p>Taubaté - SP</p>
            </div>
            <div className="ml-1">
              <StatusIndicator />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon }) => (
              <Button
                key={href}
                variant="outline"
                className="h-11 [&_svg]:size-5 [&_svg]:shrink-0"
                asChild
              >
                <a href={href} target="_blank" rel="noreferrer">
                  <Icon strokeWidth={1.5} />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image src={"/hero-img.svg"} alt="Garba" width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
