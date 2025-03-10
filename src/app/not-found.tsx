import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        404
      </h1>

      <div className="my-4 text-center">
        <Link
          href="/"
          className="text-zinc-500 hover:underline duration-500 hover:text-zinc-300"
        >
          Go back to home
        </Link>
      </div>
    </div>
  )
}
