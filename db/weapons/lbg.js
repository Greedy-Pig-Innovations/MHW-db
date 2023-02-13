const { client } = require("../client");

const createLbg = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,specialAmmo,deviation,ammo,slots,elements,crafting,assets}) => {

    try {

        const {rows: [lbg]} = await client.query(`
        INSERT INTO lbg(id,type,rarity,attack,elderseal,attributes,"damageType",name,"specialAmmo",deviation,ammo,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,specialAmmo,deviation,ammo,slots,elements,crafting,assets]);
    
        return lbg;
        
      } catch (error) {
        throw error
      }

    } 


const lbgData = [
    {
         id: 912,
         type: "light-bowgun",
         rarity: 1,
         attack: {
             display: 130,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Chain Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                913
            ],
             craftingMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 116,
                         rarity: 4,
                         carryLimit: 99,
                         value: 60,
                         name: "Iron Ore",
                         description: "Ore that can be smelted into metal and used for many different purposes."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/07c0cac0a2a3c0bc18931a842a69c6a0a75c12df.9a312c0a0cfbd3088df5f450b9abf79e.png"
        }
    },
    {
         id: 913,
         type: "light-bowgun",
         rarity: 1,
         attack: {
             display: 143,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Chain Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 912,
             branches: [
                914,
                929
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 116,
                         rarity: 4,
                         carryLimit: 99,
                         value: 60,
                         name: "Iron Ore",
                         description: "Ore that can be smelted into metal and used for many different purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/07c0cac0a2a3c0bc18931a842a69c6a0a75c12df.9a312c0a0cfbd3088df5f450b9abf79e.png"
        }
    },
    {
         id: 914,
         type: "light-bowgun",
         rarity: 2,
         attack: {
             display: 156,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Chain Blitz 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 913,
             branches: [
                915,
                922
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 121,
                         rarity: 4,
                         carryLimit: 99,
                         value: 80,
                         name: "Earth Crystal",
                         description: "Crystallized microbes prized as an abrasive when forging weapons. Mainly found in the Wildspire Waste."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 117,
                         rarity: 4,
                         carryLimit: 99,
                         value: 160,
                         name: "Machalite Ore",
                         description: "Ore that's more difficult to procure than Iron Ore. Produces fine metal."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 116,
                         rarity: 4,
                         carryLimit: 99,
                         value: 60,
                         name: "Iron Ore",
                         description: "Ore that can be smelted into metal and used for many different purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/07c0cac0a2a3c0bc18931a842a69c6a0a75c12df.9a312c0a0cfbd3088df5f450b9abf79e.png"
        }
    },
    {
         id: 915,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "High Chain Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 914,
             branches: [
                916
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 117,
                         rarity: 4,
                         carryLimit: 99,
                         value: 160,
                         name: "Machalite Ore",
                         description: "Ore that's more difficult to procure than Iron Ore. Produces fine metal."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 148,
                         rarity: 4,
                         carryLimit: 99,
                         value: 300,
                         name: "Monster Bone M",
                         description: "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/a58cbc6c0de7684673ae1653096ce5a34e2a6120.e8d1ee3edee261d57d50767125ae666b.png"
        }
    },
    {
         id: 916,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "High Chain Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 915,
             branches: [
                917
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 122,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Coral Crystal - Rarity 4",
                         description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 117,
                         rarity: 4,
                         carryLimit: 99,
                         value: 160,
                         name: "Machalite Ore",
                         description: "Ore that's more difficult to procure than Iron Ore. Produces fine metal."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/a58cbc6c0de7684673ae1653096ce5a34e2a6120.e8d1ee3edee261d57d50767125ae666b.png"
        }
    },
    {
         id: 917,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "High Chain Blitz 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 916,
             branches: [
                918
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 8,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 123,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Dragonvein Crystal",
                         description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/a58cbc6c0de7684673ae1653096ce5a34e2a6120.e8d1ee3edee261d57d50767125ae666b.png"
        }
    },
    {
         id: 918,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Cross Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 917,
             branches: [
                919,
                920
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 8,
                     item: {
                         id: 120,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1020,
                         name: "Fucium Ore",
                         description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 123,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Dragonvein Crystal",
                         description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/d7167e0ec53295f2466ea91d2e55120c6e8040e0.02808db9f7f3fd29e89e43f19438d853.png"
        }
    },
    {
         id: 919,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Cross Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 918,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 174,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Blood",
                         description: "Contains an unknown compound. The object of much scholarly research."
                    }
                },
                {
                     quantity: 13,
                     item: {
                         id: 120,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1020,
                         name: "Fucium Ore",
                         description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
                    }
                },
                {
                     quantity: 20,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 126,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1720,
                         name: "Firecell Stone",
                         description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/d7167e0ec53295f2466ea91d2e55120c6e8040e0.02808db9f7f3fd29e89e43f19438d853.png"
        }
    },
    {
         id: 920,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Nergal Spitter",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 918,
             branches: [
                921
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 409,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4500,
                         name: "Nergigante Talon",
                         description: "Rare Nergigante material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 410,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3400,
                         name: "Nergigante Regrowth Plate",
                         description: "Rare Nergigante material. Obtained by collecting rare drops. Unusual, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 407,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4300,
                         name: "Nergigante Tail",
                         description: "Rare Nergigante material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 406,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3200,
                         name: "Nergigante Carapace",
                         description: "Rare Nergigante material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/eef7ca3218c47d183bcfa43cfc4c01646e4e4f93.979d5ee15a68fd0988cc3cd0dd1c26cf.png"
        }
    },
    {
         id: 921,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Cataclysm's Trigger",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 920,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 440,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5600,
                         name: "Xeno'jiiva Horn",
                         description: "A rare Xeno'jiiva horn. During growth, it's theorized that it helps control the beast's power."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 408,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Nergigante Horn+",
                         description: "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 409,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4500,
                         name: "Nergigante Talon",
                         description: "Rare Nergigante material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 411,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Nergigante Gem",
                         description: "A rare gem said to have formed within Nergigante tissue. Holds untold potential."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/bd8f6247f2352ad1d0fec2b0da3cda4c74f5cb8c.fa71a5d96d062f6d85cda28f395fb6ea.png"
        }
    },
    {
         id: 922,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Lumu Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 914,
             branches: [
                923
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 295,
                         rarity: 4,
                         carryLimit: 99,
                         value: 950,
                         name: "Paolumu Shell",
                         description: "Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 294,
                         rarity: 4,
                         carryLimit: 99,
                         value: 450,
                         name: "Paolumu Scale",
                         description: "Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 293,
                         rarity: 4,
                         carryLimit: 99,
                         value: 650,
                         name: "Paolumu Pelt",
                         description: "Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/3dabbd348109ce29a3f2785ec5c39f0f30239a63.4c72f289d7d05a7c92a24f68f643fd57.png"
        }
    },
    {
         id: 923,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Lumu Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 922,
             branches: [
                924
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 356,
                         rarity: 4,
                         carryLimit: 99,
                         value: 620,
                         name: "Diablos Shell",
                         description: "Diablos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 295,
                         rarity: 4,
                         carryLimit: 99,
                         value: 950,
                         name: "Paolumu Shell",
                         description: "Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 296,
                         rarity: 4,
                         carryLimit: 99,
                         value: 850,
                         name: "Paolumu Webbing",
                         description: "Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 204,
                         rarity: 4,
                         carryLimit: 99,
                         value: 220,
                         name: "Shamos Scale",
                         description: "Shamos material. Obtained by carving. Used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/3dabbd348109ce29a3f2785ec5c39f0f30239a63.4c72f289d7d05a7c92a24f68f643fd57.png"
        }
    },
    {
         id: 924,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Lumu Typhon 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: true,
             previous: 923,
             branches: [
                925,
                927
            ],
             craftingMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 297,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1570,
                         name: "Paolumu Pelt+",
                         description: "Rare Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 296,
                         rarity: 4,
                         carryLimit: 99,
                         value: 850,
                         name: "Paolumu Webbing",
                         description: "Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 299,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2140,
                         name: "Paolumu Carapace+",
                         description: "Rare Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 299,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2140,
                         name: "Paolumu Carapace+",
                         description: "Rare Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 298,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1070,
                         name: "Paolumu Scale+",
                         description: "Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 297,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1570,
                         name: "Paolumu Pelt+",
                         description: "Rare Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 206,
                         rarity: 6,
                         carryLimit: 99,
                         value: 420,
                         name: "Shamos Scale+",
                         description: "Rare Shamos material. Obtained by carving. Used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b7ab5d77fb3bfa43895691a48808ad39b2427f6d.cf3b4c4755e9378d04381bc42a7b855b.png"
        }
    },
    {
         id: 925,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Lumu Typhon 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 924,
             branches: [
                926
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 365,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3040,
                         name: "Blos Medulla",
                         description: "Rare Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 299,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2140,
                         name: "Paolumu Carapace+",
                         description: "Rare Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 300,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2070,
                         name: "Paolumu Wing",
                         description: "Rare Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 125,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2440,
                         name: "Novacrystal",
                         description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b7ab5d77fb3bfa43895691a48808ad39b2427f6d.cf3b4c4755e9378d04381bc42a7b855b.png"
        }
    },
    {
         id: 926,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Lumu Typhon 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 925,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 153,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Bone",
                         description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 299,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2140,
                         name: "Paolumu Carapace+",
                         description: "Rare Paolumu material. Obtained by breaking its tail. Used for many purposes."
                    }
                },
                {
                     quantity: 7,
                     item: {
                         id: 298,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1070,
                         name: "Paolumu Scale+",
                         description: "Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b7ab5d77fb3bfa43895691a48808ad39b2427f6d.cf3b4c4755e9378d04381bc42a7b855b.png"
        }
    },
    {
         id: 927,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Bazel Typhoon 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    2,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 924,
             branches: [
                928
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 402,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Bazelgeuse Talon",
                         description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 398,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Bazelgeuse Scale+",
                         description: "Rare Bazelgeuse material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 401,
                         rarity: 6,
                         carryLimit: 99,
                         value: 4000,
                         name: "Bazelgeuse Fuse",
                         description: "Rare Bazelgeuse material. Obtained by breaking its head. Grants blast element properties."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 126,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1720,
                         name: "Firecell Stone",
                         description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/95f124c631d1b6b0e043f22586b7b5a38affe4c2.933de746e52e8d626e0417760f686b1e.png"
        }
    },
    {
         id: 928,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Bazel Typhoon 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    2,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 927,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 427,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3600,
                         name: "Teostra Powder",
                         description: "Rare Teostra material. Obtained by collecting rare drops. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 403,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3400,
                         name: "Bazelgeuse Wing",
                         description: "Rare Bazelgeuse material. Obtained by breaking its wings. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 402,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Bazelgeuse Talon",
                         description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 404,
                         rarity: 7,
                         carryLimit: 99,
                         value: 9600,
                         name: "Bazelgeuse Gem",
                         description: "A rare gem said to have formed within Bazelgeuse tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/95f124c631d1b6b0e043f22586b7b5a38affe4c2.933de746e52e8d626e0417760f686b1e.png"
        }
    },
    {
         id: 929,
         type: "light-bowgun",
         rarity: 2,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Blitz 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 913,
             branches: [
                930,
                939
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 216,
                         rarity: 4,
                         carryLimit: 99,
                         value: 420,
                         name: "Great Jagras Claw",
                         description: "Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 214,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Great Jagras Hide",
                         description: "Great Jagras material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 213,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Great Jagras Scale",
                         description: "Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 154,
                         rarity: 4,
                         carryLimit: 99,
                         value: 200,
                         name: "Sharp Claw",
                         description: "Obtained from small fanged wyverns. Unlike wyvern claws, this is shaped to grip objects."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/69ffbaeeb564b9a8abc9e1df7b27e7c1a797aa0c.9f1a6b00178a2583535ff6a97ab08e95.png"
        }
    },
    {
         id: 930,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Blitz 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 929,
             branches: [
                931,
                935
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 216,
                         rarity: 4,
                         carryLimit: 99,
                         value: 420,
                         name: "Great Jagras Claw",
                         description: "Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 215,
                         rarity: 4,
                         carryLimit: 99,
                         value: 440,
                         name: "Great Jagras Mane",
                         description: "Great Jagras material. Obtained by breaking its head. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 140,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Coral Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 287,
                         rarity: 4,
                         carryLimit: 99,
                         value: 840,
                         name: "Tzitzi-Ya-Ku Claw",
                         description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/69ffbaeeb564b9a8abc9e1df7b27e7c1a797aa0c.9f1a6b00178a2583535ff6a97ab08e95.png"
        }
    },
    {
         id: 931,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Blitz 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 930,
             branches: [
                932
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 213,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Great Jagras Scale",
                         description: "Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 216,
                         rarity: 4,
                         carryLimit: 99,
                         value: 420,
                         name: "Great Jagras Claw",
                         description: "Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 215,
                         rarity: 4,
                         carryLimit: 99,
                         value: 440,
                         name: "Great Jagras Mane",
                         description: "Great Jagras material. Obtained by breaking its head. Used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/69ffbaeeb564b9a8abc9e1df7b27e7c1a797aa0c.9f1a6b00178a2583535ff6a97ab08e95.png"
        }
    },
    {
         id: 932,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Fire 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 931,
             branches: [
                933
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 217,
                         rarity: 6,
                         carryLimit: 99,
                         value: 860,
                         name: "Great Jagras Scale+",
                         description: "Rare Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 219,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1620,
                         name: "Great Jagras Claw+",
                         description: "Rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 215,
                         rarity: 4,
                         carryLimit: 99,
                         value: 440,
                         name: "Great Jagras Mane",
                         description: "Great Jagras material. Obtained by breaking its head. Used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 155,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Piercing Claw",
                         description: "Material from high rank small fanged wyverns. Sharp enough that it might serve as a makeshift knife."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2dc89557b57d8ed079772ce457fe0bf39c06527e.66d7c8b3b93bcd1c7953ec228a481321.png"
        }
    },
    {
         id: 933,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Fire 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            },
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 932,
             branches: [
                934
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 152,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Monster Hardbone",
                         description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 219,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1620,
                         name: "Great Jagras Claw+",
                         description: "Rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 203,
                         rarity: 6,
                         carryLimit: 99,
                         value: 480,
                         name: "Jagras Hide+",
                         description: "Rare Jagras material. Obtained by carving. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 291,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1640,
                         name: "Tzitzi-Ya-Ku Claw+",
                         description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2dc89557b57d8ed079772ce457fe0bf39c06527e.66d7c8b3b93bcd1c7953ec228a481321.png"
        }
    },
    {
         id: 934,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Fire 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 3
            },
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 933,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 417,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4750,
                         name: "Vaal Hazak Talon",
                         description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 8,
                     item: {
                         id: 219,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1620,
                         name: "Great Jagras Claw+",
                         description: "Rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 218,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1220,
                         name: "Great Jagras Hide+",
                         description: "Rare Great Jagras material. Mostly obtained as a reward. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 125,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2440,
                         name: "Novacrystal",
                         description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2dc89557b57d8ed079772ce457fe0bf39c06527e.66d7c8b3b93bcd1c7953ec228a481321.png"
        }
    },
    {
         id: 935,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Flame Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 930,
             branches: [
                936
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 340,
                         rarity: 4,
                         carryLimit: 99,
                         value: 590,
                         name: "Rathalos Scale",
                         description: "Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 342,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1180,
                         name: "Rathalos Webbing",
                         description: "Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 164,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Flame Sac",
                         description: "A monster organ filled with flammable powder. Handle with extreme care."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 345,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1360,
                         name: "Rathalos Marrow",
                         description: "Rathalos material. Obtained by carving. Grants fire element properties."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6415196c83191915a57b1b356f20574e0b8c8012.956553b417d8632939ee7a103d98e3c1.png"
        }
    },
    {
         id: 936,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Flame Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 935,
             branches: [
                937
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 340,
                         rarity: 4,
                         carryLimit: 99,
                         value: 590,
                         name: "Rathalos Scale",
                         description: "Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 343,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1270,
                         name: "Rathalos Tail",
                         description: "Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 346,
                         rarity: 5,
                         carryLimit: 99,
                         value: 3000,
                         name: "Rathalos Plate",
                         description: "Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 165,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Inferno Sac",
                         description: "A monster organ filled with powder that ignites if it so much as touches air. Danger!"
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6415196c83191915a57b1b356f20574e0b8c8012.956553b417d8632939ee7a103d98e3c1.png"
        }
    },
    {
         id: 937,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Rathbuster 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 936,
             branches: [
                938
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 347,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1250,
                         name: "Rathalos Scale+",
                         description: "Rare Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 348,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1850,
                         name: "Rathalos Carapace",
                         description: "Rare Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 349,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2500,
                         name: "Rathalos Wing",
                         description: "Rare Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 350,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2600,
                         name: "Rathalos Medulla",
                         description: "Rare Rathalos material. Obtained by carving. Grants fire element properties."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/7707b64a5d32db0604171af2faf4274b2ac92958.747f36c76c25c31d131b5fef0b58ea65.png"
        }
    },
    {
         id: 938,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Rathbuster 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 937,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 352,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1450,
                         name: "Azure Rathalos Scale+",
                         description: "Rare Azure Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 353,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2150,
                         name: "Azure Rathalos Carapace",
                         description: "Rare Azure Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 355,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2850,
                         name: "Azure Rathalos Wing",
                         description: "Rare Azure Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 351,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7200,
                         name: "Rathalos Ruby",
                         description: "A rare gem said to have formed within Rathalos tissue. Almost too nice to use."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/7707b64a5d32db0604171af2faf4274b2ac92958.747f36c76c25c31d131b5fef0b58ea65.png"
        }
    },
    {
         id: 939,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Thunder Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 929,
             branches: [
                940,
                944
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 258,
                         rarity: 4,
                         carryLimit: 99,
                         value: 720,
                         name: "Tobi-Kadachi Electrode",
                         description: "Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 257,
                         rarity: 4,
                         carryLimit: 99,
                         value: 660,
                         name: "Tobi-Kadachi Claw",
                         description: "Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 170,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1000,
                         name: "Electro Sac",
                         description: "A monster organ that can store up electricity, which is released on impact."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/eb0ab196fb04f9c4ee906df5149aa592b2b72101.c1c165a199ee7001fc26698808a9af69.png"
        }
    },
    {
         id: 940,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Thunder Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 939,
             branches: [
                941
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 258,
                         rarity: 4,
                         carryLimit: 99,
                         value: 720,
                         name: "Tobi-Kadachi Electrode",
                         description: "Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 256,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Tobi-Kadachi Membrane",
                         description: "Tobi-Kadachi material. Mostly obtained by carving. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 122,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Coral Crystal - Rarity 4",
                         description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/eb0ab196fb04f9c4ee906df5149aa592b2b72101.c1c165a199ee7001fc26698808a9af69.png"
        }
    },
    {
         id: 941,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Lightning Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 940,
             branches: [
                942
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 259,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1050,
                         name: "Tobi-Kadachi Scale+",
                         description: "Rare Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 260,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1550,
                         name: "Tobi-Kadachi Pelt+",
                         description: "Rare Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 181,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Vespoid Innerwing",
                         description: "Rare Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8ab5d2553233a4650537b0a75b3dc643517c3d03.4d50ebc17ac639b65443e37512c2db16.png"
        }
    },
    {
         id: 942,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Lightning Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 941,
             branches: [
                943
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 120,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1020,
                         name: "Fucium Ore",
                         description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 262,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1750,
                         name: "Tobi-Kadachi Electrode+",
                         description: "Rare Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 256,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Tobi-Kadachi Membrane",
                         description: "Tobi-Kadachi material. Mostly obtained by carving. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 171,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Thunder Sac",
                         description: "A monster organ that can store up large amounts of high voltage electricity."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8ab5d2553233a4650537b0a75b3dc643517c3d03.4d50ebc17ac639b65443e37512c2db16.png"
        }
    },
    {
         id: 943,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Lightning Blitz 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 942,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 174,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Blood",
                         description: "Contains an unknown compound. The object of much scholarly research."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 262,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1750,
                         name: "Tobi-Kadachi Electrode+",
                         description: "Rare Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 261,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1650,
                         name: "Tobi-Kadachi Claw+",
                         description: "Rare Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8ab5d2553233a4650537b0a75b3dc643517c3d03.4d50ebc17ac639b65443e37512c2db16.png"
        }
    },
    {
         id: 944,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Snow Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 939,
             branches: [
                945
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 320,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1040,
                         name: "Legiana Claw",
                         description: "Legiana material. Mostly obtained by carving. Grants ice elemental properties."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 318,
                         rarity: 4,
                         carryLimit: 99,
                         value: 540,
                         name: "Legiana Scale",
                         description: "Legiana material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 168,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1000,
                         name: "Frost Sac",
                         description: "A monster internal organ, filled with extremely low temperature fluid. Handle with care."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 122,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Coral Crystal - Rarity 4",
                         description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/81401212791de70527b0a3d02abc187fe99f7f17.ee5b2078f7c6a2a9b01850b0f4e95f04.png"
        }
    },
    {
         id: 945,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Snow Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 944,
             branches: [
                946
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 322,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1160,
                         name: "Legiana Tail Webbing",
                         description: "Legiana material. Obtained by breaking its tail. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 321,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1080,
                         name: "Legiana Webbing",
                         description: "Legiana material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 206,
                         rarity: 6,
                         carryLimit: 99,
                         value: 420,
                         name: "Shamos Scale+",
                         description: "Rare Shamos material. Obtained by carving. Used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/81401212791de70527b0a3d02abc187fe99f7f17.ee5b2078f7c6a2a9b01850b0f4e95f04.png"
        }
    },
    {
         id: 946,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Frost Blitz 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 945,
             branches: [
                947
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 120,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1020,
                         name: "Fucium Ore",
                         description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 324,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1230,
                         name: "Legiana Scale+",
                         description: "Rare Legiana material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 327,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2460,
                         name: "Legiana Wing",
                         description: "Rare Legiana material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 169,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2400,
                         name: "Freezer Sac",
                         description: "A monster organ with tremendous freezing power. Turns its surroundings to ice."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/05ea5a73340db8fe803e042d5b00aea84de11eb0.6acb00e75a36248a60de858d97fa519c.png"
        }
    },
    {
         id: 947,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Frost Blitz 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 946,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 174,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Blood",
                         description: "Contains an unknown compound. The object of much scholarly research."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 326,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2430,
                         name: "Legiana Claw+",
                         description: "Rare Legiana material. Mostly obtained by carving. Grants ice elemental properties."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 325,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1830,
                         name: "Legiana Hide+",
                         description: "Rare Legiana material. Mostly obtained as a reward. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/05ea5a73340db8fe803e042d5b00aea84de11eb0.6acb00e75a36248a60de858d97fa519c.png"
        }
    },
    {
         id: 948,
         type: "light-bowgun",
         rarity: 1,
         attack: {
             display: 143,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Rifle 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                949
            ],
             craftingMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 147,
                         rarity: 3,
                         carryLimit: 99,
                         value: 30,
                         name: "Monster Bone S",
                         description: "A material found in bonepiles. Indispensable for both hunting and daily life."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/40a3b59d7c68cc256eaab3eabd983db531601945.2fc6bf9c9dcb744cb86607c7809dffa5.png"
        }
    },
    {
         id: 949,
         type: "light-bowgun",
         rarity: 1,
         attack: {
             display: 156,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Rifle 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 948,
             branches: [
                950,
                963,
                971
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 147,
                         rarity: 3,
                         carryLimit: 99,
                         value: 30,
                         name: "Monster Bone S",
                         description: "A material found in bonepiles. Indispensable for both hunting and daily life."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/730517448069e283cd4abbc9663a8f31daffee89.25aa058bf6c2cb9dcceb148287b71243.png"
        }
    },
    {
         id: 950,
         type: "light-bowgun",
         rarity: 2,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Rifle 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 949,
             branches: [
                951,
                958
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 148,
                         rarity: 4,
                         carryLimit: 99,
                         value: 300,
                         name: "Monster Bone M",
                         description: "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 138,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Ancient Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/730517448069e283cd4abbc9663a8f31daffee89.25aa058bf6c2cb9dcceb148287b71243.png"
        }
    },
    {
         id: 951,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Power Rifle 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 950,
             branches: [
                952
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 149,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Monster Bone L",
                         description: "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 148,
                         rarity: 4,
                         carryLimit: 99,
                         value: 300,
                         name: "Monster Bone M",
                         description: "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 139,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Boulder Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Wildspire Waste. Its size evokes a certain primal quality."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/46376783227c5f52443bc2e3483ae5411a8220ba.68032512165ce15451063566392b98dc.png"
        }
    },
    {
         id: 952,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Power Rifle 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 951,
             branches: [
                953
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 149,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Monster Bone L",
                         description: "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 136,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Sturdy Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands and Rotten Vale."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/46376783227c5f52443bc2e3483ae5411a8220ba.68032512165ce15451063566392b98dc.png"
        }
    },
    {
         id: 953,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Power Rifle 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 952,
             branches: [
                954
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 151,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Keenbone",
                         description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 137,
                         rarity: 6,
                         carryLimit: 99,
                         value: 750,
                         name: "Quality Bone",
                         description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/46376783227c5f52443bc2e3483ae5411a8220ba.68032512165ce15451063566392b98dc.png"
        }
    },
    {
         id: 954,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Sniper Shot 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: true,
             previous: 953,
             branches: [
                955,
                956
            ],
             craftingMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 152,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Monster Hardbone",
                         description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 151,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Keenbone",
                         description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 142,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Brutal Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Elder's Recess. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 143,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Dragonbone Relic",
                         description: "A high quality material found in bone piles. The only remains left of a species of dragon now lost to time."
                    }
                }
            ],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 152,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Monster Hardbone",
                         description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 151,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Keenbone",
                         description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 137,
                         rarity: 6,
                         carryLimit: 99,
                         value: 750,
                         name: "Quality Bone",
                         description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/08257f51c9a127c60dfb1bc836c2dc28501c29e9.b960da8e5fc98b8e3c8725ac77fed634.png"
        }
    },
    {
         id: 955,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Sniper Shot 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 954,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 153,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Bone",
                         description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 152,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Monster Hardbone",
                         description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
                    }
                },
                {
                     quantity: 20,
                     item: {
                         id: 137,
                         rarity: 6,
                         carryLimit: 99,
                         value: 750,
                         name: "Quality Bone",
                         description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 143,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Dragonbone Relic",
                         description: "A high quality material found in bone piles. The only remains left of a species of dragon now lost to time."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/08257f51c9a127c60dfb1bc836c2dc28501c29e9.b960da8e5fc98b8e3c8725ac77fed634.png"
        }
    },
    {
         id: 956,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hazak Ereipia",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 954,
             branches: [
                957
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 417,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4750,
                         name: "Vaal Hazak Talon",
                         description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 416,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4600,
                         name: "Vaal Hazak Fang+",
                         description: "Rare Vaal Hazak material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 412,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2250,
                         name: "Deceased Scale",
                         description: "Rare Vaal Hazak material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 414,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3500,
                         name: "Vaal Hazak Membrane",
                         description: "Rare Vaal Hazak material. Obtained by collecting rare drops. Grants dragon element properties."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2432bd83217fb18068a954d28d204e506b88e2b7.8b2dc94fa319d79ed477ec08d9b018a9.png"
        }
    },
    {
         id: 957,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Gulgoleth's Wail",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 956,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 438,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4300,
                         name: "Xeno'jiiva Veil",
                         description: "A rare Xeno'jiiva organ that stores energy that can be released in a violent torrent."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 417,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4750,
                         name: "Vaal Hazak Talon",
                         description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 415,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4900,
                         name: "Vaal Hazak Tail",
                         description: "Rare Vaal Hazak material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 419,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Vaal Hazak Gem",
                         description: "A rare gem said to have formed within Vaal Hazak Tissue. Holds untold potential."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/e0c74dd7bc42b590d220895bfa6934b717456874.8ec59510aecd7dc48327257ce3d25a3f.png"
        }
    },
    {
         id: 958,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blazing Rifle 1",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 950,
             branches: [
                959
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 265,
                         rarity: 4,
                         carryLimit: 99,
                         value: 830,
                         name: "Anjanath Fang",
                         description: "Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 263,
                         rarity: 4,
                         carryLimit: 99,
                         value: 430,
                         name: "Anjanath Scale",
                         description: "Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 164,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Flame Sac",
                         description: "A monster organ filled with flammable powder. Handle with extreme care."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b2714a9bc289c3062777ffadef53e72a4de353d1.3b3a07bdc4f766d369a41e69b2f8ab4d.png"
        }
    },
    {
         id: 959,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blazing Rifle 2",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 958,
             branches: [
                960
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 345,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1360,
                         name: "Rathalos Marrow",
                         description: "Rathalos material. Obtained by carving. Grants fire element properties."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 265,
                         rarity: 4,
                         carryLimit: 99,
                         value: 830,
                         name: "Anjanath Fang",
                         description: "Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 266,
                         rarity: 4,
                         carryLimit: 99,
                         value: 890,
                         name: "Anjanath Nosebone",
                         description: "Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 267,
                         rarity: 4,
                         carryLimit: 99,
                         value: 860,
                         name: "Anjanath Tail",
                         description: "Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b2714a9bc289c3062777ffadef53e72a4de353d1.3b3a07bdc4f766d369a41e69b2f8ab4d.png"
        }
    },
    {
         id: 960,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Buster 1",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 959,
             branches: [
                961
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 271,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2060,
                         name: "Anjanath Fang+",
                         description: "Rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 269,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1060,
                         name: "Anjanath Scale+",
                         description: "Rare Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 165,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Inferno Sac",
                         description: "A monster organ filled with powder that ignites if it so much as touches air. Danger!"
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 268,
                         rarity: 5,
                         carryLimit: 99,
                         value: 2400,
                         name: "Anjanath Plate",
                         description: "Anjanath material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/402207e6e56180d0538a4044c45fee4c22965e69.e1ef0ee17de40ec79e7d9efe6b96a4b1.png"
        }
    },
    {
         id: 961,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Buster 2",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 960,
             branches: [
                962
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 350,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2600,
                         name: "Rathalos Medulla",
                         description: "Rare Rathalos material. Obtained by carving. Grants fire element properties."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 271,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2060,
                         name: "Anjanath Fang+",
                         description: "Rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 270,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1560,
                         name: "Anjanath Pelt+",
                         description: "Rare Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 126,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1720,
                         name: "Firecell Stone",
                         description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/402207e6e56180d0538a4044c45fee4c22965e69.e1ef0ee17de40ec79e7d9efe6b96a4b1.png"
        }
    },
    {
         id: 962,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 273,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Buster 3",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 961,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 421,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3400,
                         name: "Teostra Mane",
                         description: "Rare Teostra material. Obtained by breaking its head. Highly fire-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 271,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2060,
                         name: "Anjanath Fang+",
                         description: "Rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 272,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2120,
                         name: "Anjanath Nosebone+",
                         description: "Rare Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 273,
                         rarity: 7,
                         carryLimit: 99,
                         value: 6000,
                         name: "Anjanath Gem",
                         description: "A rare gem said to have formed within Anjanath tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/402207e6e56180d0538a4044c45fee4c22965e69.e1ef0ee17de40ec79e7d9efe6b96a4b1.png"
        }
    },
    {
         id: 963,
         type: "light-bowgun",
         rarity: 2,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Madness Rifle 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 949,
             branches: [
                964
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 249,
                         rarity: 4,
                         carryLimit: 99,
                         value: 720,
                         name: "Jyuratodus Fin",
                         description: "Jyuratodus material. Obtained by breaking its back. Used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 247,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Jyuratodus Shell",
                         description: "Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 246,
                         rarity: 4,
                         carryLimit: 99,
                         value: 340,
                         name: "Jyuratodus Scale",
                         description: "Jyuratodus material. Mostly obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 166,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Aqua Sac",
                         description: "A monster organ designed to hold and preserve water."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/ac282d14cb1109167f6db4d2b60e9509fa2d94a9.accf51fc5f51700c45614af88aa5d15c.png"
        }
    },
    {
         id: 964,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Madness Rifle 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 963,
             branches: [
                965
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 302,
                         rarity: 4,
                         carryLimit: 99,
                         value: 650,
                         name: "Great Girros Hide",
                         description: "Great Girros material. Mostly obtained as a reward. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 249,
                         rarity: 4,
                         carryLimit: 99,
                         value: 720,
                         name: "Jyuratodus Fin",
                         description: "Jyuratodus material. Obtained by breaking its back. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 247,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Jyuratodus Shell",
                         description: "Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 187,
                         rarity: 4,
                         carryLimit: 99,
                         value: 220,
                         name: "Gajau Skin",
                         description: "Gajau material. Obtained by carving. Water-resistant, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/ac282d14cb1109167f6db4d2b60e9509fa2d94a9.accf51fc5f51700c45614af88aa5d15c.png"
        }
    },
    {
         id: 965,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Madness Rifle 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 964,
             branches: [
                966
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 248,
                         rarity: 4,
                         carryLimit: 99,
                         value: 640,
                         name: "Jyuratodus Fang",
                         description: "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 247,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Jyuratodus Shell",
                         description: "Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 188,
                         rarity: 4,
                         carryLimit: 99,
                         value: 270,
                         name: "Gajau Whisker",
                         description: "Gajau material. Obtained by carving. Hardy, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/ac282d14cb1109167f6db4d2b60e9509fa2d94a9.accf51fc5f51700c45614af88aa5d15c.png"
        }
    },
    {
         id: 966,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jyura Bullet 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 965,
             branches: [
                967,
                969
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 253,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2120,
                         name: "Jyuratodus Fin+",
                         description: "Rare Jyuratodus material. Obtained by breaking its back. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 251,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1540,
                         name: "Jyuratodus Carapace",
                         description: "Rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 250,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1040,
                         name: "Jyuratodus Scale+",
                         description: "Rare Jyuratodus material. Mostly obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 189,
                         rarity: 6,
                         carryLimit: 99,
                         value: 420,
                         name: "Gajau Scale",
                         description: "Rare Gajau material. Obtained by carving. Water-resistant, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2f858779587993ac4c9a573a2f9225f81c429b3b.af37b5bf8f2b46964582b2e9cffb43be.png"
        }
    },
    {
         id: 967,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jyura Bullet 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 966,
             branches: [
                968
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 152,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Monster Hardbone",
                         description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 253,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2120,
                         name: "Jyuratodus Fin+",
                         description: "Rare Jyuratodus material. Obtained by breaking its back. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 167,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Torrent Sac",
                         description: "A monster organ designed to hold and preserve copious amounts of water."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 190,
                         rarity: 6,
                         carryLimit: 99,
                         value: 520,
                         name: "Grand Gajau Whisker",
                         description: "Rare Gajau material. Obtained by carving. Hardy, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2f858779587993ac4c9a573a2f9225f81c429b3b.af37b5bf8f2b46964582b2e9cffb43be.png"
        }
    },
    {
         id: 968,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jyura Bullet 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 967,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 153,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Bone",
                         description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 253,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2120,
                         name: "Jyuratodus Fin+",
                         description: "Rare Jyuratodus material. Obtained by breaking its back. Used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 252,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2040,
                         name: "Jyuratodus Fang+",
                         description: "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/2f858779587993ac4c9a573a2f9225f81c429b3b.af37b5bf8f2b46964582b2e9cffb43be.png"
        }
    },
    {
         id: 969,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Lava Bullet 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    2,
                    1
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            },
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 966,
             branches: [
                970
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 390,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2560,
                         name: "Lavasioth Fin+",
                         description: "Rare Lavasioth material. Obtained by breaking its dorsal fin. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 389,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2480,
                         name: "Lavasioth Fang+",
                         description: "Rare Lavasioth material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 387,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1280,
                         name: "Lavasioth Scale+",
                         description: "Rare Lavasioth material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6bb1be1aa3dff205a5315616aebf7c624ca7ee12.341f492bb498b4c3d8a7d6c121bef0c9.png"
        }
    },
    {
         id: 970,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Lava Bullet 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    2,
                    1
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            },
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 969,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 421,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3400,
                         name: "Teostra Mane",
                         description: "Rare Teostra material. Obtained by breaking its head. Highly fire-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 390,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2560,
                         name: "Lavasioth Fin+",
                         description: "Rare Lavasioth material. Obtained by breaking its dorsal fin. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 389,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2480,
                         name: "Lavasioth Fang+",
                         description: "Rare Lavasioth material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6bb1be1aa3dff205a5315616aebf7c624ca7ee12.341f492bb498b4c3d8a7d6c121bef0c9.png"
        }
    },
    {
         id: 971,
         type: "light-bowgun",
         rarity: 2,
         attack: {
             display: 169,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Carapace Rifle 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 949,
             branches: [
                972
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 239,
                         rarity: 4,
                         carryLimit: 99,
                         value: 630,
                         name: "Barroth Claw",
                         description: "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 237,
                         rarity: 4,
                         carryLimit: 99,
                         value: 330,
                         name: "Barroth Shell",
                         description: "Barroth material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 238,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Barroth Ridge",
                         description: "Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/ad00c31f8ceaa250a35d2779d7e64f0c.31db87d4c0bfc79d1452de7a0e51479ea63cd022.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4fd2f3ce7d9e8275d0b003b4804f57cddeb57699.750d85279ea4eb658df98fea63b56939.png"
        }
    },
    {
         id: 972,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Carapace Rifle 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 971,
             branches: [
                973,
                977
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 118,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Dragonite Ore",
                         description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 239,
                         rarity: 4,
                         carryLimit: 99,
                         value: 630,
                         name: "Barroth Claw",
                         description: "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 241,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Barroth Tail",
                         description: "Barroth material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 195,
                         rarity: 4,
                         carryLimit: 99,
                         value: 180,
                         name: "Kestodon Shell",
                         description: "Kestodon material. Obtained by carving. Sturdy, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4fd2f3ce7d9e8275d0b003b4804f57cddeb57699.750d85279ea4eb658df98fea63b56939.png"
        }
    },
    {
         id: 973,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Carapace Rifle 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 972,
             branches: [
                974
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 356,
                         rarity: 4,
                         carryLimit: 99,
                         value: 620,
                         name: "Diablos Shell",
                         description: "Diablos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 239,
                         rarity: 4,
                         carryLimit: 99,
                         value: 630,
                         name: "Barroth Claw",
                         description: "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 240,
                         rarity: 4,
                         carryLimit: 99,
                         value: 870,
                         name: "Barroth Scalp",
                         description: "Barroth material. Obtained by breaking its head. Tough, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4fd2f3ce7d9e8275d0b003b4804f57cddeb57699.750d85279ea4eb658df98fea63b56939.png"
        }
    },
    {
         id: 974,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Barroth Shot 1",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 973,
             branches: [
                975
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 245,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1670,
                         name: "Barroth Claw+",
                         description: "Rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 243,
                         rarity: 6,
                         carryLimit: 99,
                         value: 870,
                         name: "Barroth Carapace",
                         description: "Rare Barroth material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 244,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1270,
                         name: "Barroth Ridge+",
                         description: "Rare Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 197,
                         rarity: 6,
                         carryLimit: 99,
                         value: 430,
                         name: "Kestodon Carapace",
                         description: "Superior Kestodon material. Obtained by carving. Sturdy, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/fdfdd6b0a0ea0e648b62ea80c008f36bb7199a0f.4136cc7115f673e27f65518163bb5ca7.png"
        }
    },
    {
         id: 975,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Barroth Shot 2",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 974,
             branches: [
                976
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 362,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1260,
                         name: "Diablos Carapace",
                         description: "Rare Diablos material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 245,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1670,
                         name: "Barroth Claw+",
                         description: "Rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 243,
                         rarity: 6,
                         carryLimit: 99,
                         value: 870,
                         name: "Barroth Carapace",
                         description: "Rare Barroth material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 198,
                         rarity: 6,
                         carryLimit: 99,
                         value: 760,
                         name: "Gastodon Carapace",
                         description: "Rare Gastodon material. Obtained by carving. Sturdy, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/fdfdd6b0a0ea0e648b62ea80c008f36bb7199a0f.4136cc7115f673e27f65518163bb5ca7.png"
        }
    },
    {
         id: 976,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Barroth Shot 3",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 975,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 408,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Nergigante Horn+",
                         description: "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 245,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1670,
                         name: "Barroth Claw+",
                         description: "Rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 244,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1270,
                         name: "Barroth Ridge+",
                         description: "Rare Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/fdfdd6b0a0ea0e648b62ea80c008f36bb7199a0f.4136cc7115f673e27f65518163bb5ca7.png"
        }
    },
    {
         id: 977,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Garon Rifle 1",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 972,
             branches: [
                978
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 331,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1060,
                         name: "Odogaron Claw",
                         description: "Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 329,
                         rarity: 4,
                         carryLimit: 99,
                         value: 560,
                         name: "Odogaron Scale",
                         description: "Odogaron material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 332,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1120,
                         name: "Odogaron Fang",
                         description: "Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/e58b8095e650fc8c5c71d278175eb374c8660e64.d034002aff12bccfab1562e5e755cff9.png"
        }
    },
    {
         id: 978,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Garon Rifle 2",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 977,
             branches: [
                979
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 137,
                         rarity: 6,
                         carryLimit: 99,
                         value: 750,
                         name: "Quality Bone",
                         description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 331,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1060,
                         name: "Odogaron Claw",
                         description: "Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 333,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1240,
                         name: "Odogaron Tail",
                         description: "Odogaron material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 334,
                         rarity: 5,
                         carryLimit: 99,
                         value: 3000,
                         name: "Odogaron Plate",
                         description: "Odogaron material. A rare find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/e58b8095e650fc8c5c71d278175eb374c8660e64.d034002aff12bccfab1562e5e755cff9.png"
        }
    },
    {
         id: 979,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "projectile",
         name: "Fate's Ember",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 978,
             branches: [
                980
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 337,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2440,
                         name: "Odogaron Claw+",
                         description: "Rare Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 8,
                     item: {
                         id: 335,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1240,
                         name: "Odogaron Scale+",
                         description: "Rare Odogaron material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 338,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2480,
                         name: "Odogaron Fang+",
                         description: "Rare Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 143,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Dragonbone Relic",
                         description: "A high quality material found in bone piles. The only remains left of a species of dragon now lost to time."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/a14aaeae012c0659e45e40bb13f0c1d45f801e93.78f8944658053349121ca65c137fa737.png"
        }
    },
    {
         id: 980,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "projectile",
         name: "Karma",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 979,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 425,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4700,
                         name: "Teostra Claw+",
                         description: "Rare Teostra material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 337,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2440,
                         name: "Odogaron Claw+",
                         description: "Rare Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 338,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2480,
                         name: "Odogaron Fang+",
                         description: "Rare Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 339,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7200,
                         name: "Odogaron Gem",
                         description: "A rare gem said to have formed within Odogaron tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/a14aaeae012c0659e45e40bb13f0c1d45f801e93.78f8944658053349121ca65c137fa737.png"
        }
    },
    {
         id: 981,
         type: "light-bowgun",
         rarity: 3,
         attack: {
             display: 130,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bowgun 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                982,
                986
            ],
             craftingMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 141,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Warped Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 140,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Coral Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 139,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Boulder Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Wildspire Waste. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 138,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Ancient Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/b0fb3e04f336525e68148ca21b4ec979.65796b6647075a55298bdb10b68a9cdb83107dcc.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6579c259401f380e8b301e7992c9339d249906c3.92964c494a15bf34a15c69a18ce10837.png"
        }
    },
    {
         id: 982,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 143,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bowgun 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 981,
             branches: [
                983,
                984
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 150,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Monster Bone+",
                         description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
                    }
                },
                {
                     quantity: 8,
                     item: {
                         id: 149,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "Monster Bone L",
                         description: "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items."
                    }
                },
                {
                     quantity: 8,
                     item: {
                         id: 136,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Sturdy Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands and Rotten Vale."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6579c259401f380e8b301e7992c9339d249906c3.92964c494a15bf34a15c69a18ce10837.png"
        }
    },
    {
         id: 983,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bowgun 3",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 982,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 10,
                     item: {
                         id: 153,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Bone",
                         description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 142,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Brutal Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Elder's Recess. Its size evokes a certain primal quality."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 143,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Dragonbone Relic",
                         description: "A high quality material found in bone piles. The only remains left of a species of dragon now lost to time."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/6579c259401f380e8b301e7992c9339d249906c3.92964c494a15bf34a15c69a18ce10837.png"
        }
    },
    {
         id: 984,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Onigashima",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    2,
                    1
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 982,
             branches: [
                985
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 483,
                         rarity: 7,
                         carryLimit: 99,
                         value: 0,
                         name: "High Commendation",
                         description: "A ticket awarded for demonstrating tremendous courage. Collect them and something wonderful may happen!"
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 402,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Bazelgeuse Talon",
                         description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 401,
                         rarity: 6,
                         carryLimit: 99,
                         value: 4000,
                         name: "Bazelgeuse Fuse",
                         description: "Rare Bazelgeuse material. Obtained by breaking its head. Grants blast element properties."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 126,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1720,
                         name: "Firecell Stone",
                         description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/5e8c07520e798a0b2cdd16faea7dede21d824a2b.e13096bab6e4526f44806e0e412d71c0.png"
        }
    },
    {
         id: 985,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dai-Onigashima",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    2,
                    1
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 984,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 441,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5300,
                         name: "Xeno'jiiva Claw",
                         description: "A rare Xeno'jiiva claw, said to cleave soul from flesh."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 442,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Xeno'jiiva Wing",
                         description: "A rare Xeno'jiiva wing. The wing membrane shines with the divine light of a powerful deity."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 402,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Bazelgeuse Talon",
                         description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 404,
                         rarity: 7,
                         carryLimit: 99,
                         value: 9600,
                         name: "Bazelgeuse Gem",
                         description: "A rare gem said to have formed within Bazelgeuse tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/5e8c07520e798a0b2cdd16faea7dede21d824a2b.e13096bab6e4526f44806e0e412d71c0.png"
        }
    },
    {
         id: 986,
         type: "light-bowgun",
         rarity: 4,
         attack: {
             display: 143,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Mythical Horn",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "water",
                 capacities: [
                    5
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    5
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 981,
             branches: [
                987
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 372,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1750,
                         name: "Kirin Thunderhorn",
                         description: "Kirin material. Obtain by breaking its horn. Grants thunder element properties."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 369,
                         rarity: 4,
                         carryLimit: 99,
                         value: 750,
                         name: "Kirin Hide",
                         description: "Kirin material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 370,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1000,
                         name: "Kirin Tail",
                         description: "Kirin material. Mostly obtained as a reward. Compatible with thunder element."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 124,
                         rarity: 5,
                         carryLimit: 99,
                         value: 1150,
                         name: "Lightcrystal",
                         description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/9e6a6a5d7a8bd1f17aa04c462b9cf34f.a1a4d2442093535f6906ec2c325ec06d3ee1c359.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8c35e4cbd691df96106e4c769f1b4265203028e3.474be91942e547c18359b924d8cd5d26.png"
        }
    },
    {
         id: 987,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 182,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Mythical Horn+",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "water",
                 capacities: [
                    5
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    5
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 986,
             branches: [
                988
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 375,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3200,
                         name: "Kirin Azure Horn",
                         description: "Rare Kirin material. Obtain by breaking its horn. Grants thunder element properties."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 373,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1630,
                         name: "Kirin Hide+",
                         description: "Rare Kirin material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 371,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1250,
                         name: "Kirin Mane",
                         description: "Kirin material. Mostly obtained by carving. Highly thunder-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 123,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Dragonvein Crystal",
                         description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8c35e4cbd691df96106e4c769f1b4265203028e3.474be91942e547c18359b924d8cd5d26.png"
        }
    },
    {
         id: 988,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 208,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Mythical Three-Horn",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "water",
                 capacities: [
                    5
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    5
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 987,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 437,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Xeno'jiiva Shell",
                         description: "A rare piece of Xeno'jiiva shell, tempered to act as a vessel for the flames of the underworld."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 375,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3200,
                         name: "Kirin Azure Horn",
                         description: "Rare Kirin material. Obtain by breaking its horn. Grants thunder element properties."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 374,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2430,
                         name: "Kirin Thundertail",
                         description: "Rare Kirin material. Mostly obtained as a reward. Compatible with thunder element."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 125,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2440,
                         name: "Novacrystal",
                         description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/8c35e4cbd691df96106e4c769f1b4265203028e3.474be91942e547c18359b924d8cd5d26.png"
        }
    },
    {
         id: 989,
         type: "light-bowgun",
         rarity: 5,
         attack: {
             display: 130,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Crossbow 1",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                990
            ],
             craftingMaterials: [
                {
                     quantity: 10,
                     item: {
                         id: 123,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Dragonvein Crystal",
                         description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 121,
                         rarity: 4,
                         carryLimit: 99,
                         value: 80,
                         name: "Earth Crystal",
                         description: "Crystallized microbes prized as an abrasive when forging weapons. Mainly found in the Wildspire Waste."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 122,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Coral Crystal - Rarity 4",
                         description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 124,
                         rarity: 5,
                         carryLimit: 99,
                         value: 1150,
                         name: "Lightcrystal",
                         description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/049b673c84574eb918d97e33dc13f9ed.cc4e6a85d61e69a9e88ed1ddffb786e9385de324.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4c895ac94a0731a6b777406c9c788bf342b89568.e3744a9409debd81a20b62ec7acefbb1.png"
        }
    },
    {
         id: 990,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 143,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Crossbow 2",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 989,
             branches: [
                991,
                993
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 126,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1720,
                         name: "Firecell Stone",
                         description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 120,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1020,
                         name: "Fucium Ore",
                         description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
                    }
                },
                {
                     quantity: 10,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4c895ac94a0731a6b777406c9c788bf342b89568.e3744a9409debd81a20b62ec7acefbb1.png"
        }
    },
    {
         id: 991,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 221,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Icesteel Wasp",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 990,
             branches: [
                992
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 434,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4400,
                         name: "Daora Claw+",
                         description: "Rare Kushala Daora material. Mostly obtained by carving. Imbued with potent ice element."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 431,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4300,
                         name: "Daora Webbing",
                         description: "Rare Kushala Daora material. Obtained by breaking its wings. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 406,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3200,
                         name: "Nergigante Carapace",
                         description: "Rare Nergigante material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 433,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4800,
                         name: "Daora Tail",
                         description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/6bc5bdefa4c920891dd87f4ab95e2350.1385d35a017762d91d292f4c62a1f22168a03307.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/1d4271c330752735154bd04c0aca048c6b0227eb.22c7edaadb2e146171d5f926dfc06f6d.png"
        }
    },
    {
         id: 992,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Daora's Hornet",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 991,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 442,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Xeno'jiiva Wing",
                         description: "A rare Xeno'jiiva wing. The wing membrane shines with the divine light of a powerful deity."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 432,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4500,
                         name: "Daora Horn+",
                         description: "Rare Kushala Daora material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 434,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4400,
                         name: "Daora Claw+",
                         description: "Rare Kushala Daora material. Mostly obtained by carving. Imbued with potent ice element."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 435,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Daora Gem",
                         description: "A rare gem said to have formed within Kushala Daora tissue. Holds untold potential."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/46d91b9812d29efdcc34c7050ff3ee3ed9d741c6.6eb7aacf82a806f524b052a6e3a387e9.png"
        }
    },
    {
         id: 993,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Xeno Neqiina",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    0,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    3,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    0,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    0,
                    1
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "water",
                 capacities: [
                    4
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    4
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    4
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 3
            },
            {
                 rank: 3
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 990,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 441,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5300,
                         name: "Xeno'jiiva Claw",
                         description: "A rare Xeno'jiiva claw, said to cleave soul from flesh."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 437,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Xeno'jiiva Shell",
                         description: "A rare piece of Xeno'jiiva shell, tempered to act as a vessel for the flames of the underworld."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 439,
                         rarity: 7,
                         carryLimit: 99,
                         value: 6000,
                         name: "Xeno'jiiva Tail",
                         description: "A rare, strong Xeno'jiiva tail that can brush aside all enemies in a single lash."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 443,
                         rarity: 8,
                         carryLimit: 99,
                         value: 15000,
                         name: "Xeno'jiiva Gem",
                         description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/1dc803b0f1703b471ae319c6f5f910bcb60ac9ed.d38bed362223a42026038d66378bfd27.png"
        }
    },
    {
         id: 994,
         type: "light-bowgun",
         rarity: 6,
         attack: {
             display: 234,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Cross Bowgun",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                995
            ],
             craftingMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 495,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Hunter King Coin",
                         description: "A silver coin given to true hunters. It shines with all the glory of the Hunter King."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 491,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Rathalos Coin",
                         description: "A coin given to those who have bested a Rathalos in the Arena."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 490,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Gama Coin",
                         description: "A coin given to those who have bested a Dodogama in the Arena."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 125,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2440,
                         name: "Novacrystal",
                         description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/ddb7ca3f2e3f7c4258a1133f1554e8bc96d67165.9a485e22761b96e89e2ccb57c0117ac3.png"
        }
    },
    {
         id: 995,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Great Bowgun",
         specialAmmo: null,
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    6,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 994,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 496,
                         rarity: 8,
                         carryLimit: 99,
                         value: 2000,
                         name: "Ace Hunter Coin",
                         description: "A golden coin given to hunters at the pinnacle of their field. Only a small handful ever know such honor."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 492,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1500,
                         name: "Brute Coin",
                         description: "A coin given to those who have bested multiple brute Wyverns at the same time in the Arena."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 493,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1500,
                         name: "Flying Coin",
                         description: "A coin given to those who have bested multiple flying Wyverns at the same time in the Arena."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/c9c0d586dcb407bb4d1167b450ad8482.8d2308c50497f9ef539bd40fddd1edcbdb9aee8c.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/ddb7ca3f2e3f7c4258a1133f1554e8bc96d67165.9a485e22761b96e89e2ccb57c0117ac3.png"
        }
    },
    {
         id: 1172,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 299,
             raw: 230
        },
         elderseal: null,
         attributes: {
             affinity: "-25"
        },
         damageType: "projectile",
         name: "Devil's Grin",
         specialAmmo: "wyvernblast",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: 1172,
             branches: [
                1172,
                1281
            ],
             craftingMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 516,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Deviljho Scale",
                         description: "Rare Deviljho material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 519,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3400,
                         name: "Deviljho Talon",
                         description: "Rare Deviljho material. Mostly obtained by carving. Compatible with dragon element."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 518,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Deviljho Tallfang",
                         description: "Rare Deviljho material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 522,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2200,
                         name: "Deviljho Saliva",
                         description: "Rare Deviljho material. Obtained by collecting rare drops. Unusual and difficult to handle."
                    }
                }
            ],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 174,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Blood",
                         description: "Contains an unknown compound. The object of much scholarly research."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 520,
                         rarity: 6,
                         carryLimit: 99,
                         value: 4000,
                         name: "Deviljho Scalp",
                         description: "Rare Deviljho material. Obtained by breaking its head. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 518,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Deviljho Tallfang",
                         description: "Rare Deviljho material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 523,
                         rarity: 7,
                         carryLimit: 99,
                         value: 9600,
                         name: "Deviljho Gem",
                         description: "A rare gem said to have formed within Deviljho tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/light-bowgun/icons/09e1ddee8a01aeb7f59ff2d2c683ee99.af759cc9ea4d4c0f5507505fe7402b94944f3a9a.png",
             image: "https://assets.mhw-db.com/weapons/light-bowgun/e68ddce778bca6ccdb1a9827faf4fbb293f8747b.99fa7d494003048f17edd13b1a994a0c.png"
        }
    },
    {
         id: 1234,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Shell",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1235,
                1236,
                1237
            ],
             craftingMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 591,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2300,
                         name: "Lunastra Scale+",
                         description: "Rare Lunastra material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 596,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5500,
                         name: "Lunastra Horn",
                         description: "Rare Lunastra material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 593,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3400,
                         name: "Lunastra Mane",
                         description: "Rare Lunastra material. Obtained by collecting rare drops. Valuable, fire resistant material."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 597,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Lunastra Gem",
                         description: "A rare gem said to have formed within Lunastra tissue. Within it lies unimaginable power."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/light-bowgun/b4061f66e603ea4f397268b2bfa6fb9ec9b15f3a.8f092301c53ad6c8953a6a9b980d177e.png"
        }
    },
    {
         id: 1235,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Empress Shell \"Blaze\"",
         specialAmmo: null,
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    6,
                    5
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    3,
                    3
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    3
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1234,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 484,
                         rarity: 7,
                         carryLimit: 99,
                         value: 0,
                         name: "Research Commission Ticket",
                         description: "A ticket issued by the commander to those who have aided the Research Commission. Show it to the Smithy!"
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 596,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5500,
                         name: "Lunastra Horn",
                         description: "Rare Lunastra material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 423,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5500,
                         name: "Teostra Horn+",
                         description: "Rare Teostra material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 404,
                         rarity: 7,
                         carryLimit: 99,
                         value: 9600,
                         name: "Bazelgeuse Gem",
                         description: "A rare gem said to have formed within Bazelgeuse tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/light-bowgun/9264959a3b54e0a1c162be51713274ed2c7a2a70.48099df573c26e674288577424780420.png"
        }
    },
    {
         id: 1236,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 260,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Shell \"Ruin\"",
         specialAmmo: null,
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1234,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 484,
                         rarity: 7,
                         carryLimit: 99,
                         value: 0,
                         name: "Research Commission Ticket",
                         description: "A ticket issued by the commander to those who have aided the Research Commission. Show it to the Smithy!"
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 594,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4500,
                         name: "Lunastra Wing",
                         description: "Rare Lunastra material. Obtained by breaking its wings. Supple, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 408,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Nergigante Horn+",
                         description: "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 411,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Nergigante Gem",
                         description: "A rare gem said to have formed within Nergigante tissue. Holds untold potential."
                    }
                }
            ]
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/light-bowgun/db60d5a211043cca3c54e29c21e90ccac8c88a86.f597ffb50fd770b91d925d8e6f16135b.png"
        }
    },
    {
         id: 1237,
         type: "light-bowgun",
         rarity: 8,
         attack: {
             display: 247,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Empress Shell \"Styx\"",
         specialAmmo: null,
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    4,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    4
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "water",
                 capacities: [
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    3
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [
            {
                 rank: 3
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1234,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 484,
                         rarity: 7,
                         carryLimit: 99,
                         value: 0,
                         name: "Research Commission Ticket",
                         description: "A ticket issued by the commander to those who have aided the Research Commission. Show it to the Smithy!"
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 595,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4900,
                         name: "Lunastra Tail",
                         description: "Rare Lunastra material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 440,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5600,
                         name: "Xeno'jiiva Horn",
                         description: "A rare Xeno'jiiva horn. During growth, it's theorized that it helps control the beast's power."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 443,
                         rarity: 8,
                         carryLimit: 99,
                         value: 15000,
                         name: "Xeno'jiiva Gem",
                         description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
                    }
                }
            ]
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/light-bowgun/4d9e2b98d22c49ecd85afe5510ebabe000dfe529.fe6fd1246d2431139336bbb88eb65037.png"
        }
    },
    {
         id: 1281,
         type: "light-bowgun",
         rarity: 7,
         attack: {
             display: 299,
             raw: 230
        },
         elderseal: null,
         attributes: {
             affinity: "-25"
        },
         damageType: "projectile",
         name: "Devil's Madness",
         specialAmmo: "wyvernblast",
         deviation: "high",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    3,
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    2
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    2,
                    1,
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    2
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1172,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 174,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Blood",
                         description: "Contains an unknown compound. The object of much scholarly research."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 520,
                         rarity: 6,
                         carryLimit: 99,
                         value: 4000,
                         name: "Deviljho Scalp",
                         description: "Rare Deviljho material. Obtained by breaking its head. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 518,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Deviljho Tallfang",
                         description: "Rare Deviljho material. Obtained by breaking its head. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 523,
                         rarity: 7,
                         carryLimit: 99,
                         value: 9600,
                         name: "Deviljho Gem",
                         description: "A rare gem said to have formed within Deviljho tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {}
    }
 ]

 module.exports = {
    lbgData,
    createLbg
 }