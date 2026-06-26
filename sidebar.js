document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.getElementById("shared-sidebar");
    
    if (!sidebarContainer) return;

    // 1. Define your sidebar HTML structure here ONE time
    sidebarContainer.innerHTML = `
        <div class="index-category" onclick="toggleIndexCategory(this)">Phenomena & Arcana</div>
        <ul class="index-menu-list">
            <li><a href="anord-pulses.html" id="link-anord-pulses">🌀 The Anord Pulses</a></li>
            <li><a href="confluence-geometry.html" id="link-confluence-geometry">📐 Confluence Geometry</a></li>
            <li><a href="wild-magic-pockets.html" id="link-wild-magic-pockets">⚡ Wild Magic Containment</a></li>
        </ul>

        <div class="index-category" onclick="toggleIndexCategory(this)">The Tribal Accord</div>
        <ul class="index-menu-list">
            <li><a href="factions-beaver-tribe.html" id="link-factions-beaver-tribe">🦫 The Beaver-Tribe</a></li>
            <li><a href="factions-moon-weavers.html" id="link-factions-moon-weavers">🌙 The Moon-Weaver Coven</a></li>
            <li><a href="factions-rust-guard.html" id="link-factions-rust-guard">🛡️ The Iron & Rust Guard</a></li>
        </ul>

        <div class="index-category" onclick="toggleIndexCategory(this)">Hazard Catalog</div>
        <ul class="index-menu-list">
            <li><a href="flora-fauna-hazards.html" id="link-flora-fauna-hazards">🌿 Hyper-Aggressive Flora</a></li>
            <li><a href="monsters-warped-beasts.html" id="link-monsters-warped-beasts">🦌 Anord-Warped Beasts</a></li>
            <li><a href="fae-court-protocols.html" id="link-fae-court-protocols">🧚 Pixie Court Etiquette</a></li>
        </ul>
    `;

    // 2. Automatically highlight the active page based on the URL filename
    const currentFile = window.location.pathname.split("/").pop();
    const activeId = "link-" + currentFile.replace(".html", "");
    const activeLink = document.getElementById(activeId);
    
    if (activeLink) {
        activeLink.classList.add("active");
    }
});

// The toggle function remains available globally for the click event
function toggleIndexCategory(header) {
    header.classList.toggle('collapsed');
}