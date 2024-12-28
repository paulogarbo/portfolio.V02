"use client";

import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const ButtonToTop = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full">
      <Link to={"hero-section"} smooth={true} duration={500}>
        <Button
          variant={"outline"}
          size={"icon"}
          className="border-2 border-primary/40 bg-transparent font-medium shadow-sm"
        >
          <ArrowUp />
        </Button>
      </Link>
    </div>
  );
};

export default ButtonToTop;
