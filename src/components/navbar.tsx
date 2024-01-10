import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-x-8 p-16 text-md lg:text-lg">
      <Link
        className="text-zinc-400 font-medium transition-all duration-150 ease-linear hover:text-zinc-500"
        href={"/"}
      >
        Home
      </Link>
      <a
        href="https://duca.mintlify.app"
        className="text-zinc-400 font-medium transition-all duration-150 ease-linear hover:text-zinc-500"
      >
        Building blocks
      </a>
      <a
        href="https://twitter.com/ducaswtf"
        className="text-zinc-400 font-medium transition-all duration-150 ease-linear hover:text-zinc-500"
      >
        Twitter
      </a>
    </div>
  );
}
