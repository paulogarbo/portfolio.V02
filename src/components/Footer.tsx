import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import type { MouseEvent } from "react";
import { developerInfo } from "../data/mock";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface FooterLink {
  label: string;
  href: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/${
    developerInfo.whatsappNumber
  }?text=${encodeURIComponent(developerInfo.whatsappMessage)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks: SocialLink[] = [
    { icon: Github, href: developerInfo.github, label: "GitHub" },
    { icon: Linkedin, href: developerInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${developerInfo.email}`, label: "Email" },
    { icon: MessageCircle, href: whatsappLink, label: "WhatsApp" },
  ];

  const footerLinks: FooterLink[] = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[rgb(17,17,19)] border-t border-[rgb(63,63,63)]">
      <div className="container mx-auto px-6">
        <div className="py-16 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[rgb(218,255,1)] rounded-lg flex items-center justify-center">
                <span className="text-[rgb(17,17,19)] font-bold text-xl">
                  &lt;/&gt;
                </span>
              </div>
              <span className="text-white font-bold text-xl">Garbo</span>
            </div>
            <p className="text-[rgb(161,161,170)] mb-6">
              Desenvolvedor Full-Stack apaixonado por criar soluções
              tecnológicas inovadoras e escaláveis.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-lg flex items-center justify-center text-[rgb(161,161,170)] hover:bg-[rgb(218,255,1)] hover:text-[rgb(17,17,19)] hover:border-[rgb(218,255,1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${developerInfo.email}`}
                className="flex items-center gap-3 text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{developerInfo.email}</span>
              </a>
              <p className="text-[rgb(161,161,170)]">
                {developerInfo.location}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] font-semibold rounded-xl hover:shadow-[0_4px_20px_rgba(218,255,1,0.3)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[rgb(63,63,63)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[rgb(161,161,170)] text-sm flex items-center gap-1">
            © {currentYear} - Feito com{" "}
            <Heart className="w-4 h-4 text-[rgb(218,255,1)]" /> por mim
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[rgb(161,161,170)] hover:text-[rgb(218,255,1)] transition-colors"
          >
            <span className="text-sm">Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
