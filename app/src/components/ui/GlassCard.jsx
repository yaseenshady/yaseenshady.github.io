import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", delay = 0, as = "div" }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      className={`glass-panel ${className}`}
    >
      {children}
    </Component>
  );
}
