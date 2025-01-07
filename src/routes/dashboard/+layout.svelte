<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import SectionsLine from '$lib/leftnavoptions/SectionsLine.svelte';
    import Title1 from '$lib/leftnavoptions/Title1.svelte';
    import { isNavOpen } from '../../stores/navigation';
    import SectionsIcons from '$lib/leftnavoptions/SectionsIcons.svelte';
    import SectionsMinimal from '$lib/leftnavoptions/SectionsMinimal.svelte';
    import Avatar from '$lib/leftnavoptions/Avatar.svelte';
    import LeftAlert from '$lib/leftnavoptions/LeftAlert.svelte';
    import { fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { navStore } from '../../stores/leftNavData';
    import SectionsUI from '$lib/leftnavoptions/SectionsUI.svelte';

    let { children, data } = $props<{
        children: any;
        data: {
            session: any;
            userData: {
                email: string | undefined;
                id: string | undefined;
                lastSignIn: string | undefined;
                created: string | undefined;
            }
        }
    }>();

    // Update profile when session changes
    $effect(() => {
        if (data.session?.user?.email) {
            navStore.setProfile(data.session.user.email);
        } else {
            goto('/auth/login');
        }
    });

    function deleteItem(id: number) {
        navStore.deleteAlert(id);
    }
</script>

{#if data?.session}
    <div class="w-full flex relative">
        <div class={`h-full fixed overflow-hidden flex flex-col bg-ui-bg justify-start items-start px-4 py-5 flex-shrink-0 border-r border-ui-br
            transition-all duration-300 ease-out
            ${$isNavOpen ? 'w-72' : 'w-[74px] px-[12px]'}`}>        
            <Title1 title={$navStore.title}/>
			<div class="my-2 h-[1px] "></div>
            <SectionsUI data={$navStore.sections}/>
            <div class="flex-grow"></div>
            <div class="flex flex-col gap-4 w-full mb-3 justify-end">
                {#each $navStore.alerts as item (item.id)}
                    <div 
						class="flex h-12 justify-between items-center rounded-md overflow-hidden shadow-sm bg-ui-bg-3 relative group"
						animate:flip={{ duration: 550 }}
						transition:fly={{duration:100, x:-12}}
                    >
                        <!-- Absolute Things -->
						<button 
							class="absolute top-[2px] right-[2px]"
							onclick={() => deleteItem(item.id)}
						>
							<svg class="text-ui-tx-3/20 group-hover:text-ui-tx-3 transition duration-200 {$isNavOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
						</button>
                        <div class="absolute left-0 bottom-0 h-full w-[2px] { 
                            item.leftIcon === 'warning' ? 'bg-red-600' : 
                            item.leftIcon === 'hazard' ? 'bg-yellow-500' : 
                            item.leftIcon === 'success' ? 'bg-green-500' :
                            item.leftIcon === 'download' ? 'bg-blue-500' :
                            item.leftIcon === 'sync' ? 'bg-purple-500' :
                            'bg-zinc-500'
                        }"></div>
                        
                        <!-- Icon -->
                        <div class="h-full aspect-square flex items-center justify-center flex-shrink-0">
                            {#if item.leftIcon === "warning"}
                                <svg class="text-red-600 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
                                </svg>
                            {:else if item.leftIcon === "hazard"}
                                <svg class="text-yellow-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m-1-3h2v-5h-2zm1-2.5"/>
                                </svg>
                            {:else if item.leftIcon === "avatar"}
                                <img 
                                    src="https://avatars.githubusercontent.com/u/2" 
                                    class="h-8 w-8 ml-[2px] rounded-full border border-zinc-500"
                                    alt="User avatar"
                                />
                            {:else if item.leftIcon === "success"}
                                <svg class="text-green-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                            {:else if item.leftIcon === "download"}
                                <svg class="text-blue-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9V4q0-.425.288-.713T12 3q.425 0 .713.288T13 4v8.2l1.9-1.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 21q-.825 0-1.413-.588T4 19v-2q0-.425.288-.713T5 16q.425 0 .713.288T6 17v2h12v-2q0-.425.288-.713T19 16q.425 0 .713.288T20 17v2q0 .825-.588 1.413T18 21z"/>
                                </svg>
                            {:else if item.leftIcon === "sync"}
                                <svg class="text-purple-500 p-[10px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6c0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6c0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4l-4-4z"/>
                                </svg>
                            {/if}
                        </div>

                        <!-- Text Area -->
                        <div class="flex-grow flex flex-col">
                            {#if $isNavOpen}
                                <div 
                                    in:fly={{ x: -5, duration: 100}}
                                    out:fly={{ x: -5, duration: 100 }}
                                    class="text-ui-tx text-sm font-medium truncate line-clamp-1"
                                >
                                    {item.title}
                                </div>
                                <div 
                                    in:fly={{ x: -5, duration: 100}}
                                    out:fly={{ x: -5, duration: 100 }}
                                    class="text-ui-tx-2 text-[11px] font-medium truncate line-clamp-1 mr-2"
                                >
                                    {item.description} 
                                    {#if item.interaction}
                                        <button class="text-ui-tx-3 underline hover:text-ui-tx-h transition duration-100">
                                            {item.interaction}
                                        </button>
                                    {/if}
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
            <Avatar data={$navStore.profile}/>
        </div>
        <div class={`
            flex justify-center flex-grow flex-col bg-ui-bg min-h-screen
            transition-all duration-300 ease-out w-full
            ${$isNavOpen ? 'ml-72' : 'ml-[74px]'}
        `}>
            <div class="flex-grow flex items-center justify-center">
                {@render children()}
            </div>
        </div>
    </div>
{:else}
    <script>
        goto('/auth/login');
    </script>
{/if}