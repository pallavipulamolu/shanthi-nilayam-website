export function BrandMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="brand__mark">
      <rect width="64" height="64" rx="20" fill="#E97832" />
      <path d="M14 47V31a18 18 0 0 1 36 0v16" fill="none" stroke="#202321" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M23 47V33a9 9 0 0 1 18 0v14" fill="none" stroke="#202321" strokeWidth="3" strokeLinecap="round" opacity=".45" />
      <circle cx="32" cy="39" r="4.6" fill="#FFF9F1" />
    </svg>
  )
}
