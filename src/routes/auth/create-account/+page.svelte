<script lang="ts">
    import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    import type { ActionResult } from '@sveltejs/kit';

    let email = $state("")
    let password = $state("")
    let confirmPassword = $state("")
    let error = $state("")
    let isSubmitting = $state(false)

    let hasEightChars = $derived(password.length >= 8);
    let hasSpecialChar = $derived(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    let isValid = $derived(
        hasEightChars && 
        hasSpecialChar && 
        password === confirmPassword && 
        email.includes('@')
    );

    interface FormResult {
        message: string;
        [key: string]: unknown;
    }

    const handleSubmit = () => {
        return async ({ result, update }: { 
            result: ActionResult,
            update: () => Promise<void> 
        }) => {
            isSubmitting = true;
            try {
                if (result.type === 'failure') {
                    error = result.data?.message as string || 'Something went wrong';
                } else if (result.type === 'redirect') {
                    await goto(result.location);
                } else if (result.type === 'success') {
                    await update();
                }
            } catch (e) {
                error = 'An unexpected error occurred';
            } finally {
                isSubmitting = false;
            }
        };
    };
</script>

<div class="w-screen h-screen bg-ui-bg flex items-center justify-center relative">
    <div class="absolute top-4 left-6 text-2xl text-ui-tx">SvelteDashboard</div>
    <div class="px-10 flex flex-col items-start justify-start w-[450px]">
        <div class="text-3xl mb-6 text-ui-tx">Create an account</div>
        <div class="text-ui-tx text-sm mb-6">
            Already have an account? 
            <button 
                type="button"
                onclick={() => goto("/auth/login")} 
                class="text-ui-tx-3 underline opacity-80 hover:opacity-100 hover:text-ui-tx-2 transition ml-[1px]"
            >
                Login
            </button>
        </div>
        
        <form class="w-full" method="POST" action="?/emailSignUp" use:enhance={handleSubmit}>
            <div class="flex flex-col w-full">
                <div class="text-ui-tx-2 mb-1 text-sm">Email</div>
                <input
                    name="email"
                    type="email"
                    required
                    bind:value={email}
                    class="border-ui-br bg-transparent border rounded-md w-full focus:outline-none focus:border focus:border-ui-tx-3 transition duration-100 text-ui-tx px-2 py-1 placeholder-ui-br"
                    placeholder="Enter your email address"
                />
            </div>

            <div class="flex flex-col w-full mt-5">
                <div class="text-ui-tx-2 mb-1 text-sm">Password</div>
                <input
                    name="password"
                    type="password"
                    required
                    bind:value={password}
                    class="border-ui-br bg-transparent border rounded-md w-full focus:outline-none focus:border focus:border-ui-tx-3 transition duration-500 text-ui-tx px-2 py-1 placeholder-ui-br-h/50"
                    placeholder="Create a strong password"
                />
            </div>

            <div class="flex flex-col mt-5 w-full">
                <div class="text-ui-tx-2 mb-1 text-sm">Confirm Password</div>
                <input
                    name="confirmPassword"
                    type="password"
                    required
                    bind:value={confirmPassword}
                    class="border-ui-br bg-transparent border rounded-md w-full focus:outline-none focus:border focus:border-ui-tx-3 transition duration-100 text-ui-tx px-2 py-1"
                />
            </div>

            <div class="flex flex-col mt-3 w-full">
                <div class="flex items-center">
                    <div class="h-4 w-4 border-ui-br border rounded-full flex items-center justify-center">
                        {#if hasEightChars}
                            <svg class="opacity-80" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                <path fill="#fff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                            </svg>
                        {/if}
                    </div>
                    <div class="text-ui-tx-2 text-xs ml-2 -mt-[1px]">8 or more characters</div>
                </div>
                
                <div class="flex items-center mt-2">
                    <div class="h-4 w-4 border-ui-br border rounded-full flex items-center justify-center">
                        {#if hasSpecialChar}
                            <svg class="opacity-80" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                <path fill="#fff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                            </svg>
                        {/if}
                    </div>
                    <div class="text-ui-tx-2 text-xs ml-2 -mt-[1px]">One special character</div>
                </div>
            </div>

            <div class="flex flex-col items-start justify-center mt-5 w-full">
                {#if error}
                    <div class="text-sm mb-1 text-red-700">Error: {error}</div>
                {/if}
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    class="py-2 flex items-center justify-center border border-ui-br w-full rounded-md text-ui-tx text-sm hover:bg-ui-bg-2 transition focus:outline-none focus:border focus:border-ui-tx-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {#if isSubmitting}
                        Creating Account...
                    {:else}
                        Create Account
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>