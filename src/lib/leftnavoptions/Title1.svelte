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

<div class="flex items-center justify-between h-[34px] w-full relative">
    {#if $isNavOpen}
        <div 
            in:fly={{ x: -1, duration: 100}}
            out:fly={{ x: -5, duration: 50 }}  
            class="flex items-center justify-center absolute left-0"
        >
            <div class="text-white font-medium text-xl pointer-events-none">
                SvelteDashboard
            </div>
        </div>
    {:else}
        <div></div>
    {/if}
    <div></div>
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