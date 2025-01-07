<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { fade, fly } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
    
    let { data } = $props();
    
    // Flatten all items into a single array
    const allItems = data.flatMap((section: { items: any[]; }) => 
        section.items.map((item: { title: string; }) => ({
            ...item,
            route: `/dashboard/${item.title.toLowerCase().replace(' ', '-')}`
        }))
    );
    
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
        {#each allItems as item}
            <button 
                class="group flex items-center justify-start w-full h-full transition-colors group relative group"
                onclick={() => handleNavigation(item.route)}
            >
                <div class="absolute right-4 z-[1] group-hover:opacity-100 opacity-0 transition duration-200 group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="#fff" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/></svg>
                </div>
                <div 
                    class={`h-full w-[1px] transition-colors ${
                        $page.url.pathname === item.route 
                        ? 'bg-ui-ac' 
                        : 'bg-ui-br group-hover:bg-ui-tx-h'
                    }`}
                ></div>
                <div 
                    class={`relative py-[7px] pl-3 flex-grow flex justify-between items-center transition-transform duration-200 ease-out ${
                        $page.url.pathname === item.route
                        ? 'text-ui-ac bg-ui-bg-3'
                        : 'text-ui-tx-2 group-hover:text-ui-tx-h group-hover:translate-x-1'
                    }`}
                >
                    <span>{item.title}</span>
                </div>
            </button>
        {/each}
    </div>
{/if}