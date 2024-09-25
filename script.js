document.getElementById("share-copy").addEventListener("click", () => writeClipboardText(window.location.href));

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

document.getElementById("mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("mode").innerHTML = document.body.classList.contains("dark-mode") ? '<i class="fa-solid fa-sun" style="color:white;"></i>' : '<i class="fa-solid fa-moon"></i>';
});