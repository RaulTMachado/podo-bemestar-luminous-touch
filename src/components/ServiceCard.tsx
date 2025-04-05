
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "pod-card p-6 md:p-8 flex flex-col items-center text-center group",
      "transition-all duration-300 hover:translate-y-[-5px]",
      className
    )}>
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-pod-beige rounded-full text-pod-brown group-hover:bg-pod-taupe group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-pod-brown">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
