import { motion } from "motion/react";
import { AlertTriangle, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Zere as Perdas",
    description: "Compre de forma fracionada. Reposição inteligente para você manter o padrão de qualidade e não jogar dinheiro no lixo.",
    color: "text-primary",
    bg: "bg-primary/5",
  },
  {
    icon: Clock,
    title: "Mais Tempo Livre",
    description: "Não acorde mais de madrugada. Nós selecionamos os melhores lotes no CEAGESP e entregamos na porta do seu negócio.",
    color: "text-secondary",
    bg: "bg-secondary/5",
  },
  {
    icon: TrendingUp,
    title: "Lucro Previsível",
    description: "Tabela de preços atualizada via WhatsApp com fotos reais dos produtos. Planeje seu cardápio sem surpresas.",
    color: "text-accent",
    bg: "bg-accent/5",
  }
];

export function PainPoints() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
            O abastecimento que o seu restaurante e a sua quitanda merecem.
          </h2>
          <p className="text-lg text-text-secondary">
            Resolvemos as três maiores dores de quem trabalha com alimentos frescos: desperdício, tempo perdido e falta de padrão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-black/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
                <feat.icon className={`w-7 h-7 ${feat.color}`} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 font-heading">{feat.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
