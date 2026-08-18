export function LogoMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#141414" />
      <rect x="1" y="1" width="98" height="98" rx="21" stroke="#ff4444" strokeOpacity="0.35" strokeWidth="2" />
      <path
        d="M27 82V18h32c12 0 20 8 20 19s-8 16-14 17l18 28h-16L52 56H27"
        stroke="white"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 56h20" stroke="white" strokeWidth="11" strokeLinecap="round" />
      <path d="M60 82l14-26" stroke="#ff4444" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ markClassName = 'w-11 h-11' }: { markClassName?: string }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark className={markClassName} />
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight bg-gradient-orange bg-clip-text text-transparent">
          BATTLE PRO
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.3em] text-gray-400">
          <span className="h-px w-3 bg-red-500/70" />
          SPORTSWEAR
          <span className="h-px w-3 bg-red-500/70" />
        </span>
      </div>
    </div>
  )
}
