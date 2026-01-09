export function LoadingSpinner({ size = 'md', color = 'emerald' }: { size?: 'sm' | 'md' | 'lg'; color?: 'emerald' | 'cyan' | 'amber' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    emerald: 'border-emerald-400',
    cyan: 'border-cyan-400',
    amber: 'border-amber-400'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full loading-spinner`} />
  );
}
