
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';
import { MapPin, Scissors, Award, Heart, Users, Clock, CheckCircle, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-pod-cream to-pod-beige py-20 md:py-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pod-brown mb-6 leading-tight">
                  Cuidando dos Seus Pés, Promovendo Seu Bem-Estar
                </h1>
                <div className="divider ml-0"></div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Tratamentos especializados com atenção aos detalhes para garantir a saúde e o conforto dos seus pés. Nossa abordagem integra conhecimento técnico e cuidado humano.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton size="lg">Agende sua Consulta</CTAButton>
                  <CTAButton variant="outline" size="lg">Saiba Mais</CTAButton>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=1200" 
                  alt="Tratamento de podologia" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pod-brown/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <FeatureItem 
                icon={<Award />} 
                title="Expertise" 
                description="Profissionais qualificados e constantemente atualizados" 
              />
              <FeatureItem 
                icon={<CheckCircle />} 
                title="Qualidade" 
                description="Materiais e instrumentos de alta qualidade" 
              />
              <FeatureItem 
                icon={<Users />} 
                title="Atendimento" 
                description="Atenção personalizada para cada cliente" 
              />
              <FeatureItem 
                icon={<Heart />} 
                title="Cuidado" 
                description="Tratamentos realizados com delicadeza e precisão" 
              />
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="section-padding bg-pod-beige/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pod-brown mb-4">
                Nossos Serviços
              </h2>
              <div className="divider"></div>
              <p className="text-muted-foreground">
                Conheça nossos tratamentos especializados para garantir a saúde e o bem-estar dos seus pés.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Unhas Encravadas" 
                description="Tratamento especializado para aliviar a dor e corrigir o crescimento inadequado das unhas."
                icon={<Scissors size={24} />}
              />
              <ServiceCard 
                title="Calosidades e Fissuras" 
                description="Remoção segura de calos e tratamento de fissuras para restaurar a saúde da pele."
                icon={<MapPin size={24} />}
              />
              <ServiceCard 
                title="Pés Diabéticos" 
                description="Atenção especializada às necessidades específicas dos pés de pessoas com diabetes."
                icon={<Heart size={24} />}
              />
              <ServiceCard 
                title="Micoses e Onicomicoses" 
                description="Tratamento eficaz para combater fungos nas unhas e na pele dos pés."
                icon={<CheckCircle size={24} />}
              />
              <ServiceCard 
                title="Reflexologia Podal" 
                description="Massagem terapêutica nos pés que promove relaxamento e equilíbrio energético."
                icon={<Award size={24} />}
              />
              <ServiceCard 
                title="Podologia Esportiva" 
                description="Tratamentos específicos para atletas, prevenindo lesões e melhorando o desempenho."
                icon={<Users size={24} />}
              />
            </div>
            
            <div className="text-center mt-12">
              <CTAButton variant="default">Ver Todos os Serviços</CTAButton>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-pod-taupe/20">
          <div className="container-custom">
            <div className="bg-pod-cream rounded-xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-pod-brown mb-4">
                    Agende sua Consulta Hoje
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Dê o primeiro passo para pés mais saudáveis e confortáveis. Nossa equipe está pronta para atendê-lo com toda atenção que você merece.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton size="lg" className="px-8">
                      Agendar Agora
                    </CTAButton>
                    <a 
                      href="tel:+551234567890" 
                      className="flex items-center justify-center gap-2 text-pod-brown hover:text-pod-taupe transition-colors"
                    >
                      <Phone size={20} />
                      <span>(00) 12345-6789</span>
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=600" 
                    alt="Flores representando bem-estar" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pod-brown mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <div className="divider"></div>
              <p className="text-muted-foreground">
                Conheça as experiências de quem já confia em nossos serviços.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="O tratamento para minha unha encravada foi indolor e resolveu completamente um problema que eu tinha há anos. Profissionalismo e cuidado excepcionais."
                author="Maria Silva"
                role="Cliente desde 2020"
              />
              <TestimonialCard 
                quote="Como diabético, sempre tive receio com tratamentos nos pés. Aqui encontrei confiança e segurança. Meus pés nunca estiveram tão bem cuidados."
                author="José Oliveira"
                role="Cliente desde 2021"
              />
              <TestimonialCard 
                quote="A reflexologia podal transformou minha qualidade de vida. Reduziu meu estresse e melhorou meu sono. Recomendo fortemente."
                author="Ana Ferreira"
                role="Cliente desde 2019"
              />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-pod-beige">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pod-brown mb-4">
              Pronto para Cuidar dos Seus Pés?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comece sua jornada para pés mais saudáveis e confortáveis hoje mesmo.
            </p>
            <CTAButton size="lg" className="px-10">
              Agende sua Consulta
            </CTAButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <div className="flex flex-col items-center p-6 animate-fade-in">
    <div className="w-14 h-14 rounded-full bg-pod-beige flex items-center justify-center text-pod-brown mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-medium mb-2 text-pod-brown">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
