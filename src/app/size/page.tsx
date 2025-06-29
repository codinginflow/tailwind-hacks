import cifLogo from "@/assets/cif_logo.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto flex justify-center px-4 py-8">
      <Image
        src={cifLogo}
        alt="Coding in Flow logo"
        className="h-64 w-64"
        priority
      />
    </div>
  );
}
