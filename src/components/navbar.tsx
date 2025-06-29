import logo from "@/assets/cif_logo_text.png";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src={logo}
            alt="Coding in Flow logo"
            width={180}
            className="dark:brightness-0 dark:invert"
            priority
          />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
