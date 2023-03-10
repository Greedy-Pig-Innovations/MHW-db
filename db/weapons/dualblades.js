const { client } = require("../client");

const createDB = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets}) => {

    try {

        const {rows: [db]} = await client.query(`
        INSERT INTO db(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,slots,elements,crafting,assets]);
    
        return db;
        
      } catch (error) {
        throw error
      }

    } 

const dualBladesData = [
    {
         id: 262,
         type: "dual-blades",
         rarity: 1,
         attack: {
             display: 112,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Matched Slicers 1",
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
                263
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcc8c66e33c507a1401dc0337dff32f8ae50392c.5d3abaa51dfa0449ae0ec18f49a93dd4.png"
        }
    },
    {
         id: 263,
         type: "dual-blades",
         rarity: 1,
         attack: {
             display: 126,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Matched Slicers 2",
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
             previous: 262,
             branches: [
                264,
                283
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcc8c66e33c507a1401dc0337dff32f8ae50392c.5d3abaa51dfa0449ae0ec18f49a93dd4.png"
        }
    },
    {
         id: 264,
         type: "dual-blades",
         rarity: 2,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Matched Slicers 3",
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
             previous: 263,
             branches: [
                265,
                272
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcc8c66e33c507a1401dc0337dff32f8ae50392c.5d3abaa51dfa0449ae0ec18f49a93dd4.png"
        }
    },
    {
         id: 265,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dual Slicers 1",
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
             previous: 264,
             branches: [
                266
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0aba094c7896624b2d1ad41e3ca67c3a28e691c0.6cfe77fe7466618d77772d295d66b2ce.png"
        }
    },
    {
         id: 266,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dual Slicers 2",
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
         slots: [
            {
                 rank: 1
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
             previous: 266,
             branches: [
                266
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0aba094c7896624b2d1ad41e3ca67c3a28e691c0.6cfe77fe7466618d77772d295d66b2ce.png"
        }
    },
    {
         id: 267,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: null,
         name: "Dual Slicers 3",
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
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 266,
             branches: [
                268
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0aba094c7896624b2d1ad41e3ca67c3a28e691c0.6cfe77fe7466618d77772d295d66b2ce.png"
        }
    },
    {
         id: 268,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Slicers 1",
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
                 type: "poison",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 267,
             branches: [
                269,
                270
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0aba094c7896624b2d1ad41e3ca67c3a28e691c0.6cfe77fe7466618d77772d295d66b2ce.png"
        }
    },
    {
         id: 269,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Chrome Slicers 2",
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
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 268,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0aba094c7896624b2d1ad41e3ca67c3a28e691c0.6cfe77fe7466618d77772d295d66b2ce.png"
        }
    },
    {
         id: 270,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Nergal Gouge",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 268,
             branches: [
                271
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/0acf3aadcbde129635cddbcd7770a464d7682d34.214d76a93ad90a16d76ebb977da998bd.png"
        }
    },
    {
         id: 271,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Decimation Claws",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 270,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/dc6399355c9c10dde7db2f20a8a941d3761412b1.2c7ebeabed53135a0f61740b33469c79.png"
        }
    },
    {
         id: 272,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Luminous Daggers 1",
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
             previous: 264,
             branches: [
                273,
                279
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2ebf9c8b223d5a470ceeccf4e53e8116a18b6f2a.7980f3e97658de3bc76a96fff77d7ce3.png"
        }
    },
    {
         id: 273,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Luminous Daggers 2",
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
             previous: 272,
             branches: [
                274
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2ebf9c8b223d5a470ceeccf4e53e8116a18b6f2a.7980f3e97658de3bc76a96fff77d7ce3.png"
        }
    },
    {
         id: 274,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dual Destroyers 1",
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
                 type: "thunder",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 273,
             branches: [
                275,
                277
            ],
             craftingMaterials: [
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
                     quantity: 6,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcf508d5152adfbdb1d0e86d7022f291e0190a6f.5b7e6100324a1443c359ccc9cdb114d3.png"
        }
    },
    {
         id: 275,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dual Destroyers 2",
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
                 type: "thunder",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 274,
             branches: [
                276
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcf508d5152adfbdb1d0e86d7022f291e0190a6f.5b7e6100324a1443c359ccc9cdb114d3.png"
        }
    },
    {
         id: 276,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dual Destroyers 3",
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
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 275,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/bcf508d5152adfbdb1d0e86d7022f291e0190a6f.5b7e6100324a1443c359ccc9cdb114d3.png"
        }
    },
    {
         id: 277,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Rookslayer Handaxes",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 274,
             branches: [
                278
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/d0f0501117a6400cbd4a237a9ee32e26605f30d6.846540775fbd4cf328827e73044e1936.png"
        }
    },
    {
         id: 278,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bazelhawk Rookslayer",
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
             previous: 277,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/d0f0501117a6400cbd4a237a9ee32e26605f30d6.846540775fbd4cf328827e73044e1936.png"
        }
    },
    {
         id: 279,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Daggers 1",
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
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 272,
             branches: [
                280
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ef492f7b426504f70294355c564fd86861c662b3.f5b4a5853d6602d05bd656d180b51ab5.png"
        }
    },
    {
         id: 280,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Daggers 2",
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
                 type: "ice",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 279,
             branches: [
                281
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ef492f7b426504f70294355c564fd86861c662b3.f5b4a5853d6602d05bd656d180b51ab5.png"
        }
    },
    {
         id: 281,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Chain 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 280,
             branches: [
                282
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/605e9d16c96caae4b1544bac46499e3d5c4b7fdf.ea201c7485fa48d0060f2fa05446aeb3.png"
        }
    },
    {
         id: 282,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Freeze Chain 2",
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
             previous: 281,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/605e9d16c96caae4b1544bac46499e3d5c4b7fdf.ea201c7485fa48d0060f2fa05446aeb3.png"
        }
    },
    {
         id: 283,
         type: "dual-blades",
         rarity: 2,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Rending Beaks 1",
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
             previous: 263,
             branches: [
                284,
                289
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/e794903a351b71afb84e4ed12b1d0724f3a7eb16.91a7cf87107510e011c616da895be34d.png"
        }
    },
    {
         id: 284,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Rending Beaks 2",
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
             previous: 283,
             branches: [
                285
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/e794903a351b71afb84e4ed12b1d0724f3a7eb16.91a7cf87107510e011c616da895be34d.png"
        }
    },
    {
         id: 285,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "sever",
         name: "Rending Beaks 3",
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
             previous: 284,
             branches: [
                286
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/e794903a351b71afb84e4ed12b1d0724f3a7eb16.91a7cf87107510e011c616da895be34d.png"
        }
    },
    {
         id: 286,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Arcanaria 1",
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
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 285,
             branches: [
                287
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/a99a3a8d71ec031996d285d419887a038698b4e0.ba1459d41d0d2e2e8b26523fccad82fa.png"
        }
    },
    {
         id: 287,
         type: "dual-blades",
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
         name: "Arcanaria 2",
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
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 286,
             branches: [
                288
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/a99a3a8d71ec031996d285d419887a038698b4e0.ba1459d41d0d2e2e8b26523fccad82fa.png"
        }
    },
    {
         id: 288,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Arcanaria 3",
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
                 type: "sleep",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 287,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/a99a3a8d71ec031996d285d419887a038698b4e0.ba1459d41d0d2e2e8b26523fccad82fa.png"
        }
    },
    {
         id: 289,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Sworn Rapiers",
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
                 type: "water",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 283,
             branches: [
                290
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
                     quantity: 6,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/494eb564aa1c7171b950a45dc3015c6a395c6a04.df5db9c266117764ddb7d7f9a9f39795.png"
        }
    },
    {
         id: 290,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Sworn Rapiers+",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 289,
             branches: [
                291
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
                         id: 123,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Dragonvein Crystal",
                         description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                    }
                },
                {
                     quantity: 8,
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
                         id: 482,
                         rarity: 5,
                         carryLimit: 99,
                         value: 0,
                         name: "Commendation",
                         description: "A ticket awarded for demonstrating courage. Collect them and something wonderful may happen!"
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/494eb564aa1c7171b950a45dc3015c6a395c6a04.df5db9c266117764ddb7d7f9a9f39795.png"
        }
    },
    {
         id: 291,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Holy Sabers",
         durability: [
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 20,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 30,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 290,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
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
                     quantity: 6,
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
                     quantity: 2,
                     item: {
                         id: 173,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4000,
                         name: "Wyvern Gem",
                         description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/494eb564aa1c7171b950a45dc3015c6a395c6a04.df5db9c266117764ddb7d7f9a9f39795.png"
        }
    },
    {
         id: 292,
         type: "dual-blades",
         rarity: 1,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Hatchets 1",
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
                293
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/c8cd532ce2b6aa63ef588ff1bac3346888f20915.214a28c7a2a0f946d71d5f7b55a4e02b.png"
        }
    },
    {
         id: 293,
         type: "dual-blades",
         rarity: 1,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Hatchets 2",
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
             previous: 292,
             branches: [
                294,
                300,
                309,
                322
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/c8cd532ce2b6aa63ef588ff1bac3346888f20915.214a28c7a2a0f946d71d5f7b55a4e02b.png"
        }
    },
    {
         id: 294,
         type: "dual-blades",
         rarity: 2,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Bone Hatchets 3",
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
             previous: 293,
             branches: [
                295
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/c8cd532ce2b6aa63ef588ff1bac3346888f20915.214a28c7a2a0f946d71d5f7b55a4e02b.png"
        }
    },
    {
         id: 295,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Wild Hatchets 1",
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
             previous: 294,
             branches: [
                296
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/8bc1e0cbb95a9f0084613552c48009c2afda62c6.370d5efc7d542cd57158824e8d3bc687.png"
        }
    },
    {
         id: 296,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Wild Hatchets 2",
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
             previous: 295,
             branches: [
                297
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/8bc1e0cbb95a9f0084613552c48009c2afda62c6.370d5efc7d542cd57158824e8d3bc687.png"
        }
    },
    {
         id: 297,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Wild Hatchets 3",
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
                 type: "blast",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 296,
             branches: [
                298
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/8bc1e0cbb95a9f0084613552c48009c2afda62c6.370d5efc7d542cd57158824e8d3bc687.png"
        }
    },
    {
         id: 298,
         type: "dual-blades",
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
         name: "Strong Hatchets 1",
         durability: [
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 60,
                 yellow: 60,
                 green: 100,
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
                 type: "blast",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 297,
             branches: [
                299
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/8bc1e0cbb95a9f0084613552c48009c2afda62c6.370d5efc7d542cd57158824e8d3bc687.png"
        }
    },
    {
         id: 299,
         type: "dual-blades",
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
         name: "Strong Hatchets 2",
         durability: [
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 110,
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
             craftable: false,
             previous: 298,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/8bc1e0cbb95a9f0084613552c48009c2afda62c6.370d5efc7d542cd57158824e8d3bc687.png"
        }
    },
    {
         id: 300,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Hatchets 1",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 293,
             branches: [
                301,
                305
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/c9a3818c15fd35f2e2c6f0386c568b5066a53b50.676de6312e2f44f4acab608e40936412.png"
        }
    },
    {
         id: 301,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Blazing Hatchets 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 300,
             branches: [
                302
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/c9a3818c15fd35f2e2c6f0386c568b5066a53b50.676de6312e2f44f4acab608e40936412.png"
        }
    },
    {
         id: 302,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Cyclone 1",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 301,
             branches: [
                303
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/871dd26e3cf3dbfd8365871866d847f25d91268a.24fd7e45f77bd7b38e0c3c9e0add5217.png"
        }
    },
    {
         id: 303,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Cyclone 2",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 302,
             branches: [
                304
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/871dd26e3cf3dbfd8365871866d847f25d91268a.24fd7e45f77bd7b38e0c3c9e0add5217.png"
        }
    },
    {
         id: 304,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 294,
             raw: 210
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Anja Cyclone 3",
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 303,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/871dd26e3cf3dbfd8365871866d847f25d91268a.24fd7e45f77bd7b38e0c3c9e0add5217.png"
        }
    },
    {
         id: 305,
         type: "dual-blades",
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
         name: "Diablos Hatchets 1",
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
             previous: 300,
             branches: [
                306
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/780624733594c91828fe7462efdfb7761306e692.bfe1311ac827984817d6992accd81362.png"
        }
    },
    {
         id: 306,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Diablos Hatchets 2",
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
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 305,
             branches: [
                307
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/780624733594c91828fe7462efdfb7761306e692.bfe1311ac827984817d6992accd81362.png"
        }
    },
    {
         id: 307,
         type: "dual-blades",
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
         name: "Diablos Clubs 1",
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
                 type: "ice",
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 306,
             branches: [
                308
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/3fb84b80549a4fd7759d1cec7e6e398845c0c3dd.3f11b50af0b1f8fba959fc67f83cb067.png"
        }
    },
    {
         id: 308,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 322,
             raw: 230
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Diablos Clubs 2",
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
         slots: [
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "ice",
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 307,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/3fb84b80549a4fd7759d1cec7e6e398845c0c3dd.3f11b50af0b1f8fba959fc67f83cb067.png"
        }
    },
    {
         id: 309,
         type: "dual-blades",
         rarity: 2,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Madness Pangas 1",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 293,
             branches: [
                310,
                317
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/24a1f1b958a4cc73b6102d5574844af7ae8f972a.3ba586da4c5e864bce01e7a2b7a9a669.png"
        }
    },
    {
         id: 310,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Madness Pangas 2",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 309,
             branches: [
                311
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/24a1f1b958a4cc73b6102d5574844af7ae8f972a.3ba586da4c5e864bce01e7a2b7a9a669.png"
        }
    },
    {
         id: 311,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Madness Pangas 3",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 310,
             branches: [
                312
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/24a1f1b958a4cc73b6102d5574844af7ae8f972a.3ba586da4c5e864bce01e7a2b7a9a669.png"
        }
    },
    {
         id: 312,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Hatchets 1",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: 311,
             branches: [
                313,
                315
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
                     quantity: 4,
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
                     quantity: 5,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2b31f69c19022f900a86a76048930c7eae3393a0.b9c28b00f765c28d4c3c50b624cfb500.png"
        }
    },
    {
         id: 313,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Hatchets 2",
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
                 type: "water",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 312,
             branches: [
                314
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2b31f69c19022f900a86a76048930c7eae3393a0.b9c28b00f765c28d4c3c50b624cfb500.png"
        }
    },
    {
         id: 314,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Jyura Hatchets 3",
         durability: [
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 40,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 10,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 50,
                 white: 20,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 150,
                 yellow: 30,
                 green: 30,
                 blue: 50,
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
                 type: "water",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 313,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2b31f69c19022f900a86a76048930c7eae3393a0.b9c28b00f765c28d4c3c50b624cfb500.png"
        }
    },
    {
         id: 315,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lava Cyclone 1",
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
                 type: "fire",
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 312,
             branches: [
                316
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ed56491168ebf860e7f6727ea667a0b4bf312e82.577ef8959a8ec8104892002578228f7d.png"
        }
    },
    {
         id: 316,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Lava Cyclone 2",
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
            },
            {
                 rank: 2
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
             previous: 315,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ed56491168ebf860e7f6727ea667a0b4bf312e82.577ef8959a8ec8104892002578228f7d.png"
        }
    },
    {
         id: 317,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Taurus Pangas 1",
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
             previous: 309,
             branches: [
                318
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/cd3d5bc9397050bc2c6faaa992be1e33a5ed2215.a244f41b3d56c9e6041aef3918d71fdd.png"
        }
    },
    {
         id: 318,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Taurus Pangas 2",
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
             previous: 317,
             branches: [
                319
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/cd3d5bc9397050bc2c6faaa992be1e33a5ed2215.a244f41b3d56c9e6041aef3918d71fdd.png"
        }
    },
    {
         id: 319,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Ripper 1",
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
            }
        ],
         elements: [
            {
                 type: "paralysis",
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 318,
             branches: [
                320
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/da10ff1cfaeccf4f66d93cd155183f12c7fcc2d5.0b538e7c1751c3a16a4fe804495258da.png"
        }
    },
    {
         id: 320,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 210,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Ripper 2",
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
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 319,
             branches: [
                321
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/da10ff1cfaeccf4f66d93cd155183f12c7fcc2d5.0b538e7c1751c3a16a4fe804495258da.png"
        }
    },
    {
         id: 321,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Dark Ripper 3",
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
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 320,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/da10ff1cfaeccf4f66d93cd155183f12c7fcc2d5.0b538e7c1751c3a16a4fe804495258da.png"
        }
    },
    {
         id: 322,
         type: "dual-blades",
         rarity: 2,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Hatchets 1",
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
                 type: "thunder",
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 293,
             branches: [
                323
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/80ac9ee5262d3a1df7d3bab331f0df89.cf5b805b0e174b89510863079bd0211490b39a40.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/116a3c3e5ee6d7921f020cd16cddaeb420ad7bf7.2f5ccd781a8049e57d37e82d5d6b87da.png"
        }
    },
    {
         id: 323,
         type: "dual-blades",
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
         name: "Pulsar Hatchets 2",
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
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 322,
             branches: [
                324,
                328
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/116a3c3e5ee6d7921f020cd16cddaeb420ad7bf7.2f5ccd781a8049e57d37e82d5d6b87da.png"
        }
    },
    {
         id: 324,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Pulsar Hatchets 3",
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
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 323,
             branches: [
                325
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/116a3c3e5ee6d7921f020cd16cddaeb420ad7bf7.2f5ccd781a8049e57d37e82d5d6b87da.png"
        }
    },
    {
         id: 325,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Kadachi Claws 1",
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 324,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/fd06896caf5b6d8f89a7f606eb183523b0c237e7.31804af061b051baf51fd2265363cc55.png"
        }
    },
    {
         id: 326,
         type: "dual-blades",
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
         name: "Kadachi Claws 2",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 325,
             branches: [],
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/fd06896caf5b6d8f89a7f606eb183523b0c237e7.31804af061b051baf51fd2265363cc55.png"
        }
    },
    {
         id: 327,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: null,
         name: "Kadachi Claws 3",
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
                 rank: 1
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
             previous: 326,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/fd06896caf5b6d8f89a7f606eb183523b0c237e7.31804af061b051baf51fd2265363cc55.png"
        }
    },
    {
         id: 328,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 182,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Garon Hatchets 1",
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
             previous: 323,
             branches: [
                329
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/be5d9a7f97374a11926250d5d3e323c6a5a128ac.a53bfc01f40d759d45bfb27612f11b16.png"
        }
    },
    {
         id: 329,
         type: "dual-blades",
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
         name: "Garon Hatchets 2",
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
                 type: "fire",
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 328,
             branches: [
                330
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/be5d9a7f97374a11926250d5d3e323c6a5a128ac.a53bfc01f40d759d45bfb27612f11b16.png"
        }
    },
    {
         id: 330,
         type: "dual-blades",
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
         name: "Blood-drinker Chainblade",
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
             previous: 329,
             branches: [
                331
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/322a2d3e745f161b08d7a1dd647ec1ee5eda987a.13d1ae92a7e8e887a01939733db7de17.png"
        }
    },
    {
         id: 331,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Sin",
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
             previous: 330,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/322a2d3e745f161b08d7a1dd647ec1ee5eda987a.13d1ae92a7e8e887a01939733db7de17.png"
        }
    },
    {
         id: 332,
         type: "dual-blades",
         rarity: 3,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Twinblades 1",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                333,
                335,
                338
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/4acef2822dc162e1174a9b840d00d16f.cc8a71ec66fb7b2e48a62f0ac84b9b4e0e27a5f5.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/728c8dec4bccfe56f40c19032733d47a21408e2b.c20d8456fd294dbaaf9f74a6ede9efb1.png"
        }
    },
    {
         id: 333,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 168,
             raw: 120
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Dragonbone Twinblades 2",
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
                 damage: 150,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 332,
             branches: [
                334
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/728c8dec4bccfe56f40c19032733d47a21408e2b.c20d8456fd294dbaaf9f74a6ede9efb1.png"
        }
    },
    {
         id: 334,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Enduring Schism",
         durability: [
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 50,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 110,
                 orange: 110,
                 yellow: 40,
                 green: 40,
                 blue: 80,
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
                 damage: 270,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 333,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ff52a0700b48de47baf4be21f9829f247477b15b.125b2ebc15ecfa977b5367fad3962378.png"
        }
    },
    {
         id: 335,
         type: "dual-blades",
         rarity: 4,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Kirin Bolts",
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
                 type: "thunder",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 332,
             branches: [
                336
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/0e1d4df2cf286cf183f98260dac81839.12f0eb36db897bfa73c637010f25ea23e911b6b0.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/709da68416c013950131f30e29a2f9ef19130b83.1e50a734150bd60ccad248f940cf4b9f.png"
        }
    },
    {
         id: 336,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 196,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Kirin Bolts+",
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
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 335,
             branches: [
                337
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/709da68416c013950131f30e29a2f9ef19130b83.1e50a734150bd60ccad248f940cf4b9f.png"
        }
    },
    {
         id: 337,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Monarch",
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
             previous: 336,
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
                     quantity: 5,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/709da68416c013950131f30e29a2f9ef19130b83.1e50a734150bd60ccad248f940cf4b9f.png"
        }
    },
    {
         id: 338,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 224,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Ungulae 1",
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 332,
             branches: [
                339
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ba35cf863df2c92dd16a7abe83342d1f361cce4f.975c158c2a57c466f59ae158cb271ddd.png"
        }
    },
    {
         id: 339,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 308,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "sever",
         name: "Magda Ungulae 2",
         durability: [
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 80,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 0,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 10,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 20,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 90,
                 blue: 30,
                 white: 0,
                 purple: 0
            },
            {
                 red: 180,
                 orange: 30,
                 yellow: 60,
                 green: 90,
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
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 338,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/ba35cf863df2c92dd16a7abe83342d1f361cce4f.975c158c2a57c466f59ae158cb271ddd.png"
        }
    },
    {
         id: 340,
         type: "dual-blades",
         rarity: 5,
         attack: {
             display: 140,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Twins 1",
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
                341
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/7f3e9d08ab3ab8661426bb695df73441.6852afbc4dd1519cc25d883470fa194a611f6c1a.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/b9de5990a7f5be09f0e5dadfdd4dec23523eaa88.906a9f14dc54a59a5163bf6b8d2473d4.png"
        }
    },
    {
         id: 341,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 154,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "sever",
         name: "Blacksteel Twins 2",
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
             previous: 340,
             branches: [
                342,
                344
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/b9de5990a7f5be09f0e5dadfdd4dec23523eaa88.906a9f14dc54a59a5163bf6b8d2473d4.png"
        }
    },
    {
         id: 342,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 238,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Twin Nails",
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
             previous: 341,
             branches: [
                343
            ],
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2fa5068fe8f210eef5e908078498e8974827857f.da0f01596511dae17f3e45995e475173.png"
        }
    },
    {
         id: 343,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Fire and Ice",
         durability: [
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 60,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 10,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 20,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 30,
                 purple: 0
            },
            {
                 red: 60,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
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
                 type: "ice",
                 damage: 240,
                 hidden: false
            },
            {
                 type: "blast",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 342,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 2,
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
                     quantity: 3,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/2fa5068fe8f210eef5e908078498e8974827857f.da0f01596511dae17f3e45995e475173.png"
        }
    },
    {
         id: 344,
         type: "dual-blades",
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
         name: "Xeno Raqs",
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
            },
            {
                 rank: 3
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
             previous: 341,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/e18e488012c150ee1015914e7737e7d6.762b0022bb518a4a38f8e8519db2c52d984d72e3.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/cfd337f3e1f81cdb86ddb688eed900a03b2f3a2e.3cd420871547423ae111e1ed45b8e6df.png"
        }
    },
    {
         id: 1156,
         type: "dual-blades",
         rarity: 6,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Wrath & Rancor",
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1157
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/a5033e867655dd54ffa835accf6003af.e006c046d8a14335c0f6dddac953ee4814d010ef.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/d6202e3c9ab3555790f3efcf9877f4ca76c339bc.513057aa57f8048dd5a144297f07c871.png"
        }
    },
    {
         id: 1157,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 308,
             raw: 220
        },
         elderseal: "high",
         attributes: {},
         damageType: "sever",
         name: "Wrathful Predation",
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
         slots: [],
         elements: [
            {
                 type: "dragon",
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1156,
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
             icon: "https://assets.mhw-db.com/weapons/dual-blades/icons/27149ea3aa2415493dcf9ade72f7fc40.98a568bbbb7a5f877cc49c3e87f833d4163e8399.png",
             image: "https://assets.mhw-db.com/weapons/dual-blades/dab18ef0783144ef3b2d2bf9068fd4ccec384397.bd2a041111446b36d99747eb3621498f.png"
        }
    },
    {
         id: 1196,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Daggers",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1197,
                1198,
                1199
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
             image: "https://assets.mhw-db.com/weapons/dual-blades/26e921da691c3da4142e669b62c6a5567d4515b4.3f929df0fa99363d1da15bc80048bdc4.png"
        }
    },
    {
         id: 1197,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "sever",
         name: "Empress Daggers \"Blaze\"",
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
            },
            {
                 rank: 1
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1196,
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
             image: "https://assets.mhw-db.com/weapons/dual-blades/26e921da691c3da4142e669b62c6a5567d4515b4.3f929df0fa99363d1da15bc80048bdc4.png"
        }
    },
    {
         id: 1198,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "sever",
         name: "Empress Daggers \"Ruin\"",
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
            },
            {
                 rank: 2
            }
        ],
         elements: [
            {
                 type: "blast",
                 damage: 60,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1196,
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
             image: "https://assets.mhw-db.com/weapons/dual-blades/bde6eefcaa2b2443c7ab2f8452c3da60b5935f4b.547dd5b4d5530220f68b0b53e39b7880.png"
        }
    },
    {
         id: 1199,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "sever",
         name: "Empress Daggers \"Styx\"",
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
                 rank: 3
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
             previous: 1196,
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
             image: "https://assets.mhw-db.com/weapons/dual-blades/bd3e81df8d0ab0115b36557beae80d270b2dba88.261f8e4b33ffae9283c4f5a9c4d4aca1.png"
        }
    },
    {
         id: 1284,
         type: "dual-blades",
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
         name: "Taroth Daggers \"Rage\"",
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {
          
         }
    },
    {
         id: 1285,
         type: "dual-blades",
         rarity: 7,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "20",
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Daggers \"Spark\"",
         durability: [
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 20,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 30,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 40,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 50,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 60,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 70,
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {
          
         }
    },
    {
         id: 1286,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Daggers \"Ice\"",
         durability: [
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 70,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 10,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 20,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 30,
                 purple: 0
            },
            {
                 red: 50,
                 orange: 50,
                 yellow: 60,
                 green: 120,
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
                 type: "ice",
                 damage: 270,
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
         assets: {
          
         }
    },
    {
         id: 1287,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Daggers \"Water\"",
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
                 rank: 3
            }
        ],
         elements: [
            {
                 type: "water",
                 damage: 270,
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
         assets: {
          
         }
    },
    {
         id: 1288,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "20",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Daggers \"Dragon\"",
         durability: [
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 20,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 30,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
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
         assets: {
          
         }
    },
    {
         id: 1289,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Daggers \"Ice\"",
         durability: [
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 20,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 30,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
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
                 type: "ice",
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
         assets: {
          
         }
    },
    {
         id: 1290,
         type: "dual-blades",
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
         name: "Kjarr Daggers \"Lurk\"",
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
                 type: "paralysis",
                 damage: 90,
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
         assets: {
          
         }
    },
    {
         id: 1291,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             affinity: "5",
             defense: 15,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Daggers \"Magma\"",
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {
          
         }
    },
    {
         id: 1292,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 280,
             raw: 200
        },
         elderseal: null,
         attributes: {
             affinity: "5",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Daggers \"Rage\"",
         durability: [
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 100,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 110,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 120,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 130,
                 white: 0,
                 purple: 0
            },
            {
                 red: 80,
                 orange: 50,
                 yellow: 50,
                 green: 80,
                 blue: 140,
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {
          
         }
    },
    {
         id: 1293,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 252,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: "15",
             damageType: "sever"
        },
         damageType: "sever",
         name: "Kjarr Daggers \"Spark\"",
         durability: [
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 20,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 30,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 40,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 50,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
                 white: 60,
                 purple: 0
            },
            {
                 red: 220,
                 orange: 20,
                 yellow: 20,
                 green: 50,
                 blue: 20,
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
                 type: "thunder",
                 damage: 180,
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
         assets: {
          
         }
    },
    {
         id: 1294,
         type: "dual-blades",
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
         name: "Kjarr Daggers \"Water\"",
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
                 rank: 1
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
             previous: null,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: []
        },
         assets: {
          
         }
    },
    {
         id: 1295,
         type: "dual-blades",
         rarity: 8,
         attack: {
             display: 266,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 20,
             damageType: "sever"
        },
         damageType: "sever",
         name: "Taroth Daggers \"Poison\"",
         durability: [
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 80,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 0,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 10,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 20,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
                 white: 30,
                 purple: 0
            },
            {
                 red: 40,
                 orange: 50,
                 yellow: 60,
                 green: 120,
                 blue: 90,
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
                 type: "poison",
                 damage: 330,
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
         assets: {
          
         }
    },
    {
         id: 1296,
         type: "dual-blades",
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
         name: "Taroth Daggers \"Fire\"",
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
         assets: {
          
         }
    }
 ]

 module.exports = {
     dualBladesData,
     createDB
 }