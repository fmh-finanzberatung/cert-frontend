let containers;
function initDrawers() {
    // Get the containing elements
    containers = document.querySelectorAll(".container");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
}

function setHeights() {
    containers.forEach(container => {
        // Get content
        let content = container.querySelector(".content");
        let icon = container.querySelector(".icon");
        icon.classList.remove('rotate');
        // Needed if this is being fired after a resize
        content.removeAttribute("aria-hidden");
        // Height of content to show/hide
        let heightOfContent = content.getBoundingClientRect().height;
        // Set a CSS custom property with the height of content
        container.style.setProperty("--containerHeight", `${heightOfContent + 300}px`);
        // Once height is read and set
        setTimeout(e => {
            container.classList.add("height-is-set");
            content.setAttribute("aria-hidden", "true");
        }, 0);
    });
}

function wireUpTriggers() {
    containers.forEach((container) => {
        // Get each trigger element
        let btn = container.querySelector(".trigger");
        // Get content
        let content = container.querySelector(".content");
        let icon = container.querySelector(".icon");

        btn.addEventListener("click", () => {
            icon.classList.toggle('rotate')
            container.setAttribute(
                "data-drawer-showing",
                container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
            );
            content.setAttribute(
                "aria-hidden",
                content.getAttribute("aria-hidden") === "true" ? "false" : "true"
            );
        });
    });
}
