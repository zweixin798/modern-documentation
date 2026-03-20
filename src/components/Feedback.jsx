import React, { useMemo, useState } from "react";

export function Feedback({ className }) {
  const [value, setValue] = useState(null); // "up" | "down" | null
  const label = useMemo(() => {
    if (value === "up") return "Thanks! 🙌";
    if (value === "down") return "Thanks—we'll improve it.";
    return "Was this page helpful?";
  }, [value]);

  return (
    <div
      className={[
        "mt-10 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm",
        "dark:border-slate-800 dark:bg-slate-950/30",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
        {label}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue("up")}
          className={[
            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition",
            value === "up"
              ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100"
              : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/30",
          ].join(" ")}
          aria-pressed={value === "up"}
        >
          <span aria-hidden="true">👍</span>
          Helpful
        </button>
        <button
          type="button"
          onClick={() => setValue("down")}
          className={[
            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition",
            value === "down"
              ? "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-100"
              : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-900/30",
          ].join(" ")}
          aria-pressed={value === "down"}
        >
          <span aria-hidden="true">👎</span>
          Not really
        </button>
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400">
        UI-only demo. Hook this up to analytics or GitHub issues later.
      </div>
    </div>
  );
}

