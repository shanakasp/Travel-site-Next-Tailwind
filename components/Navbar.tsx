import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex  p-4">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-600 flex justify-center  cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex hidden bg-gray-800 rounded-full p-2.5 ">
        <Image src="/user.svg" alt="user" height={24} width={24} />
        <button className="text-">Click Me</button>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
