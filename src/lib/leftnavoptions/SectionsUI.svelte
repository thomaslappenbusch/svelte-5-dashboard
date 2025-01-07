<script lang="ts">
    
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
	import { fly } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
    
    let { data } = $props();
    
    function handleNavigation(sectionTitle: string, itemTitle: string) {
        const route = `/dashboard/${itemTitle.toLowerCase().replace(' ', '-')}`;
        goto(route);
    }
    
</script>

{#if $isNavOpen}
    <div transition:fly={{ duration: 100}} class="w-full flex flex-col space-y-6">
        {#each data as section, sectionIndex}
            <div class="flex flex-col space-y-1">
                <!-- Section Header (hidden for first section) -->
                {#if sectionIndex !== 0}
                    <div class="pl-1 text-ui-tx-3 text-xs font-medium uppercase tracking-wider mb-2">
                        {section.title}
                    </div>
                {/if}
                
                <!-- Section Items -->
                <div class="flex flex-col space-y-[2px]">
                    {#each section.items as item}
                        {@const route = `/dashboard/${item.title.toLowerCase().replace(' ', '-')}`}
                        <button 
                            class="w-full text-left h-[36px] pl-3 border rounded-lg {
                                $page.url.pathname === route 
                                    ? 'bg-ui-bg-2 text-ui-tx border-ui-br font-medium' 
                                    : 'text-ui-tx-2 border-transparent'
                            }"
                            onclick={() => handleNavigation(section.title, item.title)}
                        >
                            <div class="flex items-center justify-between">
                                <span class="relative">{item.title}</span>
                                {#if item.totalNotifications > 0}
                                    <span class="text-xs bg-ui-bg-3 w-[30px] px-[12px] py-[2px] rounded-full">
                                        {item.totalNotifications}
                                    </span>
                                {/if}
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
{/if}