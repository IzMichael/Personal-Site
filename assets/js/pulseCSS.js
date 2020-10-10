function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pulseSocial() {
    var socialMenu = document.getElementById("socialMenuI")
    socialMenu.classList.add("pulse")
    await sleep(10000);
    socialMenu.classList.remove("pulse")
}
