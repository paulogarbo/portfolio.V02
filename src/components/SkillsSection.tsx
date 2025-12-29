import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Server, Layout, Database, Settings, ChevronRight, type LucideIcon } from 'lucide-react'
import { skills } from '../data/mock'

const categoryIcons: Record<string, LucideIcon> = {
  'Backend': Server,
  'Frontend': Layout,
  'Banco de Dados': Database,
  'DevOps & Ferramentas': Settings,
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Backend')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const activeSkills = skills.find(s => s.category === activeCategory)?.items || []

  return (
    <section id="skills" className="py-24 bg-[rgb(26,28,30)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,255,1,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(218,255,1,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] rounded-full text-[rgb(218,255,1)] text-sm font-medium mb-4">
              Minhas Competências
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Tecnologias
            </h2>
            <p className="text-[rgb(161,161,170)] text-lg max-w-2xl mx-auto">
              Tecnologias que domino e utilizo no dia a dia para criar soluções de alta qualidade
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skillGroup) => {
              const IconComponent = categoryIcons[skillGroup.category] || Server
              const isActive = activeCategory === skillGroup.category
              return (
                <button
                  key={skillGroup.category}
                  onClick={() => setActiveCategory(skillGroup.category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[rgb(218,255,1)] text-[rgb(17,17,19)]'
                      : 'bg-[rgb(17,17,19)] text-[rgb(218,218,218)] border border-[rgb(63,63,63)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)]'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{skillGroup.category}</span>
                </button>
              )
            })}
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl hover:border-[rgb(218,255,1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[rgb(218,255,1)] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[rgba(218,255,1,0.1)] rounded-xl flex items-center justify-center group-hover:bg-[rgba(218,255,1,0.2)] transition-colors">
                    <span className="text-[rgb(218,255,1)] text-lg font-bold">{skill.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[rgb(218,255,1)] transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-[rgb(161,161,170)] text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 bg-[rgb(17,17,19)] border border-[rgb(63,63,63)] rounded-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[rgba(218,255,1,0.1)] rounded-xl">
                  <ChevronRight className="w-6 h-6 text-[rgb(218,255,1)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sempre aprendendo</h4>
                  <p className="text-[rgb(161,161,170)] text-sm">Constantemente expandindo meu conhecimento técnico</p>
                </div>
              </div>
              <div className="text-[rgb(218,255,1)] font-semibold">
                +{skills.reduce((acc, s) => acc + s.items.length, 0)} tecnologias
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

