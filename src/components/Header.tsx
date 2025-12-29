import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { developerInfo } from "../data/mock";

interface NavItem {
  label: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${
    developerInfo.whatsappNumber
  }?text=${encodeURIComponent(developerInfo.whatsappMessage)}`;

  const navItems: NavItem[] = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = useCallback(
    (targetPosition: number, duration: number = 800) => {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    },
    []
  );

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "#") {
      smoothScrollTo(0);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;
        smoothScrollTo(offsetPosition);
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(17,17,19,0.95)] backdrop-blur-md border-b border-[rgb(63,63,63)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => handleNavClick(e, "#")}
            >
              <div className="w-10 h-10 bg-[rgb(218,255,1)] rounded-lg flex items-center justify-center">
                <span className="text-[rgb(17,17,19)] font-bold text-xl">
                  &lt;/&gt;
                </span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Garbo
              </span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[rgb(218,218,218)] hover:text-[rgb(218,255,1)] transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] font-semibold rounded-xl hover:shadow-[0_4px_20px_rgba(218,255,1,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[rgb(218,255,1)] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[rgba(17,17,19,0.95)] backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              className="absolute top-20 left-0 right-0 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="p-4 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl text-white text-lg font-medium hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] font-bold text-lg rounded-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
