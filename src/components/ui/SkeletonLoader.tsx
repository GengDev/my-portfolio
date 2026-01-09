export function SkeletonLoader({ className = "", variant = "default" }: { className?: string; variant?: "default" | "card" | "text" | "image" }) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-[length:200%_100%]";

  if (variant === "card") {
    return (
      <div className={`${baseClasses} rounded-2xl p-6 space-y-4 ${className}`}>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-slate-600 rounded w-3/4"></div>
            <div className="h-3 bg-slate-600 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-slate-600 rounded"></div>
          <div className="h-3 bg-slate-600 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (variant === "image") {
    return (
      <div className={`${baseClasses} rounded-3xl w-96 h-96 ${className}`}></div>
    );
  }

  if (variant === "text") {
    return (
      <div className={`${baseClasses} rounded h-4 ${className}`}></div>
    );
  }

  return (
    <div className={`${baseClasses} rounded-xl ${className}`}></div>
  );
}
