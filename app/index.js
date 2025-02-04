let domReady = false;
let pending = [];

const handleMessage = (message) => {
    // just for testing
    document.getElementById("text").innerText = (new TextDecoder()).decode(message);
};

window.addEventListener('message', async (event) => {
    if (typeof(event.data) !== "object") return;

    if (event.data.type === "pluginMessage") {
        if (typeof(event.data.content) !== "object") return;
        if (domReady) {
            handleMessage(event.data.content);
        } else {
            pending.push(event.data.content);
        }
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    domReady = true;
    for (x of pending) {
        handleMessage(x);
    }
    pending = null;
});
