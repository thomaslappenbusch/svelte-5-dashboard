<script lang="ts">
    import { navStore } from "../../../stores/leftNavData";

    let { data } = $props();

    function createTestAlert() {
    const alerts = [
        // Success alerts (Completed actions)
        {
            leftIcon: "success",
            size: "small",
            title: "Deploy Successful",
            description: "Version 2.0.4 is now live."
        },
        {
            leftIcon: "success",
            size: "small",
            title: "Backup Complete",
            description: "Database backup finished at 3:00 AM."
        },

        // Download alerts (File operations)
        {
            leftIcon: "download",
            size: "small",
            title: "Download Complete",
            description: "Monthly_Report.pdf saved locally.",
            interaction: "open"
        },
        {
            leftIcon: "download",
            size: "small",
            title: "New Update Available",
            description: "Version 2.1.0 ready to install.",
            interaction: "install"
        },

        // Sync alerts (System processes)
        {
            leftIcon: "sync",
            size: "small",
            title: "Data Sync in Progress",
            description: "Syncing user data, 45% complete."
        },
        {
            leftIcon: "sync",
            size: "small",
            title: "Cache Refresh",
            description: "Clearing system cache...",
            interaction: "view status"
        }
    ];

        const randomAlert:any = alerts[Math.floor(Math.random() * alerts.length)];
        navStore.addAlert(randomAlert);
    }
</script>

<div class="flex flex-col items-center space-y-7">
    <div class="text-ui-tx-2 text-5xl">
        The <span class="text-ui-tx">{data.slug}</span> section.
    </div>
    
    <button
        onclick={createTestAlert}
        class="px-4 py-2 bg-ui-bg-2 text-ui-tx border border-ui-br rounded-md hover:bg-ui-bg-3 transition-colors duration-200"
    >
        Create Test Alert
    </button>
</div>