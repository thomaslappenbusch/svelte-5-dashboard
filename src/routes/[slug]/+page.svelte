<script lang="ts">
    /** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

</script>

<div class="flex flex-col items-center space-y-7">
    <div class="text-ui-tx-2 text-5xl">The <span class="text-ui-tx">{data.slug}</span> section.</div>
    <div class="flex items-center justify-center space-x-4">
        <button class="px-5 py-1 text-ui-tx-2 rounded-md border border-ui-tx-2 flex items-center justify-center">
            Add Content
            <svg class="ml-1 text-ui-tx-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg>
        </button>
        <button class="px-5 py-1 text-ui-tx-2 rounded-md border border-ui-tx-2 flex items-center justify-center">
            Remove Section
            <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </button>
    </div>
</div>
