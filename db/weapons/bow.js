const { client } = require("../client");

const createBows = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,coatings,slots,elements,crafting,assets}) => {

    try {

        const {rows: [bow]} = await client.query(`
        INSERT INTO bow(id,type,rarity,attack,elderseal,attributes,"damageType",name,coatings,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,coatings,slots,elements,crafting,assets]);
    
        return bow;
        
      } catch (error) {
        throw error
      }

    } 


const bowData = [
    {
         id: 1075,
         type: "bow",
         rarity: 1,
         attack: {
             display: 96,
             raw: 80
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Bow 1",
         coatings: [
            "close range",
            "power"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1076,
                1099
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/57495f2e45e3313658d81c957bc02985c6608a55.80818b9aa3b7f2464ac9ef972622fdbd.png"
        }
    },
    {
         id: 1076,
         type: "bow",
         rarity: 1,
         attack: {
             display: 108,
             raw: 90
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Bow 2",
         coatings: [
            "close range",
            "power"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1075,
             branches: [
                1077,
                1085
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/57495f2e45e3313658d81c957bc02985c6608a55.80818b9aa3b7f2464ac9ef972622fdbd.png"
        }
    },
    {
         id: 1077,
         type: "bow",
         rarity: 2,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Iron Bow 3",
         coatings: [
            "close range",
            "power"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1076,
             branches: [
                1078
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/57495f2e45e3313658d81c957bc02985c6608a55.80818b9aa3b7f2464ac9ef972622fdbd.png"
        }
    },
    {
         id: 1078,
         type: "bow",
         rarity: 3,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Bow 1",
         coatings: [
            "close range",
            "power"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1077,
             branches: [
                1079
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/954f4652d4c418ff522f7bdd8e03e6bf99846615.39520543adc101dd7154244ac5b05785.png"
        }
    },
    {
         id: 1079,
         type: "bow",
         rarity: 4,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Bow 2",
         coatings: [
            "close range",
            "power"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1078,
             branches: [
                1080
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/954f4652d4c418ff522f7bdd8e03e6bf99846615.39520543adc101dd7154244ac5b05785.png"
        }
    },
    {
         id: 1080,
         type: "bow",
         rarity: 5,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Steel Bow 3",
         coatings: [
            "close range",
            "power"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1079,
             branches: [
                1081
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/954f4652d4c418ff522f7bdd8e03e6bf99846615.39520543adc101dd7154244ac5b05785.png"
        }
    },
    {
         id: 1081,
         type: "bow",
         rarity: 6,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Alloy Bow 1",
         coatings: [
            "close range",
            "power"
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
             craftable: false,
             previous: 1080,
             branches: [
                1082,
                1083
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/954f4652d4c418ff522f7bdd8e03e6bf99846615.39520543adc101dd7154244ac5b05785.png"
        }
    },
    {
         id: 1082,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Alloy Bow 2",
         coatings: [
            "close range",
            "power"
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
                 type: "thunder",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1081,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/954f4652d4c418ff522f7bdd8e03e6bf99846615.39520543adc101dd7154244ac5b05785.png"
        }
    },
    {
         id: 1083,
         type: "bow",
         rarity: 7,
         attack: {
             display: 228,
             raw: 190
        },
         elderseal: "high",
         attributes: {},
         damageType: "projectile",
         name: "Nergal Whisper",
         coatings: [
            "close range",
            "power"
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
             previous: 1081,
             branches: [
                1084
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/40924f33010941574f9f84901a9d52b5119c34c9.b88e91bd70bc8b19205dddd5e96337a1.png"
        }
    },
    {
         id: 1084,
         type: "bow",
         rarity: 8,
         attack: {
             display: 240,
             raw: 200
        },
         elderseal: "high",
         attributes: {},
         damageType: "projectile",
         name: "Doom's Shaft",
         coatings: [
            "close range",
            "power"
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
             previous: 1083,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/0526c70015bbcf0513e7b8a74b5a06ddf0c154c6.f721e8c215a8ed59667889491ef4ed5b.png"
        }
    },
    {
         id: 1085,
         type: "bow",
         rarity: 2,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kulu Arrow 1",
         coatings: [
            "close range",
            "paralysis",
            "sleep",
            "blast"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1076,
             branches: [
                1086
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/cdc7eb3e3d300f8333e12b0da42e13422bdbfac7.ac582f67a6c2957d34d83e55009eca0a.png"
        }
    },
    {
         id: 1086,
         type: "bow",
         rarity: 3,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kulu Arrow 2",
         coatings: [
            "close range",
            "paralysis",
            "sleep",
            "blast"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1085,
             branches: [
                1087
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/cdc7eb3e3d300f8333e12b0da42e13422bdbfac7.ac582f67a6c2957d34d83e55009eca0a.png"
        }
    },
    {
         id: 1087,
         type: "bow",
         rarity: 4,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kulu Arrow 3",
         coatings: [
            "close range",
            "paralysis",
            "sleep",
            "blast"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1086,
             branches: [
                1088
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/cdc7eb3e3d300f8333e12b0da42e13422bdbfac7.ac582f67a6c2957d34d83e55009eca0a.png"
        }
    },
    {
         id: 1088,
         type: "bow",
         rarity: 5,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Archer's Dance 1",
         coatings: [
            "close range",
            "paralysis",
            "sleep",
            "blast"
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 210,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 1087,
             branches: [
                1089,
                1091,
                1093
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/1cfc8c8ea59217d3f2efa62c7ae49a5d5df5f303.b69a2601a5f6d534667f9e2cd11ffc39.png"
        }
    },
    {
         id: 1089,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Archer's Dance 2",
         coatings: [
            "close range",
            "paralysis",
            "sleep",
            "blast"
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1089,
             branches: [
                1089
            ],
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/1cfc8c8ea59217d3f2efa62c7ae49a5d5df5f303.b69a2601a5f6d534667f9e2cd11ffc39.png"
        }
    },
    {
         id: 1090,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20,
             damageType: "projectile",
             coatings: [
                "close range",
                "paralysis",
                "blast",
                "sleep"
            ]
        },
         damageType: "projectile",
         name: "Archer's Dance 3",
         coatings: [
            "close range",
            "paralysis",
            "blast",
            "sleep"
        ],
         slots: [],
         elements: [
            {
                 type: "blast",
                 damage: 270,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1089,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
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
                     quantity: 2,
                     item: {
                         id: 409,
                         rarity: 7,
                         carryLimit: 99,
                         value: 4500,
                         name: "Nergigante Talon",
                         description: "Rare Nergigante material. Mostly obtained by carving. Sharp, used in many weapons."
                    }
                }
            ]
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/1cfc8c8ea59217d3f2efa62c7ae49a5d5df5f303.b69a2601a5f6d534667f9e2cd11ffc39.png"
        }
    },
    {
         id: 1091,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Brazencord",
         coatings: [
            "close range",
            "sleep",
            "blast"
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
             previous: 1088,
             branches: [
                1092
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/ecdc391c62995b6bee75248dca8f164542fa2643.85c35eb8b6533c59c7730c85568373f7.png"
        }
    },
    {
         id: 1092,
         type: "bow",
         rarity: 8,
         attack: {
             display: 228,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Gigacles",
         coatings: [
            "close range",
            "sleep",
            "blast"
        ],
         slots: [
            {
                 rank: 3
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
             previous: 1091,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/ecdc391c62995b6bee75248dca8f164542fa2643.85c35eb8b6533c59c7730c85568373f7.png"
        }
    },
    {
         id: 1093,
         type: "bow",
         rarity: 3,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Princess Arrow 1",
         coatings: [
            "close range",
            "power",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1088,
             branches: [
                1094,
                1096
            ],
             craftingMaterials: [],
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/7034552993c55d853534e7283d916db77b6f8d1f.c74ecab50aaaaa7f53cd74fdf2203dc0.png"
        }
    },
    {
         id: 1094,
         type: "bow",
         rarity: 5,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Princess Arrow 2",
         coatings: [
            "close range",
            "power",
            "poison"
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
                 damage: 180,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1093,
             branches: [
                1095
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/7034552993c55d853534e7283d916db77b6f8d1f.c74ecab50aaaaa7f53cd74fdf2203dc0.png"
        }
    },
    {
         id: 1095,
         type: "bow",
         rarity: 6,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: "low",
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Princess Arrow 3",
         coatings: [
            "close range",
            "power",
            "poison"
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
                 type: "dragon",
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1094,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/7034552993c55d853534e7283d916db77b6f8d1f.c74ecab50aaaaa7f53cd74fdf2203dc0.png"
        }
    },
    {
         id: 1096,
         type: "bow",
         rarity: 4,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Rathslinger 1",
         coatings: [
            "close range",
            "power",
            "poison"
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
             previous: 1093,
             branches: [
                1097
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/c05962f8f46126765a6224ed2e3b1944d2fdc193.ef565353cf59409dc30c009a99d12b07.png"
        }
    },
    {
         id: 1097,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Rathslinger 2",
         coatings: [
            "close range",
            "power",
            "poison"
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
             previous: 1096,
             branches: [
                1098
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/c05962f8f46126765a6224ed2e3b1944d2fdc193.ef565353cf59409dc30c009a99d12b07.png"
        }
    },
    {
         id: 1098,
         type: "bow",
         rarity: 7,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Rathslinger 3",
         coatings: [
            "close range",
            "power",
            "poison"
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
             previous: 1097,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/c05962f8f46126765a6224ed2e3b1944d2fdc193.ef565353cf59409dc30c009a99d12b07.png"
        }
    },
    {
         id: 1099,
         type: "bow",
         rarity: 2,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Arrow 1",
         coatings: [
            "close range",
            "power"
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
             previous: 1075,
             branches: [
                1100
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/404f23886580639aeb3a70bc36f8e0196f5966b2.13ecdea2a981d2432c49974898a2a50a.png"
        }
    },
    {
         id: 1100,
         type: "bow",
         rarity: 3,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Arrow 2",
         coatings: [
            "close range",
            "power"
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
             previous: 1099,
             branches: [
                1101,
                1105
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/404f23886580639aeb3a70bc36f8e0196f5966b2.13ecdea2a981d2432c49974898a2a50a.png"
        }
    },
    {
         id: 1101,
         type: "bow",
         rarity: 4,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Aqua Arrow 3",
         coatings: [
            "close range",
            "power"
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
             previous: 1100,
             branches: [
                1102
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/404f23886580639aeb3a70bc36f8e0196f5966b2.13ecdea2a981d2432c49974898a2a50a.png"
        }
    },
    {
         id: 1102,
         type: "bow",
         rarity: 5,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Shot 1",
         coatings: [
            "close range",
            "power"
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
             previous: 1101,
             branches: [
                1103
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/0c47056ae7030f4d9ad9bb5141beddd36b769691.fe461285a902dddca5fdfd3054fe7eed.png"
        }
    },
    {
         id: 1103,
         type: "bow",
         rarity: 6,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Shot 2",
         coatings: [
            "close range",
            "power"
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
             previous: 1102,
             branches: [
                1104
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/0c47056ae7030f4d9ad9bb5141beddd36b769691.fe461285a902dddca5fdfd3054fe7eed.png"
        }
    },
    {
         id: 1104,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Water Shot 3",
         coatings: [
            "close range",
            "power"
        ],
         slots: [
            {
                 rank: 3
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
             previous: 1103,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/0c47056ae7030f4d9ad9bb5141beddd36b769691.fe461285a902dddca5fdfd3054fe7eed.png"
        }
    },
    {
         id: 1105,
         type: "bow",
         rarity: 4,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Glacial Arrow 1",
         coatings: [
            "close range",
            "power",
            "poison",
            "sleep"
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
             previous: 1100,
             branches: [
                1106
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/1ceb596a214136734f1cfc54f4f15c2b621504fc.f0e697df027729dff4ced5b71ce7290b.png"
        }
    },
    {
         id: 1106,
         type: "bow",
         rarity: 5,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Glacial Arrow 2",
         coatings: [
            "close range",
            "power",
            "poison",
            "sleep"
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
             previous: 1105,
             branches: [
                1107
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/1ceb596a214136734f1cfc54f4f15c2b621504fc.f0e697df027729dff4ced5b71ce7290b.png"
        }
    },
    {
         id: 1107,
         type: "bow",
         rarity: 6,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Snowfletcher",
         coatings: [
            "close range",
            "power",
            "poison",
            "sleep"
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
             previous: 1106,
             branches: [
                1108
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/0e0b36a4a517455892aa22c9f28ec0e3c9339579.284dd1b1c67187da0575ed1a6c06997b.png"
        }
    },
    {
         id: 1108,
         type: "bow",
         rarity: 8,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Legia Snowfletcher",
         coatings: [
            "close range",
            "power",
            "poison",
            "sleep"
        ],
         slots: [],
         elements: [
            {
                 type: "ice",
                 damage: 390,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1107,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/0e0b36a4a517455892aa22c9f28ec0e3c9339579.284dd1b1c67187da0575ed1a6c06997b.png"
        }
    },
    {
         id: 1109,
         type: "bow",
         rarity: 1,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Bow 1",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1110
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/84804385278d5e8d16cb37690be47d62eb3c1c80.487fbbc3c2d34d95d71c8b7dd4712b11.png"
        }
    },
    {
         id: 1110,
         type: "bow",
         rarity: 1,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Bow 2",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1109,
             branches: [
                1111,
                1124,
                1135
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/84804385278d5e8d16cb37690be47d62eb3c1c80.487fbbc3c2d34d95d71c8b7dd4712b11.png"
        }
    },
    {
         id: 1111,
         type: "bow",
         rarity: 2,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Bow 3",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1110,
             branches: [
                1112
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/84804385278d5e8d16cb37690be47d62eb3c1c80.487fbbc3c2d34d95d71c8b7dd4712b11.png"
        }
    },
    {
         id: 1112,
         type: "bow",
         rarity: 3,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Stoutbow 1",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1111,
             branches: [
                1113,
                1119
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/3c0111b95a55da7b777d4bf6afa7a94a02596ea2.1026bbb899b7fc834da31873477c403d.png"
        }
    },
    {
         id: 1113,
         type: "bow",
         rarity: 4,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Stoutbow 2",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1112,
             branches: [
                1114
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/3c0111b95a55da7b777d4bf6afa7a94a02596ea2.1026bbb899b7fc834da31873477c403d.png"
        }
    },
    {
         id: 1114,
         type: "bow",
         rarity: 5,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Hunter's Stoutbow 3",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1113,
             branches: [
                1115
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/3c0111b95a55da7b777d4bf6afa7a94a02596ea2.1026bbb899b7fc834da31873477c403d.png"
        }
    },
    {
         id: 1115,
         type: "bow",
         rarity: 6,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Hunter's Proudbow 1",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1114,
             branches: [
                1116,
                1117
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/3c0111b95a55da7b777d4bf6afa7a94a02596ea2.1026bbb899b7fc834da31873477c403d.png"
        }
    },
    {
         id: 1116,
         type: "bow",
         rarity: 6,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Hunter's Proudbow 2",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1115,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/3c0111b95a55da7b777d4bf6afa7a94a02596ea2.1026bbb899b7fc834da31873477c403d.png"
        }
    },
    {
         id: 1117,
         type: "bow",
         rarity: 0,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: "average",
         attributes: {},
         damageType: "projectile",
         name: "Hazak Velos 1",
         coatings: [
            "close range",
            "power",
            "sleep"
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
             previous: 1115,
             branches: [
                1118
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/e2d4a1addc3de909797e2f4fa312f514f1b0fa8c.faeb914f6a8d1b90f4d39ac03b71b56d.png"
        }
    },
    {
         id: 1118,
         type: "bow",
         rarity: 0,
         attack: {
             display: 228,
             raw: 190
        },
         elderseal: "average",
         attributes: {},
         damageType: "projectile",
         name: "Hazak Velos 2",
         coatings: [
            "close range",
            "power",
            "sleep"
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
             previous: 1117,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/e2d4a1addc3de909797e2f4fa312f514f1b0fa8c.faeb914f6a8d1b90f4d39ac03b71b56d.png"
        }
    },
    {
         id: 1119,
         type: "bow",
         rarity: 4,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Diablos Bow 1",
         coatings: [
            "close range",
            "power",
            "paralysis"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1112,
             branches: [
                1120
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/e1ab150c6edc0a289e2e36c820a5178bad20ad21.59f5c07db4f3f0e0f3d6861ff1b542f4.png"
        }
    },
    {
         id: 1120,
         type: "bow",
         rarity: 5,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Diablos Bow 2",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
                 type: "ice",
                 damage: 60,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1119,
             branches: [
                1121
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/e1ab150c6edc0a289e2e36c820a5178bad20ad21.59f5c07db4f3f0e0f3d6861ff1b542f4.png"
        }
    },
    {
         id: 1121,
         type: "bow",
         rarity: 6,
         attack: {
             display: 240,
             raw: 200
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Diablos Coilbender",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
                 type: "ice",
                 damage: 90,
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: 1120,
             branches: [
                1122
            ],
             craftingMaterials: [
                {
                     quantity: 6,
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
                     quantity: 4,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/5ea76411e84e04ec0d5cdc639fbaeefd2738dc15.950a32338eab27b3c9f64730c0300e2b.png"
        }
    },
    {
         id: 1122,
         type: "bow",
         rarity: 7,
         attack: {
             display: 252,
             raw: 210
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Galebender",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
                 type: "ice",
                 damage: 120,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1121,
             branches: [
                1123
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/7239d266243d3edf61264f1c4659292d63dfee92.76f1e11471c7e818b71411a240b57c0f.png"
        }
    },
    {
         id: 1123,
         type: "bow",
         rarity: 8,
         attack: {
             display: 264,
             raw: 220
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Cera Coilbender",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
                 type: "ice",
                 damage: 150,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1122,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/7239d266243d3edf61264f1c4659292d63dfee92.76f1e11471c7e818b71411a240b57c0f.png"
        }
    },
    {
         id: 1124,
         type: "bow",
         rarity: 2,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Arch 1",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1110,
             branches: [
                1125,
                1130
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/e3fd2dbd83ee9610fe881fa74a1320158de49081.ba8e582b583c001daf9eb4d3a3443469.png"
        }
    },
    {
         id: 1125,
         type: "bow",
         rarity: 3,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Arch 2",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1124,
             branches: [
                1126
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/e3fd2dbd83ee9610fe881fa74a1320158de49081.ba8e582b583c001daf9eb4d3a3443469.png"
        }
    },
    {
         id: 1126,
         type: "bow",
         rarity: 4,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blooming Arch 3",
         coatings: [
            "close range",
            "paralysis",
            "poison"
        ],
         slots: [],
         elements: [],
         crafting: {
             craftable: false,
             previous: 1125,
             branches: [
                1127
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/79c72e744064061b5fff2136bfdac14ce14d26be.a93f9978da71cf13bcbd9a5260a132ec.png"
        }
    },
    {
         id: 1127,
         type: "bow",
         rarity: 5,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura String 1",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1126,
             branches: [
                1128
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/0418296a59ef025b36d4d3c0508ed564f808271a.81c10525e32f271a0644ff32dd0cfe11.png"
        }
    },
    {
         id: 1128,
         type: "bow",
         rarity: 6,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura String 2",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1127,
             branches: [
                1129
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/0418296a59ef025b36d4d3c0508ed564f808271a.81c10525e32f271a0644ff32dd0cfe11.png"
        }
    },
    {
         id: 1129,
         type: "bow",
         rarity: 6,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Datura String 3",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 damage: 240,
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1128,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/0418296a59ef025b36d4d3c0508ed564f808271a.81c10525e32f271a0644ff32dd0cfe11.png"
        }
    },
    {
         id: 1130,
         type: "bow",
         rarity: 3,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blazing Bow 1",
         coatings: [
            "close range",
            "power",
            "blast"
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
             previous: 1124,
             branches: [
                1131
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/8bd74df5950907a72fa54d5ad5f767fc45e077ec.1db6d1864370e117de6aedc54ac1b0b1.png"
        }
    },
    {
         id: 1131,
         type: "bow",
         rarity: 4,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Blazing Bow 2",
         coatings: [
            "close range",
            "power",
            "blast"
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
             previous: 1130,
             branches: [
                1132
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/8bd74df5950907a72fa54d5ad5f767fc45e077ec.1db6d1864370e117de6aedc54ac1b0b1.png"
        }
    },
    {
         id: 1132,
         type: "bow",
         rarity: 5,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Arch 1",
         coatings: [
            "close range",
            "power",
            "blast"
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
             previous: 1131,
             branches: [
                1133
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/21444e12e3bdd63ef6c6c063af40761dd989f541.427aaf77c546bd1485828c1698d0e171.png"
        }
    },
    {
         id: 1133,
         type: "bow",
         rarity: 6,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Arch 2",
         coatings: [
            "close range",
            "power",
            "blast"
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
             previous: 1132,
             branches: [
                1134
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/21444e12e3bdd63ef6c6c063af40761dd989f541.427aaf77c546bd1485828c1698d0e171.png"
        }
    },
    {
         id: 1134,
         type: "bow",
         rarity: 6,
         attack: {
             display: 240,
             raw: 200
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Anja Arch 3",
         coatings: [
            "close range",
            "power",
            "blast"
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
             previous: 1133,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/21444e12e3bdd63ef6c6c063af40761dd989f541.427aaf77c546bd1485828c1698d0e171.png"
        }
    },
    {
         id: 1135,
         type: "bow",
         rarity: 2,
         attack: {
             display: 144,
             raw: 120
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Bow 1",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
             previous: 1110,
             branches: [
                1136
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a40eb3cc7825656a0181839b9f9eca43.417e0bb3bde62394bddd667752ce1687c0b1dd46.png",
             image: "https://assets.mhw-db.com/weapons/bow/25665588285aca426ff5820d3eeae4e632f3dd02.1e05f26816687a3200264affb1261770.png"
        }
    },
    {
         id: 1136,
         type: "bow",
         rarity: 3,
         attack: {
             display: 156,
             raw: 130
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Bow 2",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
             previous: 1135,
             branches: [
                1137
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/25665588285aca426ff5820d3eeae4e632f3dd02.1e05f26816687a3200264affb1261770.png"
        }
    },
    {
         id: 1137,
         type: "bow",
         rarity: 4,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Pulsar Bow 3",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
             previous: 1136,
             branches: [
                1138
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/25665588285aca426ff5820d3eeae4e632f3dd02.1e05f26816687a3200264affb1261770.png"
        }
    },
    {
         id: 1138,
         type: "bow",
         rarity: 5,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Kadachi Strikebow",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
             previous: 1137,
             branches: [
                1139
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/57f8b7e8023cb3fdccc8339cf789aa30adbf2c12.a93ca6e1bbf57d6e27f855f3ddd8b21b.png"
        }
    },
    {
         id: 1139,
         type: "bow",
         rarity: 7,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Flying Kadachi Strikebow",
         coatings: [
            "close range",
            "power",
            "paralysis"
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
             previous: 1138,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/57f8b7e8023cb3fdccc8339cf789aa30adbf2c12.a93ca6e1bbf57d6e27f855f3ddd8b21b.png"
        }
    },
    {
         id: 1140,
         type: "bow",
         rarity: 3,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bow 1",
         coatings: [
            "close range",
            "paralysis",
            "sleep"
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
                1141
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/1b087915bc8089e8550fd6585f1fc3b0.25cfb7757d2a09acdce30555011860b7e33e9047.png",
             image: "https://assets.mhw-db.com/weapons/bow/8216677a3919fcb9ecdf41c1d8593421563e1408.fd56fa1b5a8d67906647515fde323010.png"
        }
    },
    {
         id: 1141,
         type: "bow",
         rarity: 4,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bow 2",
         coatings: [
            "close range",
            "paralysis",
            "sleep"
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
             previous: 1140,
             branches: [
                1142
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/a0b22b13947ad76a365a41a7a3c54b3c.1aea6294f1ca2eef5763c61fb4354d22c5bcec98.png",
             image: "https://assets.mhw-db.com/weapons/bow/8216677a3919fcb9ecdf41c1d8593421563e1408.fd56fa1b5a8d67906647515fde323010.png"
        }
    },
    {
         id: 1142,
         type: "bow",
         rarity: 6,
         attack: {
             display: 180,
             raw: 150
        },
         elderseal: "low",
         attributes: {},
         damageType: "projectile",
         name: "Dragonbone Bow 3",
         coatings: [
            "close range",
            "paralysis",
            "sleep"
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
             previous: 1141,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/8216677a3919fcb9ecdf41c1d8593421563e1408.fd56fa1b5a8d67906647515fde323010.png"
        }
    },
    {
         id: 1143,
         type: "bow",
         rarity: 5,
         attack: {
             display: 120,
             raw: 100
        },
         elderseal: "low",
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Bow 1",
         coatings: [
            "close range",
            "paralysis",
            "sleep"
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
                1144
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/63831b9e7b3a8ba0623c78581ae6626a2e1a67cb.a6c8ec827652a48049227929a971d13f.png"
        }
    },
    {
         id: 1144,
         type: "bow",
         rarity: 6,
         attack: {
             display: 132,
             raw: 110
        },
         elderseal: "low",
         attributes: {},
         damageType: "projectile",
         name: "Blacksteel Bow 2",
         coatings: [
            "close range",
            "paralysis",
            "sleep"
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
             previous: 1143,
             branches: [
                1145,
                1147
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/63831b9e7b3a8ba0623c78581ae6626a2e1a67cb.a6c8ec827652a48049227929a971d13f.png"
        }
    },
    {
         id: 1145,
         type: "bow",
         rarity: 7,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Icesteel Bow",
         coatings: [
            "close range",
            "power"
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
                 type: "ice",
                 damage: 210,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1144,
             branches: [
                1146
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/927d313a9cf4594c660e8b88be78182c39ef9255.d6bdb4b2d84dc3aefe743ffe67935cc6.png"
        }
    },
    {
         id: 1146,
         type: "bow",
         rarity: 8,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Daora's Sagittarii",
         coatings: [
            "close range",
            "power"
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
                 type: "ice",
                 damage: 240,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1145,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/927d313a9cf4594c660e8b88be78182c39ef9255.d6bdb4b2d84dc3aefe743ffe67935cc6.png"
        }
    },
    {
         id: 1147,
         type: "bow",
         rarity: 8,
         attack: {
             display: 204,
             raw: 170
        },
         elderseal: "low",
         attributes: {
             affinity: 15
        },
         damageType: "projectile",
         name: "Xeno Metora",
         coatings: [
            "close range",
            "power",
            "poison",
            "blast"
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
             previous: 1144,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/62488330d9bafa3cdf92512c0741d746ddee5325.2d065c5344494944d9b73c9f941137c6.png"
        }
    },
    {
         id: 1148,
         type: "bow",
         rarity: 6,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Cross Hunter's Bow",
         coatings: [
            "close range",
            "paralysis",
            "poison",
            "sleep",
            "blast"
        ],
         slots: [
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
             craftable: true,
             previous: null,
             branches: [
                1149
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/f6b2267c512dbf6e036e1a8473ddf84c16209196.c595b785a7d396a3439e251ee19e47a4.png"
        }
    },
    {
         id: 1149,
         type: "bow",
         rarity: 8,
         attack: {
             display: 228,
             raw: 190
        },
         elderseal: null,
         attributes: {
             defense: 0
        },
         damageType: "projectile",
         name: "Great Hunter's Bow",
         coatings: [
            "close range",
            "paralysis",
            "poison",
            "sleep",
            "blast"
        ],
         slots: [
            {
                 rank: 3
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
             previous: 1148,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/0de2e14646f4959e54868595817d6b07.d9951f1de312edfbb597a06d7026d7469afa14e0.png",
             image: "https://assets.mhw-db.com/weapons/bow/f6b2267c512dbf6e036e1a8473ddf84c16209196.c595b785a7d396a3439e251ee19e47a4.png"
        }
    },
    {
         id: 1176,
         type: "bow",
         rarity: 6,
         attack: {
             display: 252,
             raw: 210
        },
         elderseal: "high",
         attributes: {},
         damageType: "projectile",
         name: "Insurgent's Bow",
         coatings: [
            "close range",
            "power",
            "poison"
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
                1177
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/5d305209b1cc054d637804d6a4a29fcac66f9c63.80b06e4297bcbea19cf074750c88e53d.png"
        }
    },
    {
         id: 1177,
         type: "bow",
         rarity: 7,
         attack: {
             display: 276,
             raw: 230
        },
         elderseal: "high",
         attributes: {},
         damageType: "projectile",
         name: "Villainous Brace",
         coatings: [
            "close range",
            "power",
            "poison"
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
             previous: 1176,
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/25f8ea6d74f3f6952658c0a2be62908b.bdcffbb929dbd5250076e71bfebb4d30865c6428.png",
             image: "https://assets.mhw-db.com/weapons/bow/b586fc2325e3c3d9c0fb523061120d8161802035.e9d38cda035654c9b89efe35c9c95658.png"
        }
    },
    {
         id: 1178,
         type: "bow",
         rarity: 5,
         attack: {
             display: 168,
             raw: 140
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Aloy's Bow",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: true,
             previous: null,
             branches: [
                1179
            ],
             craftingMaterials: [
                {
                     quantity: 2,
                     item: {
                         id: 450,
                         rarity: 6,
                         carryLimit: 99,
                         value: 400,
                         name: "Nora Brave Trophy",
                         description: "Proof that you have completed the Proving. Grants you the right to craft special equipment."
                    }
                },
                {
                     quantity: 3,
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
                         id: 151,
                         rarity: 6,
                         carryLimit: 99,
                         value: 800,
                         name: "Monster Keenbone",
                         description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
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
            upgradeMaterials: []
        },
         assets: {
             icon: "https://assets.mhw-db.com/weapons/bow/icons/6cc056b628542995277656bf80be580b.07e0e24480f0e7630f6390f9c20991a9dfcc5f79.png",
             image: "https://assets.mhw-db.com/weapons/bow/f854177da4113c047b774994eb501394a2bc7b0d.fd45834eaccafb85473dd4041be02525.png"
        }
    },
    {
         id: 1179,
         type: "bow",
         rarity: 6,
         attack: {
             display: 192,
             raw: 160
        },
         elderseal: null,
         attributes: {
             affinity: 30
        },
         damageType: "projectile",
         name: "Aloy's War Bow",
         coatings: [
            "close range",
            "paralysis",
            "poison"
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
                 hidden: true
            }
        ],
         crafting: {
             craftable: false,
             previous: 1178,
             branches: [],
             craftingMaterials: [],
            upgradeMaterials: [
                {
                     quantity: 3,
                     item: {
                         id: 450,
                         rarity: 6,
                         carryLimit: 99,
                         value: 400,
                         name: "Nora Brave Trophy",
                         description: "Proof that you have completed the Proving. Grants you the right to craft special equipment."
                    }
                },
                {
                     quantity: 7,
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
                         id: 153,
                         rarity: 7,
                         carryLimit: 99,
                         value: 1600,
                         name: "Elder Dragon Bone",
                         description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
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
             icon: "https://assets.mhw-db.com/weapons/bow/icons/32ffcfad5a90a478dab41208093ea5af.e05ae1e5d1a29738aa3562d3778bf39728489f09.png",
             image: "https://assets.mhw-db.com/weapons/bow/f854177da4113c047b774994eb501394a2bc7b0d.fd45834eaccafb85473dd4041be02525.png"
        }
    },
    {
         id: 1243,
         type: "bow",
         rarity: 7,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Arrow",
         coatings: [
            "close range",
            "power"
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
             craftable: true,
             previous: null,
             branches: [
                1244,
                1245,
                1246
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
             image: "https://assets.mhw-db.com/weapons/bow/20a9cfd9a6a80fa5666c7ab487c7422eff1d9092.05b8f5c24b77309f5fecbd97b9114c61.png"
        }
    },
    {
         id: 1244,
         type: "bow",
         rarity: 8,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 20
        },
         damageType: "projectile",
         name: "Empress Arrow \"Blaze\"",
         coatings: [
            "close range",
            "power"
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
                 damage: 120,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1243,
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
             image: "https://assets.mhw-db.com/weapons/bow/20a9cfd9a6a80fa5666c7ab487c7422eff1d9092.05b8f5c24b77309f5fecbd97b9114c61.png"
        }
    },
    {
         id: 1245,
         type: "bow",
         rarity: 8,
         attack: {
             display: 228,
             raw: 190
        },
         elderseal: null,
         attributes: {},
         damageType: "projectile",
         name: "Empress Arrow \"Ruin\"",
         coatings: [
            "close range",
            "power",
            "poison",
            "sleep"
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
                 damage: 90,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1243,
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
             image: "https://assets.mhw-db.com/weapons/bow/20a9cfd9a6a80fa5666c7ab487c7422eff1d9092.05b8f5c24b77309f5fecbd97b9114c61.png"
        }
    },
    {
         id: 1246,
         type: "bow",
         rarity: 8,
         attack: {
             display: 216,
             raw: 180
        },
         elderseal: null,
         attributes: {
             affinity: 10
        },
         damageType: "projectile",
         name: "Empress Arrow \"Styx\"",
         coatings: [
            "close range",
            "power"
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
                 damage: 180,
                 hidden: false
            }
        ],
         crafting: {
             craftable: false,
             previous: 1243,
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
             image: "https://assets.mhw-db.com/weapons/bow/20a9cfd9a6a80fa5666c7ab487c7422eff1d9092.05b8f5c24b77309f5fecbd97b9114c61.png"
        }
    }
 ]

 module.exports = {
    bowData,
    createBows
 }