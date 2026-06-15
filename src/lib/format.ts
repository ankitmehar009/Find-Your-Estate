export function formatPrice(price: number, listingType: string) {
  const compact = price >= 1_000_000
    ? `$${(price / 1_000_000).toFixed(price % 1_000_000 === 0 ? 0 : 2)}M`
    : price >= 1_000
      ? `$${(price / 1000).toFixed(0)}K`
      : `$${price.toLocaleString()}`;
  return listingType === "rent" ? `${compact}/mo` : compact;
}

export function formatPriceFull(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}
