import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border px-8 md:px-16 lg:px-24"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto py-3">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-base sm:text-lg md:text-xl font-bold">{personalInfo.name}</span>
            <span className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground">
              {personalInfo.title}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`text-base lg:text-lg font-semibold transition-colors ${
                  isActive(link.to)
                    ? "text-foreground underline underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-1 pt-4 pb-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-3 text-small ${
                  isActive(link.to) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
