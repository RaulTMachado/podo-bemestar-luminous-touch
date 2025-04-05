
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
}

const CTAButton = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  onClick,
  ...props
}: CTAButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn(
        "transition-all duration-300 font-medium rounded-full",
        variant === 'default' && "bg-pod-brown hover:bg-pod-taupe text-white",
        variant === 'outline' && "border-pod-brown text-pod-brown hover:bg-pod-beige",
        variant === 'secondary' && "bg-pod-sage hover:bg-pod-beige text-foreground",
        size === 'lg' && "text-lg py-6 px-8",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
