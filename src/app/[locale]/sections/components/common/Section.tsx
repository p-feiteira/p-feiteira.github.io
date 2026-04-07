import React from "react";

type SectionProps = {
  id?: string;
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
};

/**
 * Shared section wrapper that uses the CSS custom-property container widths
 * defined in globals.css, replacing the patchwork of max-w-5xl/6xl/7xl across
 * all section files. Use `wide` for showcase-style pages that need slightly
 * more breathing room (--container-wide ≈ 110rem).
 */
export default function Section({ id, wide = false, className = "", children, as: Tag = "section" }: SectionProps) {
  return (
    <Tag
      id={id}
      className={className}
      style={{
        width: "100%",
        maxWidth: wide ? "var(--container-wide)" : "var(--container-content)",
        marginInline: "auto",
        paddingInline: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      {children}
    </Tag>
  );
}
