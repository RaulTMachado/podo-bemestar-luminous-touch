
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pod-beige text-foreground" id="contact">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-pod-brown">Podologia & Bem-Estar</h3>
            <p className="mb-4">Cuidamos dos seus pés com atenção e dedicação, proporcionando bem-estar e saúde para sua caminhada diária.</p>
            <div className="flex space-x-3">
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-pod-brown">Nossos Serviços</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Tratamento de Unhas Encravadas</FooterLink>
              <FooterLink href="#services">Calosidades e Fissuras</FooterLink>
              <FooterLink href="#services">Micoses e Onicomicoses</FooterLink>
              <FooterLink href="#services">Pés Diabéticos</FooterLink>
              <FooterLink href="#services">Reflexologia Podal</FooterLink>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-pod-brown">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-pod-brown flex-shrink-0" />
                <span>Av. Exemplo, 123 - Bairro, Cidade - Estado</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pod-brown flex-shrink-0" />
                <span>(00) 12345-6789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pod-brown flex-shrink-0" />
                <a href="mailto:contato@podologia.com" className="hover:text-pod-brown transition-colors">
                  contato@podologia.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours Column */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4 text-pod-brown">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-2 text-pod-brown flex-shrink-0" />
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>9:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-2 text-pod-brown flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábado</p>
                  <p>9:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-2 text-pod-brown flex-shrink-0" />
                <div>
                  <p className="font-medium">Domingo e Feriados</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-pod-taupe/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Podologia & Bem-Estar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="transition-colors hover:text-pod-brown">
      {children}
    </a>
  </li>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ 
  href, 
  icon,
  label
}) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-pod-taupe text-white flex items-center justify-center transition-colors hover:bg-pod-brown"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;
