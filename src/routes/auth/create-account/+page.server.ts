import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { supabase } from '$lib/supabase';

export const actions = {
    emailSignUp: async ({ request }) => {
        const formData = await request.formData();
        const email = String(formData.get('email'));
        const password = String(formData.get('password'));

        // Create account with email confirmation disabled
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    email_confirmed: true
                }
            }
        });

        if (signUpError) {
            console.error('Signup Error:', signUpError);
            return fail(400, { message: signUpError.message });
        }

        // Sign them in immediately
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (signInError) {
            console.error('SignIn Error:', signInError);
            return fail(400, { message: signInError.message });
        }

        console.log('Successfully signed in:', signInData);
        throw redirect(303, '/auth/success');
    }
} satisfies Actions;