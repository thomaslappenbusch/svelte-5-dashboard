import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { supabase } from '$lib/supabase';

export const actions = {
    login: async ({ request }) => {
        const formData = await request.formData();
        const email = String(formData.get('email'));
        const password = String(formData.get('password'));

        console.log('Attempting login with:', email); // Log the attempt

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        console.log('Login response:', { data, error }); // Log the response

        if (error) {
            return fail(400, { message: error.message });
        }

        throw redirect(303, '/dashboard');
    }
} satisfies Actions;