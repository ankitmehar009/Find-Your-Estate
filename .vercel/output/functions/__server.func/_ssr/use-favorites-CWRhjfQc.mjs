import { r as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-favorites-CWRhjfQc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function formatPrice(price, listingType) {
	const compact = price >= 1e6 ? `$${(price / 1e6).toFixed(price % 1e6 === 0 ? 0 : 2)}M` : price >= 1e3 ? `$${(price / 1e3).toFixed(0)}K` : `$${price.toLocaleString()}`;
	return listingType === "rent" ? `${compact}/mo` : compact;
}
function formatPriceFull(price) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(price);
}
var KEY = "estatehub:favorites";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function useFavorites() {
	const [ids, setIds] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setIds(read());
		const onStorage = (e) => {
			if (e.key === KEY) setIds(read());
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);
	return {
		ids,
		toggle: (0, import_react.useCallback)((id) => {
			setIds((prev) => {
				const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
				window.localStorage.setItem(KEY, JSON.stringify(next));
				return next;
			});
		}, []),
		isFavorite: (0, import_react.useCallback)((id) => ids.includes(id), [ids])
	};
}
//#endregion
export { formatPriceFull as n, useFavorites as r, formatPrice as t };
