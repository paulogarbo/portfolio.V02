import { DownloadButton } from "../download-button";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { menuItems, myNameLogo } from "./constants";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <h1>{myNameLogo}</h1>

        <section className="hidden items-center gap-6 lg:flex">
          <div className="border-border border-r-2 pr-5">
            {menuItems.map((item) => (
              <Button key={item.label} variant={"link"}>
                {item.label}
              </Button>
            ))}
          </div>
          <ModeToggle />
          <DownloadButton variant={"outline"} className="bg-transparent">
            Baixar CV
          </DownloadButton>
        </section>
      </nav>
    </header>
  );
};

export default Header;
