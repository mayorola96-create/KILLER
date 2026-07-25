export function BrandIcon({ icon, className = "h-5 w-5" }: { icon: { path: string }; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
