import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        block px-4 py-2 md:p-0 
        text-headingColor
        relative
        transition-all duration-300
        hover:text-primary
        ${
          isActive
            ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
            : ""
        }
        ${className}
        before:content-['']
        before:absolute
        before:bottom-0
        before:left-0
        before:w-0
        before:h-0.5
        before:bg-primary
        before:transition-all
        before:duration-300
        hover:before:w-full
      `}
    >
      {children}
    </Link>
  );
}
