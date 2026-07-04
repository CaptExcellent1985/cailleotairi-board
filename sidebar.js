document.addEventListener("DOMContentLoaded", function() {
    const sidebarContainer = document.getElementById("shared-sidebar");
    
    if (!sidebarContainer) return;

    // 1. Injected HTML layout - Notice "collapsed" is added directly to the category headers now
    sidebarContainer.innerHTML = `
	
		<div class="index-category collapsed" onClick="toggleIndexCategory(this)">Cartography</div>
		<ul class="index-menu-list">
			<li><a href="map.html" id="link-Cartography-Tir">The Tir</a></li>
			<li><a href="CeardlachdForest.html" id="Link-Cartography-Tir">Ceardlachd Forest</li>
			<li><a href="WellandrymVale.html" id="link-Cartography-Tir">Wellandrym Vale</a></li>
		</ul>
	
        <div class="index-category collapsed" onclick="toggleIndexCategory(this)">The Tuatha</div>
        <ul class="index-menu-list">
            <li><a href="Dwarves.html" id="link-tribes-dwarves">⚒️Dwarves</a></li>
            <li><a href="" id="link-tribes-Eladrin">🎭 Eladrin</a></li>
            <li><a href="" id="link-tribes-Feyfolk">✨ Feyfolk</a></li>
			<li><a href="" id="link-tribes-Firbolg">🌲 Firbolg </a></li>
			<li><a href="" id="link-tribes-Gnomes">🔧 Gnomes </a></li>
			<li><a href="" id="link-tribes-Goblins">🦴 Goblins </a></li>
			<li><a href="" id="link-tribes-Goliath">🏔️ Goliath </a></li>
			<li><a href="" id="link-tribes-Halfling">🏡 Halflings </a></li>
			<li><a href="" id="link-tribes-Kenku">🐦 Kenku </a></li>
			<li><a href="" id="link-tribes-Kobolds">⛏️ Kobolds</a></li>
			<li><a href="" id="link-tribes-Lizard-folk">🦎 Lizard-folk </a></li>
			<li><a href="" id="link-tribes-Tabaxi">🐾 Tabaxi </a></li>
			<li><a href="" id="link-tribes-Tieflings">⛓️ Tieflings </a></li>
			<li><a href="" id="link-tribes-Tritons">🔱 Tritons </a></li>
			<li><a href="" id="link-tribes-TwilightElves">🌙 Twilight Elves			</a></li>
			<li><a href="" id="link-tribes-WoodElves">🍃 Wood Elves </a></li>
        </ul>
		</div>

        <div class="index-category collapsed" onclick="toggleIndexCategory(this)">The Tribal Accord</div>
        <ul class="index-menu-list">
            <li><a href="factions-beaver-tribe.html" id="link-factions-beaver-tribe">🦫 The Beaver-Tribe</a></li>
            <li><a href="factions-moon-weavers.html" id="link-factions-moon-weavers">🌙 The Moon-Weaver Coven</a></li>
            <li><a href="factions-rust-guard.html" id="link-factions-rust-guard">🛡️ The Iron & Rust Guard</a></li>
        </ul>

        <div class="index-category collapsed" onclick="toggleIndexCategory(this)">Hazard Catalog</div>
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
        
        // 🚀 SMART ADDITION: If a page inside a category is open, auto-expand that category!
        const parentList = activeLink.closest('.index-menu-list');
        const siblingHeader = parentList.previousElementSibling;
        if (siblingHeader && siblingHeader.classList.contains('index-category')) {
            siblingHeader.classList.remove('collapsed');
        }
    }
});

// Improved toggle engine that works seamlessly with your CSS rules
function toggleIndexCategory(header) {
    header.classList.toggle('collapsed');
}