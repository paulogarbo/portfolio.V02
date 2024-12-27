"use client";
import { myNameLogo } from "./constants";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full justify-center bg-background/80 px-2 shadow-sm backdrop-blur-sm md:flex md:px-4 md:py-3">
      <div className="container mx-auto w-full px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="hero-section" smooth={true} duration={500}>
            <h1 className="text-2xl font-bold lg:text-3xl">{myNameLogo}</h1>
          </Link>

          <HeaderDesktop />
          <HeaderMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
