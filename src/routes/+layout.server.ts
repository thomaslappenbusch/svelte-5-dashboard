import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: LayoutServerLoad = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    console.log('Root layout server session check:', session?.user);
    
    return {
        session,
        userData: {
            email: session?.user?.email,
            id: session?.user?.id,
            lastSignIn: session?.user?.last_sign_in_at,
            created: session?.user?.created_at
        }
    };
};