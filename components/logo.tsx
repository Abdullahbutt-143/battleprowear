import Image from 'next/image'

export function Logo({ className = 'h-12 w-auto' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Battle Pro Sportswear"
      width={1144}
      height={636}
      priority
      className={className}
    />
  )
}
