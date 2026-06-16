import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as literalType, r as objectType } from "../_libs/zod.mjs";
import { t as supabase } from "./client-Ku6KWlMY.mjs";
import { r as propertyQuery } from "./queries-CykyLerm.mjs";
import { n as formatPriceFull, r as useFavorites } from "./use-favorites-CWRhjfQc.mjs";
import { c as Heart, d as BedDouble, f as Bath, l as Car, m as ArrowLeft, o as Maximize, r as Share2, s as MapPin, u as Calendar } from "../_libs/lucide-react.mjs";
import { t as Route } from "./property._id-Dmj6aMgL.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-0zAsNGBQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inquirySchema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Valid email required").max(255),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	message: stringType().trim().max(2e3).optional().or(literalType(""))
});
function PropertyDetail() {
	const { id } = Route.useParams();
	const { data: property } = useQuery(propertyQuery(id));
	const { isFavorite, toggle } = useFavorites();
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	if (!property) return null;
	const fav = isFavorite(property.id);
	const share = async () => {
		const url = typeof window !== "undefined" ? window.location.href : "";
		try {
			if (navigator.share) await navigator.share({
				title: property.title,
				url
			});
			else {
				await navigator.clipboard.writeText(url);
				toast.success("Link copied");
			}
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-secondary/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 pb-6 pt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/browse",
				className: "inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground transition hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to browse"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-1 gap-3 md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/10] overflow-hidden rounded-sm bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: property.images[activeImg],
							alt: property.title,
							className: "h-full w-full object-cover"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-3 md:grid-cols-1",
					children: property.images.slice(0, 4).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveImg(i),
						className: `aspect-[4/3] overflow-hidden rounded-sm border-2 transition ${i === activeImg ? "border-gold" : "border-transparent opacity-80 hover:opacity-100"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, src))
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-3 lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary",
							children: ["For ", property.listing_type]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
							children: property.property_type
						}),
						property.is_featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold",
							children: "Featured"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: property.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex items-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), [
						property.locality,
						property.city,
						property.state,
						property.country
					].filter(Boolean).join(", ")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between gap-4 border-y border-border py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-3xl text-primary",
						children: [formatPriceFull(Number(property.price)), property.listing_type === "rent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base text-muted-foreground",
							children: " /mo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggle(property.id),
							className: "flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-3.5 w-3.5 ${fav ? "fill-gold text-gold" : ""}` }),
								" ",
								fav ? "Saved" : "Save"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: share,
							className: "flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5" }), " Share"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: BedDouble,
							label: "Bedrooms",
							value: property.bedrooms
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Bath,
							label: "Bathrooms",
							value: property.bathrooms
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Maximize,
							label: "Area",
							value: property.area_sqft ? `${property.area_sqft.toLocaleString()} ft²` : null
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Car,
							label: "Parking",
							value: property.parking
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
							icon: Calendar,
							label: "Year built",
							value: property.year_built
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "— About this residence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 whitespace-pre-line text-base leading-relaxed text-foreground/85",
						children: property.description
					})]
				}),
				property.amenities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "— Amenities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid grid-cols-2 gap-y-3 md:grid-cols-3",
						children: property.amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-sm text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule" }),
								" ",
								a
							]
						}, a))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-24 rounded-sm border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "— Listing advisor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl text-primary",
						children: property.agent_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: "EstateHub Private Office"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1 text-sm text-foreground/80",
						children: [property.agent_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: property.agent_phone }), property.agent_email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: property.agent_email })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, { propertyId: property.id })
				]
			})
		})]
	})] });
}
function Spec({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-gold" }),
			" ",
			label
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-display text-xl text-foreground",
		children: value ?? "—"
	})] });
}
function InquiryForm({ propertyId }) {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const onSubmit = async (e) => {
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
			message: parsed.data.message || null
		});
		setSubmitting(false);
		if (error) {
			toast.error("Couldn't send — please try again");
			return;
		}
		toast.success("Inquiry sent. The advisor will be in touch shortly.");
		setForm({
			name: "",
			email: "",
			phone: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "— Schedule a viewing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				value: form.name,
				onChange: (v) => setForm({
					...form,
					name: v
				}),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				type: "email",
				value: form.email,
				onChange: (v) => setForm({
					...form,
					email: v
				}),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone (optional)",
				value: form.phone,
				onChange: (v) => setForm({
					...form,
					phone: v
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 3,
					value: form.message,
					onChange: (e) => setForm({
						...form,
						message: e.target.value
					}),
					placeholder: "I'd like to schedule a private tour…",
					className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-gold"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: submitting,
				className: "w-full rounded-sm bg-primary px-4 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60",
				children: submitting ? "Sending…" : "Request a viewing"
			})
		]
	});
}
function Field({ label, value, onChange, type = "text", required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			required,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-gold"
		})]
	});
}
//#endregion
export { PropertyDetail as component };
