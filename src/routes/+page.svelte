<script lang="ts">
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
                <button class="w-48">Services</button>
                <button class="w-32 mx-8 px-5 py-1 rounded-md border-ui-br border">Start Now</button>
            </div>
        </div>
        <div class="w-full h-[80%] flex items-center justify-center z-10 mx-64  max-w-[1500px]">
            <div class="flex flex-col items-start justify-center mr-12 ">
                <div class="rounded-full bg-ui-bg-3 px-2 py-1 border border-ui-br flex items-center justify-center text-ui-tx-3">
                    <svg class="text-ui-tx-2 h-6 -my-[2px] mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"/></svg>
                    <div class="text-xs">BastionKit</div>
                </div>
                <div class="text-8xl font-semibold pb-2 bg-gradient-to-b from-white via-white to-zinc-100 bg-clip-text text-transparent -mt-[2px]">
                    SvelteKit 5
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
                    <button class="px-6 py-2 border-2 border-zinc-500 hover:border-zinc-400 rounded-lg text-zinc-300 hover:text-white flex items-center hover:bg-zinc-950 transition duration-500 group relative overflow-hidden">
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
            <div class=" w-[30vw] aspect-video rounded-lg border-2 border-ui-br min-w-[500px] flex items-center justify-center bg-ui-bg-2">
                <svg class="h-12 w-12 text-ui-tx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215"/></svg>
            </div>
        </div>
    </div>
    <div class="w-full bg-ui-bg-3 border-y-2 border-ui-br flex flex-col items-center justify-start overflow-hidden relative">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="absolute -top-5 -right-16 h-5 w-32 rounded-full bg-ui-br"></div>
        <div class="grid grid-cols-2 gap-y-20 gap-x-12 justify-center items-start max-w-[1300px] w-full my-20 px-8">
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
    <div class="h-[60vh] w-full bg-ui-bg flex flex-col items-center justify-start overflow-hidden relative">

    </div>
</div>
