<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { fade, fly } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
    
    let { data } = $props();
    
    // Generate route from section title and item title
    function generateRoute(sectionTitle: string, item: { title: string; totalNotifications: number }): string {
        // Always start with /dashboard
        const basePath = '/dashboard';
        
        // If section is Dashboard, only append the item route
        if (sectionTitle.toLowerCase() === 'dashboard') {
            const itemRoute = item.title.toLowerCase().replace(' ', '-');
            return `${basePath}/${itemRoute}`;
        }
        
        // For other sections, include both section and item in the route
        const sectionRoute = sectionTitle.toLowerCase().replace(' ', '-');
        const itemRoute = item.title.toLowerCase().replace(' ', '-');
        return `${basePath}/${sectionRoute}/${itemRoute}`;
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
        {#each data as section, sectionIndex}
            <div class="flex flex-col h-full">
                <div class={`font-semibold text-sm mb-3 ${sectionIndex > 0 ? 'mt-5' : ''} text-ui-tx-subhead`}>
                    {section.title}
                </div>
                {#each section.items as item, itemIndex}
                    {@const route = generateRoute(section.title, item)}
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
                            class={`relative py-[5px] pl-3 flex-grow flex justify-between items-center transition-transform duration-200 ease-out ${
                                $page.url.pathname === route
                                ? 'text-ui-ac bg-ui-bg-3'
                                : 'text-ui-tx-2 group-hover:text-ui-tx-h group-hover:translate-x-1'
                            }`}
                        >
                            <span>{item.title}</span>
                            {#if item.totalNotifications > 0}
                                <div 
                                    class="mr-3 text-ui-tx rounded-full p-1 flex items-center justify-center h-4 w-4 text-[12px] font-thin"
                                >
                                    {item.totalNotifications}
                                </div>
                            {/if}
                        </div>
                    </button>
                {/each}
            </div>
        {/each}
    </div>
{/if}