const { client } = require("../client");

const createHbg = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,specialAmmo,deviation,ammo,slots,elements,crafting,assets}) => {

    try {

        const {rows: [hbg]} = await client.query(`
        INSERT INTO hbg(id,type,rarity,attack,elderseal,attributes,"damageType",name,"specialAmmo",deviation,ammo,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,specialAmmo,deviation,ammo,slots,elements,crafting,assets]);
    
        return hbg;
        
      } catch (error) {
        throw error
      }

    } 

const hbgData = [
    {
         id: 996,
         type: "heavy-bowgun",
         rarity: 1,
         attack: {
             display: 150,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                997,
                1020
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/540cf5587bf0a38d6420fdb7bb9e978bb11ab91a.c84551ef724cc765a66d189f08b86974.png"
        }
    },
    {
         id: 997,
         type: "heavy-bowgun",
         rarity: 1,
         attack: {
             display: 165,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 996,
             branches: [
                998,
                1006
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/540cf5587bf0a38d6420fdb7bb9e978bb11ab91a.c84551ef724cc765a66d189f08b86974.png"
        }
    },
    {
         id: 998,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 180,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Assault 3",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 997,
             branches: [
                999
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/540cf5587bf0a38d6420fdb7bb9e978bb11ab91a.c84551ef724cc765a66d189f08b86974.png"
        }
    },
    {
         id: 999,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 998,
             branches: [
                1000
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6ea36db077cf4c86bd2e09b3c78ceae073d7274b.200377022b4648dda7f7c1433293649b.png"
        }
    },
    {
         id: 1000,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 999,
             branches: [
                1001
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6ea36db077cf4c86bd2e09b3c78ceae073d7274b.200377022b4648dda7f7c1433293649b.png"
        }
    },
    {
         id: 1001,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Assault 3",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1000,
             branches: [
                1002
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6ea36db077cf4c86bd2e09b3c78ceae073d7274b.200377022b4648dda7f7c1433293649b.png"
        }
    },
    {
         id: 1002,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Chrome Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1001,
             branches: [
                1003,
                1004
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/94bdcfa085a8589c62eea95f440db89aebef3a87.6ad32087ef5dbd0535d9531a59e342b3.png"
        }
    },
    {
         id: 1003,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Chrome Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1002,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/94bdcfa085a8589c62eea95f440db89aebef3a87.6ad32087ef5dbd0535d9531a59e342b3.png"
        }
    },
    {
         id: 1004,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Nergal Roar",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
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
                    1,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    2,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    1
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
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1002,
             branches: [
                1005
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/01b1de8c71d7aefe1fb08f027422e24c0e1729f5.77c42ee721283aa934184edd1ce76415.png"
        }
    },
    {
         id: 1005,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Destruction's Fusillade",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
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
                    1,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    2,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    1
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
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1004,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/90275b93301a426a5b68f58a5a2d03c3.9c664424798bb4994b8d563ed707cd4cf5dad292.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f668808e2dd7b92e9c26181d571291214be13ded.e019c17c08cf2dce2fddd979519ed559.png"
        }
    },
    {
         id: 1006,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 180,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 997,
             branches: [
                1007,
                1012
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/81aed6cfb17c97a63b90ae42deacd75d01caa43d.ac5cac205612d9c032609322f1dee606.png"
        }
    },
    {
         id: 1007,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1006,
             branches: [
                1008
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
                     quantity: 2,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/81aed6cfb17c97a63b90ae42deacd75d01caa43d.ac5cac205612d9c032609322f1dee606.png"
        }
    },
    {
         id: 1008,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Assault 3",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1007,
             branches: [
                1009
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
                         id: 122,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Coral Crystal - Rarity 4",
                         description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/81aed6cfb17c97a63b90ae42deacd75d01caa43d.ac5cac205612d9c032609322f1dee606.png"
        }
    },
    {
         id: 1009,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Cannon 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1008,
             branches: [
                1010
            ],
             craftingMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 707,
                         rarity: 9,
                         carryLimit: 99,
                         value: 1480,
                         name: "Jyuratodus Shard",
                         description: "Very rare Jyuratodus material. Mostly obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 672,
                         rarity: 9,
                         carryLimit: 99,
                         value: 3400,
                         name: "Flood Sac",
                         description: "A monster organ designed to hold and preserve tremendous amounts of water."
                    }
                },
                {
                     quantity: 3,
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
                         id: 251,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1540,
                         name: "Jyuratodus Carapace",
                         description: "Rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/c83cce9bdcb55bd466ecd9eaa87900df2d054155.60d1f7d57b88492e39a4482bbf24fe78.png"
        }
    },
    {
         id: 1010,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Cannon 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1009,
             branches: [
                1011
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/c83cce9bdcb55bd466ecd9eaa87900df2d054155.60d1f7d57b88492e39a4482bbf24fe78.png"
        }
    },
    {
         id: 1011,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Cannon 3",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1010,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/c83cce9bdcb55bd466ecd9eaa87900df2d054155.60d1f7d57b88492e39a4482bbf24fe78.png"
        }
    },
    {
         id: 1012,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Luminous Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1006,
             branches: [
                1013,
                1017
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 287,
                         rarity: 4,
                         carryLimit: 99,
                         value: 840,
                         name: "Tzitzi-Ya-Ku Claw",
                         description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 288,
                         rarity: 4,
                         carryLimit: 99,
                         value: 920,
                         name: "Tzitzi-Ya-Ku Photophore",
                         description: "Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 285,
                         rarity: 4,
                         carryLimit: 99,
                         value: 440,
                         name: "Tzitzi-Ya-Ku Scale",
                         description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1f67b48e0ab7fc0a82b48dba048d5b84acf242ee.ef50784f6f5c77a35486e5e79df151d7.png"
        }
    },
    {
         id: 1013,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Luminous Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1012,
             branches: [
                1014
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                         id: 287,
                         rarity: 4,
                         carryLimit: 99,
                         value: 840,
                         name: "Tzitzi-Ya-Ku Claw",
                         description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 288,
                         rarity: 4,
                         carryLimit: 99,
                         value: 920,
                         name: "Tzitzi-Ya-Ku Photophore",
                         description: "Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1f67b48e0ab7fc0a82b48dba048d5b84acf242ee.ef50784f6f5c77a35486e5e79df151d7.png"
        }
    },
    {
         id: 1014,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Arma Destroyer 1",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1013,
             branches: [
                1015
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 291,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1640,
                         name: "Tzitzi-Ya-Ku Claw+",
                         description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 292,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1680,
                         name: "Tzitzi-Ya-Ku Photophore+",
                         description: "Rare Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 289,
                         rarity: 6,
                         carryLimit: 99,
                         value: 840,
                         name: "Tzitzi-Ya-Ku Scale+",
                         description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/5ca555c8f59cf38fdd485b4ce413a9afc5d1eda9.7ea2db5a763b7f5b877961be0b22c779.png"
        }
    },
    {
         id: 1015,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Arma Destroyer 2",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1014,
             branches: [
                1016
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 4,
                     item: {
                         id: 291,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1640,
                         name: "Tzitzi-Ya-Ku Claw+",
                         description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 292,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1680,
                         name: "Tzitzi-Ya-Ku Photophore+",
                         description: "Rare Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/5ca555c8f59cf38fdd485b4ce413a9afc5d1eda9.7ea2db5a763b7f5b877961be0b22c779.png"
        }
    },
    {
         id: 1016,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Arma Destroyer 3",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1015,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                         id: 291,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1640,
                         name: "Tzitzi-Ya-Ku Claw+",
                         description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 292,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1680,
                         name: "Tzitzi-Ya-Ku Photophore+",
                         description: "Rare Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 172,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Bird Wyvern Gem",
                         description: "A valuable gem that can be harvested from bird wyverns. Said to fetch a high price on the market."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/5ca555c8f59cf38fdd485b4ce413a9afc5d1eda9.7ea2db5a763b7f5b877961be0b22c779.png"
        }
    },
    {
         id: 1017,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Shattercryst",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
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
                 type: "cluster",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
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
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: 1012,
             branches: [
                1018
            ],
             craftingMaterials: [
                {
                     quantity: 4,
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
                     quantity: 3,
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
                         id: 168,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1000,
                         name: "Frost Sac",
                         description: "A monster internal organ, filled with extremely low temperature fluid. Handle with care."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 323,
                         rarity: 5,
                         carryLimit: 99,
                         value: 3000,
                         name: "Legiana Plate",
                         description: "Legiana material. A rare find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ],
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6895d1bc4b39afc5e7a587df66d27d8fd21d072e.d6af8e0494d923b9932110dc51a38b37.png"
        }
    },
    {
         id: 1018,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Shattercryst+",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
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
                 type: "cluster",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
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
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1017,
             branches: [
                1019
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 2,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6895d1bc4b39afc5e7a587df66d27d8fd21d072e.d6af8e0494d923b9932110dc51a38b37.png"
        }
    },
    {
         id: 1019,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Legia Shattercryst",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
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
                 type: "cluster",
                 capacities: [
                    3,
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    4
                ]
            },
            {
                 type: "flaming",
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
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1018,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                         id: 328,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7200,
                         name: "Legiana Gem",
                         description: "A rare gem said to have formed within Legiana tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6895d1bc4b39afc5e7a587df66d27d8fd21d072e.d6af8e0494d923b9932110dc51a38b37.png"
        }
    },
    {
         id: 1020,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 180,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 996,
             branches: [
                1021,
                1026
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1773d3ac83a82896b158f91a46c63492cf5bc22c.d939ea9951a1b595c2126bc4abacfc04.png"
        }
    },
    {
         id: 1021,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1020,
             branches: [
                1022
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1773d3ac83a82896b158f91a46c63492cf5bc22c.d939ea9951a1b595c2126bc4abacfc04.png"
        }
    },
    {
         id: 1022,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Assault 3",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1021,
             branches: [
                1023
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1773d3ac83a82896b158f91a46c63492cf5bc22c.d939ea9951a1b595c2126bc4abacfc04.png"
        }
    },
    {
         id: 1023,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Cannon 1",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
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
             previous: 1022,
             branches: [
                1024
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/49ee33ac96f5eb75b392d317964dc05f0f532d6a.3948d96135d5d48d9c88ff1318ceeb50.png"
        }
    },
    {
         id: 1024,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Jagras Cannon 2",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
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
             previous: 1023,
             branches: [
                1238
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/49ee33ac96f5eb75b392d317964dc05f0f532d6a.3948d96135d5d48d9c88ff1318ceeb50.png"
        }
    },
    {
         id: 1026,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: "-20"
        },
         damageType: "projectile",
         name: "Blazing Assault 1",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
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
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1020,
             branches: [
                1027
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6a832b3975da5af662e5a597eb675101ccde45e9.5fb91dcfcdcf7bf292e2c4306c135068.png"
        }
    },
    {
         id: 1027,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: "-20"
        },
         damageType: "projectile",
         name: "Blazing Assault 2",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
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
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1026,
             branches: [
                1028
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6a832b3975da5af662e5a597eb675101ccde45e9.5fb91dcfcdcf7bf292e2c4306c135068.png"
        }
    },
    {
         id: 1028,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "-20"
        },
         damageType: "projectile",
         name: "Flammenkanone",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
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
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1027,
             branches: [
                1029
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/7688c7df1d60bf77cf34fff9041ec891e9940866.7d6a4f6afa42d27fc50ba4249a59eb13.png"
        }
    },
    {
         id: 1029,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "-20"
        },
         damageType: "projectile",
         name: "Gnashing Flammenkanone",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    3,
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
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
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1028,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/7688c7df1d60bf77cf34fff9041ec891e9940866.7d6a4f6afa42d27fc50ba4249a59eb13.png"
        }
    },
    {
         id: 1030,
         type: "heavy-bowgun",
         rarity: 1,
         attack: {
             display: 150,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Bone Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1031
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/255e300f5225a0ca7a2a614dbce5167a036c8233.04ef5670e7f56cbbe3088aedef02cc08.png"
        }
    },
    {
         id: 1031,
         type: "heavy-bowgun",
         rarity: 1,
         attack: {
             display: 165,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Bone Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1030,
             branches: [
                1032,
                1043,
                1056
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/255e300f5225a0ca7a2a614dbce5167a036c8233.04ef5670e7f56cbbe3088aedef02cc08.png"
        }
    },
    {
         id: 1032,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Bone Shooter 3",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1031,
             branches: [
                1033
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/255e300f5225a0ca7a2a614dbce5167a036c8233.04ef5670e7f56cbbe3088aedef02cc08.png"
        }
    },
    {
         id: 1033,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Heavy Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1032,
             branches: [
                1034,
                1038
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/4fbec730431c4c84ac97d540908938067cb2b79b.e046408dbd5abf1bfa65b82015b5dcbf.png"
        }
    },
    {
         id: 1034,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Heavy Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1033,
             branches: [
                1035
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/4fbec730431c4c84ac97d540908938067cb2b79b.e046408dbd5abf1bfa65b82015b5dcbf.png"
        }
    },
    {
         id: 1035,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Heavy Shooter 3",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1034,
             branches: [
                1036
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/4fbec730431c4c84ac97d540908938067cb2b79b.e046408dbd5abf1bfa65b82015b5dcbf.png"
        }
    },
    {
         id: 1036,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 10
        },
         damageType: "projectile",
         name: "Power Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1035,
             branches: [
                1037
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/ca16e6e002677d2f401cf04de11ea4327600611b.d2d9c4a787eeb18bbf5d80c068045125.png"
        }
    },
    {
         id: 1037,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 10
        },
         damageType: "projectile",
         name: "Power Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    2,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    4,
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
                    3,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1036,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/ca16e6e002677d2f401cf04de11ea4327600611b.d2d9c4a787eeb18bbf5d80c068045125.png"
        }
    },
    {
         id: 1038,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 10
        },
         damageType: "projectile",
         name: "Diablos Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1033,
             branches: [
                1039
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 360,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1360,
                         name: "Twisted Horn",
                         description: "Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 359,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1120,
                         name: "Diablos Fang",
                         description: "Diablos material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/128f3bf3e7dd421256eb96da49bb2ac4e6c43d48.0c5f96c776985a67466a0cb627ddddff.png"
        }
    },
    {
         id: 1039,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 10
        },
         damageType: "projectile",
         name: "Diablos Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1038,
             branches: [
                1040
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
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
                         id: 357,
                         rarity: 4,
                         carryLimit: 99,
                         value: 870,
                         name: "Diablos Ridge",
                         description: "Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 358,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1240,
                         name: "Diablos Tailcase",
                         description: "Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 361,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1480,
                         name: "Diablos Marrow",
                         description: "Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/128f3bf3e7dd421256eb96da49bb2ac4e6c43d48.0c5f96c776985a67466a0cb627ddddff.png"
        }
    },
    {
         id: 1040,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 15
        },
         damageType: "projectile",
         name: "Dual Threat",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1039,
             branches: [
                1041
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 364,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2980,
                         name: "Majestic Horn",
                         description: "Rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 6,
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
                     quantity: 5,
                     item: {
                         id: 363,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1860,
                         name: "Diablos Ridge+",
                         description: "Rare Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 365,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3040,
                         name: "Blos Medulla",
                         description: "Rare Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f046bbbb197c53cf1abaf01fbad2efa898c059f8.159254c72194ef4d632ab46457c8747c.png"
        }
    },
    {
         id: 1041,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 315,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 15
        },
         damageType: "projectile",
         name: "Nero's Blazooka",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1040,
             branches: [
                1042
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 368,
                         rarity: 6,
                         carryLimit: 99,
                         value: 5700,
                         name: "Black Spiral Horn+",
                         description: "Rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 367,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2150,
                         name: "Black Diablos Ridge+",
                         description: "Rare Black Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 366,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1450,
                         name: "Black Diablos Carapace",
                         description: "Rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6f4cdfaa4a6fabcfc831192c076f06e4cff52bcf.69108cbc12d5353dd360c0db12f397e6.png"
        }
    },
    {
         id: 1042,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 330,
             raw: 220
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 15
        },
         damageType: "projectile",
         name: "Griffon Blazooka",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1041,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
                     item: {
                         id: 368,
                         rarity: 6,
                         carryLimit: 99,
                         value: 5700,
                         name: "Black Spiral Horn+",
                         description: "Rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 366,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1450,
                         name: "Black Diablos Carapace",
                         description: "Rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes."
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/90275b93301a426a5b68f58a5a2d03c3.9c664424798bb4994b8d563ed707cd4cf5dad292.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6f4cdfaa4a6fabcfc831192c076f06e4cff52bcf.69108cbc12d5353dd360c0db12f397e6.png"
        }
    },
    {
         id: 1043,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 180,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1031,
             branches: [
                1044,
                1049
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 230,
                         rarity: 4,
                         carryLimit: 99,
                         value: 640,
                         name: "Pukei-Pukei Quill",
                         description: "Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 228,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Pukei-Pukei Scale",
                         description: "Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 158,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Poison Sac",
                         description: "A monster organ that contains a lethal toxin. Handle with extreme care."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6a6a4b2200f45833a43240c26413e167632acac8.bcd0bb1f3119e5341ce59770632c74d4.png"
        }
    },
    {
         id: 1044,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1043,
             branches: [
                1045
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                },
                {
                     quantity: 2,
                     item: {
                         id: 231,
                         rarity: 4,
                         carryLimit: 99,
                         value: 660,
                         name: "Pukei-Pukei Sac",
                         description: "Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 229,
                         rarity: 4,
                         carryLimit: 99,
                         value: 470,
                         name: "Pukei-Pukei Shell",
                         description: "Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 232,
                         rarity: 4,
                         carryLimit: 99,
                         value: 620,
                         name: "Pukei-Pukei Tail",
                         description: "Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6a6a4b2200f45833a43240c26413e167632acac8.bcd0bb1f3119e5341ce59770632c74d4.png"
        }
    },
    {
         id: 1045,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Shooter 3",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1044,
             branches: [
                1046
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
                         id: 230,
                         rarity: 4,
                         carryLimit: 99,
                         value: 640,
                         name: "Pukei-Pukei Quill",
                         description: "Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 231,
                         rarity: 4,
                         carryLimit: 99,
                         value: 660,
                         name: "Pukei-Pukei Sac",
                         description: "Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 158,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Poison Sac",
                         description: "A monster organ that contains a lethal toxin. Handle with extreme care."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/6a6a4b2200f45833a43240c26413e167632acac8.bcd0bb1f3119e5341ce59770632c74d4.png"
        }
    },
    {
         id: 1046,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura Blaster 1",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1045,
             branches: [
                1047
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 233,
                         rarity: 6,
                         carryLimit: 99,
                         value: 950,
                         name: "Pukei-Pukei Scale+",
                         description: "Rare Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 235,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1700,
                         name: "Pukei-Pukei Wing",
                         description: "Rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 159,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Toxin Sac",
                         description: "A monster organ filled with an extremely potent toxin. Just touching it is dangerous."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f622b8ed737297abf366629b740aab57a11af390.2c0128b9e135ec2c9a42da5d32b47d58.png"
        }
    },
    {
         id: 1047,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura Blaster 2",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1046,
             branches: [
                1048
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
                     quantity: 3,
                     item: {
                         id: 235,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1700,
                         name: "Pukei-Pukei Wing",
                         description: "Rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 234,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1350,
                         name: "Pukei-Pukei Carapace",
                         description: "Rare Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 159,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Toxin Sac",
                         description: "A monster organ filled with an extremely potent toxin. Just touching it is dangerous."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f622b8ed737297abf366629b740aab57a11af390.2c0128b9e135ec2c9a42da5d32b47d58.png"
        }
    },
    {
         id: 1048,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura Blaster 3",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [
            {
                 rank: 2
            },
            {
                 rank: 1
            }
        ],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1047,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 418,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4450,
                         name: "Vaal Hazak Wing",
                         description: "Rare Vaal Hazak material. Obtained by carving its torso. Light yet firm, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 236,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1750,
                         name: "Pukei-Pukei Sac+",
                         description: "Rare Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 235,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1700,
                         name: "Pukei-Pukei Wing",
                         description: "Rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 172,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Bird Wyvern Gem",
                         description: "A valuable gem that can be harvested from bird wyverns. Said to fetch a high price on the market."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f622b8ed737297abf366629b740aab57a11af390.2c0128b9e135ec2c9a42da5d32b47d58.png"
        }
    },
    {
         id: 1049,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 15
        },
         damageType: "projectile",
         name: "Spiked Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
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
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1043,
             branches: [
                1050
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 313,
                         rarity: 4,
                         carryLimit: 99,
                         value: 880,
                         name: "Wyvern Bonemass",
                         description: "Radobaan material. Obtained by collecting rare drops. Highly dense, used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 310,
                         rarity: 4,
                         carryLimit: 99,
                         value: 480,
                         name: "Radobaan Scale",
                         description: "Radobaan material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 162,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Sleep Sac",
                         description: "A monster organ that contains a knockout powder capable of inducing sleep."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/0ba81095a6e2399a7b35b5300b2bf5b2c543533e.dbc8843b06c173818d75fca576688b20.png"
        }
    },
    {
         id: 1050,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 15
        },
         damageType: "projectile",
         name: "Spiked Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
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
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1049,
             branches: [
                1051
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
                     quantity: 3,
                     item: {
                         id: 313,
                         rarity: 4,
                         carryLimit: 99,
                         value: 880,
                         name: "Wyvern Bonemass",
                         description: "Radobaan material. Obtained by collecting rare drops. Highly dense, used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 312,
                         rarity: 4,
                         carryLimit: 99,
                         value: 960,
                         name: "Radobaan Oilshell",
                         description: "Radobaan material. Obtained by carving its severed tail. Impact-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 314,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1120,
                         name: "Radobaan Marrow",
                         description: "Radobaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/0ba81095a6e2399a7b35b5300b2bf5b2c543533e.dbc8843b06c173818d75fca576688b20.png"
        }
    },
    {
         id: 1051,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Baan Roar 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
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
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: 1050,
             branches: [
                1052,
                1054
            ],
             craftingMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 316,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1580,
                         name: "Radobaan Carapace",
                         description: "Rare Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 312,
                         rarity: 4,
                         carryLimit: 99,
                         value: 960,
                         name: "Radobaan Oilshell",
                         description: "Radobaan material. Obtained by carving its severed tail. Impact-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 317,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2240,
                         name: "Radobaan Medulla",
                         description: "Rare Radobaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
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
                     quantity: 4,
                     item: {
                         id: 316,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1580,
                         name: "Radobaan Carapace",
                         description: "Rare Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 312,
                         rarity: 4,
                         carryLimit: 99,
                         value: 960,
                         name: "Radobaan Oilshell",
                         description: "Radobaan material. Obtained by carving its severed tail. Impact-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 163,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Coma Sac",
                         description: "A monster organ that contains dangerous powder. One whiff can induce a coma."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 151,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Keenbone",
                         description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/dfebd5743665d764ba46c75a0d6e00237a1224ca.cca49d12ce4b1a9485a59b3564af820e.png"
        }
    },
    {
         id: 1052,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Baan Roar 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
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
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1051,
             branches: [
                1053
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
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
                     quantity: 8,
                     item: {
                         id: 315,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1080,
                         name: "Radobaan Scale+",
                         description: "Rare Radobaan material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 163,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Coma Sac",
                         description: "A monster organ that contains dangerous powder. One whiff can induce a coma."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 317,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2240,
                         name: "Radobaan Medulla",
                         description: "Rare Radobaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/dfebd5743665d764ba46c75a0d6e00237a1224ca.cca49d12ce4b1a9485a59b3564af820e.png"
        }
    },
    {
         id: 1053,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Baan Roar 3",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    1
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
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1052,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
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
                         id: 316,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1580,
                         name: "Radobaan Carapace",
                         description: "Rare Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 163,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Coma Sac",
                         description: "A monster organ that contains dangerous powder. One whiff can induce a coma."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/dfebd5743665d764ba46c75a0d6e00237a1224ca.cca49d12ce4b1a9485a59b3564af820e.png"
        }
    },
    {
         id: 1054,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Gama Cannon 1",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
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
                    2,
                    1
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                    2
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1051,
             branches: [
                1055
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 385,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2060,
                         name: "Dodogama Talon",
                         description: "Rare Dodogama material. Obtained by breaking its forelegs. Heavy, used to craft armor."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 382,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1030,
                         name: "Dodogama Scale+",
                         description: "Rare Dodogama material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 383,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1530,
                         name: "Dodogama Hide+",
                         description: "Rare Dodogama material. Mostly obtained as a reward. Supple, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/3c4bb7c4c8c646d0a3fc01c13122e275432b28a4.321a9f13f4aa3b27a80ae7de04d6dfd7.png"
        }
    },
    {
         id: 1055,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Gama Cannon 2",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
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
                    2,
                    1
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                    2
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1054,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 424,
                         rarity: 7,
                         carryLimit: 99,
                         value: 2300,
                         name: "Fire Dragon Scale+",
                         description: "Rare Teostra material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 384,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2120,
                         name: "Dodogama Jaw",
                         description: "Rare Dodogama material. Obtained by breaking its head. Unusual and difficult to handle."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 386,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2210,
                         name: "Dodogama Tail",
                         description: "Rare Dodogama material. Obtained by carving its severed tail. Tough, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/3c4bb7c4c8c646d0a3fc01c13122e275432b28a4.321a9f13f4aa3b27a80ae7de04d6dfd7.png"
        }
    },
    {
         id: 1056,
         type: "heavy-bowgun",
         rarity: 2,
         attack: {
             display: 180,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Shooter 1",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1031,
             branches: [
                1057
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
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
                     quantity: 3,
                     item: {
                         id: 254,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Tobi-Kadachi Scale",
                         description: "Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 255,
                         rarity: 4,
                         carryLimit: 99,
                         value: 510,
                         name: "Tobi-Kadachi Pelt",
                         description: "Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5e06c28a3a591ec29a38b5446be9bfbc.3dfff989967a9250150ebc5f284c9f171c55b656.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/48749cd5c8033e1806817dc5abbc2afe847c1e51.78b89ff5ebc1878b6c55ed02a5e2ff1a.png"
        }
    },
    {
         id: 1057,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Shooter 2",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1056,
             branches: [
                1058
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
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
                     quantity: 2,
                     item: {
                         id: 170,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1000,
                         name: "Electro Sac",
                         description: "A monster organ that can store up electricity, which is released on impact."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/48749cd5c8033e1806817dc5abbc2afe847c1e51.78b89ff5ebc1878b6c55ed02a5e2ff1a.png"
        }
    },
    {
         id: 1058,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Shooter 3",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1057,
             branches: [
                1059
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
                     quantity: 2,
                     item: {
                         id: 141,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Warped Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/48749cd5c8033e1806817dc5abbc2afe847c1e51.78b89ff5ebc1878b6c55ed02a5e2ff1a.png"
        }
    },
    {
         id: 1059,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kadachi Lion 1",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1058,
             branches: [
                1060
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/83a25440a84ce664e29b797f18566bef032eac61.4167562624ff003a8e74b2bd706fc29a.png"
        }
    },
    {
         id: 1060,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kadachi Lion 2",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1059,
             branches: [
                1061
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 364,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2980,
                         name: "Majestic Horn",
                         description: "Rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
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
                         id: 261,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1650,
                         name: "Tobi-Kadachi Claw+",
                         description: "Rare Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/83a25440a84ce664e29b797f18566bef032eac61.4167562624ff003a8e74b2bd706fc29a.png"
        }
    },
    {
         id: 1061,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kadachi Lion 3",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
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
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1060,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/83a25440a84ce664e29b797f18566bef032eac61.4167562624ff003a8e74b2bd706fc29a.png"
        }
    },
    {
         id: 1062,
         type: "heavy-bowgun",
         rarity: 3,
         attack: {
             display: 150,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Cannon 1",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    0
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
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1063,
                1065,
                1068
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/0e1ee91f5cd0aaae0ebf7890be24eff0.1770ebc314483f7e845d0ca6bba9067e6cf5e88f.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1bd1499bd321883c50e0c3d4d65ab16f8d8bbaba.ea60b7e78e489f767c5d354546135613.png"
        }
    },
    {
         id: 1063,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Cannon 2",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    0
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
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1062,
             branches: [
                1064
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1bd1499bd321883c50e0c3d4d65ab16f8d8bbaba.ea60b7e78e489f767c5d354546135613.png"
        }
    },
    {
         id: 1064,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Cannon 3",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    0,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    0
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
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
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
                    3
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
             previous: 1063,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1bd1499bd321883c50e0c3d4d65ab16f8d8bbaba.ea60b7e78e489f767c5d354546135613.png"
        }
    },
    {
         id: 1065,
         type: "heavy-bowgun",
         rarity: 4,
         attack: {
             display: 195,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Quickcaster",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
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
                 type: "exhaust",
                 capacities: [
                    0,
                    6
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1062,
             branches: [
                1066
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/5d34a4f64410ce0e9ba2bc2493f09f0c.b7e8d270c56c758e282b88e4590ea60e8cc0b644.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/183ea94d1615f05a9b0f664f5461f0c79fdd028f.2683ca373dd54e34dbd633ed2a74ede2.png"
        }
    },
    {
         id: 1066,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Quickcaster+",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
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
                 type: "exhaust",
                 capacities: [
                    0,
                    6
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1065,
             branches: [
                1067
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/183ea94d1615f05a9b0f664f5461f0c79fdd028f.2683ca373dd54e34dbd633ed2a74ede2.png"
        }
    },
    {
         id: 1067,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Quickquiver",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
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
                 type: "exhaust",
                 capacities: [
                    0,
                    6
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1066,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/90275b93301a426a5b68f58a5a2d03c3.9c664424798bb4994b8d563ed707cd4cf5dad292.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/183ea94d1615f05a9b0f664f5461f0c79fdd028f.2683ca373dd54e34dbd633ed2a74ede2.png"
        }
    },
    {
         id: 1068,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 20
        },
         damageType: "projectile",
         name: "Magda Gemitus 1",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    3
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
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
                    0,
                    4
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
                 type: "exhaust",
                 capacities: [
                    7,
                    6
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1062,
             branches: [
                1069
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
                     item: {
                         id: 376,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Zorah Magdaros Heat Scale",
                         description: "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 8,
                     item: {
                         id: 377,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Zorah Magdaros Carapace",
                         description: "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 380,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3200,
                         name: "Zorah Magdaros Magma",
                         description: "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 381,
                         rarity: 7,
                         carryLimit: 99,
                         value: 6000,
                         name: "Zorah Magdaros Gem",
                         description: "A rare gem said to have formed with Zorah Magdaros tissue. Holds untold potential."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/3ca1295088247775c112eeb55d34df554ced4bec.447565ee1730ece96ac12deb22817d0d.png"
        }
    },
    {
         id: 1069,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 315,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 20
        },
         damageType: "projectile",
         name: "Magda Gemitus 2",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    3
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
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
                    0,
                    4
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
                 type: "exhaust",
                 capacities: [
                    7,
                    6
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
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
             previous: 1068,
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
                     quantity: 2,
                     item: {
                         id: 378,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1400,
                         name: "Zorah Magdaros Ridge",
                         description: "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 379,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Zorah Magdaros Pleura",
                         description: "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/3ca1295088247775c112eeb55d34df554ced4bec.447565ee1730ece96ac12deb22817d0d.png"
        }
    },
    {
         id: 1070,
         type: "heavy-bowgun",
         rarity: 5,
         attack: {
             display: 150,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Cannon 1",
         specialAmmo: "wyvernheart",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1071
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/e534262a0d19127c79ec12c5465db1b2.f4720ed89dbb4ecb0b9270dadfae2227ae636618.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/e56823ac34a84a729fe73fc33fa0065952a45658.336152f95c24c05745e0b191f9a478ac.png"
        }
    },
    {
         id: 1071,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 165,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Cannon 2",
         specialAmmo: "wyvernheart",
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1070,
             branches: [
                1072,
                1074
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/e56823ac34a84a729fe73fc33fa0065952a45658.336152f95c24c05745e0b191f9a478ac.png"
        }
    },
    {
         id: 1072,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Teostra's Artillery",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    4,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    10,
                    0,
                    0
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    2
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1071,
             branches: [
                1073
            ],
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
                     quantity: 5,
                     item: {
                         id: 420,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3400,
                         name: "Teostra Carapace",
                         description: "Rare Teostra material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 427,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3600,
                         name: "Teostra Powder",
                         description: "Rare Teostra material. Obtained by collecting rare drops. Unusual, used in select gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f2012d477b1671cd650689aaf1077fe5fe702b07.9d302afba2ae58f6b539f03132b4c7cd.png"
        }
    },
    {
         id: 1073,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Teostra's Flames",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    5,
                    4,
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    10,
                    0,
                    0
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    1
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    2
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
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1072,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 436,
                         rarity: 7,
                         carryLimit: 99,
                         value: 3000,
                         name: "Xeno'jiiva Soulscale",
                         description: "Rare Xeno'jiiva material. The burnt scale still radiates vestiges of the hereafter."
                    }
                },
                {
                     quantity: 5,
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
                     quantity: 1,
                     item: {
                         id: 428,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Teostra Gem",
                         description: "A rare gem said to have formed within Teostra tissue. Within it lies unimaginable power."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/90275b93301a426a5b68f58a5a2d03c3.9c664424798bb4994b8d563ed707cd4cf5dad292.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/f2012d477b1671cd650689aaf1077fe5fe702b07.9d302afba2ae58f6b539f03132b4c7cd.png"
        }
    },
    {
         id: 1074,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Xeno Jiiqa",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    0,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    0,
                    2
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
                    0,
                    1
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    0,
                    2
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    6,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
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
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1071,
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
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/90275b93301a426a5b68f58a5a2d03c3.9c664424798bb4994b8d563ed707cd4cf5dad292.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/1e9ec2bf292bf6084cc30217b1028eb16730b59c.db6d51961de543cfb787502f7060a54d.png"
        }
    },
    {
         id: 1174,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 315,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "-25"
        },
         damageType: "projectile",
         name: "Gluttonous Cannon",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    3
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
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
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    7,
                    6
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1175
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
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/6b9f93809d83465a0fb534f8bcff2824.73a3cc6aee936856f217898d051e8eea70c2c2e7.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/80a6780454f59890d68d98700d1014bb22747ed9.88e1ae394b0f6a3508b00241a38572a8.png"
        }
    },
    {
         id: 1175,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 345,
             raw: 230
        },
         elderseal: null,
         attributes: {
             affinity: "-25"
        },
         damageType: "projectile",
         name: "Dark Devourer",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    3
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    0,
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
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    7,
                    6
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1174,
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
         assets: {
             icon: "https://assets.mhw-db.com/weapons/heavy-bowgun/icons/4ace1941356b83e20ba412073a30d888.d24ea707674933c63ebec47d3446d79c40bc7d64.png",
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/80a6780454f59890d68d98700d1014bb22747ed9.88e1ae394b0f6a3508b00241a38572a8.png"
        }
    },
    {
         id: 1238,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Gluttonous Fangcannon",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
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
                    10,
                    6,
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
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                    3
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
             previous: 1024,
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
             icon: null,
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/967e303ec8b04521f00a3a94aace99ffa4d9862c.c2e5bf6699d9e508a7b4e277360453d6.png"
        }
    },
    {
         id: 1239,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "exhaust",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
                1240,
                1241,
                1242
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
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/84eda2d00e6ad357fd84bf36963d07190dd45f37.3ff0fea936e04dfde39c1b95329d250d.png"
        }
    },
    {
         id: 1240,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Empress Cannon \"Blaze\"",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
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
                 type: "exhaust",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1239,
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
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/10e0e7840606dc205e92d28e67af8c8cfbd6e74d.88fc8644060c0fed65a76d46ee8b5200.png"
        }
    },
    {
         id: 1241,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Cannon \"Ruin\"",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
                    3,
                    3
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
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    0
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
                 type: "wyvern",
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
                    3
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
             previous: 1239,
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
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/39fb5f778d550c53bdc96ff36b9158ab483db2a0.f88710a3cae795d6f870e669526814ed.png"
        }
    },
    {
         id: 1242,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Empress Cannon \"Styx\"",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    3,
                    2,
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
                 type: "sleep",
                 capacities: [
                    4,
                    3
                ]
            },
            {
                 type: "exhaust",
                 capacities: [
                    1,
                    6
                ]
            },
            {
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
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
                    4
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
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
             previous: 1239,
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
             image: "https://assets.mhw-db.com/weapons/heavy-bowgun/0963c04e987f85f8ef2102611def6f02a11da8dd.3ef797a8cf2bbff6ebe9ec51dc5976bc.png"
        }
    },
    {
         id: 1247,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Glutton\"",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "armor",
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
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
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
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    10,
                    6,
                    6
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1248,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Gold Blast Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    9,
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
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    4
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1249,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 240,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Crusher Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                    1,
                    3,
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1250,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Flash Gold Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
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
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    2
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1251,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Glutton Gold Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "average",
         ammo: [
            {
                 type: "demon",
                 capacities: [
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
                 type: "exhaust",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    0
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
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
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    10,
                    6,
                    6
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1252,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 25
        },
         damageType: "projectile",
         name: "Horn Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
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
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1253,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Gold Icewater Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "water",
                 capacities: [
                    7
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1254,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 30
        },
         damageType: "projectile",
         name: "Magma Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "armor",
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
                    7,
                    6
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
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
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1255,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "-10",
             defense: 20
        },
         damageType: "projectile",
         name: "Rage Gold Cannon",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1256,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: "25",
             defense: 20
        },
         damageType: "projectile",
         name: "Spark Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
                    0
                ]
            },
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
                 type: "normal",
                 capacities: [
                    10,
                    9,
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1257,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Spew Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    3,
                    0,
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
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1258,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 210,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: "20",
             defense: 20
        },
         damageType: "projectile",
         name: "Gold Support Cannon",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "armor",
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
                 type: "exhaust",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1259,
         type: "heavy-bowgun",
         rarity: 6,
         attack: {
             display: 225,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 25
        },
         damageType: "projectile",
         name: "Tar Gold Cannon",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    2
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
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "tranq",
                 capacities: [
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1260,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Crusher\"",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
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
                    1,
                    3,
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1261,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Flash\"",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    0
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
                 type: "piercing",
                 capacities: [
                    6,
                    0,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    2
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
                    3
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1264,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 320,
             raw: 213
        },
         elderseal: null,
         attributes: {
             affinity: "-10",
             defense: 25
        },
         damageType: "projectile",
         name: "Taroth Assault \"Horn\"",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
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
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1265,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 315,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "-10",
             defense: 30
        },
         damageType: "projectile",
         name: "Taroth Assault \"Magma\"",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "armor",
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
                    7,
                    6
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
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
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
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
                    3
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1266,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "-10",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Rage\"",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
            {
                 type: "demon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1267,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 255,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "25",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Spark\"",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
                    0
                ]
            },
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
                 type: "normal",
                 capacities: [
                    10,
                    9,
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1268,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Spew\"",
         specialAmmo: "wyvernheart",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    3,
                    0,
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
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    2
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    3,
                    2,
                    1
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1269,
         type: "heavy-bowgun",
         rarity: 7,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 25
        },
         damageType: "projectile",
         name: "Taroth Assault \"Tar\"",
         specialAmmo: "wyvernheart",
         deviation: "average",
         ammo: [
            {
                 type: "armor",
                 capacities: [
                    1
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    4
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    0,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    0,
                    2
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
                 type: "slicing",
                 capacities: [
                    2
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    1,
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
                 type: "tranq",
                 capacities: [
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
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1270,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Blast\"",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    0,
                    1,
                    1
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    9,
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
                 type: "piercing",
                 capacities: [
                    7,
                    5,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    6,
                    4,
                    4
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    3,
                    3,
                    2
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1271,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Icewater\"",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
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
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1272,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 270,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "20",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Support\"",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "armor",
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
                 type: "exhaust",
                 capacities: [
                    0,
                    4
                ]
            },
            {
                 type: "flaming",
                 capacities: [
                    5
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1273,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20
        },
         damageType: "projectile",
         name: "Taroth Assault \"Pierce\"",
         specialAmmo: "wyvernsnipe",
         deviation: "none",
         ammo: [
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    10,
                    0,
                    8
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
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
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    2
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1274,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 330,
             raw: 220
        },
         elderseal: null,
         attributes: {
             affinity: "10"
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Horn\"",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "demon",
                 capacities: [
                    1
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    2
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    1,
                    5,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
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
                    3,
                    2
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    0
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    2,
                    1
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1275,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "15"
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Ice\"",
         specialAmmo: "wyvernsnipe",
         deviation: "low",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    1,
                    0,
                    0
                ]
            },
            {
                 type: "dragon",
                 capacities: [
                    3
                ]
            },
            {
                 type: "freeze",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    6,
                    5,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
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
                 type: "spread",
                 capacities: [
                    6,
                    3,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    3,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1276,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 315,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 10
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Magma\"",
         specialAmmo: "wyvernheart",
         deviation: "high",
         ammo: [
            {
                 type: "armor",
                 capacities: [
                    2
                ]
            },
            {
                 type: "cluster",
                 capacities: [
                    1,
                    1,
                    1
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
                    7,
                    6
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    7,
                    6,
                    4
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
                 type: "piercing",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    7,
                    5
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    5,
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
                 type: "spread",
                 capacities: [
                    0,
                    0,
                    3
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1277,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 300,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "10"
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Rage\"",
         specialAmmo: "wyvernsnipe",
         deviation: "high",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    3,
                    0,
                    0
                ]
            },
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
                 type: "flaming",
                 capacities: [
                    7
                ]
            },
            {
                 type: "normal",
                 capacities: [
                    10,
                    9,
                    6
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    0
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    5,
                    5
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    6,
                    5
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    4,
                    0,
                    0
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1278,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "15"
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Spark\"",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "cluster",
                 capacities: [
                    0,
                    2,
                    0
                ]
            },
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
                 type: "normal",
                 capacities: [
                    10,
                    9,
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
                 type: "piercing",
                 capacities: [
                    9,
                    7,
                    5
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    4,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    4
                ]
            },
            {
                 type: "spread",
                 capacities: [
                    9,
                    0,
                    0
                ]
            },
            {
                 type: "sticky",
                 capacities: [
                    0,
                    3,
                    0
                ]
            },
            {
                 type: "thunder",
                 capacities: [
                    7
                ]
            },
            {
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
                ]
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1279,
         type: "heavy-bowgun",
         rarity: 8,
         attack: {
             display: 285,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "15"
        },
         damageType: "projectile",
         name: "Kjarr Assault \"Water\"",
         specialAmmo: "wyvernheart",
         deviation: "none",
         ammo: [
            {
                 type: "armor",
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
                 type: "dragon",
                 capacities: [
                    2
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
                 type: "normal",
                 capacities: [
                    5,
                    4,
                    3
                ]
            },
            {
                 type: "paralysis",
                 capacities: [
                    2,
                    1
                ]
            },
            {
                 type: "piercing",
                 capacities: [
                    10,
                    8,
                    6
                ]
            },
            {
                 type: "poison",
                 capacities: [
                    3,
                    0
                ]
            },
            {
                 type: "recover",
                 capacities: [
                    1,
                    1
                ]
            },
            {
                 type: "sleep",
                 capacities: [
                    2,
                    0
                ]
            },
            {
                 type: "slicing",
                 capacities: [
                    1
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
                 type: "tranq",
                 capacities: [
                    3
                ]
            },
            {
                 type: "water",
                 capacities: [
                    7
                ]
            },
            {
                 type: "wyvern",
                 capacities: [
                    1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    }
]

module.exports = {
    hbgData,
    createHbg
}