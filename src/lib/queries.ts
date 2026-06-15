import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Property } from "./types";

export const propertiesQuery = (filters?: {
  search?: string;
  type?: string;
  listing?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  sort?: string;
}) =>
  queryOptions({
    queryKey: ["properties", filters ?? {}],
    queryFn: async () => {
      let q = supabase.from("properties").select("*");
      if (filters?.type && filters.type !== "all") q = q.eq("property_type", filters.type);
      if (filters?.listing && filters.listing !== "all") q = q.eq("listing_type", filters.listing);
      if (filters?.minPrice) q = q.gte("price", filters.minPrice);
      if (filters?.maxPrice) q = q.lte("price", filters.maxPrice);
      if (filters?.beds) q = q.gte("bedrooms", filters.beds);
      if (filters?.search) q = q.or(`title.ilike.%${filters.search}%,city.ilike.%${filters.search}%,locality.ilike.%${filters.search}%,country.ilike.%${filters.search}%`);

      switch (filters?.sort) {
        case "price_asc": q = q.order("price", { ascending: true }); break;
        case "price_desc": q = q.order("price", { ascending: false }); break;
        case "views": q = q.order("views", { ascending: false }); break;
        default: q = q.order("created_at", { ascending: false });
      }
      const { data, error } = await q;
      if (error) throw error;
      return data as Property[];
    },
  });

export const propertyQuery = (id: string) =>
  queryOptions({
    queryKey: ["property", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return data as Property | null;
    },
  });

export const propertiesByIdsQuery = (ids: string[]) =>
  queryOptions({
    queryKey: ["properties", "byIds", [...ids].sort()],
    queryFn: async () => {
      if (ids.length === 0) return [] as Property[];
      const { data, error } = await supabase.from("properties").select("*").in("id", ids);
      if (error) throw error;
      return data as Property[];
    },
  });
