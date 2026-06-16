import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./browse-CwXpStVl.mjs";
import { n as propertiesQuery } from "./queries-CykyLerm.mjs";
import { i as Search, n as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { t as PropertyCard } from "./property-card-B8cyNqeZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/browse-C6dmHfSO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Browse() {
	const search = Route.useSearch();
	const navigate = useNavigate({ from: "/browse" });
	const [searchInput, setSearchInput] = (0, import_react.useState)(search.q ?? "");
	const { data: properties = [], isLoading } = useQuery(propertiesQuery((0, import_react.useMemo)(() => ({
		search: search.q,
		type: search.type,
		listing: search.listing,
		beds: search.beds,
		minPrice: search.minPrice,
		maxPrice: search.maxPrice,
		sort: search.sort
	}), [search])));
	const update = (patch) => navigate({ search: (prev) => ({
		...prev,
		...patch
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "— The Collection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl md:text-5xl",
					children: "Browse residences"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					update({ q: searchInput || void 0 });
				},
				className: "mt-8 flex items-center gap-2 rounded-sm border border-border bg-background p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-3 h-4 w-4 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: searchInput,
						onChange: (e) => setSearchInput(e.target.value),
						placeholder: "City, neighborhood, country…",
						className: "flex-1 bg-transparent px-2 py-2.5 text-sm outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground",
						children: "Search"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3 border-y border-border py-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Type",
						value: search.type ?? "all",
						onChange: (v) => update({ type: v === "all" ? void 0 : v }),
						options: [
							["all", "All types"],
							["villa", "Villa"],
							["house", "House"],
							["apartment", "Apartment"],
							["commercial", "Commercial"],
							["land", "Land"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "For",
						value: search.listing ?? "all",
						onChange: (v) => update({ listing: v === "all" ? void 0 : v }),
						options: [
							["all", "Buy & Rent"],
							["sale", "For sale"],
							["rent", "For rent"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Beds",
						value: String(search.beds ?? 0),
						onChange: (v) => update({ beds: Number(v) || void 0 }),
						options: [
							["0", "Any beds"],
							["1", "1+"],
							["2", "2+"],
							["3", "3+"],
							["4", "4+"],
							["5", "5+"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Max price",
						value: String(search.maxPrice ?? 0),
						onChange: (v) => update({ maxPrice: Number(v) || void 0 }),
						options: [
							["0", "Any price"],
							["20000", "Up to $20K"],
							["1000000", "Up to $1M"],
							["5000000", "Up to $5M"],
							["10000000", "Up to $10M"],
							["50000000", "Up to $50M"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: "Sort",
							value: search.sort ?? "latest",
							onChange: (v) => update({ sort: v === "latest" ? void 0 : v }),
							options: [
								["latest", "Latest"],
								["price_asc", "Price ↑"],
								["price_desc", "Price ↓"],
								["views", "Most viewed"]
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground",
				children: isLoading ? "Loading…" : `${properties.length} residence${properties.length === 1 ? "" : "s"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: properties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
			}),
			!isLoading && properties.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border border-dashed border-border py-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "No residences match your filters."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try widening your search or removing a filter."
				})]
			})
		]
	});
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "rounded-sm border border-border bg-background px-3 py-2 text-xs uppercase tracking-[0.18em] text-foreground outline-none focus:border-gold",
			children: options.map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: v,
				children: l
			}, v))
		})]
	});
}
//#endregion
export { Browse as component };
