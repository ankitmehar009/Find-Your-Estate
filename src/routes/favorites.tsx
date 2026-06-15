import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useFavorites } from "@/hooks/use-favorites";
import { propertiesByIdsQuery } from "@/lib/queries";
import { PropertyCard } from "@/components/property-card";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Saved Residences — EstateHub" },
      { name: "description", content: "Your hand-picked collection of saved residences." },
    ],
  }),
  component: Favorites,
});

function Favorites() {
  const { ids } = useFavorites();
  const { data: properties = [] } = useQuery(propertiesByIdsQuery(ids));

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <p className="eyebrow">— Your collection</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Saved residences</h1>

      {ids.length === 0 ? (
        <div className="mt-12 border border-dashed border-border py-24 text-center">
          <Heart className="mx-auto h-8 w-8 text-gold" />
          <p className="mt-4 font-display text-2xl">No saved residences yet</p>
          <p className="mt-2 text-sm text-muted-foreground">Tap the heart on any listing to save it here for later.</p>
          <Link to="/browse" className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground">
            Browse residences
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => <PropertyCard key={p.id} property={p} />)}
        </div>
      )}
    </div>
  );
}
