// To ensure that hooks.server.ts runs for every nested path, put a +layout.server.ts file 
// in the private directory. This file can be empty, but must exist to protect 
// routes that don't have their own +layout|page.server.ts.