export default function GlassCard({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={`rounded-[28px] border border-white/10 bg-white/[0.06] shadow-glass backdrop-blur-2xl ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
