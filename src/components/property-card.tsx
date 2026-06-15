import { Link } from "@tanstack/react-router";
import { Heart, BedDouble, Bath, Maximize } from "lucide-react";
import type { Property } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useFavorites } from "@/hooks/use-favorites";

export function PropertyCard({ property }: { property: Property }) {
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(property.id);

  return (
    <Link
      to="/property/$id"
      params={{ id: property.id }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-sm bg-muted">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </div>
        <button
          onClick={(e) => { e.preventDefault(); toggle(property.id); }}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition hover:bg-background"
          aria-label="Save"
        >
          <Heart className={`h-4 w-4 transition ${fav ? "fill-gold text-gold" : "text-foreground/70"}`} />
        </button>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {property.is_featured && (
            <span className="rounded-full bg-primary/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground">
              Featured
            </span>
          )}
          <span className="rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
            For {property.listing_type}
          </span>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight text-foreground transition group-hover:text-primary">
            {property.title}
          </h3>
          <span className="shrink-0 font-display text-xl text-primary">{formatPrice(Number(property.price), property.listing_type)}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {[property.locality, property.city, property.country].filter(Boolean).join(", ")}
        </p>
        <div className="mt-4 flex items-center gap-5 text-xs text-foreground/70">
          {property.bedrooms != null && (
            <span className="flex items-center gap-1.5"><BedDouble className="h-3.5 w-3.5 text-gold" />{property.bedrooms} Beds</span>
          )}
          {property.bathrooms != null && (
            <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5 text-gold" />{property.bathrooms} Baths</span>
          )}
          {property.area_sqft != null && (
            <span className="flex items-center gap-1.5"><Maximize className="h-3.5 w-3.5 text-gold" />{property.area_sqft.toLocaleString()} ft²</span>
          )}
        </div>
      </div>
    </Link>
  );
}
