<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
	import { fade, fly } from "svelte/transition";
	import { isNavOpen } from "../../stores/navigation";
    

    let { leftNavData } = $props();
	
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

{#if $isNavOpen}
    <div 
        in:fly={{ x: -5, duration: 100}}
        out:fly={{ x: -5, duration: 200 }}
        class="w-full flex flex-col"
    >
        {#each leftNavData as section, sectionIndex}
            <div class="flex flex-col h-full"> <!-- Added wrapper for section -->
                <div class={`font-semibold text-sm mb-3 ${sectionIndex > 0 ? 'mt-5' : ''} text-ui-tx-subhead`}>
                    {section.title}
                </div>
                {#each section.items as text, itemIndex}
                    {@const route = generateRoute(section.title, text)}
                    <button 
                        class="group flex items-center justify-start pl-2 w-full h-full transition-colors group"
                        onclick={() => handleNavigation(route)}
                    >
                        <div 
                            class={`h-full w-[1px] transition-colors ${
                                $page.url.pathname === route 
                                ? 'bg-ui-ac' 
                                : 'bg-ui-br group-hover:bg-ui-tx-h'
                            }`}
                        ></div>
                        <div 
                            class={`relative py-[5px] pl-3 flex-grow flex justify-start transition-transform duration-200 ease-out ${
                                $page.url.pathname === route
                                ? 'text-ui-ac bg-ui-bg-3'
                                : 'text-ui-tx-2 group-hover:text-ui-tx-h group-hover:translate-x-1'
                            }`}
                        >
                            {text}
                        </div>
                    </button>
                {/each}
            </div>
        {/each}
    </div>
{/if}