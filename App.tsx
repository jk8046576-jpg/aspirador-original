
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star,
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck,
  Rocket,
  Sparkles, 
  Layers, 
  Cpu as CpuIcon,
  ChevronRight,
  ArrowDown,
  CreditCard,
  Truck,
  Receipt,
  Timer,
  Flame,
} from 'lucide-react';
import { BackgroundCells } from './components/ui/background-ripple-effect';

const Button = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <a 
    href="https://app.coinzz.com.br/checkout/aspirador%20p%C3%B3-0"
    target="_blank"
    rel="noopener noreferrer"
    className={`relative overflow-hidden bg-gradient-to-r from-[#00FF88] to-[#00D1FF] text-[#020202] font-black py-5 px-10 rounded-xl transition-all neon-glow-btn group flex items-center justify-center gap-3 uppercase tracking-widest text-sm md:text-base ${className}`}
  >
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
    {children}
  </a>
);

const SectionTitle = ({ children, highlight, subtitle, description, animate = false }: { children?: React.ReactNode, highlight?: string, subtitle?: string, description?: string, animate?: boolean }) => {
  const content = (
    <div className="text-center mb-16 md:mb-20">
      {subtitle && <span className="text-[#00FF88] font-mono text-xs tracking-[0.3em] uppercase block mb-4">{subtitle}</span>}
      <h2 className="text-3xl md:text-6xl font-black leading-tight">
        {children}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </h2>
      {description && (
        <p className="mt-6 text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed italic">
          {description}
        </p>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }
  return content;
};

const FAQAccordion: React.FC<{ item: { question: string, answer: string } }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 overflow-hidden rounded-2xl glass-panel transition-all border-white/5 hover:border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#00FF88]' : 'text-gray-200'}`}>{item.question}</span>
        <div className={`p-2 rounded-full glass-panel transition-transform ${isOpen ? 'rotate-180 bg-[#00FF88]/10' : ''}`}>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${isOpen ? 'text-[#00FF88]' : 'text-gray-500'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 border-t border-white/5">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  const [checklist, setChecklist] = useState([false, false, false, false]);

  const toggleCheck = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index] = !newChecklist[index];
    setChecklist(newChecklist);
  };

  const benefits = [
    "Elimina 100% dos detritos em frestas impossíveis",
    "Devolve o brilho de carro novo em menos de 3 minutos",
    "Limpeza silenciosa que não incomoda ninguém ao redor",
    "Portabilidade total: leve no porta-luvas ou na mochila"
  ];


  return (
    <div className="relative min-h-screen text-white selection:bg-[#00FF88] selection:text-black bg-[#020202]">
      
      {/* Top Urgency Bar */}
      <div className="bg-[#00FF88] text-black py-2 px-4 text-center overflow-hidden relative z-50">
        <motion.div 
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
        >
          <Flame className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          OFERTA RELÂMPAGO: PAGUE 1 LEVE 2 + FRETE GRÁTIS APENAS HOJE
          <Flame className="w-3 h-3 md:w-4 md:h-4 fill-current" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <BackgroundCells>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-20 relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00FF88]" />
              <span className="text-[#00FF88] font-mono text-[10px] uppercase tracking-widest font-bold">Últimas Unidades com Desconto</span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tighter pointer-events-none">
              Chega de Passar <br />
              <span className="text-gradient">Vergonha com Sujeira</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-2xl mb-12 max-w-2xl leading-relaxed pointer-events-none">
              Sabe aquela sujeira irritante que insiste em ficar nos cantos do carro ou no teclado? Este aspirador portátil resolve isso em segundos. Aproveite nossa oferta exclusiva: PAGUE 1 E LEVE 2 UNIDADES hoje mesmo. Tecnologia de sucção ciclônica de 12.000Pa: a força bruta que remove até a sujeira invisível em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <Button className="w-full sm:w-auto min-w-[280px]">
                  Quero garantir o meu aspirador agora <ArrowRight className="w-5 h-5" />
                </Button>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/150?u=user${i + 10}`}
                        alt="Usuário satisfeito"
                        className="w-6 h-6 rounded-full border-2 border-[#020202] object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-[#00FF88] fill-[#00FF88]" />
                      ))}
                    </div>
                    <span className="text-[#00FF88]/80 text-[9px] font-mono uppercase tracking-widest font-bold">
                      +12.400 avaliações verificadas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </BackgroundCells>
      </section>

      {/* Interactive Assessment */}
      <section className="py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            animate
            subtitle="Diagnóstico Rápido" 
            highlight="mais te incomoda hoje?"
            description="A sujeira acumulada não é apenas feia, ela destrói seu foco e desvaloriza seu patrimônio. Identifique seus problemas abaixo:"
          >
            Quais dessas situações
          </SectionTitle>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 gap-4 md:gap-8 mb-20"
          >
            {[
              "Sente um aperto no peito ao ver o interior do seu carro cheio de farelos e poeira acumulada?",
              "Fica irritado quando tenta limpar o teclado e percebe que a sujeira só entra mais fundo?",
              "Odeia o barulho ensurdecedor e o peso de um aspirador comum para limpezas rápidas?",
              "Já passou vergonha ao dar carona para alguém e perceber que o banco estava sujo?"
            ].map((question, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                onClick={() => toggleCheck(idx)}
                className={`group flex items-center gap-5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] glass-panel cursor-pointer transition-all duration-500 ${checklist[idx] ? 'border-[#00FF88]/50 bg-[#00FF88]/5' : 'hover:border-white/20'}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${checklist[idx] ? 'bg-[#00FF88] border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.5)]' : 'border-white/10 group-hover:border-[#00FF88]/30'}`}>
                  {checklist[idx] ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-black" /> : <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>}
                </div>
                <p className={`text-base md:text-lg transition-all ${checklist[idx] ? 'text-white font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                  {question}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <CpuIcon className="w-32 h-32 md:w-48 md:h-48 text-[#00FF88]" />
            </div>
            
            <p className="text-gray-400 text-sm md:text-lg mb-4 font-mono tracking-widest uppercase">A Solução Definitiva:</p>
            <h3 className="text-2xl md:text-5xl font-black mb-10 uppercase italic tracking-tighter">
              Com este <span className="text-[#00FF88]">aspirador portátil</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-12 text-left">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-4 glass-panel rounded-2xl border-white/5 group hover:border-[#00FF88]/30 transition-all">
                  <div className="mt-1 p-1 bg-[#00FF88]/20 rounded-lg group-hover:bg-[#00FF88] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88] group-hover:text-[#020202]" />
                  </div>
                  <p className="text-xs md:text-base text-gray-300 font-medium group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
            
            <Button className="mx-auto">
              Quero garantir o meu aspirador agora <ArrowRight className="w-5 h-5"/>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Architecture Flow (now Payment Methods) */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Flexibilidade Total" highlight="para você">Escolha como quer pagar</SectionTitle>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="flex flex-col lg:flex-row items-stretch justify-center gap-0 relative"
          >
             {[
               { step: "Opção 01", title: "Pagamento Antecipado", desc: "Pagamento antecipado significa que o pedido é pago antes do envio, após a confirmação do pagamento, iniciamos o processamento e a entrega, com prazo médio de 2 a 10 dias úteis, podendo variar conforme a demanda e a logística.", icon: <CreditCard className="w-6 h-6 md:w-7 md:h-7"/> },
               { step: "Opção 02", title: "Pagamento na Entrega", desc: "Pagamento na entrega funciona de forma simples, o pedido é enviado primeiro e chega em até 24 horas, o cliente só realiza o pagamento no momento em que recebe o produto.", icon: <Truck className="w-6 h-6 md:w-7 md:h-7"/> },
               { step: "Opção 03", title: "Pagamento Pós-pago", desc: "Pagamento pós-pago significa que o cliente recebe o produto ou primeiro e realiza o pagamento depois, dentro do prazo estabelecido, é uma modalidade baseada em confiança e organização, onde o valor é quitado após a utilização ou confirmação da entrega.", icon: <Receipt className="w-6 h-6 md:w-7 md:h-7"/> }
             ].map((item, i) => (
               <React.Fragment key={i}>
                 <motion.div 
                   variants={{
                     hidden: { opacity: 0, y: 30 },
                     visible: { opacity: 1, y: 0 }
                   }}
                   transition={{ duration: 0.8 }}
                   className="flex-1 group relative p-8 md:p-12 transition-all duration-700 glass-panel border-[#00FF88]/10 bg-gradient-to-b from-[#00FF88]/5 to-transparent z-10 hover:border-[#00FF88]/40 shadow-none rounded-[2rem] lg:first:rounded-r-none lg:last:rounded-l-none"
                 >
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 bg-[#00FF88] text-[#020202] shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                          {item.icon}
                        </div>
                        <span className="font-mono text-[10px] text-[#00FF88]/60 tracking-[0.4em] uppercase font-bold">{item.step}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black mb-5 tracking-tighter text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 group-hover:text-gray-200 transition-colors">{item.desc}</p>
                    <div className="h-1 w-full bg-[#00FF88]/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#00FF88]/40 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite]"></div>
                        </div>
                    </div>
                 </motion.div>
                 
                 {i < 2 && (
                    <motion.div 
                      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                      className="hidden lg:flex items-center justify-center -mx-4 z-30"
                    >
                      <div className="w-8 h-8 rounded-full glass-panel border-[#00FF88]/40 flex items-center justify-center bg-[#020202]">
                         <ChevronRight className="w-4 h-4 text-[#00FF88]" />
                      </div>
                    </motion.div>
                 )}

                 {i < 2 && (
                    <div className="lg:hidden flex justify-center -my-5 py-2 z-30">
                      <div className="w-10 h-10 rounded-full glass-panel border-[#00FF88]/40 flex items-center justify-center bg-[#020202]">
                         <ArrowDown className="w-4 h-4 text-[#00FF88]" />
                      </div>
                    </div>
                 )}
               </React.Fragment>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
           <div className="absolute -top-5 -left-5 md:-top-10 md:-left-10 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-[#00FF88]/30 rounded-tl-3xl"></div>
           <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-[#00D1FF]/30 rounded-br-3xl"></div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-panel rounded-[3rem] md:rounded-[4rem] p-1 border-white/10"
           >
              <div className="bg-[#050505]/90 backdrop-blur-3xl rounded-[2.9rem] md:rounded-[3.9rem] p-8 md:p-20 text-center relative overflow-hidden">
                 {/* Exclusivity Badge */}
                 <div className="absolute top-0 right-0 bg-[#00FF88] text-black px-6 py-2 font-black text-[10px] uppercase tracking-widest rounded-bl-2xl">
                   Lote Exclusivo
                 </div>

                 <div className="inline-block glass-panel px-4 md:px-6 py-2 rounded-full border-[#00FF88]/20 text-[#00FF88] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-12">
                   <Timer className="w-3 h-3 inline-block mr-2 animate-pulse" />
                   Oferta Exclusiva de Lançamento
                 </div>
                 <h3 className="text-3xl md:text-6xl font-black mb-12 md:mb-16 tracking-tighter leading-tight">
                   Pague 1 e Leve 2 <br />
                    <span className="text-gradient">Aspiradores Portáteis</span>
                 </h3>

                 <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 mb-16 md:mb-20 text-left max-w-2xl mx-auto">
                    {[
                      "2x Aspiradores de Pó Portáteis",
                      "2x Kits de Bicos Adaptadores",
                      "2x Cabos USB-C Ultra Fast",
                      "Garantia de 15 Dias"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                         <div className="p-1 rounded-md glass-panel border-[#00FF88]/30 group-hover:bg-[#00FF88] transition-all">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88] group-hover:text-[#020202]" />
                         </div>
                         <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                 </div>

                 <div className="mb-12 md:mb-16 relative">
                    <p className="text-[#00FF88] text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4">Pague 1, Leve 2 - Oferta Limitada</p>
                     <p className="text-gray-500 line-through text-base md:text-lg font-bold mb-2">De R$ 497,00</p>
                    <div className="flex flex-col items-center">
                       <div className="flex items-center justify-center gap-2 md:gap-4">
                          <div className="flex items-baseline gap-1 md:gap-2 -mt-2 md:-mt-4">
                             <span className="text-gradient text-2xl md:text-4xl font-black tracking-tighter">12x</span>
                             <span className="text-gradient text-base md:text-xl font-bold uppercase">de</span>
                          </div>
                          <div className="flex items-baseline gap-1">
                             <span className="text-gradient text-6xl md:text-9xl font-black tracking-tighter leading-none">R$</span>
                             <span className="text-gradient text-6xl md:text-9xl font-black tracking-tighter leading-none">14,57</span>
                          </div>
                       </div>
                       <span className="text-white/70 text-[10px] md:text-xs font-mono mt-4 uppercase tracking-[0.3em]">ou R$ 174,90 à vista</span>
                    </div>
                 </div>

                 <Button className="w-full py-6 md:py-8 text-lg md:text-xl tracking-[0.1em]">
                   Quero garantir o meu aspirador agora <Rocket className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                 </Button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 md:py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden border-[#00FF88]/20 bg-gradient-to-br from-[#00FF88]/5 via-transparent to-transparent"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
              <div className="relative">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full glass-panel border-[#00FF88]/30 flex items-center justify-center relative">
                  <div className="bg-gradient-to-tr from-[#00FF88] to-[#00D1FF] w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.3)]">
                    <ShieldCheck className="w-12 h-12 md:w-20 md:h-20 text-[#020202]" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#020202] border-2 border-[#00FF88] px-4 py-2 rounded-xl rotate-12">
                  <span className="block text-xl font-black text-[#00FF88] leading-none">15 DIAS</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-tight">
                  Limpeza <span className="text-[#00FF88] italic">Sem Riscos</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-8">
                  Use este aspirador portátil por 15 dias. Se ele não sugar até a última partícula como prometemos, devolvemos seu dinheiro integralmente. Sem burocracia.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]"></div>
                      <span className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest">Garantia Blindada de Satisfação</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            animate
            subtitle="Prova Social" 
            highlight="nossos clientes"
          >
            O que dizem
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo M.",
                role: "Entusiasta Automotivo",
                text: "Incrível! Comprei para limpar o carro e agora uso em tudo. A sucção é surpreendente para o tamanho. Realmente remove aquela sujeira que fica presa nos trilhos do banco.",
                img: "https://picsum.photos/seed/person1/200/200"
              },
              {
                name: "Ana Paula S.",
                role: "Mãe e Empresária",
                text: "O pague 1 leve 2 é real! Dei um para o meu marido e fiquei com um. Entrega super rápida e o produto é muito robusto. Recomendo para quem tem crianças no carro.",
                img: "https://picsum.photos/seed/person2/200/200"
              },
              {
                name: "Carlos Eduardo",
                role: "Designer Freelancer",
                text: "Melhor investimento que fiz este ano. Prático, potente e muito bonito. Uso no meu setup para manter o teclado e o monitor sempre limpos sem esforço.",
                img: "https://picsum.photos/seed/person3/200/200"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-[2rem] border-white/5 hover:border-[#00FF88]/30 transition-all group"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-[#00FF88] fill-[#00FF88]" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF88]/20 group-hover:border-[#00FF88] transition-colors"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
           <div className="flex items-center gap-2 mb-12 justify-center">
              <Layers className="w-5 h-5 text-[#00D1FF]" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">Perguntas Frequentes</h2>
           </div>
           {[
             { q: "Qual o poder de sucção?", a: "Este aspirador portátil entrega 12.000Pa de sucção real, capaz de levantar até moedas e detritos pesados com facilidade." },
             { q: "Quanto tempo dura a bateria?", a: "Equipado com células de lítio de alta densidade, oferece até 2 horas de uso contínuo com uma única carga." },
             { q: "O filtro é descartável?", a: "Não. O filtro HEPA é 100% lavável e reutilizável, economizando seu dinheiro e protegendo o meio ambiente." },
             { q: "Qual o prazo de entrega?", a: "Enviamos via transportadora expressa com código de rastreio em até 24h após a confirmação do pedido." }
           ].map((faq, i) => (
             <FAQAccordion key={i} item={{question: faq.q, answer: faq.a}} />
           ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00FF88] to-[#00D1FF] flex items-center justify-center font-black text-[#020202]">A</div>
             <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Tecnologia de Limpeza Pro</p>
          </div>
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Aspirador de Pó Portátil - Supremacia em Limpeza.
          </p>
          <div className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse delay-75"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
