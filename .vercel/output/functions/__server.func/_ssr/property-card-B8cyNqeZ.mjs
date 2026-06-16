import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useFavorites, t as formatPrice } from "./use-favorites-CWRhjfQc.mjs";
import { c as Heart, d as BedDouble, f as Bath, o as Maximize } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property-card-B8cyNqeZ.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property }) {
	const { isFavorite, toggle } = useFavorites();
	const fav = isFavorite(property.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/property/$id",
		params: { id: property.id },
		className: "group block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-sm bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] w-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: property.images[0],
						alt: property.title,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						toggle(property.id);
					},
					className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition hover:bg-background",
					"aria-label": "Save",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 transition ${fav ? "fill-gold text-gold" : "text-foreground/70"}` })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-3 top-3 flex items-center gap-2",
					children: [property.is_featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/95 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground",
						children: "Featured"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/80 backdrop-blur",
						children: ["For ", property.listing_type]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-tight text-foreground transition group-hover:text-primary",
						children: property.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-display text-xl text-primary",
						children: formatPrice(Number(property.price), property.listing_type)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						property.locality,
						property.city,
						property.country
					].filter(Boolean).join(", ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-5 text-xs text-foreground/70",
					children: [
						property.bedrooms != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-3.5 w-3.5 text-gold" }),
								property.bedrooms,
								" Beds"
							]
						}),
						property.bathrooms != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "h-3.5 w-3.5 text-gold" }),
								property.bathrooms,
								" Baths"
							]
						}),
						property.area_sqft != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "h-3.5 w-3.5 text-gold" }),
								property.area_sqft.toLocaleString(),
								" ft²"
							]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { PropertyCard as t };
