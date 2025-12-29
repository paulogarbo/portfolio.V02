import { motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { aboutMe } from "../data/mock";

const valueIcons: Record<string, LucideIcon> = {
  Qualidade: Heart,
  Inovação: Lightbulb,
  Colaboração: Users,
  Aprendizado: TrendingUp,
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="sobre"
      className="py-24 bg-[rgb(17,17,19)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(218,255,1)] to-transparent opacity-20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] rounded-full text-[rgb(218,255,1)] text-sm font-medium mb-4">
              Conheça minha história
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {aboutMe.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl border-2 border-[rgb(63,63,63)] group-hover:border-[rgb(218,255,1)] transition-colors duration-500">
                  <img
                    src={aboutMe.photos[0]}
                    alt="Sobre mim"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,17,19)] via-transparent to-transparent opacity-60" />
                </div>

                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[rgb(218,255,1)] rounded-2xl opacity-30" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-[rgb(218,255,1)] rounded-2xl opacity-30" />

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl p-4 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-[rgb(218,255,1)]">
                    2+
                  </div>
                  <div className="text-sm text-[rgb(161,161,170)]">
                    Anos de
                    <br />
                    Experiência
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="prose prose-lg prose-invert max-w-none">
                {aboutMe.description.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[rgb(218,218,218)] leading-relaxed mb-6 text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
                {aboutMe.values.map((value, index) => {
                  const IconComponent = valueIcons[value.title] || Heart;
                  return (
                    <motion.div
                      key={value.title}
                      className="group p-4 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl hover:border-[rgb(218,255,1)] transition-all duration-300 h-full"
                      whileHover={{ y: -4 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[rgba(218,255,1,0.1)] rounded-lg group-hover:bg-[rgba(218,255,1,0.2)] transition-colors flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[rgb(218,255,1)]" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {value.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[rgb(161,161,170)] leading-tight">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
