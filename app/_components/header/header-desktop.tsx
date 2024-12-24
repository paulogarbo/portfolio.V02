import { DownloadButton } from "../download-button";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { menuItems } from "./constants";

const HeaderDesktop = () => {
  return (
    <section className="hidden items-center gap-3 lg:flex xl:gap-6">
      <div className="border-r-2 border-border pr-1 xl:pr-5">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={"link"}
            className="font-medium xl:text-lg"
          >
            {item.label}
          </Button>
        ))}
      </div>
      <ModeToggle />
      <DownloadButton
        href="./Currículo.pdf"
        variant={"outline"}
        className="bg-transparent"
      >
        Baixar CV
      </DownloadButton>
    </section>
  );
};

export default HeaderDesktop;
