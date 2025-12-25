import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinkClass = ({ isActive }) =>
  [
    "text-sm transition-colors",
    isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground",
  ].join(" ");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background font-bold">
            S
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">SimpleEcom</div>
            <div className="text-xs text-muted-foreground group-hover:text-foreground transition">
              shop smart
            </div>
          </div>
        </Link>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border bg-background/60 p-1 backdrop-blur">
          <NavLink to="/" className={navLinkClass}>
            <span className="block rounded-full px-4 py-2 hover:bg-muted">
              Home
            </span>
          </NavLink>

          <NavLink to="/categories" className={navLinkClass}>
            <span className="block rounded-full px-4 py-2 hover:bg-muted">
              Categories
            </span>
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            <span className="block rounded-full px-4 py-2 hover:bg-muted">
              About
            </span>
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            <span className="block rounded-full px-4 py-2 hover:bg-muted">
              Dashboard
            </span>
          </NavLink>
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="rounded-full">
            Sign in
          </Button>
          <Button className="rounded-full">Shop now</Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Open menu"
              >
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                <NavLink to="/" className={navLinkClass}>
                  <div className="rounded-xl px-4 py-3 hover:bg-muted">
                    Home
                  </div>
                </NavLink>

                <NavLink to="/dashboard" className={navLinkClass}>
                  <div className="rounded-xl px-4 py-3 hover:bg-muted">
                    Dashboard
                  </div>
                </NavLink>

                <NavLink to="/about" className={navLinkClass}>
                  <div className="rounded-xl px-4 py-3 hover:bg-muted">
                    About
                  </div>
                </NavLink>

                <NavLink to="/categories" className={navLinkClass}>
                  <div className="rounded-xl px-4 py-3 hover:bg-muted">
                    Categories
                  </div>
                </NavLink>

                <div className="mt-4 grid gap-2">
                  <Button variant="outline" className="rounded-xl">
                    Sign in
                  </Button>
                  <Button className="rounded-xl">Shop now</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
