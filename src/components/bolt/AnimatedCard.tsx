import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function AnimatedCard({ children, onClick }: AnimatedCardProps) {
  return (
    <div
      onClick={onClick}
      className="transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    >
      {children}
    </div>
  );
}