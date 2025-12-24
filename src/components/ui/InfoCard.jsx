const STATUS_STYLES = {
  success: "text-green-600",
  warning: "text-yellow-600",
  danger: "text-red-600",
  info: "text-blue-600",
};

export default function InfoCard({
  /* common props */
  badge,
  title,
  subtitle,
  meta,
  status,
  statusVariant = "success",
  footer,
  bgColor,
  actions,
  headerActions,
  className = "",

  /* layout control */
  layout = "vertical", // "vertical" | "horizontal"

  /* slots */
  left,
  right,
}) {
  /* ======================================================
     HORIZONTAL LAYOUT (GENERIC)
  ====================================================== */
  if (layout === "horizontal") {
    return (
      <div
        className={`
          rounded-xl p-4 flex items-start justify-between gap-6
          hover:-translate-y-[1px] transition select-none
          ${className}
        `}
        style={{ backgroundColor: bgColor }}
      >
        {/* LEFT */}
        <div className="flex items-start gap-4">
          {left && (
            <div className="bg-white rounded-xl p-2 shrink-0">
              {left}
            </div>
          )}

          <div className="space-y-1.5">
            <div className="text-sm font-semibold text-gray-800 leading-relaxed">
              {title}
            </div>

            {subtitle && (
              <div className="text-xs text-gray-700 leading-relaxed max-w-xl">
                {subtitle}
              </div>
            )}

            {meta && (
              <div className="text-[11px] text-gray-500 leading-relaxed">
                {Array.isArray(meta) ? meta.join(" · ") : meta}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        {right && (
          <div className="text-xs font-semibold text-gray-600 whitespace-nowrap pt-1">
            {right}
          </div>
        )}
      </div>
    );
  }

  /* ======================================================
     DEFAULT VERTICAL CARD
  ====================================================== */
  return (
    <div
      className={`
        rounded-xl p-4 flex flex-col gap-2 shadow-sm select-none
        ${className}
      `}
      style={{ backgroundColor: bgColor }}
    >
      {/* HEADER */}
      <div className="flex items-start gap-2">
        {badge && (
          <div className="bg-white rounded-md px-1.5 py-0.5 text-black text-xs font-semibold">
            {badge}
          </div>
        )}

        <div className="text-xs font-semibold flex-1 leading-relaxed">
          {title}
        </div>

        {headerActions && (
          <div className="ml-auto">{headerActions}</div>
        )}
      </div>

      {/* BODY */}
      {subtitle && (
        <div className="text-xs text-gray-700 leading-relaxed">
          {subtitle}
        </div>
      )}

      {meta && (
        <div className="text-[10px] text-gray-600 leading-relaxed">
          {meta}
        </div>
      )}

      {/* STATUS / FOOTER */}
      {(status || footer) && (
        <div
          className={`flex items-center gap-1 text-xs mt-2 leading-relaxed ${STATUS_STYLES[statusVariant]}`}
        >
          {status && (
            <>
              <span>✔</span>
              <span>{status}</span>
            </>
          )}
          {footer && <span className="ml-auto">{footer}</span>}
        </div>
      )}

      {/* ACTIONS */}
      {actions && <div className="ml-auto mt-2">{actions}</div>}
    </div>
  );
}
