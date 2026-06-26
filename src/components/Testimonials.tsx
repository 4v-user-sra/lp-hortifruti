import { motion } from "motion/react";
import { Play } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Autoridade
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Há 15 anos levando o melhor do CEAGESP direto para você.
          </h2>
          <blockquote className="text-2xl font-medium leading-relaxed text-white/90 italic mb-8 border-l-4 border-accent pl-6">
            "Desde que começamos com a Hortifruti Popular, a qualidade da nossa quitanda disparou e o desperdício caiu a zero. Eles selecionam as frutas como se fossem pra casa deles."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg">M</div>
            <div>
              <p className="font-bold text-lg">Marcos Silva</p>
              <p className="text-white/70 text-sm">Dono da Mercearia Silva - Sorocaba/SP</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] group cursor-pointer border border-white/10"
        >
          {/* Video Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
            alt="Bastidores da equipe carregando caminhão"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/30">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-primary ml-2" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-white/90 font-medium text-sm border border-white/10">
              Bastidores da operação (01:24)
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
