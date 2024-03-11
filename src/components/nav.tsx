import Link from "next/link";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 justify-center">
        <Link href="/ssg" className="px-5 py-2 border-2 rounded-xl">
          SSG
        </Link>
        <Link href="/isr" className="px-5 py-2 border-2 rounded-xl">
          ISR
        </Link>
        <Link href="/ssr" className="px-5 py-2 border-2 rounded-xl">
          SSR
        </Link>
        <Link href="/csr" className="px-5 py-2 border-2 rounded-xl">
          CSR
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
