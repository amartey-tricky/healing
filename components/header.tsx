import Image from "next/image";
import { roboto } from "./fonts";
import { NavLinks } from "./navlinks";

export function Header() {
  return (
    <header className={`${roboto.className} fixed mt-4 w-full text-md font-medium px-4 md:px-8`}>
      <div className="p-4 md:py-2 md:px-6 w-full capitalize backdrop-blur-xl flex items-center justify-between rounded-full border">
        <div>Healing</div>
        <NavLinks />
      </div>
    </header>
  )
}
