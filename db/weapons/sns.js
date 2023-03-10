const { client } = require("../client");

const createSns = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [sns]} = await client.query(`
        INSERT INTO sns(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return sns;
        
      } catch (error) {
        throw error
      }

    } 

const snsData = [
    {
         id: 170,
         type: "sword-and-shield",
         rarity: 1,
         attack: {
             display: 112,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hunter's Knife 1",
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
             craftable: true,
             previous: null,
             branches: [
                171
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 171,
         type: "sword-and-shield",
         rarity: 1,
         attack: {
             display: 126,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hunter's Knife 2",
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
             previous: 170,
             branches: [
                172,
                187,
                206
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 172,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hunter's Knife 3",
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
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 171,
             branches: [
                173
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 173,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Knife 1",
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
             previous: 172,
             branches: [
                174,
                180,
                184
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14ce2d48b71a2d8d98fb77d0af13a77f82eb0884.4e60f22b1e264d602f7d07d7af89ea18.png"
        }
    },
    {
         id: 174,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Knife 2",
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
         elements: [],
         crafting: {
             craftable: false,
             previous: 173,
             branches: [
                175
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14ce2d48b71a2d8d98fb77d0af13a77f82eb0884.4e60f22b1e264d602f7d07d7af89ea18.png"
        }
    },
    {
         id: 175,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Knife 3",
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
                 type: "sleep",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 174,
             branches: [
                176
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14ce2d48b71a2d8d98fb77d0af13a77f82eb0884.4e60f22b1e264d602f7d07d7af89ea18.png"
        }
    },
    {
         id: 176,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Slicer 1",
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
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "sleep",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 175,
             branches: [
                177,
                178
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14ce2d48b71a2d8d98fb77d0af13a77f82eb0884.4e60f22b1e264d602f7d07d7af89ea18.png"
        }
    },
    {
         id: 177,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Slicer 2",
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
                 type: "sleep",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 176,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14ce2d48b71a2d8d98fb77d0af13a77f82eb0884.4e60f22b1e264d602f7d07d7af89ea18.png"
        }
    },
    {
         id: 178,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Jack",
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
             previous: 176,
             branches: [
                179
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/925cb27795bc0f30e8a830b0b3b174d683f65fd1.a409ca96aa2566283fa85d4fb9abf980.png"
        }
    },
    {
         id: 179,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Eradication Vanguard",
         durability: [
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 100,
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
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 100,
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
            },
            {
                 red: 90,
                 orange: 120,
                 yellow: 40,
                 green: 50,
                 blue: 100,
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
             previous: 178,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/3c160ede7c2c031b755fd0d42b518a9d.36e5b784b1ca084c9bf1e626a03b959c3cd6e402.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/0a57376ee6958132bad51d7a6a3954a904617402.464dcd5ebeff2f637536371d02c55c85.png"
        }
    },
    {
         id: 180,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Knife 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 173,
             branches: [
                181
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/4fd46243665bb3039539b388ac22af8b41e3ff15.a2d334e63bdc930a2369d2a3c7bcb6c3.png"
        }
    },
    {
         id: 181,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Knife 2",
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
                 type: "fire",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 180,
             branches: [
                182
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/4fd46243665bb3039539b388ac22af8b41e3ff15.a2d334e63bdc930a2369d2a3c7bcb6c3.png"
        }
    },
    {
         id: 182,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Heat Edge",
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
                 type: "fire",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 181,
             branches: [
                183
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/d2aa559221ff274e2bf55a11d045b7965b0a06ee.ac40db780ae66e4df7bd902e1b6cfadf.png"
        }
    },
    {
         id: 183,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Corona",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 182,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/d2aa559221ff274e2bf55a11d045b7965b0a06ee.ac40db780ae66e4df7bd902e1b6cfadf.png"
        }
    },
    {
         id: 184,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Heavy Bang",
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
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 173,
             branches: [
                185
            ],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 482,
                         rarity: 5,
                         carryLimit: 99,
                         value: 0,
                         name: "Commendation",
                         description: "A ticket awarded for demonstrating courage. Collect them and something wonderful may happen!"
                    }
                },
                {
                     quantity: 1,
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
                     quantity: 2,
                     item: {
                         id: 331,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1060,
                         name: "Odogaron Claw",
                         description: "Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/a6dc675e9c275d6867ab7ce3dc166130b9dc8a13.dc262e0db22316a1d94f5aeb806d877a.png"
        }
    },
    {
         id: 185,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Heavy Bang+",
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
                 type: "thunder",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 184,
             branches: [
                186
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/a6dc675e9c275d6867ab7ce3dc166130b9dc8a13.dc262e0db22316a1d94f5aeb806d877a.png"
        }
    },
    {
         id: 186,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Master Bang",
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
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "thunder",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 185,
             branches: [],
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
                         id: 434,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4400,
                         name: "Daora Claw+",
                         description: "Rare Kushala Daora material. Mostly obtained by carving. Imbued with potent ice element."
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/a6dc675e9c275d6867ab7ce3dc166130b9dc8a13.dc262e0db22316a1d94f5aeb806d877a.png"
        }
    },
    {
         id: 187,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Messer 1",
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
                 type: "water",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 171,
             branches: [
                188,
                197,
                201
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 188,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Messer 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 187,
             branches: [
                189,
                193
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 189,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Messer 3",
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
             previous: 188,
             branches: [
                190
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5a840cbcadb5ce93fcb8b561be25e4157f0b8226.9768936caf3bdef1e9e3ce81cd1f6189.png"
        }
    },
    {
         id: 190,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rogue Wave 1",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 189,
             branches: [
                191
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e54b0d6a3d8e94d1490bd5aeaea69a7ebc0ca7fb.5a38aa9e2e32f8dd400648e5855a0d0d.png"
        }
    },
    {
         id: 191,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rogue Wave 2",
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
             previous: 190,
             branches: [
                192
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e54b0d6a3d8e94d1490bd5aeaea69a7ebc0ca7fb.5a38aa9e2e32f8dd400648e5855a0d0d.png"
        }
    },
    {
         id: 192,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rogue Wave 3",
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
             previous: 191,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e54b0d6a3d8e94d1490bd5aeaea69a7ebc0ca7fb.5a38aa9e2e32f8dd400648e5855a0d0d.png"
        }
    },
    {
         id: 193,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Grace 1",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 188,
             branches: [
                194
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5d639c6735ad1a343d26ffcfca56555082a7ddef.96f170b3e98363476ba8eee0a74b9e5b.png"
        }
    },
    {
         id: 194,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Grace 2",
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
                 type: "ice",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 193,
             branches: [
                195
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5d639c6735ad1a343d26ffcfca56555082a7ddef.96f170b3e98363476ba8eee0a74b9e5b.png"
        }
    },
    {
         id: 195,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rimespire",
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
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 194,
             branches: [
                196
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/63154f96f953b9cf0aa2cdf2a5a306f5b7c68092.a47f7d9fbd23a4a0d55111da1a900fdc.png"
        }
    },
    {
         id: 196,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Legia Rimespire",
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
                 rank: 1
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
             previous: 195,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/3c160ede7c2c031b755fd0d42b518a9d.36e5b784b1ca084c9bf1e626a03b959c3cd6e402.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/63154f96f953b9cf0aa2cdf2a5a306f5b7c68092.a47f7d9fbd23a4a0d55111da1a900fdc.png"
        }
    },
    {
         id: 197,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Princess Rapier",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 187,
             branches: [
                198
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/f9d9cb7fcb33daaef38bac4139975169ae67f639.2d2a877d74303523dd310edb60a5e3fa.png"
        }
    },
    {
         id: 198,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Queen Rapier",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 197,
             branches: [
                199
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/f9d9cb7fcb33daaef38bac4139975169ae67f639.2d2a877d74303523dd310edb60a5e3fa.png"
        }
    },
    {
         id: 199,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Queen Rose",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 198,
             branches: [
                200
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/7aeac60cb52a81536a909eddce75e5014a93772f.7f2f2ad35603093f4ef4275dcbdb3bb4.png"
        }
    },
    {
         id: 200,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Royal Rose",
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
                 type: "poison",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 199,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/7aeac60cb52a81536a909eddce75e5014a93772f.7f2f2ad35603093f4ef4275dcbdb3bb4.png"
        }
    },
    {
         id: 201,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lumu Knife 1",
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
             previous: 187,
             branches: [
                202
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/74c78d3d34d067a2101033e52312c5c6cbf21c5d.732b90ddd695b7f1e3521f65a9f4edc7.png"
        }
    },
    {
         id: 202,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lumu Knife 2",
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
             previous: 201,
             branches: [
                203
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/74c78d3d34d067a2101033e52312c5c6cbf21c5d.732b90ddd695b7f1e3521f65a9f4edc7.png"
        }
    },
    {
         id: 203,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lumu Tabar 1",
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
                 type: "blast",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 202,
             branches: [
                204
            ],
             craftingMaterials: [],
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/768fcfdb2b0db9500450a39b3679c59cafb90e3f.0c47843d05addeb73b02b3d4db6299a1.png"
        }
    },
    {
         id: 204,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lumu Tabar 2",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 203,
             branches: [
                205
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/768fcfdb2b0db9500450a39b3679c59cafb90e3f.0c47843d05addeb73b02b3d4db6299a1.png"
        }
    },
    {
         id: 205,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lumu Tabar 3",
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
                 type: "blast",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 204,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/768fcfdb2b0db9500450a39b3679c59cafb90e3f.0c47843d05addeb73b02b3d4db6299a1.png"
        }
    },
    {
         id: 206,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Knife 1",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 171,
             branches: [
                207,
                212
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5f27cb18d5a6cf6a6a7e1ba2063bbecd9a1b86fa.ae8efb7e72eaa960ab3fb5950da94652.png"
        }
    },
    {
         id: 207,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Knife 2",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 206,
             branches: [
                208
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5f27cb18d5a6cf6a6a7e1ba2063bbecd9a1b86fa.ae8efb7e72eaa960ab3fb5950da94652.png"
        }
    },
    {
         id: 208,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Knife 3",
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
             previous: 207,
             branches: [
                209
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5f27cb18d5a6cf6a6a7e1ba2063bbecd9a1b86fa.ae8efb7e72eaa960ab3fb5950da94652.png"
        }
    },
    {
         id: 209,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blossom 1",
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
             craftable: false,
             previous: 208,
             branches: [
                210
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/88c3f4a8b2023775df4951cdbc7c97a7865d909e.4b023635f7741649c6fd90ba87164123.png"
        }
    },
    {
         id: 210,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blossom 2",
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
             previous: 209,
             branches: [
                211
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/88c3f4a8b2023775df4951cdbc7c97a7865d909e.4b023635f7741649c6fd90ba87164123.png"
        }
    },
    {
         id: 211,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Blossom 3",
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
             previous: 210,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/88c3f4a8b2023775df4951cdbc7c97a7865d909e.4b023635f7741649c6fd90ba87164123.png"
        }
    },
    {
         id: 212,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Girros Knife 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 206,
             branches: [
                213
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/0a60ee0edbcf982ff3d8f2ff0277c5db8fd08941.7b851e463aee08f463dd243f002b3729.png"
        }
    },
    {
         id: 213,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Girros Knife 2",
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
                 type: "paralysis",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 212,
             branches: [
                214
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/0a60ee0edbcf982ff3d8f2ff0277c5db8fd08941.7b851e463aee08f463dd243f002b3729.png"
        }
    },
    {
         id: 214,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Tabar 1",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 213,
             branches: [
                215
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/273eb369683018f3fc0d605f687040e3b36a719b.7e8f05b7508434f3e0c35b1985407f04.png"
        }
    },
    {
         id: 215,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Tabar 2",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 214,
             branches: [
                216
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/273eb369683018f3fc0d605f687040e3b36a719b.7e8f05b7508434f3e0c35b1985407f04.png"
        }
    },
    {
         id: 216,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Malady's Tabar 3",
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
             previous: 215,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/273eb369683018f3fc0d605f687040e3b36a719b.7e8f05b7508434f3e0c35b1985407f04.png"
        }
    },
    {
         id: 217,
         type: "sword-and-shield",
         rarity: 1,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Kukri 1",
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
             craftable: true,
             previous: null,
             branches: [
                218
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 218,
         type: "sword-and-shield",
         rarity: 1,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Kukri 2",
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
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 217,
             branches: [
                219,
                230,
                241
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 219,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Kukri 3",
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
             previous: 218,
             branches: [
                220,
                225
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 220,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chief Kukri 1",
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
             previous: 219,
             branches: [
                221
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 221,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chief Kukri 2",
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
             previous: 220,
             branches: [
                222
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 222,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chief Kukri 3",
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
                 type: "paralysis",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 221,
             branches: [
                223
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/d06a8086a78ab02be8325c9d26ec7d3565fa3991.2dc08c49d58d161bef061af282599d46.png"
        }
    },
    {
         id: 223,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Grand Barong 1",
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
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 222,
             branches: [
                224
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/49bd1962174af867b31af456c9bbbf49b7112475.5e7c2fb60c764b2a9c09bf5bdbb5f1d0.png"
        }
    },
    {
         id: 224,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Grand Barong 2",
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
         slots: [
            {
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 223,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/49bd1962174af867b31af456c9bbbf49b7112475.5e7c2fb60c764b2a9c09bf5bdbb5f1d0.png"
        }
    },
    {
         id: 225,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Spiked Edge 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 219,
             branches: [
                226
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e7fe368d4bf40fa75f51f1e7cc979546a47caad8.4c65a870310ee7c80efc6b803aa43379.png"
        }
    },
    {
         id: 226,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Spiked Edge 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 225,
             branches: [
                227
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e7fe368d4bf40fa75f51f1e7cc979546a47caad8.4c65a870310ee7c80efc6b803aa43379.png"
        }
    },
    {
         id: 227,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Baan Claw 1",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 226,
             branches: [
                228
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/1b0766aa64ce4f5ba355a097a3cf8b8592a95061.f67d359416c4eaf90523c159afb4ec5e.png"
        }
    },
    {
         id: 228,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Baan Claw 2",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 227,
             branches: [
                229
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/1b0766aa64ce4f5ba355a097a3cf8b8592a95061.f67d359416c4eaf90523c159afb4ec5e.png"
        }
    },
    {
         id: 229,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Baan Claw 3",
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
             previous: 228,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/1b0766aa64ce4f5ba355a097a3cf8b8592a95061.f67d359416c4eaf90523c159afb4ec5e.png"
        }
    },
    {
         id: 230,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Edge 1",
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
             previous: 218,
             branches: [
                231,
                236
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/70623ebb80e07def749f26739ab0b718ff627fef.02a2052dfc53ccded3b8ff39645ec829.png"
        }
    },
    {
         id: 231,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Edge 2",
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
             previous: 230,
             branches: [
                232
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/70623ebb80e07def749f26739ab0b718ff627fef.02a2052dfc53ccded3b8ff39645ec829.png"
        }
    },
    {
         id: 232,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Edge 3",
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
             previous: 231,
             branches: [
                233
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/70623ebb80e07def749f26739ab0b718ff627fef.02a2052dfc53ccded3b8ff39645ec829.png"
        }
    },
    {
         id: 233,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Garotte 1",
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
                 rank: 1
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
             previous: 232,
             branches: [
                234
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/6eed01a358954c80a4ff507cc56befd7a8a01e92.d757c875a5324519bdd89d60f58200ea.png"
        }
    },
    {
         id: 234,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Garotte 2",
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
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 233,
             branches: [
                235
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/6eed01a358954c80a4ff507cc56befd7a8a01e92.d757c875a5324519bdd89d60f58200ea.png"
        }
    },
    {
         id: 235,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jagras Garotte 3",
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
         slots: [
            {
                 rank: 3
            },
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 234,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/6eed01a358954c80a4ff507cc56befd7a8a01e92.d757c875a5324519bdd89d60f58200ea.png"
        }
    },
    {
         id: 236,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Edge 1",
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
                 type: "thunder",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 230,
             branches: [
                237
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 237,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Edge 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 236,
             branches: [
                238
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/90b64c4e443aa57de7c0c573c46a31e5aecfa1d1.1ac1f33e80e9f3e5467bb9e0f84a9249.png"
        }
    },
    {
         id: 238,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Nemesis 1",
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
                 type: "thunder",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 237,
             branches: [
                239
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/c8f4d01c9ab9f192e74158c4852931da14ac5d52.d6aa60042bb819f191d942c5a99a82ad.png"
        }
    },
    {
         id: 239,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Nemesis 2",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 238,
             branches: [
                240
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/c8f4d01c9ab9f192e74158c4852931da14ac5d52.d6aa60042bb819f191d942c5a99a82ad.png"
        }
    },
    {
         id: 240,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Nemesis 3",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 239,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/c8f4d01c9ab9f192e74158c4852931da14ac5d52.d6aa60042bb819f191d942c5a99a82ad.png"
        }
    },
    {
         id: 241,
         type: "sword-and-shield",
         rarity: 2,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Edge 1",
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
             previous: 218,
             branches: [
                242,
                247
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/bba6138275380056204165eb9ed5d9cb.2e880e7ffa9e558cef1365b0d2e492a092f399a8.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/fb6aaefc16c0ba4ffd12d180f3b4f1d488cac331.b057449e396c2a016879e8bc2a4ae4d1.png"
        }
    },
    {
         id: 242,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Edge 2",
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
             previous: 241,
             branches: [
                243
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/fb6aaefc16c0ba4ffd12d180f3b4f1d488cac331.b057449e396c2a016879e8bc2a4ae4d1.png"
        }
    },
    {
         id: 243,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Edge 3",
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
             previous: 242,
             branches: [
                244
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/fb6aaefc16c0ba4ffd12d180f3b4f1d488cac331.b057449e396c2a016879e8bc2a4ae4d1.png"
        }
    },
    {
         id: 244,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Club 1",
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
                 type: "paralysis",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 243,
             branches: [
                245
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e7c5c6db4396ed99766590d00200507b047db7b8.6c15110796a527f7c04fa081633f5645.png"
        }
    },
    {
         id: 245,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Club 2",
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
                 type: "paralysis",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 244,
             branches: [
                246
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e7c5c6db4396ed99766590d00200507b047db7b8.6c15110796a527f7c04fa081633f5645.png"
        }
    },
    {
         id: 246,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Club 3",
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
                 rank: 1
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
             previous: 245,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/e7c5c6db4396ed99766590d00200507b047db7b8.6c15110796a527f7c04fa081633f5645.png"
        }
    },
    {
         id: 247,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Edge 1",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 241,
             branches: [
                248
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/51c611471319fe855cb719ebe86ee0ccbb622221.4810c4284099c8144a52e439e2a83e80.png"
        }
    },
    {
         id: 248,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Edge 2",
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
                 type: "fire",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 247,
             branches: [
                249
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/51c611471319fe855cb719ebe86ee0ccbb622221.4810c4284099c8144a52e439e2a83e80.png"
        }
    },
    {
         id: 249,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Flammensucher",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 248,
             branches: [
                250
            ],
             craftingMaterials: [
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
                     quantity: 6,
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
                     quantity: 6,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/c0e9b58e8d6a215a37643547f533ab569b0deb9b.5f63b1a82692405186b285558e118e8d.png"
        }
    },
    {
         id: 250,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gnashing Flammensucher",
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
             previous: 249,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/c0e9b58e8d6a215a37643547f533ab569b0deb9b.5f63b1a82692405186b285558e118e8d.png"
        }
    },
    {
         id: 251,
         type: "sword-and-shield",
         rarity: 3,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Sword 1",
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
                252
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/28bb2de8654f3379fe9a799be87ef492eebbb088.4b8dbe4279491bbfcb0ab24ec17c1c40.png"
        }
    },
    {
         id: 252,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Sword 2",
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
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 251,
             branches: [
                253
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/28bb2de8654f3379fe9a799be87ef492eebbb088.4b8dbe4279491bbfcb0ab24ec17c1c40.png"
        }
    },
    {
         id: 253,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Sword 3",
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
                 damage: 450,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 252,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/28bb2de8654f3379fe9a799be87ef492eebbb088.4b8dbe4279491bbfcb0ab24ec17c1c40.png"
        }
    },
    {
         id: 254,
         type: "sword-and-shield",
         rarity: 4,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Fulminator",
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
         slots: [],
         elements: [
            {
                 type: "thunder",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 257,
             branches: [
                255
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/1dc382aecfd1130feb521174e3dcafaa.4a7fd2f651fb5a22bf32e723acbc29a9b96d4c14.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5b09777c17e0fbae892e919c6f7a47aa4ee703a9.c3017039871e39a275cc5d73d775aa27.png"
        }
    },
    {
         id: 255,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunderbolt Sword 1",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 254,
             branches: [
                256
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/a1516f545d1f8301db0c89abc94dcbbee6f3c835.1f5523d97773923b91c5124f631ca816.png"
        }
    },
    {
         id: 256,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunderbolt Sword 2",
         durability: [
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 110,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 20,
                 yellow: 20,
                 green: 130,
                 blue: 120,
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
             previous: 255,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/a1516f545d1f8301db0c89abc94dcbbee6f3c835.1f5523d97773923b91c5124f631ca816.png"
        }
    },
    {
         id: 257,
         type: "sword-and-shield",
         rarity: 5,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Sword 1",
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
                258
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/5aa4ffd36cdf053b26dbc2aedb2dfcd3.200f3e51ab3202f6231e685c5e2610faacbf1393.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/43c30f97809ac77ad846d6de5f6d220dcfe88b9b.5f3845b3b156929076af683cf38705ae.png"
        }
    },
    {
         id: 258,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Sword 2",
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
             previous: 257,
             branches: [
                259,
                261
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/43c30f97809ac77ad846d6de5f6d220dcfe88b9b.5f3845b3b156929076af683cf38705ae.png"
        }
    },
    {
         id: 259,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Teostra's Spada",
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
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 258,
             branches: [
                260
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/dc38b8c2dce682d5c8152b5bef2f08271af980b7.d2b4901c936211ab7814925df1564e7f.png"
        }
    },
    {
         id: 260,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Teostra's Emblem",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 259,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/3c160ede7c2c031b755fd0d42b518a9d.36e5b784b1ca084c9bf1e626a03b959c3cd6e402.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/dc38b8c2dce682d5c8152b5bef2f08271af980b7.d2b4901c936211ab7814925df1564e7f.png"
        }
    },
    {
         id: 261,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Xeno Mabura",
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 258,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/3c160ede7c2c031b755fd0d42b518a9d.36e5b784b1ca084c9bf1e626a03b959c3cd6e402.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/da04d5add993478cd99d01ace1377a3065c48d3a.7b78449b717214adb45225c6f0ed6f49.png"
        }
    },
    {
         id: 1154,
         type: "sword-and-shield",
         rarity: 6,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Fatal Jho",
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
                1155
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/4a6cf9896a5af9fbab1bd2fe08197581.9a047b43213afdea09a370cbfaa287ed126016da.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14e5f0e02e560eb357d4b94620af691ec9850fb5.c964de2922f409d9713c8134924c6421.png"
        }
    },
    {
         id: 1155,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 308,
             raw: 220
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Fatal Bite",
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
             previous: 1154,
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
             icon: "https://assets.mhw-db.com/weapons/sword-and-shield/icons/370a1c40a04a7e213b9a45f6acebe8ef.ebb5bd007e8c57e2825215754e8617b83fd4da04.png",
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/14e5f0e02e560eb357d4b94620af691ec9850fb5.c964de2922f409d9713c8134924c6421.png"
        }
    },
    {
         id: 1192,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Edge",
         durability: [
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 100,
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1193,
                1194,
                1195
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
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5fa3f980c37eebfd74e0ffa20288bf66d2947a12.b349d603becc354c7378be5043677c51.png"
        }
    },
    {
         id: 1193,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Edge \"Blaze\"",
         durability: [
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 100,
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
             craftable: false,
             previous: 1192,
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
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/5fa3f980c37eebfd74e0ffa20288bf66d2947a12.b349d603becc354c7378be5043677c51.png"
        }
    },
    {
         id: 1194,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Edge \"Ruin\"",
         durability: [
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 100,
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1192,
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
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/15bb2c0b2c9ab518eda68cc11e768e1237bb3f9e.226e56774e7ef9d478f8ee74418cb640.png"
        }
    },
    {
         id: 1195,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Edge \"Styx\"",
         durability: [
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
                 purple: 0
            },
            {
                 red: 90,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 100,
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1192,
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
             image: "https://assets.mhw-db.com/weapons/sword-and-shield/94a1cb24092219821b1a73c381a02ea3dd1b2266.ee2be88009bcfa78f5f640382e299751.png"
        }
    },
    {
         id: 1297,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: null,
         attributes: {
             affinity: "-20",
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Slicer \"Rage\"",
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1298,
         type: "sword-and-shield",
         rarity: 7,
         attack: {
             display: 308,
             raw: 220
        },
         elderseal: null,
         attributes: {
             affinity: "-10",
             defense: 25,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Slicer \"Mud\"",
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
                 rank: 1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1299,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Slicer \"Water\"",
         durability: [
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
                 white: 20,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
                 white: 30,
                 purple: 0
            },
            {
                 red: 170,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
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
                 type: "water",
                 damage: 420,
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
         id: 1300,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Slicer \"Fire\"",
         durability: [
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 50,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 60,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 70,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 80,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 90,
                 purple: 0
            },
            {
                 red: 210,
                 orange: 20,
                 yellow: 20,
                 green: 20,
                 blue: 30,
                 white: 100,
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
                 damage: 390,
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
         id: 1301,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"Numb\"",
         durability: [
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 30,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 40,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 120,
                 yellow: 80,
                 green: 60,
                 blue: 50,
                 white: 50,
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
    },
    {
         id: 1302,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"Blast\"",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
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
    },
    {
         id: 1303,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: "10",
             elderseal: "low",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"Dragon\"",
         durability: [
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 90,
                 white: 20,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 90,
                 white: 30,
                 purple: 0
            },
            {
                 red: 160,
                 orange: 70,
                 yellow: 20,
                 green: 20,
                 blue: 90,
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
                 damage: 360,
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
    },
    {
         id: 1304,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "15",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"King\"",
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
                 type: "fire",
                 damage: 240,
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
    },
    {
         id: 1305,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"Myth\"",
         durability: [
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 80,
                 white: 20,
                 purple: 0
            },
            {
                 red: 130,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 80,
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
    },
    {
         id: 1306,
         type: "sword-and-shield",
         rarity: 8,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: "10",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Slicer \"Stream\"",
         durability: [
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 40,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 50,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 60,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 70,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 80,
                 purple: 0
            },
            {
                 red: 100,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 40,
                 white: 90,
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
                 damage: 300,
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
     snsData,
     createSns
 }