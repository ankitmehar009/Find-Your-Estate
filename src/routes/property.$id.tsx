import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Heart, Share2, BedDouble, Bath, Maximize, Car, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { propertyQuery } from "@/lib/queries";
import { useFavorites } from "@/hooks/use-favorites";
import { formatPriceFull } from "@/lib/format";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/property/$id")({
  loader: async ({ params, context }) => {
    const data = await context.queryClient.ensureQueryData(propertyQuery(params.id));
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — EstateHub` },
          { name: "description", content: loaderData.description.slice(0, 160) },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description.slice(0, 160) },
          { property: "og:image", content: loaderData.images[0] },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.images[0] },
        ]
      : [],
  }),
  component: PropertyDetail,
});

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function PropertyDetail() {
  const { id } = Route.useParams();
  const { data: property } = useQuery(propertyQuery(id));
  const { isFavorite, toggle } = useFavorites();
  const [activeImg, setActiveImg] = useState(0);

  if (!property) return null;
  const fav = isFavorite(property.id);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: property.title, url });
      else { await navigator.clipboard.writeText(url); toast.success("Link copied"); }
    } catch { /* user cancelled */ }
  };

  return (
    <div>
      {/* Gallery */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-8">
          <Link to="/browse" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground transition hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to browse
          </Link>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="md:col-span-3">
              <div className="aspect-[16/10] overflow-hidden rounded-sm bg-muted">
                <img src={property.images[activeImg]} alt={property.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 md:grid-cols-1">
              {property.images.slice(0, 4).map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[4/3] overflow-hidden rounded-sm border-2 transition ${i === activeImg ? "border-gold" : "border-transparent opacity-80 hover:opacity-100"}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-3 lg:py-16">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary">
              For {property.listing_type}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {property.property_type}
            </span>
            {property.is_featured && (
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold">Featured</span>
            )}
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">{property.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" />
            {[property.locality, property.city, property.state, property.country].filter(Boolean).join(", ")}
          </p>

          <div className="mt-8 flex items-center justify-between gap-4 border-y border-border py-5">
            <span className="font-display text-3xl text-primary">
              {formatPriceFull(Number(property.price))}{property.listing_type === "rent" && <span className="text-base text-muted-foreground"> /mo</span>}
            </span>
            <div className="flex gap-2">
              <button onClick={() => toggle(property.id)} className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-gold">
                <Heart className={`h-3.5 w-3.5 ${fav ? "fill-gold text-gold" : ""}`} /> {fav ? "Saved" : "Save"}
              </button>
              <button onClick={share} className="flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-gold">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-5">
            <Spec icon={BedDouble} label="Bedrooms" value={property.bedrooms} />
            <Spec icon={Bath} label="Bathrooms" value={property.bathrooms} />
            <Spec icon={Maximize} label="Area" value={property.area_sqft ? `${property.area_sqft.toLocaleString()} ft²` : null} />
            <Spec icon={Car} label="Parking" value={property.parking} />
            <Spec icon={Calendar} label="Year built" value={property.year_built} />
          </div>

          <div className="mt-12">
            <p className="eyebrow">— About this residence</p>
            <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-foreground/85">{property.description}</p>
          </div>

          {property.amenities.length > 0 && (
            <div className="mt-12">
              <p className="eyebrow">— Amenities</p>
              <ul className="mt-4 grid grid-cols-2 gap-y-3 md:grid-cols-3">
                {property.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-foreground/85">
                    <span className="gold-rule" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-sm border border-border bg-card p-6">
            <p className="eyebrow">— Listing advisor</p>
            <p className="mt-3 font-display text-2xl text-primary">{property.agent_name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">EstateHub Private Office</p>
            <div className="mt-4 space-y-1 text-sm text-foreground/80">
              {property.agent_phone && <p>{property.agent_phone}</p>}
              {property.agent_email && <p>{property.agent_email}</p>}
            </div>
            <div className="my-6 h-px bg-border" />
            <InquiryForm propertyId={property.id} />
          </div>
        </aside>
      </section>
    </div>
  );
}

function Spec({ icon: Icon, label, value }: { icon: typeof Heart; label: string; value: number | string | null }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-gold" /> {label}
      </div>
      <p className="mt-1 font-display text-xl text-foreground">{value ?? "—"}</p>
    </div>
  );
}

function InquiryForm({ propertyId }: { propertyId: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("inquiries").insert({
      property_id: propertyId,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message || null,
    });
    setSubmitting(false);
    if (error) { toast.error("Couldn't send — please try again"); return; }
    toast.success("Inquiry sent. The advisor will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <p className="eyebrow">— Schedule a viewing</p>
      <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
      <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
      <Field label="Phone (optional)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Message</span>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="I'd like to schedule a private tour…"
          className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-gold"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-sm bg-primary px-4 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request a viewing"}
      </button>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-gold"
      />
    </label>
  );
}
