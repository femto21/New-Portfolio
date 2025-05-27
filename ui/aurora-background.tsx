"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center text-slate-950 bg-transparent",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#E9A5F1_10%,#a5b4fc_15%,#8F87F1_20%,#ddd6fe_25%,#C68EFD_30%)",
              "--gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--blue-300": "#8F87F1",
              "--blue-400": "#C68EFD",
              "--blue-500": "#E9A5F1",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--gradient),var(--aurora)] 
              [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] filter will-change-transform 
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] 
              [--gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]  
              after:absolute after:inset-0 after:[background-image:var(--gradient),var(--aurora)] after:[background-size:200%,_100%] 
              after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]  
              `,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

export { AuroraBackground };
