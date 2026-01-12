
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChevronRight, 
  Target, 
  Users, 
  Rocket, 
  ShieldCheck, 
  FileSearch, 
  MessageSquare, 
  Briefcase, 
  ArrowRight,
  Menu,
  X,
  Star,
  Zap,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-md border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">Q</div>
          <span className="font-bold text-xl tracking-tight uppercase text-slate-900">QUINTINO <span className="text-red-600 font-black">BOOSTER</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#problema" className="text-slate-600 hover:text-red-600 transition-colors">O Problema</a>
          <a href="#solucao" className="text-slate-600 hover:text-red-600 transition-colors">A Solução</a>
          <a href="#metodo" className="text-slate-600 hover:text-red-600 transition-colors">O Método</a>
          <a href="#garantia" className="text-slate-600 hover:text-red-600 transition-colors">Garantia</a>
          <a href="https://pay.kiwify.com.br/d9puKrg" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-red-900/10">Garantir Minha Vaga</a>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-6 flex flex-col gap-6 border-b border-slate-100 shadow-xl">
          <a href="#problema" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700">O Problema</a>
          <a href="#solucao" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700">A Solução</a>
          <a href="#metodo" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700">O Método</a>
          <a href="#garantia" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-700">Garantia</a>
          <a href="https://pay.kiwify.com.br/d9puKrg" className="bg-red-600 text-white px-6 py-4 rounded-xl text-center font-bold">Garantir Minha Vaga</a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-50 rounded-full blur-[120px] -z-10"></div>
    <div className="container mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-5 py-2 rounded-full text-red-600 text-sm font-bold mb-8 animate-pulse tracking-wide uppercase">
        <Zap size={16} /> MENTORIA INDIVIDUAL E EXCLUSIVA
      </div>
      <h1 className="text-4xl md:text-8xl font-black leading-tight mb-8 uppercase tracking-tighter text-slate-900">
        CONQUISTE SEU PRIMEIRO <br />
        <span className="text-gradient-red">EMPREGO EM 6 MESES.</span>
      </h1>
      <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium">
        Acompanhamento prático e individual focado 100% em contratação. Se você não for contratado em 6 meses seguindo o plano, <span className="text-slate-900 font-bold border-b-2 border-red-600">devolvemos 100% do seu investimento.</span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a href="https://pay.kiwify.com.br/d9puKrg" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-red-200 transition-all flex items-center justify-center gap-2 group">
          QUERO MINHA VAGA AGORA <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://imgur.com/9d7dfc5d-926b-405a-8db2-b4a63b247136=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student" />
            ))}
          </div>
          <span><span className="text-red-600 font-black">+50</span> alunos já contratados</span>
        </div>
      </div>
    </div>
  </section>
);

const PainPoints: React.FC = () => (
  <section id="problema" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase text-slate-900">POR QUE A MAIORIA <br />DOS INICIANTES <span className="text-red-600">ESTÁ DESEMPREGADA?</span></h2>
      <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium">O mercado não está saturado, ele está saturado de pessoas que estudam do jeito errado.</p>
    </div>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Círculo infinito de cursos", desc: "Você vê 1000 horas de vídeo-aula mas não consegue criar um projeto sozinho.", icon: <Rocket className="text-red-600" /> },
        { title: "Ghosting em processos", desc: "Você aplica para centenas de vagas e seu currículo nem sequer é aberto pela triagem.", icon: <FileSearch className="text-red-600" /> },
        { title: "Falta de portfólio real", desc: "Seus projetos são cópias de tutoriais genéricos que não provam nada para o RH.", icon: <Target className="text-red-600" /> },
        { title: "Síndrome do Impostor", desc: "Você não tem um mentor experiente para validar seu conhecimento e te dar segurança.", icon: <Users className="text-red-600" /> }
      ].map((item, idx) => (
        <div key={idx} className="bg-white border border-slate-200 p-10 rounded-3xl hover:border-red-600/50 hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h3 className="text-xl font-black mb-4 uppercase text-slate-900">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Solution: React.FC = () => (
  <section id="solucao" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-6xl font-black mb-10 leading-tight uppercase text-slate-900">
            QUINTINO BOOSTER: <br />
            A MENTORIA QUE <span className="text-red-600 italic">TE COLOCA DENTRO.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Esqueça cursos de vídeo gravado. A Quintino Booster é focada na <strong>sua contratação rápida.</strong> Dominamos os 3 pilares decisivos:
          </p>
          <div className="space-y-6 mb-12">
            {[
              { t: "Portfólio de Elite", d: "Projetos de nível sênior que saltam aos olhos dos recrutadores." },
              { t: "Networking Estratégico", d: "Ensinamos você a chegar nos tomadores de decisão sem depender de vagas." },
              { t: "Maestria em Entrevistas", d: "Treinamento intensivo para você dominar qualquer desafio técnico com calma." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle size={16} className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-lg">{item.t}</h4>
                  <p className="text-slate-600 font-medium">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://wa.me/" className="inline-flex items-center gap-3 text-red-600 font-black text-xl hover:text-red-500 transition-colors uppercase tracking-tight">
            Descobrir o método individual <ArrowRight size={24} />
          </a>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-slate-100 rounded-[40px] p-1 shadow-2xl">
             <div className="bg-white rounded-[40px] p-10 overflow-hidden relative border border-slate-200">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg text-white"><Briefcase size={24}/></div>
                    <div>
                      <div className="text-lg font-black uppercase text-slate-900">VAGA CONQUISTADA!</div>
                      <div className="text-sm text-slate-500">Engenheiro de Software Jr</div>
                    </div>
                    <div className="ml-auto text-emerald-600 font-black text-xl">R$ 5.800</div>
                  </div>
                  <div className="flex items-center gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 opacity-80">
                    <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center text-slate-600"><MessageSquare size={24}/></div>
                    <div>
                      <div className="text-lg font-black uppercase text-slate-700">FEEDBACK POSITIVO</div>
                      <div className="text-sm text-slate-500">Tech Lead aprovou seu teste!</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 opacity-50">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400"><FileSearch size={24}/></div>
                    <div>
                      <div className="text-lg font-black uppercase text-slate-400">CV VISUALIZADO</div>
                      <div className="text-sm text-slate-500">Stone, Nubank e iFood</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-red-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block transform rotate-3 border-4 border-white">
            <p className="text-4xl font-black">100%</p>
            <p className="text-xs font-bold uppercase tracking-tighter">CONTRATAÇÃO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StepByStep: React.FC = () => (
  <section id="metodo" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 text-center mb-20">
      <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-slate-900">O MAPA DA MINA <span className="text-red-600">PASSO A PASSO</span></h2>
      <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium">Direto ao ponto, sem enrolação e focado na prática real do mercado.</p>
    </div>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Mentoria de Nivelamento", desc: "Identificamos seus pontos fracos e criamos a base sólida necessária para o mercado sênior.", icon: <Target /> },
          { step: "02", title: "Foco nas Techs Certas", desc: "Você estuda apenas o que as empresas estão contratando hoje, nada de tecnologias mortas.", icon: <Rocket /> },
          { step: "03", title: "Construção de Autoridade", desc: "Seu GitHub deixará de ser um cemitério de projetos para se tornar sua melhor vitrine.", icon: <Zap /> },
          { step: "04", title: "LinkedIn Hunter", desc: "Transformamos seu perfil em um imã que atrai abordagens de recrutadores diariamente.", icon: <FileSearch /> },
          { step: "05", title: "Simulado de Guerra", desc: "Treinamos cada resposta para que você chegue na entrevista com a vaga praticamente garantida.", icon: <MessageSquare /> },
          { step: "06", title: "Suporte Pós-Contrato", desc: "Te ajudo a brilhar nos primeiros 90 dias para que você seja efetivado com louvor.", icon: <CheckCircle /> }
        ].map((item, idx) => (
          <div key={idx} className="relative p-10 rounded-3xl border border-slate-200 bg-white hover:shadow-2xl transition-all group">
            <div className="absolute top-6 right-8 text-5xl font-black text-red-600/5 italic">{item.step}</div>
            <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-black mb-4 uppercase text-slate-900">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Guarantee: React.FC = () => (
  <section id="garantia" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-red-600 p-10 md:p-20 rounded-[50px] text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(220,38,38,0.3)]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-[100px]"></div>
        
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
          <ShieldCheck size={56} className="text-red-600" />
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter text-white leading-tight">VOCÊ CONTRATADO EM 6 MESES <br />OU 100% DO REEMBOLSO.</h2>
        
        <p className="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto mb-14 leading-relaxed font-medium">
          O risco é todo meu. Se você seguir o método e não conquistar sua primeira vaga em até 6 meses, eu te devolvo todo o valor investido <span className="underline decoration-white underline-offset-8">imediatamente</span>.
          <br /><br />
          <span className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-black uppercase inline-block shadow-xl">COMPROMISSO EM CONTRATO</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white font-bold uppercase tracking-widest text-xs opacity-90">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} /> Transparência Total
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} /> Sem Letras Miúdas
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} /> Garantia Vitalícia de Conteúdo
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 text-center mb-20">
      <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-slate-900">O SUCESSO DE <span className="text-red-600">NOSSOS ALUNOS</span></h2>
      <p className="text-slate-600 text-xl font-medium">De iniciantes a profissionais bem remunerados em empresas globais.</p>
    </div>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Lucas Rocha", role: "Frontend na Stone", text: "Eu estava há 1 ano batendo cabeça sozinho. Com o Quintino, em 3 meses mudei meu perfil e as vagas começaram a aparecer sozinhas.", img: "https://i.pravatar.cc/150?u=lucas2" },
        { name: "Mariana Costa", role: "Dev Jr na Nubank", text: "Ter alguém que já trilhou o caminho tirando suas dúvidas é outro nível. O investimento se pagou logo no primeiro salário.", img: "https://i.pravatar.cc/150?u=mari2" },
        { name: "Gabriel Sampaio", role: "Fullstack na XP Inc", text: "As simulações técnicas me deram a calma que eu precisava. Entrei no processo seletivo sabendo exatamente o que o tech lead queria ouvir.", img: "https://i.pravatar.cc/150?u=gabriel2" }
      ].map((item, idx) => (
        <div key={idx} className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 relative hover:bg-white hover:shadow-2xl transition-all group">
          <div className="flex text-red-600 mb-8">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
          </div>
          <p className="italic text-slate-600 mb-10 text-lg leading-relaxed font-medium">"{item.text}"</p>
          <div className="flex items-center gap-5 pt-8 border-t border-slate-200">
            <img src={item.img} className="w-16 h-16 rounded-full border-2 border-red-600 p-1" alt={item.name} />
            <div>
              <p className="font-black text-slate-900 uppercase">{item.name}</p>
              <p className="text-sm text-red-600 font-bold uppercase">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const AudienceFilter: React.FC = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 rounded-[40px] bg-white border border-emerald-100 shadow-xl shadow-emerald-900/5">
          <h3 className="text-3xl font-black text-emerald-600 mb-10 flex items-center gap-4 uppercase tracking-tighter">
            <CheckCircle size={32} /> É PARA VOCÊ SE:
          </h3>
          <ul className="space-y-8">
            {[
              "Já estudou lógica e sintaxe mas não sabe 'unir as peças'.",
              "Quer trocar de carreira e busca o caminho mais rápido e seguro.",
              "Está cansado de enviar currículos e não receber resposta.",
              "Pode dedicar ao menos 10 horas semanais para sua evolução."
            ].map((t, i) => (
              <li key={i} className="flex gap-4 text-slate-700 text-lg font-bold items-start uppercase leading-tight">
                <span className="text-emerald-500 mt-1">•</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-12 rounded-[40px] bg-white border border-red-100 shadow-xl shadow-red-900/5">
          <h3 className="text-3xl font-black text-red-600 mb-10 flex items-center gap-4 uppercase tracking-tighter">
            <X size={32} /> NÃO É PARA VOCÊ SE:
          </h3>
          <ul className="space-y-8">
            {[
              "Procura um botão mágico que te dê dinheiro dormindo.",
              "Não está disposto a construir projetos reais e suar a camisa.",
              "Acha que assistir vídeos é o mesmo que aprender programação.",
              "Não tem compromisso real com sua mudança de vida."
            ].map((t, i) => (
              <li key={i} className="flex gap-4 text-slate-500 text-lg font-bold items-start uppercase leading-tight">
                <span className="text-red-500 mt-1">•</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-32 relative bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter text-slate-900">AS VAGAS SÃO <span className="text-red-600 underline">INDIVIDUAIS</span>.</h2>
      <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
        Eu não atendo turmas gigantes. Atendo <span className="text-slate-900 font-bold">seres humanos individuais.</span> Por isso as vagas esgotam rápido. Não deixe para o próximo semestre.
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <a href="https://wa.me/" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-20 py-10 rounded-full font-black text-2xl shadow-[0_25px_50px_-12px_rgba(220,38,38,0.5)] transition-all uppercase tracking-tighter transform hover:scale-105">
          QUERO MINHA VAGA NO BOOSTER AGORA
        </a>
        
        <div className="flex flex-col md:flex-row items-center gap-8 text-slate-400 font-bold uppercase text-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-emerald-500" /> Pagamento Seguro
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-red-600" /> Poucas Vagas
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-slate-900" /> Início Imediato
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-20 border-t border-slate-100 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg">Q</div>
            <span className="font-black text-2xl tracking-tighter uppercase text-slate-900">QUINTINO <span className="text-red-600">BOOSTER</span></span>
          </div>
          <p className="text-slate-500 text-sm max-w-sm font-medium leading-relaxed">
            Mentoria de alto impacto focada em transformar estudantes em profissionais disputados pelo mercado. 
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 font-bold uppercase text-xs tracking-[0.2em] text-slate-500">
          <a href="#" className="hover:text-red-600 transition-colors"></a>
          <a href="#" className="hover:text-red-600 transition-colors"></a>
          <a href="#" className="hover:text-red-600 transition-colors"></a>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          © 2026 Quintino Booster. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <StepByStep />
      <Guarantee />
      <Testimonials />
      <AudienceFilter />
      <FinalCTA />
      <Footer />

      {/* Persistent Floating Button for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="https://pay.kiwify.com.br/d9puKrg" className="bg-red-600 text-white w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-2xl border-2 border-white/20 uppercase">
          GARANTIR MINHA VAGA <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default App;
