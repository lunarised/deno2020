const filename = Deno.args[0];
const file= await Deno.open(filename);
await Deno.copy(file, Deno.stdout);
file.close();
