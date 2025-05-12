"use client";

import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-lg bg-card dark:text-white h-full text-card-foreground shadow-sm p-6 transition-all hover:shadow-md">
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-4">
          <div className="text-primary">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg p-[1px]  dark:text-white bg-gradient-to-b from-[#692bef] to-[#ffca64]">
      <div className="bg-card h-full rounded-lg p-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-4">
          {icon && <div className="text-primary"><img src={icon} alt={title}/>
          </div>
          
          }
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
