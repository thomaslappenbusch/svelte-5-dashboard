<script lang="ts">
    import { goto } from "$app/navigation";
    import { get } from "svelte/store";
    import { isNavOpen } from "../../stores/navigation";   
    import { fly } from "svelte/transition";
    import { CloudRainWind } from "lucide-svelte";
    
    function toggleNav() {
        isNavOpen.update(value => !value);
        console.log('Nav is open:', get(isNavOpen));
    }

    interface TitleInterface {
        string: string;
        logo?: string;
    }

    interface ComponentInterface {
        title: TitleInterface;
    }

    let props: ComponentInterface = $props();
    let { title } = props;
</script>

<div class="flex items-center justify-between h-[34px] w-full">
    {#if $isNavOpen}
        <div 
            in:fly={{ x: -5, duration: 100, delay: 50}}
            out:fly={{ x: -5, duration: 100 }}  
            class="flex items-center justify-center"
        >
            {#if title.logo}
                <div class="h-8 w-8 border border-ui-br mr-2 rounded-md flex items-center justify-center">
                    <svg class="text-cyan-400 p-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 40a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h168a6 6 0 0 1 6 6m-48 32a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h144a6 6 0 0 0 6-6m-16 32a6 6 0 0 0-6-6H56a6 6 0 0 0 0 12h104a6 6 0 0 0 6-6m16 32a6 6 0 0 0-6-6H88a6 6 0 0 0 0 12h88a6 6 0 0 0 6-6m2 26h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-24 32h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-32 32h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"/></svg>
                </div>
            {/if}
            <div class="text-white font-medium text-xl">
                TailwindBG
            </div>
        </div>
    {:else}
        <div></div>
    {/if}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button 
        onclick={toggleNav} 
        class="text-xs group w-12 flex items-center justify-center"
    >
        <svg  
            class={`text-ui-tx-3 group-hover:text-ui-tx-2 transition-colors w-7 h-7 duration-500 border p-[3px] pl-[5px] rounded-md border-ui-br-h hover:border-ui-tx-3 ${$isNavOpen ? 'ml-5' : 'rotate-180 scale-110'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
        >
            <path fill="currentColor" d="M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5zM4 12V2H2v20h2z"/>
        </svg>
    </button>
</div>