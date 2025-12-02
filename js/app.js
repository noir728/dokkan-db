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
    
    if(typeof populateFilterOptions === 'function') populateFilterOptions();
    
    // ▼▼▼ 初期ロード: URLパラメータのチェック ▼▼▼
    const urlParams = new URLSearchParams(window.location.search);
    const charId = urlParams.get('id');
    if (charId && DB.some(c => c.id == charId)) {
        // 詳細画面を開く (zukan.jsの関数)
        if(typeof openDetail === 'function') {
            // 初期表示なのでpushStateはしない（現在のURLをそのまま使う）
            // ただし openDetail はデフォルトで pushState するので、
            // 履歴に追加したくない場合は flag を渡す設計にしてもよいが、
            // ここでは簡易的にそのまま呼ぶ (履歴が1つ増えるが許容)
            // あるいは zukan.js の openDetail に skipPushState 引数を追加する（実装済み）
            openDetail(Number(charId), true); 
        }
    } else {
        render(); 
    }
    
    contentDiv.addEventListener('scroll', () => {
        if (contentDiv.scrollTop > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });
    
    // ▼▼▼ Service Worker 更新検知ロジック ▼▼▼
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(reg => {
            
            // アップデートが見つかった場合（ダウンロード開始）
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                if (!installingWorker) return;

                // 既にコントロールされている場合（=初回アクセスではなく更新の場合）のみロード画面を出す
                if (navigator.serviceWorker.controller) {
                    showUpdateLoading();
                }

                installingWorker.onstatechange = () => {
                    // インストール完了（待機状態）になったら
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('New content is available; please refresh.');
                            // service-worker.js 側で skipWaiting しているので、
                            // 自動的に controllerchange が発火してリロードされるはず
                        } else {
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            };
        }).catch(err => {
            console.error('Service Worker registration failed:', err);
        });

        // 新しいSWがアクティブになったらリロード
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
        });
    }
}

// ロード画面を表示する関数
function showUpdateLoading() {
    const overlay = document.getElementById('update-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
    }
}

// ▼▼▼ Popstate Handler (Improved) ▼▼▼
window.addEventListener('popstate', (event) => {
    // 1. Restore Filters
    if (event.state) {
        if (event.state.filter) state.filter = event.state.filter;
        if (event.state.searchQuery !== undefined) state.searchQuery = event.state.searchQuery;
    } else {
        // Reset if no state (e.g. back to initial)
        if (typeof resetFilters === 'function') resetFilters(); 
    }

    // 2. Navigation Logic
    // Compare new desired ID (event.state.id) with current (state.detailCharId)
    const newId = (event.state && event.state.id) ? event.state.id : null;
    const currentId = state.detailCharId;

    if (newId) {
        // Moving to Detail (from List or another Detail)
        state.detailCharId = newId;
        state.detailFormIndex = 0;
        state.detailEzaMode = 'normal';
        state.animDirection = 'right'; // Entering detail
    } else {
        // Moving to List
        state.detailCharId = null;
        state.animDirection = 'left'; // Returning to list
    }

    // Force Render
    render();
});

function saveState() {
    localStorage.setItem('dokkan_owned', JSON.stringify(state.owned));
    localStorage.setItem('dokkan_fav', JSON.stringify(state.favorites));
}

function switchTab(tabName) { 
    state.currentTab = tabName; 
    
    // Clear Detail State when switching tabs
    if (state.detailCharId) {
        state.detailCharId = null;
        const url = new URL(window.location);
        url.searchParams.delete('id');
        // Push a clean state for the new tab
        window.history.pushState({ filter: state.filter, searchQuery: state.searchQuery }, '', url);
    }
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