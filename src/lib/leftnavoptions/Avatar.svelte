<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
    import { supabase } from "$lib/supabase";
 
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
 
    async function handleLogout() {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            goto('/auth/login');
        } else {
            console.error('Error logging out:', error);
        }
    }
 </script>
 
 
 <div class="h-10 flex items-center justify-start mt-2 w-full">
    <div class="relative h-10 w-10 flex-shrink-0">
        <img 
            alt="currentUser" 
            src="https://avatars.githubusercontent.com/u/19" 
            class="h-10 w-10 rounded-full border border-zinc-500 opacity-80"
        />
        {#if data.statusColor}
            <div class="absolute right-0 bottom-[2px] h-[10px] w-[10px] {data.statusColor} rounded-full"></div>
        {/if}
    </div>
    {#if $isNavOpen}
        <div in:fade={{ duration: 100}} class="flex flex-col justify-center items-start ml-3 min-w-0 flex-grow">
            <div class="text-ui-tx w-full truncate pb-[1px]">thomaslappenbusch@gmail.com</div>
            <div class="flex items-center">
                <button 
                    class="flex items-center px-1 py-[1px] rounded-md border border-ui-br space-x-[2px]"
                    onclick={handleLogout}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#fff" d="M3 21V3h9v2H5v14h7v2zm13-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg>
                    <span class="text-[10px] text-ui-tx-2 font-medium">Logout</span>
                </button>
            </div>
        </div>
    {/if}
 </div>