import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Database,
  MessageCircle,
  Server,
} from "lucide-react";
import { developerInfo } from "../data/mock";

const HeroSection = () => {
  const whatsappLink = `https://wa.me/${
    developerInfo.whatsappNumber
  }?text=${encodeURIComponent(developerInfo.whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(17,17,19)]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,255,1,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(218,255,1,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-[rgb(218,255,1)] rounded-full animate-pulse" />
              <span className="text-[rgb(218,255,1)] text-sm font-medium">
                Disponível para projetos
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {developerInfo.heroPhrase}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[rgb(218,218,218)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {developerInfo.role}
            </motion.p>

            <motion.p
              className="text-[rgb(161,161,170)] text-lg mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {developerInfo.tagline} — Especializado em criar APIs escaláveis e
              sistemas backend robustos.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {["AdonisJS", "Node.js", "PostgreSQL", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-lg text-[rgb(218,218,218)] text-sm font-medium hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_rgba(218,255,1,0.3)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[rgb(63,63,63)] text-white font-semibold rounded-xl hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] hover:bg-[rgba(218,255,1,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                Conhecer mais
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 border-2 border-[rgba(218,255,1,0.2)] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 border border-[rgba(218,255,1,0.1)] rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[rgb(218,255,1)] shadow-[0_0_40px_rgba(218,255,1,0.3)]">
                <img
                  src={developerInfo.photo}
                  alt={developerInfo.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "45% center" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[rgba(17,17,19,0.5)] to-transparent" />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Server className="w-6 h-6 text-[rgb(218,255,1)]" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-6 p-3 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Code2 className="w-6 h-6 text-[rgb(218,255,1)]" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 right-1/4 p-3 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Database className="w-6 h-6 text-[rgb(218,255,1)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-[rgb(161,161,170)] cursor-pointer hover:text-[rgb(218,255,1)] transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() =>
              document
                .getElementById("sobre")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
