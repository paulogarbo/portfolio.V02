import { myNameLogo } from "./constants";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

const Header = () => {
  return (
    <header className="sticky top-4 z-50 mt-4 w-full justify-center px-2 md:flex md:px-4">
      <div className="container mx-auto w-full px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold lg:text-3xl">{myNameLogo}</h1>

          <HeaderDesktop />
          <HeaderMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
