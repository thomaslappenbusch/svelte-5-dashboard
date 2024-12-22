<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    let { leftNavData } = $props();
    
    function generateRoute(sectionTitle: string, itemName: string): string {
        const baseRoute = sectionTitle.toLowerCase() === 'dashboard' 
            ? '' 
            : sectionTitle.toLowerCase().replace(' ', '-');
        const itemRoute = itemName.toLowerCase().replace(' ', '-');
        return `/${baseRoute}${baseRoute ? '/' : ''}${itemRoute}`;
    }
    
    function handleNavigation(route: string) {
        goto(route);
    }
</script>

{#each leftNavData as section, sectionIndex}
    <div class={`text-sm mb-4 ${sectionIndex > 0 ? 'mt-6' : ''}`}>
        <div class="text-ui-tx-subhead font-medium mb-2">
            {section.title}
        </div>
        {#each section.items as text, itemIndex}
            {@const route = generateRoute(section.title, text)}
            <button 
                class="group w-full text-left mb-1"
                onclick={() => handleNavigation(route)}
            >
                <div 
                    class={`px-3 py-2 rounded-md transition-colors ${
                        $page.url.pathname === route 
                        ? 'bg-ui-bg-3 text-ui-ac' 
                        : 'text-ui-tx-2 hover:bg-ui-bg-2 hover:text-ui-tx'
                    }`}
                >
                    {text}
                </div>
            </button>
        {/each}
    </div>
{/each}