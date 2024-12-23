import { writable } from 'svelte/store';

export const leftNavData = writable({
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
});

export let removedIndex = -1;

// Helper function to remove alert by index
export function removeAlert(index: number) {
    console.log("removing index at: " + index)
    leftNavData.update(currentData => {
        removedIndex = index;
        let newAlerts = [...currentData.alerts];
        console.log("current data before")
        console.log(currentData)
        newAlerts.splice(index, 1);
        currentData.alerts = newAlerts
        console.log("current data after splice")
        console.log(currentData)
        return currentData
    });
}
