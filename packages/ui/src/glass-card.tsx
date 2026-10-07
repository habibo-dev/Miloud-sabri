import type { PropsWithChildren } from "react";

export function GlassCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`glass rounded-glass ${className}`}>{children}</div>;
}