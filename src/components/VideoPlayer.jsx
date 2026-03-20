import React from "react";

export function VideoPlayer({
  src,
  poster,
  title = "Video",
  aspect = "16/9",
  className,
}) {
  const paddingBottom =
    aspect === "16/9"
      ? "56.25%"
      : aspect === "9/16"
        ? "177.78%"
        : aspect === "4/3"
          ? "75%"
          : "56.25%";

  return (
    <div
      className={[
        "my-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-950/5 shadow-sm",
        "dark:border-slate-800 dark:bg-slate-950/30",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
        {title}
      </div>
      <div className="relative w-full" style={{ paddingBottom }}>
        <video
          className="absolute inset-0 h-full w-full"
          controls
          preload="metadata"
          src={src}
          poster={poster}
        />
      </div>
    </div>
  );
}

