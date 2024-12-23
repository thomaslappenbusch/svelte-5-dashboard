<script lang="ts">
    /** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

</script>

<div class="flex flex-col items-center space-y-7">
    <div class="text-ui-tx-2 text-5xl">The <span class="text-ui-tx">{data.subslug}</span> section.</div>
</div>
