export default function Card({ bg = "#FFFFFF", className = "", children }) {
  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}
