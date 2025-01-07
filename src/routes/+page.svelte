<script lang="ts">
	import { goto } from "$app/navigation";
    import { page } from "$app/state";

    let currentPage:any = $state(page.route.id)
    
</script>

<div class="flex flex-col bg-ui-bg overflow-hidden">
    <div class="h-[60vh] w-full flex items-center justify-center text-ui-tx-2 relative">
        <!-- Absolute elements -->
        <div class="absolute left-0 h-full w-96 bg-gradient-to-r from-[#030303] to-ui-bg z-0">
        </div>
        <div class="absolute right-0 h-full w-96 bg-gradient-to-l from-[#030303] to-ui-bg z-0">
        </div>
        <div class="absolute -left-24 -top-24 z-10 w-64 h-64 bg-zinc-800 blur-[160px]">
        </div>
        <div class="absolute -right-24 -top-24 z-10 w-64 h-64 bg-zinc-800 blur-[160px]">
        </div>
        <div class="absolute top-4 left-1/2 -translate-x-1/2 max-w-[1600px] w-full flex items-center justify-center px-6">
            <div class="flex items-center justify-center space-x-12">
                <button class="w-48">Home</button>
                <button class="w-48">Documentation</button>
                <div class="flex items-center justify-center">
                    <button class="w-36 ml mr-2 -8 px-5 h-8 rounded-md border-ui-br border-2">View Live Site</button>
                    <button aria-label="joinDiscordLink" onclick={() => console.log(currentPage)} class="h-8 w-8 bg-indigo-600 border-2 border-indigo-700 border rounded-lg text-ui-tx">
                        <svg class="h-auto w-auto p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full h-[80%] flex items-center justify-center z-10 px-8  max-w-[1500px]">
            <div class="flex flex-col items-start justify-center mr-12 flex-shrink-0">
                <div class="rounded-full bg-ui-bg-3 px-2 py-1 border border-ui-br flex items-center justify-center text-ui-tx-3">
                    <svg class="text-ui-tx-2 h-5 -my-[2px] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"/></svg>
                    <div class="text-xs">CoastalUI</div>
                </div>
                <div class="text-8xl font-semibold pb-2 bg-gradient-to-b from-white via-white to-zinc-100 bg-clip-text text-transparent -mt-[2px] flex-shrink-0 line-clamp-1">
                    Svelte 5
                </div>
                <div class="text-5xl font-semibold bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-600 pb-3 bg-clip-text text-transparent">
                    Dashboard Boilerplates
                </div>
                <div class="flex items-center justify-center mt-2">
                    <button class="px-6 py-2 mr-3 border border-1 border-zinc-500 hover:border-zinc-400 rounded-lg text-zinc-300 bg-ui-tx-2 hover:text-white flex items-center transition duration-500 group relative overflow-hidden">
                        <div class="relative z-10 text-ui-bg font-medium flex items-center">
                            View Features
                        </div>
                    </button>
                    <button onclick={() => goto("/dashboard")} class="px-6 py-2 border-2 border-zinc-500 hover:border-zinc-400 rounded-lg text-zinc-300 hover:text-white flex items-center hover:bg-zinc-950 transition duration-500 group relative overflow-hidden">
                        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-zinc-500 to-gray-600 opacity-0 group-hover:opacity-60 h-8 w-8 blur-[20px] z-0 group-hover:w-full transition-all duration-500">
                        </div>
                        <div class="relative z-10 text-zinc-200 flex items-center font-medium">
                            Open Live Site
                            <svg class="ml-3 text-zinc-200 transition group-hover:text-white group-hover:rotate-90 duration-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14">
                                </path>
                                <path d="m12 5 7 7-7 7">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div class=" w-[830px] aspect-video rounded-lg border-2 border-ui-br min-w-[500px] flex items-center justify-center bg-ui-bg-2  invisible md:visible">
                <svg class="h-12 w-12 text-ui-tx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215"/></svg>
            </div>
        </div>
    </div>
    <div class="w-full bg-ui-bg-3 border-y-2 border-ui-br flex flex-col items-center justify-start overflow-hidden relative">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="absolute -top-5 -right-16 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 justify-center items-start max-w-[1300px] w-full my-20 px-8">            
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg class="h-14 w-14 text-green-600 p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"/></svg>
                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Supabase Integration</div>
                    <div class="text-ui-tx-2/60 text-lg">Secure database and authentication, ready to deploy.</div>
                </div>
            </div>
        
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg class="h-14 w-14 text-[#635bff] p-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="m8.25 10.435l-2.165.46l-.01 7.12c0 1.315.99 2.165 2.305 2.165c.73 0 1.265-.135 1.56-.295v-1.69c-.285.115-1.685.525-1.685-.785v-3.16H9.94v-1.89H8.255zm4.455 2.58l-.135-.655h-1.92v7.66h2.215v-5.155c.525-.69 1.41-.555 1.695-.465v-2.04c-.3-.105-1.335-.3-1.855.655M17.32 9.4l-2.23.475v1.81l2.23-.475zM2.245 14.615c0-.345.29-.48.755-.485c.675 0 1.535.205 2.21.57v-2.09a5.9 5.9 0 0 0-2.205-.405c-1.8 0-3 .94-3 2.51c0 2.46 3.375 2.06 3.375 3.12c0 .41-.355.545-.85.545c-.735 0-1.685-.305-2.43-.71v2c.825.355 1.66.505 2.425.505c1.845 0 3.115-.79 3.115-2.39c0-2.645-3.395-2.17-3.395-3.17M32 16.28c0-2.275-1.1-4.07-3.21-4.07s-3.395 1.795-3.395 4.055c0 2.675 1.515 3.91 3.675 3.91c1.06 0 1.855-.24 2.46-.575v-1.67c-.605.305-1.3.49-2.18.49c-.865 0-1.625-.305-1.725-1.345h4.345c.01-.115.03-.58.03-.795m-4.395-.84c0-1 .615-1.42 1.17-1.42c.545 0 1.125.42 1.125 1.42zm-5.645-3.23c-.87 0-1.43.41-1.74.695l-.115-.55H18.15v10.24l2.22-.47l.005-2.51c.32.235.795.56 1.57.56c1.59 0 3.04-1.16 3.04-3.98c.005-2.58-1.465-3.985-3.025-3.985m-.53 6.125c-.52 0-.83-.19-1.045-.42l-.015-3.3c.23-.255.55-.44 1.06-.44c.81 0 1.37.91 1.37 2.07c.005 1.195-.545 2.09-1.37 2.09m-6.335 1.685h2.23v-7.66h-2.23z"/></svg>
                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Stripe Payments</div>
                    <div class="text-ui-tx-2/60 text-lg">Subscription system configured and ready to use.</div>
                </div>
            </div>
        
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg  class="h-14 w-14 text-zinc-200 p-2" viewBox="0 0 256 256"><path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200v-50h18a6 6 0 0 0 0-12H38v-20h18a6 6 0 0 0 0-12H38V86h18a6 6 0 0 0 0-12H38V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z"/></svg>                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Dashboard Navigation</div>
                    <div class="text-ui-tx-2/60 text-lg">Professional dashboard layout with only navigation built-in.</div>
                </div>
            </div>
        
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg class="h-14 w-14 text-zinc-300 p-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"/></svg>                
                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Authentication Routes</div>
                    <div class="text-ui-tx-2/60 text-lg">Everything from /login to /reset-password.</div>
                </div>
            </div>
        
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg class="h-14 w-14 text-[#38bdf8] p-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/></svg>
                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Tailwind Config Styling</div>
                    <div class="text-ui-tx-2/60 text-lg">Easily change from one color scheme to another.</div>
                </div>
            </div>
        
            <div class="flex w-full items-center justify-center">
                <div class="border border-ui-br rounded-md bg-ui-bg-2">
                    <svg class="h-14 w-14 text-green-600 p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"/></svg>
                </div>
                <div class="flex-grow h-20 flex flex-col justify-center ml-4">
                    <div class="text-ui-tx font-medium">Always Free</div>
                    <div class="text-ui-tx-2/60 text-lg">No hidden costs or premium features. Everything included.*</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-ui-bg flex flex-col items-center justify-start overflow-hidden relative">
        <div class="flex items-center justify-center z-10 mx-8  max-w-[1400px] w-full px-8">
            <div class="flex flex-col items-start justify-center mr-12 mt-16">
                <div class="rounded-full bg-ui-bg-3 px-3 py-[2px] border border-ui-br flex items-center justify-center text-ui-tx-3">
                    <div class="text-xs">Get Inspired</div>
                </div>
                <div class="text-5xl font-semibold pb-2 bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent mt-1">
                    Dashboard Build-out Showcase
                </div>
            </div>
            <div class="flex-grow"></div>
        </div>
        <div class="flex flex-col items-center justify-start z-10 max-w-[1400px] w-full px-8 mt-8">
            <div class="w-full aspect-video border-2 rounded-md border-ui-br relative mb-32">
                <div class="absolute -bottom-7 w-full left-1/2 -translate-x-1/2 text-sm text-ui-tx-2/80 flex items-center justify-between">
                    <button class="flex items-center justfy-center underline underline-offset-2">
                        <svg class="w-4 h-4 mr-1 mt-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"/><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></g></svg>
                        thephoenixclub.com
                    </button>
                    <div class="invisible md:visible">A course website that teaches young professionals important business skills.</div>
                </div>
            </div>
            <div class="w-full aspect-video border-2 rounded-md border-ui-br relative mb-32">
                <div class="absolute -bottom-7 w-full left-1/2 -translate-x-1/2 text-sm text-ui-tx-2/80 flex items-center justify-between">
                    <button class="flex items-center justfy-center underline underline-offset-2">
                        <svg class="w-4 h-4 mr-1 mt-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"/><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></g></svg>
                        fitmetrics.io
                    </button>
                    <div class="invisible md:visible">A fitness tracking platform that visualizes workout data and nutrition trends.</div>
                </div>
            </div>
            <div class="w-full aspect-video border-2 rounded-md border-ui-br relative mb-32">
                <div class="absolute -bottom-7 w-full left-1/2 -translate-x-1/2 text-sm text-ui-tx-2/80 flex items-center justify-between">
                    <button class="flex items-center justfy-center underline underline-offset-2">
                        <svg class="w-4 h-4 mr-1 mt-[4px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"/><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></g></svg>
                        budgetflow.app
                    </button>
                    <div class="invisible md:visible">A personal finance dashboard tracking spending patterns and investment portfolios.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full bg-ui-bg-2 border-y-2 border-ui-br flex flex-col items-center justify-center overflow-hidden relative pt-20 pb-20">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="absolute -top-5 -right-16 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="flex justify-between items-center  w-full max-w-7xl">
            <div class="space-y-4">
                <h3 class="text-ui-tx text-xl font-semibold">SvelteDashboard</h3>
                <p class="text-ui-tx-2 text-lg">A dashboard boilerplate built with Svelte 5, Tailwind CSS, TypeScript and Supabase.</p>
                <div class="flex space-x-2 pt-2">
                    <button class="w-8 h-8 bg-[#5865F2] border border-[#4752C4] rounded-md flex items-center justify-center">
                        <svg class="p-[4px]" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z">
                            </path>
                        </svg>
                    </button>
                    <button class="w-8 h-8 bg-[#24292E] border border-[#1B1F23] rounded-md flex items-center justify-center border-ui-br border">
                        <svg class="p-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="#fff" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2">
                            </path>
                        </svg>
                    </button>
                    <button class="w-8 h-8 bg-[#0a0a0a] border border-[#1B1F23] rounded-md flex items-center justify-center border-ui-br border">
                        <svg class="text-ui-tx h-6 -my-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"/></svg>
                    </button>
                </div>
            </div>
            <button class="px-12 py-2 border border-ui-br rounded-md text-ui-tx bg-ui-bg-3 transition hover:bg-ui-bg">
                Go to Live Demo
            </button>
        </div>
        
        <div class="max-w-7xl mx-auto pt-8 mt-8 border-t border-ui-br w-full">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-ui-tx-3 text-sm">© 2024 CoastalUI. All rights reserved.</p>
                <p class="text-ui-tx-3 text-sm mt-2 md:mt-0">A CoastalUI Project</p>
            </div>
        </div>
    </div>
</div>
