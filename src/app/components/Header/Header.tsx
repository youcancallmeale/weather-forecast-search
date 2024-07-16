import Logo from "@/public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={Logo} alt="Your Company" width={250} height={40} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
