import TechnologiesGrid from "../technologies-grid";
import { Badge } from "../ui/badge";

const TechnologiesSection = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="mb-12 flex justify-center">
        <Badge variant={"portfolio"}>Tecnologias</Badge>
      </div>

      <div className="flex flex-col items-center gap-10">
        <h3 className="m-auto max-w-[50%] text-center text-xl">
          Desenvolvo soluções utilizando tecnologias modernas e boas práticas de
          desenvolvimento. Minha experiência inclui:
        </h3>

        <TechnologiesGrid />
      </div>
    </section>
  );
};

export default TechnologiesSection;
