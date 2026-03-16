/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  TrendingUp, 
  Star, 
  ChevronDown, 
  ShieldCheck,
  Award,
  ChefHat,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';

const CTAButton = ({ text, className = "", aggressive = false }: { text: string, className?: string, aggressive?: boolean }) => (
  <div className={`relative inline-flex w-full sm:w-auto justify-center ${className}`}>
    {/* Efeito de pulso/brilho ao redor */}
    <motion.div
      animate={{
        scale: aggressive ? [1, 1.12, 1] : [1, 1.08, 1],
        opacity: aggressive ? [0.5, 0, 0.5] : [0.3, 0, 0.3],
      }}
      transition={{
        duration: aggressive ? 1.8 : 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full bg-[#25D366]"
    />
    {/* Botão principal */}
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={aggressive ? { scale: [1, 1.02, 1] } : {}}
      transition={aggressive ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : {}}
      onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
      className="relative w-full sm:w-auto bg-[#25D366] text-white text-base sm:text-xl font-bold py-3.5 px-6 sm:py-4 sm:px-10 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#1DA851] transition-colors z-10 flex items-center justify-center text-center leading-tight"
    >
      {text}
    </motion.button>
  </div>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-brand-choco/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-brand-choco pr-4">{q}</span>
        <ChevronDown className={`w-6 h-6 text-brand-pink transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-choco-light leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center bg-brand-beige overflow-hidden pt-6 pb-12 lg:py-0">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-pink/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left pt-2 lg:pt-0 flex flex-col items-center lg:items-start"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink font-semibold text-xs sm:text-sm mb-3 tracking-wide uppercase">
                Curso de Confeitaria Elita Brasil
              </div>
              <h1 className="text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-choco mb-3">
                Descubra como transformar sua cozinha em um <span className="text-brand-pink italic">negócio lucrativo</span> que pode gerar mais de 5 mil reais para a sua família.
              </h1>
              <p className="text-sm sm:text-lg text-brand-choco-light mb-5 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Comece do ZERO e se junte a milhares de mulheres que hoje estão transformando a vida da sua família tendo seu próprio negócio de confeitaria criativa em casa.
              </p>
              <div className="w-full sm:w-auto mb-4">
                <CTAButton text="Quero aprender a fazer renda com confeitaria criativa em casa" aggressive={true} />
              </div>
              
              {/* Avaliações Google */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
                <div className="flex -space-x-2">
                  {[5, 9, 16, 31, 41].map((imgId, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-beige bg-brand-pink overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${imgId}`} alt="Aluna" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i === 4 ? 'opacity-50' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm font-bold text-brand-choco ml-1">4.8</span>
                  </div>
                  <span className="text-xs text-brand-choco-light font-medium">Mais de 20.000 alunas transformadas</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1mPOVuMjAGglcmV3FHzo-SHrTlZLjE4Nv" 
                  alt="Confeiteira preparando doces" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-choco/60 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 lg:-right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-choco-light font-medium uppercase tracking-wider">Resultado</p>
                  <p className="text-brand-choco font-bold">Vendas Diárias</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IDENTIFICATION SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-choco mb-16">
            Essa oportunidade é para você que...
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 text-left mb-16">
            {[
              "Quer trabalhar no conforto da sua casa, fazendo seus próprios horários.",
              "Deseja acompanhar de perto o crescimento dos seus filhos sem abrir mão de uma renda.",
              "Busca independência financeira para comprar o que tem vontade e ajudar em casa.",
              "Sonha em ter o orgulho de construir o seu próprio negócio do zero."
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-start gap-5 p-8 bg-brand-beige rounded-3xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-brand-pink" />
                </div>
                <p className="text-lg text-brand-choco font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <CTAButton text="Essa oportunidade é para mim" />
          </motion.div>
        </div>
      </section>

      {/* STORYTELLING SECTION */}
      <section className="py-24 bg-brand-choco text-brand-beige relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1p1F0Knps3xxfV7t2r0T85pdd3pj8w-rw" 
                  alt="Preparando doces" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-pink rounded-full blur-3xl opacity-30"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Uma simples cozinha pode se tornar a sua maior fonte de renda.
              </h2>
              <div className="space-y-6 text-lg text-brand-beige/80 leading-relaxed">
                <p>
                  Muitas mulheres acreditam que precisam de equipamentos caros, batedeiras planetárias de última geração ou alugar um espaço comercial para começar a vender doces. <strong className="text-white font-semibold">Isso é um mito.</strong>
                </p>
                <p>
                  A verdade é que os maiores negócios de confeitaria começaram exatamente onde você está agora: na cozinha de casa, com os utensílios que já estavam lá. O segredo não está no forno que você usa, mas no método e nas receitas certas.
                </p>
                <p className="text-xl font-bold text-brand-pink pt-4">
                  Com a orientação correta, você pode transformar ingredientes simples em doces que vendem todos os dias, garantindo o sustento e o conforto da sua família.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METHOD & BENEFITS */}
      <section className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-choco mb-6">
              O que você vai aprender no curso da Elita Brasil?
            </h2>
            <p className="text-xl text-brand-choco-light">
              Um método completo, testado e validado para você sair do zero e faturar com confeitaria.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <ChefHat />, title: "Confeitaria Profissional", desc: "Técnicas simples para iniciantes que garantem resultados de vitrine desde o primeiro dia." },
              { icon: <Star />, title: "Doces Campeões", desc: "As receitas mais lucrativas, testadas e procuradas pelos clientes todos os dias." },
              { icon: <Award />, title: "Método Simples", desc: "Passo a passo detalhado, mesmo que você nunca tenha feito um bolo na vida." },
              { icon: <TrendingUp />, title: "Vendas Diárias", desc: "Estratégias práticas para atrair clientes e vender muito pelo WhatsApp e Instagram." }
            ].map((benefit, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-brand-choco/5 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-brand-pink/10 rounded-2xl flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-brand-choco mb-4">{benefit.title}</h3>
                <p className="text-brand-choco-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton text="Quero ter acesso ao método completo" />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-choco text-center mb-20 max-w-4xl mx-auto">
            Histórias reais de mulheres que transformaram suas vidas com a confeitaria
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Mãe de 2 filhos",
                text: "Comecei fazendo doces na minha cozinha com o que eu tinha. Hoje tenho clientes todos os dias e consigo pagar a escola dos meus filhos. A confeitaria me devolveu a autoestima!",
                img: "https://i.pravatar.cc/150?img=32"
              },
              {
                name: "Juliana Costa",
                role: "Ex-vendedora",
                text: "Eu trabalhava fora o dia todo e não via minha filha crescer. O curso me deu o passo a passo que eu precisava. Hoje faturo o triplo do meu antigo salário trabalhando de casa.",
                img: "https://i.pravatar.cc/150?img=44"
              },
              {
                name: "Amanda Ferreira",
                role: "Confeiteira",
                text: "Nunca tinha feito um bolo na vida. O método é tão simples que no primeiro mês eu já estava pegando encomendas para festas. Foi a melhor decisão que já tomei.",
                img: "https://i.pravatar.cc/150?img=47"
              }
            ].map((testimonial, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-brand-beige p-8 rounded-3xl relative"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-brand-choco-light text-lg italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-pink" />
                  <div>
                    <h4 className="font-bold text-brand-choco">{testimonial.name}</h4>
                    <p className="text-sm text-brand-choco-light">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <CTAButton text="Quero ser a próxima história de sucesso" />
          </div>
        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-choco mb-6">
              O que tem dentro do curso?
            </h2>
            <p className="text-xl text-brand-choco-light">
              Um cronograma pensado para o seu aprendizado rápido.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { num: "1", title: "Fundamentos da Confeitaria Lucrativa", desc: "Tudo o que você precisa saber sobre ingredientes, utensílios básicos e higiene para começar do jeito certo, sem desperdícios." },
              { num: "2", title: "Doces Campeões de Venda", desc: "Aprenda o passo a passo de brigadeiros gourmet, bolos de pote, brownies e fatias que os clientes não conseguem resistir." },
              { num: "3", title: "Precificação Correta e Lucro", desc: "Nunca mais tenha prejuízo. Aprenda a calcular seus custos de forma simples e definir o preço de venda para ter lucro de verdade." },
              { num: "4", title: "Estratégias de Venda e Marketing", desc: "Como usar o seu celular para atrair clientes, tirar fotos que dão água na boca e fechar encomendas todos os dias pelo WhatsApp." }
            ].map((mod, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row gap-6 items-start border border-brand-choco/5"
              >
                <div className="w-16 h-16 shrink-0 bg-brand-pink text-white rounded-2xl flex items-center justify-center text-2xl font-bold font-serif">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-choco mb-3">Módulo {mod.num}: {mod.title}</h3>
                  <p className="text-brand-choco-light text-lg leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL LIFESTYLE */}
      <section className="py-32 bg-brand-choco text-brand-beige relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2070" 
            alt="Mãe e filho" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-choco/80 via-brand-choco/90 to-brand-choco"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
            Imagine a sua vida daqui a alguns meses...
          </h2>
          <p className="text-xl sm:text-2xl mb-12 text-brand-beige/90 leading-relaxed font-serif italic">
            "Trabalhando no conforto da sua casa, sentindo o cheiro de bolo assando, enquanto seus filhos brincam na sala. Você olha para o celular e vê mensagens de clientes elogiando seus doces e fazendo novas encomendas. Você sente o orgulho de ter o seu próprio negócio e a tranquilidade de saber que tem dinheiro na conta."
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-brand-pink mb-12">
            Essa é a vida que a confeitaria pode te proporcionar.
          </p>
        </div>
      </section>

      {/* OFFER & GUARANTEE */}
      <section id="oferta" className="py-24 bg-brand-beige">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 flex justify-center">
            <CTAButton text="Quero dar o primeiro passo" aggressive={true} />
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-brand-choco/5">
            {/* Guarantee Side */}
            <div className="p-10 lg:p-16 lg:w-1/2 bg-brand-choco text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <ShieldCheck className="w-20 h-20 text-brand-pink mb-8" />
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">Risco Zero!</h3>
              <p className="text-lg text-brand-beige/80 mb-8 leading-relaxed">
                Você terá <strong className="text-white">7 dias de garantia incondicional</strong> para testar o curso. Se você não gostar das aulas, das receitas ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
              <div className="flex items-center gap-3 text-brand-beige/60 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                Satisfação garantida ou seu dinheiro de volta
              </div>
            </div>
            
            {/* Price Side */}
            <div className="p-10 lg:p-16 lg:w-1/2 text-center flex flex-col justify-center bg-white relative">
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-8 mx-auto tracking-wide uppercase">
                Oferta Especial de Lançamento
              </div>
              
              <h3 className="text-2xl font-bold text-brand-choco mb-2">Curso Completo de Confeitaria</h3>
              <p className="text-brand-choco-light mb-10">Acesso imediato a todas as aulas + bônus exclusivos</p>
              
              <div className="mb-8">
                <p className="text-lg text-brand-choco-light line-through mb-2">De R$ 497,00 por apenas</p>
                <div className="flex justify-center items-start gap-2 text-[#25D366]">
                  <span className="text-2xl font-bold mt-2">12x</span>
                  <span className="text-6xl sm:text-7xl font-black tracking-tighter">19,66</span>
                </div>
                <p className="text-brand-choco-light mt-4 font-medium">ou R$ 197,00 à vista</p>
              </div>

              <div className="mb-6 w-full flex justify-center">
                <CTAButton text="Quero entrar para o curso" className="w-full" />
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-brand-choco-light font-medium">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Compra Segura</span>
                <span className="flex items-center gap-2"><PlayCircle className="w-4 h-4" /> Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-choco text-center mb-16">
            Perguntas Frequentes
          </h2>
          <div className="bg-brand-beige p-8 sm:p-10 rounded-[2rem]">
            <FAQItem 
              q="Preciso ter experiência com confeitaria?" 
              a="Não! O curso foi desenhado passo a passo, começando do absoluto zero. Mesmo que você nunca tenha feito um bolo, conseguirá acompanhar e ter resultados profissionais." 
            />
            <FAQItem 
              q="O curso é online?" 
              a="Sim, 100% online. Você pode assistir às aulas pelo celular, tablet ou computador, de onde estiver e na hora que quiser. As aulas já estão gravadas e liberadas." 
            />
            <FAQItem 
              q="Por quanto tempo tenho acesso?" 
              a="Você terá acesso por 1 ano inteiro para ver e rever as aulas quantas vezes precisar. Durante esse período, você também recebe todas as atualizações do curso gratuitamente." 
            />
            <FAQItem 
              q="Como vou receber o acesso?" 
              a="Assim que o pagamento for confirmado, você receberá um e-mail com o seu login e senha para acessar a plataforma de alunos imediatamente." 
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA & FOOTER */}
      <section className="py-24 bg-brand-choco text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 font-serif">
            A decisão de mudar a sua realidade está em suas mãos.
          </h2>
          <p className="text-xl sm:text-2xl text-brand-beige/80 mb-12 max-w-2xl mx-auto">
            Não deixe para depois o negócio que pode transformar a vida da sua família hoje.
          </p>
          <CTAButton text="Sim, quero começar minha jornada na confeitaria" className="text-xl sm:text-2xl py-6 px-12" />
        </div>
      </section>
      
      <footer className="bg-[#3A271F] py-8 text-center text-brand-beige/50 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Elita Brasil. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
