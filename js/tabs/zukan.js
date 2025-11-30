// Zukan related logic

// --- Initialization ---
function populateFilterOptions() {
    // DBなどがまだ読み込まれていない場合は何もしない
    if (typeof DB === 'undefined') return;

    const allCats = new Set(typeof CATEGORY_LIST !== 'undefined' ? CATEGORY_LIST : []);
    const allLinks = new Set(typeof LINKS !== 'undefined' ? Object.keys(LINKS) : []);
    
    // マスタデータが空ならDBから収集（フォールバック）
    if (allCats.size === 0 || allLinks.size === 0) {
        DB.forEach(c => {
            if(c.categories) c.categories.forEach(cat => allCats.add(cat));
            if(c.links) c.links.forEach(l => allLinks.add(l)); 
            if(c.forms) c.forms.forEach(f => {
                if(f.links) f.links.forEach(l => allLinks.add(l));
            });
        });
    }

    const catList = document.getElementById('category-list');
    if(catList) {
        catList.innerHTML = '';
        Array.from(allCats).sort().forEach(cat => { 
            const op = document.createElement('option'); 
            op.value = cat; 
            catList.appendChild(op); 
        });
    }
    
    const linkList = document.getElementById('link-list');
    if(linkList) {
        linkList.innerHTML = '';
        Array.from(allLinks).sort().forEach(l => { 
            const op = document.createElement('option'); 
            op.value = l; 
            linkList.appendChild(op); 
        });
    }
}

// --- Filter UI Logic ---

function openFilterModal() { 
    const modal = document.getElementById('filter-modal');
    if(modal) modal.classList.add('open'); 
}

function closeFilterModal() { 
    const modal = document.getElementById('filter-modal');
    if(modal) modal.classList.remove('open'); 
    renderZukanList(); 
}

function setFilterLogic(logic) { 
    state.filter.logic = logic; 
    const btnAnd = document.getElementById('logic-and');
    const btnOr = document.getElementById('logic-or');
    if(btnAnd) btnAnd.classList.toggle('selected', logic === 'AND'); 
    if(btnOr) btnOr.classList.toggle('selected', logic === 'OR'); 
}

function toggleMiniLogic(type) {
    const key = type + 'Logic';
    const current = state.filter[key];
    state.filter[key] = (current === 'AND') ? 'OR' : 'AND';
    
    const btn = document.getElementById(`logic-btn-${type}`);
    if (btn) {
        const opts = btn.querySelectorAll('.toggle-mini-opt');
        const slider = btn.querySelector('.toggle-mini-slider');
        
        if(state.filter[key] === 'OR') {
            btn.classList.add('state-or');
            if(opts[0]) opts[0].classList.remove('active'); 
            if(opts[1]) opts[1].classList.add('active');
            if(slider) {
                slider.style.transform = 'translateX(33px)';
                slider.style.backgroundColor = 'var(--accent-str)';
            }
        } else {
            btn.classList.remove('state-or');
            if(opts[0]) opts[0].classList.add('active'); 
            if(opts[1]) opts[1].classList.remove('active');
            if(slider) {
                slider.style.transform = 'translateX(0px)';
                slider.style.backgroundColor = '#555';
            }
        }
    }
}

function setSort(value) { 
    state.filter.sort = value; 
    renderZukanList(); 
}

function toggleFilter(key, value) {
    const targetKey = (key === 'rarity') ? 'rarities' : (key === 'class') ? 'classes' : (key === 'type' ? 'types' : (key === 'eza' ? 'eza' : (key === 'status' ? 'status' : 'saTypes')));
    const arr = state.filter[targetKey];
    const idx = arr.indexOf(value);
    if (idx > -1) arr.splice(idx, 1); else arr.push(value);
    updateFilterUI();
}

function addFilterFromInput(type, input) {
    const val = input.value;
    if (!val) return;
    const arr = type === 'category' ? state.filter.categories : state.filter.links;
    if (!arr.includes(val)) arr.push(val);
    input.value = "";
    updateFilterUI();
}

function removeArrayFilter(type, value) {
    const arr = type === 'category' ? state.filter.categories : state.filter.links;
    const idx = arr.indexOf(value);
    if (idx > -1) arr.splice(idx, 1);
    updateFilterUI();
}

function resetFilters() {
    state.filter = { 
        sort: 'releaseDesc', logic: 'AND', 
        rarities: [], rarityLogic:'OR', types: [], typeLogic:'OR', classes: [], classLogic:'OR', 
        status: [], eza: [], ezaLogic:'OR', saTypes: [], saTypeLogic:'OR', 
        categories: [], categoryLogic:'AND', links: [], linkLogic:'AND' 
    };
    
    const sortSelect = document.getElementById('sort-select');
    if(sortSelect) sortSelect.value = 'releaseDesc';
    
    // Reset UI
    const btnAnd = document.getElementById('logic-and');
    const btnOr = document.getElementById('logic-or');
    if(btnAnd) { btnAnd.classList.add('selected'); }
    if(btnOr) { btnOr.classList.remove('selected'); }

    const allLogics = ['type', 'class', 'rarity', 'eza', 'saType', 'category', 'link'];
    allLogics.forEach(t => {
        // Reset state logic
        state.filter[t+'Logic'] = (t === 'category' || t === 'link') ? 'AND' : 'OR';
        // Reset Mini Toggle UI
        const btn = document.getElementById(`logic-btn-${t}`);
        if(btn) {
            const isOr = state.filter[t+'Logic'] === 'OR';
            const opts = btn.querySelectorAll('.toggle-mini-opt');
            const slider = btn.querySelector('.toggle-mini-slider');
            
            if(isOr) {
                btn.classList.add('state-or');
                if(opts[0]) opts[0].classList.remove('active');
                if(opts[1]) opts[1].classList.add('active');
                if(slider) {
                    slider.style.transform = 'translateX(33px)';
                    slider.style.backgroundColor = 'var(--accent-str)';
                }
            } else {
                btn.classList.remove('state-or');
                if(opts[0]) opts[0].classList.add('active');
                if(opts[1]) opts[1].classList.remove('active');
                if(slider) {
                    slider.style.transform = 'translateX(0px)';
                    slider.style.backgroundColor = '#555';
                }
            }
        }
    });

    updateFilterUI();
}

function updateFilterUI() {
    const updateChips = (containerId, arr) => {
        const container = document.getElementById(containerId);
        if(!container) return;
        Array.from(container.children).forEach(chip => {
            const onclickVal = chip.getAttribute('onclick');
            if(onclickVal) {
                const match = onclickVal.match(/'([^']+)'\)$/);
                if (match) { const val = match[1]; chip.classList.toggle('selected', arr.includes(val)); }
            }
        });
    };

    updateChips('filter-types', state.filter.types);
    updateChips('filter-classes', state.filter.classes);
    updateChips('filter-rarities', state.filter.rarities);
    updateChips('filter-status', state.filter.status);
    updateChips('filter-eza', state.filter.eza);
    updateChips('filter-sa-type', state.filter.saTypes);

    const catContainer = document.getElementById('selected-cats');
    if(catContainer) {
        catContainer.innerHTML = '';
        state.filter.categories.forEach(c => { 
            const chip = document.createElement('div'); 
            chip.className = 'filter-chip selected'; 
            chip.innerText = c + ' ×'; 
            chip.onclick = () => removeArrayFilter('category', c); 
            catContainer.appendChild(chip); 
        });
    }
    
    const linkContainer = document.getElementById('selected-links');
    if(linkContainer) {
        linkContainer.innerHTML = '';
        state.filter.links.forEach(l => { 
            const chip = document.createElement('div'); 
            chip.className = 'filter-chip selected'; 
            chip.innerText = l + ' ×'; 
            chip.onclick = () => removeArrayFilter('link', l); 
            linkContainer.appendChild(chip); 
        });
    }
}

// --- Navigation & Rendering Functions ---

window.applyFilter = function(type, value) {
    resetFilters(); 
    state.searchQuery = '';
    
    if (type === 'name') state.searchQuery = value;
    else if (type === 'category') state.filter.categories = [value];
    else if (type === 'link') state.filter.links = [value];
    
    updateFilterUI();
    
    if(typeof window.closeDetail === 'function') window.closeDetail();
    state.currentTab = 'zukan';
    if(typeof updateTabUI === 'function') updateTabUI();
    if(typeof render === 'function') render();
    if(typeof window.scrollToTop === 'function') window.scrollToTop();
};

function clearSearch() { 
    state.searchQuery = ''; 
    const input = document.getElementById('zukan-search-input');
    if(input) input.value = ''; 
    renderZukanList(); 
}

// ★修正: ボタンの見た目を即時更新し、再描画を呼ぶ
function setListMode(mode) { 
    state.listMode = mode; 
    const btns = document.querySelectorAll('.mode-btn');
    if(btns.length > 1) {
        // 0: Grid, 1: List
        btns[0].className = `mode-btn ${mode==='icon'?'active':''}`;
        btns[1].className = `mode-btn ${mode==='detail'?'active':''}`;
    }
    renderZukanList();
}

function renderZukanLayout() {
    // 描画先が存在するか確認
    const contentDiv = document.getElementById('main-content');
    if(!contentDiv) return;

    let header = document.getElementById('zukan-header-el');
    
    // ヘッダーがない、またはクリアされている場合は再生成
    if (!header || !contentDiv.contains(header)) {
        contentDiv.innerHTML = ''; // 一旦クリアして重複防止

        header = document.createElement('div');
        header.id = 'zukan-header-el';
        header.className = 'zukan-header';
        header.innerHTML = `
            <div class="search-container"><div class="search-wrapper"><input type="text" id="zukan-search-input" class="search-bar" placeholder="名前、二つ名で検索..." value="${state.searchQuery}"><button id="search-clear-btn" class="search-clear-btn" onclick="clearSearch()">×</button></div></div>
            <div class="action-row"><button id="zukan-filter-btn" class="filter-btn" onclick="openFilterModal()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>絞り込み<span id="filter-badge" style="display:none; background:var(--highlight);color:black;font-size:10px;padding:2px 5px;border-radius:10px;margin-left:4px;"></span></button><div class="sort-select-wrapper"><select id="sort-select" class="sort-select-main" onchange="setSort(this.value)"><option value="releaseDesc">実装日: 新しい順</option><option value="releaseAsc">実装日: 古い順</option><option value="rarityDesc">レアリティ: 高い順</option><option value="rarityAsc">レアリティ: 低い順</option><option value="costDesc">コスト: 高い順</option><option value="costAsc">コスト: 低い順</option><option value="hpDesc">HP: 高い順</option><option value="atkDesc">ATK: 高い順</option><option value="defDesc">DEF: 高い順</option></select></div><div class="mode-switch"><div class="mode-btn ${state.listMode === 'icon' ? 'active' : ''}" onclick="setListMode('icon')"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg></div><div class="mode-btn ${state.listMode === 'detail' ? 'active' : ''}" onclick="setListMode('detail')"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg></div></div></div><div class="text-xs text-gray-500" id="zukan-count" style="margin-top:4px; text-align:right;">---</div>
            `;
            
        header.querySelector('input').addEventListener('input', (e) => { 
            state.searchQuery = e.target.value; 
            renderZukanList(); 
        });

        contentDiv.appendChild(header);
        
        const grid = document.createElement('div');
        grid.id = 'zukan-grid';
        contentDiv.appendChild(grid);
        
        // 初回描画
        renderZukanList(grid);
    } else {
        // 既にレイアウトがある場合はリストのみ更新
        renderZukanList();
    }
}

// ★修正: grid要素を引数でも受け取れるようにする（確実性向上）
function renderZukanList(targetGrid) {
    const f = state.filter;
    const query = state.searchQuery.toLowerCase();
    
    // クリアボタン表示制御
    const clrBtn = document.getElementById('search-clear-btn');
    if(clrBtn) {
        if(state.searchQuery) clrBtn.classList.add('visible');
        else clrBtn.classList.remove('visible');
    }

    // フィルタリング
    const check = (arr, logic, checkFn) => {
        if (arr.length === 0) return true;
        if (logic === 'AND') return arr.every(checkFn);
        return arr.some(checkFn);
    };

    let displayDB = DB.filter(char => {
        if (query) {
            const n = char.name.toLowerCase();
            const t = char.title ? char.title.toLowerCase() : '';
            const y = char.yomi ? char.yomi : '';
            if (!n.includes(query) && !t.includes(query) && !y.includes(query)) return false;
        }

        if (!check(f.rarities, f.rarityLogic, r => char.rarity === r)) return false;
        if (!check(f.types, f.typeLogic, t => char.type === t)) return false;
        if (!check(f.classes, f.classLogic, c => char.class === c)) return false;
        
        if (f.status.includes('owned') && !state.owned.includes(char.id)) return false;
        if (f.status.includes('favorite') && !state.favorites.includes(char.id)) return false;

        if (f.eza.length > 0) {
            let isEza = char.eza || (char.awakening && char.awakening.some(a => a.rank === 'EZA'));
            let isSeza = (char.awakening && char.awakening.some(a => a.rank === 'SEZA'));
            const match = f.eza.some(val => {
                 if (val === 'none') return !isEza;
                 if (val === 'eza') return isEza && !isSeza;
                 if (val === 'seza') return isSeza;
                 return false;
            });
            if (!match) return false; 
        }

        if (!check(f.categories, f.categoryLogic, c => char.categories?.includes(c))) return false;
        if (!check(f.links, f.linkLogic, l => {
            if(char.links?.includes(l)) return true;
            if(char.forms?.some(frm => frm.links?.includes(l))) return true;
            return false;
        })) return false;

        if (f.saTypes.length > 0) {
            const allSaTypes = new Set();
            const scanSA = (saList) => saList?.forEach(sa => allSaTypes.add(sa.type));
            scanSA(char.superAttacks);
            char.forms?.forEach(f => scanSA(f.superAttacks));
            char.forms_eza?.forEach(f => scanSA(f.superAttacks));
            if (!check(f.saTypes, f.saTypeLogic, t => allSaTypes.has(t))) return false;
        }

        return true;
    });

    // ソート
    if (f.sort) {
         displayDB.sort((a, b) => {
            const getStat = (c, k) => (c.forms && c.forms[0] && c.forms[0].stats && c.forms[0].stats[k]) ? c.forms[0].stats[k] : (c.stats ? c.stats[k] : 0);
            const getRank = (r) => RARITY_RANK[r] !== undefined ? RARITY_RANK[r] : -1;
            
            if(f.sort === 'releaseDesc') return (b.release||"").localeCompare(a.release||"");
            if(f.sort === 'releaseAsc') return (a.release||"").localeCompare(b.release||"");
            if(f.sort === 'rarityDesc') return getRank(b.rarity) - getRank(a.rarity);
            if(f.sort === 'rarityAsc') return getRank(a.rarity) - getRank(b.rarity);
            if(f.sort === 'costDesc') return (b.cost||0) - (a.cost||0);
            if(f.sort === 'costAsc') return (a.cost||0) - (b.cost||0);
            if(f.sort === 'hpDesc') return getStat(b,'hp') - getStat(a,'hp');
            if(f.sort === 'atkDesc') return getStat(b,'atk') - getStat(a,'atk');
            if(f.sort === 'defDesc') return getStat(b,'def') - getStat(a,'def');
            return 0;
        });
    }

    const countEl = document.getElementById('zukan-count');
    if(countEl) countEl.innerText = `${displayDB.length}体 表示中`;

    const badge = document.getElementById('filter-badge');
    const btn = document.getElementById('zukan-filter-btn');
    if(badge && btn) {
        const activeCount = f.rarities.length + f.types.length + f.classes.length + f.status.length + f.eza.length + f.saTypes.length + f.categories.length + f.links.length;
        if (activeCount > 0) { badge.style.display = 'inline-block'; badge.innerText = activeCount; btn.classList.add('active'); }
        else { badge.style.display = 'none'; btn.classList.remove('active'); }
    }

    // グリッド取得 (引数またはDOMから)
    const grid = targetGrid || document.getElementById('zukan-grid');
    if(!grid) return; // まだDOMになければ終了

    grid.className = `char-grid ${state.listMode === 'detail' ? 'mode-detail' : ''}`;
    grid.innerHTML = '';
    
    displayDB.forEach(char => {
        const item = document.createElement('div');
        const iconHtml = (typeof getCharIconHtml === 'function') ? getCharIconHtml(char) : 'IMG'; 

        if (state.listMode === 'icon') {
            item.className = 'char-item-icon'; item.innerHTML = iconHtml;
        } else {
            item.className = 'char-item-row';
            const rawStats = (char.forms && char.forms[0]) ? char.forms[0].stats : char.stats;
            let displayStats = { hp: '---', atk: '---', def: '---' };
            if (rawStats) {
                if (rawStats.rainbow) displayStats = rawStats.rainbow;
                else if (rawStats.hp) displayStats = rawStats;
            }
            const ezaBadge = (char.eza) 
                ? `<span class="eza-badge-mini">極限</span>` : '';

            item.innerHTML = `
                <div class="list-icon-wrapper">${iconHtml}</div>
                <div class="char-row-info">
                    <div class="char-row-header"><div class="char-row-title">${char.title || ''}</div><div class="char-row-date">${char.release || ''}</div></div>
                    <div class="char-row-name">${char.name.replace(/\n/g, ' ')}${ezaBadge}</div>
                    <div class="char-row-details">
                        <div class="list-cost">コスト ${char.cost || '-'}</div>
                        <div class="char-row-stats"><span>HP ${displayStats.hp}</span><span>ATK ${displayStats.atk}</span><span>DEF ${displayStats.def}</span></div>
                    </div>
                </div>`;
        }
        item.onclick = () => openDetail(char.id);
        grid.appendChild(item);
    });
}

// --- Detail View Logic ---

function openDetail(id) {
    state.detailCharId = id;
    state.detailFormIndex = 0;
    state.detailEzaMode = 'normal';
    if(typeof render === 'function') render();
    if(typeof scrollToTop === 'function') scrollToTop();
}

function closeDetail() {
    state.detailCharId = null;
    if(typeof render === 'function') render();
}

function setDetailForm(index) {
    state.detailFormIndex = index;
    renderCharacterDetail(state.detailCharId);
}

// ★修正: 極限切り替え時に変身状態をリセットしない
function setEzaMode(mode) {
    state.detailEzaMode = mode;
    // state.detailFormIndex = 0; // ← この行を削除またはコメントアウトしました
    
    // ※念のため、切り替え先のモードに変身後がない場合のエラー回避（存在チェック）
    const char = DB.find(c => c.id === state.detailCharId);
    let targetForms = char.forms;
    if (mode === 'eza' && char.forms_eza) targetForms = char.forms_eza;
    if (mode === 'seza' && char.forms_seza) targetForms = char.forms_seza;
    
    // もし切り替え先で現在のフォーム番号が存在しなければ0に戻す
    if (!targetForms || !targetForms[state.detailFormIndex]) {
        state.detailFormIndex = 0;
    }

    renderCharacterDetail(state.detailCharId);
}

function toggleEzaSwitch(el) {
    if(el.classList.contains('disabled')) return;
    const char = DB.find(c => c.id === state.detailCharId);
    let nextMode = 'normal';
    if(state.detailEzaMode === 'normal') { if(char.eza) nextMode = 'eza'; }
    else if(state.detailEzaMode === 'eza') { if(char.seza) nextMode = 'seza'; else nextMode = 'normal'; }
    else { nextMode = 'normal'; }
    setEzaMode(nextMode);
}

function renderCharacterDetail(id) {
    const contentDiv = document.getElementById('main-content');
    contentDiv.innerHTML = ''; 
    const char = DB.find(c => c.id === id);
    if(!char) return;
    
    let targetForms = char.forms;
    if (state.detailEzaMode === 'eza' && char.forms_eza) targetForms = char.forms_eza;
    if (state.detailEzaMode === 'seza' && char.forms_seza) targetForms = char.forms_seza;
    
    const currentData = (targetForms && targetForms.length > 0 && targetForms[state.detailFormIndex]) ? targetForms[state.detailFormIndex] : char;

    const displayName = (currentData.name || char.name || "").replace(/\n/g, '<br>');
    const displayRawName = (currentData.name || char.name || "").split('\n')[0];

    const container = document.createElement('div');
    
    // Header
    const header = document.createElement('div');
    header.className = 'detail-header';
    header.innerHTML = `
        <div class="header-left">
            <button class="back-btn" onclick="closeDetail()">←</button>
            <div>
                <div class="date-info" style="font-size:10px; color:#888; display:flex; gap:5px; margin-bottom:2px;">
                    <span style="border:1px solid #444; padding:1px 4px; border-radius:3px;">実装: ${char.release || '---'}</span>
                    ${char.eza ? `<span style="background:#4a2c00; color:#ffa500; border:1px solid #804000; padding:1px 4px; border-radius:3px;">極限: ${char.eza}</span>` : ''}
                </div>
                <div class="char-sub-header">${char.title || ''}</div>
                <div class="char-name-header clickable-tag" onclick="applyFilter('name', '${displayRawName}')">${displayName}</div>
            </div>
        </div>
        <div class="action-buttons">
            <button class="icon-btn ${state.favorites.includes(id)?'active':''}" onclick="toggleFav(this, ${id})">★</button>
            <button class="icon-btn owned-btn ${state.owned.includes(id)?'active':''}" onclick="toggleOwned(this, ${id})">BOX</button>
        </div>
    `;
    
    const stickyWrapper = document.createElement('div');
    stickyWrapper.className = 'sticky-header-wrapper';
    stickyWrapper.appendChild(header);
    
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'tabs-control-row';

    // Tabs
    if (targetForms && targetForms.length > 0) {
        const tabRow = document.createElement('div');
        tabRow.className = 'transform-tabs';
        targetForms.forEach((form, idx) => {
            const isActive = state.detailFormIndex === idx ? 'active' : '';
            tabRow.innerHTML += `<div class="transform-tab-item ${isActive}" onclick="setDetailForm(${idx})">${form.label || '形態'+(idx+1)}</div>`;
        });
        controlsContainer.appendChild(tabRow);
    } else {
        controlsContainer.innerHTML += '<div class="transform-tabs" style="flex:1"></div>';
    }

    // EZA Switch
    if (char.forms_eza || char.forms_seza) {
        const mode = state.detailEzaMode;
        const hasSeza = !!char.forms_seza;
        const hasEza = char.eza || (char.awakening && char.awakening.some(a => a.rank === 'EZA'));
        const ezaBadge = hasEza ? `<span class="eza-badge-mini">極限</span>` : '';        
        const ezaSwitch = document.createElement('div');
        ezaSwitch.className = 'eza-switch-container-inline'; 
        ezaSwitch.innerHTML = `
            <div class="eza-switch">
                <div class="eza-switch-item ${mode === 'normal' ? 'active' : ''}" onclick="setEzaMode('normal')">通常</div>
                <div class="eza-switch-item ${mode === 'eza' ? 'active active-eza' : ''} ${!hasEza ? 'disabled' : ''}" onclick="${hasEza ? "setEzaMode('eza')" : ""}">極限</div>
                <div class="eza-switch-item ${mode === 'seza' ? 'active active-seza' : ''} ${!hasSeza ? 'disabled' : ''}" onclick="${hasSeza ? "setEzaMode('seza')" : ""}">超極</div>
            </div>`;
        controlsContainer.appendChild(ezaSwitch);
    }
    
    stickyWrapper.appendChild(controlsContainer);
    container.appendChild(stickyWrapper);

    const body = document.createElement('div');
    body.className = 'detail-container';

    // Awakening
    if (char.awakening) {
        let awkHtml = `<div class="section-title" style="margin-top:10px;">覚醒ルート</div><div class="scroll-container-x">`;
        char.awakening.forEach((step, idx) => {
            const iconHtml = getStepIconHtml(step, char);
            let clickAction = "";
            let cursorStyle = "";
            if (step.id) {
                clickAction = `onclick="openDetail(${step.id})"`;
                cursorStyle = `cursor: pointer;`;
            }
            awkHtml += `<div class="medal-step" ${clickAction} style="${cursorStyle}">${iconHtml}</div>`;
            if (idx < char.awakening.length - 1) {
                const nextStep = char.awakening[idx + 1];
                if (nextStep.medals) {
                    awkHtml += `<div class="transition-area"><div class="medals-req">`;
                    nextStep.medals.forEach(medal => { 
                         // ★修正: メダル画像の重ね合わせ対応
                         // data.js で { name: "メダル表", bg: "メダル裏", count: 7 } のように指定されている場合に対応
                         
                         let bgHtml = '';
                         if (medal.bg) {
                             bgHtml = `<img src="assets/medals/${medal.bg}.png" class="medal-bg" onerror="this.style.display='none'">`;
                         }

                         let medalImg = `<img src="assets/medals/${medal.name}.png" class="medal-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`;
                         let medalFallback = `<div class="req-icon-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;color:#fff;font-size:8px;">M</div>`;
                         
                         // req-icon の中に bgHtml と medalImg を両方入れる
                         awkHtml += `<div class="req-item"><div class="req-icon" title="${medal.name}">${bgHtml}${medalImg}${medalFallback}</div><div class="req-count">x${medal.count}</div></div>`; 
                    });
                    awkHtml += `</div><div class="arrow-long">→</div></div>`;
                } else { awkHtml += `<div class="transition-area"><div class="arrow-long">→</div></div>`; }
            }
        });
        awkHtml += `</div>`;
        body.innerHTML += awkHtml;
    }

    // Stats
    if (currentData.stats) {
        let sRainbow, sFifty, sBase;
        if (currentData.stats.rainbow) {
            sRainbow = currentData.stats.rainbow;
            sFifty   = currentData.stats.fifty || { hp:0, atk:0, def:0 };
            sBase    = currentData.stats.base || { hp:0, atk:0, def:0 };
        } else {
            const base = currentData.stats;
            const calc = (val, diff) => {
                const v = Number(val);
                if(isNaN(v)) return '---';
                return (v - diff > 0 ? v - diff : 0);
            };
            if(base.hp) {
                sRainbow = base;
                sFifty   = { hp: calc(base.hp, 3000), atk: calc(base.atk, 3000), def: calc(base.def, 3000) };
                sBase    = { hp: calc(base.hp, 5000), atk: calc(base.atk, 5000), def: calc(base.def, 5000) };
            } else {
                sRainbow = {hp:'---',atk:'---',def:'---'};
                sFifty = sRainbow; sBase = sRainbow;
            }
        }
        let maxLv = 100;
        if (char.rarity === 'LR') maxLv = 150;
        else if (char.rarity === 'UR') {
            if (state.detailEzaMode === 'eza' || state.detailEzaMode === 'seza') maxLv = 140; else maxLv = 120;
        } else if (char.rarity === 'SSR') maxLv = 80;

        body.innerHTML += `<div class="section-title">ステータス</div><div style="display:flex; gap:10px;"><div style="display:flex; flex-direction:column; align-items:center;"><div class="detail-icon-large">${getCharIconHtml(char, currentData)}</div><div class="text-xs text-gray-300 mt-1">最大Lv.${maxLv}</div>${char.cost ? `<div class="char-cost">コスト: ${char.cost}</div>` : ''}</div><table style="width:100%; font-size:11px; text-align:center; border-collapse:collapse; border:1px solid #444; border-radius:4px; overflow:hidden;"><tr style="background:#333; color:#aaa;"><th></th><th>HP</th><th>ATK</th><th>DEF</th></tr><tr style="background:#222; border-bottom:1px solid #333;"><td style="background:#2a2a2e;font-weight:bold;">LvMax</td><td>${sBase.hp}</td><td>${sBase.atk}</td><td>${sBase.def}</td></tr><tr style="background:#222; border-bottom:1px solid #333;"><td style="background:#2a2a2e;font-weight:bold;">55%</td><td>${sFifty.hp}</td><td>${sFifty.atk}</td><td>${sFifty.def}</td></tr><tr style="background:#222;"><td style="background:#2a2a2e;font-weight:bold;">100%</td><td>${sRainbow.hp}</td><td>${sRainbow.atk}</td><td>${sRainbow.def}</td></tr></table></div>`;
    }

    // Leader
    let displayLeaderSkill = char.leaderSkill;
    if (state.detailEzaMode === 'eza' && char.leaderSkill_eza) displayLeaderSkill = char.leaderSkill_eza;
    else if (state.detailEzaMode === 'seza' && char.leaderSkill_seza) displayLeaderSkill = char.leaderSkill_seza;

    if (displayLeaderSkill) {
        body.innerHTML += `<div class="section-title">リーダースキル</div><div class="skill-card"><div class="passive-text">${formatText(displayLeaderSkill)}</div></div>`;
    }

    // Passive
    if (currentData.passive) {
        let content = '';
        if (currentData.passive.intro) {
            content += `<div class="entry-effect-box"><div class="entry-title">登場時演出</div><div class="passive-text">${formatText(currentData.passive.intro.condition)}<br>${formatText(currentData.passive.intro.effect)}</div></div>`;
        }
        if (currentData.passive.details) {
            currentData.passive.details.forEach(group => {
                content += `<div class="passive-group">`;
                if(group.title) content += `<div class="passive-title">${group.title}</div>`;
                if(group.effects && group.effects.length > 0) {
                    content += `<div class="passive-list">`;
                    group.effects.forEach(effect => {
                        let processedText = effect.replace(/\[img:([^\]]+)\]/g, '<img src="assets/skills/$1.png" class="inline-skill-icon" onerror="this.style.display=\'none\'">').replace(/([0-9]+%?|\+[0-9]+)/g, '<span class="hl-num">$1</span>');
                        content += `<div class="passive-bullet">${processedText}</div>`;
                    });
                    content += `</div>`;
                }
                content += `</div>`;
            });
        } else {
            content += `<div class="passive-text">${parsePassiveText(currentData.passive.main)}</div>`;
        }
        if (currentData.passive.maxValues) {
            content += `<div class="skill-footer"><div class="skill-val-item"><span class="skill-val-label">最大会心</span><span>${currentData.passive.maxValues.crit||'-'}</span></div><div class="skill-val-item"><span class="skill-val-label">最大必殺追撃</span><span>${currentData.passive.maxValues.add||'-'}</span></div><div class="skill-val-item"><span class="skill-val-label">最大回避</span><span>${currentData.passive.maxValues.dodge||'-'}</span></div></div>`;
        }
        body.innerHTML += `<div class="section-title">パッシブスキル</div><div class="skill-card"><div class="skill-name">${currentData.passive.name}</div>${content}</div>`;
    }

    // Active
    if (currentData.active) {
        body.innerHTML += `<div class="section-title">アクティブスキル</div><div class="skill-card"><div class="skill-name">${currentData.active.name}</div><div class="passive-text"><span style="color:var(--highlight); font-weight:bold;">[条件]</span> ${formatText(currentData.active.condition)}<br><span style="color:var(--highlight); font-weight:bold;">[効果]</span> ${formatText(currentData.active.effect)}</div></div>`;
    }

    // Super Attacks
    if (currentData.superAttacks) {
        body.innerHTML += `<div class="section-title">必殺技</div>`;
        currentData.superAttacks.forEach(sa => {
            let color = (sa.ki && sa.ki.includes("18")) ? "#ff4d4d" : "#00ccff";
            let typeIcon = `<span class="sa-type-badge">${sa.type}</span>`;
            if(sa.type) {
                typeIcon = `<div class="sa-type-badge"><img src="assets/sa_types/${sa.type}.png" class="sa-type-icon" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'"><span>${sa.type}</span></div>`;
            }
            body.innerHTML += `<div class="super-attack-card" style="border-top-color: ${color};"><div class="sa-header"><span class="sa-ki-badge" style="background:${color};">気力 ${sa.ki || '12'}</span>${sa.maxLv ? `<span class="sa-lv-badge">Lv${sa.maxLv}</span>` : ''}<span class="sa-name">${sa.name}</span>${typeIcon}</div><div class="sa-effect">${formatText(sa.effect)}</div></div>`;
        });
    }

    // Categories
    if (char.categories) {
        // ★修正: HTML文字列生成の仕方を修正。innerHTML+=の繰り返しをやめる
        let catHtml = `<div class="section-title">カテゴリ</div><div style="display:flex; flex-wrap:wrap; gap:6px;">`;
        char.categories.forEach(cat => { 
            catHtml += `<span class="clickable-tag" onclick="window.applyFilter('category', '${cat}')" style="background:#333; padding:6px 12px; border-radius:12px; font-size:12px; border:1px solid #555;">${cat}</span>`; 
        });
        catHtml += `</div>`;
        body.innerHTML += catHtml;
    }

    if (currentData.links) {
        let linkHtml = `<div class="section-title">リンクスキル</div><div class="w-full mt-2 border-t border-[#3a3a3e]"><table class="link-table">`;
        currentData.links.forEach(linkName => {
            const effectData = LINKS[linkName] || { lv1: "---", lv10: "---" };
            linkHtml += `<tr onclick="applyFilter('link', '${linkName}')" style="cursor:pointer;"><td style="border-bottom:1px solid #333; padding:8px 4px;"><div class="link-name">${linkName}</div><div class="link-effect-row"><span class="link-lv-tag">Lv1</span><span>${formatText(effectData.lv1)}</span></div><div class="link-effect-row"><span class="link-lv-tag">Lv10</span><span>${formatText(effectData.lv10)}</span></div></td></tr>`;
        });
        linkHtml += `</table></div>`;
        body.innerHTML += linkHtml;
    }
    
    if (char.partners) {
        let partnersHtml = '';
        char.partners.forEach(p => {
            let typeColor = getAttributeColor(p.type);
            partnersHtml += `<div class="partner-item"><div class="partner-icon" style="border-color:${typeColor}"><div class="img-placeholder">IMG</div><div class="match-count">${p.match}</div></div><div class="partner-name">${p.name}</div></div>`;
        });
        body.innerHTML += `<div class="section-title">相性の良いキャラ</div><div class="partner-scroll">${partnersHtml}</div>`;
    }

    if (char.farmCards) {
        body.innerHTML += `<div class="section-title">技上げ素材</div><div class="scroll-container-x">`;
        char.farmCards.forEach(card => { body.innerHTML += `<div class="farm-card"><div class="farm-card-icon">IMG<div class="rank-badge">${card.rarity}</div></div><div class="farm-card-stage">${card.stage}</div><div class="farm-card-prob">${card.prob}</div></div>`; });
        body.innerHTML += `</div>`;
    }

    container.appendChild(body);
    contentDiv.appendChild(container);
}

// Expose all needed functions to window
window.init = init;
window.populateFilterOptions = populateFilterOptions;
window.openFilterModal = openFilterModal;
window.closeFilterModal = closeFilterModal;
window.setFilterLogic = setFilterLogic;
window.toggleMiniLogic = toggleMiniLogic;
window.setSort = setSort;
window.toggleFilter = toggleFilter;
window.addFilterFromInput = addFilterFromInput;
window.removeArrayFilter = removeArrayFilter;
window.resetFilters = resetFilters;
window.applyFilter = applyFilter;
window.clearSearch = clearSearch;
window.switchTab = switchTab;
window.updateTabUI = updateTabUI;
window.setListMode = setListMode;
window.renderZukanLayout = renderZukanLayout;
window.renderZukanList = renderZukanList;
window.openDetail = openDetail;
window.closeDetail = closeDetail;
window.setDetailForm = setDetailForm;
window.setEzaMode = setEzaMode;
window.toggleEzaSwitch = toggleEzaSwitch;
window.toggleFav = toggleFav;
window.toggleOwned = toggleOwned;
window.renderCharacterDetail = renderCharacterDetail;
window.render = render;
window.scrollToTop = scrollToTop;