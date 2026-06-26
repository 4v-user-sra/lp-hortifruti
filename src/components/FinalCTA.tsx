import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[800px] h-[800px] rounded-full border border-black" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-black" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-black" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-text-primary mb-8 tracking-tight"
        >
          Pronto para ter <span className="text-secondary">qualidade premium</span> e zerar dores de cabeça?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
        >
          Fale com nossa equipe agora mesmo e receba a tabela de preços de hoje. Seu negócio merece o melhor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#whatsapp"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-2xl font-bold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <MessageCircle className="w-8 h-8 relative z-10 animate-pulse" />
            <span className="relative z-10">Fazer Cotação Agora</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
