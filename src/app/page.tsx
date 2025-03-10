import { GithubIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"
import Particles from "~/components/particles"

const socials = [
  {
    icon: <LinkedinIcon size={20} />,
    href: "https://www.linkedin.com/in/kevinjanuari/",
    label: "Linkedin",
  },
  {
    icon: <GithubIcon size={20} />,
    href: "https://github.com/kevinjanuary/",
    label: "Github",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Co-Founder of{" "}
          <Link
            target="_blank"
            href="https://tophub.id"
            className="underline duration-500 hover:text-zinc-300"
          >
            tophub.id
          </Link>
        </h2>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text will-change-transform">
        Kevin Januari
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 border-zinc-500 bg-zinc-900 hover:border-zinc-200 drop-shadow-orange"
            >
              {s.icon}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}
