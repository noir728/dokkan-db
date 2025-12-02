const CHARACTER_DATA = [
    {
        "id": null,
        "title": "二つ名",
        "name": "キャラ名",
        "yomi": "読み仮名",
        "rarity": "レアリティ (LR, UR, SSR)",
        "cost": null,
        "type": "属性 (AGL, TEQ, INT, STR, PHY)",
        "class": "クラス (Super, Extreme)",
        "release": "実装日",
        "eza": "極限日",
        "seza": "超極限日",
        "source_type": "入手方法 (event, gasha)",
        "drop_event": "",
        "categories": [
            "カテゴリ (カンマ区切り)"
        ],
        "leaderSkill": "LS(通常)",
        "leaderSkill_eza": "LS(極限)",
        "leaderSkill_seza": "LS(超極限)",
        "awakening": null,
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1000000,
        "title": "二つ名",
        "name": "テストキャラ",
        "yomi": "てすときゃら",
        "rarity": "LR",
        "cost": 999,
        "type": "AGL",
        "class": "Super",
        "release": "2025/12/01",
        "eza": "2025/12/01",
        "seza": "2025/12/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "クロスオーバー"
        ],
        "leaderSkill": "リーダースキルnormal",
        "leaderSkill_eza": "リーダースキルeza",
        "leaderSkill_seza": "リーダースキルseza",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1000000
            },
            {
                "rank": "UR",
                "id": 1000000,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1000000,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1000000,
                "medals": [
                    {
                        "name": "zb/虹",
                        "count": 45
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1000000,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]スーパージャネンバ/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果\n[img:infinity]\n[img:one_time]"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "変身",
                "name": "変身テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "0"
            },
            {
                "label": "",
                "name": "リバチェン先テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            },
            {
                "label": "合体",
                "name": "リバチェン先テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "reversible_icon": "RC_Button",
                "reversible_type": "1"
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            },
            {
                "label": "融合",
                "name": "融合テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            },
            {
                "label": "合体",
                "name": "合体テスト",
                "id": 1000000,
                "links": [
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "fifty": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    },
                    "base": {
                        "hp": 10000,
                        "atk": 10000,
                        "def": 10000
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "物理",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "パッシブ",
                    "intro": {
                        "condition": "登場時演出条件",
                        "effect": "効果"
                    },
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "無限上昇、一度のみ",
                            "effects": [
                                "[img:infinity]",
                                "[img:one_time]"
                            ]
                        },
                        {
                            "title": "",
                            "effects": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "5回",
                        "reduce": "90%",
                        "dodge": "50%",
                        "guard": true,
                        "effective": true,
                        "action_break": true,
                        "revival": true,
                        "stun": true,
                        "seal": true,
                        "counter": true,
                        "survive_ko": true
                    }
                },
                "active": {
                    "name": "アクティブ名",
                    "condition": "条件",
                    "effect": "効果"
                },
                "standby": {
                    "name": "スタンバイ名",
                    "finish": [
                        {
                            "type": "チャージフィニッシュ",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        },
                        {
                            "type": "復活カウンター",
                            "name": "フィニッシュ名",
                            "condition": "条件",
                            "effect": "効果"
                        }
                    ]
                },
                "field": {
                    "name": "フィールド名",
                    "icon": "field_Button",
                    "condition": "条件",
                    "effect": "効果"
                }
            }
        ]
    },
    {
        "id": 1002800,
        "title": "邪念の化身",
        "name": "スーパージャネンバ",
        "yomi": "すーぱーじゃねんば",
        "rarity": "SSR",
        "cost": 20,
        "type": "INT",
        "class": "Extreme",
        "release": "2016/02/04",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版BOSS",
            "変身強化",
            "心身の侵食",
            "高速戦闘",
            "制御不能の力"
        ],
        "leaderSkill": "知属性のATK60%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1002800
            },
            {
                "rank": "UR",
                "id": 1002810,
                "medals": [
                    {
                        "name": "超激戦/悪鬼羅刹/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "恐怖と絶望"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13935,
                        "atk": 15580,
                        "def": 10717
                    },
                    "fifty": {
                        "hp": 8535,
                        "atk": 10180,
                        "def": 5317
                    },
                    "base": {
                        "hp": 6935,
                        "atk": 8580,
                        "def": 3717
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "羅刹爪",
                        "effect": "超特大ダメージ&DEFを低下させる"
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF3000[img:up]",
                                "全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ]
    },
    {
        "id": 1002810,
        "title": "地獄の羅刹鬼",
        "name": "スーパージャネンバ",
        "yomi": "すーぱーじゃねんば",
        "rarity": "UR",
        "cost": 42,
        "type": "INT",
        "class": "Extreme",
        "release": "2016/02/04",
        "eza": "2018/12/06",
        "seza": "2025/02/05",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "劇場版BOSS",
            "変身強化",
            "心身の侵食",
            "高速戦闘",
            "制御不能の力"
        ],
        "leaderSkill": "知属性のATK80%UP",
        "leaderSkill_eza": "知属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "知属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1002800
            },
            {
                "rank": "UR",
                "id": 1002810,
                "medals": [
                    {
                        "name": "超激戦/悪鬼羅刹/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[地獄の羅刹鬼]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1002810,
                "medals": [
                    {
                        "name": "zb/[地獄の羅刹鬼]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14945,
                        "atk": 16219,
                        "def": 11222
                    },
                    "fifty": {
                        "hp": 10745,
                        "atk": 12019,
                        "def": 7022
                    },
                    "base": {
                        "hp": 7945,
                        "atk": 9219,
                        "def": 4222
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン",
                        "effect": "超特大ダメージ&DEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF5000[img:up]",
                                "全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "guard": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16215,
                        "atk": 18685,
                        "def": 11495
                    },
                    "fifty": {
                        "hp": 11215,
                        "atk": 13685,
                        "def": 6495
                    },
                    "base": {
                        "hp": 9215,
                        "atk": 11685,
                        "def": 4495
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン(極限)",
                        "effect": "超絶特大ダメージ&DEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "ガードが決まると",
                            "effects": [
                                "そのターン中、中確率で敵の攻撃を回避",
                                "4ターンの間、ATK40%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "30%",
                        "guard": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "BOSSキャラ",
                    "驚異的なスピード",
                    "変身タイプ",
                    "残虐",
                    "悪夢",
                    "恐怖と絶望",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16215,
                        "atk": 18685,
                        "def": 11495
                    },
                    "fifty": {
                        "hp": 11215,
                        "atk": 13685,
                        "def": 6495
                    },
                    "base": {
                        "hp": 9215,
                        "atk": 11685,
                        "def": 4495
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ライトニングシャワーレイン(極限)",
                        "effect": "超絶特大ダメージ&DEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "空間の支配",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF200%[img:up]",
                                "全ての攻撃をガード",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "自身が攻撃するまで",
                            "effects": [
                                "回避率20%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か3番目で気玉を取得すると",
                            "effects": [
                                "回避率20%[img:up]",
                                "味方全員の気力+2、DEF40%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるとき",
                            "effects": [
                                "ATK/DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "[img:infinity]ATK50%[img:up](最大200%)"
                            ]
                        },
                        {
                            "title": "敵の攻撃を回避すると",
                            "effects": [
                                "4ターンの間、必ず必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "超系の敵がいるとき",
                            "effects": [
                                "DEF200%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "超高確率で全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "90%",
                        "guard": true,
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1005270,
        "title": "最強のフュージョン",
        "name": "超ゴジータ",
        "yomi": "すーぱーごじーた",
        "rarity": "SSR",
        "cost": 24,
        "type": "STR",
        "class": "Super",
        "release": "2016/02/04",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フュージョン",
            "劇場版HERO",
            "超サイヤ人",
            "あの世の戦士",
            "最後の切り札",
            "つながる希望",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "全属性の気力+2、ATK2500UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1005270
            },
            {
                "rank": "UR",
                "id": 1005280,
                "medals": [
                    {
                        "name": "超激戦/最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/[絶対無敵の戦士]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/[絶対無敵の戦士]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16100,
                        "atk": 16580,
                        "def": 9990
                    },
                    "fifty": {
                        "hp": 10700,
                        "atk": 10620,
                        "def": 5150
                    },
                    "base": {
                        "hp": 9100,
                        "atk": 9020,
                        "def": 3550
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "ATK5000[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1005280,
        "title": "絶対無敵の戦士",
        "name": "超ゴジータ",
        "yomi": "すーぱーごじーた",
        "rarity": "UR",
        "cost": 48,
        "type": "STR",
        "class": "Super",
        "release": "2016/02/04",
        "eza": "2019/01/10",
        "seza": "2025/02/05",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "フュージョン",
            "劇場版HERO",
            "超サイヤ人",
            "あの世の戦士",
            "最後の切り札",
            "つながる希望",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "全属性の気力+3、ATK3000UP",
        "leaderSkill_eza": "全属性の気力+3、HPとATKとDEF77%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1005270
            },
            {
                "rank": "UR",
                "id": 1005280,
                "medals": [
                    {
                        "name": "超激戦/最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 10
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/[絶対無敵の戦士]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[絶対無敵の戦士]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1005280,
                "medals": [
                    {
                        "name": "zb/[絶対無敵の戦士]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 17750,
                        "atk": 17760,
                        "def": 10565
                    },
                    "fifty": {
                        "hp": 13550,
                        "atk": 13000,
                        "def": 6925
                    },
                    "base": {
                        "hp": 10750,
                        "atk": 10200,
                        "def": 4125
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ソウルパニッシャー",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "全属性に効果抜群で攻撃",
                                "ATK7000[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 20075,
                        "atk": 20392,
                        "def": 10871
                    },
                    "fifty": {
                        "hp": 15075,
                        "atk": 14832,
                        "def": 6431
                    },
                    "base": {
                        "hp": 13075,
                        "atk": 12832,
                        "def": 4431
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "相手に超絶特大ダメージを与え、ATKとDEFを低下させる"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK7%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 20075,
                        "atk": 20392,
                        "def": 10871
                    },
                    "fifty": {
                        "hp": 15075,
                        "atk": 14832,
                        "def": 6431
                    },
                    "base": {
                        "hp": 13075,
                        "atk": 12832,
                        "def": 4431
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "相手に超絶特大ダメージを与え、ATKとDEFを低下させる"
                    }
                ],
                "passive": {
                    "name": "圧倒的な一撃",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2",
                                "ATK/DEF200%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "高確率で会心が発動",
                                "必ず追加攻撃し高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "2番目か3番目で気玉を取得すると",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "味方全員の気力+2、ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "取得虹気玉1個につき",
                            "effects": [
                                "ATK/DEF50%[img:up]",
                                "会心率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]DEF50%[img:up](最大200%)"
                            ]
                        },
                        {
                            "title": "超系の敵がいるとき",
                            "effects": [
                                "DEF200%[img:up]",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき",
                            "effects": [
                                "DEF100%[img:up]",
                                "超高確率で全属性に効果抜群で攻撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009420,
        "title": "赤き勇姿",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "SSR",
        "cost": 30,
        "type": "STR",
        "class": "Super",
        "release": "2017/02/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "純粋サイヤ人",
            "孫悟空の系譜",
            "かめはめ波",
            "大猿パワー",
            "亀仙流",
            "奇跡の覚醒",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "超力属性の気力+2、HPとATKとDEF100%UP &極力属性のHPとATKとDEF40%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009420
            },
            {
                "rank": "UR",
                "id": 1009430,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/[究極進化の超サイヤ人]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/[究極進化の超サイヤ人]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14300,
                        "atk": 14600,
                        "def": 8075
                    },
                    "fifty": {
                        "hp": 10900,
                        "atk": 10800,
                        "def": 5075
                    },
                    "base": {
                        "hp": 9300,
                        "atk": 9200,
                        "def": 3475
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "10倍かめはめ波",
                        "effect": "超絶特大ダメージを与え、6ターンDEF30%上昇"
                    }
                ],
                "passive": {
                    "name": "地球を背負う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK120%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009430,
        "title": "究極進化の超サイヤ人",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2017/02/01",
        "eza": "2021/05/13",
        "seza": "2025/07/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "超力属性の気力+3、HPとATKとDEF120%UP &極力属性の気力+1、HPとATKとDEF50%UP",
        "leaderSkill_eza": "超力属性の気力+3、HPとATKとDEF130%UP &極力属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "超力属性の気力+3、HPとATKとDEF130%UP &極力属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009420
            },
            {
                "rank": "UR",
                "id": 1009430,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/[究極進化の超サイヤ人]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[究極進化の超サイヤ人]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009430,
                "medals": [
                    {
                        "name": "zb/[究極進化の超サイヤ人]/5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16333,
                        "atk": 16856,
                        "def": 9114
                    },
                    "fifty": {
                        "hp": 13333,
                        "atk": 13456,
                        "def": 6514
                    },
                    "base": {
                        "hp": 11333,
                        "atk": 11456,
                        "def": 4514
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "10倍かめはめ波",
                        "effect": "超絶特大ダメージを与え、6ターンDEF30%上昇"
                    }
                ],
                "passive": {
                    "name": "銀河を救う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK150%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19324,
                        "atk": 19880,
                        "def": 10306
                    },
                    "fifty": {
                        "hp": 16324,
                        "atk": 16480,
                        "def": 7706
                    },
                    "base": {
                        "hp": 14324,
                        "atk": 14480,
                        "def": 5706
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "10倍かめはめ波(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる &6ターンDEFが30%上昇"
                    }
                ],
                "passive": {
                    "name": "銀河を救う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK150%[img:up]",
                                "DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "かめはめ波",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19324,
                        "atk": 19880,
                        "def": 10306
                    },
                    "fifty": {
                        "hp": 16324,
                        "atk": 16480,
                        "def": 7706
                    },
                    "base": {
                        "hp": 14324,
                        "atk": 14480,
                        "def": 5706
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "10倍かめはめ波(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる &6ターンDEFが30%上昇"
                    }
                ],
                "passive": {
                    "name": "銀河を救う戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF200%[img:up]",
                                "超高確率で会心が発動"
                            ]
                        },
                        {
                            "title": "攻撃参加中の超系の味方1体につき",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき、 または自身の他に攻撃参加中の 「GT HERO」カテゴリの味方がいるとき",
                            "effects": [
                                "味方全員のATK40%[img:up]",
                                "必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK150%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃を受けるとき",
                            "effects": [
                                "DEF200%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "70%",
                        "add": "1回",
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009820,
        "title": "赤き閃光",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "AGL",
        "class": "Super",
        "release": "2017/02/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "超速属性の気力+2、HPとATKとDEF100%UP &極速属性のHPとATKとDEF40%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009820
            },
            {
                "rank": "UR",
                "id": 1009830,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/[至高無上の超サイヤ人]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/[至高無上の超サイヤ人]//5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13520,
                        "atk": 13744,
                        "def": 9635
                    },
                    "fifty": {
                        "hp": 10520,
                        "atk": 10344,
                        "def": 5835
                    },
                    "base": {
                        "hp": 8920,
                        "atk": 8744,
                        "def": 4235
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック",
                        "effect": "相手に超絶特大ダメージを与え、DEFを大幅に低下させる"
                    }
                ],
                "passive": {
                    "name": "燃え上がるライバル心",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1009830,
        "title": "至高無上の超サイヤ人",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2017/02/01",
        "eza": "2021/05/13",
        "seza": "2025/07/29",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "超速属性の気力+3、HPとATKとDEF120%UP &極速属性の気力+1、HPとATKとDEF50%UP",
        "leaderSkill_eza": "超速属性の気力+3、HPとATKとDEF130%UP &極速属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_seza": "超速属性の気力+3、HPとATKとDEF130%UP &極速属性の気力+3、HPとATKとDEF90%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1009820
            },
            {
                "rank": "UR",
                "id": 1009830,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 77
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/[至高無上の超サイヤ人]/1",
                        "count": 15
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/2",
                        "count": 40
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/3",
                        "count": 30
                    },
                    {
                        "name": "zb/[至高無上の超サイヤ人]/4",
                        "count": 30
                    }
                ]
            },
            {
                "rank": "SEZA",
                "id": 1009830,
                "medals": [
                    {
                        "name": "zb/[至高無上の超サイヤ人]//5",
                        "count": 30
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 16315,
                        "atk": 15538,
                        "def": 10870
                    },
                    "fifty": {
                        "hp": 13715,
                        "atk": 12538,
                        "def": 7470
                    },
                    "base": {
                        "hp": 11715,
                        "atk": 10538,
                        "def": 5470
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック",
                        "effect": "超絶特大ダメージを与え、DEFを大幅に低下させる"
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19407,
                        "atk": 18319,
                        "def": 12314
                    },
                    "fifty": {
                        "hp": 16807,
                        "atk": 15319,
                        "def": 8914
                    },
                    "base": {
                        "hp": 14807,
                        "atk": 13319,
                        "def": 6914
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる &6ターンATKが30%上昇"
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK150%[img:up]",
                                "DEF120%[img:up]"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK40%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_seza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 19407,
                        "atk": 18319,
                        "def": 12314
                    },
                    "fifty": {
                        "hp": 16807,
                        "atk": 15319,
                        "def": 8914
                    },
                    "base": {
                        "hp": 14807,
                        "atk": 13319,
                        "def": 6914
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 15,
                        "type": "気弾",
                        "name": "ファイナルシャインアタック(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超絶特大ダメージを与え、DEFを大幅に低下させる &6ターンATKが30%上昇"
                    }
                ],
                "passive": {
                    "name": "さらなる秘策",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "気力+2、ATK/DEF200%[img:up]",
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "攻撃参加中の超系の味方1体につき",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "極系の敵がいるとき、 または自身の他に攻撃参加中の 「GT HERO」カテゴリの味方がいるとき",
                            "effects": [
                                "味方全員のDEF40%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "気力メーター12以上で攻撃時",
                            "effects": [
                                "ATK100%[img:up]"
                            ]
                        },
                        {
                            "title": "2番目か3番目で攻撃時",
                            "effects": [
                                "ATK/DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "一時的にDEF100%[img:up]",
                                "高確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1012880,
        "title": "永遠のライバル",
        "name": "孫悟空&ベジータ",
        "yomi": "そんごくう&べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "コンビネーション",
            "かめはめ波",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "知属性の気力+2、HPとATKとDEF70%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/[合体する超パワー]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14770,
                        "atk": 13789,
                        "def": 9879
                    },
                    "fifty": {
                        "hp": 11370,
                        "atk": 10389,
                        "def": 6479
                    },
                    "base": {
                        "hp": 9770,
                        "atk": 8789,
                        "def": 4879
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "ふたりのサイヤ人",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012890,
        "title": "黄金のタッグ",
        "name": "超サイヤ人孫悟空&超サイヤ人ベジータ",
        "yomi": "すーぱーさいやじんそんごくう&すーぱーさいやじんべじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "コンビネーション",
            "超サイヤ人",
            "かめはめ波",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "知属性の気力+3、HPとATKとDEF80%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/[合体する超パワー]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 17630,
                        "atk": 15466,
                        "def": 11228
                    },
                    "fifty": {
                        "hp": 14630,
                        "atk": 12466,
                        "def": 8228
                    },
                    "base": {
                        "hp": 12630,
                        "atk": 10466,
                        "def": 6228
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "ふたりの超戦士",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012900,
        "title": "合体する超パワー",
        "name": "超サイヤ人孫悟空&超サイヤ人ベジータ",
        "yomi": "すーぱーさいやじんそんごくう&すーぱーさいやじんべじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2018/01/31",
        "eza": "2022/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "魔人ブウ編",
            "ポタラ",
            "コンビネーション",
            "超サイヤ人",
            "かめはめ波",
            "最後の切り札",
            "純粋サイヤ人",
            "頭脳戦",
            "高速戦闘",
            "融合/合体戦士",
            "親子の絆"
        ],
        "leaderSkill": "「ポタラ」カテゴリの 気力+3、HPとATK170%UP、DEF130%UP または知属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_eza": "「ポタラ」カテゴリの 気力+3、HPとATKとDEF180%UP または知属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_seza": "「ポタラ」カテゴリの 気力+3、HPとATKとDEF180%UP または知属性の気力+3、HPとATKとDEF120%UP",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012880
            },
            {
                "rank": "UR",
                "id": 1012890,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012900,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/閃光のポタラ/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012900,
                "medals": [
                    {
                        "name": "zb/[合体する超パワー]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "最後の秘策",
                        "effect": "1ターンATKが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときポタラで合体する"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            },
            {
                "label": "合体",
                "name": "超ベジット",
                "id": 4012900,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "臨戦態勢",
                    "神から授かりし力",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルかめはめ波",
                        "effect": "相手に超極大ダメージを与える&1ターン仲間ATK30%UP"
                    }
                ],
                "passive": {
                    "name": "起死回生のポタラ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF150%[img:up]",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "敵の通常攻撃を受けるとき",
                            "effects": [
                                "超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "最後の秘策(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF180%[img:up]",
                                "中確率で会心が発動",
                                "中確率で敵の攻撃を回避",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときポタラで合体する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "30%",
                        "dodge": "30%"
                    }
                }
            },
            {
                "label": "合体",
                "name": "超ベジット",
                "id": 4012900,
                "links": [
                    "かめはめ波",
                    "超サイヤ人",
                    "臨戦態勢",
                    "神から授かりし力",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24663,
                        "atk": 18490,
                        "def": 15931
                    },
                    "fifty": {
                        "hp": 21663,
                        "atk": 15490,
                        "def": 12931
                    },
                    "base": {
                        "hp": 19663,
                        "atk": 13490,
                        "def": 10931
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルかめはめ波(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超極大ダメージを与える&1ターン仲間ATK30%UP"
                    }
                ],
                "passive": {
                    "name": "起死回生のポタラ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF200%[img:up]",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "ダメージ軽減率30%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から4ターン目以降",
                            "effects": [
                                "ダメージ軽減率15%[img:up]"
                            ]
                        },
                        {
                            "title": "敵の通常攻撃を受けるとき",
                            "effects": [
                                "超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "30%",
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1012910,
        "title": "あの世の超戦士たち",
        "name": "孫悟空(天使)&ベジータ(天使)",
        "yomi": "そんごくう(てんし)&べじーた(てんし)",
        "rarity": "SSR",
        "cost": 30,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "コンビネーション",
            "劇場版HERO",
            "かめはめ波",
            "あの世の戦士",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "体属性の気力+2、HPとATKとDEF70%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/[ふたつの力の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "戦闘民族サイヤ人",
                    "サイヤ人の血",
                    "歴戦の戦士",
                    "臨戦態勢"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 15888,
                        "atk": 13174,
                        "def": 9889
                    },
                    "fifty": {
                        "hp": 12088,
                        "atk": 9774,
                        "def": 6889
                    },
                    "base": {
                        "hp": 10488,
                        "atk": 8174,
                        "def": 5289
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "屈指の強者たち",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+1"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012920,
        "title": "復活のサイヤ人",
        "name": "超サイヤ人孫悟空(天使)&超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんそんごくう(てんし)&すーぱーさいやじんべじーた(てんし)",
        "rarity": "UR",
        "cost": 58,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "コンビネーション",
            "劇場版HERO",
            "超サイヤ人",
            "かめはめ波",
            "あの世の戦士",
            "純粋サイヤ人",
            "親子の絆"
        ],
        "leaderSkill": "体属性の気力+3、HPとATKとDEF80%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/[ふたつの力の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 18975,
                        "atk": 14656,
                        "def": 11368
                    },
                    "fifty": {
                        "hp": 15575,
                        "atk": 11656,
                        "def": 8768
                    },
                    "base": {
                        "hp": 13575,
                        "atk": 9656,
                        "def": 6768
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に超絶特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "あの世での協力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            }
        ]
    },
    {
        "id": 1012930,
        "title": "ふたつの力の融合",
        "name": "超サイヤ人孫悟空(天使)&超サイヤ人ベジータ(天使)",
        "yomi": "すーぱーさいやじんそんごくう(てんし)&すーぱーさいやじんべじーた(てんし)",
        "rarity": "LR",
        "cost": 77,
        "type": "PHY",
        "class": "Super",
        "release": "2018/01/31",
        "eza": "2022/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "「フュージョン」カテゴリの 気力+3、HPとATK170%UP、DEF130%UP または体属性の気力+3、HPとATKとDEF90%UP",
        "leaderSkill_eza": "「フュージョン」カテゴリの 気力+3、HPとATKとDEF180%UP または体属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1012910
            },
            {
                "rank": "UR",
                "id": 1012920,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1012930,
                "medals": [
                    {
                        "name": "超激戦/最強タッグ/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強フュージョン/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1012930,
                "medals": [
                    {
                        "name": "zb/[ふたつの力の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ",
                        "effect": "1ターンATKが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "最強のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときフュージョンする"
                            ]
                        }
                    ],
                    "maxValues": {}
                }
            },
            {
                "label": "融合",
                "name": "超ゴジータ",
                "id": 4012930,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波",
                        "effect": "相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ソウルパニッシャー",
                        "effect": "相手に超極大ダメージを与え、ATKとDEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "起死回生のフュージョン",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF150%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        }
                    ],
                    "maxValues": {
                        "effective": true
                    }
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "かめはめ波",
                    "金色の戦士",
                    "超サイヤ人",
                    "歴戦の戦士",
                    "臨戦態勢",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ビッグ・バン・アタック(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波&ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "無敵のふたり",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF180%[img:up]",
                                "中確率で会心が発動",
                                "中確率で敵の攻撃を回避",
                                "虹気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "バトル開始から6ターン目以降",
                            "effects": [
                                "HP50%以下のときフュージョンする"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "30%",
                        "dodge": "30%"
                    }
                }
            },
            {
                "label": "融合",
                "name": "超ゴジータ",
                "id": 4012930,
                "links": [
                    "金色の戦士",
                    "超サイヤ人",
                    "臨戦態勢",
                    "かめはめ波",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21663,
                        "atk": 20700,
                        "def": 14469
                    },
                    "fifty": {
                        "hp": 18263,
                        "atk": 17700,
                        "def": 11869
                    },
                    "base": {
                        "hp": 16263,
                        "atk": 15700,
                        "def": 9869
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグバンかめはめ波(極限)",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ソウルパニッシャー(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に超極大ダメージを与え、ATKとDEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "起死回生のフュージョン",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "[img:one_time]HPが全回復",
                                "ATK/DEF200%[img:up]",
                                "全属性に効果抜群で攻撃",
                                "虹気玉取得時の気力上昇量+3"
                            ]
                        },
                        {
                            "title": "登場から3ターンの間",
                            "effects": [
                                "必ず会心が発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "登場から4ターン目以降",
                            "effects": [
                                "高確率で会心が発動",
                                "中確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "dodge": "50%",
                        "effective": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015740,
        "title": "奇跡の覚醒",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "SSR",
        "cost": 30,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの 気力+2、HPとATK130%UP、DEF100%UP、 または超速属性の気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[最強サイヤ人の到達点]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12702,
                        "atk": 13885,
                        "def": 8904
                    },
                    "fifty": {
                        "hp": 9702,
                        "atk": 10485,
                        "def": 5104
                    },
                    "base": {
                        "hp": 8102,
                        "atk": 8885,
                        "def": 3504
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "奇跡の変身",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK50%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大50%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015750,
        "title": "最大解放の戦い",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの 気力+3、HPとATK150%UP、DEF110%UP、 または超速属性の気力+2、HPとATKとDEF110%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[最強サイヤ人の到達点]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "驚異的なスピード",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14169,
                        "atk": 14960,
                        "def": 9478
                    },
                    "fifty": {
                        "hp": 11569,
                        "atk": 11960,
                        "def": 6078
                    },
                    "base": {
                        "hp": 9569,
                        "atk": 9960,
                        "def": 4078
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "最強の戦闘形態",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK60%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1014210,
        "title": "最強サイヤ人の到達点",
        "name": "超サイヤ人4孫悟空",
        "yomi": "すーぱーさいやじん4そんごくう",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2019/01/30",
        "eza": "2022/03/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "孫悟空の系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "かめはめ波",
            "大猿パワー",
            "亀仙流",
            "GT HERO",
            "親友の絆",
            "高速戦闘",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球育ちの戦士",
            "地球を守りし英雄"
        ],
        "leaderSkill": "「孫悟空の系譜」カテゴリの 気力+3、HPとATK170%UP、DEF130%UP、 または超速属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "「孫悟空の系譜」カテゴリの 気力+3、HPとATKとDEF180%UP、 または超速属性の気力+3、HPとATKとDEF130%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015740
            },
            {
                "rank": "UR",
                "id": 1015750,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/最強のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[最強サイヤ人の到達点]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22988,
                        "atk": 21720,
                        "def": 12931
                    },
                    "fifty": {
                        "hp": 20388,
                        "atk": 18720,
                        "def": 9531
                    },
                    "base": {
                        "hp": 18388,
                        "atk": 16720,
                        "def": 7531
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "メテオスマッシュ",
                        "effect": "1ターンDEFが超大幅上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK80%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "速気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]DEF20%[img:up](最大80%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                },
                "active": {
                    "name": "10倍かめはめ波",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "かめはめ波",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22988,
                        "atk": 21720,
                        "def": 12931
                    },
                    "fifty": {
                        "hp": 20388,
                        "atk": 18720,
                        "def": 9531
                    },
                    "base": {
                        "hp": 18388,
                        "atk": 16720,
                        "def": 7531
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "メテオスマッシュ(極限)",
                        "effect": "1ターンDEFが超大幅上昇、ATKが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与え、DEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]",
                                "虹気玉か速気玉取得時の気力上昇量+2",
                                "速気玉以外の属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        },
                        {
                            "title": "敵が2体以上いるとき",
                            "effects": [
                                "[img:one_time]アクティブスキル発動時 または気力メーター24で攻撃時 攻撃した敵をアクションブレイク"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true,
                        "action_break": true
                    }
                },
                "active": {
                    "name": "10倍かめはめ波",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1015760,
        "title": "不屈の覚醒",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 30,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの 気力+2、HP100%UP、ATKとDEF130%UP、 または超力属性の気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[無敵を誇るサイヤ人の頂]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12747,
                        "atk": 14144,
                        "def": 8458
                    },
                    "fifty": {
                        "hp": 9347,
                        "atk": 10344,
                        "def": 5458
                    },
                    "base": {
                        "hp": 7747,
                        "atk": 8744,
                        "def": 3858
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "不屈の変身",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF50%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大50%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1015770,
        "title": "超レベルの決戦",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの 気力+3、HP110%UP、ATKとDEF150%UP、 または超力属性の気力+2、HPとATKとDEF110%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[無敵を誇るサイヤ人の頂]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14144,
                        "atk": 15190,
                        "def": 9103
                    },
                    "fifty": {
                        "hp": 11144,
                        "atk": 11790,
                        "def": 6503
                    },
                    "base": {
                        "hp": 9144,
                        "atk": 9790,
                        "def": 4503
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "無敵の戦闘形態",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF60%[img:up]",
                                "虹気玉取得時の気力上昇量+1",
                                "速気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                }
            }
        ]
    },
    {
        "id": 1014220,
        "title": "無敵を誇るサイヤ人の頂",
        "name": "超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2019/01/30",
        "eza": "2022/03/01",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "ベジータの系譜",
            "純粋サイヤ人",
            "邪悪龍編",
            "好敵手",
            "救世主",
            "大猿パワー",
            "奇跡の覚醒",
            "天才戦士",
            "GT HERO",
            "命運をかけた戦い",
            "超サイヤ人を超えた力",
            "親子の絆",
            "地球を守りし英雄",
            "継承する者"
        ],
        "leaderSkill": "「ベジータの系譜」カテゴリの 気力+3、HP130%UP、ATKとDEF170%UP、 または超力属性の気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1015760
            },
            {
                "rank": "UR",
                "id": 1015770,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1014210,
                "medals": [
                    {
                        "name": "超激戦/無敵のサイヤ人/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/無敵のサイヤ人/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1014210,
                "medals": [
                    {
                        "name": "zb/[無敵を誇るサイヤ人の頂]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22538,
                        "atk": 21780,
                        "def": 12981
                    },
                    "fifty": {
                        "hp": 19538,
                        "atk": 18380,
                        "def": 10381
                    },
                    "base": {
                        "hp": 17538,
                        "atk": 16380,
                        "def": 8381
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン",
                        "effect": "1ターンATKが超大幅上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "このままじゃ終わらんぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "DEF80%[img:up]",
                                "虹気玉取得時の気力上昇量+2",
                                "速気玉取得時の気力上昇量+2"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK20%[img:up](最大80%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true
                    }
                },
                "active": {
                    "name": "ファイナルシャインアタック",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "超サイヤ人",
                    "サイヤの咆哮",
                    "臨戦態勢",
                    "サイヤ人の誇り",
                    "GT",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22538,
                        "atk": 21780,
                        "def": 12981
                    },
                    "fifty": {
                        "hp": 19538,
                        "atk": 18380,
                        "def": 10381
                    },
                    "base": {
                        "hp": 17538,
                        "atk": 16380,
                        "def": 8381
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "スピリットブレイクキャノン(極限)",
                        "effect": "1ターンATKが超大幅上昇、DEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが超大幅上昇し、相手に超極大ダメージを与え、DEFを大幅低下させる"
                    }
                ],
                "passive": {
                    "name": "絶対勝つぞ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]",
                                "虹気玉か力気玉取得時の気力上昇量+2",
                                "力気玉以外の属性気玉取得時の気力上昇量+1"
                            ]
                        },
                        {
                            "title": "ターン開始ごと",
                            "effects": [
                                "[img:infinity]ATK10%[img:up](最大30%)",
                                "[img:infinity]DEF20%[img:up](最大60%)"
                            ]
                        },
                        {
                            "title": "敵の必殺技を受けるとき",
                            "effects": [
                                "中確率で無効化し超絶大な威力で反撃"
                            ]
                        },
                        {
                            "title": "敵が2体以上いるとき",
                            "effects": [
                                "[img:one_time]アクティブスキル発動時 または気力メーター24で攻撃時 攻撃した敵をアクションブレイク"
                            ]
                        }
                    ],
                    "maxValues": {
                        "counter": true,
                        "action_break": true
                    }
                },
                "active": {
                    "name": "ファイナルシャインアタック",
                    "condition": "バトル開始から4ターン目以降に発動可能 (1回のみ)",
                    "effect": "一時的にATKが超大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1018600,
        "title": "地球を守る融合戦士",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "SSR",
        "cost": 26,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "劇場版HERO",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/[究極最強の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "サイヤ人の血",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13378,
                        "atk": 14506,
                        "def": 7709
                    },
                    "fifty": {
                        "hp": 9978,
                        "atk": 10706,
                        "def": 4709
                    },
                    "base": {
                        "hp": 8378,
                        "atk": 9106,
                        "def": 3109
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "フュージョンファイター！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+1",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1018610,
        "title": "形勢逆転の光炎",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "UR",
        "cost": 58,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "劇場版HERO",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/[究極最強の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "サイヤ人の血",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14898,
                        "atk": 15623,
                        "def": 8204
                    },
                    "fifty": {
                        "hp": 11898,
                        "atk": 12223,
                        "def": 5604
                    },
                    "base": {
                        "hp": 9898,
                        "atk": 10223,
                        "def": 3604
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "フュージョンファイター！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回"
                    }
                }
            }
        ]
    },
    {
        "id": 1018620,
        "title": "究極最強の融合",
        "name": "ゴジータ",
        "yomi": "ごじーた",
        "rarity": "LR",
        "cost": 77,
        "type": "STR",
        "class": "Super",
        "release": "2020/01/30",
        "eza": "2023/02/24",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "フュージョン",
            "神次元",
            "劇場版HERO",
            "かめはめ波",
            "変身強化",
            "再起する力",
            "時間制限",
            "融合/合体戦士",
            "超サイヤ人を超えた力",
            "超HERO",
            "地球を守りし英雄",
            "高速戦闘"
        ],
        "leaderSkill": "「最後の切り札」または「フュージョン」カテゴリの気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "「最後の切り札」または「フュージョン」カテゴリの気力+3、HPとATKとDEF170%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018600
            },
            {
                "rank": "UR",
                "id": 1018610,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018620,
                "medals": [
                    {
                        "name": "超激戦/最強の光臨/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/最強の光臨/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018620,
                "medals": [
                    {
                        "name": "./zb/[究極最強の融合]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "メトロアタック",
                        "effect": "ATKが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "かめはめ波",
                        "effect": "ATKが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "アルティメットパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+3",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "50%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSゴジータ",
                "id": 4017970,
                "links": [
                    "超サイヤ人",
                    "合体戦士",
                    "神戦士",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "スターダストフォール",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "メテオエクスプロージョン",
                        "effect": "1ターンDEFが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "すごいパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必ず追加攻撃",
                                "[img:infinity]攻撃するたびにATK/DEF7%[img:up](最大77%)",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "50%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "究極のかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "合体戦士",
                    "臨戦態勢",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "メトロアタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "かめはめ波(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "アルティメットパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+4",
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "70%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSゴジータ",
                "id": 4017970,
                "links": [
                    "超サイヤ人",
                    "合体戦士",
                    "神戦士",
                    "短期決戦",
                    "かめはめ波",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24025,
                        "atk": 22630,
                        "def": 11175
                    },
                    "fifty": {
                        "hp": 21025,
                        "atk": 19230,
                        "def": 8575
                    },
                    "base": {
                        "hp": 19025,
                        "atk": 17230,
                        "def": 6575
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "スターダストフォール(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "メテオエクスプロージョン(極限)",
                        "effect": "3ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "すごいパワー！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必ず2回追加攻撃し中確率で必殺技が発動",
                                "全属性に効果抜群で攻撃"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "気力+7",
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "[img:infinity]攻撃するたびにATK/DEF22%[img:up](最大88%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時 または気力メーター24で攻撃時",
                            "effects": [
                                "必ず会心が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "2回",
                        "dodge": "70%",
                        "effective": true
                    }
                },
                "active": {
                    "name": "究極のかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1018630,
        "title": "未来を救う合体戦士",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "SSR",
        "cost": 26,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "時空を超えし者",
            "未来編",
            "頭脳戦",
            "時間制限",
            "融合/合体戦士",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの気力+2、HPとATKとDEF100%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/[究極無敵の合体]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13333,
                        "atk": 14293,
                        "def": 8197
                    },
                    "fifty": {
                        "hp": 10333,
                        "atk": 10493,
                        "def": 4797
                    },
                    "base": {
                        "hp": 8733,
                        "atk": 8893,
                        "def": 3197
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "オレはベジットだ",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF50%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+1",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "0%"
                    }
                }
            }
        ]
    },
    {
        "id": 1018640,
        "title": "起死回生の閃光",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "UR",
        "cost": 58,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "時空を超えし者",
            "未来編",
            "頭脳戦",
            "時間制限",
            "融合/合体戦士",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの気力+3、HPとATKとDEF120%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/[究極無敵の合体]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 14924,
                        "atk": 15368,
                        "def": 8710
                    },
                    "fifty": {
                        "hp": 12324,
                        "atk": 11968,
                        "def": 5710
                    },
                    "base": {
                        "hp": 10324,
                        "atk": 9968,
                        "def": 3710
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に超特大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "決着をつけようぜ！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF60%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "0%"
                    }
                }
            }
        ]
    },
    {
        "id": 1018650,
        "title": "究極無敵の合体",
        "name": "ベジット",
        "yomi": "べじっと",
        "rarity": "LR",
        "cost": 77,
        "type": "TEQ",
        "class": "Super",
        "release": "2020/01/30",
        "eza": "2023/02/24",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "最後の切り札",
            "ポタラ",
            "神次元",
            "時空を超えし者",
            "未来編",
            "かめはめ波",
            "変身強化",
            "頭脳戦",
            "時間制限",
            "高速戦闘",
            "命運をかけた戦い",
            "融合/合体戦士",
            "超サイヤ人を超えた力",
            "超HERO"
        ],
        "leaderSkill": "「最後の切り札」または「ポタラ」カテゴリの気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "「最後の切り札」または「ポタラ」カテゴリの気力+3、HPとATKとDEF170%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1018630
            },
            {
                "rank": "UR",
                "id": 1018640,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1018650,
                "medals": [
                    {
                        "name": "超激戦/蒼炎に燃える合体/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/蒼炎に燃える合体/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1018650,
                "medals": [
                    {
                        "name": "zb/[究極無敵の合体]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ベジットコンビネーション",
                        "effect": "ATKが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック",
                        "effect": "ATKが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "くたばりやがれ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF70%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+3",
                                "必ず追加攻撃し中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "50%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSベジット",
                "id": 4017980,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "ベジットソード",
                        "effect": "1ターンATKとDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "オメガフィニッシュブロー",
                        "effect": "1ターンDEFが上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "これでおしまいだ！！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+2",
                                "必ず必殺技が追加攻撃",
                                "[img:infinity]攻撃するたびに気力+1(最大+5)、ATK/DEF7%[img:up](最大77%)"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必ず必殺技が追加発動",
                                "高確率で敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "50%"
                    }
                },
                "active": {
                    "name": "ファイナルかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "戦闘民族サイヤ人",
                    "頭脳派",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "ベジットコンビネーション(極限)",
                        "effect": "ATKが上昇、1ターンDEFが上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ビッグ・バン・アタック(極限)",
                        "effect": "ATKが上昇、1ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "くたばりやがれ！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF140%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃時",
                            "effects": [
                                "気力+4",
                                "DEF100%[img:up]"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "必ず追加攻撃し超高確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "バトル開始から4ターン目以降",
                            "effects": [
                                "変身する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "1回",
                        "dodge": "70%"
                    }
                }
            },
            {
                "label": "変身",
                "name": "超サイヤ人ゴッドSSベジット",
                "id": 4017980,
                "links": [
                    "超サイヤ人",
                    "かめはめ波",
                    "神から授かりし力",
                    "短期決戦",
                    "合体戦士",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 24475,
                        "atk": 22120,
                        "def": 11788
                    },
                    "fifty": {
                        "hp": 21875,
                        "atk": 18720,
                        "def": 8788
                    },
                    "base": {
                        "hp": 19875,
                        "atk": 16720,
                        "def": 6788
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ベジットソード(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に極大ダメージを与える"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "オメガフィニッシュブロー(極限)",
                        "effect": "3ターンDEFが大幅上昇し、相手に超極大ダメージを与える"
                    }
                ],
                "passive": {
                    "name": "これでおしまいだ！！！",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "1番目か2番目で攻撃時",
                            "effects": [
                                "気力+5",
                                "必殺技が追加発動",
                                "中確率で必殺技が発動"
                            ]
                        },
                        {
                            "title": "3番目で攻撃時",
                            "effects": [
                                "気力+7",
                                "必殺技が追加発動",
                                "超高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)",
                                "[img:infinity]攻撃するたびにATK/DEF22%[img:up](最大88%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時 または気力メーター24で攻撃時",
                            "effects": [
                                "必殺技が追加発動"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "0%",
                        "add": "3回",
                        "dodge": "100%"
                    }
                },
                "active": {
                    "name": "ファイナルかめはめ波",
                    "condition": "次の攻撃参加ターン以降、敵が1体で敵のHP50%以下のとき発動可能 (1回のみ)",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1020290,
        "title": "銀色に輝く新たな姿",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "SSR",
        "cost": 26,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの気力+2、HPとATKとDEF130%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/[真の極意]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "短期決戦",
                    "力の大会"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12436,
                        "atk": 13460,
                        "def": 9568
                    },
                    "fifty": {
                        "hp": 9436,
                        "atk": 10060,
                        "def": 5768
                    },
                    "base": {
                        "hp": 7836,
                        "atk": 8460,
                        "def": 4168
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "極意の力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "中確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+3)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "30%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020300,
        "title": "神領域の極み",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "UR",
        "cost": 58,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/[真の極意]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "短期決戦",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13850,
                        "atk": 14450,
                        "def": 10275
                    },
                    "fifty": {
                        "hp": 11250,
                        "atk": 11450,
                        "def": 6875
                    },
                    "base": {
                        "hp": 9250,
                        "atk": 9450,
                        "def": 4875
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "限界を超えた神の力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "高確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)"
                            ]
                        },
                        {
                            "title": "回避すると",
                            "effects": [
                                "DEF20%[img:up]"
                            ]
                        }
                    ],
                    "maxValues": {
                        "dodge": "50%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020310,
        "title": "真の極意",
        "name": "孫悟空(身勝手の極意)",
        "yomi": "そんごくう(みがってのごくい)",
        "rarity": "LR",
        "cost": 77,
        "type": "AGL",
        "class": "Super",
        "release": "2021/01/30",
        "eza": "2024/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "奇跡の覚醒",
            "第7宇宙代表",
            "神次元",
            "純粋サイヤ人",
            "宇宙サバイバル編",
            "孫悟空の系譜",
            "亀仙流",
            "再起する力",
            "かめはめ波",
            "伝説の存在",
            "親友の絆",
            "高速戦闘",
            "託された意思",
            "命運をかけた戦い",
            "親子の絆",
            "地球育ちの戦士",
            "超HERO",
            "大会出場者"
        ],
        "leaderSkill": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "「奇跡の覚醒」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF180%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020290
            },
            {
                "rank": "UR",
                "id": 1020300,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020310,
                "medals": [
                    {
                        "name": "超激戦/身勝手の極意/2",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/身勝手の極意/1",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020310,
                "medals": [
                    {
                        "name": "zb/[真の極意]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "かめはめ波",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22350,
                        "atk": 20700,
                        "def": 14525
                    },
                    "fifty": {
                        "hp": 19750,
                        "atk": 17700,
                        "def": 11125
                    },
                    "base": {
                        "hp": 17750,
                        "atk": 15700,
                        "def": 9125
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "完全なる極意",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "超極限かめはめ波",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "仲間から託された力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "超高確率で敵の攻撃を回避",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "回避すると",
                            "effects": [
                                "DEF30%[img:up]"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が3回以上攻撃を受けた後の 自身の攻撃参加ターン開始時にHP50%以下のとき 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "dodge": "70%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "怒りの一閃",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "驚異的なスピード",
                    "臨戦態勢",
                    "神の次元",
                    "かめはめ波",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 22350,
                        "atk": 20700,
                        "def": 14525
                    },
                    "fifty": {
                        "hp": 19750,
                        "atk": 17700,
                        "def": 11125
                    },
                    "base": {
                        "hp": 17750,
                        "atk": 15700,
                        "def": 9125
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "完全なる極意(極限)",
                        "effect": "1ターンATKが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動 &1ターン仲間の会心率7%UP"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "超極限かめはめ波(極限)",
                        "effect": "1ターンATKが超大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動 &2ターン仲間の会心率7%UP"
                    }
                ],
                "passive": {
                    "name": "仲間から託された力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "77%の確率で敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "敵の攻撃を回避"
                            ]
                        },
                        {
                            "title": "回避するたび",
                            "effects": [
                                "そのターン中、回避率7%[img:up]",
                                "[img:infinity]気力+2(最大+10)",
                                "[img:infinity]DEF30%[img:up](最大150%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時 または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "HP77%以上",
                            "effects": [
                                "ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "HP77%以下のとき 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、敵の攻撃を回避"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "dodge": "100%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "怒りの一閃",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ",
                    "effect": "一時的にATKが大幅上昇し、相手に究極ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1020320,
        "title": "ブルーを超えた新たな姿",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "SSR",
        "cost": 26,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの気力+2、HPとATKとDEF130%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/サイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/サイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/[真の戦闘民族]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 12393,
                        "atk": 13106,
                        "def": 9832
                    },
                    "fifty": {
                        "hp": 8993,
                        "atk": 9706,
                        "def": 6432
                    },
                    "base": {
                        "hp": 7393,
                        "atk": 8106,
                        "def": 4832
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "殻をやぶった力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF100%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+3)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "10%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020330,
        "title": "神領域の進化",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "UR",
        "cost": 58,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF150%UP",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/サイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/サイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/[真の戦闘民族]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 13719,
                        "atk": 14025,
                        "def": 10672
                    },
                    "fifty": {
                        "hp": 10719,
                        "atk": 11025,
                        "def": 7672
                    },
                    "base": {
                        "hp": 8719,
                        "atk": 9025,
                        "def": 5672
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 10,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に超特大ダメージを与え、1ターン中確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "全てを纏った力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF120%[img:up]",
                                "ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃を受けると",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up]"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+4)"
                            ]
                        }
                    ],
                    "maxValues": {
                        "reduce": "20%"
                    }
                }
            }
        ]
    },
    {
        "id": 1020340,
        "title": "真の戦闘民族",
        "name": "超サイヤ人ゴッドSSベジータ(進化)",
        "yomi": "すーぱーさいやじんごっどすーぱーさいやじんべじーた(しんか)",
        "rarity": "LR",
        "cost": 77,
        "type": "INT",
        "class": "Super",
        "release": "2021/01/30",
        "eza": "2024/02/22",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [
            "再起する力",
            "第7宇宙代表",
            "宇宙サバイバル編",
            "神次元",
            "純粋サイヤ人",
            "フルパワー",
            "ベジータの系譜",
            "兄弟の絆",
            "好敵手",
            "師弟の絆",
            "力戦奮闘",
            "奇跡の覚醒",
            "天才戦士",
            "超サイヤ人を超えた力",
            "親子の絆",
            "超HERO",
            "大会出場者",
            "継承する者"
        ],
        "leaderSkill": "「再起する力」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF170%UP",
        "leaderSkill_eza": "「再起する力」または「第7宇宙代表」カテゴリの気力+3、HPとATKとDEF180%UP",
        "leaderSkill_seza": "",
        "awakening": [
            {
                "rank": "SSR",
                "id": 1020320
            },
            {
                "rank": "UR",
                "id": 1020330,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    }
                ]
            },
            {
                "rank": "LR",
                "id": 1020340,
                "medals": [
                    {
                        "name": "超激戦/サイヤの境地/3",
                        "bg": "超激戦/bg",
                        "count": 35
                    },
                    {
                        "name": "超激戦/サイヤの境地/2",
                        "bg": "超激戦/bg",
                        "count": 21
                    },
                    {
                        "name": "超激戦/サイヤの境地/1",
                        "bg": "超激戦/bg",
                        "count": 14
                    }
                ]
            },
            {
                "rank": "EZA",
                "id": 1020340,
                "medals": [
                    {
                        "name": "zb/[真の戦闘民族]/4",
                        "count": 45
                    }
                ]
            }
        ],
        "farmCards": [],
        "partners": [],
        "forms": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "ダメージ軽減率10%[img:up]",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が7回以上攻撃を受けた後の 自身の攻撃参加ターン開始時にHP50%以下のとき 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "40%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            },
            {
                "label": "ビジュアルチェンジ",
                "name": "",
                "id": 4020340,
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 20,
                        "type": "格闘",
                        "name": "戦闘民族の誇り",
                        "effect": "相手に極大ダメージを与え、1ターン高確率で会心が発動"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 20,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ",
                        "effect": "相手に超極大ダメージを与え、1ターン高確率で会心が発動"
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF150%[img:up]",
                                "ダメージ軽減率10%[img:up]",
                                "中確率で必殺技が追加発動"
                            ]
                        },
                        {
                            "title": "攻撃を受けるたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+1(最大+5)"
                            ]
                        },
                        {
                            "title": "バトル中自身が7回以上攻撃を受けた後の 自身の攻撃参加ターン開始時にHP50%以下のとき 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが70%回復し復活する"
                            ]
                        }
                    ],
                    "maxValues": {
                        "add": "1回",
                        "reduce": "40%",
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            }
        ],
        "forms_eza": [
            {
                "label": "通常形態",
                "name": "",
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "戦闘民族の誇り(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動 &1ターン仲間の会心率7%UP"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動 &2ターン仲間の会心率7%UP"
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+3(最大+10)",
                                "[img:infinity]ATK/DEF30%[img:up](最大120%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時 または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "バトル中自身が5回以上攻撃を受けた 次の自身の攻撃参加ターン以降、 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "80%",
                        "guard": true,
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            },
            {
                "label": "ビジュアルチェンジ",
                "name": "",
                "id": 4020340,
                "links": [
                    "天才",
                    "王の血筋",
                    "神の次元",
                    "臨戦態勢",
                    "力の大会",
                    "超激戦",
                    "伝説の力"
                ],
                "stats": {
                    "rainbow": {
                        "hp": 21688,
                        "atk": 19850,
                        "def": 15719
                    },
                    "fifty": {
                        "hp": 18688,
                        "atk": 16850,
                        "def": 12719
                    },
                    "base": {
                        "hp": 16688,
                        "atk": 14850,
                        "def": 10719
                    }
                },
                "superAttacks": [
                    {
                        "ki": "12~",
                        "maxLv": 25,
                        "type": "格闘",
                        "name": "戦闘民族の誇り(極限)",
                        "effect": "1ターンDEFが大幅上昇し、相手に極大ダメージを与え、1ターン高確率で会心が発動 &1ターン仲間の会心率7%UP"
                    },
                    {
                        "ki": "18~",
                        "maxLv": 25,
                        "type": "気弾",
                        "name": "ファイナルフラッシュ(極限)",
                        "effect": "1ターンATKとDEFが大幅上昇し、相手に超極大ダメージを与え、1ターン高確率で会心が発動 &2ターン仲間の会心率7%UP"
                    }
                ],
                "passive": {
                    "name": "約束を守るための力",
                    "intro": null,
                    "details": [
                        {
                            "title": "基本効果",
                            "effects": [
                                "ATK/DEF200%[img:up]",
                                "77%の確率で必殺技が追加発動",
                                "ダメージ軽減率50%[img:up]"
                            ]
                        },
                        {
                            "title": "登場から1ターンの間",
                            "effects": [
                                "気力+7",
                                "全ての攻撃をガード"
                            ]
                        },
                        {
                            "title": "攻撃を受けるか回避するたび",
                            "effects": [
                                "そのターン中、ダメージ軽減率10%[img:up](最大30%)"
                            ]
                        },
                        {
                            "title": "攻撃するたび",
                            "effects": [
                                "[img:infinity]気力+3(最大+10)",
                                "[img:infinity]ATK/DEF30%[img:up](最大120%)"
                            ]
                        },
                        {
                            "title": "アクティブスキル発動時 または気力メーター24のとき",
                            "effects": [
                                "ATK77%[img:up]",
                                "必ず会心が発動"
                            ]
                        },
                        {
                            "title": "バトル中自身が5回以上攻撃を受けた 次の自身の攻撃参加ターン以降、 攻撃参加中の自身を含む味方がKO",
                            "effects": [
                                "[img:one_time]HPが77%回復し復活する"
                            ]
                        },
                        {
                            "title": "自身か味方の復活スキルが発動すると",
                            "effects": [
                                "[img:infinity]気力+7",
                                "[img:infinity]ATK/DEF77%[img:up]"
                            ]
                        },
                        {
                            "title": "自身の復活スキルが発動すると",
                            "effects": [
                                "次の攻撃参加ターン中、全ての攻撃をガード"
                            ]
                        }
                    ],
                    "maxValues": {
                        "crit": "100%",
                        "add": "1回",
                        "reduce": "80%",
                        "guard": true,
                        "revival": true
                    }
                },
                "active": {
                    "name": "ファイナルエクスプロージョン",
                    "condition": "バトル開始から4ターン目以降、HP50%以上で発動可能(1回のみ)",
                    "effect": "敵全体に超極大ダメージを与える"
                }
            }
        ]
    },
    {
        "id": 1022360,
        "title": "紅き神戦士の鼓動",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "SSR",
        "cost": 0,
        "type": "TEQ",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1022370,
        "title": "超克の領域",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "UR",
        "cost": 0,
        "type": "TEQ",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1022380,
        "title": "無限パワーの神戦士",
        "name": "超サイヤ人ゴッド孫悟空&超サイヤ人ゴッドベジータ",
        "yomi": "すーぱーさいやじんごっどそんごくう&すーぱーさいやじんごっどべじーた",
        "rarity": "LR",
        "cost": 0,
        "type": "TEQ",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1022400,
        "title": "猛き戦闘民族の衝動",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1022410,
        "title": "超克のバトル",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1022420,
        "title": "究極パワーのサイヤ人戦士",
        "name": "超サイヤ人4孫悟空&超サイヤ人4ベジータ",
        "yomi": "すーぱーさいやじん4そんごくう&すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025710,
        "title": "結束した超パワー",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "SSR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025720,
        "title": "激化する死闘",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "UR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025730,
        "title": "全宇宙最後の希望",
        "name": "超サイヤ人3孫悟空&超サイヤ人2ベジータ",
        "yomi": "すーぱーさいやじん3そんごくう&すーぱーさいやじん2べじーた",
        "rarity": "LR",
        "cost": 0,
        "type": "PHY",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025750,
        "title": "死闘のクライマックス",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "SSR",
        "cost": 0,
        "type": "STR",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025760,
        "title": "崩壊に立ち向かう闘志",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "UR",
        "cost": 0,
        "type": "STR",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1025770,
        "title": "奇跡を起こす最終決戦",
        "name": "孫悟空(GT)&超サイヤ人4ベジータ",
        "yomi": "そんごくう(GT)&すーぱーさいやじん4べじーた",
        "rarity": "LR",
        "cost": 0,
        "type": "STR",
        "class": "Super",
        "source_type": "gasha",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1027960,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1027970,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1027980,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028000,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028010,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028020,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028300,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028310,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028320,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028350,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028360,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1028370,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030320,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030330,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030340,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030370,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030380,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030390,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030410,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030420,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030430,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030460,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030470,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030480,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030510,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030520,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030530,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030550,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "SSR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030560,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "UR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    },
    {
        "id": 1030570,
        "title": "",
        "name": "",
        "yomi": "",
        "rarity": "LR",
        "cost": 0,
        "type": "",
        "class": "",
        "source_type": "",
        "drop_event": "",
        "categories": [],
        "leaderSkill": "",
        "leaderSkill_eza": "",
        "leaderSkill_seza": "",
        "farmCards": [],
        "partners": [],
        "forms": []
    }
];