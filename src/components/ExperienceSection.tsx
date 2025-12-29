import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, CheckCircle2, Briefcase, Building2, Rocket } from 'lucide-react'
import { experiences } from '../data/mock'

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const getIcon = (type: string, isCurrent: boolean) => {
    if (isCurrent) return <Rocket className="w-5 h-5" />
    if (type === 'Freelancer') return <Briefcase className="w-5 h-5" />
    return <Building2 className="w-5 h-5" />
  }

  return (
    <section id="experiencia" className="py-24 bg-[rgb(17,17,19)] relative overflow-hidden">
      <div className="absolute left-8 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[rgb(218,255,1)] to-transparent opacity-20" />
      <div className="absolute right-8 top-1/3 w-px h-1/3 bg-gradient-to-b from-transparent via-[rgb(218,255,1)] to-transparent opacity-20" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] rounded-full text-[rgb(218,255,1)] text-sm font-medium mb-4">
              Minha Trajetória
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experiência Profissional
            </h2>
            <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
              Cada experiência foi fundamental para meu crescimento como desenvolvedor
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline vertical */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(218,255,1)] via-[rgb(63,63,63)] to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-8 w-16 items-center justify-center z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.isCurrent
                          ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)]'
                          : 'bg-[rgb(26,28,30)] border-2 border-[rgb(63,63,63)] text-[rgb(218,255,1)]'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {getIcon(exp.type, exp.isCurrent)}
                    </motion.div>
                  </div>

                  <motion.div
                    className="group md:ml-24 p-6 md:p-8 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgb(218,255,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {exp.isCurrent && (
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(218,255,1)] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-[rgb(218,255,1)]"></span>
                        </span>
                        <span className="text-xs text-[rgb(218,255,1)] font-medium uppercase tracking-wider">Trabalhando aqui</span>
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`px-4 py-1.5 text-sm font-medium rounded-full ${
                            exp.isCurrent
                              ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)]'
                              : 'bg-[rgba(218,255,1,0.1)] text-[rgb(218,255,1)] border border-[rgba(218,255,1,0.2)]'
                          }`}>
                            {exp.isCurrent ? 'Posição Atual' : exp.type}
                          </span>
                          <span className="px-3 py-1 text-xs bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-full text-[rgb(161,161,170)]">
                            {exp.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[rgb(218,255,1)] transition-colors mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[rgb(218,255,1)]" />
                          <p className="text-[rgb(218,255,1)] font-semibold text-lg">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[rgb(161,161,170)] text-sm bg-[rgb(17,17,19)] px-4 py-2 rounded-lg border border-[rgb(63,63,63)] shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-[rgb(218,218,218)] mb-6 text-base leading-relaxed border-l-2 border-[rgb(63,63,63)] pl-4">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(218,255,1)]" />
                        Principais responsabilidades
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[rgb(161,161,170)] p-3 bg-[rgb(17,17,19)] rounded-lg border border-transparent hover:border-[rgb(63,63,63)] transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + idx * 0.05 }}
                          >
                            <span className="w-1.5 h-1.5 bg-[rgb(218,255,1)] rounded-full mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[rgb(63,63,63)]">
                      <h4 className="text-xs font-semibold text-[rgb(161,161,170)] mb-3 uppercase tracking-wider">Stack utilizada</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1.5 text-sm bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-lg text-[rgb(218,218,218)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-colors cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.15 + idx * 0.03 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resumo de carreira */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 md:p-8 bg-gradient-to-r from-[rgba(218,255,1,0.1)] to-transparent border border-[rgba(218,255,1,0.2)] rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Resumo da Trajetória</h3>
                <p className="text-[rgb(161,161,170)]">Crescimento contínuo e aprendizado em cada projeto</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <span className="text-3xl font-bold text-[rgb(218,255,1)]">2+</span>
                  <p className="text-sm text-[rgb(161,161,170)]">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[rgb(218,255,1)]">{experiences.length}</span>
                  <p className="text-sm text-[rgb(161,161,170)]">Posições</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[rgb(218,255,1)]">10+</span>
                  <p className="text-sm text-[rgb(161,161,170)]">Projetos entregues</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection

