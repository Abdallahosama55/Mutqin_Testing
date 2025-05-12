import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="animate-pulse">
        
        <Image src="/Logo.png" alt="Logo" width={120} height={120} className="h-auto w-auto" priority />
      </div>
    </div>
  )
}
