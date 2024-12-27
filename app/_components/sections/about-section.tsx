import Image from "next/image";
import { Badge } from "../ui/badge";

const AboutSection = () => {
  return (
    <section id="about-section" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <Badge variant={"portfolio"}>Sobre</Badge>
        </div>

        <div className="grid gap-12 xl:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[430px]">
              <div className="absolute right-8 top-8 h-full w-full bg-background" />
              <div className="relative">
                <Image
                  src={"/foto.jpg"}
                  alt="foto de perfil"
                  width={380}
                  height={480}
                  className="relative w-full border-[10px] border-muted object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 max-xl:mt-12">
            <h2 className="text-light-900 dark:text-dark-900 text-2xl font-bold md:text-3xl">
              Curioso sobre mim? 🤔
            </h2>

            <div className="flex flex-col gap-4">
              <p>
                Sou apaixonado pelo desenvolvimento de aplicações web e estou
                sempre aprendendo e aprimorando minhas habilidades. Sou
                especialista em JavaScript, TypeScript, React, Next.js e
                Node.js.
              </p>
              <p>
                Minha jornada profissional como desenvolvedor começou em 2022,
                quando iniciei meus estudos sobre desenvolvimento de jogos.
                Sempre fui um fã de jogos e, nesse ano, descobri que um dos meus
                favoritos, Bioshock, foi desenvolvido na Unreal Engine. Isso me
                deu a direção de onde começar a desenvolver jogos. Comecei a
                estudar Blueprints, uma &quot;linguagem de programação&quot;
                visual da Unreal Engine, dando meus primeiros passos no mundo da
                programação.
              </p>
              <p>
                No início de 2023, entrei na faculdade de Ciência da Computação
                e comecei a estudar a linguagem de programação C, o que me fez
                ter certeza de que era essa a área que eu queria seguir. A
                partir daí, comecei a explorar o desenvolvimento web, onde
                conheci o trio do Front-end: HTML, CSS e JavaScript. Estudei
                sobre desenvolvimento de aplicações web e aprendi sobre React,
                Next.js e TypeScript, o que me levou ao ponto em que estou
                atualmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
