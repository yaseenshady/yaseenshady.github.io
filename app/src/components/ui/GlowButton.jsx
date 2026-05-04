const baseClasses =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.18em] transition-all duration-500 ease-cinematic";

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const variantClasses =
    variant === "secondary"
      ? "border-white/12 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.08]"
      : "border-cyan-300/30 bg-cyan-300/[0.12] text-cyan-50 shadow-[0_0_36px_rgba(121,228,255,0.18)] hover:border-cyan-200/50 hover:bg-cyan-200/[0.18] hover:shadow-[0_0_44px_rgba(121,228,255,0.26)]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {children}
    </a>
  );
}
