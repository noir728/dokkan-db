// Ensure DB and other constants are available
const DB = (typeof CHARACTER_DATA !== 'undefined') ? CHARACTER_DATA : [];
const LINKS = (typeof LINK_SKILLS !== 'undefined') ? LINK_SKILLS : {};
const CATEGORY_LIST = (typeof MASTER_CATEGORIES !== 'undefined') ? MASTER_CATEGORIES : [];

const state = {
    currentTab: 'zukan',
    detailCharId: null,
    detailFormIndex: 0,
    detailEzaMode: 'normal', // normal, eza, seza
    listMode: 'icon',
    owned: [],
    favorites: [],
    
    searchQuery: '',
    filter: { 
        sort: 'releaseDesc',
        logic: 'AND', // Top level logic if needed
        rarities: [], rarityLogic: 'OR',
        types: [], typeLogic: 'OR',
        classes: [], classLogic: 'OR',
        status: [], 
        eza: [], ezaLogic: 'OR',
        saTypes: [], saTypeLogic: 'OR',
        categories: [], categoryLogic: 'AND',
        links: [], linkLogic: 'AND'
    }
};

const contentDiv = document.getElementById('main-content');
const tabs = document.querySelectorAll('.tab-btn');
const scrollTopBtn = document.getElementById('scroll-top-btn');
const filterModal = document.getElementById('filter-modal');
const RARITY_RANK = { 'LR': 5, 'UR': 4, 'SSR': 3, 'SR': 2, 'R': 1, 'N': 0 };

function init() {
    const savedOwned = localStorage.getItem('dokkan_owned');
    if(savedOwned) state.owned = JSON.parse(savedOwned);
    const savedFav = localStorage.getItem('dokkan_fav');
    if(savedFav) state.favorites = JSON.parse(savedFav);
    
    // From zukan.js (exposed globally)
    if(typeof populateFilterOptions === 'function') populateFilterOptions();
    
    render(); 
    
    contentDiv.addEventListener('scroll', () => {
        if (contentDiv.scrollTop > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').catch(err => {});
    }
}

function saveState() {
    localStorage.setItem('dokkan_owned', JSON.stringify(state.owned));
    localStorage.setItem('dokkan_fav', JSON.stringify(state.favorites));
}

function switchTab(tabName) { 
    state.currentTab = tabName; 
    state.detailCharId = null; // Reset detail view on tab switch
    updateTabUI(); 
    render(); 
}

function updateTabUI() {
    tabs.forEach(t => t.classList.remove('active'));
    const activeBtn = document.querySelector(`button[onclick="switchTab('${state.currentTab}')"]`);
    if(activeBtn) activeBtn.classList.add('active');
}

function render() {
    contentDiv.innerHTML = '';
    // Detail View Check
    if (state.detailCharId) { 
        // Defined in zukan.js
        if(typeof renderCharacterDetail === 'function') renderCharacterDetail(state.detailCharId); 
        return; 
    }
    
    if (state.currentTab === 'zukan') {
        if(typeof renderZukanLayout === 'function') renderZukanLayout();
    } else {
        contentDiv.innerHTML = `<div style="padding:20px;text-align:center;color:#888;">${state.currentTab} (開発中)</div>`;
    }
}

// Common Actions
function toggleFav(btn, id) {
    if(event) event.stopPropagation();
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fid => fid !== id);
        if(btn) btn.classList.remove('active');
    } else {
        state.favorites.push(id);
        if(btn) btn.classList.add('active');
    }
    saveState();
}

function toggleOwned(btn, id) {
    if(event) event.stopPropagation();
    if (state.owned.includes(id)) {
        state.owned = state.owned.filter(oid => oid !== id);
        if(btn) btn.classList.remove('active');
    } else {
        state.owned.push(id);
        if(btn) btn.classList.add('active');
    }
    saveState();
}

// Expose to window for HTML onclick attributes
window.init = init;
window.switchTab = switchTab;
window.toggleFav = toggleFav;
window.toggleOwned = toggleOwned;
window.state = state; // Shared state
window.DB = DB;
window.LINKS = LINKS;
window.CATEGORY_LIST = CATEGORY_LIST;