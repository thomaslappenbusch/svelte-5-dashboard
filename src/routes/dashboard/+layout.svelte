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
	import { removeAlert, removedIndex } from '../../stores/leftNavData';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let { children } = $props();
	
	function deleteItem(id: number) {
		leftNavData.alerts = leftNavData.alerts.filter(item => item.id !== id);
	}

	interface Alert {
		id: number;
		leftIcon: "avatar" | "warning" | "hazard";
		size: "small";
		title: string;
		description: string;
		interaction: string;
	}

	let leftNavData = $state({
		title: "Svelte5",
		sections: [
			{
				title: "Dashboard",
				items: [
					{
						title: "Overview",
						totalNotifications: 3
					},
					{
						title: "Analytics",
						totalNotifications: 0
					},
					{
						title: "Reports",
						totalNotifications: 0
					}
				]
			},
			{
				title: "System",
				items: [
					{
						title: "Performance",
						totalNotifications: 0
					},
					{
						title: "Monitoring",
						totalNotifications: 0
					},
					{
						title: "Logs",
						totalNotifications: 0
					}
				]
			}
		],
		alerts: [
			{
				id:0,
				leftIcon: "avatar",
				size: "small",
				title: "Aspen Septimus",
				description: "3 new messages.",
				interaction: "open chat"
			},
			{
				id:1,
				leftIcon: "warning",
				size: "small",
				title: "Error",
				description: "Payment processing."
			},
			{
				id:2,
				leftIcon: "hazard",
				size: "small",
				title: "Warning",
				description: "You need to update your info."
			}
		],
		profile: {
			username: "George Costanza",
			line: "WWU 2023",
			statusColor: "bg-green-600"
		}
	});
	
</script>


<div class="w-full h-screen flex relative">
	<div class={`h-full overflow-hidden flex flex-col bg-ui-bg justify-start items-start px-6 py-5 flex-shrink-0 border-r border-ui-br
		transition-all duration-300 ease-out
		${$isNavOpen ? 'w-72' : 'w-[74px] px-[12px]'}`}>        
		<Title1 title={leftNavData.title}/>
		<SectionsLine data={leftNavData.sections}/>
		<div class="flex-grow"></div>
		<div class="flex flex-col gap-4 w-full mb-3">
			{#each leftNavData.alerts as item (item.id)}
				<div 
					class="flex h-12 justify-between items-center rounded-md overflow-hidden shadow-sm bg-ui-bg-3 relative group"
					animate:flip={{ duration: 550 }}
					transition:fly={{duration:100, x:-12}}
				>	
					<!-- svelte-ignore a11y_consider_explicit_label -->

					<!-- Absolute Things -->
					{#if $isNavOpen}
						<button 
							class="absolute top-[2px] right-[2px]"
							onclick={() => deleteItem(item.id)}
						>
							<svg class="text-ui-tx-3/20 group-hover:text-ui-tx-3 transition duration-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
						</button>
					{/if}
					<div class="absolute left-0 bottom-0 h-full w-[2px] { item.leftIcon === 'warning' ? 'bg-red-600' :  item.leftIcon === 'hazard' ? 'bg-yellow-500' : 'bg-zinc-500'}"></div>
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
								{item.description} <button class="text-ui-tx-3 underline hover:text-ui-tx-h transition duration-100">{item.interaction} </button>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<Avatar data={leftNavData.profile}/>
	</div>
	<div class="flex justify-center flex-grow flex-col bg-ui-bg-2">
		<div class="flex-grow flex items-center justify-center">
			{@render children()}
		</div>
	</div>
</div>