<script lang="ts">
	import { goto } from "$app/navigation";


    let email = $state("")
    let password = $state("")
    let confirmPassword = $state("")
    let error = $state("")

    let hasEightChars = $derived(password.length >= 8);
    let hasSpecialChar = $derived(/[!@#$%^&*(),.?":{}|<>]/.test(password));

</script>

<div class="w-screen h-screen bg-ui-bg flex items-center justify-center relative">
    <div class="absolute top-4 left-6 text-2xl text-ui-tx">SvelteDashboard</div>
    <div class="px-10 flex flex-col items-start justify-start w-[450px]">
        <div class="text-3xl mb-6 text-ui-tx">Create an account</div>
        <div class="text-ui-tx text-sm mb-6">Already have an account? <button onclick={() => goto("/auth/login")} class="text-ui-tx-3 underline opacity-80 hover:opacity-100 hover:text-ui-tx-2 transition ml-[1px]">Login</button></div>
        <div class="flex flex-col w-full">
            <div class="text-ui-tx-2 mb-1 text-sm">Email</div>
            <input
            bind:value={email}
            class="border-ui-br bg-transparent border rounded-md w-full  focus:outline-none focus:border focus:border-ui-tx-3 transition duration-100 text-ui-tx px-2 py-1 placeholder-ui-br"
            placeholder="Enter your email address"
            />
        </div>
        <div class="flex flex-col w-full mt-5">
            <div class="text-ui-tx-2 mb-1 text-sm">Password</div>
            <input
            bind:value={password}
            type="password"
            class="border-ui-br bg-transparent border rounded-md w-full  focus:outline-none focus:border focus:border-ui-tx-3 transition duration-500 text-ui-tx px-2 py-1 placeholder-ui-br-h/50"
            placeholder="Create a strong password"
            />
        </div>
        <div class="flex flex-col mt-5 w-full">
            <div class="text-ui-tx-2 mb-1 text-sm">Confirm Password</div>
            <input
            bind:value={confirmPassword}
            type="password"
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
            <button class="py-2 flex items-center justify-center border border-ui-br w-full rounded-md text-ui-tx text-sm hover hover:bg-ui-bg-2 transition   focus:outline-none focus:border focus:border-ui-tx-3">Create Account</button>
        </div>
        <div class="flex items-center my-3 w-full">
            <div class="flex-grow h-[1px] bg-ui-br w-full"></div>
            <div class="mx-3 text-ui-tx-2 text-xs font-medium"> OR </div>
            <div class="flex-grow h-[1px] bg-ui-br w-full"></div>
        </div>
        <button class="py-2 flex items-center justify-center border border-ui-br w-full rounded-md text-sm hover hover:bg-ui-bg-2 transition   focus:outline-none focus:border focus:border-ui-tx-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#fff" d="M9.333 6.929L14.546 1H13.31L8.783 6.147L5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15zM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977l.552.776l4.623 6.47h-1.897z"/></svg>
            <div class="ml-2 text-ui-tx text-opacity-80">Continue with X </div>
        </button>
        <button class="py-2 flex items-center justify-center border mt-2 border-ui-br w-full rounded-md text-sm hover hover:bg-ui-bg-2 transition   focus:outline-none focus:border focus:border-ui-tx-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>            
            <div class="ml-2 text-ui-tx text-opacity-80">Continue with Google </div>
        </button>
    </div>
</div>