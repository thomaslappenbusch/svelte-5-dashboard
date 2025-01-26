<script>
	import '../app.css';
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();
	let { session, supabase, url, user } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			console.log('onAuthStateChange', event, newSession);

			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
				console.log('invalidate supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

{@render children()}
