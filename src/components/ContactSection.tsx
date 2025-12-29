import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Mail, MapPin, ArrowRight, Github, Linkedin, Clock, Send, Coffee } from 'lucide-react'
import { developerInfo, contactInfo } from '../data/mock'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappLink = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(developerInfo.whatsappMessage)}`

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

  const socialLinks = [
    { icon: Github, href: developerInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: developerInfo.linkedin, label: 'LinkedIn' },
  ]

  return (
    <section id="contato" className="py-24 bg-[rgb(26,28,30)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(218,255,1)] rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] rounded-full text-[rgb(218,255,1)] text-sm font-medium mb-4">
              Vamos trabalhar juntos?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
              {contactInfo.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cards de informação */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Card de disponibilidade */}
              <div className="p-6 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgba(218,255,1,0.3)] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[rgba(218,255,1,0.1)] rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[rgb(218,255,1)]" />
                  </div>
                  <h3 className="font-semibold text-white">Disponibilidade</h3>
                </div>
                <p className="text-[rgb(161,161,170)] text-sm mb-3">
                  Disponível para novos projetos e oportunidades
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-sm font-medium">Aberto a propostas</span>
                </div>
              </div>

              {/* Card de resposta */}
              <div className="p-6 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgba(218,255,1,0.3)] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[rgba(218,255,1,0.1)] rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-[rgb(218,255,1)]" />
                  </div>
                  <h3 className="font-semibold text-white">Tempo de Resposta</h3>
                </div>
                <p className="text-[rgb(161,161,170)] text-sm">
                  Geralmente respondo em até <span className="text-[rgb(218,255,1)] font-medium">24 horas</span>
                </p>
              </div>

              {/* Card café */}
              <div className="p-6 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgba(218,255,1,0.3)] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[rgba(218,255,1,0.1)] rounded-xl flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-[rgb(218,255,1)]" />
                  </div>
                  <h3 className="font-semibold text-white">Bora um Café?</h3>
                </div>
                <p className="text-[rgb(161,161,170)] text-sm">
                  Prefere uma call ou reunião presencial? Só chamar!
                </p>
              </div>
            </motion.div>

            {/* Card principal de contato */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 p-8 md:p-10 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[rgba(218,255,1,0.1)] to-transparent" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[rgba(218,255,1,0.1)] to-transparent" />

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-[rgb(218,255,1)] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(218,255,1,0.3)]"
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(218,255,1,0.3)',
                      '0 0 60px rgba(218,255,1,0.5)',
                      '0 0 40px rgba(218,255,1,0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle className="w-10 h-10 text-[rgb(17,17,19)]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Pronto para dar vida ao seu projeto?
                </h3>
                <p className="text-[rgb(161,161,170)] mb-8 max-w-md mx-auto text-center">
                  Vamos conversar! Me conta sua ideia e juntos vamos transformá-la em realidade.
                </p>

                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full max-w-md mx-auto px-8 py-5 bg-[rgb(218,255,1)] text-[rgb(17,17,19)] font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(218,255,1,0.4)] hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <MessageCircle className="w-6 h-6" />
                  <span>{contactInfo.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Alternativas de contato */}
                <div className="mt-8 pt-6 border-t border-[rgb(63,63,63)]">
                  <p className="text-xs text-[rgb(161,161,170)] uppercase tracking-wider mb-4 text-center">Ou entre em contato por</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">E-mail</span>
                    </a>
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-all"
                      >
                        <social.icon className="w-4 h-4" />
                        <span className="text-sm">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Info de localização */}
                <div className="mt-6 flex items-center justify-center gap-2 text-[rgb(161,161,170)]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{developerInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

