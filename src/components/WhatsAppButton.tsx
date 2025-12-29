import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { developerInfo } from '../data/mock'

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${developerInfo.whatsappNumber}?text=${encodeURIComponent(developerInfo.whatsappMessage)}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 bg-[rgb(218,255,1)] rounded-full animate-ping opacity-30" />
      <span className="absolute inset-0 bg-[rgb(218,255,1)] rounded-full animate-pulse opacity-20" />
      
      <div className="relative w-16 h-16 bg-[rgb(218,255,1)] rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(218,255,1,0.4)] group-hover:shadow-[0_8px_40px_rgba(218,255,1,0.6)] transition-shadow duration-300">
        <MessageCircle className="w-8 h-8 text-[rgb(17,17,19)]" />
      </div>

      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] rounded-xl px-4 py-2 whitespace-nowrap shadow-xl">
          <p className="text-white text-sm font-medium">Fale comigo!</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[rgb(26,28,30)] border-r border-b border-[rgb(63,63,63)] rotate-[-45deg]" />
        </div>
      </div>
    </motion.a>
  )
}

export default WhatsAppButton

