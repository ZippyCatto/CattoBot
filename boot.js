const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function load(){
console.log(`
entering BIOS please wait....`)
console.clear()
console.log(`
██████╗░░█████╗░░█████╗░████████╗██╗███╗░░██╗░██████╗░░░░░░░░░░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║████╗░██║██╔════╝░░░░░░░░░░
██████╦╝██║░░██║██║░░██║░░░██║░░░██║██╔██╗██║██║░░██╗░░░░░░░░░░
██╔══██╗██║░░██║██║░░██║░░░██║░░░██║██║╚████║██║░░╚██╗░░░░░░░░░
██████╦╝╚█████╔╝╚█████╔╝░░░██║░░░██║██║░╚███║╚██████╔╝██╗██╗██╗
╚═════╝░░╚════╝░░╚════╝░░░░╚═╝░░░╚═╝╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝╚═╝`)
console.log(`𝕔𝕠𝕕𝕖 𝕝𝕠𝕒𝕕𝕖𝕕`)
require("./bot")
}
load()