import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] to-[#F5F7F5] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
              Atendimento B2B Especializado
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] tracking-tight"
          >
            Chega de perder dinheiro com mercadoria <span className="text-primary">estragando</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-secondary max-w-[50ch] leading-relaxed"
          >
            Abasteça sua quitanda ou restaurante 3x por semana com o hortifruti mais fresco da região. Você não precisa acordar de madrugada para comprar insumos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <a
              href="#whatsapp"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(37,211,102,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Receber Tabela no WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6 pt-8 border-t border-black/5 w-full"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-black text-text-primary">+15</span>
              <span className="text-sm font-medium text-text-secondary">Anos de CEAGESP</span>
            </div>
            <div className="w-px h-12 bg-black/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-secondary">3x</span>
              <span className="text-sm font-medium text-text-secondary">Entregas Semanais</span>
            </div>
          </motion.div>
        </div>

        {/* Right Asset (Asymmetric Carousel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[800px] flex items-center justify-center lg:justify-end w-full"
        >
          {/* Decorative blur blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-[600px] flex items-center justify-center">
            <ImageCarousel />
            
            {/* Glassmorphism tag overlay - Adjusted z-index and position */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-white/70 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-xl">✓</span>
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm">Qualidade Superior</p>
                <p className="text-xs text-text-secondary">Padrão para cardápios exigentes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
