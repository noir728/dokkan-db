// --- Helper Functions ---

function getCharIconHtml(char, formData) {
    const displayId = (formData && formData.id) ? formData.id : char.id;
    const displayType = (formData && formData.type) ? formData.type : char.type;
    const displayRarity = (formData && formData.rarity) ? formData.rarity : char.rarity;
    const displayClass = (formData && formData.class) ? formData.class : char.class;

    let typeColor = getAttributeColor(displayType);
    // Access state via global variable or passed arg (here assuming global state for simplicity in this refactor)
    // Ideally state should be passed or managed via a store.
    // For now, checking global state object
    const isOwned = typeof state !== 'undefined' && state.owned.includes(char.id);
    const isFav = typeof state !== 'undefined' && state.favorites.includes(char.id);
    
    const imgHtml = `<img src="assets/images/${displayId}.png" class="icon-layer layer-char" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="icon-layer layer-char" style="display:none;align-items:center;justify-content:center;color:#555;font-size:10px;background:#333;">IMG</div>`;
    const frameSrc = `assets/frames/${displayRarity}_${displayType}.png`;
    const frameHtml = `<img src="${frameSrc}" class="icon-layer layer-frame" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"><div class="icon-layer layer-frame" style="display:none; border: 2px solid ${typeColor}; box-sizing:border-box;"></div>`;
    const raritySrc = `assets/rarities/${displayRarity}.png`;
    const rarityHtml = `<div class="layer-rarity"><img src="${raritySrc}" class="rarity-img" onerror="this.parentElement.style.background='rgba(0,0,0,0.8)'; this.parentElement.innerHTML='${displayRarity}';"></div>`;
    const typeSrc = `assets/types/${displayClass}_${displayType}.png`;
    const typeHtml = `<div class="layer-type"><img src="${typeSrc}" class="type-img" onerror="this.parentElement.style.background='${typeColor}'; this.parentElement.innerHTML='${getShortType(displayType)}';"></div>`;
    
    let statusHtml = '';
    if (isOwned || isFav) {
        statusHtml = '<div class="layer-status">';
        if(isFav) statusHtml += '<div class="status-icon status-fav">★</div>';
        if(isOwned) statusHtml += '<div class="status-icon status-owned">✔</div>';
        statusHtml += '</div>';
    }
    
    let ezaHtml = '';
    if (char.seza) { 
         ezaHtml = `<div class="layer-eza-status"><img src="assets/status/seza.png" class="eza-icon-img"></div>`;
    } else if (char.eza) { 
         ezaHtml = `<div class="layer-eza-status"><img src="assets/status/eza.png" class="eza-icon-img"></div>`;
    }

    return `<div class="dokkan-icon">${frameHtml}${imgHtml}${rarityHtml}${typeHtml}${statusHtml}${ezaHtml}</div>`;
}

// 覚醒ルート用のアイコン生成関数
function getStepIconHtml(step, parentChar) {
    // Pseudo char for rendering
    // If ID exists, use it. If not, use placeholder text logic (simplified)
    const displayId = step.id;
    const displayRarity = step.rank;
    // Inherit type/class
    const displayType = parentChar.type; 
    // SSR usually uses normal type icon, others use Super/Extreme if available
    const displayClass = (step.rank === 'SSR') ? null : parentChar.class; 

    let typeColor = getAttributeColor(displayType);
    
    // ▼▼▼ ここが「極限」「超極限」アイコンを生成している部分です ▼▼▼
    // ID（キャラ画像）が指定されていない場合＝極限Z覚醒ステップとみなす
    if (!displayId) {
        let boxClass = 'medal-icon-box';
        if (step.rank === 'EZA') boxClass += ' eza'; 
        if (step.rank === 'SEZA') boxClass += ' seza';
        let content = 'IMG';
        if (step.rank === 'EZA') {
            content = `<img src="assets/status/eza.png" class="medal-img" style="width: 150%; height: 150%; object-fit: none;">`;
        }
        if (step.rank === 'SEZA') {
            content = `<img src="assets/status/seza.png" class="medal-img" style="width: 80%; height: 80%; object-fit: contain;">`;
        }
        
        return `<div class="${boxClass}">${content}<div class="rank-badge">${step.rank}</div></div>`;
    }

    // With ID, render full icon (reuse getCharIconHtml logic but simplified without status/eza)
    const imgHtml = `<img src="assets/images/${displayId}.png" class="icon-layer layer-char" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><div class="icon-layer layer-char" style="display:none;align-items:center;justify-content:center;color:#555;font-size:10px;background:#333;">IMG</div>`;
    const frameSrc = `assets/frames/${displayRarity}_${displayType}.png`;
    const frameHtml = `<img src="${frameSrc}" class="icon-layer layer-frame" onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"><div class="icon-layer layer-frame" style="display:none; border: 2px solid ${typeColor}; box-sizing:border-box;"></div>`;
    
    const raritySrc = `assets/rarities/${displayRarity}.png`;
    const rarityHtml = `<div class="layer-rarity"><img src="${raritySrc}" class="rarity-img" onerror="this.parentElement.style.display='none'"></div>`;
    
    // Type Icon logic
    let typeSrc = '';
    if (displayClass) typeSrc = `assets/types/${displayClass}_${displayType}.png`;
    else typeSrc = `assets/types/${displayType}.png`; // Normal type
    
    const typeHtml = `<div class="layer-type"><img src="${typeSrc}" class="type-img" onerror="this.parentElement.style.display='none'"></div>`;

    return `<div class="dokkan-icon medal-icon-wrapper">${frameHtml}${imgHtml}${rarityHtml}${typeHtml}</div>`;
}


function getRankColor(r) { return (r==='LR') ? 'linear-gradient(45deg, #ff0000, #ffff00)' : (r==='UR') ? '#ff8c00' : '#aaa'; }
function getShortType(t) { return t ? (t==='AGL'?'速':t==='TEQ'?'技':t==='INT'?'知':t==='STR'?'力':'体') : '?'; }
function getAttributeColor(t) { return t ? (t==='AGL'?'#00ccff':t==='TEQ'?'#4cd964':t==='INT'?'#ba55d3':t==='STR'?'#ff4d4d':'#ffa500') : '#888'; }

function parsePassiveText(text) {
    if(!text) return "";
    let formatted = text.replace(/\[img:([^\]]+)\]/g, '<img src="assets/skills/$1.png" class="inline-skill-icon" onerror="this.style.display=\'none\'">');
    return formatted.split('\n').map(line => `<span class="passive-bullet">${line}</span>`).join('');
}

function formatText(text) {
    if (!text) return "";
    return text.replace(/([0-9]+%?|\+[0-9]+)/g, '<span class="hl-num">$1</span>')
               .replace(/名称に「([^」]+)」/g, '名称に<span class="embedded-link" onclick="applyFilter(\'name\', \'$1\')">「$1」</span>')
               .replace(/「([^」]+)」/g, '<span class="embedded-link" onclick="applyFilter(\'category\', \'$1\')">「$1」</span>')
               .replace(/\n/g, '<br>');
}

function scrollToTop() { 
    const c = document.getElementById('main-content');
    if(c) c.scrollTo({ top: 0, behavior: 'smooth' }); 
}