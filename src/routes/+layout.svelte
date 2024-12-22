<script lang="ts">
	
	import '../app.css';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SectionsLine from '$lib/leftnavoptions/SectionsLine.svelte';
	import Title1 from '$lib/leftnavoptions/Title1.svelte';
	import { isNavOpen } from '../stores/navigation';
	import SectionsIcons from '$lib/leftnavoptions/SectionsIcons.svelte';
	import SectionsMinimal from '$lib/leftnavoptions/SectionsMinimal.svelte';
	import Avatar from '$lib/leftnavoptions/Avatar.svelte';
	import LeftAlert from '$lib/leftnavoptions/LeftAlert.svelte';
	import { flip } from 'svelte/animate';
    import { fade, fly } from 'svelte/transition';
    
    // Add IDs to your alerts data if they don't have them
	
	let { children } = $props();
	
	// Navigation data
	// Navigation data
	const leftNavData = {
		title: "SvelteDash",
		sections: [
			{
				title: "Dashboard",
				items: ["Overview", "Analytics", "Reports"]
			},
			{
				title: "System",
				items: ["Performance", "Monitoring", "Logs"]
			}
		],
		alerts: [
			{
				leftIcon: "avatar",
				size: "small",
				title: "Aspen Septimus",
				description: "3 new messages. open chat"
			},
			{
				leftIcon: "warning",
				size: "small",
				title: "Error",
				description: "Payment processing."
			},
			{
				leftIcon: "hazard",
				size: "small",
				title: "Warning",
				description: "You need to update your info."
			}
		],
		profile: {
			username: "George Costanza",
			line: "Harvard 2023",
			statusColor: "bg-green-600"
		}
	};

</script>

<div class="w-full h-screen flex bg-ui-bg">
	<div class={`h-full overflow-hidden flex flex-col justify-start items-start px-6 py-5 flex-shrink-0 border-r border-ui-br
		transition-all duration-300 ease-out
		${$isNavOpen ? 'w-72' : 'w-[74px] px-[12px]'}`}>		
		<Title1 title={leftNavData.title}/>
		<SectionsLine leftNavData={leftNavData.sections}/>
		<div class="flex-grow"></div>
		<div class="flex flex-col w-full">
			{#each leftNavData.alerts as alert, index}
				<LeftAlert 
					leftIcon={alert.leftIcon}
					size={alert.size}
					title={alert.title}
					description={alert.description}
					id={index}
				/>
			{/each}
			<Avatar data={leftNavData.profile}/>
		</div>
	</div>
	<div class="flex justify-center flex-grow flex-col">
		<div class="h-14 w-full border-b border-ui-br flex justify-end items-center"></div>
		<div class="flex-grow flex items-center justify-center">
			{@render children()}
		</div>
	</div>
</div>