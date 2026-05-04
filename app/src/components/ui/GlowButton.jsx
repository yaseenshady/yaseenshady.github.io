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
      ? "border-yellow-400/20 bg-yellow-400/[0.04] text-yellow-100 hover:border-yellow-300/35 hover:bg-yellow-300/[0.08]"
      : "border-yellow-300/35 bg-yellow-300/[0.14] text-yellow-50 shadow-[0_0_36px_rgba(250,204,21,0.18)] hover:border-yellow-200/55 hover:bg-yellow-200/[0.2] hover:text-neutral-950 hover:shadow-[0_0_44px_rgba(250,204,21,0.28)]";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {children}
    </a>
  );
}
