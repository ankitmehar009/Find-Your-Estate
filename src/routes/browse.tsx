import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Search, SlidersHorizontal } from "lucide-react";
import { propertiesQuery } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";

const searchSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  listing: z.string().optional(),
  beds: z.coerce.number().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  sort: z.string().optional(),
});

export const Route = createFileRoute("/browse")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Browse Residences — EstateHub" },
      { name: "description", content: "Search luxury homes by location, type, price, and bedrooms across our curated worldwide portfolio." },
    ],
  }),
  component: Browse,
});

function Browse() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/browse" });
  const [searchInput, setSearchInput] = useState(search.q ?? "");

  const filters = useMemo(() => ({
    search: search.q,
    type: search.type,
    listing: search.listing,
    beds: search.beds,
    minPrice: search.minPrice,
    maxPrice: search.maxPrice,
    sort: search.sort,
  }), [search]);

  const { data: properties = [], isLoading } = useQuery(propertiesQuery(filters));

  const update = (patch: Record<string, unknown>) =>
    navigate({ search: (prev: Record<string, unknown>) => ({ ...prev, ...patch }) as never });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">— The Collection</p>
        <h1 className="font-display text-4xl md:text-5xl">Browse residences</h1>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); update({ q: searchInput || undefined }); }}
        className="mt-8 flex items-center gap-2 rounded-sm border border-border bg-background p-2"
      >
        <Search className="ml-3 h-4 w-4 text-muted-foreground" />
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="City, neighborhood, country…"
          className="flex-1 bg-transparent px-2 py-2.5 text-sm outline-none"
        />
        <button type="submit" className="rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground">Search</button>
      </form>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-y border-border py-4 text-sm">
        <SlidersHorizontal className="h-4 w-4 text-gold" />
        <Select label="Type" value={search.type ?? "all"} onChange={(v) => update({ type: v === "all" ? undefined : v })}
          options={[["all","All types"],["villa","Villa"],["house","House"],["apartment","Apartment"],["commercial","Commercial"],["land","Land"]]} />
        <Select label="For" value={search.listing ?? "all"} onChange={(v) => update({ listing: v === "all" ? undefined : v })}
          options={[["all","Buy & Rent"],["sale","For sale"],["rent","For rent"]]} />
        <Select label="Beds" value={String(search.beds ?? 0)} onChange={(v) => update({ beds: Number(v) || undefined })}
          options={[["0","Any beds"],["1","1+"],["2","2+"],["3","3+"],["4","4+"],["5","5+"]]} />
        <Select label="Max price" value={String(search.maxPrice ?? 0)} onChange={(v) => update({ maxPrice: Number(v) || undefined })}
          options={[["0","Any price"],["20000","Up to $20K"],["1000000","Up to $1M"],["5000000","Up to $5M"],["10000000","Up to $10M"],["50000000","Up to $50M"]]} />
        <div className="ml-auto">
          <Select label="Sort" value={search.sort ?? "latest"} onChange={(v) => update({ sort: v === "latest" ? undefined : v })}
            options={[["latest","Latest"],["price_asc","Price ↑"],["price_desc","Price ↓"],["views","Most viewed"]]} />
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {isLoading ? "Loading…" : `${properties.length} residence${properties.length === 1 ? "" : "s"}`}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => <PropertyCard key={p.id} property={p} />)}
      </div>

      {!isLoading && properties.length === 0 && (
        <div className="mt-20 border border-dashed border-border py-20 text-center">
          <p className="font-display text-2xl">No residences match your filters.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try widening your search or removing a filter.</p>
        </div>
      )}
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="hidden sm:inline">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-sm border border-border bg-background px-3 py-2 text-xs uppercase tracking-[0.18em] text-foreground outline-none focus:border-gold"
      >
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
    </label>
  );
}
