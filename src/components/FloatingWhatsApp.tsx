import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="#whatsapp"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-16 h-16 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-whatsapp animate-ping opacity-75" />
      <MessageCircle className="w-8 h-8 relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-text-primary px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none border border-black/5 hidden md:block">
        Fazer Cotação Agora
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-black/5" />
      </div>
    </a>
  );
}
