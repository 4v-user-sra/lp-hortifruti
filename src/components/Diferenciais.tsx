import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export function Diferenciais() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
              Qualidade superior e padronização.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-[50ch]">
              Atendemos de pequenos mercados a restaurantes exigentes, garantindo que o padrão do seu cardápio seja sempre o mesmo, semana após semana.
            </p>
            
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <span className="text-text-primary font-medium text-lg">Frutas, legumes e verduras Premium.</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span className="text-text-primary font-medium text-lg">Sem mercadoria batida ou machucada.</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-secondary" />
                <span className="text-text-primary font-medium text-lg">Sorocaba, Salto, Itu, Araçoiaba e Votorantim.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1596429381664-9b2f6ef3294c?q=80&w=2000&auto=format&fit=crop" alt="Vegetais frescos" className="w-full h-48 object-cover rounded-2xl shadow-sm border border-black/5" />
              <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=2000&auto=format&fit=crop" alt="Frutas variadas" className="w-full h-64 object-cover rounded-2xl shadow-sm border border-black/5" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop" alt="Tomates selecionados" className="w-full h-64 object-cover rounded-2xl shadow-sm border border-black/5" />
              <img src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=2000&auto=format&fit=crop" alt="Cenouras orgânicas" className="w-full h-48 object-cover rounded-2xl shadow-sm border border-black/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
