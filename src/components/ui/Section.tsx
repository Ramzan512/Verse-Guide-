import React from 'react';
import { motion } from "motion/react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 relative ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
