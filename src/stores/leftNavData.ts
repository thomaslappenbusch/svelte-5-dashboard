import { writable } from 'svelte/store';

export interface Alert {
    id: number;
    leftIcon: "avatar" | "warning" | "hazard";
    size: "small";
    title: string;
    description: string;
    interaction?: string;
}

export interface NavDataType {
    title: {
        string: string;
        logo?: any; // Can be SVG string or URL
    };
    sections: {
        title: string;
        items: {
            title: string;
            totalNotifications: number;
        }[];
    }[];
    alerts: Alert[];
    profile: {
        username: string;
        line: string;
        statusColor: string;
    };
}


const createNavStore = () => {
    const { subscribe, set, update } = writable<NavDataType>({
        title: {
            string: "Svelte5",
            logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.1 118" class="h-5 w-5"><path d="..." fill="#FF3E00"/></svg>'
        },
        sections: [
            {
                title: "Dashboard",
                items: [
                    { title: "Home", totalNotifications: 0 },
                    { title: "Analytics", totalNotifications: 0 },
                    { title: "Reports", totalNotifications: 0 }
                ]
            },
            {
                title: "System",
                items: [
                    { title: "Performance", totalNotifications: 0 },
                    { title: "Monitoring", totalNotifications: 0 },
                    { title: "Logs", totalNotifications: 0 }
                ]
            }
        ],
        alerts: [
            {
                id: 0,
                leftIcon: "avatar",
                size: "small",
                title: "Aspen Septimus",
                description: "3 new messages.",
                interaction: "open chat"
            },
            {
                id: 1,
                leftIcon: "warning",
                size: "small",
                title: "Error",
                description: "Payment processing."
            },
            {
                id: 2,
                leftIcon: "hazard",
                size: "small",
                title: "Warning",
                description: "You need to update your info."
            }
        ],
        profile: {
            username: "",
            line: "WWU 2023",
            statusColor: "bg-green-600"
        }
    });

    return {
        subscribe,
        setProfile: (username: string) => update(data => ({
            ...data,
            profile: { ...data.profile, username }
        })),
        addAlert: (alert: Omit<Alert, 'id'>) => update(data => {
            const newAlert = {
                ...alert,
                id: Math.max(0, ...data.alerts.map(a => a.id)) + 1
            };
            return {
                ...data,
                alerts: [newAlert, ...data.alerts]
            };
        }),
        deleteAlert: (id: number) => update(data => {
            console.log('Store: Deleting alert', id);
            console.log('Current alerts:', data.alerts);
            const newAlerts = data.alerts.filter(alert => alert.id !== id);
            console.log('New alerts:', newAlerts);
            return {
                ...data,
                alerts: newAlerts
            };
        })
    };
};

export const navStore = createNavStore();