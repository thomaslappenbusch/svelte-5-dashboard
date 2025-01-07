import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load = (async ({ depends }) => {
    // Tell Svelte to re-run this load function when auth changes
    depends('supabase:auth');

    const { data: { session }, error } = await supabase.auth.getSession();
    
    return {
        session,
        userData: {
            email: session?.user?.email,
            id: session?.user?.id,
            lastSignIn: session?.user?.last_sign_in_at,
            created: session?.user?.created_at
        }
    };
}) satisfies LayoutServerLoad;