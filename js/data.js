const CHARACTER_DATA = [
    {
        id: 1018710,
        title: "究極最強の融合",
        name: "ゴジータ",
        yomi: "ごじーた", // 追加: 平仮名検索用
        rarity: "LR",
        cost: 77,
        type: "STR",
        class: "Super",
        release: "2020/01/30",
        eza: "2023/02/24",
        leaderSkill: "「最後の切り札」または「フュージョン」カテゴリの気力+3、HPとATKとDEF170%UP",
        categories: ["フュージョン", "劇場版HERO", "最後の切り札", "かめはめ波", "変身強化", "あの世の戦士", "超サイヤ人を超えた力"],
        awakening: [
            { rank: "SSR", icon: "SSR" },
            { rank: "UR", medals: [{name:"超激戦", count:35}], icon: "UR" },
            { rank: "LR", medals: [{name:"超激戦", count:35}, {name:"物語", count:35}], icon: "LR" },
            { rank: "EZA", medals: [{name:"銅", count:15}, {name:"銀", count:40}, {name:"金", count:30}, {name:"虹", count:30}], icon: "極" }
        ],
        farmCards: [
            { rarity: "SSR", event: "物語", stage: "ドラゴンボール超 ブロリー", prob: "50%" }
        ],
        partners: [
            { id: 1018720, name: "ベジット(5周年)", match: 6, type: "TEQ" },
            { id: 1005220, name: "超ゴジータ", match: 5, type: "STR" }
        ],
        forms: [
            {
                label: "変身前",
                name: "ゴジータ",
                stats: { hp: 19250, atk: 20500, def: 12063 },
                superAttacks: [
                    { ki: "12~", maxLv: 25, name: "メテオアタック", type: "格闘", effect: "1ターンATKとDEFが上昇し、[img:mugen]相手に極大ダメージを与える" },
                    { ki: "18~", maxLv: 25, name: "かめはめ波", type: "気弾", effect: "1ターンATKとDEFが上昇し、相手に超極大ダメージを与える" }
                ],
                passive: {
                    name: "金色の戦士の突撃",
                    intro: {
                        condition: "登場から1ターンの間",
                        effect: "全ての攻撃を回避"
                    },
                    // 箇条書きにしたい部分は改行コードで区切ります
                    main: "自身のATKとDEF77%UP\n3番目に攻撃すると更にATKとDEF77%UPし、必ず追加攻撃し高確率で必殺技が発動\n条件を満たすと変身する",
                    maxValues: { crit: "0%", add: "1回", dodge: "100%" }
                },
                // リンクスキルは名前の配列にするだけでOK
                links: ["金色の戦士", "サイヤ人の血", "臨戦態勢", "超サイヤ人", "かめはめ波", "超激戦", "伝説の力"]
            },
            {
                label: "変身後",
                name: "超サイヤ人ゴッドSSゴジータ",
                stats: { hp: 19250, atk: 20500, def: 12063 },
                active: {
                    name: "究極のかめはめ波",
                    condition: "変身した次の攻撃参加ターン以降、敵が1体のとき発動可能",
                    effect: "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                },
                superAttacks: [
                    { ki: "12~", maxLv: 25, name: "スターダストフォール", type: "気弾", effect: "1ターンATKとDEFが上昇し..." },
                    { ki: "18~", maxLv: 25, name: "メテオエクスプロージョン", type: "気弾", effect: "1ターンATKとDEFが大幅上昇し..." }
                ],
                passive: {
                    name: "究極最強の切り札",
                    main: "自身の気力+5、ATKとDEF77%UP\n1番目か2番目に攻撃すると更にATKとDEF77%UP\n必ず追加攻撃し中確率で必殺技が発動\n3番目に攻撃すると必ず必殺技が追加発動し、高確率で攻撃を回避",
                    maxValues: { crit: "0%", add: "2回", dodge: "50%" }
                },
                links: ["超サイヤ人", "神の次元", "臨戦態勢", "短期決戦", "かめはめ波", "超激戦", "伝説の力"]
            }
        ],
        
        // forms_eza は省略（実装時は同様に記述）
    },
    // 他のキャラも同様に修正...
    { id: 999, title: "奇跡の覚醒", name: "超サイヤ人4孫悟空", rarity: "UR", cost:58, type: "AGL", class: "Super", stats: {hp:15000, atk:14000, def:9000}, categories: ["純粋サイヤ人", "GT HERO"], links: ["超サイヤ人", "GT"], forms: [{ superAttacks:[{type:"格闘", maxLv:10, name:"かめはめ波", effect:"..."}] }] },
];