document.getElementById("share-copy").addEventListener("click", () => writeClipboardText(window.location.href));

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}