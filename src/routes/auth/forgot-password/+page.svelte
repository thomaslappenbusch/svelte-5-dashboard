<script lang="ts">
	import { goto } from "$app/navigation";

    let email = $state("")
    let error = $state("")
    let success = $state(false)
</script>

<div class="w-screen h-screen bg-ui-bg flex items-center justify-center relative">
    <div class="absolute top-4 left-6 text-2xl text-ui-tx">SvelteDashboard</div>
    <div class="px-10 flex flex-col items-start justify-start w-[450px]">
        <div class="text-3xl mb-4 text-ui-tx">Reset password</div>
        <div class="text-ui-tx-2 mb-6">Enter your email address and we'll send you instructions to reset your password.</div>
        
        {#if !success}
            <div class="flex flex-col w-full">
                <div class="text-ui-tx-2 mb-1 text-sm">Email</div>
                <input
                    bind:value={email}
                    class="border-ui-br bg-transparent border rounded-md w-full focus:outline-none focus:border focus:border-ui-tx-3 transition duration-500 text-ui-tx px-2 py-1 placeholder-ui-br-h/50"
                    placeholder="Enter your email address"
                />
            </div>
            <div class="flex flex-col items-start justify-center mt-5 w-full">
                {#if error}
                    <div class="text-sm mb-1 text-red-700">Error: {error}</div>
                {/if}
                <button class="py-2 flex items-center justify-center border border-ui-br w-full rounded-md text-ui-tx text-sm hover:bg-ui-bg-2 transition focus:outline-none focus:border focus:border-ui-tx-3">
                    Send Reset Link
                </button>
            </div>
        {:else}
            <div class="w-full p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                Check your email for password reset instructions.
            </div>
        {/if}
        
        <div class="mt-4 text-ui-tx text-sm">
            Remember your password? <button onclick={() => goto("/auth/login")} class="text-ui-tx-3 underline opacity-80 hover:opacity-100 hover:text-ui-tx-2 transition ml-[1px]">Back to login</button>
        </div>
    </div>
</div>