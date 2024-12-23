<script lang="ts">
    import { fly, fade, slide } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
	import { removeAlert } from "../../stores/leftNavData";

    interface ComponentInterface {
        title?: string;
        leftIcon?: string;
        description?: string;
        size?: string;
        id?: string;
        index: any;
        'on:close'?: (event: CustomEvent<{ id: string }>) => void;
    }
    let { title, leftIcon , description, size , id, index }: ComponentInterface = $props();

</script>

{#if size === "small"}
    <div 
        transition:slide|local={{ duration: 300 }}
    >
        <div 
            class="h-12 group bg-ui-bg-3 rounded-md overflow-hidden relative flex justify-start items-center w-auto transition-transform duration-200 mb-3 {$isNavOpen ? 'hover:translate-x-2' : ''}"
            transition:fade|local={{ duration: 200 }}
        >
            <div class="absolute left-0 bottom-0 h-full w-[2px] {leftIcon === 'warning' ? 'bg-red-600' : leftIcon === 'hazard' ? 'bg-yellow-500' : 'bg-zinc-500'}"></div>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button 
                class="absolute top-[2px] right-[2px]"
                onclick={() => removeAlert(index)}
            >
                <svg class="text-ui-tx-3/20 group-hover:text-ui-tx-3 transition duration-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
            </button>
            
            <div class="h-full aspect-square flex items-center justify-center flex-shrink-0">
                {#if leftIcon === "warning"}
                    <svg class="text-red-600 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
                    </svg>
                {:else if leftIcon === "hazard"}
                    <svg class="text-yellow-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2zm1-2.5"/>
                    </svg>
                {:else if leftIcon === "avatar"}
                    <img 
                        src="https://avatars.githubusercontent.com/u/2" 
                        class="h-8 w-8 ml-[2px] rounded-full border border-zinc-500"
                        alt="User avatar"
                    />
                {/if}
            </div>

            <div class="flex-grow flex flex-col">
                {#if $isNavOpen}
                    <div 
                        in:fly={{ x: -5, duration: 100}}
                        out:fly={{ x: -5, duration: 100 }}
                        class="text-ui-tx text-sm font-medium truncate line-clamp-1"
                    >
                        {title}
                    </div>
                    <div 
                        in:fly={{ x: -5, duration: 100}}
                        out:fly={{ x: -5, duration: 100 }}
                        class="text-ui-tx-2 text-[11px] font-medium truncate line-clamp-1"
                    >
                        {description}
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}