import React from 'react';
import { Code, Zap, Globe } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 via-secondary-500 to-accent-400 flex items-center justify-center animate-glow">
        <div className="relative">
          <Code className="w-6 h-6 text-white absolute" />
          <Zap className="w-3 h-3 text-yellow-300 absolute top-0 right-0 animate-pulse" />
          <Globe className="w-3 h-3 text-accent-300 absolute bottom-0 left-0 animate-pulse" />
        </div>
      </div>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-400 via-secondary-500 to-accent-400 opacity-30 blur animate-pulse"></div>
    </div>
  );
};