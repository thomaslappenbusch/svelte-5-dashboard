<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
	import { fade } from "svelte/transition";
	import { isNavOpen } from "../../stores/navigation";
	

    let { data } = $props();
	
	// Generate route from section title and item name
	function generateRoute(sectionTitle: string, itemName: string): string {
		const baseRoute = sectionTitle.toLowerCase() === 'dashboard' 
			? '' 
			: sectionTitle.toLowerCase().replace(' ', '-');
		const itemRoute = itemName.toLowerCase().replace(' ', '-');
		return `/${baseRoute}${baseRoute ? '/' : ''}${itemRoute}`;
	}
	
	// Handle navigation
	function handleNavigation(route: string) {
		goto(route);
	}

</script>


<div class="w-full h-12 flex items-center justify-start mt-2">
    <div class="relative h-12 w-12 flex-shrink-0">
        <img 
            alt="currentUser" 
            src="https://avatars.githubusercontent.com/u/19" 
            class="h-12 w-12 rounded-full border border-zinc-500 opacity-80"
        />
        {#if data.statusColor}
            <div class="absolute right-0 bottom-[2px] h-[10px] w-[10px] {data.statusColor} rounded-full"></div>
        {/if}
    </div>
    {#if $isNavOpen}
        <div in:fade={{ duration: 100}} class="flex flex-col justify-center items-start ml-3">
            <div class="text-ui-tx text-lg line-clamp-1 truncate">{data.username}</div>
            <div class="text-ui-tx-2 text-xs font-medium">{data.line}</div>
        </div>
    {/if}
</div>
