import { fail, redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
// eg for signup
//   signup: async ({ request, locals: { supabase } }) => {
//     const formData = await request.formData()
//     const email = formData.get('email') as string
//     const password = formData.get('password') as string

//     const { error } = await supabase.auth.signUp({ email, password })
//     if (error) {
//       console.error(error)
//       redirect(303, '/auth/error')
//     } else {
//       redirect(303, '/')
//     }
//   },

  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        return fail(400, { message: error.message });
    }

    throw redirect(303, '/dashboard');
  },
}
