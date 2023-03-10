const { client } = require("../client");

const createGL = async ({id,type,rarity,attack,elderseal,attributes,damageType,name,durability,shelling,slots,elements,crafting,assets}) => {

    try {

        const {rows: [gl]} = await client.query(`
        INSERT INTO gl(id,type,rarity,attack,elderseal,attributes,"damageType",name,durability,shelling,slots,elements,crafting,assets)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
        RETURNING *;
        `,[id,type,rarity,attack,elderseal,attributes,damageType,name,durability,shelling,slots,elements,crafting,assets]);
    
        return gl;
        
      } catch (error) {
        throw error
      }

    } 

const gunlanceData = [
          {
               id: 598,
               type: "gunlance",
               rarity: 1,
               attack: {
                   display: 184,
                   raw: 80
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Iron Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                      599
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/5a4612e665d514ebe5c3b7ec1858e1c26502835d.5dac264f5d63a5327b0730b3c334e6b3.png"
              }
          },
          {
               id: 599,
               type: "gunlance",
               rarity: 1,
               attack: {
                   display: 207,
                   raw: 90
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Iron Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                   previous: 598,
                   branches: [
                      600,
                      608,
                      623
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/5a4612e665d514ebe5c3b7ec1858e1c26502835d.5dac264f5d63a5327b0730b3c334e6b3.png"
              }
          },
          {
               id: 600,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 230,
                   raw: 100
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Iron Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                   previous: 599,
                   branches: [
                      601
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/5a4612e665d514ebe5c3b7ec1858e1c26502835d.5dac264f5d63a5327b0730b3c334e6b3.png"
              }
          },
          {
               id: 601,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Steel Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 600,
                   branches: [
                      602
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/62bb679fade3cc13252dc5bf09671c7ddd5f3c98.9b93cf1254b33f15f1f887dfc98d20fe.png"
              }
          },
          {
               id: 602,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Steel Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 601,
                   branches: [
                      603
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/62bb679fade3cc13252dc5bf09671c7ddd5f3c98.9b93cf1254b33f15f1f887dfc98d20fe.png"
              }
          },
          {
               id: 603,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 322,
                   raw: 140
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Steel Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 210,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 602,
                   branches: [
                      604
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/62bb679fade3cc13252dc5bf09671c7ddd5f3c98.9b93cf1254b33f15f1f887dfc98d20fe.png"
              }
          },
          {
               id: 604,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Chrome Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "blast",
                       damage: 240,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 603,
                   branches: [
                      605,
                      606
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/62bb679fade3cc13252dc5bf09671c7ddd5f3c98.9b93cf1254b33f15f1f887dfc98d20fe.png"
              }
          },
          {
               id: 605,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 414,
                   raw: 180
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Chrome Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                   previous: 604,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/62bb679fade3cc13252dc5bf09671c7ddd5f3c98.9b93cf1254b33f15f1f887dfc98d20fe.png"
              }
          },
          {
               id: 606,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 460,
                   raw: 200
              },
               elderseal: "high",
               attributes: {},
               damageType: "sever",
               name: "Nergal Ram",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
                   previous: 604,
                   branches: [
                      607
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/631af994485a7a4a03aca22e0a8ae9ba1c3f1eeb.604b4af07f7bd58f85bad27485161add.png"
              }
          },
          {
               id: 607,
               type: "gunlance",
               rarity: 8,
               attack: {
                   display: 483,
                   raw: 210
              },
               elderseal: "high",
               attributes: {},
               damageType: "sever",
               name: "Eradication Flame",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
                   previous: 606,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/e02bf1fdd876802e9e41f179d19c9700.cdb51f23d4e95fb1cf583f3ebdf867315a28a944.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/6db7278e93d1cb685facb6ace1313188af3a536d.731e28b4e768a05590aebf96033d958e.png"
              }
          },
          {
               id: 608,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 230,
                   raw: 100
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Pulsar Gunlance 1",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                       type: "thunder",
                       damage: 120,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 599,
                   branches: [
                      609,
                      619
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/de938a17368f329ea79f0f003565994a705beea2.c2a1d16db356abcb15dda5418f47177f.png"
              }
          },
          {
               id: 609,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Pulsar Gunlance 2",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                   previous: 608,
                   branches: [
                      610,
                      614
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/de938a17368f329ea79f0f003565994a705beea2.c2a1d16db356abcb15dda5418f47177f.png"
              }
          },
          {
               id: 610,
               type: "gunlance",
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
               name: "Pulsar Gunlance 3",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                       damage: 180,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 609,
                   branches: [
                      611
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/de938a17368f329ea79f0f003565994a705beea2.c2a1d16db356abcb15dda5418f47177f.png"
              }
          },
          {
               id: 611,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {
                   affinity: 20
              },
               damageType: "sever",
               name: "Kadachi Striker",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                       type: "thunder",
                       damage: 210,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: true,
                   previous: 610,
                   branches: [
                      612
                  ],
                   craftingMaterials: [
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
                           quantity: 7,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/65a58cf186d2a6bbaa05e495fe42a59f3dfd6342.0b2505cb827a68e3b429861ac6e09dc6.png"
              }
          },
          {
               id: 612,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 391,
                   raw: 170
              },
               elderseal: null,
               attributes: {
                   affinity: 20
              },
               damageType: "sever",
               name: "Kadachi Striker+",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 611,
                   branches: [
                      613
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/65a58cf186d2a6bbaa05e495fe42a59f3dfd6342.0b2505cb827a68e3b429861ac6e09dc6.png"
              }
          },
          {
               id: 613,
               type: "gunlance",
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
               name: "Mythic Kadachi Striker",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                   previous: 612,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/65a58cf186d2a6bbaa05e495fe42a59f3dfd6342.0b2505cb827a68e3b429861ac6e09dc6.png"
              }
          },
          {
               id: 614,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {
                   affinity: 15
              },
               damageType: "sever",
               name: "Rath Gunlance 1",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                   previous: 609,
                   branches: [
                      615
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
                  ]
              },
               assets: {
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/da249624c69b8111d3ec4d93f60233edd788b58c.642c4a37a1b234759fa82cd70a07e4e4.png"
              }
          },
          {
               id: 615,
               type: "gunlance",
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
               name: "Rath Gunlance 2",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                       damage: 150,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 614,
                   branches: [
                      616
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/da249624c69b8111d3ec4d93f60233edd788b58c.642c4a37a1b234759fa82cd70a07e4e4.png"
              }
          },
          {
               id: 616,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {
                   affinity: 20
              },
               damageType: "sever",
               name: "Red Rook",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                   previous: 615,
                   branches: [
                      617
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/930206e5b62dac99bc6fe449f2dd3c0f3992f4b1.c6815e4acc7d51f74049c2eb3bf23e5c.png"
              }
          },
          {
               id: 617,
               type: "gunlance",
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
               name: "Blue Rook",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                       damage: 210,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 616,
                   branches: [
                      618
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/2d1fd063a36a80c85b88edfb45645932bdaeb05b.0bc9a4f0b2617a1eb2c8b0113dae8bd0.png"
              }
          },
          {
               id: 618,
               type: "gunlance",
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
               name: "Blue Chariot",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                   previous: 617,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/e02bf1fdd876802e9e41f179d19c9700.cdb51f23d4e95fb1cf583f3ebdf867315a28a944.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/2d1fd063a36a80c85b88edfb45645932bdaeb05b.0bc9a4f0b2617a1eb2c8b0113dae8bd0.png"
              }
          },
          {
               id: 619,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Princess Panoply",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 608,
                   branches: [
                      620
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/ccc8d872d7a9faf1e12bafb00d2440b915344321.04071ab34209ac9d96834d5660d5d88a.png"
              }
          },
          {
               id: 620,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Princess Panoply+",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 270,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 619,
                   branches: [
                      621
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/ccc8d872d7a9faf1e12bafb00d2440b915344321.04071ab34209ac9d96834d5660d5d88a.png"
              }
          },
          {
               id: 621,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 391,
                   raw: 170
              },
               elderseal: null,
               attributes: {
                   affinity: 15
              },
               damageType: "sever",
               name: "Rose Burst",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       damage: 300,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 620,
                   branches: [
                      622
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/3ce6564522e7aef001d4f4e222135f5085886f0f.24303f55eb6603c3bc0b40c22b968546.png"
              }
          },
          {
               id: 622,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {
                   affinity: 15
              },
               damageType: "sever",
               name: "Royal Burst",
               shelling: {
                   type: "normal",
                   level: 4
              },
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
                   previous: 621,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/3ce6564522e7aef001d4f4e222135f5085886f0f.24303f55eb6603c3bc0b40c22b968546.png"
              }
          },
          {
               id: 623,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Madness Gunlance 1",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                       damage: 210,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 599,
                   branches: [
                      624
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e3dfe57ffdd32a47ce1bb1d69ac8ca2fd97395a.66eaa5ffe3647b1aff4586111cb701e1.png"
              }
          },
          {
               id: 624,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Madness Gunlance 2",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 623,
                   branches: [
                      625,
                      629
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e3dfe57ffdd32a47ce1bb1d69ac8ca2fd97395a.66eaa5ffe3647b1aff4586111cb701e1.png"
              }
          },
          {
               id: 625,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Madness Gunlance 3",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                       damage: 270,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 624,
                   branches: [
                      626
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e3dfe57ffdd32a47ce1bb1d69ac8ca2fd97395a.66eaa5ffe3647b1aff4586111cb701e1.png"
              }
          },
          {
               id: 626,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jyura Buster 1",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
                       type: "water",
                       damage: 300,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 625,
                   branches: [
                      627
                  ],
                   craftingMaterials: [],
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/ee543aa373c3ced508ef612df194b070721157e8.d79295ab7cba22714a167be91b735acf.png"
              }
          },
          {
               id: 627,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jyura Buster 2",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
                       type: "water",
                       damage: 330,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 626,
                   branches: [
                      628
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/ee543aa373c3ced508ef612df194b070721157e8.d79295ab7cba22714a167be91b735acf.png"
              }
          },
          {
               id: 628,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jyura Buster 3",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                       type: "water",
                       damage: 360,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 627,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/ee543aa373c3ced508ef612df194b070721157e8.d79295ab7cba22714a167be91b735acf.png"
              }
          },
          {
               id: 629,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Glacial Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 180,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 624,
                   branches: [
                      630
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/fca4980c15366794985b4749208ccb77330bf1d4.769acdc15c97eec8a29b8727971015a2.png"
              }
          },
          {
               id: 630,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 322,
                   raw: 140
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Glacial Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 629,
                   branches: [
                      631
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/fca4980c15366794985b4749208ccb77330bf1d4.769acdc15c97eec8a29b8727971015a2.png"
              }
          },
          {
               id: 631,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Legiana Cannon 1",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "ice",
                       damage: 300,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 630,
                   branches: [
                      632
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/339be10057e161a9040091c586ce76efdcd8006e.e68389dd2111f9a045a834e4aa556e63.png"
              }
          },
          {
               id: 632,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Legiana Cannon 2",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                   previous: 631,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/339be10057e161a9040091c586ce76efdcd8006e.e68389dd2111f9a045a834e4aa556e63.png"
              }
          },
          {
               id: 633,
               type: "gunlance",
               rarity: 1,
               attack: {
                   display: 207,
                   raw: 90
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                      634
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/f1f8450a7fac65ce960d94e176cbfe08574ad54f.c585a9faa713a3d9bad61131fc7a236f.png"
              }
          },
          {
               id: 634,
               type: "gunlance",
               rarity: 1,
               attack: {
                   display: 230,
                   raw: 100
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                   previous: 633,
                   branches: [
                      635,
                      643,
                      656
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/f1f8450a7fac65ce960d94e176cbfe08574ad54f.c585a9faa713a3d9bad61131fc7a236f.png"
              }
          },
          {
               id: 635,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 1
              },
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
                   previous: 634,
                   branches: [
                      636
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/f1f8450a7fac65ce960d94e176cbfe08574ad54f.c585a9faa713a3d9bad61131fc7a236f.png"
              }
          },
          {
               id: 636,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Cannon 1",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                   previous: 635,
                   branches: [
                      637
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 637,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 322,
                   raw: 140
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Cannon 2",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                   previous: 636,
                   branches: [
                      638
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 638,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bone Cannon 3",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                       type: "thunder",
                       damage: 210,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 637,
                   branches: [
                      639,
                      641
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 639,
               type: "gunlance",
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
               name: "Great Bone Gunlance 1",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                       damage: 240,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 638,
                   branches: [
                      640
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 640,
               type: "gunlance",
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
               name: "Great Bone Gunlance 2",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                       type: "thunder",
                       damage: 270,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 639,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 641,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bazel Buster 1",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                       type: "blast",
                       damage: 180,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 638,
                   branches: [
                      642
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/cd02e3c7ed0cc0d20296b8dfab68d0a316e1cdc8.8a3633f868e141fbe00f8395abb0e331.png"
              }
          },
          {
               id: 642,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 460,
                   raw: 200
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Bazel Buster 2",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                       damage: 210,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 641,
                   branches: [],
                   craftingMaterials: [],
                   upgradeMaterials: [
                      {
                           quantity: 3,
                           item: {
                               id: 427,
                               rarity: 7,
                               carryLimit: 99,
                               value: 3600,
                               name: "Teostra Powder",
                               description: "Rare Teostra material. Obtained by collecting rare drops. Unusual, used in select gear."
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/cd02e3c7ed0cc0d20296b8dfab68d0a316e1cdc8.8a3633f868e141fbe00f8395abb0e331.png"
              }
          },
          {
               id: 643,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jagras Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 634,
                   branches: [
                      644,
                      649
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e1876eff90ab854dad57e378c87634fe9eb5cfda.5bd589da188e6c5ca44476eaffe426b4.png"
              }
          },
          {
               id: 644,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jagras Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 643,
                   branches: [
                      645
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e1876eff90ab854dad57e378c87634fe9eb5cfda.5bd589da188e6c5ca44476eaffe426b4.png"
              }
          },
          {
               id: 645,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 322,
                   raw: 140
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Jagras Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 644,
                   branches: [
                      646
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e1876eff90ab854dad57e378c87634fe9eb5cfda.5bd589da188e6c5ca44476eaffe426b4.png"
              }
          },
          {
               id: 646,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Glutton Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                   previous: 645,
                   branches: [
                      647
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/881eccb38f4185ca26ea36d43d807ebb4b7abec3.1966f50335f4b42fa879d15a1469b05f.png"
              }
          },
          {
               id: 647,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Glutton Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "sleep",
                       damage: 270,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 646,
                   branches: [
                      648
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/881eccb38f4185ca26ea36d43d807ebb4b7abec3.1966f50335f4b42fa879d15a1469b05f.png"
              }
          },
          {
               id: 648,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Glutton Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "sleep",
                       damage: 300,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 647,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/881eccb38f4185ca26ea36d43d807ebb4b7abec3.1966f50335f4b42fa879d15a1469b05f.png"
              }
          },
          {
               id: 649,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Girros Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       type: "paralysis",
                       damage: 210,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 643,
                   branches: [
                      650
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/50adaf476494d678d79680424c0c94ce412e7ecb.d50a08a02e43bc394467c9c3934d46ae.png"
              }
          },
          {
               id: 650,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Girros Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       type: "paralysis",
                       damage: 270,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 649,
                   branches: [
                      651
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/50adaf476494d678d79680424c0c94ce412e7ecb.d50a08a02e43bc394467c9c3934d46ae.png"
              }
          },
          {
               id: 651,
               type: "gunlance",
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
               name: "Deathfang Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "paralysis",
                       damage: 330,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: true,
                   previous: 650,
                   branches: [
                      652
                  ],
                   craftingMaterials: [
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
                           quantity: 5,
                           item: {
                               id: 137,
                               rarity: 6,
                               carryLimit: 99,
                               value: 750,
                               name: "Quality Bone",
                               description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/a4de35492accfb5c2ed80316104ede806d0a8f53.1ecdb8b7a8fac9edcb97a14b829a9ac0.png"
              }
          },
          {
               id: 652,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 345,
                   raw: 150
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Deathfang Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                       type: "paralysis",
                       damage: 390,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 651,
                   branches: [
                      653,
                      654
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/a4de35492accfb5c2ed80316104ede806d0a8f53.1ecdb8b7a8fac9edcb97a14b829a9ac0.png"
              }
          },
          {
               id: 653,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Deathfang Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                   previous: 652,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/a4de35492accfb5c2ed80316104ede806d0a8f53.1ecdb8b7a8fac9edcb97a14b829a9ac0.png"
              }
          },
          {
               id: 654,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: "average",
               attributes: {},
               damageType: "sever",
               name: "Hazak Spysa 1",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                   craftable: false,
                   previous: 652,
                   branches: [
                      655
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/c64764f1926e4cfa346d0e67321ea5a11436880e.498aa95e2f1cd6041f0e975f138ec488.png"
              }
          },
          {
               id: 655,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 460,
                   raw: 200
              },
               elderseal: "average",
               attributes: {},
               damageType: "sever",
               name: "Hazak Spysa 2",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                   previous: 654,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/c64764f1926e4cfa346d0e67321ea5a11436880e.498aa95e2f1cd6041f0e975f138ec488.png"
              }
          },
          {
               id: 656,
               type: "gunlance",
               rarity: 2,
               attack: {
                   display: 276,
                   raw: 120
              },
               elderseal: null,
               attributes: {
                   defense: 0
              },
               damageType: "sever",
               name: "Carapace Cannon 1",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                   previous: 634,
                   branches: [
                      657,
                      662
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/c4a5f3c750236580edd4c9ab7cf190b1.e4a1a3f179bc4e9ccbf094992b1078de160f2e60.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 657,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {
                   defense: 0
              },
               damageType: "sever",
               name: "Carapace Cannon 2",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                   previous: 656,
                   branches: [
                      658
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 658,
               type: "gunlance",
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
               name: "Carapace Cannon 3",
               shelling: {
                   type: "wide",
                   level: 1
              },
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
                   previous: 657,
                   branches: [
                      659
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/459b8e211023709ade26c682085bf894eb14939c.fdcf6a5c05dbbf801722472c32c9f649.png"
              }
          },
          {
               id: 659,
               type: "gunlance",
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
               name: "Barroth Blaster 1",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
               slots: [],
               elements: [
                  {
                       type: "paralysis",
                       damage: 270,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 658,
                   branches: [
                      660
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e95ce7b64c965173a03220beb2df67de1c59dbe.42890794f1d8d4aba8def0e30cb5df2a.png"
              }
          },
          {
               id: 660,
               type: "gunlance",
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
               name: "Barroth Blaster 2",
               shelling: {
                   type: "wide",
                   level: 2
              },
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
                       damage: 330,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 659,
                   branches: [
                      661
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e95ce7b64c965173a03220beb2df67de1c59dbe.42890794f1d8d4aba8def0e30cb5df2a.png"
              }
          },
          {
               id: 661,
               type: "gunlance",
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
               name: "Barroth Blaster 3",
               shelling: {
                   type: "wide",
                   level: 3
              },
               durability: [
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 30,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 40,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 50,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 60,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 70,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 120,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 80,
                       white: 0,
                       purple: 0
                  }
              ],
               slots: [],
               elements: [
                  {
                       type: "paralysis",
                       damage: 390,
                       hidden: true
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 660,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1e95ce7b64c965173a03220beb2df67de1c59dbe.42890794f1d8d4aba8def0e30cb5df2a.png"
              }
          },
          {
               id: 662,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 299,
                   raw: 130
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Blazing Gunlance 1",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                   previous: 656,
                   branches: [
                      663
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1d568067e0d74a294916f537e40b192ceacaf648.31975b6ce8c65a34d2b647e3da4ff367.png"
              }
          },
          {
               id: 663,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 322,
                   raw: 140
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Blazing Gunlance 2",
               shelling: {
                   type: "long",
                   level: 1
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 662,
                   branches: [
                      664
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/1d568067e0d74a294916f537e40b192ceacaf648.31975b6ce8c65a34d2b647e3da4ff367.png"
              }
          },
          {
               id: 664,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Anja Cannon 1",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                   previous: 663,
                   branches: [
                      665
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/8cca6b0b2a9042d3e033eb7c2e4b7c68df6ae3c5.fb912d46c9088f1c9aa2e44b95d8da98.png"
              }
          },
          {
               id: 665,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 414,
                   raw: 180
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Anja Cannon 2",
               shelling: {
                   type: "long",
                   level: 2
              },
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
                   previous: 664,
                   branches: [
                      666
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/8cca6b0b2a9042d3e033eb7c2e4b7c68df6ae3c5.fb912d46c9088f1c9aa2e44b95d8da98.png"
              }
          },
          {
               id: 666,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 483,
                   raw: 210
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Anja Cannon 3",
               shelling: {
                   type: "long",
                   level: 3
              },
               durability: [
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 20,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 30,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 40,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 50,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
                       blue: 60,
                       white: 0,
                       purple: 0
                  },
                  {
                       red: 130,
                       orange: 70,
                       yellow: 30,
                       green: 100,
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
                   previous: 665,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/8cca6b0b2a9042d3e033eb7c2e4b7c68df6ae3c5.fb912d46c9088f1c9aa2e44b95d8da98.png"
              }
          },
          {
               id: 667,
               type: "gunlance",
               rarity: 3,
               attack: {
                   display: 230,
                   raw: 100
              },
               elderseal: "low",
               attributes: {},
               damageType: "sever",
               name: "Dragonbone Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 360,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: true,
                   previous: null,
                   branches: [
                      668,
                      670
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/5d6d40158dab88728cdf8dd372c6856b.165d158bf770874fd93751be1cd4143b504d0c1f.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e2b6001caaf3e3cb1570471bdf1e84cd3f80a82b.3598c50a18fa71cc529fc7beea7201cd.png"
              }
          },
          {
               id: 668,
               type: "gunlance",
               rarity: 4,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: "low",
               attributes: {},
               damageType: "sever",
               name: "Dragonbone Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                       damage: 390,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 667,
                   branches: [
                      669
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/78d23b34e462cd2d86f3e77cbba8ccba.650cc015aa4036d50f4daa049ae0b00e578f7321.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e2b6001caaf3e3cb1570471bdf1e84cd3f80a82b.3598c50a18fa71cc529fc7beea7201cd.png"
              }
          },
          {
               id: 669,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: "low",
               attributes: {},
               damageType: "sever",
               name: "Dragonbone Gunlance 3",
               shelling: {
                   type: "normal",
                   level: 3
              },
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
                   previous: 668,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/e2b6001caaf3e3cb1570471bdf1e84cd3f80a82b.3598c50a18fa71cc529fc7beea7201cd.png"
              }
          },
          {
               id: 670,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 368,
                   raw: 160
              },
               elderseal: null,
               attributes: {
                   defense: 0
              },
               damageType: "sever",
               name: "Magda Lahat",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                       type: "blast",
                       damage: 330,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 667,
                   branches: [
                      671
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/0847e7b3add0b65749c970f1ea0dd4350a4035a0.9365685634683a73c28eb9188ee7797f.png"
              }
          },
          {
               id: 671,
               type: "gunlance",
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
               name: "Earthshaker Magda Lahat",
               shelling: {
                   type: "long",
                   level: 4
              },
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
               slots: [],
               elements: [
                  {
                       type: "blast",
                       damage: 420,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 670,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/e02bf1fdd876802e9e41f179d19c9700.cdb51f23d4e95fb1cf583f3ebdf867315a28a944.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/0847e7b3add0b65749c970f1ea0dd4350a4035a0.9365685634683a73c28eb9188ee7797f.png"
              }
          },
          {
               id: 672,
               type: "gunlance",
               rarity: 5,
               attack: {
                   display: 230,
                   raw: 100
              },
               elderseal: "low",
               attributes: {},
               damageType: "sever",
               name: "Blacksteel Gunlance 1",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                      673
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/1f9ff9b6eef86036ec6bb29e3a5c71d1.768976100bf6b11558413a4af65c59c1e4846258.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/5cd6e4e6581f68c50d9a1fbccedd4b29801ce01c.10a6226440a683e0de7f158fbb1dfb1d.png"
              }
          },
          {
               id: 673,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 253,
                   raw: 110
              },
               elderseal: "low",
               attributes: {},
               damageType: null,
               name: "Blacksteel Gunlance 2",
               shelling: {
                   type: "normal",
                   level: 2
              },
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
                   previous: 672,
                   branches: [
                      674,
                      676
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/5cd6e4e6581f68c50d9a1fbccedd4b29801ce01c.10a6226440a683e0de7f158fbb1dfb1d.png"
              }
          },
          {
               id: 674,
               type: "gunlance",
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
               name: "Icesteel Gunlance",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                       rank: 3
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
                   previous: 673,
                   branches: [
                      675
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/02e626c87703e088fc72ed80d916a50b547f26ae.bb4fca909cd6cbd6b1fab9349ee8ae3a.png"
              }
          },
          {
               id: 675,
               type: "gunlance",
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
               name: "Daora's Brigia",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                       type: "ice",
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 674,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/e02bf1fdd876802e9e41f179d19c9700.cdb51f23d4e95fb1cf583f3ebdf867315a28a944.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/02e626c87703e088fc72ed80d916a50b547f26ae.bb4fca909cd6cbd6b1fab9349ee8ae3a.png"
              }
          },
          {
               id: 676,
               type: "gunlance",
               rarity: 8,
               attack: {
                   display: 391,
                   raw: 170
              },
               elderseal: "low",
               attributes: {},
               damageType: "sever",
               name: "Xeno Hemta",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                   previous: 673,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/e02bf1fdd876802e9e41f179d19c9700.cdb51f23d4e95fb1cf583f3ebdf867315a28a944.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/6d5db2d0c92f9991b7f22089b2e32138fa1a75e6.5cccf2ca85330e1ddae5342c64cb93c2.png"
              }
          },
          {
               id: 1164,
               type: "gunlance",
               rarity: 6,
               attack: {
                   display: 483,
                   raw: 210
              },
               elderseal: "high",
               attributes: {},
               damageType: "sever",
               name: "Ravenous Gunlance",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                       damage: 180,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: true,
                   previous: null,
                   branches: [
                      1165
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/76594faba5749c2211e5cd406fb1572e.30155771d9114b0a301ebcbdec62ed71f32ed9c3.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/18f392c2650294441b6d759acc9eb6c304d675ea.a2394f19fb757d80a7720345d1701b05.png"
              }
          },
          {
               id: 1165,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 529,
                   raw: 230
              },
               elderseal: "high",
               attributes: {},
               damageType: "sever",
               name: "Insatiable Gunlance",
               shelling: {
                   type: "long",
                   level: 3
              },
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
                       damage: 240,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 1164,
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
                   icon: "https://assets.mhw-db.com/weapons/gunlance/icons/747cba6ee4a1ec9b8dad9fe9f8b78d19.b343da4ea9072b01b79940a8819bee5cdb0a5853.png",
                   image: "https://assets.mhw-db.com/weapons/gunlance/8d90af8be7b650b2f750c7b26046212479bfd9f5.cf593f193937e0a46876221ad06455e7.png"
              }
          },
          {
               id: 1215,
               type: "gunlance",
               rarity: 7,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Empress Howl",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                       damage: 150,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: true,
                   previous: null,
                   branches: [
                      1216,
                      1217,
                      1218
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
                   image: "https://assets.mhw-db.com/weapons/gunlance/d5dd3e3106bfbcdfd5326399ef08bb86e85c6cae.6ac64fa04e088d16fc56a8e0a788a3fe.png"
              }
          },
          {
               id: 1216,
               type: "gunlance",
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
               name: "Empress Howl \"Blaze\"",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                       damage: 180,
                       hidden: false
                  }
              ],
               crafting: {
                   craftable: false,
                   previous: 1215,
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
                   image: "https://assets.mhw-db.com/weapons/gunlance/d5dd3e3106bfbcdfd5326399ef08bb86e85c6cae.6ac64fa04e088d16fc56a8e0a788a3fe.png"
              }
          },
          {
               id: 1217,
               type: "gunlance",
               rarity: 8,
               attack: {
                   display: 460,
                   raw: 200
              },
               elderseal: null,
               attributes: {},
               damageType: "sever",
               name: "Empress Howl \"Ruin\"",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                   previous: 1215,
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
                   image: "https://assets.mhw-db.com/weapons/gunlance/80e1f5683e38e430005575661b5cd535befb45c3.5d3c616686b229fbb56ec49658306166.png"
              }
          },
          {
               id: 1218,
               type: "gunlance",
               rarity: 8,
               attack: {
                   display: 437,
                   raw: 190
              },
               elderseal: null,
               attributes: {
                   affinity: 10
              },
               damageType: "sever",
               name: "Empress Howl \"Styx\"",
               shelling: {
                   type: "wide",
                   level: 3
              },
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
                   previous: 1215,
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
                   image: "https://assets.mhw-db.com/weapons/gunlance/9ad0e60529ff5c91e4ba829235f681ac0cda3ed4.1ad7e300ac0c23b9a8d33b0535f6c869.png"
              }
          }
]

 module.exports = {
    gunlanceData,
    createGL
 }