import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, r as objectType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/browse-CwXpStVl.js
var $$splitComponentImporter = () => import("./browse-C6dmHfSO.mjs");
var searchSchema = objectType({
	q: stringType().optional(),
	type: stringType().optional(),
	listing: stringType().optional(),
	beds: coerce.number().optional(),
	minPrice: coerce.number().optional(),
	maxPrice: coerce.number().optional(),
	sort: stringType().optional()
});
var Route = createFileRoute("/browse")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({ meta: [{ title: "Browse Residences — EstateHub" }, {
		name: "description",
		content: "Search luxury homes by location, type, price, and bedrooms across our curated worldwide portfolio."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
