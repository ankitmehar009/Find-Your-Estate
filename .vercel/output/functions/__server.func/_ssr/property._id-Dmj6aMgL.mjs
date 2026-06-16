import { M as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as propertyQuery } from "./queries-CykyLerm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-Dmj6aMgL.js
var $$splitComponentImporter = () => import("./property._id-0zAsNGBQ.mjs");
var Route = createFileRoute("/property/$id")({
	loader: async ({ params, context }) => {
		const data = await context.queryClient.ensureQueryData(propertyQuery(params.id));
		if (!data) throw notFound();
		return data;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — EstateHub` },
		{
			name: "description",
			content: loaderData.description.slice(0, 160)
		},
		{
			property: "og:title",
			content: loaderData.title
		},
		{
			property: "og:description",
			content: loaderData.description.slice(0, 160)
		},
		{
			property: "og:image",
			content: loaderData.images[0]
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:image",
			content: loaderData.images[0]
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
