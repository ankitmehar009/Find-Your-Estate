import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-Ku6KWlMY.js
function createSupabaseClient() {
	return createClient("https://zlzsehdbcmhdkhexyohi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsenNlaGRiY21oZGtoZXh5b2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MTQ3NTIsImV4cCI6MjA5NzA5MDc1Mn0.Zkf0TdFvrVzkFM7N33OitnvNu7rMGZkSe8nt91IuM_I", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
