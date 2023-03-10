const { client } = require("../client");

const createLance = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [lance]} = await client.query(`
        INSERT INTO lance(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return lance;
        
      } catch (error) {
        throw error
      }

    } 

const lanceData = [
    {
         id: 514,
         type: "lance",
         rarity: 1,
         attack: {
             display: 184,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Lance 1",
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
                515
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/608d7256766f3f26ca8e8979a85eae389beea351.204d6c9790d339865409ba41256c47d3.png"
        }
    },
    {
         id: 515,
         type: "lance",
         rarity: 1,
         attack: {
             display: 207,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Lance 2",
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
             previous: 514,
             branches: [
                516,
                528,
                541
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/608d7256766f3f26ca8e8979a85eae389beea351.204d6c9790d339865409ba41256c47d3.png"
        }
    },
    {
         id: 516,
         type: "lance",
         rarity: 2,
         attack: {
             display: 230,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Iron Lance 3",
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
             previous: 515,
             branches: [
                517
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/608d7256766f3f26ca8e8979a85eae389beea351.204d6c9790d339865409ba41256c47d3.png"
        }
    },
    {
         id: 517,
         type: "lance",
         rarity: 3,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Lance 1",
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
             previous: 516,
             branches: [
                518,
                524
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"
        }
    },
    {
         id: 518,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Lance 2",
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
             previous: 517,
             branches: [
                519
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/22b1c9e311acabfa719299338ffe99ace24018b4.6bf8701934992cfd5595f94097677f28.png"
        }
    },
    {
         id: 519,
         type: "lance",
         rarity: 5,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Steel Lance 3",
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
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 518,
             branches: [
                520
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/armor/9067d30515d01c6739160f65c680f49c12bf0c06.d20ffa258ec987a3638a7f6bb4c63761.png"
        }
    },
    {
         id: 520,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Lance 1",
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
                 type: "paralysis",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 519,
             branches: [
                521,
                522
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/ba16475736a719d2c8511dded84aa115891e93cd.91e571fe531eb3b17fc44a9761ed0e04.png"
        }
    },
    {
         id: 521,
         type: "lance",
         rarity: 6,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Lance 2",
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
             previous: 520,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/ba16475736a719d2c8511dded84aa115891e93cd.91e571fe531eb3b17fc44a9761ed0e04.png"
        }
    },
    {
         id: 522,
         type: "lance",
         rarity: 7,
         attack: {
             display: 460,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Impaler",
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
             previous: 520,
             branches: [
                523
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/6e75891cf205d30e48891e29e35b54dc8fd6824d.1202103d98cb1ecf2442cc2884d4219e.png"
        }
    },
    {
         id: 523,
         type: "lance",
         rarity: 8,
         attack: {
             display: 483,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Perdition's Hand",
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
             previous: 522,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/780a81a7a445e114c271073229dd551ff6227a73.d925a3132d890aa257ca1c4608608349.png"
        }
    },
    {
         id: 524,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Lance 1",
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
                 type: "ice",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 517,
             branches: [
                525
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/964af9c5485832e4f533310d96a6813b11a925e3.36177ac31371a5c4c4598daa033519d4.png"
        }
    },
    {
         id: 525,
         type: "lance",
         rarity: 5,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Glacial Lance 2",
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
                 type: "ice",
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 524,
             branches: [
                526
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/964af9c5485832e4f533310d96a6813b11a925e3.36177ac31371a5c4c4598daa033519d4.png"
        }
    },
    {
         id: 526,
         type: "lance",
         rarity: 6,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Legiana Halberd 1",
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
                 type: "ice",
                 damage: 330,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 525,
             branches: [
                527
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/3366fe0644aff0e727c74ef1998081edc0c3564a.94e2975cdbcb3881a8a1dcdbaa09b480.png"
        }
    },
    {
         id: 527,
         type: "lance",
         rarity: 7,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Legiana Halberd 2",
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
             previous: 526,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/3366fe0644aff0e727c74ef1998081edc0c3564a.94e2975cdbcb3881a8a1dcdbaa09b480.png"
        }
    },
    {
         id: 528,
         type: "lance",
         rarity: 2,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kulu Lance 1",
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
             previous: 515,
             branches: [
                529,
                536
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/b5e3e75418856bf53cb9cc34b4597fef0fda915a.4d6c576681480427a92df8aa73975c71.png"
        }
    },
    {
         id: 529,
         type: "lance",
         rarity: 3,
         attack: {
             display: 276,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kulu Lance 2",
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
             previous: 528,
             branches: [
                530
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/b5e3e75418856bf53cb9cc34b4597fef0fda915a.4d6c576681480427a92df8aa73975c71.png"
        }
    },
    {
         id: 530,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Kulu Lance 3",
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
             previous: 529,
             branches: [
                531
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/b5e3e75418856bf53cb9cc34b4597fef0fda915a.4d6c576681480427a92df8aa73975c71.png"
        }
    },
    {
         id: 531,
         type: "lance",
         rarity: 5,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "sever",
         name: "Kulu Hasta 1",
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
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 530,
             branches: [
                532,
                534
            ],
             craftingMaterials: [
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
                     quantity: 6,
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
                }
            ],
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/b1ce6f46d37c0e812d1c3c3dda45a77de58ba6c8.f782a48a937e2932b0ecea64c2037c20.png"
        }
    },
    {
         id: 532,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "sever",
         name: "Kulu Hasta 2",
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
                 type: "sleep",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 531,
             branches: [
                533
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/b1ce6f46d37c0e812d1c3c3dda45a77de58ba6c8.f782a48a937e2932b0ecea64c2037c20.png"
        }
    },
    {
         id: 533,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 25
        },
         damageType: "sever",
         name: "Kulu Hasta 3",
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
                 type: "sleep",
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 532,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/b1ce6f46d37c0e812d1c3c3dda45a77de58ba6c8.f782a48a937e2932b0ecea64c2037c20.png"
        }
    },
    {
         id: 534,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gama Pilebunker 1",
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
             previous: 531,
             branches: [
                535
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/afd6ddaba565390700fb87fbeb4c10c3d9bf8466.d68eadf2fe66f2a742f3be0342b16777.png"
        }
    },
    {
         id: 535,
         type: "lance",
         rarity: 7,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Gama Pilebunker 2",
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
             previous: 534,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/afd6ddaba565390700fb87fbeb4c10c3d9bf8466.d68eadf2fe66f2a742f3be0342b16777.png"
        }
    },
    {
         id: 536,
         type: "lance",
         rarity: 3,
         attack: {
             display: 276,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Lance 1",
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
                 type: "thunder",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 528,
             branches: [
                537
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/7724f68e0e599f4978fdf89ad70823783675acd1.25778a6c762d28001956d551758b3381.png"
        }
    },
    {
         id: 537,
         type: "lance",
         rarity: 4,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Thunder Lance 2",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 536,
             branches: [
                538
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/7724f68e0e599f4978fdf89ad70823783675acd1.25778a6c762d28001956d551758b3381.png"
        }
    },
    {
         id: 538,
         type: "lance",
         rarity: 5,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Spire 1",
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
             previous: 537,
             branches: [
                539
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/a157d0248cdd3cb3b522b062983e3c24dabb6ecc.b7fde76757fd7a097f3d22cc4f354a2a.png"
        }
    },
    {
         id: 539,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Spire 2",
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
             previous: 538,
             branches: [
                540
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/a157d0248cdd3cb3b522b062983e3c24dabb6ecc.b7fde76757fd7a097f3d22cc4f354a2a.png"
        }
    },
    {
         id: 540,
         type: "lance",
         rarity: 6,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lightning Spire 3",
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
                 type: "thunder",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 539,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/a157d0248cdd3cb3b522b062983e3c24dabb6ecc.b7fde76757fd7a097f3d22cc4f354a2a.png"
        }
    },
    {
         id: 541,
         type: "lance",
         rarity: 2,
         attack: {
             display: 230,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Lance 1",
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
             previous: 515,
             branches: [
                542
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/7c4bf33657b6724c80306dc6d7dd869b603cfcdc.c504b9a6778a367932048fc777d25bbf.png"
        }
    },
    {
         id: 542,
         type: "lance",
         rarity: 3,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Lance 2",
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
             previous: 541,
             branches: [
                543,
                547
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/7c4bf33657b6724c80306dc6d7dd869b603cfcdc.c504b9a6778a367932048fc777d25bbf.png"
        }
    },
    {
         id: 543,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blooming Lance 3",
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
             previous: 542,
             branches: [
                544
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/7c4bf33657b6724c80306dc6d7dd869b603cfcdc.c504b9a6778a367932048fc777d25bbf.png"
        }
    },
    {
         id: 544,
         type: "lance",
         rarity: 5,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Pike 1",
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
             previous: 543,
             branches: [
                545
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/4500039ad389691d6f959f256c01ba39dde1457a.3ceb6cdb7fc348ca4624be25c6c1dd14.png"
        }
    },
    {
         id: 545,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Pike 2",
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
                 type: "poison",
                 damage: 480,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 544,
             branches: [
                546
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/4500039ad389691d6f959f256c01ba39dde1457a.3ceb6cdb7fc348ca4624be25c6c1dd14.png"
        }
    },
    {
         id: 546,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Datura Pike 3",
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
                 type: "poison",
                 damage: 540,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 545,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/4500039ad389691d6f959f256c01ba39dde1457a.3ceb6cdb7fc348ca4624be25c6c1dd14.png"
        }
    },
    {
         id: 547,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Lance 1",
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
                 type: "fire",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 542,
             branches: [
                548
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/971ddb2caeb6c8bcfae2c6ecf2207c5894d0e24c.45f242992524b6c98719e15aca3c600c.png"
        }
    },
    {
         id: 548,
         type: "lance",
         rarity: 5,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Flame Lance 2",
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
             previous: 547,
             branches: [
                549
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/971ddb2caeb6c8bcfae2c6ecf2207c5894d0e24c.45f242992524b6c98719e15aca3c600c.png"
        }
    },
    {
         id: 549,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Red Tail",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 548,
             branches: [
                550
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/6e3732e6a4bc75e4f8ade67bface1f1c5f39818a.37ddbefe1dd526d077c665de862d1b11.png"
        }
    },
    {
         id: 550,
         type: "lance",
         rarity: 7,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Blue Tail",
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
             previous: 549,
             branches: [
                551
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/b70453c1888dd3a37f32a9a2c66cabbaf3fb9438.1a971ef0351feb5734846d008daa3472.png"
        }
    },
    {
         id: 551,
         type: "lance",
         rarity: 8,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Blue Prominence",
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
                 damage: 300,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 550,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/b70453c1888dd3a37f32a9a2c66cabbaf3fb9438.1a971ef0351feb5734846d008daa3472.png"
        }
    },
    {
         id: 552,
         type: "lance",
         rarity: 1,
         attack: {
             display: 207,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Lance 1",
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
                553
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/aac48932703921596946651679cf22050026fc09.3083c63729513a3cfbab47a7dfc031cf.png"
        }
    },
    {
         id: 553,
         type: "lance",
         rarity: 2,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Lance 2",
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
             previous: 553,
             branches: [
                553,
                567,
                577
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/aac48932703921596946651679cf22050026fc09.3083c63729513a3cfbab47a7dfc031cf.png"
        }
    },
    {
         id: 554,
         type: "lance",
         rarity: 2,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: null,
         name: "Bone Lance 3",
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
             previous: 553,
             branches: [
                555,
                562
            ],
             craftingMaterials: [],
            upgradeMaterials: [
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/aac48932703921596946651679cf22050026fc09.3083c63729513a3cfbab47a7dfc031cf.png"
        }
    },
    {
         id: 555,
         type: "lance",
         rarity: 3,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Lance 1",
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
             previous: 554,
             branches: [
                556
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/d414be2539b0c87a4f3b1f11505f619576a79b79.db7e5ae142d2f5ef29a2694e0707d1bc.png"
        }
    },
    {
         id: 556,
         type: "lance",
         rarity: 4,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Lance 2",
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
             previous: 555,
             branches: [
                557
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/d414be2539b0c87a4f3b1f11505f619576a79b79.db7e5ae142d2f5ef29a2694e0707d1bc.png"
        }
    },
    {
         id: 557,
         type: "lance",
         rarity: 5,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Hard Bone Lance 3",
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
                 type: "poison",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 556,
             branches: [
                558
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/d414be2539b0c87a4f3b1f11505f619576a79b79.db7e5ae142d2f5ef29a2694e0707d1bc.png"
        }
    },
    {
         id: 558,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Heavy Bone Lance 1",
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
                 type: "poison",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 557,
             branches: [
                559,
                560
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/d414be2539b0c87a4f3b1f11505f619576a79b79.db7e5ae142d2f5ef29a2694e0707d1bc.png"
        }
    },
    {
         id: 559,
         type: "lance",
         rarity: 6,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Heavy Bone Lance 2",
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
                 type: "poison",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 558,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/d414be2539b0c87a4f3b1f11505f619576a79b79.db7e5ae142d2f5ef29a2694e0707d1bc.png"
        }
    },
    {
         id: 560,
         type: "lance",
         rarity: 7,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Hazak W??chter",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 558,
             branches: [
                561
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/264afe6a98efa1665194c5268e718ab7cd7bd466.ca9a87e191cb980076bfe6802a98feb5.png"
        }
    },
    {
         id: 561,
         type: "lance",
         rarity: 8,
         attack: {
             display: 460,
             raw: 200
        },
         elderseal: "average",
         attributes: {},
         damageType: "sever",
         name: "Love's Sorrow",
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
             previous: 560,
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
                         id: 416,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4600,
                         name: "Vaal Hazak Fang+",
                         description: "Rare Vaal Hazak material. Obtained by breaking its head. Sharp, used in many weapons."
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/2f1316554e76db8298b7a00a138e153f50adebac.249f492f9d6ddffcd428674f77a33631.png"
        }
    },
    {
         id: 562,
         type: "lance",
         rarity: 3,
         attack: {
             display: 276,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Taurus Lance 1",
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
             previous: 554,
             branches: [
                563
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/dd78fea3a47104bf25b292823658b19afc90ccd2.6e490d4860feb05f8a95470d1827c4eb.png"
        }
    },
    {
         id: 563,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Taurus Lance 2",
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
             previous: 562,
             branches: [
                564
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/dd78fea3a47104bf25b292823658b19afc90ccd2.6e490d4860feb05f8a95470d1827c4eb.png"
        }
    },
    {
         id: 564,
         type: "lance",
         rarity: 5,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Stinger 1",
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
                 type: "blast",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 563,
             branches: [
                565
            ],
             craftingMaterials: [
                {
                     quantity: 6,
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
                         id: 184,
                         rarity: 4,
                         carryLimit: 99,
                         value: 360,
                         name: "Hornetaur Head",
                         description: "Hornetaur material. Obtained by carving. Unusual, used in select gear."
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/0182bd9f1ff7573c65853596b3b6cf0489f4e39d.162de206455a416fc871cc340bb036ba.png"
        }
    },
    {
         id: 565,
         type: "lance",
         rarity: 6,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Stinger 2",
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
                 rank: 3
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
             previous: 564,
             branches: [
                566
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/0182bd9f1ff7573c65853596b3b6cf0489f4e39d.162de206455a416fc871cc340bb036ba.png"
        }
    },
    {
         id: 566,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Stinger 3",
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
             previous: 565,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/0182bd9f1ff7573c65853596b3b6cf0489f4e39d.162de206455a416fc871cc340bb036ba.png"
        }
    },
    {
         id: 567,
         type: "lance",
         rarity: 2,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Lance 1",
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
             previous: 553,
             branches: [
                568
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/4ce97aaf5b82579d90828e37188935ad4a87918f.6a6665af59b43ed2669834dee3ac13a2.png"
        }
    },
    {
         id: 568,
         type: "lance",
         rarity: 3,
         attack: {
             display: 276,
             raw: 120
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Lance 2",
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
             previous: 567,
             branches: [
                569,
                573
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/4ce97aaf5b82579d90828e37188935ad4a87918f.6a6665af59b43ed2669834dee3ac13a2.png"
        }
    },
    {
         id: 569,
         type: "lance",
         rarity: 4,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Carapace Lance 3",
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
             previous: 568,
             branches: [
                570
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/4ce97aaf5b82579d90828e37188935ad4a87918f.6a6665af59b43ed2669834dee3ac13a2.png"
        }
    },
    {
         id: 570,
         type: "lance",
         rarity: 5,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Stinger 1",
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
                 damage: 300,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 569,
             branches: [
                571
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/114edba449020ce27ac16b1d6f74fe3533447445.5b57c3d3d03fa047e5bf027ed5ed0bb3.png"
        }
    },
    {
         id: 571,
         type: "lance",
         rarity: 6,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Stinger 2",
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
             previous: 570,
             branches: [
                572
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/114edba449020ce27ac16b1d6f74fe3533447445.5b57c3d3d03fa047e5bf027ed5ed0bb3.png"
        }
    },
    {
         id: 572,
         type: "lance",
         rarity: 6,
         attack: {
             display: 460,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Barroth Stinger 3",
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
                 damage: 360,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 571,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/114edba449020ce27ac16b1d6f74fe3533447445.5b57c3d3d03fa047e5bf027ed5ed0bb3.png"
        }
    },
    {
         id: 573,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Garon Lance 1",
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
             previous: 568,
             branches: [
                574
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/9f090dd004ee644482b3a705a24d5431a637fcb6.5c8e766ea62e4ee4034bdc44fb0a848d.png"
        }
    },
    {
         id: 574,
         type: "lance",
         rarity: 5,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Garon Lance 2",
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
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 573,
             branches: [
                575
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/9f090dd004ee644482b3a705a24d5431a637fcb6.5c8e766ea62e4ee4034bdc44fb0a848d.png"
        }
    },
    {
         id: 575,
         type: "lance",
         rarity: 6,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "sever",
         name: "Garon Dhara 1",
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
                 type: "fire",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 574,
             branches: [
                576
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/a6490c9ce80a112d32dac9dff73f36fd72c627c9.4e33c6f50ce2d7e5f1735043b88a4039.png"
        }
    },
    {
         id: 576,
         type: "lance",
         rarity: 7,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "sever",
         name: "Garon Dhara 2",
         durability: [
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 30,
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
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 30,
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
            },
            {
                 red: 170,
                 orange: 100,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 30,
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
         slots: [],
         elements: [
            {
                 type: "fire",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 575,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/a6490c9ce80a112d32dac9dff73f36fd72c627c9.4e33c6f50ce2d7e5f1735043b88a4039.png"
        }
    },
    {
         id: 577,
         type: "lance",
         rarity: 2,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Horn 1",
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
         elements: [
            {
                 type: "water",
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 553,
             branches: [
                578
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/a3cf3634996a08ec16b6157c0005c5f41722ec66.fbc1b7cdc7dbfeceba5678e6279423c1.png"
        }
    },
    {
         id: 578,
         type: "lance",
         rarity: 3,
         attack: {
             display: 276,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Horn 2",
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
             previous: 577,
             branches: [
                579
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/e04c5d1a416b9725f0c777cfc32cbf30.f2223ca278f456e522fdfb05d7c324b533731e22.png",
             image: "https://assets.mhw-db.com/weapons/lance/a3cf3634996a08ec16b6157c0005c5f41722ec66.fbc1b7cdc7dbfeceba5678e6279423c1.png"
        }
    },
    {
         id: 579,
         type: "lance",
         rarity: 4,
         attack: {
             display: 322,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Aqua Horn 3",
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
             previous: 578,
             branches: [
                580
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/a3cf3634996a08ec16b6157c0005c5f41722ec66.fbc1b7cdc7dbfeceba5678e6279423c1.png"
        }
    },
    {
         id: 580,
         type: "lance",
         rarity: 5,
         attack: {
             display: 345,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Spike 1",
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
             previous: 579,
             branches: [
                581
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/15d908422d768e64556c51d462e9efb98b157694.0b232f1add24d7c5459ab9aa6cf6b15b.png"
        }
    },
    {
         id: 581,
         type: "lance",
         rarity: 6,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Spike 2",
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
                 type: "water",
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 580,
             branches: [
                582
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/15d908422d768e64556c51d462e9efb98b157694.0b232f1add24d7c5459ab9aa6cf6b15b.png"
        }
    },
    {
         id: 582,
         type: "lance",
         rarity: 6,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Water Spike 3",
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
             previous: 581,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/15d908422d768e64556c51d462e9efb98b157694.0b232f1add24d7c5459ab9aa6cf6b15b.png"
        }
    },
    {
         id: 583,
         type: "lance",
         rarity: 3,
         attack: {
             display: 230,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Lance 1",
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
                584,
                588
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/2a1bdda2cd5a220e1bcefadca81d9f54.a1a1d02749b359941a9994f57e7eb8360d0148f3.png",
             image: "https://assets.mhw-db.com/weapons/lance/d47f1880389dc367073b83753cda5281097bc9d6.b72c8eea4d7faffaae2258b6fb5a5dbf.png"
        }
    },
    {
         id: 584,
         type: "lance",
         rarity: 4,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Lance 2",
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
             previous: 583,
             branches: [
                585,
                586
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/d47f1880389dc367073b83753cda5281097bc9d6.b72c8eea4d7faffaae2258b6fb5a5dbf.png"
        }
    },
    {
         id: 585,
         type: "lance",
         rarity: 6,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Lance 3",
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
             previous: 584,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/d47f1880389dc367073b83753cda5281097bc9d6.b72c8eea4d7faffaae2258b6fb5a5dbf.png"
        }
    },
    {
         id: 586,
         type: "lance",
         rarity: 6,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rookslayer Lance",
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
                 type: "blast",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 584,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/6b8a7dd1a6aaebef65b36ac1120fa2e1ad087a34.8cd9c75d78d30b0a1ebc93d4b4666cbd.png"
        }
    },
    {
         id: 587,
         type: "lance",
         rarity: 8,
         attack: {
             display: 460,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: -10
        },
         damageType: "sever",
         name: "Bazel Myniad Rookslayer",
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
                 type: "blast",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 586,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 3,
                     item: {
                         id: 442,
                         rarity: 7,
                         carryLimit: 99,
                         value: 5000,
                         name: "Xeno'jiiva Wing",
                         description: "A rare Xeno'jiiva wing. The wing membrane shines with the divine light of a powerful deity."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/6b8a7dd1a6aaebef65b36ac1120fa2e1ad087a34.8cd9c75d78d30b0a1ebc93d4b4666cbd.png"
        }
    },
    {
         id: 588,
         type: "lance",
         rarity: 4,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Thunderpike",
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
                 damage: 420,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 583,
             branches: [
                589
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
                         id: 371,
                         rarity: 4,
                         carryLimit: 99,
                         value: 1250,
                         name: "Kirin Mane",
                         description: "Kirin material. Mostly obtained by carving. Highly thunder-resistant, used to craft gear."
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/263161a462479731dfc04a00b601b5b2.556761e98a9ce7f3929ae7a460b2aee38ba3e8d9.png",
             image: "https://assets.mhw-db.com/weapons/lance/21d94fffb4841f835136023db8f73b17755e8d6a.b64b5e6193a06f70db141f6619bb5e72.png"
        }
    },
    {
         id: 589,
         type: "lance",
         rarity: 8,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Thunderspear",
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
             previous: 589,
             branches: [
                589
            ],
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/f9ccc27beaf5b08261aa5436326e9a34ea5c1ff9.1cd31a798b6ad983f0f7e6b34612229d.png"
        }
    },
    {
         id: 590,
         type: "lance",
         rarity: 8,
         attack: {
             display: 368,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: null,
         name: "Thunderpiercer",
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
             previous: 589,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                },
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
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/21d94fffb4841f835136023db8f73b17755e8d6a.b64b5e6193a06f70db141f6619bb5e72.png"
        }
    },
    {
         id: 591,
         type: "lance",
         rarity: 5,
         attack: {
             display: 230,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Lance 1",
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
                592
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/d11683d36a7bbf283e09174c108a4e18.1a9c0a53374a636bfa20c8fee128cc966d47f6ba.png",
             image: "https://assets.mhw-db.com/weapons/lance/acf177c40382ba04e7cb83b273c386ec531f92bd.ca7e57b35dad282577f7d49feb5b195b.png"
        }
    },
    {
         id: 592,
         type: "lance",
         rarity: 6,
         attack: {
             display: 253,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Lance 2",
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
             previous: 591,
             branches: [
                593,
                595
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/acf177c40382ba04e7cb83b273c386ec531f92bd.ca7e57b35dad282577f7d49feb5b195b.png"
        }
    },
    {
         id: 593,
         type: "lance",
         rarity: 7,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Icesteel Spear",
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
             previous: 592,
             branches: [
                594
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/37fd42b1130fc135fb14d2ee09eddd06fe0bdf8c.33dcfb969b310cee6cc3b156dee8b925.png"
        }
    },
    {
         id: 594,
         type: "lance",
         rarity: 8,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Daora's Fang",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 593,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/37fd42b1130fc135fb14d2ee09eddd06fe0bdf8c.33dcfb969b310cee6cc3b156dee8b925.png"
        }
    },
    {
         id: 595,
         type: "lance",
         rarity: 8,
         attack: {
             display: 391,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Xeno Zauta",
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
             previous: 592,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/af3ed468f1f482d8dbcce54c3b2e87ca268716db.84177e11acc482932329363102fca199.png"
        }
    },
    {
         id: 596,
         type: "lance",
         rarity: 6,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Babel Spear",
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
                 type: "fire",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                597
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
            ],
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/a196f216b84462dd17c5c6f48c41f7cbc19e77d4.085e5fc6e50d3212d7ecc5dcb2112384.png"
        }
    },
    {
         id: 597,
         type: "lance",
         rarity: 8,
         attack: {
             display: 460,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Elder Babel Spear",
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
                 type: "fire",
                 damage: 330,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 596,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/958dc0778f550ca58388a544e3c46105.941da3a8d40fca611f748ae40165d92c48246a94.png",
             image: "https://assets.mhw-db.com/weapons/lance/a196f216b84462dd17c5c6f48c41f7cbc19e77d4.085e5fc6e50d3212d7ecc5dcb2112384.png"
        }
    },
    {
         id: 1162,
         type: "lance",
         rarity: 6,
         attack: {
             display: 483,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Grief Lance",
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
                1163
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/8f8e6a679ca088fad4d0fcc92a78d44e.c097ce2326ca14499aaf145e3ff595371fec52cf.png",
             image: "https://assets.mhw-db.com/weapons/lance/57b0857d78d509b308e319c4a734a66440322718.b6d26579f877e122e7eb4116f1121558.png"
        }
    },
    {
         id: 1163,
         type: "lance",
         rarity: 7,
         attack: {
             display: 529,
             raw: 230
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Fiendish Tower",
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
             previous: 1162,
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
             icon: "https://assets.mhw-db.com/weapons/lance/icons/b9df57d96c28ee14e6d99b2ac5751dbb.583091aef01c769924c43839f9a721e3f0598eff.png",
             image: "https://assets.mhw-db.com/weapons/lance/c3b9330b13a7daf54aec6069875a8f42d9d5b076.bf36b38f40177104cd1f12aa4ef66b34.png"
        }
    },
    {
         id: 1209,
         type: "lance",
         rarity: 7,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Lance",
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
                1210,
                1211,
                1212
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
             image: "https://assets.mhw-db.com/weapons/lance/90e63ae344269268d7a6dcaa58e1936811f4c738.71a62c8c32962d5d25c6c53713926aaf.png"
        }
    },
    {
         id: 1210,
         type: "lance",
         rarity: 8,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Lance \"Blaze\"",
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
             previous: 1209,
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
             image: "https://assets.mhw-db.com/weapons/lance/90e63ae344269268d7a6dcaa58e1936811f4c738.71a62c8c32962d5d25c6c53713926aaf.png"
        }
    },
    {
         id: 1211,
         type: "lance",
         rarity: 8,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Lance \"Ruin\"",
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
             previous: 1209,
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
             image: "https://assets.mhw-db.com/weapons/lance/ed30bd9830599e65b2656b3b5af2f260dda18f56.56ec9fa915c9f482371abe9c8fdcf06b.png"
        }
    },
    {
         id: 1212,
         type: "lance",
         rarity: 8,
         attack: {
             display: 414,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Lance \"Styx\"",
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
             previous: 1209,
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
             image: "https://assets.mhw-db.com/weapons/lance/867932ef50ab3867e51608a9ff085619282bf934.8ce50ab198b0aeb08f41426a9a6ca2a8.png"
        }
    },
    {
         id: 1213,
         type: "lance",
         rarity: 4,
         attack: {
             display: 299,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Shooting Star Lance",
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
         slots: [],
         elements: [
            {
                 type: "paralysis",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1214
            ],
             craftingMaterials: [
                {
                     quantity: 1,
                     item: {
                         id: 584,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "First Fleet Ticket",
                         description: "A ticket with the First Fleet's flag and emblem. Redeem at the Smithy for something nice!?"
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
            ],
            upgradeMaterials: []
        },
         assets: {}
    },
    {
         id: 1214,
         type: "lance",
         rarity: 7,
         attack: {
             display: 437,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Sapphire Star Lance",
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
             previous: 1213,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 584,
                         rarity: 4,
                         carryLimit: 99,
                         value: 400,
                         name: "First Fleet Ticket",
                         description: "A ticket with the First Fleet's flag and emblem. Redeem at the Smithy for something nice!?"
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
                     quantity: 3,
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
                     quantity: 1,
                     item: {
                         id: 483,
                         rarity: 7,
                         carryLimit: 99,
                         value: 0,
                         name: "High Commendation",
                         description: "A ticket awarded for demonstrating tremendous courage. Collect them and something wonderful may happen!"
                    }
                }
            ]
        },
         assets: {}
    }
 ]

 module.exports = {
    lanceData,
    createLance
 }