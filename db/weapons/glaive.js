const { client } = require("../client");

const createGlaive = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,boostType,slots,elements,crafting,assets}) => {

    try {

        const {rows: [glaive]} = await client.query(`
        INSERT INTO glaive(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,"boostType",slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,boostType,slots,elements,crafting,assets]);
    
        return glaive;
        
      } catch (error) {
        throw error
      }

    } 

const glaiveData = [
    {
         id: 831,
         type: "insect-glaive",
         rarity: 1,
         attack: {
             display: 248,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Blade 1",
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
         boostType: "sever",
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                832
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ee9b53565aee68289c51c5f2c1e539946290f097.6073eeb20646fa6a0cc7d146aa69ddb2.png"
        }
    },
    {
         id: 832,
         type: "insect-glaive",
         rarity: 1,
         attack: {
             display: 279,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Blade 2",
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
         boostType: "sever",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 831,
             branches: [
                833,
                845,
                860
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ee9b53565aee68289c51c5f2c1e539946290f097.6073eeb20646fa6a0cc7d146aa69ddb2.png"
        }
    },
    {
         id: 833,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Blade 3",
         durability: [
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 50,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 60,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 70,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 70,
                 yellow: 30,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "sever",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 832,
             branches: [
                834
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ee9b53565aee68289c51c5f2c1e539946290f097.6073eeb20646fa6a0cc7d146aa69ddb2.png"
        }
    },
    {
         id: 834,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Blade 1",
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
         boostType: "sever",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 833,
             branches: [
                835,
                841
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/faacc68b795b4905fe366c00384f6ae901a86f8c.58c30e674dfbf4ddf71d16c71c6c395c.png"
        }
    },
    {
         id: 835,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 403,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Blade 2",
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
         boostType: "sever",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 834,
             branches: [
                836
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/faacc68b795b4905fe366c00384f6ae901a86f8c.58c30e674dfbf4ddf71d16c71c6c395c.png"
        }
    },
    {
         id: 836,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Blade 3",
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
         boostType: "sever",
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
             previous: 835,
             branches: [
                837
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/faacc68b795b4905fe366c00384f6ae901a86f8c.58c30e674dfbf4ddf71d16c71c6c395c.png"
        }
    },
    {
         id: 837,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Blade 1",
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
         boostType: "sever",
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
             previous: 836,
             branches: [
                838,
                839
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/5751f96c88d2cd78b89df3b5794d9e3427d637a8.bfb250a4cf1b12c2b789dbc079b50275.png"
        }
    },
    {
         id: 838,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Blade 2",
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
         boostType: "sever",
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
             previous: 837,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/5751f96c88d2cd78b89df3b5794d9e3427d637a8.bfb250a4cf1b12c2b789dbc079b50275.png"
        }
    },
    {
         id: 839,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 620,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Reaper",
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
         boostType: "sever",
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
             previous: 837,
             branches: [
                840
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/5fa26f363e8582fcfa99aa052c66587b8efd1039.6376a3dfd25873146badf7cd6b245dee.png"
        }
    },
    {
         id: 840,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 651,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Catastrophe's Light",
         durability: [
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
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
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
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
            },
            {
                 red: 100,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
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
         boostType: "sever",
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
             previous: 839,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/79d13d0fe6c5e50a3db556bb34176df1.c8e7d9e5e93a91f54837d24b9758eec88147a01d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b40ee4941ebb9ea0712737d9de4a33c32d981c2e.c31fea70dd9b03586ca86101e5431180.png"
        }
    },
    {
         id: 841,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 372,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Glaive 1",
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
         boostType: "sever",
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 834,
             branches: [
                842
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ea31f6184f4ee5c2dd7a934ab4561cf0cd91cf6b.1caa652d0ce46f58d33a3c95000a3e16.png"
        }
    },
    {
         id: 842,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Glaive 2",
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
         boostType: "sever",
         slots: [
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
             previous: 841,
             branches: [
                843
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ea31f6184f4ee5c2dd7a934ab4561cf0cd91cf6b.1caa652d0ce46f58d33a3c95000a3e16.png"
        }
    },
    {
         id: 843,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Rathmaul",
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
         boostType: "sever",
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 842,
             branches: [
                844
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/a23be13671c702cdf4b8fde5b581ef874b38faeb.841d9212ad1d63eecff2e1e031bf54ce.png"
        }
    },
    {
         id: 844,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Firedance Rathmaul",
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
         boostType: "sever",
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
             previous: 843,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/a23be13671c702cdf4b8fde5b581ef874b38faeb.841d9212ad1d63eecff2e1e031bf54ce.png"
        }
    },
    {
         id: 845,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kulu Blade 1",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 832,
             branches: [
                846,
                851
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/51ca9c47079b1bc4755cc8faa015eb41ec4dcb78.a5c937fbe0602cf4e48d0ad03a660508.png"
        }
    },
    {
         id: 846,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kulu Blade 2",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 845,
             branches: [
                847
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/51ca9c47079b1bc4755cc8faa015eb41ec4dcb78.a5c937fbe0602cf4e48d0ad03a660508.png"
        }
    },
    {
         id: 847,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kulu Blade 3",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 846,
             branches: [
                848
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/51ca9c47079b1bc4755cc8faa015eb41ec4dcb78.a5c937fbe0602cf4e48d0ad03a660508.png"
        }
    },
    {
         id: 848,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Ya-Ku Wrath 1",
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
         boostType: "speed",
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 847,
             branches: [
                849
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ff3ee979c35eef9206a4c39a598f811212dbdc71.56c1f541140d1669e0e4cba32e002d51.png"
        }
    },
    {
         id: 849,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Ya-Ku Wrath 2",
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
         boostType: "speed",
         slots: [],
         elements: [
            {
                 type: "sleep",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 848,
             branches: [
                850
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ff3ee979c35eef9206a4c39a598f811212dbdc71.56c1f541140d1669e0e4cba32e002d51.png"
        }
    },
    {
         id: 850,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Ya-Ku Wrath 3",
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
         boostType: "speed",
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
             previous: 849,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ff3ee979c35eef9206a4c39a598f811212dbdc71.56c1f541140d1669e0e4cba32e002d51.png"
        }
    },
    {
         id: 851,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 372,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Luminous Blade 1",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 845,
             branches: [
                852,
                856
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/76b2b6bf17d0d5bc5590f7a429031f5eee1da501.e5bce4fea0a66ca5d913c0dba2657d9a.png"
        }
    },
    {
         id: 852,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Luminous Blade 2",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 851,
             branches: [
                853
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/76b2b6bf17d0d5bc5590f7a429031f5eee1da501.e5bce4fea0a66ca5d913c0dba2657d9a.png"
        }
    },
    {
         id: 853,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Destroyer Bo 1",
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
         boostType: "speed",
         slots: [
            {
                 rank: 1
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
             previous: 852,
             branches: [
                854
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/18ed8409d9dc12e820c0bbb0cf285c0076bff585.fc70cc49bbd59940dfda14ea8d3709cb.png"
        }
    },
    {
         id: 854,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Destroyer Bo 2",
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
         boostType: "speed",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 853,
             branches: [
                855
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/18ed8409d9dc12e820c0bbb0cf285c0076bff585.fc70cc49bbd59940dfda14ea8d3709cb.png"
        }
    },
    {
         id: 855,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Destroyer Bo 3",
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
         boostType: "speed",
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
             previous: 854,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/18ed8409d9dc12e820c0bbb0cf285c0076bff585.fc70cc49bbd59940dfda14ea8d3709cb.png"
        }
    },
    {
         id: 856,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Frost Blade 1",
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
         boostType: "element",
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 851,
             branches: [
                857
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/6f2d61956f8f227e21a919e4c6e5217132f45204.a6ef8d92d81803c156d4ce6a5180598b.png"
        }
    },
    {
         id: 857,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Frost Blade 2",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "element",
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
                 type: "ice",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 856,
             branches: [
                858
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/6f2d61956f8f227e21a919e4c6e5217132f45204.a6ef8d92d81803c156d4ce6a5180598b.png"
        }
    },
    {
         id: 858,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Gale 1",
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
         boostType: "element",
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
                 type: "ice",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 857,
             branches: [
                859
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/9e604e047d92e023a2426e02a5c7f382bdc5b051.012ea4a6c4c8d51ea5e07f295bd7d9fa.png"
        }
    },
    {
         id: 859,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Gale 2",
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
         boostType: "element",
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
                 type: "ice",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 858,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/9e604e047d92e023a2426e02a5c7f382bdc5b051.012ea4a6c4c8d51ea5e07f295bd7d9fa.png"
        }
    },
    {
         id: 860,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Glaive 1",
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
         boostType: "health",
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
             previous: 832,
             branches: [
                861
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b95101e4d6947871cf81e9f570fd6c1c6c1a34dd.8e54023662e5a4f1108d4498339486ee.png"
        }
    },
    {
         id: 861,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Glaive 2",
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
         boostType: "health",
         slots: [],
         elements: [
            {
                 type: "poison",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 860,
             branches: [
                862
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b95101e4d6947871cf81e9f570fd6c1c6c1a34dd.8e54023662e5a4f1108d4498339486ee.png"
        }
    },
    {
         id: 862,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 403,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Glaive 3",
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
         boostType: "health",
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
             previous: 861,
             branches: [
                863
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b95101e4d6947871cf81e9f570fd6c1c6c1a34dd.8e54023662e5a4f1108d4498339486ee.png"
        }
    },
    {
         id: 863,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blade 1",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "health",
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
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 862,
             branches: [
                864,
                866
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/d24f1b5d2ed3b0656d7e7c94e8b464d9b9e71113.86f2c8b0a7c0b3cac5a0c13572651c79.png"
        }
    },
    {
         id: 864,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blade 2",
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
         boostType: "health",
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
                 damage: 360,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 863,
             branches: [
                865
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/d24f1b5d2ed3b0656d7e7c94e8b464d9b9e71113.86f2c8b0a7c0b3cac5a0c13572651c79.png"
        }
    },
    {
         id: 865,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blade 3",
         durability: [
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 100,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "health",
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
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 864,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/d24f1b5d2ed3b0656d7e7c94e8b464d9b9e71113.86f2c8b0a7c0b3cac5a0c13572651c79.png"
        }
    },
    {
         id: 866,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gama Cane 1",
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
         boostType: "stamina",
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
             previous: 863,
             branches: [
                867
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/bee34e13ee2a8256a85e07e7669ecfce89aabb6d.75562fc717a5cb316afd66d67137e890.png"
        }
    },
    {
         id: 867,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gama Cane 2",
         durability: [
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 20,
                 purple: 0
            }
        ],
         boostType: "stamina",
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
             previous: 866,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/bee34e13ee2a8256a85e07e7669ecfce89aabb6d.75562fc717a5cb316afd66d67137e890.png"
        }
    },
    {
         id: 868,
         type: "insect-glaive",
         rarity: 1,
         attack: {
             display: 279,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Rod 1",
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
         boostType: "blunt",
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                869
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/7d30fff88d8c81765376e5c08fe1a7266559c5d4.a4c00c5f75b64b1d666b1d980348357a.png"
        }
    },
    {
         id: 869,
         type: "insect-glaive",
         rarity: 1,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Rod 2",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 70,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 0,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 10,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 20,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 30,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 80,
                 green: 40,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "blunt",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 868,
             branches: [
                870,
                881,
                891
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/7d30fff88d8c81765376e5c08fe1a7266559c5d4.a4c00c5f75b64b1d666b1d980348357a.png"
        }
    },
    {
         id: 870,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Rod 3",
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
         boostType: "blunt",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 869,
             branches: [
                871,
                878
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/7d30fff88d8c81765376e5c08fe1a7266559c5d4.a4c00c5f75b64b1d666b1d980348357a.png"
        }
    },
    {
         id: 871,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Rod 1",
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
         boostType: "blunt",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 870,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/552313e6e850f5cf0a071ca8375a0008a7a0eecf.93f5ba565256b97e8a71f9f2cdc1bab2.png"
        }
    },
    {
         id: 872,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {
             boostType: "blunt",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Hard Bone Rod 2",
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
         boostType: "blunt",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 871,
             branches: [
                873
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/552313e6e850f5cf0a071ca8375a0008a7a0eecf.93f5ba565256b97e8a71f9f2cdc1bab2.png"
        }
    },
    {
         id: 873,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Rod 3",
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
         boostType: "blunt",
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
             previous: 872,
             branches: [
                874
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/552313e6e850f5cf0a071ca8375a0008a7a0eecf.93f5ba565256b97e8a71f9f2cdc1bab2.png"
        }
    },
    {
         id: 874,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Aerial Rod 1",
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
         boostType: "blunt",
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
             previous: 873,
             branches: [
                875,
                876
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/434b25b2b58433229649cd5ddffb03d55360bee6.d6d58ec39e9f46b0fa4b0120c63c0945.png"
        }
    },
    {
         id: 875,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Aerial Rod 2",
         durability: [
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 100,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "blunt",
         slots: [
            {
                 rank: 3
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
             previous: 874,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/434b25b2b58433229649cd5ddffb03d55360bee6.d6d58ec39e9f46b0fa4b0120c63c0945.png"
        }
    },
    {
         id: 876,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak Entoma 1",
         durability: [
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 20,
                 purple: 0
            }
        ],
         boostType: "blunt",
         slots: [
            {
                 rank: 2
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
             previous: 874,
             branches: [
                877
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/6f67a92ef2ae2b1c225372797b89f97436e16edf.e625ad56727ba28cf80bbf60aab07bed.png"
        }
    },
    {
         id: 877,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 620,
             raw: 200
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak Entoma 2",
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
         boostType: "blunt",
         slots: [
            {
                 rank: 2
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
             previous: 876,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/6f67a92ef2ae2b1c225372797b89f97436e16edf.e625ad56727ba28cf80bbf60aab07bed.png"
        }
    },
    {
         id: 878,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 403,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flammenkaefer",
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
         boostType: "blunt",
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 870,
             branches: [
                879
            ],
             craftingMaterials: [
                {
                     quantity: 5,
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
                     quantity: 4,
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
                         id: 267,
                         rarity: 4,
                         carryLimit: 99,
                         value: 860,
                         name: "Anjanath Tail",
                         description: "Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
            ],
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/257c77d9dc9a37c1dafd5dc92020afa44cd80566.7a06fc544cb8a3cf3c62f4651df4af04.png"
        }
    },
    {
         id: 879,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flammenkaefer+",
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
         boostType: "blunt",
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
             previous: 878,
             branches: [
                880
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/257c77d9dc9a37c1dafd5dc92020afa44cd80566.7a06fc544cb8a3cf3c62f4651df4af04.png"
        }
    },
    {
         id: 880,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 651,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gnashing Flammenkaefer",
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
         boostType: "blunt",
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
             previous: 879,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/257c77d9dc9a37c1dafd5dc92020afa44cd80566.7a06fc544cb8a3cf3c62f4651df4af04.png"
        }
    },
    {
         id: 881,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Rod 1",
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
         boostType: "element",
         slots: [],
         elements: [
            {
                 type: "water",
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 869,
             branches: [
                882
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b98b47b7b9cca11c83b5e10077372d4b6305f7dc.e4bc1ce124f79dc9e77e2b107c446ac7.png"
        }
    },
    {
         id: 882,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 372,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Rod 2",
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
         boostType: "element",
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
             previous: 881,
             branches: [
                883,
                887
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b98b47b7b9cca11c83b5e10077372d4b6305f7dc.e4bc1ce124f79dc9e77e2b107c446ac7.png"
        }
    },
    {
         id: 883,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Rod 3",
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
         boostType: "element",
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
             previous: 882,
             branches: [
                884
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/b98b47b7b9cca11c83b5e10077372d4b6305f7dc.e4bc1ce124f79dc9e77e2b107c446ac7.png"
        }
    },
    {
         id: 884,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Glaive 1",
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
         boostType: "element",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 883,
             branches: [
                885
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/64bbeddbe248d464578b1b2286dfda33f264e318.65519708d6396c702d59f55c43a0b7d1.png"
        }
    },
    {
         id: 885,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Glaive 2",
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
         boostType: "element",
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
             previous: 884,
             branches: [
                886
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/64bbeddbe248d464578b1b2286dfda33f264e318.65519708d6396c702d59f55c43a0b7d1.png"
        }
    },
    {
         id: 886,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Glaive 3",
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
         boostType: "element",
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
             previous: 885,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/64bbeddbe248d464578b1b2286dfda33f264e318.65519708d6396c702d59f55c43a0b7d1.png"
        }
    },
    {
         id: 887,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Diablos Rod 1",
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
         boostType: "stamina",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 882,
             branches: [
                888
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/9dce25ac0ba09ff5f4a341b58c68be7c72752476.7564fb712ea573962963e8e55f1cebc4.png"
        }
    },
    {
         id: 888,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 620,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Diablos Rod 2",
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
         boostType: "stamina",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 887,
             branches: [
                889
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/9dce25ac0ba09ff5f4a341b58c68be7c72752476.7564fb712ea573962963e8e55f1cebc4.png"
        }
    },
    {
         id: 889,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 682,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Tyrannis Glaive 1",
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
         boostType: "stamina",
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
             previous: 888,
             branches: [
                890
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/29c04f87b6d839ccaba1209f1e2eee1aec32e6a0.4e953801ec99d8069564b38be18529b0.png"
        }
    },
    {
         id: 890,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 713,
             raw: 230
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Tyrannis Glaive 2",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 10,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 20,
                 purple: 0
            }
        ],
         boostType: "stamina",
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
             previous: 889,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/29c04f87b6d839ccaba1209f1e2eee1aec32e6a0.4e953801ec99d8069564b38be18529b0.png"
        }
    },
    {
         id: 891,
         type: "insect-glaive",
         rarity: 2,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Rod 1",
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
         boostType: "speed",
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 869,
             branches: [
                892
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d686e3c4e9a394c8975893256bdba3ac.07b48cc26c9cc82a6b77252bc303c3c4ac58eb1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 892,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 372,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Rod 2",
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
         boostType: "speed",
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
             previous: 891,
             branches: [
                893,
                897
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 893,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Rod 3",
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
         boostType: "speed",
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
             previous: 892,
             branches: [
                894
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 894,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kadachi Pillar 1",
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
         boostType: "speed",
         slots: [
            {
                 rank: 1
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
             previous: 893,
             branches: [
                895
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 895,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kadachi Pillar 2",
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
         boostType: "speed",
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
             previous: 894,
             branches: [
                896
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 896,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kadachi Pillar 3",
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
         boostType: "speed",
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
             previous: 895,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/488418127251ba7570e2fea48bf557f46773c678.e5e3d344ad7f65244feb03ab73af7838.png"
        }
    },
    {
         id: 897,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 403,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Garon Rod 1",
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
         boostType: "speed",
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 892,
             branches: [
                898
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/16815474e9dffb8faac486abd48431c47bb41db0.e2b4d3b6041ba09c1ddfa1e9d36e34cb.png"
        }
    },
    {
         id: 898,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Garon Rod 2",
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
         boostType: "speed",
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 897,
             branches: [
                899
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/16815474e9dffb8faac486abd48431c47bb41db0.e2b4d3b6041ba09c1ddfa1e9d36e34cb.png"
        }
    },
    {
         id: 899,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 465,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Temptation's Trident",
         durability: [
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 50,
                 yellow: 90,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "speed",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 898,
             branches: [
                900
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/932c94c5de990e9381a8ef99215b8141b63c1cf8.18bac7b6f9c3070e554af4d8791aa96b.png"
        }
    },
    {
         id: 900,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Vice",
         durability: [
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 40,
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
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 40,
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
            },
            {
                 red: 200,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 50,
                 white: 40,
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
         boostType: "speed",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "fire",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 899,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/79d13d0fe6c5e50a3db556bb34176df1.c8e7d9e5e93a91f54837d24b9758eec88147a01d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/932c94c5de990e9381a8ef99215b8141b63c1cf8.18bac7b6f9c3070e554af4d8791aa96b.png"
        }
    },
    {
         id: 901,
         type: "insect-glaive",
         rarity: 3,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Glaive 1",
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
         boostType: "element",
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
                902,
                904
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/9b4243956f0a8bbd9cf9e742b9fd7484.ea60375bae2954b8a86a5f4792989e36e6c21bb2.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/fb5f385a4d29f1d1a33fbf012ebaa5613f9f1313.9aa8198fd1005fc9764e5ec2e2b1f059.png"
        }
    },
    {
         id: 902,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Glaive 2",
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
         boostType: "element",
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
             previous: 901,
             branches: [
                903
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/fb5f385a4d29f1d1a33fbf012ebaa5613f9f1313.9aa8198fd1005fc9764e5ec2e2b1f059.png"
        }
    },
    {
         id: 903,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Glaive 3",
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
         boostType: "element",
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
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 902,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/fb5f385a4d29f1d1a33fbf012ebaa5613f9f1313.9aa8198fd1005fc9764e5ec2e2b1f059.png"
        }
    },
    {
         id: 904,
         type: "insect-glaive",
         rarity: 4,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Indigo Flash",
         durability: [
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 100,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 110,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 120,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 80,
                 green: 130,
                 blue: 0,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "element",
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 901,
             branches: [
                905
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/36dd7205ff368129969268b5f1b133bf.b48f1c1083a9e3fec4edc96419a43acb67ffa3b0.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/0838673aa01d64401d90ff45213b8be50652656e.ee00b81829c8b3010d384c057187b166.png"
        }
    },
    {
         id: 905,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 434,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Azure Bolt",
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
         boostType: "element",
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 904,
             branches: [
                906
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/0838673aa01d64401d90ff45213b8be50652656e.ee00b81829c8b3010d384c057187b166.png"
        }
    },
    {
         id: 906,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 496,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Verdant Levin",
         durability: [
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 110,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 120,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 120,
                 blue: 130,
                 white: 0,
                 purple: 0
            }
        ],
         boostType: "element",
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
             previous: 905,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/79d13d0fe6c5e50a3db556bb34176df1.c8e7d9e5e93a91f54837d24b9758eec88147a01d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/0838673aa01d64401d90ff45213b8be50652656e.ee00b81829c8b3010d384c057187b166.png"
        }
    },
    {
         id: 907,
         type: "insect-glaive",
         rarity: 5,
         attack: {
             display: 310,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Glaive 1",
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
         boostType: "health",
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                908
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/d259ed1e32e2fc5cc6e87a181f4387d8.95b36b713dc79ba341273c3b822db2cbc3088653.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/0d5914840c83ea55bd0de16b3b80506d920cde82.0f9fd858215eb2faaf31aedc8fe18a28.png"
        }
    },
    {
         id: 908,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 341,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Glaive 2",
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
         boostType: "health",
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 907,
             branches: [
                909,
                911
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/0d5914840c83ea55bd0de16b3b80506d920cde82.0f9fd858215eb2faaf31aedc8fe18a28.png"
        }
    },
    {
         id: 909,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 527,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Daora's Entom",
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
         boostType: "health",
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
             previous: 908,
             branches: [
                910
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/5852d04965acc3a1155ca47b63c1476eb6334cfb.c6408b624b3be5db82a2e5e5d9b71ca5.png"
        }
    },
    {
         id: 910,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Daora's Tethidine",
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
         boostType: "health",
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 909,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/79d13d0fe6c5e50a3db556bb34176df1.c8e7d9e5e93a91f54837d24b9758eec88147a01d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/83cf18c453e06ab3d4469e8d15cbde541553a105.c8e83812f9e37b0e9a3fdedd9c63f67b.png"
        }
    },
    {
         id: 911,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Xeno Shmaena",
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
         boostType: "stamina",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 908,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/79d13d0fe6c5e50a3db556bb34176df1.c8e7d9e5e93a91f54837d24b9758eec88147a01d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/ffcfd83d6421fe9e67366594e77f4bb1fc97eb7a.02cfecb44c54bb0707780e6b5780c4c5.png"
        }
    },
    {
         id: 1170,
         type: "insect-glaive",
         rarity: 6,
         attack: {
             display: 620,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Bad Wing",
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
         boostType: "health",
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
                1171
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/b428f94bc0391f1ef98d7dbc3de96662.b5c049c212722b30f57efa9474451bb190ad4d1d.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/d888e6eee57515b3c8861cb00e4b8b76a01d94a1.34e7c9d4f27af9b52f35236108eae63a.png"
        }
    },
    {
         id: 1171,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 682,
             raw: 220
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Grunge Storm",
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
         boostType: "health",
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
             previous: 1170,
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
             icon: "https://assets.mhw-db.com/weapons/insect-glaive/icons/efe2068df57e6f4f1fc43ea1e0f3629d.c9a9d8f6d20160e7ff9892de181336a12803030a.png",
             image: "https://assets.mhw-db.com/weapons/insect-glaive/aa6f711ce322b9e26f928e9a9f76d90433f4ee3e.d35a587eb9a937938aa661c3330bf081.png"
        }
    },
    {
         id: 1228,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Cane",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 90,
                 purple: 0
            }
        ],
         boostType: "speed",
         slots: [
            {
                 rank: 1
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
             craftable: true,
             previous: null,
             branches: [
                1229,
                1230,
                1231
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
             image: "https://assets.mhw-db.com/weapons/insect-glaive/938a1128c204e6a10103c7102276dfe4f0f064ae.6b3b543f0a6df89befca9b72d232d91a.png"
        }
    },
    {
         id: 1229,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Cane \"Blaze\"",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 90,
                 purple: 0
            }
        ],
         boostType: "speed",
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
             craftable: false,
             previous: 1228,
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
             image: "https://assets.mhw-db.com/weapons/insect-glaive/2f0b60212243faeea7d22ad8703f96e4a4ed8b32.7c07ee0d854eae90865711e04986704b.png"
        }
    },
    {
         id: 1230,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 620,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Cane \"Ruin\"",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 90,
                 purple: 0
            }
        ],
         boostType: "speed",
         slots: [
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
             previous: 1228,
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
             image: "https://assets.mhw-db.com/weapons/insect-glaive/43b43efca5ceb9a818c50cf7bf7fb061d2e41692.6818d16e4a7fa49e3c4b4a075abf49ab.png"
        }
    },
    {
         id: 1231,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Cane \"Styx\"",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 90,
                 purple: 0
            }
        ],
         boostType: "speed",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1228,
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
             image: "https://assets.mhw-db.com/weapons/insect-glaive/a1f6de5c25fcb31ba89ed2679b8821d78d44e7e8.f86ad65fcf51536d4fb5e7a4f38b08f2.png"
        }
    },
    {
         id: 1232,
         type: "insect-glaive",
         rarity: 7,
         attack: {
             display: 558,
             raw: 180
        },
         elderseal: "high",
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Gae Bolg",
         durability: [
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 70,
                 yellow: 70,
                 green: 80,
                 blue: 80,
                 white: 20,
                 purple: 0
            }
        ],
         boostType: "element",
         slots: [
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "dragon",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1233
            ],
             craftingMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 587,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7000,
                         name: "Behemoth Bone",
                         description: "Rare Behemoth material. Bone so absurdly strong that it can even knock out legendary heroes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 589,
                         rarity: 8,
                         carryLimit: 99,
                         value: 10000,
                         name: "Behemoth Shearclaw",
                         description: "Rare Behemoth material. These claws cut down weaker prey in a single blow."
                    }
                },
                {
                     quantity: 3,
                     item: {
                         id: 581,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Aetheryte Shard",
                         description: "A fragment of a glittering crystal. Contains an unknown, otherworldly energy called \"aether\"."
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
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/insect-glaive/adeb5e7f179d604903c4b09cf9987f4ab010a632.119abd643a28cc9a87cbd2f74844248f.png"
        }
    },
    {
         id: 1233,
         type: "insect-glaive",
         rarity: 8,
         attack: {
             display: 589,
             raw: 190
        },
         elderseal: "high",
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "True Gae Bolg",
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
         boostType: "element",
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
             previous: 1232,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 587,
                         rarity: 7,
                         carryLimit: 99,
                         value: 7000,
                         name: "Behemoth Bone",
                         description: "Rare Behemoth material. Bone so absurdly strong that it can even knock out legendary heroes."
                    }
                },
                {
                     quantity: 2,
                     item: {
                         id: 588,
                         rarity: 8,
                         carryLimit: 99,
                         value: 15000,
                         name: "Behemoth Great Horn",
                         description: "Rare Behemoth material. The ominous light that this horn emits leaves even the Warriors of Light shaken."
                    }
                },
                {
                     quantity: 1,
                     item: {
                         id: 590,
                         rarity: 8,
                         carryLimit: 99,
                         value: 12000,
                         name: "Behemoth Tail",
                         description: "Rare Behemoth material. A thick, muscular tail that sweeps away all threats."
                    }
                },
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
                }
            ]
        },
         assets: {
             icon: null,
             image: "https://assets.mhw-db.com/weapons/insect-glaive/adeb5e7f179d604903c4b09cf9987f4ab010a632.119abd643a28cc9a87cbd2f74844248f.png"
        }
    }
 ]

 module.exports = {
    glaiveData,
    createGlaive
 }