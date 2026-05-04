import { motion } from "framer-motion";

const classes = {
  primary:
    "bg-white text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.18)] hover:bg-slate-100",
  ghost:
    "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:border-[#7dd3fc]/40 hover:bg-white/8"
};

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 340, damping: 24 }}
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition ${classes[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
