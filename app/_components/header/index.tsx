import HeaderMobile from "./header-mobile";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { DownloadButton } from "../download-button";
import { menuItems, myNameLogo } from "./constants";

const Header = () => {
  return (
    <header className="container mx-auto px-10 py-6">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold lg:text-3xl">{myNameLogo}</h1>

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

        <HeaderMobile />
      </nav>
    </header>
  );
};

export default Header;
