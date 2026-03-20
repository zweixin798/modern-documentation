import clsx from "clsx";
import React from "react";

const stylesByType = {
  info: {
    border: "border-sky-200 dark:border-sky-900/60",
    bg: "bg-sky-50/80 dark:bg-sky-950/40",
    title: "text-sky-900 dark:text-sky-100",
    body: "text-sky-900/80 dark:text-sky-100/80",
    iconWrap: "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200",
    icon: "i",
  },
  success: {
    border: "border-emerald-200 dark:border-emerald-900/60",
    bg: "bg-emerald-50/80 dark:bg-emerald-950/40",
    title: "text-emerald-900 dark:text-emerald-100",
    body: "text-emerald-900/80 dark:text-emerald-100/80",
    iconWrap:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200",
    icon: "✓",
  },
  warning: {
    border: "border-amber-200 dark:border-amber-900/60",
    bg: "bg-amber-50/80 dark:bg-amber-950/40",
    title: "text-amber-950 dark:text-amber-100",
    body: "text-amber-950/80 dark:text-amber-100/80",
    iconWrap:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
    icon: "!",
  },
  danger: {
    border: "border-rose-200 dark:border-rose-900/60",
    bg: "bg-rose-50/80 dark:bg-rose-950/40",
    title: "text-rose-950 dark:text-rose-100",
    body: "text-rose-950/80 dark:text-rose-100/80",
    iconWrap: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
    icon: "×",
  },
};

/**
 * Callout component for MDX usage.
 *
 * @example
 * <Callout type="warning" title="Hallucination">
 *   ...
 * </Callout>
 */
export function Callout({ type = "info", title, children, className }) {
  const s = stylesByType[type] ?? stylesByType.info;

  return (
    <div
      className={clsx(
        "my-6 rounded-xl border p-4 sm:p-5",
        s.border,
        s.bg,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={clsx(
            "mt-0.5 grid h-7 w-7 place-items-center rounded-lg text-sm font-semibold",
            s.iconWrap
          )}
          aria-hidden="true"
        >
          {s.icon}
        </div>
        <div className="min-w-0">
          {title ? (
            <div className={clsx("text-sm font-semibold", s.title)}>{title}</div>
          ) : null}
          <div className={clsx("prose prose-sm max-w-none dark:prose-invert", s.body)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

