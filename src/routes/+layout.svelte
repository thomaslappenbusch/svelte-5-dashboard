<script lang="ts">
	import '../app.css';

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

    $effect(() => {
        console.log('Current user data:', {
            session: data.session,
            userData: data.userData
        });
    });

</script>

{@render children()}
