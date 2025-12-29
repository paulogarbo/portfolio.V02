import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, GraduationCap, Award, ExternalLink, CheckCircle2 } from 'lucide-react'
import { education, certifications } from '../data/mock'

const EducationSection = () => {
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

  return (
    <section id="formacao" className="py-24 bg-[rgb(26,28,30)] relative overflow-hidden">
      <div className="absolute right-8 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[rgb(218,255,1)] to-transparent opacity-20" />

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
              Aprendizado Contínuo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Formação e <span className="text-[rgb(218,255,1)]">Certificações</span>
            </h2>
            <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
              Minha jornada de aprendizado e qualificação profissional
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Card de Educação */}
            <motion.div variants={itemVariants}>
              <div className="group p-6 md:p-8 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgb(218,255,1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[rgba(218,255,1,0.1)] rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-[rgb(218,255,1)]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {education.degree}
                        </h3>
                        <p className="text-[rgb(218,255,1)] font-semibold text-lg">
                          {education.institution}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 md:items-end">
                        <span className="inline-flex px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full w-fit">
                          {education.semester}
                        </span>
                        <div className="flex items-center gap-2 text-[rgb(161,161,170)] text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{education.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[rgb(161,161,170)] mb-6">
                      Previsão de conclusão: <span className="text-white font-medium">{education.expectedGraduation}</span>
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                        Áreas de estudo
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {education.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-[rgb(161,161,170)]"
                          >
                            <span className="text-[rgb(218,255,1)] mt-0.5">▸</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards de Certificações */}
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="group p-6 md:p-8 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgb(218,255,1)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(218,255,1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[rgba(218,255,1,0.1)] rounded-2xl flex items-center justify-center">
                        <Award className="w-8 h-8 text-[rgb(218,255,1)]" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-2xl font-bold text-white">
                              {cert.title}
                            </h3>
                            {cert.verified && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                Verificado
                              </span>
                            )}
                          </div>
                          <p className="text-[rgb(218,255,1)] font-semibold text-lg mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-[rgb(161,161,170)]">
                            {cert.description}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 md:items-end">
                          <div className="flex items-center gap-2 text-[rgb(161,161,170)] text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                          <span className="px-3 py-1 text-xs bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-lg text-[rgb(161,161,170)]">
                            ID: {cert.credentialId}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-sm bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-lg text-[rgb(218,218,218)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-all text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver Credencial
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
