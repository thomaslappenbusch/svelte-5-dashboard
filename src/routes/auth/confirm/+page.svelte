<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { EmailOtpType } from '@supabase/supabase-js';

	const { data } = $props();
	let { supabase, url } = $derived(data);
	let verifyLoading = $state(true);
	let verifyError = $state('');

	const verifyEmail = async () => {
		const token_hash = url.searchParams.get('token_hash');
		const type = url.searchParams.get('type') as EmailOtpType | null;
		const next = url.searchParams.get('next') ?? '/';

		try {
			if (!token_hash || !type) {
				throw new Error('Invalid token');
			}
			const { error } = await supabase.auth.verifyOtp({ token_hash, type });

			if (error) {
				verifyError = error.message;
			}
		} catch (e) {
			console.error(e);
			verifyError = 'An unexpected error occurred';
		} finally {
			verifyLoading = false;
		}
	};

	onMount(() => {
		verifyEmail();
	});
</script>

<div class="w-screen h-screen bg-ui-bg flex items-center justify-center relative">
	<div class="absolute top-4 left-6 text-2xl text-ui-tx">SvelteDashboard</div>

	{#if verifyLoading}
		<div class="px-10 flex flex-col items-center justify-center w-[450px]">
			<p class="text-ui-tx-2 text-center mb-8">Loading...</p>
		</div>
	{:else if verifyError}
		<div class="px-10 flex flex-col items-center justify-center w-[450px]">
			<p class="text-ui-tx-2 text-center mb-8">{verifyError}</p>
		</div>
	{:else}
		<div class="px-10 flex flex-col items-center justify-center w-[450px]">
			<div
				class="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center mb-6"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
					<path
						fill="rgb(34,197,94)"
						d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
					/>
				</svg>
			</div>
			<div class="text-3xl mb-4 text-ui-tx text-center">Account Created!</div>
			<div class="text-ui-tx-2 text-center mb-8">
				Your account has been successfully created. You can now access the dashboard.
			</div>
			<button
				onclick={() => goto('/dashboard')}
				class="py-2 px-6 flex items-center justify-center border border-ui-br rounded-md hover:text-ui-tx text-sm hover:bg-ui-bg-2 transition focus:outline-none focus:border hover:border-ui-tx-3 text-ui-tx-3"
			>
				Continue to Dashboard
			</button>
		</div>
	{/if}
</div>
