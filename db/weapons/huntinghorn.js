const { client } = require("../client");

const createHorn = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [horn]} = await client.query(`
        INSERT INTO horn(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return horn;
        
      } catch (error) {
        throw error
      }

    } 

const huntingHornData = [
    {
         id: 429,
         type: "hunting-horn",
         rarity: 1,
         attack: {
             display: 336,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Metal Bagpipe 1",
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
                430
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/087aab75553c3465f2ff3aafc6138894af4b6130.7d115bd3cbe58aecc30d071739f2fc5e.png"
        }
    },
    {
         id: 430,
         type: "hunting-horn",
         rarity: 1,
         attack: {
             display: 378,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Metal Bagpipe 2",
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
             previous: 429,
             branches: [
                431,
                444,
                454
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/087aab75553c3465f2ff3aafc6138894af4b6130.7d115bd3cbe58aecc30d071739f2fc5e.png"
        }
    },
    {
         id: 431,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Metal Bagpipe 3",
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
             previous: 430,
             branches: [
                432,
                439
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/087aab75553c3465f2ff3aafc6138894af4b6130.7d115bd3cbe58aecc30d071739f2fc5e.png"
        }
    },
    {
         id: 432,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Great Bagpipe 1",
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
             previous: 431,
             branches: [
                433
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/db64934eec91872573ae7c21b516ea739ddcbc84.11406b50ba1dac984a789106e4dd7a2c.png"
        }
    },
    {
         id: 433,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Great Bagpipe 2",
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
             previous: 432,
             branches: [
                434
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/db64934eec91872573ae7c21b516ea739ddcbc84.11406b50ba1dac984a789106e4dd7a2c.png"
        }
    },
    {
         id: 434,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Great Bagpipe 3",
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
                 rank: 1
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
             previous: 433,
             branches: [
                435
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/db64934eec91872573ae7c21b516ea739ddcbc84.11406b50ba1dac984a789106e4dd7a2c.png"
        }
    },
    {
         id: 435,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Fortissimo 1",
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
                 type: "paralysis",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 434,
             branches: [
                436,
                437
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/db64934eec91872573ae7c21b516ea739ddcbc84.11406b50ba1dac984a789106e4dd7a2c.png"
        }
    },
    {
         id: 436,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Fortissimo 2",
         durability: [
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 20,
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
                 type: "paralysis",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 435,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/db64934eec91872573ae7c21b516ea739ddcbc84.11406b50ba1dac984a789106e4dd7a2c.png"
        }
    },
    {
         id: 437,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 840,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Nergal Groove",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 435,
             branches: [
                438
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/90a08b264294d4766b9e9b8ffe62be2a668291f6.79767b3e96419d2986f87607f9981d80.png"
        }
    },
    {
         id: 438,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 882,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Desolation's Overture",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 437,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/07f6d5e013653be2edb0545f310e6cc7.c20c701997eeb8b288146caef0519825d779bda6.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/7f9cdeaaca4d7079df46c26e7a9574a3c995733a.c4b1092d54c96a1ee223ae4c91732031.png"
        }
    },
    {
         id: 439,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunder Gaida 1",
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
                 type: "thunder",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 431,
             branches: [
                440
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/c5e407c735315d05390f9960085ff6b06dd50150.41bc85cc42c2edfc5906c4335b139720.png"
        }
    },
    {
         id: 440,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunder Gaida 2",
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
         elements: [
            {
                 type: "thunder",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 439,
             branches: [
                441
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/c5e407c735315d05390f9960085ff6b06dd50150.41bc85cc42c2edfc5906c4335b139720.png"
        }
    },
    {
         id: 441,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Drum 1",
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
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 440,
             branches: [
                442
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/562edc3016fb4ab1f68b9b49366b86723e669f7e.594eeef92e1f665a1452b7d8dc8fea9e.png"
        }
    },
    {
         id: 442,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Drum 2",
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
                 type: "thunder",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 441,
             branches: [
                443
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/562edc3016fb4ab1f68b9b49366b86723e669f7e.594eeef92e1f665a1452b7d8dc8fea9e.png"
        }
    },
    {
         id: 443,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Drum 3",
         durability: [
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 20,
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 442,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/562edc3016fb4ab1f68b9b49366b86723e669f7e.594eeef92e1f665a1452b7d8dc8fea9e.png"
        }
    },
    {
         id: 444,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Duda 1",
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
             previous: 430,
             branches: [
                445,
                450
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/26bd1eda79967525867c0a7e9a5f0be31b8f3d63.be3f00cf411ba6fc7b84a19bd46738be.png"
        }
    },
    {
         id: 445,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Duda 2",
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
             previous: 444,
             branches: [
                446
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/26bd1eda79967525867c0a7e9a5f0be31b8f3d63.be3f00cf411ba6fc7b84a19bd46738be.png"
        }
    },
    {
         id: 446,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Duda 3",
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
             previous: 445,
             branches: [
                447
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/26bd1eda79967525867c0a7e9a5f0be31b8f3d63.be3f00cf411ba6fc7b84a19bd46738be.png"
        }
    },
    {
         id: 447,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Dancing Davul 1",
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
             previous: 446,
             branches: [
                448
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/0b9b33c85ab431851f8776805acdd1ea474c1bd6.d5eb96a6ed749d4f6dd4ef3893b83d55.png"
        }
    },
    {
         id: 448,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Dancing Davul 2",
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
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 447,
             branches: [
                449
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
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/0b9b33c85ab431851f8776805acdd1ea474c1bd6.d5eb96a6ed749d4f6dd4ef3893b83d55.png"
        }
    },
    {
         id: 449,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Dancing Davul 3",
         durability: [
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 20,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 448,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/0b9b33c85ab431851f8776805acdd1ea474c1bd6.d5eb96a6ed749d4f6dd4ef3893b83d55.png"
        }
    },
    {
         id: 450,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Valkyrie Chordmaker",
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
         elements: [
            {
                 type: "fire",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 444,
             branches: [
                451
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
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/5e328094a507ff475d892cac15edd08c7bc1738a.c5a864e02af4c9d0c32e1c682d0ff5cc.png"
        }
    },
    {
         id: 451,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Queen Chordmaker",
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
                 type: "fire",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 450,
             branches: [
                452
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/5e328094a507ff475d892cac15edd08c7bc1738a.c5a864e02af4c9d0c32e1c682d0ff5cc.png"
        }
    },
    {
         id: 452,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Coral Chordmaker",
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
         slots: [
            {
                 rank: 2
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
             previous: 451,
             branches: [
                453
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 4,
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
                         id: 283,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1260,
                         name: "Pink Rathian Scale+",
                         description: "Rare Pink Rathian material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 4,
                     item: {
                         id: 284,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1860,
                         name: "Pink Rathian Carapace",
                         description: "Rare Pink Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d9cc7ebcd4ab9c05b3aa62aca7439fa7123ce10c.c49689d2f627a23680125961837c3dbd.png"
        }
    },
    {
         id: 453,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Royal Chordmaker",
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
                 rank: 2
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
             previous: 452,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d9cc7ebcd4ab9c05b3aa62aca7439fa7123ce10c.c49689d2f627a23680125961837c3dbd.png"
        }
    },
    {
         id: 454,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Bagpipe 1",
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
                 type: "water",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 430,
             branches: [
                455
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/c9aec1ac776f4a88ad815ac10025f0dbef130d0e.0c9c9cdce7ea22aabb680fd6a60113fd.png"
        }
    },
    {
         id: 455,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Bagpipe 2",
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
         elements: [
            {
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 454,
             branches: [
                456,
                460
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/c9aec1ac776f4a88ad815ac10025f0dbef130d0e.0c9c9cdce7ea22aabb680fd6a60113fd.png"
        }
    },
    {
         id: 456,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Bagpipe 3",
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
         elements: [
            {
                 type: "water",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 455,
             branches: [
                457
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/c9aec1ac776f4a88ad815ac10025f0dbef130d0e.0c9c9cdce7ea22aabb680fd6a60113fd.png"
        }
    },
    {
         id: 457,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Tamtam 1",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 20,
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 456,
             branches: [
                458
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/96c156e32372b5ad7e0734e358bda57eebba7ab5.e3a3c5104dfa7362a37fa31a5b9805c3.png"
        }
    },
    {
         id: 458,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Tamtam 2",
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
                 rank: 2
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
             craftable: false,
             previous: 457,
             branches: [
                459
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/96c156e32372b5ad7e0734e358bda57eebba7ab5.e3a3c5104dfa7362a37fa31a5b9805c3.png"
        }
    },
    {
         id: 459,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Tamtam 3",
         durability: [
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 20,
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 458,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/96c156e32372b5ad7e0734e358bda57eebba7ab5.e3a3c5104dfa7362a37fa31a5b9805c3.png"
        }
    },
    {
         id: 460,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Glacial Bagpipe 1",
         durability: [
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 80,
                 green: 120,
                 blue: 0,
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
             previous: 455,
             branches: [
                461
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/76b1aaa098a9757f87c416c9e877f6c257663912.7ebd22ad37945b3909edbdce6f4d8363.png"
        }
    },
    {
         id: 461,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Glacial Bagpipe 2",
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
                 type: "ice",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 460,
             branches: [
                462
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/76b1aaa098a9757f87c416c9e877f6c257663912.7ebd22ad37945b3909edbdce6f4d8363.png"
        }
    },
    {
         id: 462,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Sectored",
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
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 461,
             branches: [
                463
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/6b3d5754ec9e8023fd938a2841b13231f1e38e11.d804419973de11d5d37a23e80d632127.png"
        }
    },
    {
         id: 463,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Legia Sectored",
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
             previous: 462,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/6b3d5754ec9e8023fd938a2841b13231f1e38e11.d804419973de11d5d37a23e80d632127.png"
        }
    },
    {
         id: 464,
         type: "hunting-horn",
         rarity: 1,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Horn 1",
         durability: [
            {
                 red: 110,
                 orange: 60,
                 yellow: 30,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 40,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 50,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 60,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 0,
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
                465
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/a67e18a098de54a5d0e3a2d16cee4a8db0d1c11f.1c06d981fa3192044e2453269c97aa18.png"
        }
    },
    {
         id: 465,
         type: "hunting-horn",
         rarity: 1,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Horn 2",
         durability: [
            {
                 red: 90,
                 orange: 60,
                 yellow: 50,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 80,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
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
             craftable: false,
             previous: 464,
             branches: [
                466,
                479,
                492
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/a67e18a098de54a5d0e3a2d16cee4a8db0d1c11f.1c06d981fa3192044e2453269c97aa18.png"
        }
    },
    {
         id: 466,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Horn 3",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
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
             previous: 465,
             branches: [
                467,
                474
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/a67e18a098de54a5d0e3a2d16cee4a8db0d1c11f.1c06d981fa3192044e2453269c97aa18.png"
        }
    },
    {
         id: 467,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Hard Bone Horn 1",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 466,
             branches: [
                468
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d43f459fb8974f45e1b543b2329720a1325883a3.a0e6d160ea55456d0be0f6d228cf30f1.png"
        }
    },
    {
         id: 468,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Hard Bone Horn 2",
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
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 468,
             branches: [
                468
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d43f459fb8974f45e1b543b2329720a1325883a3.a0e6d160ea55456d0be0f6d228cf30f1.png"
        }
    },
    {
         id: 469,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: null,
         name: "Hard Bone Horn 3",
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
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 468,
             branches: [
                470,
                472
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d43f459fb8974f45e1b543b2329720a1325883a3.a0e6d160ea55456d0be0f6d228cf30f1.png"
        }
    },
    {
         id: 470,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Heavy Bone Horn 1",
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
                 type: "ice",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 469,
             branches: [
                471
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d43f459fb8974f45e1b543b2329720a1325883a3.a0e6d160ea55456d0be0f6d228cf30f1.png"
        }
    },
    {
         id: 471,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Heavy Bone Horn 2",
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
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 470,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/d43f459fb8974f45e1b543b2329720a1325883a3.a0e6d160ea55456d0be0f6d228cf30f1.png"
        }
    },
    {
         id: 472,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Gama Horn 1",
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
            },
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 469,
             branches: [
                473
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/2796c8b74aefdaba7f14f46c2b961792daa92f3c.5d142384ea5f6050411fd3a1d1a3068e.png"
        }
    },
    {
         id: 473,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Gama Horn 2",
         durability: [
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 20,
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
             previous: 472,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/2796c8b74aefdaba7f14f46c2b961792daa92f3c.5d142384ea5f6050411fd3a1d1a3068e.png"
        }
    },
    {
         id: 474,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blazing Horn 1",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 466,
             branches: [
                475
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f58361607f9f60c2fc2b52b504394e49a7d52c2e.34ffdedaf5d059dd3ba59ad736cc5918.png"
        }
    },
    {
         id: 475,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blazing Horn 2",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 474,
             branches: [
                476
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f58361607f9f60c2fc2b52b504394e49a7d52c2e.34ffdedaf5d059dd3ba59ad736cc5918.png"
        }
    },
    {
         id: 476,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Barone 1",
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
             previous: 475,
             branches: [
                477
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/b8eae274066fd75cddd53f648d7a4ea92f831408.f67b4be182e44c4755cebbc66cddb267.png"
        }
    },
    {
         id: 477,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Barone 2",
         durability: [
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 20,
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
             previous: 476,
             branches: [
                478
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/b8eae274066fd75cddd53f648d7a4ea92f831408.f67b4be182e44c4755cebbc66cddb267.png"
        }
    },
    {
         id: 478,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 882,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Barone 3",
         durability: [
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 60,
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
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 450,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 477,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/b8eae274066fd75cddd53f648d7a4ea92f831408.f67b4be182e44c4755cebbc66cddb267.png"
        }
    },
    {
         id: 479,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Horn 1",
         durability: [
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 50,
                 yellow: 50,
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
             craftable: false,
             previous: 465,
             branches: [
                480,
                485
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/3d7b89e96a8621625b683631321f12b486bdd5bf.f56e804bdd2ba368463259a52fac09da.png"
        }
    },
    {
         id: 480,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Horn 2",
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
                 type: "poison",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 479,
             branches: [
                481
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/3d7b89e96a8621625b683631321f12b486bdd5bf.f56e804bdd2ba368463259a52fac09da.png"
        }
    },
    {
         id: 481,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Horn 3",
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
                 type: "poison",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 480,
             branches: [
                482
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/3d7b89e96a8621625b683631321f12b486bdd5bf.f56e804bdd2ba368463259a52fac09da.png"
        }
    },
    {
         id: 482,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Datura Horn 1",
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
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "poison",
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 481,
             branches: [
                483
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f9f6b3a65d833ca19fe5f478e6a22a723b587c82.6019c0cc2e288c46a7526cc9f1ca92df.png"
        }
    },
    {
         id: 483,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Datura Horn 2",
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
                 type: "poison",
                 damage: 480,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 482,
             branches: [
                484
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f9f6b3a65d833ca19fe5f478e6a22a723b587c82.6019c0cc2e288c46a7526cc9f1ca92df.png"
        }
    },
    {
         id: 484,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Datura Horn 3",
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
                 type: "poison",
                 damage: 540,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 483,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f9f6b3a65d833ca19fe5f478e6a22a723b587c82.6019c0cc2e288c46a7526cc9f1ca92df.png"
        }
    },
    {
         id: 485,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Lumu Horn 1",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 479,
             branches: [
                486
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/0163f1ac643666addd41d1c3117e7976c664d5c8.1414252b413a34f42d933e25a867dcd7.png"
        }
    },
    {
         id: 486,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Lumu Horn 2",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 485,
             branches: [
                487
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/0163f1ac643666addd41d1c3117e7976c664d5c8.1414252b413a34f42d933e25a867dcd7.png"
        }
    },
    {
         id: 487,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Lumu Barone 1",
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
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 420,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 486,
             branches: [
                488,
                490
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/e453c07068ce1528d571ca0258771b5387461280.2585929c413243078c66eadaf233e6e4.png"
        }
    },
    {
         id: 488,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Lumu Barone 2",
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
                 rank: 2
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 480,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 487,
             branches: [
                489
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/e453c07068ce1528d571ca0258771b5387461280.2585929c413243078c66eadaf233e6e4.png"
        }
    },
    {
         id: 489,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Lumu Barone 3",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 570,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 488,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/e453c07068ce1528d571ca0258771b5387461280.2585929c413243078c66eadaf233e6e4.png"
        }
    },
    {
         id: 490,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Rookslayer Drum",
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
            },
            {
                 rank: 2
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
             previous: 487,
             branches: [
                491
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f4185d13bb9277ae4fa5250326a57ca21cd07e2d.890c9bb16c45feb7b0a8888f4a90a202.png"
        }
    },
    {
         id: 491,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 840,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bazelreid Rookslayer",
         durability: [
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 10,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 20,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 30,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 40,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 20,
                 white: 50,
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 490,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/07f6d5e013653be2edb0545f310e6cc7.c20c701997eeb8b288146caef0519825d779bda6.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f4185d13bb9277ae4fa5250326a57ca21cd07e2d.890c9bb16c45feb7b0a8888f4a90a202.png"
        }
    },
    {
         id: 492,
         type: "hunting-horn",
         rarity: 2,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Sonic Horn 1",
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
                 type: "paralysis",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 465,
             branches: [
                493,
                498
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 178,
                         rarity: 4,
                         carryLimit: 99,
                         value: 160,
                         name: "Vespoid Shell",
                         description: "Vespoid material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 180,
                         rarity: 4,
                         carryLimit: 99,
                         value: 210,
                         name: "Vespoid Wing",
                         description: "Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/59bdd0a7c0c06437a4037e23f4ebc9f2.52cbfc64034e1ec14c6af6a56be42ea1ee6f3515.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ca52fc3cd4defc018cebb8ad509561a558d29017.77bd926dcd6c161b60b52fd0762b2434.png"
        }
    },
    {
         id: 493,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Sonic Horn 2",
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
                 type: "paralysis",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 492,
             branches: [
                494
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 178,
                         rarity: 4,
                         carryLimit: 99,
                         value: 160,
                         name: "Vespoid Shell",
                         description: "Vespoid material. Obtained by carving. Used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 180,
                         rarity: 4,
                         carryLimit: 99,
                         value: 210,
                         name: "Vespoid Wing",
                         description: "Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
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
                },
                {
                     quantity: 1,
                     item: {
                         id: 160,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Paralysis Sac",
                         description: "A monster organ that contains paralyzing neurotoxins."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ca52fc3cd4defc018cebb8ad509561a558d29017.77bd926dcd6c161b60b52fd0762b2434.png"
        }
    },
    {
         id: 494,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Sonic Horn 3",
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
         elements: [
            {
                 type: "paralysis",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 493,
             branches: [
                495
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 180,
                         rarity: 4,
                         carryLimit: 99,
                         value: 210,
                         name: "Vespoid Wing",
                         description: "Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
                    }
                },
                {
                     quantity: 3,
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
                     quantity: 6,
                     item: {
                         id: 210,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Girros Fang",
                         description: "Girros material. Obtained by carving. Grants paralytic properties."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 160,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Paralysis Sac",
                         description: "A monster organ that contains paralyzing neurotoxins."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ca52fc3cd4defc018cebb8ad509561a558d29017.77bd926dcd6c161b60b52fd0762b2434.png"
        }
    },
    {
         id: 495,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Glass Royale",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 494,
             branches: [
                496
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 179,
                         rarity: 6,
                         carryLimit: 99,
                         value: 460,
                         name: "Vespoid Carapace",
                         description: "Rare Vespoid material. Obtained by carving. Used for many purposes."
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
                },
                {
                     quantity: 5,
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
                     quantity: 2,
                     item: {
                         id: 161,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Omniplegia Sac",
                         description: "A monster organ filled with potent neurotoxins. A single touch can cause paralysis."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/18cd8bd42c15d09493d085d49460263529c02b91.132e817f6c690a2f90f67ed73051c0e8.png"
        }
    },
    {
         id: 496,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 630,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Glass Royale+",
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
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 495,
             branches: [
                497
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 6,
                     item: {
                         id: 181,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Vespoid Innerwing",
                         description: "Rare Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
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
                     quantity: 5,
                     item: {
                         id: 309,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2060,
                         name: "Great Girros Fang+",
                         description: "Rare Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                    }
                },
                {
                     quantity: 2,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/18cd8bd42c15d09493d085d49460263529c02b91.132e817f6c690a2f90f67ed73051c0e8.png"
        }
    },
    {
         id: 497,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Queen Vespoid Horn",
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
                 rank: 1
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 496,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 3,
                     item: {
                         id: 181,
                         rarity: 6,
                         carryLimit: 99,
                         value: 560,
                         name: "Vespoid Innerwing",
                         description: "Rare Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 184,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Hornetaur Head",
                         description: "Hornetaur material. Obtained by carving. Unusual, used in select gear."
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/18cd8bd42c15d09493d085d49460263529c02b91.132e817f6c690a2f90f67ed73051c0e8.png"
        }
    },
    {
         id: 498,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 546,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Spiked Horn 1",
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
                 type: "sleep",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 492,
             branches: [
                499
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/5be43aed35c41aba0571df3fbb1e6b56929c8c3d.12b6366b0ca95db8f17e084c90d359e4.png"
        }
    },
    {
         id: 499,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Spiked Horn 2",
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
                 type: "sleep",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 498,
             branches: [
                500
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/5be43aed35c41aba0571df3fbb1e6b56929c8c3d.12b6366b0ca95db8f17e084c90d359e4.png"
        }
    },
    {
         id: 500,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Horn 1",
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
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 499,
             branches: [
                501
            ],
             craftingMaterials: [],
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/8f538d341ba09d0785960aa543f75817bfb53734.bc72e648a735cf2213b8bf4b27b6bec5.png"
        }
    },
    {
         id: 501,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Horn 2",
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
                 type: "sleep",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 500,
             branches: [
                502
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/8f538d341ba09d0785960aa543f75817bfb53734.bc72e648a735cf2213b8bf4b27b6bec5.png"
        }
    },
    {
         id: 502,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Horn 3",
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
                 type: "sleep",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 501,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/8f538d341ba09d0785960aa543f75817bfb53734.bc72e648a735cf2213b8bf4b27b6bec5.png"
        }
    },
    {
         id: 503,
         type: "hunting-horn",
         rarity: 3,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Auldhorn 1",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                504,
                506
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/051aa808de39cf678dfa37e6b396272a.0e4b58ffba7eba51f24ed55fce03e0486bb9c2bd.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/7c9a4ccba1efad0b02811dac3116f8f3b6bbfcab.6ba1c2e3e12aa8da9ade9c14991cc3ef.png"
        }
    },
    {
         id: 504,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Auldhorn 2",
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
         elements: [
            {
                 type: "dragon",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 503,
             branches: [
                505
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/7c9a4ccba1efad0b02811dac3116f8f3b6bbfcab.6ba1c2e3e12aa8da9ade9c14991cc3ef.png"
        }
    },
    {
         id: 505,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Auldhorn 3",
         durability: [
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 20,
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
                 type: "dragon",
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 504,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/7c9a4ccba1efad0b02811dac3116f8f3b6bbfcab.6ba1c2e3e12aa8da9ade9c14991cc3ef.png"
        }
    },
    {
         id: 506,
         type: "hunting-horn",
         rarity: 4,
         attack: {
             display: 504,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thundercry Horn",
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
         elements: [
            {
                 type: "thunder",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 503,
             branches: [
                507
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/860d9b8ceb7e4415d53a931c22ed6e7b.35b3c37b395035d7f7598a27286d034823b1a537.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ee46a0082d65102a99c3d1508a5ec1b0b6a97900.096bfaf06907d80f3a49b5778f1c68df.png"
        }
    },
    {
         id: 507,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 588,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunderbolt Horn 1",
         durability: [
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 150,
                 blue: 100,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 480,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 506,
             branches: [
                508
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ee197774cd1f3b9a59d9edadbae8d9deef3d0898.b5260b40b16f68d2ae19059b5ad2989e.png"
        }
    },
    {
         id: 508,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 672,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunderbolt Horn 2",
         durability: [
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 140,
                 blue: 110,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 540,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 507,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/ee197774cd1f3b9a59d9edadbae8d9deef3d0898.b5260b40b16f68d2ae19059b5ad2989e.png"
        }
    },
    {
         id: 509,
         type: "hunting-horn",
         rarity: 5,
         attack: {
             display: 420,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Blacksteel Dragonhorn 1",
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
                510
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/ed4ec571ac9ab93349c3e38dd5237f3e.2a19ad051c81a19ee2c577434a0b56be2b2cb35f.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f4db086d74cef4e330200bed844bb8d33b4eb701.ab2ea0109aec8cf3e1039049189ed6c2.png"
        }
    },
    {
         id: 510,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 462,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Blacksteel Dragonhorn 2",
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
             previous: 509,
             branches: [
                511,
                513
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/f4db086d74cef4e330200bed844bb8d33b4eb701.ab2ea0109aec8cf3e1039049189ed6c2.png"
        }
    },
    {
         id: 511,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 756,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Teostra's Tiple",
         durability: [
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 20,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 510,
             branches: [
                512
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/8c2957b8d4608c665f9bb2613fa91ddc95d94c5e.057d3341ecc7d5f001fcfa02c83a07ee.png"
        }
    },
    {
         id: 512,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Teostra's Orph??e",
         durability: [
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 20,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 30,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 511,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/07f6d5e013653be2edb0545f310e6cc7.c20c701997eeb8b288146caef0519825d779bda6.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/8c2957b8d4608c665f9bb2613fa91ddc95d94c5e.057d3341ecc7d5f001fcfa02c83a07ee.png"
        }
    },
    {
         id: 513,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 714,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Xeno Manasheena",
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
             previous: 510,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/07f6d5e013653be2edb0545f310e6cc7.c20c701997eeb8b288146caef0519825d779bda6.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/a7ddb7d22adc625479d5919d7694b5fc6b1c6269.5c2192ea2a856c1d661e52c266b6e05e.png"
        }
    },
    {
         id: 1160,
         type: "hunting-horn",
         rarity: 6,
         attack: {
             display: 840,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Devil's Maestro",
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
                 type: "dragon",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1161
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/2b4aed8cffca901f271848b219285ae0.4767e666ca90ac689dc56b7ea49c1104b9684843.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/a5f0ee5c7bc329c2507ed3946270596dbe33f026.f20845e3733cbc0e2b4dd5ee9452f28d.png"
        }
    },
    {
         id: 1161,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 924,
             raw: 220
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Deep Vero",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1160,
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
             icon: "https://assets.mhw-db.com/weapons/hunting-horn/icons/77e2d18d3bb42c833ffaaa72240b1778.1e495a6dd75aeb04e56ab8c398c05fa338ed2d9d.png",
             image: "https://assets.mhw-db.com/weapons/hunting-horn/822200f6c97d0442d16992c6ddfaf6d1b382ffb9.5ca022724828663fc2810c15a22b64df.png"
        }
    },
    {
         id: 1204,
         type: "hunting-horn",
         rarity: 7,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Empress Roar",
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
                1205,
                1206,
                1207
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
             image: "https://assets.mhw-db.com/weapons/hunting-horn/31b9cb67bace33389d7a20add5c7ba58fc8b3919.ec627ba581be585eccdafee8d889a41d.png"
        }
    },
    {
         id: 1205,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Empress Roar \"Blaze\"",
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
             previous: 1204,
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
             image: "https://assets.mhw-db.com/weapons/hunting-horn/31b9cb67bace33389d7a20add5c7ba58fc8b3919.ec627ba581be585eccdafee8d889a41d.png"
        }
    },
    {
         id: 1206,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 840,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Empress Roar \"Ruin\"",
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
                 type: "blast",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1204,
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
             image: "https://assets.mhw-db.com/weapons/hunting-horn/336bc14bf1671cc3b64237abf6f224e344037bd7.ed260b5f99d44905330e1b6b83101755.png"
        }
    },
    {
         id: 1207,
         type: "hunting-horn",
         rarity: 8,
         attack: {
             display: 798,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Empress Roar \"Styx\"",
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
                 rank: 1
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
             previous: 1204,
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
             image: "https://assets.mhw-db.com/weapons/hunting-horn/6f749ffa0c79e8d56d754879c2e6fa54efa9b1cf.9954834f1c41ac650b0e5f346d356b97.png"
        }
    }
 ]

 module.exports = {
     huntingHornData,
     createHorn
 }