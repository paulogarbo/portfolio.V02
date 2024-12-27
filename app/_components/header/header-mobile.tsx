"use client";

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
// import Link from "next/link";
import { Link } from "react-scroll";

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
            <Link to="hero-section" smooth={true} duration={500}>
              <SheetTitle>{myNameLogo}</SheetTitle>
            </Link>
          </SheetHeader>

          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                smooth={true}
                duration={500}
              >
                <Button
                  variant={"link"}
                  className="justify-start text-left font-medium"
                >
                  {item.label}
                </Button>
              </Link>
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
