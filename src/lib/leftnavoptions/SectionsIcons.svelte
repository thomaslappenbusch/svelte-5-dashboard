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
    
    // Simple function to get an icon name based on text
    // In a real app, you'd probably pass this as a prop or use a mapping
    function getIconName(text: string): string {
        const icons: Record<string, string> = {
            'Overview': '📊',
            'Analytics': '📈',
            'Reports': '📑',
            'First': '1️⃣',
            'Second': '2️⃣',
            'Third': '3️⃣'
        };
        return icons[text] || '📎';
    }
</script>

{#each leftNavData as section, sectionIndex}
    <div class={`mb-6 ${sectionIndex > 0 ? 'mt-8' : ''}`}>
        <div class="flex items-center mb-3">
            <div class="h-px flex-grow bg-ui-br"></div>
            <span class="px-4 text-ui-tx-subhead font-medium">
                {section.title}
            </span>
            <div class="h-px flex-grow bg-ui-br"></div>
        </div>
        {#each section.items as text, itemIndex}
            {@const route = generateRoute(section.title, text)}
            <button 
                class="group w-full flex items-center space-x-3 p-2 rounded-lg mb-1 transition-all"
                class:bg-ui-bg-3={$page.url.pathname === route}
                class:text-ui-ac={$page.url.pathname === route}
                class:text-ui-tx-2={$page.url.pathname !== route}
                onclick={() => handleNavigation(route)}
            >
                <span class="text-lg w-6 text-center">
                    {getIconName(text)}
                </span>
                <span class="flex-grow text-left group-hover:translate-x-1 transition-transform">
                    {text}
                </span>
                {#if $page.url.pathname === route}
                    <span class="text-ui-ac">→</span>
                {/if}
            </button>
        {/each}
    </div>
{/each}