export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`.trim()}>
      <svg viewBox="0 0 42 32" fill="none" aria-hidden>
        <circle cx="13" cy="16" r="10" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="25" cy="16" r="10" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <span>LIKE A MODEL</span>
    </span>
  );
}