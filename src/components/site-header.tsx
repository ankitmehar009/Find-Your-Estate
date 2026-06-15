import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-primary">Estate</span>
          <span className="font-display text-2xl tracking-tight text-gold italic">Hub</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-foreground/70 transition hover:text-primary [&.active]:text-primary">Home</Link>
          <Link to="/browse" className="text-sm text-foreground/70 transition hover:text-primary [&.active]:text-primary">Browse</Link>
          <Link to="/favorites" className="text-sm text-foreground/70 transition hover:text-primary [&.active]:text-primary">Saved</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/favorites"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-widest text-foreground/80 transition hover:border-gold hover:text-primary"
          >
            <Heart className="h-3.5 w-3.5" />
            Saved
          </Link>
        </div>
        <button onClick={() => setOpen((s) => !s)} className="md:hidden text-foreground" aria-label="menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/browse", label: "Browse" },
              { to: "/favorites", label: "Saved" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80 transition hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
