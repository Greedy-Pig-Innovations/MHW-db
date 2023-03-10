const { client } = require("../client");

const createGS = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [gs]} = await client.query(`
        INSERT INTO gs(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return gs;
        
      } catch (error) {
        throw error
      }

    } 

const greatSwordData = [
    {
         id: 1,
         type: "great-sword",
         rarity: 1,
         attack: {
             display: 384,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Sword 1",
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
                2
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 2,
         type: "great-sword",
         rarity: 1,
         attack: {
             display: 432,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Sword 2",
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
             previous: 1,
             branches: [
                3,
                20,
                33
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 3,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 480,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Sword 3",
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
             previous: 2,
             branches: [
                4,
                11
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 4,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Blade 1",
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
             previous: 3,
             branches: [
                5
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 5,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Blade 2",
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
             previous: 4,
             branches: [
                6
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 6,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Buster Blade 3",
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
                 type: "poison",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 5,
             branches: [
                7
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 7,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Razor 1",
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
                 type: "poison",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 6,
             branches: [
                8,
                9
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 8,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Razor 2",
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
                 type: "poison",
                 damage: 420,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 7,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png"
        }
    },
    {
         id: 9,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Judicator",
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
             previous: 7,
             branches: [
                10
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/c133eb85ec0d6edbbce29cd61cf4d1e41aad777f.d35e6b8239f318a24cb146c9ff7f9452.png"
        }
    },
    {
         id: 10,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 1008,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Purgation's Atrocity",
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
             previous: 9,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/00c3e8dfaff1e9aca7c04ae897da6e016c06e4ff.7a3b9903b61ff30d5d4d8fd6f7e9f3a6.png"
        }
    },
    {
         id: 11,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Blade 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 3,
             branches: [
                12,
                16
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/1196b471f657068ed7d78ad0fff4d28ccf8352c3.020796ee39d4a3a240de6c9d20b8d661.png"
        }
    },
    {
         id: 12,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Blade 2",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 11,
             branches: [
                13
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/1196b471f657068ed7d78ad0fff4d28ccf8352c3.020796ee39d4a3a240de6c9d20b8d661.png"
        }
    },
    {
         id: 13,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Punisher 1",
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
                 type: "thunder",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 12,
             branches: [
                14
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/6c4e57ae1564eed97f6a41dbe004cbbeba25b29b.68fe18b43152df382c7d27e0d2873e3f.png"
        }
    },
    {
         id: 14,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Punisher 2",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 13,
             branches: [
                15
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/6c4e57ae1564eed97f6a41dbe004cbbeba25b29b.68fe18b43152df382c7d27e0d2873e3f.png"
        }
    },
    {
         id: 15,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Punisher 3",
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
             previous: 14,
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
                     quantity: 5,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/6c4e57ae1564eed97f6a41dbe004cbbeba25b29b.68fe18b43152df382c7d27e0d2873e3f.png"
        }
    },
    {
         id: 16,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Blade 1",
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
                 type: "ice",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 11,
             branches: [
                17
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/2f00b4acc9c893ec7c9d9aed59ce7254c514ceb1.c9eacccfeaa10f0e2c4e41e8f520acdd.png"
        }
    },
    {
         id: 17,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Blade 2",
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
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 16,
             branches: [
                18
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/2f00b4acc9c893ec7c9d9aed59ce7254c514ceb1.c9eacccfeaa10f0e2c4e41e8f520acdd.png"
        }
    },
    {
         id: 18,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Frost Blaze 1",
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
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 17,
             branches: [
                19
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/898cc2fa50fe980fe1e8b50e8d41f9c84f09498b.004ffe5ec3462989339c372dcd79cb2b.png"
        }
    },
    {
         id: 19,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Frost Blaze 2",
         durability: [
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 70,
                 orange: 70,
                 yellow: 80,
                 green: 80,
                 blue: 80,
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
                 type: "ice",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 18,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/898cc2fa50fe980fe1e8b50e8d41f9c84f09498b.004ffe5ec3462989339c372dcd79cb2b.png"
        }
    },
    {
         id: 20,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Blade 1",
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
             previous: 2,
             branches: [
                21,
                26
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/aa402af99d82ffd3b06ee29d39b9b2cb6fb1d2c7.89435ead0125f6a916f706a60c34626a.png"
        }
    },
    {
         id: 21,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Blade 2",
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
             previous: 20,
             branches: [
                22
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/aa402af99d82ffd3b06ee29d39b9b2cb6fb1d2c7.89435ead0125f6a916f706a60c34626a.png"
        }
    },
    {
         id: 22,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Blade 3",
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
             previous: 21,
             branches: [
                23
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/aa402af99d82ffd3b06ee29d39b9b2cb6fb1d2c7.89435ead0125f6a916f706a60c34626a.png"
        }
    },
    {
         id: 23,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Hacker 1",
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
                 type: "water",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 22,
             branches: [
                24
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/45850afb9b16e0dab7898b4a47cc7e6921a28ace.bba4d5f3194d73e89287f531cd8897f4.png"
        }
    },
    {
         id: 24,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Hacker 2",
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
                 rank: 2
            },
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 23,
             branches: [
                25
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/45850afb9b16e0dab7898b4a47cc7e6921a28ace.bba4d5f3194d73e89287f531cd8897f4.png"
        }
    },
    {
         id: 25,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Hacker 3",
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
            },
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 24,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/45850afb9b16e0dab7898b4a47cc7e6921a28ace.bba4d5f3194d73e89287f531cd8897f4.png"
        }
    },
    {
         id: 26,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Girros Blade 1",
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
             previous: 20,
             branches: [
                27
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/b1ad9440b18e87ece947a3276df6d467eddf71d3.3b11e84c4f0eb03c92238a3db7005247.png"
        }
    },
    {
         id: 27,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Girros Blade 2",
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
                 type: "paralysis",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 26,
             branches: [
                28
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/b1ad9440b18e87ece947a3276df6d467eddf71d3.3b11e84c4f0eb03c92238a3db7005247.png"
        }
    },
    {
         id: 28,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Kiss 1",
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
                 type: "paralysis",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 27,
             branches: [
                29,
                31
            ],
             craftingMaterials: [
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
                     quantity: 6,
                     item: {
                         id: 161,
                         rarity: 6,
                         carryLimit: 99,
                         value: 1600,
                         name: "Omniplegia Sac",
                         description: "A monster organ filled with potent neurotoxins. A single touch can cause paralysis."
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
                }
            ],
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/62d23ecf4cf661f4f94911fe2287e9d72ead82e6.89209bd236b345645d0bef5b448c1553.png"
        }
    },
    {
         id: 29,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Kiss 2",
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
                 type: "paralysis",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 28,
             branches: [
                30
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/62d23ecf4cf661f4f94911fe2287e9d72ead82e6.89209bd236b345645d0bef5b448c1553.png"
        }
    },
    {
         id: 30,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Kiss 3",
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
         slots: [],
         elements: [
            {
                 type: "paralysis",
                 damage: 450,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 29,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/62d23ecf4cf661f4f94911fe2287e9d72ead82e6.89209bd236b345645d0bef5b448c1553.png"
        }
    },
    {
         id: 31,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lava Blaze 1",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 28,
             branches: [
                32
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/744916fa4415d912f36d4dfec7746d446573e149.5dcbae440d82341375a1e8f279241fe6.png"
        }
    },
    {
         id: 32,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lava Blaze 2",
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
                 type: "fire",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 31,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/744916fa4415d912f36d4dfec7746d446573e149.5dcbae440d82341375a1e8f279241fe6.png"
        }
    },
    {
         id: 33,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Blade 1",
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
                 type: "poison",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 2,
             branches: [
                34,
                39
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/bcb8810c0bf4a09bd007630b0abec9ca2520c413.fa428853d5a32f73f00f39a88c857569.png"
        }
    },
    {
         id: 34,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Blade 2",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 33,
             branches: [
                35
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/bcb8810c0bf4a09bd007630b0abec9ca2520c413.fa428853d5a32f73f00f39a88c857569.png"
        }
    },
    {
         id: 35,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Blade 3",
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
                 type: "poison",
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 34,
             branches: [
                36
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/bcb8810c0bf4a09bd007630b0abec9ca2520c413.fa428853d5a32f73f00f39a88c857569.png"
        }
    },
    {
         id: 36,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blaze 1",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 40,
                 green: 90,
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
             previous: 35,
             branches: [
                37
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9527943aae0ca86efb4fc903a363f04f33c87260.4406aacacdf9f50a6c902b8cec9e807c.png"
        }
    },
    {
         id: 37,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blaze 2",
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
             previous: 36,
             branches: [
                38
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9527943aae0ca86efb4fc903a363f04f33c87260.4406aacacdf9f50a6c902b8cec9e807c.png"
        }
    },
    {
         id: 38,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blaze 3",
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
             previous: 37,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9527943aae0ca86efb4fc903a363f04f33c87260.4406aacacdf9f50a6c902b8cec9e807c.png"
        }
    },
    {
         id: 39,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Blade 1",
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
                 type: "fire",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 33,
             branches: [
                40
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/7d831915219fe93f29d19f363fcb7f77de5c877e.898d7b0ce05ba8bf741c2d15326676d3.png"
        }
    },
    {
         id: 40,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Blade 2",
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
             previous: 39,
             branches: [
                41
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/7d831915219fe93f29d19f363fcb7f77de5c877e.898d7b0ce05ba8bf741c2d15326676d3.png"
        }
    },
    {
         id: 41,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Red Wing",
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
                 type: "fire",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 40,
             branches: [
                42
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/af1b76d6d7067491164f9e50ba0a7200f3278e6d.0a36ad07359c3de5fe64e896fffb4771.png"
        }
    },
    {
         id: 42,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Blue Wing",
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
             previous: 41,
             branches: [
                43
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/277695738256d9cdcf928bbdb4b5c4979d4f48df.9daa725a1d0e6c1bfd73119ea137cc3a.png"
        }
    },
    {
         id: 43,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Rathalos Glinsword",
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
             previous: 42,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/277695738256d9cdcf928bbdb4b5c4979d4f48df.9daa725a1d0e6c1bfd73119ea137cc3a.png"
        }
    },
    {
         id: 44,
         type: "great-sword",
         rarity: 1,
         attack: {
             display: 480,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Blade 1",
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
                45
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 45,
         type: "great-sword",
         rarity: 1,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Blade 2",
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
             previous: 44,
             branches: [
                46,
                57,
                63
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 46,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Blade 3",
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
             previous: 45,
             branches: [
                47,
                54
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 47,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Slasher 1",
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
             previous: 46,
             branches: [
                48
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 48,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Slasher 2",
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
             previous: 47,
             branches: [
                49
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 49,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Slasher 3",
         durability: [
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 120,
                 orange: 60,
                 yellow: 80,
                 green: 80,
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
             previous: 48,
             branches: [
                50
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/55d0470bab30c4d182f2d0d16b041d478dca592a.eb8a0d5b1a8d341023614c9862dbdce6.png"
        }
    },
    {
         id: 50,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Giant Jawblade 1",
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
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 49,
             branches: [
                51,
                52
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/e5f85f97137e572a9b5bab84bb96ff40b44fade2.3d33bcb6b87daeb5d990f2fa700ee4a7.png"
        }
    },
    {
         id: 51,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Giant Jawblade 2",
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
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 50,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/e5f85f97137e572a9b5bab84bb96ff40b44fade2.3d33bcb6b87daeb5d990f2fa700ee4a7.png"
        }
    },
    {
         id: 52,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak Kys",
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
                 type: "dragon",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 50,
             branches: [
                53
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/10428e873c2a3bbd364992859bcf1aed1913a729.22523d0d4f2136c1ac2477497cacd5be.png"
        }
    },
    {
         id: 53,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 960,
             raw: 200
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Leviathan's Fury",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 52,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/0d38c9dc9e3e3518a39772cf8f8ceb9fdf61cbfd.a9ed22cd30047ed74ecc63a34cd30341.png"
        }
    },
    {
         id: 54,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flammenzahn",
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
             previous: 46,
             branches: [
                55
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 2,
                     item: {
                         id: 264,
                         rarity: 4,
                         carryLimit: 99,
                         value: 630,
                         name: "Anjanath Pelt",
                         description: "Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/76e6584da87cdfb534ef27e7cc8a851b2ab24f08.9267944286ff359b6d24cdda11a748be.png"
        }
    },
    {
         id: 55,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flammenzahn+",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 54,
             branches: [
                56
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/76e6584da87cdfb534ef27e7cc8a851b2ab24f08.9267944286ff359b6d24cdda11a748be.png"
        }
    },
    {
         id: 56,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 1008,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gnashing Flammenzahn",
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
                 damage: 480,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 55,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/76e6584da87cdfb534ef27e7cc8a851b2ab24f08.9267944286ff359b6d24cdda11a748be.png"
        }
    },
    {
         id: 57,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Slasher 1",
         durability: [
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 70,
                 yellow: 30,
                 green: 60,
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
             previous: 45,
             branches: [
                58
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/3d89ec8c06b9e638594dffefffaf4825b6202909.0bd1a1e791403b9ab4086685b5f8d60f.png"
        }
    },
    {
         id: 58,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Slasher 2",
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
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 57,
             branches: [
                59
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 5,
                     item: {
                         id: 136,
                         rarity: 4,
                         carryLimit: 99,
                         value: 500,
                         name: "Sturdy Bone",
                         description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands and Rotten Vale."
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/3d89ec8c06b9e638594dffefffaf4825b6202909.0bd1a1e791403b9ab4086685b5f8d60f.png"
        }
    },
    {
         id: 59,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Slasher 3",
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
             previous: 58,
             branches: [
                60
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/3d89ec8c06b9e638594dffefffaf4825b6202909.0bd1a1e791403b9ab4086685b5f8d60f.png"
        }
    },
    {
         id: 60,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Golem 1",
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
                 type: "water",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 59,
             branches: [
                61
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/b6e74eaf8aecafba2df0a9cc25051e8c6ad9d9af.d9a75de88a301e6cc848f72b6f25a6b7.png"
        }
    },
    {
         id: 61,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Golem 2",
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
             previous: 60,
             branches: [
                62
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/b6e74eaf8aecafba2df0a9cc25051e8c6ad9d9af.d9a75de88a301e6cc848f72b6f25a6b7.png"
        }
    },
    {
         id: 62,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Golem 3",
         durability: [
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 30,
                 white: 10,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 30,
                 white: 20,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 30,
                 white: 30,
                 purple: 0
            },
            {
                 red: 190,
                 orange: 70,
                 yellow: 20,
                 green: 50,
                 blue: 30,
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
                 type: "water",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 61,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/b6e74eaf8aecafba2df0a9cc25051e8c6ad9d9af.d9a75de88a301e6cc848f72b6f25a6b7.png"
        }
    },
    {
         id: 63,
         type: "great-sword",
         rarity: 2,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Buster 1",
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
             previous: 45,
             branches: [
                64,
                69
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/71923450001e5d8fae29c028be78ca3ed6257d05.d0e61ebd047341e40ae9755aa9e44880.png"
        }
    },
    {
         id: 64,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Buster 2",
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
             previous: 63,
             branches: [
                65
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/71923450001e5d8fae29c028be78ca3ed6257d05.d0e61ebd047341e40ae9755aa9e44880.png"
        }
    },
    {
         id: 65,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Buster 3",
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
             previous: 64,
             branches: [
                66
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/71923450001e5d8fae29c028be78ca3ed6257d05.d0e61ebd047341e40ae9755aa9e44880.png"
        }
    },
    {
         id: 66,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Shredder 1",
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
             previous: 65,
             branches: [
                67
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/7740a39bd396c83e688d4270802cf7177327b1c2.0f20306bf93d68e76d296fbd99ee2f2f.png"
        }
    },
    {
         id: 67,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Shredder 2",
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
                 type: "paralysis",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 66,
             branches: [
                68
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/7740a39bd396c83e688d4270802cf7177327b1c2.0f20306bf93d68e76d296fbd99ee2f2f.png"
        }
    },
    {
         id: 68,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 960,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Shredder 3",
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
             previous: 67,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/7740a39bd396c83e688d4270802cf7177327b1c2.0f20306bf93d68e76d296fbd99ee2f2f.png"
        }
    },
    {
         id: 69,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 624,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Spiked Blade 1",
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
             previous: 63,
             branches: [
                70
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/0d620787497df2098bd41bdfa9d198d7fee2288c.ffb68b7ecd402426c09f9645fc75f1c0.png"
        }
    },
    {
         id: 70,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 672,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Spiked Blade 2",
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
             previous: 69,
             branches: [
                71
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/0d620787497df2098bd41bdfa9d198d7fee2288c.ffb68b7ecd402426c09f9645fc75f1c0.png"
        }
    },
    {
         id: 71,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Radobaan Slab 1",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 70,
             branches: [
                72
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/4a3268847dfe52c6cd27c3b070bc78aacb7ba58a.18cb7a7b41cc340d6329a7b4529218ae.png"
        }
    },
    {
         id: 72,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Radobaan Slab 2",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 71,
             branches: [
                73
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/4a3268847dfe52c6cd27c3b070bc78aacb7ba58a.18cb7a7b41cc340d6329a7b4529218ae.png"
        }
    },
    {
         id: 73,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Radobaan Slab 3",
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
             previous: 72,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/4a3268847dfe52c6cd27c3b070bc78aacb7ba58a.18cb7a7b41cc340d6329a7b4529218ae.png"
        }
    },
    {
         id: 74,
         type: "great-sword",
         rarity: 3,
         attack: {
             display: 480,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Cleaver 1",
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
                75,
                77,
                80
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/1710e0183141dbe3d2103dc3de4e0b11.cea79bf2c9acd356c2a14ced6995def0bba81d3d.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/cf82a95967b16fb726aaaf71027560eb37ba812b.5769fe20ecbe84552213baeb6c12e036.png"
        }
    },
    {
         id: 75,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Cleaver 2",
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
             previous: 74,
             branches: [
                76
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/cf82a95967b16fb726aaaf71027560eb37ba812b.5769fe20ecbe84552213baeb6c12e036.png"
        }
    },
    {
         id: 76,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Cleaver 3",
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
             previous: 75,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/cf82a95967b16fb726aaaf71027560eb37ba812b.5769fe20ecbe84552213baeb6c12e036.png"
        }
    },
    {
         id: 77,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 528,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thundersword",
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
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 74,
             branches: [
                78
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/97c8ebf2460fef25867ac74015c80c72a3fab7bc.3ae89eca4bd02aba07d1ffbfba47b02a.png"
        }
    },
    {
         id: 78,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Kirin Thundersword",
         durability: [
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 160,
                 blue: 90,
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
             previous: 77,
             branches: [
                79
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/97c8ebf2460fef25867ac74015c80c72a3fab7bc.3ae89eca4bd02aba07d1ffbfba47b02a.png"
        }
    },
    {
         id: 79,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "King Thundersword",
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
                 damage: 540,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 78,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/97c8ebf2460fef25867ac74015c80c72a3fab7bc.3ae89eca4bd02aba07d1ffbfba47b02a.png"
        }
    },
    {
         id: 80,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 768,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Potestas 1",
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
             previous: 74,
             branches: [
                81
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9ee21ea53ee04a3cd8983811b670292673b16212.6b1784a6caabd57ec969b64cfb16304a.png"
        }
    },
    {
         id: 81,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 1056,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Potestas 2",
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
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 80,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9ee21ea53ee04a3cd8983811b670292673b16212.6b1784a6caabd57ec969b64cfb16304a.png"
        }
    },
    {
         id: 82,
         type: "great-sword",
         rarity: 5,
         attack: {
             display: 480,
             raw: 100
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Blacksteel Chopper 1",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                83
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/223f24731ea26332ab926d0d05113813.cd4a853f70af923133e57475348aa0e0b594b808.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/8fa4b4a5aaf4ba3255ac88d2ba932783af7c2e68.c02323eb52edb7ac676eff67d29497d3.png"
        }
    },
    {
         id: 83,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 576,
             raw: 120
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Blacksteel Chopper 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 82,
             branches: [
                84,
                86
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/8fa4b4a5aaf4ba3255ac88d2ba932783af7c2e68.c02323eb52edb7ac676eff67d29497d3.png"
        }
    },
    {
         id: 84,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Icesteel Edge",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 83,
             branches: [
                85
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/ad9b080425a6e0ec89cc5469f98f741f19fb248a.cde26953eea31507d7d4424eb8fabdf9.png"
        }
    },
    {
         id: 85,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Daora's Decimator",
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 84,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/ad9b080425a6e0ec89cc5469f98f741f19fb248a.cde26953eea31507d7d4424eb8fabdf9.png"
        }
    },
    {
         id: 86,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 816,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Xeno Maliq",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 83,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/6f6a78c9f3bbfca0f968011968a1a855bc5dfbfd.42bad1898c86b448ae41763d0b912f7d.png"
        }
    },
    {
         id: 87,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Wyvern Jawblade",
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
                 type: "blast",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                88
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
                         id: 489,
                         rarity: 4,
                         carryLimit: 99,
                         value: 800,
                         name: "Barroth Coin",
                         description: "A coin given to those who have bested a Barroth in the Arena."
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/93135fc5ea589cb5edd5264efadaae55e5e8445a.9a33975d8d657146a3f96aebcc493f83.png"
        }
    },
    {
         id: 88,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 960,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Great Wyvern Jawblade",
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
                 type: "blast",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 87,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/b75701cb2979341853698ca0dc81e67a.65f65ea83eb133f54337d4d835d3f4624ace6b85.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/93135fc5ea589cb5edd5264efadaae55e5e8445a.9a33975d8d657146a3f96aebcc493f83.png"
        }
    },
    {
         id: 1150,
         type: "great-sword",
         rarity: 6,
         attack: {
             display: 1008,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Berserker Sword",
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
                1151
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/e2b396ec3f56dfa8cc5e82ad53a0b445.a527679a7128f54d5a65b612842bfa6d1ece9682.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/aaef091f2381b92dee4839c685ee66f0e18b063d.d5ac5ae5af86b7cb1da6581ec42e236a.png"
        }
    },
    {
         id: 1151,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 1104,
             raw: 230
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Anguish",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1150,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/aaef091f2381b92dee4839c685ee66f0e18b063d.d5ac5ae5af86b7cb1da6581ec42e236a.png"
        }
    },
    {
         id: 1180,
         type: "great-sword",
         rarity: 4,
         attack: {
             display: 720,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Wyvern Ignition \"Steel\"",
         durability: [
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 60,
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
                1181
            ],
             craftingMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 526,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Master Craftsman's Blueprint",
                         description: "A blueprint for a revolutionary Great Sword, designed by a famed craftsman."
                    }
                },
                {
                     quantity: 7,
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
                         id: 296,
                         rarity: 4,
                         carryLimit: 99,
                         value: 850,
                         name: "Paolumu Webbing",
                         description: "Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 345,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1360,
                         name: "Rathalos Marrow",
                         description: "Rathalos material. Obtained by carving. Grants fire element properties."
                    }
                }
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/9920045cd6c82fd2810eca2d4f498d80.a15b847b35db7c15eed0e223ec524f2127a8b188.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9876ac2d364c5d15f019e24a8d2c08c4509015af.5e306edb643559c79313457ed6382333.png"
        }
    },
    {
         id: 1181,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 1008,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Wyvern Ignition \"Impact\"",
         durability: [
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 10,
                 purple: 0
            },
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 20,
                 purple: 0
            },
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 30,
                 purple: 0
            },
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 250,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 60,
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
                 type: "fire",
                 damage: 510,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1180,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 526,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Master Craftsman's Blueprint",
                         description: "A blueprint for a revolutionary Great Sword, designed by a famed craftsman."
                    }
                },
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
                     quantity: 5,
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
             icon: "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png",
             image: "https://assets.mhw-db.com/weapons/great-sword/9876ac2d364c5d15f019e24a8d2c08c4509015af.5e306edb643559c79313457ed6382333.png"
        }
    },
    {
         id: 1182,
         type: "great-sword",
         rarity: 7,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Galea",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1183,
                1184,
                1185
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
             image: "https://assets.mhw-db.com/weapons/great-sword/10f51eb574c98c9455595a82b171733eda27d4ba.83cbf6de60397b783939a495675ba28a.png"
        }
    },
    {
         id: 1183,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Galea \"Blaze\"",
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1182,
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
             image: "https://assets.mhw-db.com/weapons/great-sword/10f51eb574c98c9455595a82b171733eda27d4ba.83cbf6de60397b783939a495675ba28a.png"
        }
    },
    {
         id: 1184,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 912,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Galea \"Ruin\"",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1182,
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
             image: "https://assets.mhw-db.com/weapons/great-sword/626a51b33d58552b347587fd8ed72656cc5b1fbe.d10bc1dcce2455ad2b07675ab7a965a0.png"
        }
    },
    {
         id: 1185,
         type: "great-sword",
         rarity: 8,
         attack: {
             display: 864,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Galea \"Styx\"",
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
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1182,
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
             image: "https://assets.mhw-db.com/weapons/great-sword/f0e5236f2165587a439c83cd7674ff90cb6b9899.832c6d533bddef07caa3537e6a4cbc1e.png"
        }
    }
 ]

 module.exports = {
     greatSwordData,
     createGS
 }