const { client } = require("../client");

const createHammer = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [hammer]} = await client.query(`
        INSERT INTO hammer(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return hammer;
        
      } catch (error) {
        throw error
      }

    } 

const hammerData = [
    {
         id: 345,
         type: "hammer",
         rarity: 1,
         attack: {
             display: 416,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Hammer 1",
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
                346
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/9000b742520db017226980a23cc84d4cfb71caf1.2135b3d9635682576de633b0e798dcee.png"
        }
    },
    {
         id: 346,
         type: "hammer",
         rarity: 1,
         attack: {
             display: 468,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Hammer 2",
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
             previous: 345,
             branches: [
                347,
                358,
                369
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/9000b742520db017226980a23cc84d4cfb71caf1.2135b3d9635682576de633b0e798dcee.png"
        }
    },
    {
         id: 347,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 520,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Hammer 3",
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
             previous: 346,
             branches: [
                348
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/9000b742520db017226980a23cc84d4cfb71caf1.2135b3d9635682576de633b0e798dcee.png"
        }
    },
    {
         id: 348,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 572,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Demon 1",
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
             previous: 347,
             branches: [
                349,
                355
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/cf62a6fb086282d0c6b6f420c4c68b9bbe5a6b2e.7b20f4f12bfbc820690aed60cb385735.png"
        }
    },
    {
         id: 349,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Demon 2",
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
             previous: 348,
             branches: [
                350
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/cf62a6fb086282d0c6b6f420c4c68b9bbe5a6b2e.7b20f4f12bfbc820690aed60cb385735.png"
        }
    },
    {
         id: 350,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Demon 3",
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
                 type: "blast",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 349,
             branches: [
                351
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/cf62a6fb086282d0c6b6f420c4c68b9bbe5a6b2e.7b20f4f12bfbc820690aed60cb385735.png"
        }
    },
    {
         id: 351,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Archdemon 1",
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
                 type: "blast",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 350,
             branches: [
                352,
                353
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/cf62a6fb086282d0c6b6f420c4c68b9bbe5a6b2e.7b20f4f12bfbc820690aed60cb385735.png"
        }
    },
    {
         id: 352,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Iron Archdemon 2",
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
                 type: "blast",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 351,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/cf62a6fb086282d0c6b6f420c4c68b9bbe5a6b2e.7b20f4f12bfbc820690aed60cb385735.png"
        }
    },
    {
         id: 353,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 1040,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Nergal Crusher",
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
             previous: 351,
             branches: [
                354
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/064921e8da4f0fe15032e56e48985f3b48aa52cf.730ec3c434194f236bd6ee9a9f885865.png"
        }
    },
    {
         id: 354,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 1092,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Obliteration's Footfall",
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
             previous: 353,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/b00b884623c55e6e812d7b68978504983988f39e.e7a7ea85b69e270fdaa5f030983cdb0b.png"
        }
    },
    {
         id: 355,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Frozen Core",
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 348,
             branches: [
                356
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 4,
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
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/b04ffa381903cdc7f9a046373481ff12d294a763.7e7ffe39eeb9e838e0b009ea62d87bac.png"
        }
    },
    {
         id: 356,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Frozen Core+",
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
                 type: "ice",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 355,
             branches: [
                357
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 4,
                     item: {
                         id: 169,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2400,
                         name: "Freezer Sac",
                         description: "A monster organ with tremendous freezing power. Turns its surroundings to ice."
                    }
                },
                {
                     quantity: 4,
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
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/b04ffa381903cdc7f9a046373481ff12d294a763.7e7ffe39eeb9e838e0b009ea62d87bac.png"
        }
    },
    {
         id: 357,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Cocytus",
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
                 damage: 450,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 356,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 4,
                     item: {
                         id: 169,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2400,
                         name: "Freezer Sac",
                         description: "A monster organ with tremendous freezing power. Turns its surroundings to ice."
                    }
                },
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
                     quantity: 6,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/b04ffa381903cdc7f9a046373481ff12d294a763.7e7ffe39eeb9e838e0b009ea62d87bac.png"
        }
    },
    {
         id: 358,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 572,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Hammer 1",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 346,
             branches: [
                359,
                364
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/48b9c0f6960ee43b484e006824a39b75d82e5ffa.a0197dd02cf44d084fbd39c5ccba6e04.png"
        }
    },
    {
         id: 359,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Hammer 2",
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
                 type: "water",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 358,
             branches: [
                360
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/48b9c0f6960ee43b484e006824a39b75d82e5ffa.a0197dd02cf44d084fbd39c5ccba6e04.png"
        }
    },
    {
         id: 360,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Aqua Hammer 3",
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
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 359,
             branches: [
                361
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/48b9c0f6960ee43b484e006824a39b75d82e5ffa.a0197dd02cf44d084fbd39c5ccba6e04.png"
        }
    },
    {
         id: 361,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Basher 1",
         durability: [
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 360,
             branches: [
                362
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e42d39ae87cfbfa7dc7fa71f2d312f82a2c5888c.32cc48e3870e3653affe87645ccf9753.png"
        }
    },
    {
         id: 362,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Basher 2",
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
                 type: "water",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 361,
             branches: [
                363
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e42d39ae87cfbfa7dc7fa71f2d312f82a2c5888c.32cc48e3870e3653affe87645ccf9753.png"
        }
    },
    {
         id: 363,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Water Basher 3",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 362,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e42d39ae87cfbfa7dc7fa71f2d312f82a2c5888c.32cc48e3870e3653affe87645ccf9753.png"
        }
    },
    {
         id: 364,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Girros Hammer 1",
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
                 type: "paralysis",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 358,
             branches: [
                365
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 304,
                         rarity: 4,
                         carryLimit: 99,
                         value: 750,
                         name: "Great Girros Fang",
                         description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 301,
                         rarity: 4,
                         carryLimit: 99,
                         value: 450,
                         name: "Great Girros Scale",
                         description: "Great Girros material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 210,
                         rarity: 4,
                         carryLimit: 99,
                         value: 260,
                         name: "Girros Fang",
                         description: "Girros material. Obtained by carving. Grants paralytic properties."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/a51c7b89b008e7bf669c1303a88b91e27c5d68cf.7e3f3b8a3570d7fb98eec69894e3f34e.png"
        }
    },
    {
         id: 365,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Girros Hammer 2",
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
                 type: "paralysis",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 364,
             branches: [
                366
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
                     item: {
                         id: 304,
                         rarity: 4,
                         carryLimit: 99,
                         value: 750,
                         name: "Great Girros Fang",
                         description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 303,
                         rarity: 4,
                         carryLimit: 99,
                         value: 950,
                         name: "Great Girros Hood",
                         description: "Great Girros material. Obtained by breaking its head. Unusual and difficult to handle."
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/a51c7b89b008e7bf669c1303a88b91e27c5d68cf.7e3f3b8a3570d7fb98eec69894e3f34e.png"
        }
    },
    {
         id: 366,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Malady's Fist 1",
         durability: [
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 120,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 130,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 140,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 150,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 80,
                 green: 150,
                 blue: 10,
                 white: 0,
                 purple: 0
            }
        ],
         slots: [],
         elements: [
            {
                 type: "paralysis",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 365,
             branches: [
                367
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 5,
                     item: {
                         id: 306,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1060,
                         name: "Great Girros Scale+",
                         description: "Rare Great Girros material. Mostly obtained by carving. Broadly used for many purposes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 305,
                         rarity: 4,
                         carryLimit: 99,
                         value: 850,
                         name: "Great Girros Tail",
                         description: "Great Girros material. Obtained by carving its severed tail. Stiff, used to craft gear."
                    }
                },
                {
                     quantity: 6,
                     item: {
                         id: 211,
                         rarity: 6,
                         carryLimit: 99,
                         value: 460,
                         name: "Girros Scale+",
                         description: "Rare Girros material. Obtained by carving. Used for many purposes."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/5ae87ef905f3ae3202ec4f24e88a78c385ced8c6.28ef6b03946347a6fe9b123709b5b612.png"
        }
    },
    {
         id: 367,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Malady's Fist 2",
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
         slots: [],
         elements: [
            {
                 type: "paralysis",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 366,
             branches: [
                368
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                },
                {
                     quantity: 4,
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
                         id: 308,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2180,
                         name: "Great Girros Hood+",
                         description: "Rare Great Girros material. Obtained by breaking its head. Unusual, used in select gear."
                    }
                },
                {
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/5ae87ef905f3ae3202ec4f24e88a78c385ced8c6.28ef6b03946347a6fe9b123709b5b612.png"
        }
    },
    {
         id: 368,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Malady's Fist 3",
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
                 type: "paralysis",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 367,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 3,
                     item: {
                         id: 308,
                         rarity: 6,
                         carryLimit: 99,
                         value: 2180,
                         name: "Great Girros Hood+",
                         description: "Rare Great Girros material. Obtained by breaking its head. Unusual, used in select gear."
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/5ae87ef905f3ae3202ec4f24e88a78c385ced8c6.28ef6b03946347a6fe9b123709b5b612.png"
        }
    },
    {
         id: 369,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 520,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Hammer 1",
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
         elements: [
            {
                 type: "poison",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 346,
             branches: [
                370,
                374
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/78941a2f352ffe24a7070ec8367fef4629eb7779.79aa4aef4d088317aa7d6fea16b713b8.png"
        }
    },
    {
         id: 370,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Hammer 2",
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
                 type: "poison",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 369,
             branches: [
                371
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/78941a2f352ffe24a7070ec8367fef4629eb7779.79aa4aef4d088317aa7d6fea16b713b8.png"
        }
    },
    {
         id: 371,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blooming Hammer 3",
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
                 type: "poison",
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 370,
             branches: [
                372
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/78941a2f352ffe24a7070ec8367fef4629eb7779.79aa4aef4d088317aa7d6fea16b713b8.png"
        }
    },
    {
         id: 372,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Buon Fiore",
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
             craftable: true,
             previous: 371,
             branches: [
                373
            ],
             craftingMaterials: [
                {
                     quantity: 4,
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
                     quantity: 3,
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
                     quantity: 8,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/db8257c710739cd31ed0d2df512a73556eabf888.65d2e0eca65b0a33da13fb67b98b7c36.png"
        }
    },
    {
         id: 373,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Buona Flora",
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
                 rank: 2
            },
            {
                 rank: 2
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
             previous: 372,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f8c4bd051549700fd87c22ee2f7ab80e8f5ca8f8.1364bbefda9ccc957abc3f209cfd6bf6.png"
        }
    },
    {
         id: 374,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunder Hammer 1",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 369,
             branches: [
                375
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/dff1abd5b97110a7f81f3595426cf13007a4377d.4687578f843254304c5fd7aaa8663838.png"
        }
    },
    {
         id: 375,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Thunder Hammer 2",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 374,
             branches: [
                376
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/dff1abd5b97110a7f81f3595426cf13007a4377d.4687578f843254304c5fd7aaa8663838.png"
        }
    },
    {
         id: 376,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Bash 1",
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
                 type: "thunder",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 375,
             branches: [
                377
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f87d280824f0996532ddf4f5505cb273def643b9.0220ebcc72626345fe71043d1d64cccf.png"
        }
    },
    {
         id: 377,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Bash 2",
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
                 type: "thunder",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 376,
             branches: [
                378
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f87d280824f0996532ddf4f5505cb273def643b9.0220ebcc72626345fe71043d1d64cccf.png"
        }
    },
    {
         id: 378,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Lightning Bash 3",
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
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 377,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f87d280824f0996532ddf4f5505cb273def643b9.0220ebcc72626345fe71043d1d64cccf.png"
        }
    },
    {
         id: 379,
         type: "hammer",
         rarity: 1,
         attack: {
             display: 520,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Bludgeon 1",
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
                380
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f9c7863ad27adfca3ecba703e4748b61e0bc8320.1038c7c331120bcaa75695f5b5f79c58.png"
        }
    },
    {
         id: 380,
         type: "hammer",
         rarity: 1,
         attack: {
             display: 572,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Bludgeon 2",
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
             previous: 379,
             branches: [
                381,
                396,
                406
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f9c7863ad27adfca3ecba703e4748b61e0bc8320.1038c7c331120bcaa75695f5b5f79c58.png"
        }
    },
    {
         id: 381,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Bone Bludgeon 3",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 50,
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
             previous: 380,
             branches: [
                382,
                389
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f9c7863ad27adfca3ecba703e4748b61e0bc8320.1038c7c331120bcaa75695f5b5f79c58.png"
        }
    },
    {
         id: 382,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Fossil Bludgeon 1",
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
             previous: 381,
             branches: [
                383
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/875d57237aa641063ee352c51ae13918f9b3c21f.da9b012a3533943465e9ea263849caac.png"
        }
    },
    {
         id: 383,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Fossil Bludgeon 2",
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
             previous: 382,
             branches: [
                384
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/875d57237aa641063ee352c51ae13918f9b3c21f.da9b012a3533943465e9ea263849caac.png"
        }
    },
    {
         id: 384,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Fossil Bludgeon 3",
         durability: [
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 40,
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
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 383,
             branches: [
                385
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/875d57237aa641063ee352c51ae13918f9b3c21f.da9b012a3533943465e9ea263849caac.png"
        }
    },
    {
         id: 385,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Grandrock 1",
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
                 type: "thunder",
                 damage: 390,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 384,
             branches: [
                386,
                387
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/2d04566ebd56ad3aeba31c3abd3c6aeee516e739.11eeddf47b6a99e7b6503065d91ba38d.png"
        }
    },
    {
         id: 386,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Grandrock 2",
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
                 type: "thunder",
                 damage: 420,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 385,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/2d04566ebd56ad3aeba31c3abd3c6aeee516e739.11eeddf47b6a99e7b6503065d91ba38d.png"
        }
    },
    {
         id: 387,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "blunt",
         name: "Hazak Vlafos",
         durability: [
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 140,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
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
                 type: "dragon",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 385,
             branches: [
                388
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/043f658b586393d4e96f96dae7f17c1dbc4a7ea1.6b61957cfbbaa0525f7ffb1c752385eb.png"
        }
    },
    {
         id: 388,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 1040,
             raw: 200
        },
         elderseal: "average",
         attributes: {},
         damageType: "blunt",
         name: "Pandemonium's Root",
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
             previous: 387,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e040cc9ae835c5c37353a8a90d411c7be3ac7d59.de6025533e8c888e3bd1b44135f93470.png"
        }
    },
    {
         id: 389,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Bone Spike 1",
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
                 type: "sleep",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 381,
             branches: [
                390
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
                         id: 163,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Coma Sac",
                         description: "A monster organ that contains dangerous powder. One whiff can induce a coma."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/8b4b8a6e5e2c842c9cfe86f26bcff6b1107ffaba.e3c3e67414637016337c06faaa57306b.png"
        }
    },
    {
         id: 390,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Bone Spike 2",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 389,
             branches: [
                391
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/8b4b8a6e5e2c842c9cfe86f26bcff6b1107ffaba.e3c3e67414637016337c06faaa57306b.png"
        }
    },
    {
         id: 391,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Strike 1",
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
             craftable: true,
             previous: 390,
             branches: [
                392,
                394
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/16202425f05a85f22ffc272ca3520344ba162451.4e974a89172ef00df0ce7257bfc0455b.png"
        }
    },
    {
         id: 392,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Strike 2",
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
             previous: 391,
             branches: [
                393
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/16202425f05a85f22ffc272ca3520344ba162451.4e974a89172ef00df0ce7257bfc0455b.png"
        }
    },
    {
         id: 393,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Baan Strike 3",
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
             previous: 392,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/16202425f05a85f22ffc272ca3520344ba162451.4e974a89172ef00df0ce7257bfc0455b.png"
        }
    },
    {
         id: 394,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Brazenbreak 1",
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
                 rank: 3
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
             previous: 391,
             branches: [
                395
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/34e008dae74944b27088eef6475d548348e39558.b8d130d78ee1a6a464eeeea69d169f9f.png"
        }
    },
    {
         id: 395,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 1092,
             raw: 210
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Brazenbreak 2",
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
         slots: [
            {
                 rank: 3
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
             previous: 394,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/34e008dae74944b27088eef6475d548348e39558.b8d130d78ee1a6a464eeeea69d169f9f.png"
        }
    },
    {
         id: 396,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 624,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Beak 1",
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
             previous: 380,
             branches: [
                397
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/378f08834b017c9c7b6e449d066f03f30e2224ab.521426fab54ac072fa1f02b99c9b00bb.png"
        }
    },
    {
         id: 397,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Beak 2",
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
             previous: 396,
             branches: [
                398,
                402
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/378f08834b017c9c7b6e449d066f03f30e2224ab.521426fab54ac072fa1f02b99c9b00bb.png"
        }
    },
    {
         id: 398,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Kulu Beak 3",
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
             previous: 397,
             branches: [
                399
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/378f08834b017c9c7b6e449d066f03f30e2224ab.521426fab54ac072fa1f02b99c9b00bb.png"
        }
    },
    {
         id: 399,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Crushing Beak 1",
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
                 type: "sleep",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 398,
             branches: [
                400
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/11f8001daf3fbb30a6649185532b73a723a86152.4bd1388dca09be46a6f91926ad334995.png"
        }
    },
    {
         id: 400,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Crushing Beak 2",
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
                 type: "sleep",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 399,
             branches: [
                401
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/11f8001daf3fbb30a6649185532b73a723a86152.4bd1388dca09be46a6f91926ad334995.png"
        }
    },
    {
         id: 401,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "blunt",
         name: "Crushing Beak 3",
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
             previous: 400,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/11f8001daf3fbb30a6649185532b73a723a86152.4bd1388dca09be46a6f91926ad334995.png"
        }
    },
    {
         id: 402,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Diablos Sledge 1",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 397,
             branches: [
                403
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/a377e990acf018c5281d651392573e4babda225e.a98969e4d0a67657b4a59bf3f373368f.png"
        }
    },
    {
         id: 403,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Diablos Sledge 2",
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
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 402,
             branches: [
                404
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/a377e990acf018c5281d651392573e4babda225e.a98969e4d0a67657b4a59bf3f373368f.png"
        }
    },
    {
         id: 404,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 1092,
             raw: 210
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Diablos Shatterer 1",
         durability: [
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 70,
                 yellow: 30,
                 green: 100,
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
                 type: "ice",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 403,
             branches: [
                405
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/3d89ebe1f7bcbd2cc4e492fcf669744237f963e2.cbf414e8e504f5fc98dbaf0826ef3a58.png"
        }
    },
    {
         id: 405,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 1196,
             raw: 230
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Diablos Shatterer 2",
         durability: [
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
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
                 type: "ice",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 404,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/3d89ebe1f7bcbd2cc4e492fcf669744237f963e2.cbf414e8e504f5fc98dbaf0826ef3a58.png"
        }
    },
    {
         id: 406,
         type: "hammer",
         rarity: 2,
         attack: {
             display: 676,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Carapace Sledge 1",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 380,
             branches: [
                407,
                412
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/b083d259f0d006f65d99a763306b03d2.5c02c5ecd634959b7210ee96df4599c2622ddf55.png",
             image: "https://assets.mhw-db.com/weapons/hammer/d61d5ee6a00aa3ca6beed987e2d7035e8a7b3dff.381a1845bbfd1e127230b53145622461.png"
        }
    },
    {
         id: 407,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 728,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Carapace Sledge 2",
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
             previous: 406,
             branches: [
                408
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/d61d5ee6a00aa3ca6beed987e2d7035e8a7b3dff.381a1845bbfd1e127230b53145622461.png"
        }
    },
    {
         id: 408,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Carapace Sledge 3",
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
             previous: 407,
             branches: [
                409
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/d61d5ee6a00aa3ca6beed987e2d7035e8a7b3dff.381a1845bbfd1e127230b53145622461.png"
        }
    },
    {
         id: 409,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Barroth Breaker 1",
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
         slots: [
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
             previous: 408,
             branches: [
                410
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f0f405606f1f3e2cbf04154dea6993dd2372b771.50de6412e2df5e302ec06612699435f5.png"
        }
    },
    {
         id: 410,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Barroth Breaker 2",
         durability: [
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 40,
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
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 409,
             branches: [
                411
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f0f405606f1f3e2cbf04154dea6993dd2372b771.50de6412e2df5e302ec06612699435f5.png"
        }
    },
    {
         id: 411,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 1040,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Barroth Breaker 3",
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
                 type: "paralysis",
                 damage: 390,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 410,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/f0f405606f1f3e2cbf04154dea6993dd2372b771.50de6412e2df5e302ec06612699435f5.png"
        }
    },
    {
         id: 412,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 780,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blazing Hammer 1",
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
             previous: 406,
             branches: [
                413
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e2da848d5cdf680547aefa641ac801bbf3ed4ad2.f4548d3a72b588e2045368b29fcb613f.png"
        }
    },
    {
         id: 413,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Blazing Hammer 2",
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
                 type: "fire",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 412,
             branches: [
                414
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/e2da848d5cdf680547aefa641ac801bbf3ed4ad2.f4548d3a72b588e2045368b29fcb613f.png"
        }
    },
    {
         id: 414,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Striker 1",
         durability: [
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 60,
                 yellow: 80,
                 green: 80,
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
             previous: 413,
             branches: [
                415
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/6127570f43a91047c42790604373006250dece18.0fd29e7fede2796a784d2961ebbce25a.png"
        }
    },
    {
         id: 415,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Striker 2",
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
                 type: "fire",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 414,
             branches: [
                416
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/6127570f43a91047c42790604373006250dece18.0fd29e7fede2796a784d2961ebbce25a.png"
        }
    },
    {
         id: 416,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 1092,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Anja Striker 3",
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
             previous: 415,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/6127570f43a91047c42790604373006250dece18.0fd29e7fede2796a784d2961ebbce25a.png"
        }
    },
    {
         id: 417,
         type: "hammer",
         rarity: 3,
         attack: {
             display: 520,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Basher 1",
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
                418,
                420
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5eba390e4a1d886e04b3ea5b52306870.ed15b372992850a97e80ad4ee8b336c746a4209b.png",
             image: "https://assets.mhw-db.com/weapons/hammer/ee590e87f948704b8c7966a459f2e2e6d93e49a6.39d4fa1ba917a2ce86e5b08e81b3e246.png"
        }
    },
    {
         id: 418,
         type: "hammer",
         rarity: 4,
         attack: {
             display: 572,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Basher 2",
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
             previous: 417,
             branches: [
                419
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/51d2640827c3b9e6d2932eb98b5c7ff0.626d743b3dc5c3808157f986a39107b6d9a6cad4.png",
             image: "https://assets.mhw-db.com/weapons/hammer/ee590e87f948704b8c7966a459f2e2e6d93e49a6.39d4fa1ba917a2ce86e5b08e81b3e246.png"
        }
    },
    {
         id: 419,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Dragonbone Basher 3",
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
             previous: 418,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/ee590e87f948704b8c7966a459f2e2e6d93e49a6.39d4fa1ba917a2ce86e5b08e81b3e246.png"
        }
    },
    {
         id: 420,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Magda Floga",
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
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 417,
             branches: [
                421
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/55730896c52f2b57b63e62971708c23d2a7b8112.369f64a9f743e7a8b98bc38cc621afb3.png"
        }
    },
    {
         id: 421,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 1144,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Ragefire Magda Floga",
         durability: [
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
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
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 420,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/55730896c52f2b57b63e62971708c23d2a7b8112.369f64a9f743e7a8b98bc38cc621afb3.png"
        }
    },
    {
         id: 422,
         type: "hammer",
         rarity: 5,
         attack: {
             display: 520,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Blacksteel Hammer 1",
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
                423
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/f401fd6d0aa5c476988d1785ec89b085.39ab96b84be840bb85f0134dce8adc19ea2cdd4e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/3cd875abf77453b9566d74c49be9b3242bc0092d.6e746443f9c17cc188d3cf737eaa2689.png"
        }
    },
    {
         id: 423,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 572,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "blunt",
         name: "Blacksteel Hammer 2",
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
             previous: 422,
             branches: [
                424,
                426
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/3cd875abf77453b9566d74c49be9b3242bc0092d.6e746443f9c17cc188d3cf737eaa2689.png"
        }
    },
    {
         id: 424,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Icesteel Hammer",
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
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 423,
             branches: [
                425
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/d11eb472972612b7232d6bd38fc4fbdfba05901c.90f02c85a0f9235eaaa9d7da9ebf452b.png"
        }
    },
    {
         id: 425,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 1040,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Daora's Colossus",
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
                 type: "ice",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 424,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/d11eb472972612b7232d6bd38fc4fbdfba05901c.90f02c85a0f9235eaaa9d7da9ebf452b.png"
        }
    },
    {
         id: 426,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 884,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "blunt",
         name: "Xeno Maph'agarna",
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
             previous: 423,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/3187d071e6d39973a520a0adccd887beb0cd7b38.738e0fcc234a3853cf64479970f143ba.png"
        }
    },
    {
         id: 427,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 832,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Jail Hammer",
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
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                428
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
                         id: 488,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Tzitzi Coin",
                         description: "A coin given to those who have bested a Tzitzi-Ya-Ku in the Arena."
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/2d8c9abcf97e8fe658ed34eeb38c9f53adaddaf7.4f4fa15a5f3adaea5f53fab4ea7249d0.png"
        }
    },
    {
         id: 428,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "blunt",
         name: "Binder Mace",
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
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 427,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/5d104c6fa9a458531c260b480513d34a.3fac5dc34f663fdafe36274761f9e2da15a812da.png",
             image: "https://assets.mhw-db.com/weapons/hammer/2d8c9abcf97e8fe658ed34eeb38c9f53adaddaf7.4f4fa15a5f3adaea5f53fab4ea7249d0.png"
        }
    },
    {
         id: 1158,
         type: "hammer",
         rarity: 6,
         attack: {
             display: 1092,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Devil's Due",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1159
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/ff139d4e7f871f9ff29639925421ab01.7ebd7e527db55399395ba18d7ba1ce9e5e8399a9.png",
             image: "https://assets.mhw-db.com/weapons/hammer/b2edaec61e2fe372d78b4edf24082267b3fdf320.5df4f8728aae519d4eca1e053a3c4751.png"
        }
    },
    {
         id: 1159,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 1196,
             raw: 230
        },
         elderseal: "high",
         attributes: {},
         damageType: "blunt",
         name: "Devil's Crush",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1158,
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
             icon: "https://assets.mhw-db.com/weapons/hammer/icons/cf2ea70d6676eba4ba5fd93455adb2e5.82bc4e94ed82b92a0b9f9fcf255c814b0dbd941e.png",
             image: "https://assets.mhw-db.com/weapons/hammer/5892d1766015f56e5f52b90d24930e2ed52eedc7.9b59c6baca3a07ecb373cd8b74000a44.png"
        }
    },
    {
         id: 1200,
         type: "hammer",
         rarity: 7,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Empress Mace",
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
                1201,
                1202,
                1203
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
             image: "https://assets.mhw-db.com/weapons/hammer/aa851ae0ae183899048c4fc6f0d08a4ffe8e5342.ba28947b13c06b54327ca118fcc0d001.png"
        }
    },
    {
         id: 1201,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "blunt",
         name: "Empress Mace \"Blaze\"",
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
             previous: 1200,
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
             image: "https://assets.mhw-db.com/weapons/hammer/aa851ae0ae183899048c4fc6f0d08a4ffe8e5342.ba28947b13c06b54327ca118fcc0d001.png"
        }
    },
    {
         id: 1202,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 988,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "blunt",
         name: "Empress Mace \"Ruin\"",
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
             previous: 1200,
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
             image: "https://assets.mhw-db.com/weapons/hammer/59ff209a8ffadf24b530924476edc70d2eac7955.15d7332e17abc8a47daee6c2bfede196.png"
        }
    },
    {
         id: 1203,
         type: "hammer",
         rarity: 8,
         attack: {
             display: 936,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "blunt",
         name: "Empress Mace \"Styx\"",
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
             previous: 1200,
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
             image: "https://assets.mhw-db.com/weapons/hammer/681feb43b793e811ffc39051d237cefb18b5d4b1.d98371c564897a86a00c79d10cf3c568.png"
        }
    }
 ]

 module.exports = {
     hammerData,
     createHammer
 }