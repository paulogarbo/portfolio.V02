import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { menuItems, myNameLogo } from "./constants";
import { ModeToggle } from "../mode-toggle";
import { DownloadButton } from "../download-button";

const HeaderMobile = () => {
  return (
    <section className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="flex flex-col gap-3">
          <SheetHeader className="border-b border-border pb-3">
            <SheetTitle>{myNameLogo}</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant={"link"}
                className="justify-start text-left font-medium"
              >
                {item.label}
              </Button>
            ))}
          </div>

          <SheetFooter className="flex flex-col border-t border-border pt-3">
            <ModeToggle />
            <DownloadButton
              href="./Currículo.pdf"
              variant={"outline"}
              className="w-full"
            >
              Baixar CV
            </DownloadButton>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default HeaderMobile;
