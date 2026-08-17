export function Logo({ className = "" }: { className?: string }) {
  return (
    <img className={`brand-mark ${className}`.trim()} src="/logo.png" alt="Like A Model" />
  );
}