import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { propertiesQuery } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EstateHub — Extraordinary Homes, Curated" },
      { name: "description", content: "Discover a curated collection of luxury villas, penthouses, and historic estates across the world's most coveted destinations." },
    ],
  }),
  component: Home,
});

function Home() {
  const { data: properties = [] } = useQuery(propertiesQuery());
  const featured = properties.filter((p) => p.is_featured).slice(0, 3);
  const recent = properties.slice(0, 6);

  const navigate = useNavigate();
  const [q, setQ] = useState("");

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 md:pb-40 md:pt-48">
          <p className="eyebrow text-gold">— A curated marketplace</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
            Extraordinary <em className="font-display italic text-gold">homes</em>,<br />
            in the world's most coveted places.
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/85">
            From cliffside villas in the Mediterranean to landmark penthouses in Manhattan — each residence is hand-selected by our advisors.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); navigate({ to: "/browse", search: { q } as never }); }}
            className="mt-10 flex max-w-2xl items-center gap-2 rounded-sm border border-primary-foreground/20 bg-background/95 p-2 shadow-2xl backdrop-blur"
          >
            <Search className="ml-3 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by city, neighborhood, or country…"
              className="flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="rounded-sm bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90">
              Search
            </button>
          </form>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-primary-foreground/85">
            <Stat n="240+" l="Residences" />
            <Stat n="32" l="Countries" />
            <Stat n="$4.2B" l="Sold" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">— Featured residences</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">This month's selection</h2>
          </div>
          <Link to="/browse" className="hidden items-center gap-2 text-sm uppercase tracking-[0.22em] text-primary transition hover:text-gold md:flex">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 md:py-20">
          {[
            { type: "villa", label: "Villas" },
            { type: "apartment", label: "Apartments" },
            { type: "house", label: "Houses" },
            { type: "commercial", label: "Commercial" },
          ].map((c) => (
            <Link
              key={c.type}
              to="/browse"
              search={{ type: c.type } as never}
              className="group block border-l border-border pl-5 transition hover:border-gold"
            >
              <p className="eyebrow">Discover</p>
              <p className="mt-2 font-display text-2xl text-foreground transition group-hover:text-primary">{c.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Browse <ArrowRight className="ml-1 inline h-3 w-3" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* RECENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow">— New to market</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Recently listed</h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl normal-case tracking-normal text-gold">{n}</span>
      <span>{l}</span>
    </div>
  );
}
