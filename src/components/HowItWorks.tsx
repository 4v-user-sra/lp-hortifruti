import { motion } from "motion/react";
import { MessageSquare, FileText, Truck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Cotação Fácil via WhatsApp",
    description: "Você chama nossa equipe, recebe a tabela atualizada com fotos reais e seleciona exatamente o que precisa.",
  },
  {
    id: "02",
    icon: FileText,
    title: "Separação Inteligente",
    description: "Nossa equipe vai de madrugada ao CEAGESP e separa as frutas, verduras e legumes mais frescos para o seu lote.",
  },
  {
    id: "03",
    icon: Truck,
    title: "Entrega na Porta",
    description: "Descarregamos diretamente no seu estabelecimento (Seg, Qua e Sex) com agilidade. Custo e tempo otimizados.",
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/3 sticky top-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 leading-tight">
              Como funciona a nossa entrega?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Um processo criado para quem não pode perder tempo. Simples, direto e 100% focado na operação do seu negócio.
            </p>
            <div className="hidden md:block w-24 h-1 bg-primary/20 rounded-full" />
          </motion.div>

          <div className="md:w-2/3 flex flex-col gap-12 relative">
            {/* Vertical Line Desktop */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-black/5 hidden md:block" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex gap-6 md:gap-8 relative z-10"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white border border-black/10 shadow-sm rounded-2xl flex items-center justify-center font-bold text-xl text-primary font-mono">
                  {step.id}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-text-primary mb-3 font-heading">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
