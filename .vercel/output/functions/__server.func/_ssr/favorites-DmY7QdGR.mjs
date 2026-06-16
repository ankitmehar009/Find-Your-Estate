import { i as require_jsx_runtime, n as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as propertiesByIdsQuery } from "./queries-CykyLerm.mjs";
import { r as useFavorites } from "./use-favorites-CWRhjfQc.mjs";
import { c as Heart } from "../_libs/lucide-react.mjs";
import { t as PropertyCard } from "./property-card-B8cyNqeZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favorites-DmY7QdGR.js
var import_jsx_runtime = require_jsx_runtime();
function Favorites() {
	const { ids } = useFavorites();
	const { data: properties = [] } = useQuery(propertiesByIdsQuery(ids));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "— Your collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl md:text-5xl",
				children: "Saved residences"
			}),
			ids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border border-dashed border-border py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto h-8 w-8 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl",
						children: "No saved residences yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Tap the heart on any listing to save it here for later."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/browse",
						className: "mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground",
						children: "Browse residences"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: properties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
			})
		]
	});
}
//#endregion
export { Favorites as component };
