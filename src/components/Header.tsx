
import React from 'react';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-pod-cream/90 backdrop-blur-sm shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-serif font-semibold text-pod-brown">
              Podologia & Bem-Estar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#testimonials">Depoimentos</NavLink>
            <NavLink href="#contact">Contato</NavLink>
            <CTAButton variant="default" size="default">
              Agende sua Consulta
            </CTAButton>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-pod-brown" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden bg-pod-cream absolute w-full py-4 shadow-md transition-all duration-300",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4 px-6">
          <MobileNavLink href="#home" onClick={toggleMenu}>Home</MobileNavLink>
          <MobileNavLink href="#services" onClick={toggleMenu}>Serviços</MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={toggleMenu}>Depoimentos</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMenu}>Contato</MobileNavLink>
          <div className="pt-2">
            <CTAButton className="w-full" variant="default" size="default">
              Agende sua Consulta
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ 
  href, 
  children,
  className
}) => (
  <a 
    href={href} 
    className={cn(
      "text-foreground hover:text-pod-brown transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pod-brown after:transition-all hover:after:w-full",
      className
    )}
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ 
  href, 
  onClick, 
  children 
}) => (
  <a 
    href={href} 
    className="text-foreground py-2 block border-b border-pod-beige/50 hover:text-pod-brown transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Header;
