import Link from "next/link";

const Links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Books",
    link: "/books",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
]

export const NavLinks = () => {
  return (
    <nav className="flex flex-row gap-8">
      {Links.map((link) => {
        return (
          <Link key={link.id} href={link.link} className="hidden lg:flex">
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}