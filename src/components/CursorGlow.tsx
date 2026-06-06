import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { hasFinePointer } from "@/lib/hasFinePointer";

export function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--mouse-x",
          `${e.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--mouse-y",
          `${e.clientY}px`,
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [prefersReducedMotion]);

  if (!hasFinePointer() || prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.15), transparent 40%)",
      }}
    />
  );
}
