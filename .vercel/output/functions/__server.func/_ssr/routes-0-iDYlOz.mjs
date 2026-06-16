import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as propertiesQuery } from "./queries-CykyLerm.mjs";
import { i as Search, p as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PropertyCard } from "./property-card-B8cyNqeZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0-iDYlOz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-BOUdm4Ks.jpg";
function Home() {
	const { data: properties = [] } = useQuery(propertiesQuery());
	const featured = properties.filter((p) => p.is_featured).slice(0, 3);
	const recent = properties.slice(0, 6);
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "",
					width: 1920,
					height: 1080,
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 pb-28 pt-32 md:pb-40 md:pt-48",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "— A curated marketplace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-primary-foreground md:text-7xl",
						children: [
							"Extraordinary ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-display italic text-gold",
								children: "homes"
							}),
							",",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in the world's most coveted places."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-primary-foreground/85",
						children: "From cliffside villas in the Mediterranean to landmark penthouses in Manhattan — each residence is hand-selected by our advisors."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							navigate({
								to: "/browse",
								search: { q }
							});
						},
						className: "mt-10 flex max-w-2xl items-center gap-2 rounded-sm border border-primary-foreground/20 bg-background/95 p-2 shadow-2xl backdrop-blur",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-3 h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search by city, neighborhood, or country…",
								className: "flex-1 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-sm bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90",
								children: "Search"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.22em] text-primary-foreground/85",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "240+",
								l: "Residences"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "32",
								l: "Countries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "$4.2B",
								l: "Sold"
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "— Featured residences"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "This month's selection"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/browse",
					className: "hidden items-center gap-2 text-sm uppercase tracking-[0.22em] text-primary transition hover:text-gold md:flex",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4 md:py-20",
				children: [
					{
						type: "villa",
						label: "Villas"
					},
					{
						type: "apartment",
						label: "Apartments"
					},
					{
						type: "house",
						label: "Houses"
					},
					{
						type: "commercial",
						label: "Commercial"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/browse",
					search: { type: c.type },
					className: "group block border-l border-border pl-5 transition hover:border-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Discover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl text-foreground transition group-hover:text-primary",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground",
							children: ["Browse ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 inline h-3 w-3" })]
						})
					]
				}, c.type))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "— New to market"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl md:text-5xl",
					children: "Recently listed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
					children: recent.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
				})
			]
		})
	] });
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl normal-case tracking-normal text-gold",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l })]
	});
}
//#endregion
export { Home as component };
