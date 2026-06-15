export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-primary">Estate</span>
              <span className="font-display text-3xl text-gold italic">Hub</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              A curated marketplace of extraordinary residences, from coastal villas to landmark city homes.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} EstateHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
