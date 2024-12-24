import { myNameLogo } from "./constants";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";

const Header = () => {
  return (
    <header className="container mx-auto px-10 py-6">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold lg:text-3xl">{myNameLogo}</h1>

        <HeaderDesktop />
        <HeaderMobile />
      </nav>
    </header>
  );
};

export default Header;
