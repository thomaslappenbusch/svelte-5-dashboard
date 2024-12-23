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
        <div class="text-white text-2xl">{title}</div>
    {:else}
        <div></div>
    {/if}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button onclick={toggleNav} class="text-xs group w-12 flex items-center justify-center">
        <svg  class={`text-ui-tx-3 group-hover:text-ui-tx-2 transition-colors w-7 h-7 duration-500 border p-[3px] pl-[5px] rounded-md border-ui-br-h hover:border-ui-tx-3 ${$isNavOpen ? 'ml-5' : 'rotate-180 scale-110'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5zM4 12V2H2v20h2z"/></svg>
    </button>
</div>