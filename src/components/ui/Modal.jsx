export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold">{title}</h3>
          <button onClick={onClose} className="text-sm">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
