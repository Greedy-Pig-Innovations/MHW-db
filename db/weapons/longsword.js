const { client } = require("../client");

const createLs = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [ls]} = await client.query(`
        INSERT INTO ls(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return ls;
        
      } catch (error) {
        throw error
      }

    } 

const longSwordData = [
    {
         id: 89,
         type: "long-sword",
         rarity: 1,
         attack: {
             display: 264,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Katana 1",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                90
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 90,
         type: "long-sword",
         rarity: 1,
         attack: {
             display: 297,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Katana 2",
         durability: [
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 89,
             branches: [
                91,
                104
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 91,
         type: "long-sword",
         rarity: 2,
         attack: {
             display: 330,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Katana 3",
         durability: [
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 90,
             branches: [
                92,
                99
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 92,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Grace 1",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 91,
             branches: [
                93
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 93,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Grace 2",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 92,
             branches: [
                94
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 94,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Grace 3",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 93,
             branches: [
                95
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/4a822efc0e9ea81d2ac5c050517b58bf35454532.76ab70f67fc39362c22cfe98f511acf0.png"
        }
    },
    {
         id: 95,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Gospel 1",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 100,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 94,
             branches: [
                96,
                97
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/680a8780ccded480fe32fac9953814111db92618.d5eccc9f6b960778f95a9863d88bdbfd.png"
        }
    },
    {
         id: 96,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Gospel 2",
         durability: [
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 20,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 30,
                 purple: 0
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
         elements: [
            {
                 type: "water",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 95,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/680a8780ccded480fe32fac9953814111db92618.d5eccc9f6b960778f95a9863d88bdbfd.png"
        }
    },
    {
         id: 97,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Reaver",
         durability: [
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 95,
             branches: [
                98
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/729be63705a1c5250c2b076ddf156996e563f26b.7f859640d35772924b297e16fa33eb51.png"
        }
    },
    {
         id: 98,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 693,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Extermination's Edge",
         durability: [
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 97,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/43b42975c4291e76d66865c3133f96744b9749b2.2f372e0e1bc1219437a64a4254a16e27.png"
        }
    },
    {
         id: 99,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flickering Glow 1",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 91,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/5a93d4b37c755d541dfa5e3ae97bbb2505823f68.9aed705a9f77fd1eff4126c648291f72.png"
        }
    },
    {
         id: 100,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: null,
         name: "Flickering Glow 2",
         durability: [
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 99,
             branches: [
                101
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
                         id: 154,
                         rarity: 4,
                         carryLimit: 99,
                         value: 200,
                         name: "Sharp Claw",
                         description: "Obtained from small fanged wyverns. Unlike wyvern claws, this is shaped to grip objects."
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/5a93d4b37c755d541dfa5e3ae97bbb2505823f68.9aed705a9f77fd1eff4126c648291f72.png"
        }
    },
    {
         id: 101,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dazzling Flash 1",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 100,
             branches: [
                102
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/e0bcd20978ca0927c5a64045eedde6f842a8ccf9.1d0e192edd36d0dde7881c500c79a21b.png"
        }
    },
    {
         id: 102,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dazzling Flash 2",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 101,
             branches: [
                103
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/e0bcd20978ca0927c5a64045eedde6f842a8ccf9.1d0e192edd36d0dde7881c500c79a21b.png"
        }
    },
    {
         id: 103,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dazzling Flash 3",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 30,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 40,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 102,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/e0bcd20978ca0927c5a64045eedde6f842a8ccf9.1d0e192edd36d0dde7881c500c79a21b.png"
        }
    },
    {
         id: 104,
         type: "long-sword",
         rarity: 2,
         attack: {
             display: 330,
             raw: 100
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "First Dance 1",
         durability: [
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 90,
             branches: [
                105,
                112
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 223,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Kulu-Ya-Ku Beak",
                         description: "Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 221,
                         rarity: 4,
                         carryLimit: 99,
                         value: 390,
                         name: "Kulu-Ya-Ku Hide",
                         description: "Kulu-Ya-Ku material. Mostly obtained by carving. Supple, often used in gear."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 220,
                         rarity: 4,
                         carryLimit: 99,
                         value: 290,
                         name: "Kulu-Ya-Ku Scale",
                         description: "Kulu-Ya-Ku material. Mostly obtained as a reward. Broadly used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/f2aabd55f66d92c8736f933984ec029bfd73a38f.a7d88038b6a8b03f9da995dd53843a11.png"
        }
    },
    {
         id: 105,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "First Dance 2",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 104,
             branches: [
                106
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                         id: 223,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Kulu-Ya-Ku Beak",
                         description: "Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 222,
                         rarity: 4,
                         carryLimit: 99,
                         value: 460,
                         name: "Kulu-Ya-Ku Plume",
                         description: "Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/f2aabd55f66d92c8736f933984ec029bfd73a38f.a7d88038b6a8b03f9da995dd53843a11.png"
        }
    },
    {
         id: 106,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "First Dance 3",
         durability: [
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 105,
             branches: [
                107
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
                     quantity: 2,
                     item: {
                         id: 223,
                         rarity: 4,
                         carryLimit: 99,
                         value: 490,
                         name: "Kulu-Ya-Ku Beak",
                         description: "Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 222,
                         rarity: 4,
                         carryLimit: 99,
                         value: 460,
                         name: "Kulu-Ya-Ku Plume",
                         description: "Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/f2aabd55f66d92c8736f933984ec029bfd73a38f.a7d88038b6a8b03f9da995dd53843a11.png"
        }
    },
    {
         id: 107,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Last Dance 1",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 106,
             branches: [
                108,
                110
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 227,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1660,
                         name: "Kulu-Ya-Ku Beak+",
                         description: "Rare Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 225,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1290,
                         name: "Kulu-Ya-Ku Hide+",
                         description: "Rare Kulu-Ya-Ku material. Mostly obtained as a reward. Supple, often used in gear."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 224,
                         rarity: 6,
                         carryLimit: 99,
                         value: 890,
                         name: "Kulu-Ya-Ku Scale+",
                         description: "Rare Kulu-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/110eceea44fa16b38d259343a96fa14795955432.bc669c5293a26f864ea27e3bca5a10cc.png"
        }
    },
    {
         id: 108,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Last Dance 2",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 90,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 107,
             branches: [
                109
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 4,
                     item: {
                         id: 227,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1660,
                         name: "Kulu-Ya-Ku Beak+",
                         description: "Rare Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 226,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1660,
                         name: "Kulu-Ya-Ku Plume+",
                         description: "Rare Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 142,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1200,
                         name: "Brutal Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Elder's Recess. Its size evokes a certain primal quality."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/110eceea44fa16b38d259343a96fa14795955432.bc669c5293a26f864ea27e3bca5a10cc.png"
        }
    },
    {
         id: 109,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Last Dance 3",
         durability: [
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 80,
                 white: 20,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 108,
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
                     quantity: 5,
                     item: {
                         id: 227,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1660,
                         name: "Kulu-Ya-Ku Beak+",
                         description: "Rare Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 226,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1660,
                         name: "Kulu-Ya-Ku Plume+",
                         description: "Rare Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/110eceea44fa16b38d259343a96fa14795955432.bc669c5293a26f864ea27e3bca5a10cc.png"
        }
    },
    {
         id: 110,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Brazenridge 1",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 107,
             branches: [
                111
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 393,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2980,
                         name: "Uragaan Jaw",
                         description: "Rare Uragaan material. Obtained from breaking its jaw. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 391,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1460,
                         name: "Uragaan Scale+",
                         description: "Rare Uragaan material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 392,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2160,
                         name: "Uragaan Carapace",
                         description: "Rare Uragaan material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 395,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3100,
                         name: "Uragaan Marrow",
                         description: "Rare Uragaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/9706a176b1b8dd071ef33376d1c885ccdf545c19.0da7f897eddee1a6a118fbcae6135679.png"
        }
    },
    {
         id: 111,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 660,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Brazenridge 2",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 110,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 120,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 130,
                 white: 0,
                 purple: 0
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
         elements: [
            {
                 type: "fire",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 110,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
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
                     quantity: 2,
                     item: {
                         id: 393,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2980,
                         name: "Uragaan Jaw",
                         description: "Rare Uragaan material. Obtained from breaking its jaw. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 394,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2880,
                         name: "Uragaan Scute",
                         description: "Rare Uragaan material. Obtained by carving its severed tail. Highly heat-resistant, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 396,
                         rarity: 7,
                         carryLimit: 99,
                         value: 8400,
                         name: "Uragaan Ruby",
                         description: "A rare gem said to have formed within Uragaan tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/9706a176b1b8dd071ef33376d1c885ccdf545c19.0da7f897eddee1a6a118fbcae6135679.png"
        }
    },
    {
         id: 112,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Wyvern Blade \"Leaf\"",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "poison",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 104,
             branches: [
                113,
                115
            ],
             craftingMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 275,
                         rarity: 4,
                         carryLimit: 99,
                         value: 660,
                         name: "Rathian Shell",
                         description: "Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
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
                },
                {
                     quantity: 4,
                     item: {
                         id: 158,
                         rarity: 4,
                         carryLimit: 99,
                         value: 600,
                         name: "Poison Sac",
                         description: "A monster organ that contains a lethal toxin. Handle with extreme care."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 278,
                         rarity: 5,
                         carryLimit: 99,
                         value: 2400,
                         name: "Rathian Plate",
                         description: "Rathian material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 277,
                         rarity: 4,
                         carryLimit: 99,
                         value: 980,
                         name: "Rathian Spike",
                         description: "Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 274,
                         rarity: 4,
                         carryLimit: 99,
                         value: 460,
                         name: "Rathian Scale",
                         description: "Rathian material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 275,
                         rarity: 4,
                         carryLimit: 99,
                         value: 660,
                         name: "Rathian Shell",
                         description: "Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2bb0e71967ba6b8af77c7790749e2189e41e4e7c.9166254296309e322222024782d676f1.png"
        }
    },
    {
         id: 113,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Wyvern Blade \"Verde\"",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "poison",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 112,
             branches: [
                114
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 281,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2240,
                         name: "Rathian Spike+",
                         description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
                    }
                },
                {
                     quantity: 5,
                     item: {
                         id: 279,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1060,
                         name: "Rathian Scale+",
                         description: "Rare Rathian material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 280,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1560,
                         name: "Rathian Carapace",
                         description: "Rare Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 278,
                         rarity: 5,
                         carryLimit: 99,
                         value: 2400,
                         name: "Rathian Plate",
                         description: "Rathian material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2bb0e71967ba6b8af77c7790749e2189e41e4e7c.9166254296309e322222024782d676f1.png"
        }
    },
    {
         id: 114,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Wyvern Blade \"Holly\"",
         durability: [
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 70,
                 white: 20,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 70,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "poison",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 113,
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
                         id: 281,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2240,
                         name: "Rathian Spike+",
                         description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 283,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1260,
                         name: "Pink Rathian Scale+",
                         description: "Rare Pink Rathian material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 282,
                         rarity: 7,
                         carryLimit: 99,
                         value: 6000,
                         name: "Rathian Ruby",
                         description: "A rare gem said to have formed within Rathian tissue. Used to dramatically improve gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2bb0e71967ba6b8af77c7790749e2189e41e4e7c.9166254296309e322222024782d676f1.png"
        }
    },
    {
         id: 115,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 396,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Wyvern Blade \"Fall\"",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 112,
             branches: [
                116
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 344,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1090,
                         name: "Rath Wingtalon",
                         description: "Material from Rathian and Rathalos. Obtained by breaking its wings. Sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 341,
                         rarity: 4,
                         carryLimit: 99,
                         value: 840,
                         name: "Rathalos Shell",
                         description: "Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2297ed185804f7970a3d848f18f9d25e3fe5f57b.417d65c1855c3d06b54fbd13ccec334a.png"
        }
    },
    {
         id: 116,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Wyvern Blade \"Blood\"",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 115,
             branches: [
                117
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
                         id: 346,
                         rarity: 5,
                         carryLimit: 99,
                         value: 3000,
                         name: "Rathalos Plate",
                         description: "Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2297ed185804f7970a3d848f18f9d25e3fe5f57b.417d65c1855c3d06b54fbd13ccec334a.png"
        }
    },
    {
         id: 117,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Wyvern Blade \"Azure\"",
         durability: [
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 20,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 116,
             branches: [
                118
            ],
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/00358d31877e76c241d648fcb12751100a820464.5e38c010c58b5d717aef00d4a7024f27.png"
        }
    },
    {
         id: 118,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Wyvern Blade \"Indigo\"",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 30,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 40,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 117,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 8,
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
                     quantity: 3,
                     item: {
                         id: 354,
                         rarity: 6,
                         carryLimit: 99,
                         value: 3000,
                         name: "Azure Rathalos Tail",
                         description: "Rare Azure Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/00358d31877e76c241d648fcb12751100a820464.5e38c010c58b5d717aef00d4a7024f27.png"
        }
    },
    {
         id: 119,
         type: "long-sword",
         rarity: 1,
         attack: {
             display: 297,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Shotel 1",
         durability: [
            {
                 red: 100,
                 orange: 60,
                 yellow: 40,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 50,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                120
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/ed0c17e359bf8b4f9d3741f707aee38c656fc820.d3428436271ccfc558028f819f2af697.png"
        }
    },
    {
         id: 120,
         type: "long-sword",
         rarity: 1,
         attack: {
             display: 330,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Shotel 2",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 119,
             branches: [
                121,
                134,
                142
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/ed0c17e359bf8b4f9d3741f707aee38c656fc820.d3428436271ccfc558028f819f2af697.png"
        }
    },
    {
         id: 121,
         type: "long-sword",
         rarity: 2,
         attack: {
             display: 396,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Shotel 3",
         durability: [
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 60,
                 yellow: 60,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 120,
             branches: [
                122,
                129
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/ed0c17e359bf8b4f9d3741f707aee38c656fc820.d3428436271ccfc558028f819f2af697.png"
        }
    },
    {
         id: 122,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Shotel 1",
         durability: [
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 121,
             branches: [
                123
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/ed0c17e359bf8b4f9d3741f707aee38c656fc820.d3428436271ccfc558028f819f2af697.png"
        }
    },
    {
         id: 123,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Shotel 2",
         durability: [
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 122,
             branches: [
                124
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/ed0c17e359bf8b4f9d3741f707aee38c656fc820.d3428436271ccfc558028f819f2af697.png"
        }
    },
    {
         id: 124,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Shotel 3",
         durability: [
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "sleep",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 123,
             branches: [
                125,
                127
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/9416a4462a60ebd9d59f3661a485b05b03ea958a.3e8cd03e983e2a7507eda7fe5a8245f1.png"
        }
    },
    {
         id: 125,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Bone Reaper 1",
         durability: [
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "sleep",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 125,
             branches: [
                125
            ],
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/78bfc498332f679767b30e9df012cf42be9deb72.e1affb3a0e9a45d68e6cfad8d5be24b9.png"
        }
    },
    {
         id: 126,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 10
        },
         damageType: null,
         name: "Bone Reaper 2",
         durability: [
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "sleep",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 125,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                },
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/78bfc498332f679767b30e9df012cf42be9deb72.e1affb3a0e9a45d68e6cfad8d5be24b9.png"
        }
    },
    {
         id: 127,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rookslayer Long Sword",
         durability: [
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 124,
             branches: [
                128
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/fd3e686c19ca7ae4ca4251fd51f9815258bf6ce7.0a797ff8b7afcba6fff24494ee535307.png"
        }
    },
    {
         id: 128,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 660,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bazel Varga Rookslayer",
         durability: [
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 10,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 20,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 30,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 50,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 127,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/fd3e686c19ca7ae4ca4251fd51f9815258bf6ce7.0a797ff8b7afcba6fff24494ee535307.png"
        }
    },
    {
         id: 129,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Shotel 1",
         durability: [
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 121,
             branches: [
                130
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2728c23cffbe9d8d516f524c656002a44aecbaec.8ae1883ed7eb598604eed1cf86a735c4.png"
        }
    },
    {
         id: 130,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Shotel 2",
         durability: [
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 129,
             branches: [
                131
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/2728c23cffbe9d8d516f524c656002a44aecbaec.8ae1883ed7eb598604eed1cf86a735c4.png"
        }
    },
    {
         id: 131,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Scimitar 1",
         durability: [
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 130,
             branches: [
                132
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/b85febc3e18c134d45a09916f8fe5bad9aff422a.46cd18b072c8b4c9693dc75cdb1cb322.png"
        }
    },
    {
         id: 132,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 660,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Scimitar 2",
         durability: [
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 131,
             branches: [
                133
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/b85febc3e18c134d45a09916f8fe5bad9aff422a.46cd18b072c8b4c9693dc75cdb1cb322.png"
        }
    },
    {
         id: 133,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 693,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Scimitar 3",
         durability: [
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 132,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/b85febc3e18c134d45a09916f8fe5bad9aff422a.46cd18b072c8b4c9693dc75cdb1cb322.png"
        }
    },
    {
         id: 134,
         type: "long-sword",
         rarity: 2,
         attack: {
             display: 396,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Shotel 1",
         durability: [
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 120,
             branches: [
                135
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/2a69a72d94c1066d3b4134cff64342c9.55c2bc0c2d8dd49efeddbbf289cbb32c6e58d532.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/fb029d89cc73c483cc01f2a23579e582599be6c9.91832afb414a39b8cf3c9c958817ce75.png"
        }
    },
    {
         id: 135,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Shotel 2",
         durability: [
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "water",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 134,
             branches: [
                136
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/fb029d89cc73c483cc01f2a23579e582599be6c9.91832afb414a39b8cf3c9c958817ce75.png"
        }
    },
    {
         id: 136,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Shotel 3",
         durability: [
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "water",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 135,
             branches: [
                137
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/fb029d89cc73c483cc01f2a23579e582599be6c9.91832afb414a39b8cf3c9c958817ce75.png"
        }
    },
    {
         id: 137,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dipterus 1",
         durability: [
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 136,
             branches: [
                138
            ],
             craftingMaterials: [
                {
                     quantity: 3,
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
                         id: 251,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1540,
                         name: "Jyuratodus Carapace",
                         description: "Rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
                    }
                },
                {
                     quantity: 6,
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
                     quantity: 6,
                     item: {
                         id: 119,
                         rarity: 6,
                         carryLimit: 99,
                         value: 680,
                         name: "Carbalite Ore",
                         description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
                    }
                }
            ],
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/512c5c736e65c66d74a16cef2a724e40612bc1c2.ecf4430caaa916e362e2c77ad7679962.png"
        }
    },
    {
         id: 138,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dipterus 2",
         durability: [
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 137,
             branches: [
                139,
                140
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/512c5c736e65c66d74a16cef2a724e40612bc1c2.ecf4430caaa916e362e2c77ad7679962.png"
        }
    },
    {
         id: 139,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dipterus 3",
         durability: [
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 10,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 20,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 138,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/512c5c736e65c66d74a16cef2a724e40612bc1c2.ecf4430caaa916e362e2c77ad7679962.png"
        }
    },
    {
         id: 140,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak Grosser 1",
         durability: [
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 138,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/01caaef22e5546026d787cb5cb71a1fbc2341b54.bb6d26d65db4214d283e871a54773f0a.png"
        }
    },
    {
         id: 141,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 660,
             raw: 200
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak Grosser 2",
         durability: [
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 30,
                 purple: 0
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 40,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 140,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
                     item: {
                         id: 438,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4300,
                         name: "Xeno'jiiva Veil",
                         description: "A rare Xeno'jiiva organ that stores energy that can be released in a violent torrent."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/01caaef22e5546026d787cb5cb71a1fbc2341b54.bb6d26d65db4214d283e871a54773f0a.png"
        }
    },
    {
         id: 142,
         type: "long-sword",
         rarity: 2,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Shotel 1",
         durability: [
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 120,
             branches: [
                143,
                152
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/840a1ed90bd7c67f946698f2eb21f211172f395f.affb2ed3aefdf60ab0c9a5ca25edda08.png"
        }
    },
    {
         id: 143,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 396,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Shotel 2",
         durability: [
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 142,
             branches: [
                144,
                148
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/840a1ed90bd7c67f946698f2eb21f211172f395f.affb2ed3aefdf60ab0c9a5ca25edda08.png"
        }
    },
    {
         id: 144,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Shotel 3",
         durability: [
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 143,
             branches: [
                145
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/840a1ed90bd7c67f946698f2eb21f211172f395f.affb2ed3aefdf60ab0c9a5ca25edda08.png"
        }
    },
    {
         id: 145,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kadachi Fang 1",
         durability: [
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 144,
             branches: [
                146
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7b59cdfd30822500d9d266adcb5c91790bd9ed78.02b89f9d58129ea2ef15226447d088bb.png"
        }
    },
    {
         id: 146,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kadachi Fang 2",
         durability: [
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 145,
             branches: [
                147
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7b59cdfd30822500d9d266adcb5c91790bd9ed78.02b89f9d58129ea2ef15226447d088bb.png"
        }
    },
    {
         id: 147,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kadachi Fang 3",
         durability: [
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 146,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7b59cdfd30822500d9d266adcb5c91790bd9ed78.02b89f9d58129ea2ef15226447d088bb.png"
        }
    },
    {
         id: 148,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Shotel 1",
         durability: [
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 143,
             branches: [
                149
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/674b81b6867a754a2f07860bb3562c19c064d0f9.494c8e35ff1deab85072642eec25e8de.png"
        }
    },
    {
         id: 149,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Shotel 2",
         durability: [
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 148,
             branches: [
                150
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
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
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/674b81b6867a754a2f07860bb3562c19c064d0f9.494c8e35ff1deab85072642eec25e8de.png"
        }
    },
    {
         id: 150,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Stealer",
         durability: [
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 90,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 149,
             branches: [
                151
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7eaf5642ddaae8ea33fa46189b5cd83b2c134859.609c3ee8c71ab9563111d313f833bde4.png"
        }
    },
    {
         id: 151,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Legia Stealer",
         durability: [
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 20,
                 purple: 0
            },
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 30,
                 purple: 0
            },
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 240,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 70,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 150,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7eaf5642ddaae8ea33fa46189b5cd83b2c134859.609c3ee8c71ab9563111d313f833bde4.png"
        }
    },
    {
         id: 152,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 396,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Shotel 1",
         durability: [
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 30,
                 green: 120,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 142,
             branches: [
                153
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 182,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Hornetaur Shell",
                         description: "Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 183,
                         rarity: 4,
                         carryLimit: 99,
                         value: 310,
                         name: "Hornetaur Wing",
                         description: "Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 156,
                         rarity: 4,
                         carryLimit: 99,
                         value: 200,
                         name: "Monster Fluid",
                         description: "Material obtained from small insects. Mixes with insect gastric fluids to form adhesive."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/8a3d01a4229921333427c3041f4bed9b7860b369.78335f723528340e15a0be0166f0949f.png"
        }
    },
    {
         id: 153,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 429,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Shotel 2",
         durability: [
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 120,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 30,
                 green: 130,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 152,
             branches: [
                154
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                },
                {
                     quantity: 5,
                     item: {
                         id: 182,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Hornetaur Shell",
                         description: "Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 183,
                         rarity: 4,
                         carryLimit: 99,
                         value: 310,
                         name: "Hornetaur Wing",
                         description: "Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 184,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Hornetaur Head",
                         description: "Hornetaur material. Obtained by carving. Unusual, used in select gear."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/8a3d01a4229921333427c3041f4bed9b7860b369.78335f723528340e15a0be0166f0949f.png"
        }
    },
    {
         id: 154,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 462,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Scimitar 1",
         durability: [
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 153,
             branches: [
                155
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 185,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Hornetaur Carapace",
                         description: "Rare Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 186,
                         rarity: 6,
                         carryLimit: 99,
                         value: 660,
                         name: "Hornetaur Innerwing",
                         description: "Rare Hornetaur material. Obtained by carving. Light and sharp, used in many weapons."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 157,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Broth",
                         description: "Material from high rank insects. A rich broth made from only the thickest of monster juices."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/c1ca7901686f49cce7b7979538a7c165025f9a27.26e1f7801944c24727b7b7894acf0b78.png"
        }
    },
    {
         id: 155,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Scimitar 2",
         durability: [
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 100,
                 yellow: 40,
                 green: 40,
                 blue: 90,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 154,
             branches: [
                156
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 5,
                     item: {
                         id: 185,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Hornetaur Carapace",
                         description: "Rare Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 186,
                         rarity: 6,
                         carryLimit: 99,
                         value: 660,
                         name: "Hornetaur Innerwing",
                         description: "Rare Hornetaur material. Obtained by carving. Light and sharp, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/c1ca7901686f49cce7b7979538a7c165025f9a27.26e1f7801944c24727b7b7894acf0b78.png"
        }
    },
    {
         id: 156,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Scimitar 3",
         durability: [
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 155,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 8,
                     item: {
                         id: 185,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Hornetaur Carapace",
                         description: "Rare Hornetaur material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 186,
                         rarity: 6,
                         carryLimit: 99,
                         value: 660,
                         name: "Hornetaur Innerwing",
                         description: "Rare Hornetaur material. Obtained by carving. Light and sharp, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/c1ca7901686f49cce7b7979538a7c165025f9a27.26e1f7801944c24727b7b7894acf0b78.png"
        }
    },
    {
         id: 157,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 330,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Stabber 1",
         durability: [
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                158,
                160
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7e30fcf2fd9ca39ba20263741e4fee23e4676fb1.f0582cd1c7de28cb5b104232b6092d12.png"
        }
    },
    {
         id: 158,
         type: "long-sword",
         rarity: 4,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Stabber 2",
         durability: [
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 157,
             branches: [
                159
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/769cedbf9887fddb91b9516fceb03eee.ade64d9a2a2b1d4f937bc92762d33bd3446eef8b.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7e30fcf2fd9ca39ba20263741e4fee23e4676fb1.f0582cd1c7de28cb5b104232b6092d12.png"
        }
    },
    {
         id: 159,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Stabber 3",
         durability: [
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 158,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/7e30fcf2fd9ca39ba20263741e4fee23e4676fb1.f0582cd1c7de28cb5b104232b6092d12.png"
        }
    },
    {
         id: 160,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 528,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Facultas 1",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 157,
             branches: [
                161
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/eb00bd37969156a68f62004dfffa7577fea4345f.ce809d3b7083dd91b0fd2e99be70f016.png"
        }
    },
    {
         id: 161,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 726,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Facultas 2",
         durability: [
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 90,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 90,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 30,
                 yellow: 40,
                 green: 90,
                 blue: 30,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 160,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/eb00bd37969156a68f62004dfffa7577fea4345f.ce809d3b7083dd91b0fd2e99be70f016.png"
        }
    },
    {
         id: 162,
         type: "long-sword",
         rarity: 5,
         attack: {
             display: 330,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Long Sword 1",
         durability: [
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 150,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                163
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ba45f618f96bb56a5f73dcee3087cb33.125fd76aa0bdd8b553285b853a3c20b61f51e9a0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/45edf21b50e2d8f549736b449b1e9c8e8fbb17bc.ceeab215b7508be5969a5f8cf12de848.png"
        }
    },
    {
         id: 163,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Long Sword 2",
         durability: [
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 162,
             branches: [
                164,
                166
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/45edf21b50e2d8f549736b449b1e9c8e8fbb17bc.ceeab215b7508be5969a5f8cf12de848.png"
        }
    },
    {
         id: 164,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Imperial Saber",
         durability: [
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 20,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 163,
             branches: [
                165
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/6ca2fc926aca6988a021484f48f471fcb00bbcfe.e287f890b516e3d8a1e29b5d142d9d3a.png"
        }
    },
    {
         id: 165,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Imperial Shimmer",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 30,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 40,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 164,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/6ca2fc926aca6988a021484f48f471fcb00bbcfe.e287f890b516e3d8a1e29b5d142d9d3a.png"
        }
    },
    {
         id: 166,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Xeno Cypher",
         durability: [
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 10,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 20,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
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
         elements: [
            {
                 type: "dragon",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 163,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/10bf70f6be90c9628eeae27763194638a793a8fc.49e4fdeaf4f87685e1265edfc257c098.png"
        }
    },
    {
         id: 167,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 561,
             raw: 170
        },
         elderseal: "high",
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Supremacy Blade",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                168
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
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/0309c7bcda339c3d33ed032d28603b75a10e4e43.b3b409b3ac6c81ed01ad2b6075fa7315.png"
        }
    },
    {
         id: 168,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 693,
             raw: 210
        },
         elderseal: "high",
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Divine Slasher",
         durability: [
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 167,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/df5eb0be03ed469c6f750e3126939331.600ff99cb0f97a2b545cce0e8fffa5ab39210fa0.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/0309c7bcda339c3d33ed032d28603b75a10e4e43.b3b409b3ac6c81ed01ad2b6075fa7315.png"
        }
    },
    {
         id: 169,
         type: "long-sword",
         rarity: 3,
         attack: {
             display: 363,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Azure Star Blade",
         durability: [
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 10,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 20,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 30,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 30,
                 white: 50,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "water",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1191
            ],
             craftingMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 452,
                         rarity: 4,
                         carryLimit: 99,
                         value: 200,
                         name: "Azure Star Shard",
                         description: "Special material given to those who complete USJ's challenge. Glows a beautiful, transparent blue."
                    }
                },
                {
                     quantity: 4,
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
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/ed4c84f5203abeec71d9143b70fb7ca6.898887fead77597847d2937f2927c82f1d2e1829.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/9706a176b1b8dd071ef33376d1c885ccdf545c19.0da7f897eddee1a6a118fbcae6135679.png"
        }
    },
    {
         id: 1152,
         type: "long-sword",
         rarity: 6,
         attack: {
             display: 693,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Reaver \"Cruelty\"",
         durability: [
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 10,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 20,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 40,
                 white: 50,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1153
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/28d66eee2bc4ea9a702e0b85c4ff0037.90d0e986d4b65df48732d32f950fe828b27afcb1.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/56a18de1cb13a53d8aab822a66544de26c38077f.8bd2fc49b7531f9bcfc3a7d106289db8.png"
        }
    },
    {
         id: 1153,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 759,
             raw: 230
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Reaver \"Calamity\"",
         durability: [
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 80,
                 yellow: 20,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1152,
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
             icon: "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
             image: "https://assets.mhw-db.com/weapons/long-sword/56a18de1cb13a53d8aab822a66544de26c38077f.8bd2fc49b7531f9bcfc3a7d106289db8.png"
        }
    },
    {
         id: 1187,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Sword",
         durability: [
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1188,
                1189,
                1190
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
             image: "https://assets.mhw-db.com/weapons/long-sword/6470b0b1a7fd799d9fa0fc5aad70e786b79f6d2b.acf58326327f2dc4b199970f55a75474.png"
        }
    },
    {
         id: 1188,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Sword \"Blaze\"",
         durability: [
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1187,
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
             image: "https://assets.mhw-db.com/weapons/long-sword/9706a176b1b8dd071ef33376d1c885ccdf545c19.0da7f897eddee1a6a118fbcae6135679.png"
        }
    },
    {
         id: 1189,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 627,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Sword \"Ruin\"",
         durability: [
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1187,
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
             image: "https://assets.mhw-db.com/weapons/long-sword/7f11b88268e5c6cdfc461847eb37c1461478fd9d.75f2942028831c684bd57d9fe91d2c0d.png"
        }
    },
    {
         id: 1190,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 594,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Sword \"Styx\"",
         durability: [
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
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
         elements: [
            {
                 type: "blast",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1187,
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
             image: "https://assets.mhw-db.com/weapons/long-sword/6e314f0dc91589d514a1a780a70d515fee1b798b.7b96c7485b36ad4f81d375c677667815.png"
        }
    },
    {
         id: 1191,
         type: "long-sword",
         rarity: 7,
         attack: {
             display: 495,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "sever",
         name: "Azure Star \"Dragon Dance\"",
         durability: [
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 20,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 30,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 169,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 579,
                         rarity: 6,
                         carryLimit: 99,
                         value: 400,
                         name: "Azure Stargem",
                         description: "Special material for those who overcome the USJ challenge. Shines a miraculous blue."
                    }
                },
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
                     quantity: 1,
                     item: {
                         id: 351,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7200,
                         name: "Rathalos Ruby",
                         description: "A rare gem said to have formed within Rathalos tissue. Almost too nice to use."
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
             image: "https://assets.mhw-db.com/weapons/long-sword/9706a176b1b8dd071ef33376d1c885ccdf545c19.0da7f897eddee1a6a118fbcae6135679.png"
        }
    },
    {
         id: 1282,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 660,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Sword \"Fire\"",
         durability: [
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 90,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 450,
                 hidden: true
            }
        ],
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
         id: 1283,
         type: "long-sword",
         rarity: 8,
         attack: {
             display: 677,
             raw: 205
        },
         elderseal: "average",
         attributes: {
             affinity: "15",
             elderseal: "average",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Sword \"Decay\"",
         durability: [
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
                 white: 30,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
                 white: 40,
                 purple: 0
            }
        ],
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 330,
                 hidden: false
            }
        ],
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
     longSwordData,
     createLs
 }