import TechnologiesGrid from "../technologies-grid";
import { Badge } from "../ui/badge";

const TechnologiesSection = () => {
  return (
    <section id="technologies-section" className="container mx-auto px-6 py-20">
      <div className="mb-12 flex justify-center">
        <Badge variant={"portfolio"}>Tecnologias</Badge>
      </div>

      <div className="flex flex-col items-center gap-10">
        <h3 className="m-auto text-center text-xl lg:max-w-[50%]">
          Desenvolvo soluções utilizando tecnologias modernas e boas práticas de
          desenvolvimento. Minha experiência inclui:
        </h3>

        <TechnologiesGrid />
      </div>
    </section>
  );
};

export default TechnologiesSection;
