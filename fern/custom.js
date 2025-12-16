(function () {
    if (document.getElementById("plantstore-fab")) return;

    const fernButton = createFernButton();
    document.body.appendChild(fernButton);

    function createFernButton() {
        const button = document.createElement("div");
        button.id = "plantstore-fab";
        button.href = "https://buildwithfern.com";
        button.target = "_self";
        button.rel = "noreferrer";
        button.setAttribute("aria-label", "Open Fern");
        button.textContent = "Fern";
        return button;
    }
})();
