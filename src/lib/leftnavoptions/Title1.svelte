<script lang="ts">
    import { goto } from "$app/navigation";
	import { get } from "svelte/store";
    import { isNavOpen } from "../../stores/navigation";   
    
    function toggleNav() {
        isNavOpen.update(value => !value);
        console.log('Nav is open:', get(isNavOpen));
    }

    interface ComponentInterface {
        title: string;
        logo?: string;
    }

    let props: ComponentInterface = $props();
    let { title, logo } = props;

</script>

<div class="flex items-center justify-between h-[36px] mb-8 w-full">
    {#if $isNavOpen}
        <div class="text-white text-3xl">{title}</div>
    {:else}
        <div></div>
    {/if}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button onclick={toggleNav} class="text-xs group w-12 flex items-center justify-center">
        <svg class={`text-ui-tx-2 group-hover:text-ui-tx transition-colors duration-500 ${$isNavOpen ? '' : 'rotate-180 scale-110'}`} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 16l-4-4l4-4M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"/></svg>
    </button>
</div>