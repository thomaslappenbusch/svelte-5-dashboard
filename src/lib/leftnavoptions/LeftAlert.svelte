<script lang="ts">
    import { fly, fade, slide } from "svelte/transition";
    import { isNavOpen } from "../../stores/navigation";
    import { navStore } from "../../stores/leftNavData";

    interface ComponentInterface {
        title?: string;
        leftIcon?: "avatar" | "warning" | "hazard";
        description?: string;
        size?: string;
        id: number; // Changed to number to match store type
        index: number;
        'on:close'?: (event: CustomEvent<{ id: number }>) => void;
    }

    let { title, leftIcon, description, size, id, index }: ComponentInterface = $props();

    async function handleDelete() {
        console.log('Attempting to delete alert with ID:', id);
        navStore.deleteAlert(id);
    }

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
                onclick={handleDelete}
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
                {:else if leftIcon === "success"}
                    <svg class="text-green-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/>
                    </svg>
                {:else if leftIcon === "download"}
                    <svg class="text-blue-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9V4q0-.425.288-.713T12 3q.425 0 .713.288T13 4v8.2l1.9-1.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 21q-.825 0-1.413-.588T4 19v-2q0-.425.288-.713T5 16q.425 0 .713.288T6 17v2h12v-2q0-.425.288-.713T19 16q.425 0 .713.288T20 17v2q0 .825-.588 1.413T18 21z"/>
                    </svg>
                {:else if leftIcon === "sync"}
                    <svg class="text-purple-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z"/>
                    </svg>
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