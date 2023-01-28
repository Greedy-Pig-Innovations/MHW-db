
const charmData = [
    {
      id: 234,
      name: "Poison Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Poison Charm I",
          skills: [
            {
              id: 1,
              level: 1,
              modifiers: {},
              description: "Reduces the number of times you take poison damage.",
              skill: 1,
              skillName: "Poison Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 1,
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
                  id: 232,
                  rarity: 4,
                  carryLimit: 99,
                  value: 620,
                  name: "Pukei-Pukei Tail",
                  description: "Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
                }
              },
              {
                quantity: 4,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Poison Charm II",
          skills: [
            {
              id: 2,
              level: 2,
              modifiers: {},
              description: "Greatly reduces the number of times you take poison damage.",
              skill: 1,
              skillName: "Poison Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Poison Charm III",
          skills: [
            {
              id: 3,
              level: 3,
              modifiers: {},
              description: "Prevents poison.",
              skill: 1,
              skillName: "Poison Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 235,
      name: "Attack Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Attack Charm I",
          skills: [
            {
              id: 39,
              level: 1,
              modifiers: {
                attack: 3
              },
              description: "Attack +3",
              skill: 15,
              skillName: "Attack Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 4,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Attack Charm II",
          skills: [
            {
              id: 40,
              level: 2,
              modifiers: {
                attack: 6
              },
              description: "Attack +6",
              skill: 15,
              skillName: "Attack Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Attack Charm III",
          skills: [
            {
              id: 41,
              level: 3,
              modifiers: {
                attack: 9
              },
              description: "Attack +9",
              skill: 15,
              skillName: "Attack Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Attack Charm IV",
          skills: [
            {
              id: 42,
              level: 4,
              modifiers: {
                attack: 12,
                affinity: 5
              },
              description: "Attack +12 Affinity +5%",
              skill: 15,
              skillName: "Attack Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 3,
                item: {
                  id: 936,
                  rarity: 11,
                  carryLimit: 99,
                  value: 9340,
                  name: "Annihilating Greathorn",
                  description: "Very rare Ruiner Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 852,
                  rarity: 11,
                  carryLimit: 99,
                  value: 15000,
                  name: "Diablos Hardhorn",
                  description: "Very rare material from Diablos and its subspecies. Obtained by breaking its horns."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 933,
                  rarity: 12,
                  carryLimit: 99,
                  value: 21000,
                  name: "Large Elder Dragon Gem",
                  description: "A giant, ultra-rare stone that forms inside an Elder Dragon once in a millennium."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 658,
                  rarity: 10,
                  carryLimit: 99,
                  value: 3200,
                  name: "Phantomcore Ore",
                  description: "A valuable mineral used to create charms. Its otherworldy shimmering speaks to the power it contains."
                }
              }
            ]
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Attack Charm V",
          skills: [
            {
              id: 43,
              level: 5,
              modifiers: {
                attack: 15,
                affinity: 5
              },
              description: "Attack +15 Affinity +5%",
              skill: 15,
              skillName: "Attack Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 236,
      name: "Defense Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Defense Charm I",
          skills: [
            {
              id: 46,
              level: 1,
              modifiers: {
                defense: 5
              },
              description: "Defense +5",
              skill: 16,
              skillName: "Defense Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 4,
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
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Defense Charm II",
          skills: [
            {
              id: 47,
              level: 2,
              modifiers: {
                defense: 10
              },
              description: "Defense +10",
              skill: 16,
              skillName: "Defense Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 8,
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Defense Charm III",
          skills: [
            {
              id: 48,
              level: 3,
              modifiers: {
                defense: 10
              },
              description: "Defense +5%\nBonus: +10",
              skill: 16,
              skillName: "Defense Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 9,
          name: "Defense Charm IV",
          skills: [
            {
              id: 49,
              level: 4,
              modifiers: {
                defense: 20,
                resistAll: 3
              },
              description: "Defense +5%\nBonus: +20\nAll Elemental Resistances +3",
              skill: 16,
              skillName: "Defense Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 11,
          name: "Defense Charm V",
          skills: [
            {
              id: 50,
              level: 5,
              modifiers: {
                defense: 20,
                resistAll: 3
              },
              description: "Defense +8%\nBonus: +20\nAll Elemental Resistances +3",
              skill: 16,
              skillName: "Defense Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 237,
      name: "Paralysis Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Paralysis Charm I",
          skills: [
            {
              id: 4,
              level: 1,
              modifiers: {},
              description: "Reduces the duration of paralysis by 30%.",
              skill: 2,
              skillName: "Paralysis Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 1,
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
                  id: 304,
                  rarity: 4,
                  carryLimit: 99,
                  value: 750,
                  name: "Great Girros Fang",
                  description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                }
              },
              {
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Paralysis Charm II",
          skills: [
            {
              id: 5,
              level: 2,
              modifiers: {},
              description: "Reduces the duration of paralysis by 60%.",
              skill: 2,
              skillName: "Paralysis Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Paralysis Charm III",
          skills: [
            {
              id: 6,
              level: 3,
              modifiers: {},
              description: "Prevents paralysis.",
              skill: 2,
              skillName: "Paralysis Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 238,
      name: "Sleep Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Sleep Charm I",
          skills: [
            {
              id: 7,
              level: 1,
              modifiers: {},
              description: "Reduces the duration of sleep by 30%.",
              skill: 3,
              skillName: "Sleep Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Sleep Charm II",
          skills: [
            {
              id: 8,
              level: 2,
              modifiers: {},
              description: "Reduces the duration of sleep by 60%.",
              skill: 3,
              skillName: "Sleep Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Sleep Charm III",
          skills: [
            {
              id: 9,
              level: 3,
              modifiers: {},
              description: "Prevents sleep.",
              skill: 3,
              skillName: "Sleep Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 239,
      name: "Stun Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Stun Charm I",
          skills: [
            {
              id: 10,
              level: 1,
              modifiers: {},
              description: "Reduces the duration of stun by 60%.",
              skill: 4,
              skillName: "Stun Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Stun Charm II",
          skills: [
            {
              id: 11,
              level: 2,
              modifiers: {},
              description: "Reduces the duration of stun by 90%.",
              skill: 4,
              skillName: "Stun Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Stun Charm III",
          skills: [
            {
              id: 12,
              level: 3,
              modifiers: {},
              description: "Prevents stun.",
              skill: 4,
              skillName: "Stun Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 240,
      name: "Windproof Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Windproof Charm I",
          skills: [
            {
              id: 28,
              level: 1,
              modifiers: {},
              description: "Slightly reduces the effects of minor wind pressure.",
              skill: 10,
              skillName: "Windproof"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Windproof Charm II",
          skills: [
            {
              id: 29,
              level: 2,
              modifiers: {},
              description: "Reduces the effects of minor wind pressure.",
              skill: 10,
              skillName: "Windproof"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Windproof Charm III",
          skills: [
            {
              id: 30,
              level: 3,
              modifiers: {},
              description: "Negates minor wind pressure.",
              skill: 10,
              skillName: "Windproof"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Windproof Charm IV",
          skills: [
            {
              id: 31,
              level: 4,
              modifiers: {},
              description: "Negates minor wind pressure and reduces the effects of major wind pressure.",
              skill: 10,
              skillName: "Windproof"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Windproof Charm V",
          skills: [
            {
              id: 32,
              level: 5,
              modifiers: {},
              description: "Negates minor and major wind pressure.",
              skill: 10,
              skillName: "Windproof"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 241,
      name: "Health Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Health Charm I",
          skills: [
            {
              id: 53,
              level: 1,
              modifiers: {
                health: 15
              },
              description: "Health +15",
              skill: 17,
              skillName: "Health Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 3,
                item: {
                  id: 276,
                  rarity: 4,
                  carryLimit: 99,
                  value: 860,
                  name: "Rathian Webbing",
                  description: "Rathian material. Obtained by breaking its wings. Supple, used to craft gear."
                }
              },
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Health Charm II",
          skills: [
            {
              id: 54,
              level: 2,
              modifiers: {
                health: 30
              },
              description: "Health +30",
              skill: 17,
              skillName: "Health Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Health Charm III",
          skills: [
            {
              id: 55,
              level: 3,
              modifiers: {
                health: 50
              },
              description: "Health +50",
              skill: 17,
              skillName: "Health Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 242,
      name: "Recovery Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Recovery Charm I",
          skills: [
            {
              id: 56,
              level: 1,
              modifiers: {},
              description: "Recovery +10%",
              skill: 18,
              skillName: "Recovery Up"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 2,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Recovery Charm II",
          skills: [
            {
              id: 57,
              level: 2,
              modifiers: {},
              description: "Recovery +20%",
              skill: 18,
              skillName: "Recovery Up"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
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
                  id: 281,
                  rarity: 6,
                  carryLimit: 99,
                  value: 2240,
                  name: "Rathian Spike+",
                  description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Recovery Charm III",
          skills: [
            {
              id: 58,
              level: 3,
              modifiers: {},
              description: "Recovery +30%",
              skill: 18,
              skillName: "Recovery Up"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 243,
      name: "Fire Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Fire Charm I",
          skills: [
            {
              id: 62,
              level: 1,
              modifiers: {
                resistFire: 6
              },
              description: "Fire resistance +6",
              skill: 20,
              skillName: "Fire Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                  id: 141,
                  rarity: 4,
                  carryLimit: 99,
                  value: 800,
                  name: "Warped Bone",
                  description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Fire Charm II",
          skills: [
            {
              id: 63,
              level: 2,
              modifiers: {
                resistFire: 12
              },
              description: "Fire resistance +12",
              skill: 20,
              skillName: "Fire Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Fire Charm III",
          skills: [
            {
              id: 64,
              level: 3,
              modifiers: {
                defense: 10,
                resistFire: 20
              },
              description: "Fire resistance +20 Defense +10",
              skill: 20,
              skillName: "Fire Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 244,
      name: "Water Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Water Charm I",
          skills: [
            {
              id: 65,
              level: 1,
              modifiers: {
                resistWater: 6
              },
              description: "Water resistance +6",
              skill: 21,
              skillName: "Water Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 248,
                  rarity: 4,
                  carryLimit: 99,
                  value: 640,
                  name: "Jyuratodus Fang",
                  description: "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Water Charm II",
          skills: [
            {
              id: 66,
              level: 2,
              modifiers: {
                resistWater: 12
              },
              description: "Water resistance +12",
              skill: 21,
              skillName: "Water Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Water Charm III",
          skills: [
            {
              id: 67,
              level: 3,
              modifiers: {
                defense: 10,
                resistWater: 20
              },
              description: "Water resistance +20 Defense +10",
              skill: 21,
              skillName: "Water Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 245,
      name: "Thunder Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Thunder Charm I",
          skills: [
            {
              id: 71,
              level: 1,
              modifiers: {
                resistThunder: 6
              },
              description: "Thunder resistance +6",
              skill: 23,
              skillName: "Thunder Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Thunder Charm II",
          skills: [
            {
              id: 72,
              level: 2,
              modifiers: {
                resistThunder: 12
              },
              description: "Thunder resistance +12",
              skill: 23,
              skillName: "Thunder Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Thunder Charm III",
          skills: [
            {
              id: 73,
              level: 3,
              modifiers: {
                defense: 10,
                resistThunder: 20
              },
              description: "Thunder resistance +20 Defense +10",
              skill: 23,
              skillName: "Thunder Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 3,
                item: {
                  id: 171,
                  rarity: 6,
                  carryLimit: 99,
                  value: 1600,
                  name: "Thunder Sac",
                  description: "A monster organ that can store up large amounts of high voltage electricity."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 246,
      name: "Blaze Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Blaze Charm I",
          skills: [
            {
              id: 80,
              level: 1,
              modifiers: {
                damageFire: 30
              },
              description: "Fire attack +30",
              skill: 26,
              skillName: "Fire Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                  id: 141,
                  rarity: 4,
                  carryLimit: 99,
                  value: 800,
                  name: "Warped Bone",
                  description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Blaze Charm II",
          skills: [
            {
              id: 81,
              level: 2,
              modifiers: {
                damageFire: 60
              },
              description: "Fire attack +60",
              skill: 26,
              skillName: "Fire Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Blaze Charm III",
          skills: [
            {
              id: 82,
              level: 3,
              modifiers: {
                damageFire: 100
              },
              description: "Fire attack +100",
              skill: 26,
              skillName: "Fire Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 10,
          name: "Blaze Charm IV",
          skills: [
            {
              id: 83,
              level: 4,
              modifiers: {
                damageFire: "100+5%"
              },
              description: "Fire attack +5% Bonus: +100",
              skill: 26,
              skillName: "Fire Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 11,
          name: "Blaze Charm V",
          skills: [
            {
              id: 84,
              level: 5,
              modifiers: {
                damageFire: "100+10%"
              },
              description: "Fire attack +10% Bonus: +100",
              skill: 26,
              skillName: "Fire Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 247,
      name: "Flood Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Flood Charm I",
          skills: [
            {
              id: 85,
              level: 1,
              modifiers: {
                damageWater: 30
              },
              description: "Water attack +30",
              skill: 27,
              skillName: "Water Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Flood Charm II",
          skills: [
            {
              id: 86,
              level: 2,
              modifiers: {
                damageWater: 60
              },
              description: "Water attack +60",
              skill: 27,
              skillName: "Water Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Flood Charm III",
          skills: [
            {
              id: 87,
              level: 3,
              modifiers: {
                damageWater: 100
              },
              description: "Water attack +100",
              skill: 27,
              skillName: "Water Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 167,
                  rarity: 6,
                  carryLimit: 99,
                  value: 1600,
                  name: "Torrent Sac",
                  description: "A monster organ designed to hold and preserve copious amounts of water."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 10,
          name: "Flood Charm IV",
          skills: [
            {
              id: 88,
              level: 4,
              modifiers: {
                damageWater: "100+5%"
              },
              description: "Water attack +5% Bonus: +100",
              skill: 27,
              skillName: "Water Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 11,
          name: "Flood Charm V",
          skills: [
            {
              id: 89,
              level: 5,
              modifiers: {
                damageWater: "100+10%"
              },
              description: "Water attack +10% Bonus: +100",
              skill: 27,
              skillName: "Water Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 248,
      name: "Shock Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Shock Charm I",
          skills: [
            {
              id: 95,
              level: 1,
              modifiers: {
                damageThunder: 30
              },
              description: "Thunder attack +30",
              skill: 29,
              skillName: "Thunder Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 257,
                  rarity: 4,
                  carryLimit: 99,
                  value: 660,
                  name: "Tobi-Kadachi Claw",
                  description: "Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
                }
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Shock Charm II",
          skills: [
            {
              id: 96,
              level: 2,
              modifiers: {
                damageThunder: 60
              },
              description: "Thunder attack +60",
              skill: 29,
              skillName: "Thunder Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Shock Charm III",
          skills: [
            {
              id: 97,
              level: 3,
              modifiers: {
                damageThunder: 100
              },
              description: "Thunder attack +100",
              skill: 29,
              skillName: "Thunder Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                quantity: 3,
                item: {
                  id: 171,
                  rarity: 6,
                  carryLimit: 99,
                  value: 1600,
                  name: "Thunder Sac",
                  description: "A monster organ that can store up large amounts of high voltage electricity."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 10,
          name: "Shock Charm IV",
          skills: [
            {
              id: 98,
              level: 4,
              modifiers: {
                damageThunder: "100+5%"
              },
              description: "Thunder attack +5% Bonus: +100",
              skill: 29,
              skillName: "Thunder Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 11,
          name: "Shock Charm V",
          skills: [
            {
              id: 99,
              level: 5,
              modifiers: {
                damageThunder: "100+10%"
              },
              description: "Thunder attack +10% Bonus: +100",
              skill: 29,
              skillName: "Thunder Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 249,
      name: "Venom Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Venom Charm I",
          skills: [
            {
              id: 105,
              level: 1,
              modifiers: {},
              description: "Poison buildup +5% Bonus: +10",
              skill: 31,
              skillName: "Poison Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 1,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Venom Charm II",
          skills: [
            {
              id: 106,
              level: 2,
              modifiers: {},
              description: "Poison buildup +10% Bonus: +10",
              skill: 31,
              skillName: "Poison Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
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
                  id: 281,
                  rarity: 6,
                  carryLimit: 99,
                  value: 2240,
                  name: "Rathian Spike+",
                  description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
                }
              },
              {
                quantity: 4,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Venom Charm III",
          skills: [
            {
              id: 107,
              level: 3,
              modifiers: {},
              description: "Poison buildup +20% Bonus: +10",
              skill: 31,
              skillName: "Poison Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 282,
                  rarity: 7,
                  carryLimit: 99,
                  value: 6000,
                  name: "Rathian Ruby",
                  description: "A rare gem said to have formed within Rathian tissue. Used to dramatically improve gear."
                }
              },
              {
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Venom Charm IV",
          skills: [
            {
              id: 381,
              level: 4,
              modifiers: {},
              description: "Poison buildup +30% Bonus: +10",
              skill: 31,
              skillName: "Poison Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 250,
      name: "Immobilize Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Immobilize Charm I",
          skills: [
            {
              id: 108,
              level: 1,
              modifiers: {},
              description: "Paralysis buildup +5% Bonus: +10",
              skill: 32,
              skillName: "Paralysis Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 304,
                  rarity: 4,
                  carryLimit: 99,
                  value: 750,
                  name: "Great Girros Fang",
                  description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                }
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Immobilize Charm II",
          skills: [
            {
              id: 109,
              level: 2,
              modifiers: {},
              description: "Paralysis buildup +10% Bonus: +10",
              skill: 32,
              skillName: "Paralysis Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                quantity: 4,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Immobilize Charm III",
          skills: [
            {
              id: 110,
              level: 3,
              modifiers: {},
              description: "Paralysis buildup +20% Bonus: +10",
              skill: 32,
              skillName: "Paralysis Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Immobilize Charm IV",
          skills: [
            {
              id: 379,
              level: 4,
              modifiers: {},
              description: "Paralysis buildup +30% Bonus: +10",
              skill: 32,
              skillName: "Paralysis Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 251,
      name: "Tranq Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Tranq Charm I",
          skills: [
            {
              id: 111,
              level: 1,
              modifiers: {},
              description: "Sleep buildup +5% Bonus: +10",
              skill: 33,
              skillName: "Sleep Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Tranq Charm II",
          skills: [
            {
              id: 112,
              level: 2,
              modifiers: {},
              description: "Sleep buildup +10% Bonus: +10",
              skill: 33,
              skillName: "Sleep Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 4,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Tranq Charm III",
          skills: [
            {
              id: 113,
              level: 3,
              modifiers: {},
              description: "Sleep buildup +20% Bonus: +10",
              skill: 33,
              skillName: "Sleep Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Tranq Charm IV",
          skills: [
            {
              id: 382,
              level: 4,
              modifiers: {},
              description: "Sleep buildup +30% Bonus: +10",
              skill: 33,
              skillName: "Sleep Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 252,
      name: "KO Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "KO Charm I",
          skills: [
            {
              id: 153,
              level: 1,
              modifiers: {},
              description: "Stun power +20%",
              skill: 47,
              skillName: "Slugger"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "KO Charm II",
          skills: [
            {
              id: 154,
              level: 2,
              modifiers: {},
              description: "Stun power +30%",
              skill: 47,
              skillName: "Slugger"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "KO Charm III",
          skills: [
            {
              id: 155,
              level: 3,
              modifiers: {},
              description: "Stun power +40%",
              skill: 47,
              skillName: "Slugger"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 253,
      name: "Enervate Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Enervate Charm I",
          skills: [
            {
              id: 156,
              level: 1,
              modifiers: {},
              description: "Exhaust power +20%",
              skill: 48,
              skillName: "Stamina Thief"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Enervate Charm II",
          skills: [
            {
              id: 157,
              level: 2,
              modifiers: {},
              description: "Exhaust power +30%",
              skill: 48,
              skillName: "Stamina Thief"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 3,
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
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Enervate Charm III",
          skills: [
            {
              id: 158,
              level: 3,
              modifiers: {},
              description: "Exhaust power +40%",
              skill: 48,
              skillName: "Stamina Thief"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 3,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 254,
      name: "Artillery Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Artillery Charm I",
          skills: [
            {
              id: 190,
              level: 1,
              modifiers: {},
              description: "Increases power of each attack by 10% and reduces Wyvern's Fire cooldown by 15%.",
              skill: 61,
              skillName: "Artillery"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                  id: 141,
                  rarity: 4,
                  carryLimit: 99,
                  value: 800,
                  name: "Warped Bone",
                  description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Artillery Charm II",
          skills: [
            {
              id: 191,
              level: 2,
              modifiers: {},
              description: "Increases power of each attack by 20% and reduces Wyvern's Fire cooldown by 30%.",
              skill: 61,
              skillName: "Artillery"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Artillery Charm III",
          skills: [
            {
              id: 192,
              level: 3,
              modifiers: {},
              description: "Increases power of each attack by 30% and reduces Wyvern's Fire cooldown by 50%.",
              skill: 61,
              skillName: "Artillery"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 255,
      name: "Hungerless Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Hungerless Charm I",
          skills: [
            {
              id: 207,
              level: 1,
              modifiers: {},
              description: "Extends the time until your stamina cap decreases by 50%.",
              skill: 67,
              skillName: "Hunger Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 4,
                item: {
                  id: 209,
                  rarity: 4,
                  carryLimit: 99,
                  value: 300,
                  name: "Girros Hide",
                  description: "Girros material. Obtained by carving. Supple, used to craft gear."
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Hungerless Charm II",
          skills: [
            {
              id: 208,
              level: 2,
              modifiers: {},
              description: "Extends the time until your stamina cap decreases by 100%.",
              skill: 67,
              skillName: "Hunger Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 8,
                item: {
                  id: 202,
                  rarity: 6,
                  carryLimit: 99,
                  value: 340,
                  name: "Jagras Scale+",
                  description: "Rare Jagras material. Obtained by carving. Used for many purposes."
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Hungerless Charm III",
          skills: [
            {
              id: 209,
              level: 3,
              modifiers: {},
              description: "Prevents your stamina cap from decreasing.",
              skill: 67,
              skillName: "Hunger Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 256,
      name: "Ironside Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Ironside Charm I",
          skills: [
            {
              id: 218,
              level: 1,
              modifiers: {},
              description: "Very slightly decreases the impact of attacks.",
              skill: 70,
              skillName: "Guard"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Ironside Charm II",
          skills: [
            {
              id: 219,
              level: 2,
              modifiers: {},
              description: "Slightly decreases the impact of attacks and reduces stamina depletion by 15%.",
              skill: 70,
              skillName: "Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Ironside Charm III",
          skills: [
            {
              id: 220,
              level: 3,
              modifiers: {},
              description: "Greatly decreases the impact of attacks and redcues stamina depletion by 15%.",
              skill: 70,
              skillName: "Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 417,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4750,
                  name: "Vaal Hazak Talon",
                  description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Ironside Charm IV",
          skills: [
            {
              id: 221,
              level: 4,
              modifiers: {},
              description: "Greatly decreases the impact of attacks and redcues stamina depletion by 30%.",
              skill: 70,
              skillName: "Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Ironside Charm V",
          skills: [
            {
              id: 222,
              level: 5,
              modifiers: {},
              description: "Greatly decreases the impact of attacks and redcues stamina depletion by 50%.",
              skill: 70,
              skillName: "Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 257,
      name: "Friendship Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Friendship Charm I",
          skills: [
            {
              id: 226,
              level: 1,
              modifiers: {},
              description: "Items affect nearby allies with 33% of their efficacy.",
              skill: 72,
              skillName: "Wide-Range"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Friendship Charm II",
          skills: [
            {
              id: 227,
              level: 2,
              modifiers: {},
              description: "Items affect nearby allies in a wider radius with 33% of their efficacy.",
              skill: 72,
              skillName: "Wide-Range"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Friendship Charm III",
          skills: [
            {
              id: 228,
              level: 3,
              modifiers: {},
              description: "Items affect nearby allies in a wider radius with 66% of their efficacy.",
              skill: 72,
              skillName: "Wide-Range"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Friendship Charm IV",
          skills: [
            {
              id: 229,
              level: 4,
              modifiers: {},
              description: "Items affect nearby allies in a much wider radius with 66% of their efficacy.",
              skill: 72,
              skillName: "Wide-Range"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Friendship Charm V",
          skills: [
            {
              id: 230,
              level: 5,
              modifiers: {},
              description: "Items affect nearby allies in a wider radius with full efficacy.",
              skill: 72,
              skillName: "Wide-Range"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 258,
      name: "Extension Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Extension Charm I",
          skills: [
            {
              id: 231,
              level: 1,
              modifiers: {},
              description: "Item effect duration +10%",
              skill: 73,
              skillName: "Item Prolonger"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Extension Charm II",
          skills: [
            {
              id: 232,
              level: 2,
              modifiers: {},
              description: "Item effect duration +25%",
              skill: 73,
              skillName: "Item Prolonger"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
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
                  id: 281,
                  rarity: 6,
                  carryLimit: 99,
                  value: 2240,
                  name: "Rathian Spike+",
                  description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Extension Charm III",
          skills: [
            {
              id: 233,
              level: 3,
              modifiers: {},
              description: "Item effect duration +50%",
              skill: 73,
              skillName: "Item Prolonger"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 433,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4800,
                  name: "Daora Tail",
                  description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 259,
      name: "Glutton's Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Glutton's Charm I",
          skills: [
            {
              id: 235,
              level: 1,
              modifiers: {},
              description: "Slightly increases item use speed.",
              skill: 75,
              skillName: "Speed Eating"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 138,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Ancient Bone",
                  description: "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Glutton's Charm II",
          skills: [
            {
              id: 236,
              level: 2,
              modifiers: {},
              description: "Moderately increases item use speed.",
              skill: 75,
              skillName: "Speed Eating"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Glutton's Charm III",
          skills: [
            {
              id: 237,
              level: 3,
              modifiers: {},
              description: "Greatly increases item use speed.",
              skill: 75,
              skillName: "Speed Eating"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 260,
      name: "Blessing Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Blessing Charm I",
          skills: [
            {
              id: 252,
              level: 1,
              modifiers: {},
              description: "While active, reduces damage taken by 15%.",
              skill: 84,
              skillName: "Divine Blessing"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 3,
                item: {
                  id: 293,
                  rarity: 4,
                  carryLimit: 99,
                  value: 650,
                  name: "Paolumu Pelt",
                  description: "Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
                }
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Blessing Charm II",
          skills: [
            {
              id: 253,
              level: 2,
              modifiers: {},
              description: "While active, reduces damage taken by 30%.",
              skill: 84,
              skillName: "Divine Blessing"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Blessing Charm III",
          skills: [
            {
              id: 254,
              level: 3,
              modifiers: {},
              description: "While active, reduces damage taken by 50%.",
              skill: 84,
              skillName: "Divine Blessing"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 261,
      name: "Rally Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Rally Charm I",
          skills: [
            {
              id: 255,
              level: 1,
              modifiers: {},
              description: "Increases Palico attack power and defense by 5%.",
              skill: 85,
              skillName: "Palico Rally"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 1,
                item: {
                  id: 444,
                  rarity: 4,
                  carryLimit: 99,
                  value: 200,
                  name: "Tailraider Voucher",
                  description: "Proof of friendship with the Lynians of the new continent. Show it to the Smithy and see what happens!"
                }
              },
              {
                quantity: 1,
                item: {
                  id: 146,
                  rarity: 5,
                  carryLimit: 99,
                  value: 350,
                  name: "Sinister Cloth",
                  description: "Suspect cloth the Tailraider Safari dug up from who-knows-where. Drips with an aura of pure evil."
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
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Rally Charm II",
          skills: [
            {
              id: 256,
              level: 2,
              modifiers: {},
              description: "Increases Palico attack power and defense by 10%.",
              skill: 85,
              skillName: "Palico Rally"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 2,
                item: {
                  id: 444,
                  rarity: 4,
                  carryLimit: 99,
                  value: 200,
                  name: "Tailraider Voucher",
                  description: "Proof of friendship with the Lynians of the new continent. Show it to the Smithy and see what happens!"
                }
              },
              {
                quantity: 2,
                item: {
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Rally Charm III",
          skills: [
            {
              id: 257,
              level: 3,
              modifiers: {},
              description: "Increases Palico attack power and defense by 15%.",
              skill: 85,
              skillName: "Palico Rally"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 3,
                item: {
                  id: 444,
                  rarity: 4,
                  carryLimit: 99,
                  value: 200,
                  name: "Tailraider Voucher",
                  description: "Proof of friendship with the Lynians of the new continent. Show it to the Smithy and see what happens!"
                }
              },
              {
                quantity: 2,
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 9,
          name: "Rally Charm IV",
          skills: [
            {
              id: 258,
              level: 4,
              modifiers: {},
              description: "Increases Palico attack power and defense by 20%.",
              skill: 85,
              skillName: "Palico Rally"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 10,
          name: "Rally Charm V",
          skills: [
            {
              id: 259,
              level: 5,
              modifiers: {},
              description: "Increases Palico attack power and defense by 25%.",
              skill: 85,
              skillName: "Palico Rally"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 262,
      name: "Botany Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Botany Charm I",
          skills: [
            {
              id: 260,
              level: 1,
              modifiers: {},
              description: "One extra consumable herb item per gather.",
              skill: 86,
              skillName: "Botanist"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
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
                quantity: 3,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Botany Charm II",
          skills: [
            {
              id: 261,
              level: 2,
              modifiers: {},
              description: "One extra consumable herb, fruit, nut, or seed item per gather.",
              skill: 86,
              skillName: "Botanist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Botany Charm III",
          skills: [
            {
              id: 262,
              level: 3,
              modifiers: {},
              description: "One extra consumable herb, fruit, nut, seed, or insect item per gather.",
              skill: 86,
              skillName: "Botanist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 9,
          name: "Botany Charm IV",
          skills: [
            {
              id: 263,
              level: 4,
              modifiers: {},
              description: "One extra consumable herb, fruit, nut, seed, insect or mushroom item per gather.",
              skill: 86,
              skillName: "Botanist"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 263,
      name: "Geology Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Geology Charm I",
          skills: [
            {
              id: 264,
              level: 1,
              modifiers: {},
              description: "Allows you to gather one extra time from bonepiles.",
              skill: 87,
              skillName: "Geologist"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 4,
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
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Geology Charm II",
          skills: [
            {
              id: 265,
              level: 2,
              modifiers: {},
              description: "Allows you to gather one extra time from bonepiles and special item gathering points.",
              skill: 87,
              skillName: "Geologist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 8,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Geology Charm III",
          skills: [
            {
              id: 266,
              level: 3,
              modifiers: {},
              description: "Allows you to gather one extra time from bonepiles, gathering points, and mining outcrops.",
              skill: 87,
              skillName: "Geologist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 264,
      name: "Slinger Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Slinger Charm I",
          skills: [
            {
              id: 270,
              level: 1,
              modifiers: {},
              description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
              skill: 89,
              skillName: "Slinger Capacity"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Slinger Charm II",
          skills: [
            {
              id: 271,
              level: 2,
              modifiers: {},
              description: "In addition, increases the loading capacity for some slinger ammo dropped by monsters.",
              skill: 89,
              skillName: "Slinger Capacity"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Slinger Charm III",
          skills: [
            {
              id: 272,
              level: 3,
              modifiers: {},
              description: "In addition, increases the loading capacity for all slinger ammo dropped by monsters.",
              skill: 89,
              skillName: "Slinger Capacity"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 265,
      name: "Stealth Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Stealth Charm I",
          skills: [
            {
              id: 273,
              level: 1,
              modifiers: {},
              description: "Makes it slightly easier for monsters to lose sight of you.",
              skill: 90,
              skillName: "Stealth"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Stealth Charm II",
          skills: [
            {
              id: 274,
              level: 2,
              modifiers: {},
              description: "Makes it moderately easier for monsters to lose sight of you.",
              skill: 90,
              skillName: "Stealth"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Stealth Charm III",
          skills: [
            {
              id: 275,
              level: 3,
              modifiers: {},
              description: "Makes it much easier for monsters to lose sight of you.",
              skill: 90,
              skillName: "Stealth"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 266,
      name: "Smoke Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Smoke Charm I",
          skills: [
            {
              id: 282,
              level: 1,
              modifiers: {},
              description: "Interactables restore an additional 50 health.",
              skill: 95,
              skillName: "Survival Expert"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 232,
                  rarity: 4,
                  carryLimit: 99,
                  value: 620,
                  name: "Pukei-Pukei Tail",
                  description: "Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
                }
              },
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Smoke Charm II",
          skills: [
            {
              id: 283,
              level: 2,
              modifiers: {},
              description: "Interactables restore an additional 80 health.",
              skill: 95,
              skillName: "Survival Expert"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 5,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Smoke Charm III",
          skills: [
            {
              id: 284,
              level: 3,
              modifiers: {},
              description: "Interactables restore an additional 100 health.",
              skill: 95,
              skillName: "Survival Expert"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 267,
      name: "Mirewalker Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Mirewalker Charm I",
          skills: [
            {
              id: 285,
              level: 1,
              modifiers: {},
              description: "Prevents lowered movement speed.",
              skill: 96,
              skillName: "Aquatic/Polar Mobility"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 4,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Mirewalker Charm II",
          skills: [
            {
              id: 286,
              level: 2,
              modifiers: {},
              description: "Increases your evade window and prevents lowered movement speed.",
              skill: 96,
              skillName: "Aquatic/Polar Mobility"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Mirewalker Charm III",
          skills: [
            {
              id: 287,
              level: 3,
              modifiers: {},
              description: "Greatly increases your evade window and prevents lowered movement speed.",
              skill: 96,
              skillName: "Aquatic/Polar Mobility"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 5,
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
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 268,
      name: "Insect Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Insect Charm I",
          skills: [
            {
              id: 291,
              level: 1,
              modifiers: {},
              description: "Increases the chances of a corpse being left behind.",
              skill: 100,
              skillName: "Entomologist"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 178,
                  rarity: 4,
                  carryLimit: 99,
                  value: 160,
                  name: "Vespoid Shell",
                  description: "Vespoid material. Obtained by carving. Used for many purposes."
                }
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Insect Charm II",
          skills: [
            {
              id: 292,
              level: 2,
              modifiers: {},
              description: "Greatly increases the chances of a corpse being left behind.",
              skill: 100,
              skillName: "Entomologist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 4,
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
                  id: 179,
                  rarity: 6,
                  carryLimit: 99,
                  value: 460,
                  name: "Vespoid Carapace",
                  description: "Rare Vespoid material. Obtained by carving. Used for many purposes."
                }
              },
              {
                quantity: 2,
                item: {
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Insect Charm III",
          skills: [
            {
              id: 293,
              level: 3,
              modifiers: {},
              description: "Makes it so corpses will always be left behind.",
              skill: 100,
              skillName: "Entomologist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 5,
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 269,
      name: "Intimidator Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Intimidator Charm I",
          skills: [
            {
              id: 305,
              level: 1,
              modifiers: {},
              description: "Discourages monsters from engaging you even if you've been spotted.",
              skill: 108,
              skillName: "Intimidator"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 304,
                  rarity: 4,
                  carryLimit: 99,
                  value: 750,
                  name: "Great Girros Fang",
                  description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
                }
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Intimidator Charm II",
          skills: [
            {
              id: 306,
              level: 2,
              modifiers: {},
              description: "Highly discourages monsters from engaging you even if you've been spotted.",
              skill: 108,
              skillName: "Intimidator"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Intimidator Charm III",
          skills: [
            {
              id: 307,
              level: 3,
              modifiers: {},
              description: "Prevents monsters from engaging you even if you've been spotted.",
              skill: 108,
              skillName: "Intimidator"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 270,
      name: "Heavy Artillery Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Heavy Artillery Charm I",
          skills: [
            {
              id: 193,
              level: 1,
              modifiers: {},
              description: "Firepower +50%",
              skill: 62,
              skillName: "Heavy Artillery"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 4,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 5,
          name: "Heavy Artillery Charm II",
          skills: [
            {
              id: 194,
              level: 2,
              modifiers: {},
              description: "Firepower +100%",
              skill: 62,
              skillName: "Heavy Artillery"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 3,
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 271,
      name: "Light Eater's Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Light Eater's Charm",
          skills: [
            {
              id: 234,
              level: 1,
              modifiers: {},
              description: "Activates 25% of the time.",
              skill: 74,
              skillName: "Free Meal"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 4,
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
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 272,
      name: "Tracker Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Tracker Charm",
          skills: [
            {
              id: 297,
              level: 1,
              modifiers: {},
              description: "Increases gauge fill rate by 50%.",
              skill: 102,
              skillName: "Scenthound"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 5,
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
                  id: 240,
                  rarity: 4,
                  carryLimit: 99,
                  value: 870,
                  name: "Barroth Scalp",
                  description: "Barroth material. Obtained by breaking its head. Tough, used in many weapons."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 273,
      name: "Fortification Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Fortification Charm",
          skills: [
            {
              id: 179,
              level: 1,
              modifiers: {},
              description: "Increases attack by 10% and defense by 15% with each use.",
              skill: 55,
              skillName: "Fortify"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
                item: {
                  id: 146,
                  rarity: 5,
                  carryLimit: 99,
                  value: 350,
                  name: "Sinister Cloth",
                  description: "Suspect cloth the Tailraider Safari dug up from who-knows-where. Drips with an aura of pure evil."
                }
              },
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 274,
      name: "Performer's Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Performer's Charm",
          skills: [
            {
              id: 186,
              level: 1,
              modifiers: {},
              description: "Extends melody effect duration and increases health recovery.",
              skill: 58,
              skillName: "Horn Maestro"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
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
                quantity: 5,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 9,
          name: "Performer's Charm II",
          skills: [
            {
              id: 337,
              level: 2,
              modifiers: {},
              description: "Greatly increases the effect duration of hunting horn melodies.",
              skill: 58,
              skillName: "Horn Maestro"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 275,
      name: "Capacity Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Capacity Charm",
          skills: [
            {
              id: 187,
              level: 1,
              modifiers: {},
              description: "Loading capacity +1",
              skill: 59,
              skillName: "Capacity Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 8,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 276,
      name: "Bleed Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Bleed Charm I",
          skills: [
            {
              id: 17,
              level: 1,
              modifiers: {},
              description: "Reduces damage while bleeding.",
              skill: 7,
              skillName: "Bleeding Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 4,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Bleed Charm II",
          skills: [
            {
              id: 18,
              level: 2,
              modifiers: {},
              description: "Greatly reduces damage while bleeding.",
              skill: 7,
              skillName: "Bleeding Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Bleed Charm III",
          skills: [
            {
              id: 19,
              level: 3,
              modifiers: {},
              description: "Prevents bleeding.",
              skill: 7,
              skillName: "Bleeding Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 277,
      name: "Speed Heal Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Speed Heal Charm I",
          skills: [
            {
              id: 59,
              level: 1,
              modifiers: {},
              description: "Doubles the speed at which you heal recoverable damage.",
              skill: 19,
              skillName: "Recovery Speed"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 3,
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Speed Heal Charm II",
          skills: [
            {
              id: 60,
              level: 2,
              modifiers: {},
              description: "Triples the speed at which you heal recoverable damage.",
              skill: 19,
              skillName: "Recovery Speed"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Speed Heal Charm III",
          skills: [
            {
              id: 61,
              level: 3,
              modifiers: {},
              description: "Quadruples the speed at which you heal recoverable damage.",
              skill: 19,
              skillName: "Recovery Speed"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 418,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4450,
                  name: "Vaal Hazak Wing",
                  description: "Rare Vaal Hazak material. Obtained by carving its torso. Light yet firm, used to craft gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 278,
      name: "Ice Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Ice Charm I",
          skills: [
            {
              id: 68,
              level: 1,
              modifiers: {
                resistIce: 6
              },
              description: "Ice resistance +6",
              skill: 22,
              skillName: "Ice Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 2,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Ice Charm II",
          skills: [
            {
              id: 69,
              level: 2,
              modifiers: {
                resistIce: 12
              },
              description: "Ice resistance +12",
              skill: 22,
              skillName: "Ice Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Ice Charm III",
          skills: [
            {
              id: 70,
              level: 3,
              modifiers: {
                defense: 10,
                resistIce: 20
              },
              description: "Ice resistance +20 Defense +10",
              skill: 22,
              skillName: "Ice Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 328,
                  rarity: 7,
                  carryLimit: 99,
                  value: 7200,
                  name: "Legiana Gem",
                  description: "A rare gem said to have formed within Legiana tissue. Used to dramatically improve gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 279,
      name: "Blight Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Blight Charm I",
          skills: [
            {
              id: 77,
              level: 1,
              modifiers: {},
              description: "Reduces the duration of all elemental blights by 50%.",
              skill: 25,
              skillName: "Blight Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Blight Charm II",
          skills: [
            {
              id: 78,
              level: 2,
              modifiers: {},
              description: "Reduces the duration of all elemental blights by 75%.",
              skill: 25,
              skillName: "Blight Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Blight Charm III",
          skills: [
            {
              id: 79,
              level: 3,
              modifiers: {},
              description: "Nullifies all elemental blights.",
              skill: 25,
              skillName: "Blight Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 280,
      name: "Frost Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Frost Charm I",
          skills: [
            {
              id: 90,
              level: 1,
              modifiers: {
                damageIce: 30
              },
              description: "Ice attack +30",
              skill: 28,
              skillName: "Ice Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 2,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Frost Charm II",
          skills: [
            {
              id: 91,
              level: 2,
              modifiers: {
                damageIce: 60
              },
              description: "Ice attack +60",
              skill: 28,
              skillName: "Ice Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Frost Charm III",
          skills: [
            {
              id: 92,
              level: 3,
              modifiers: {
                damageIce: 100
              },
              description: "Ice attack +100",
              skill: 28,
              skillName: "Ice Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 433,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4800,
                  name: "Daora Tail",
                  description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Frost Charm IV",
          skills: [
            {
              id: 93,
              level: 4,
              modifiers: {
                damageIce: "100+5%"
              },
              description: "Ice attack +5% Bonus: +100",
              skill: 28,
              skillName: "Ice Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Frost Charm V",
          skills: [
            {
              id: 94,
              level: 5,
              modifiers: {
                damageIce: "100+10%"
              },
              description: "Ice attack +10% Bonus: +100",
              skill: 28,
              skillName: "Ice Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 281,
      name: "Master's Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Master's Charm I",
          skills: [
            {
              id: 123,
              level: 1,
              modifiers: {
                affinity: 5
              },
              description: "Affinity +5%",
              skill: 39,
              skillName: "Critical Eye"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Master's Charm II",
          skills: [
            {
              id: 124,
              level: 2,
              modifiers: {
                affinity: 10
              },
              description: "Affinity +10%",
              skill: 39,
              skillName: "Critical Eye"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Master's Charm III",
          skills: [
            {
              id: 125,
              level: 3,
              modifiers: {
                affinity: 15
              },
              description: "Affinity +15%",
              skill: 39,
              skillName: "Critical Eye"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Master's Charm IV",
          skills: [
            {
              id: 126,
              level: 4,
              modifiers: {
                affinity: 20
              },
              description: "Affinity +20%",
              skill: 39,
              skillName: "Critical Eye"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Master's Charm V",
          skills: [
            {
              id: 127,
              level: 5,
              modifiers: {
                affinity: 25
              },
              description: "Affinity +25%",
              skill: 39,
              skillName: "Critical Eye"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 282,
      name: "Evasion Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Evasion Charm I",
          skills: [
            {
              id: 210,
              level: 1,
              modifiers: {},
              description: "Very slightly increases invulnerability window.",
              skill: 68,
              skillName: "Evade Window"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Evasion Charm II",
          skills: [
            {
              id: 211,
              level: 2,
              modifiers: {},
              description: "Slightly increases invulnerability window.",
              skill: 68,
              skillName: "Evade Window"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 1,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 6,
          name: "Evasion Charm III",
          skills: [
            {
              id: 212,
              level: 3,
              modifiers: {},
              description: "Increases invulnerability window.",
              skill: 68,
              skillName: "Evade Window"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 433,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4800,
                  name: "Daora Tail",
                  description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Evasion Charm IV",
          skills: [
            {
              id: 213,
              level: 4,
              modifiers: {},
              description: "Greatly increases invulnerability window.",
              skill: 68,
              skillName: "Evade Window"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Evasion Charm V",
          skills: [
            {
              id: 214,
              level: 5,
              modifiers: {},
              description: "Massively increases invulnerability window.",
              skill: 68,
              skillName: "Evade Window"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 283,
      name: "Sheath Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Sheath Charm I",
          skills: [
            {
              id: 223,
              level: 1,
              modifiers: {},
              description: "Slightly increases sheathing speed.",
              skill: 71,
              skillName: "Quick Sheath"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Sheath Charm II",
          skills: [
            {
              id: 224,
              level: 2,
              modifiers: {},
              description: "Moderately increases sheathing speed.",
              skill: 71,
              skillName: "Quick Sheath"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Sheath Charm III",
          skills: [
            {
              id: 225,
              level: 3,
              modifiers: {},
              description: "Greatly increases sheathing speed.",
              skill: 71,
              skillName: "Quick Sheath"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 284,
      name: "Whetstone Charm",
      ranks: [
        {
          level: 1,
          rarity: 4,
          name: "Whetstone Charm I",
          skills: [
            {
              id: 238,
              level: 1,
              modifiers: {},
              description: "Removes one cycle from the sharpening process.",
              skill: 76,
              skillName: "Speed Sharpening"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Whetstone Charm II",
          skills: [
            {
              id: 239,
              level: 2,
              modifiers: {},
              description: "Removes two cycles from the sharpening process.",
              skill: 76,
              skillName: "Speed Sharpening"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Whetstone Charm III",
          skills: [
            {
              id: 240,
              level: 3,
              modifiers: {},
              description: "Removes three cycles from the sharpening process.",
              skill: 76,
              skillName: "Speed Sharpening"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 285,
      name: "Blast Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Blast Charm I",
          skills: [
            {
              id: 14,
              level: 1,
              modifiers: {},
              description: "Delays blastblight and reduces blast damage.",
              skill: 6,
              skillName: "Blast Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Blast Charm II",
          skills: [
            {
              id: 15,
              level: 2,
              modifiers: {},
              description: "Greatly delays blastblight and greatly reduces blast damage.",
              skill: 6,
              skillName: "Blast Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Blast Charm III",
          skills: [
            {
              id: 16,
              level: 3,
              modifiers: {},
              description: "Prevents blastblight.",
              skill: 6,
              skillName: "Blast Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 286,
      name: "Dragon Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Dragon Charm I",
          skills: [
            {
              id: 74,
              level: 1,
              modifiers: {
                resistDragon: 6
              },
              description: "Dragon resistance +6",
              skill: 24,
              skillName: "Dragon Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 3,
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
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Dragon Charm II",
          skills: [
            {
              id: 75,
              level: 2,
              modifiers: {
                resistDragon: 12
              },
              description: "Dragon resistance +12",
              skill: 24,
              skillName: "Dragon Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Dragon Charm III",
          skills: [
            {
              id: 76,
              level: 3,
              modifiers: {
                defense: 10,
                resistDragon: 20
              },
              description: "Dragon resistance +20 Defense +10",
              skill: 24,
              skillName: "Dragon Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 3,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 287,
      name: "Wyrmsbane Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Wyrmsbane Charm I",
          skills: [
            {
              id: 100,
              level: 1,
              modifiers: {
                damageDragon: 30
              },
              description: "Dragon attack +30",
              skill: 30,
              skillName: "Dragon Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 3,
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Wyrmsbane Charm II",
          skills: [
            {
              id: 101,
              level: 2,
              modifiers: {
                damageDragon: 60
              },
              description: "Dragon attack +60",
              skill: 30,
              skillName: "Dragon Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 417,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4750,
                  name: "Vaal Hazak Talon",
                  description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Wyrmsbane Charm III",
          skills: [
            {
              id: 102,
              level: 3,
              modifiers: {
                damageDragon: 100
              },
              description: "Dragon attack +100",
              skill: 30,
              skillName: "Dragon Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Wyrmsbane Charm IV",
          skills: [
            {
              id: 103,
              level: 4,
              modifiers: {
                damageDragon: "100+5%"
              },
              description: "Dragon attack +5% Bonus: +100",
              skill: 30,
              skillName: "Dragon Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Wyrmsbane Charm V",
          skills: [
            {
              id: 104,
              level: 5,
              modifiers: {
                damageDragon: "100+10%"
              },
              description: "Dragon attack +10% Bonus: +100",
              skill: 30,
              skillName: "Dragon Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 288,
      name: "Demolition Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Demolition Charm I",
          skills: [
            {
              id: 114,
              level: 1,
              modifiers: {},
              description: "Blast buildup +5% Bonus: +10",
              skill: 34,
              skillName: "Blast Attack"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Demolition Charm II",
          skills: [
            {
              id: 115,
              level: 2,
              modifiers: {},
              description: "Blast buildup +10% Bonus: +10",
              skill: 34,
              skillName: "Blast Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Demolition Charm III",
          skills: [
            {
              id: 116,
              level: 3,
              modifiers: {},
              description: "Blast buildup +20% Bonus: +10",
              skill: 34,
              skillName: "Blast Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Demolition Charm IV",
          skills: [
            {
              id: 371,
              level: 4,
              modifiers: {},
              description: "Blast buildup +30% Bonus: +10",
              skill: 34,
              skillName: "Blast Attack"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 289,
      name: "Draw Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Draw Charm I",
          skills: [
            {
              id: 147,
              level: 1,
              modifiers: {},
              description: "Draw attack affinity +30%",
              skill: 45,
              skillName: "Critical Draw"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Draw Charm II",
          skills: [
            {
              id: 148,
              level: 2,
              modifiers: {},
              description: "Draw attack affinity +60%",
              skill: 45,
              skillName: "Critical Draw"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Draw Charm III",
          skills: [
            {
              id: 149,
              level: 3,
              modifiers: {},
              description: "Draw attack affinity +100%",
              skill: 45,
              skillName: "Critical Draw"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 290,
      name: "Trickshot Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Trickshot Charm I",
          skills: [
            {
              id: 36,
              level: 1,
              modifiers: {},
              description: "Makes slinger dung pods more effective at making monsters run away.",
              skill: 12,
              skillName: "Dungmaster"
            },
            {
              id: 289,
              level: 1,
              modifiers: {},
              description: "Increases the success rate of flash effects.",
              skill: 98,
              skillName: "Blindsider"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 292,
                  rarity: 6,
                  carryLimit: 99,
                  value: 1680,
                  name: "Tzitzi-Ya-Ku Photophore+",
                  description: "Rare Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
                }
              },
              {
                quantity: 2,
                item: {
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 2,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 291,
      name: "Marathon Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Marathon Charm I",
          skills: [
            {
              id: 195,
              level: 1,
              modifiers: {},
              description: "Reduces continuous stamina depletion by 15%.",
              skill: 63,
              skillName: "Marathon Runner"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Marathon Charm II",
          skills: [
            {
              id: 196,
              level: 2,
              modifiers: {},
              description: "Reduces continuous stamina depletion by 30%.",
              skill: 63,
              skillName: "Marathon Runner"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 2,
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
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Marathon Charm III",
          skills: [
            {
              id: 197,
              level: 3,
              modifiers: {},
              description: "Reduces continuous stamina depletion by 50%.",
              skill: 63,
              skillName: "Marathon Runner"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 292,
      name: "Fitness Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Fitness Charm I",
          skills: [
            {
              id: 198,
              level: 1,
              modifiers: {},
              description: "Reduces fixed stamina depletion by 10%.",
              skill: 64,
              skillName: "Constitution"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Fitness Charm II",
          skills: [
            {
              id: 199,
              level: 2,
              modifiers: {},
              description: "Reduces fixed stamina depletion by 20%.",
              skill: 64,
              skillName: "Constitution"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Fitness Charm III",
          skills: [
            {
              id: 200,
              level: 3,
              modifiers: {},
              description: "Reduces fixed stamina depletion by 30%.",
              skill: 64,
              skillName: "Constitution"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 11,
          name: "Fitness Charm IV",
          skills: [
            {
              id: 201,
              level: 4,
              modifiers: {},
              description: "Reduces fixed stamina depletion by 40%.",
              skill: 64,
              skillName: "Constitution"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Fitness Charm V",
          skills: [
            {
              id: 202,
              level: 5,
              modifiers: {},
              description: "Reduces fixed stamina depletion by 50%.",
              skill: 64,
              skillName: "Constitution"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 293,
      name: "Surge Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Surge Charm I",
          skills: [
            {
              id: 204,
              level: 1,
              modifiers: {},
              description: "Stamina recovery speed +10%",
              skill: 66,
              skillName: "Stamina Surge"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 3,
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
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Surge Charm II",
          skills: [
            {
              id: 205,
              level: 2,
              modifiers: {},
              description: "Stamina recovery speed +20%",
              skill: 66,
              skillName: "Stamina Surge"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Surge Charm III",
          skills: [
            {
              id: 206,
              level: 3,
              modifiers: {},
              description: "Stamina recovery speed +30%",
              skill: 66,
              skillName: "Stamina Surge"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 294,
      name: "Leaping Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Leaping Charm I",
          skills: [
            {
              id: 215,
              level: 1,
              modifiers: {},
              description: "Slightly extends evasion distance.",
              skill: 69,
              skillName: "Evade Extender"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 123,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Dragonvein Crystal",
                  description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Leaping Charm II",
          skills: [
            {
              id: 216,
              level: 2,
              modifiers: {},
              description: "Extends evasion distance.",
              skill: 69,
              skillName: "Evade Extender"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 433,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4800,
                  name: "Daora Tail",
                  description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Leaping Charm III",
          skills: [
            {
              id: 217,
              level: 3,
              modifiers: {},
              description: "Greatly extends evasion distance.",
              skill: 69,
              skillName: "Evade Extender"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 295,
      name: "Bombardier Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Bombardier Charm I",
          skills: [
            {
              id: 241,
              level: 1,
              modifiers: {},
              description: "Explosive power +10%",
              skill: 77,
              skillName: "Bombardier"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Bombardier Charm II",
          skills: [
            {
              id: 242,
              level: 2,
              modifiers: {},
              description: "Explosive power +20%",
              skill: 77,
              skillName: "Bombardier"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Bombardier Charm III",
          skills: [
            {
              id: 243,
              level: 3,
              modifiers: {},
              description: "Explosive power +30%",
              skill: 77,
              skillName: "Bombardier"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 296,
      name: "Mushroom Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Mushroom Charm I",
          skills: [
            {
              id: 244,
              level: 1,
              modifiers: {},
              description: "Lets you digest blue mushrooms and toadstools.",
              skill: 78,
              skillName: "Mushroomancer"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 5,
                item: {
                  id: 175,
                  rarity: 4,
                  carryLimit: 99,
                  value: 200,
                  name: "Mosswine Hide",
                  description: "A musty hide covered in moss."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Mushroom Charm II",
          skills: [
            {
              id: 245,
              level: 2,
              modifiers: {},
              description: "Additionally lets you digest nitroshrooms and parashrooms.",
              skill: 78,
              skillName: "Mushroomancer"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Mushroom Charm III",
          skills: [
            {
              id: 246,
              level: 3,
              modifiers: {},
              description: "Additionally lets you digest mandragoras, devil's blight, and exciteshrooms.",
              skill: 78,
              skillName: "Mushroomancer"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 297,
      name: "Awakening Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Awakening Charm I",
          skills: [
            {
              id: 120,
              level: 1,
              modifiers: {},
              description: "Draws out 33% of hidden element and expands clip size for some ammo.",
              skill: 38,
              skillName: "Free Elem/Ammo Up"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 5,
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
                quantity: 1,
                item: {
                  id: 127,
                  rarity: 4,
                  carryLimit: 99,
                  value: 400,
                  name: "Aquacore Ore",
                  description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Awakening Charm II",
          skills: [
            {
              id: 121,
              level: 2,
              modifiers: {},
              description: "Draws out 66% of hidden element and expands clip size for some ammo.",
              skill: 38,
              skillName: "Free Elem/Ammo Up"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 1,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Awakening Charm III",
          skills: [
            {
              id: 122,
              level: 3,
              modifiers: {},
              description: "Draws out 100% of hidden element and expands clip size for some ammo.",
              skill: 38,
              skillName: "Free Elem/Ammo Up"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 298,
      name: "Handicraft Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Handicraft Charm I",
          skills: [
            {
              id: 142,
              level: 1,
              modifiers: {
                sharpnessBonus: 10
              },
              description: "Weapon sharpness +10",
              skill: 44,
              skillName: "Handicraft"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Handicraft Charm II",
          skills: [
            {
              id: 143,
              level: 2,
              modifiers: {
                sharpnessBonus: 20
              },
              description: "Weapon sharpness +20",
              skill: 44,
              skillName: "Handicraft"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 433,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4800,
                  name: "Daora Tail",
                  description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Handicraft Charm III",
          skills: [
            {
              id: 144,
              level: 3,
              modifiers: {
                sharpnessBonus: 30
              },
              description: "Weapon sharpness +30",
              skill: 44,
              skillName: "Handicraft"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 1,
                item: {
                  id: 443,
                  rarity: 8,
                  carryLimit: 99,
                  value: 15000,
                  name: "Xeno'jiiva Gem",
                  description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
                }
              },
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Handicraft Charm IV",
          skills: [
            {
              id: 145,
              level: 4,
              modifiers: {
                sharpnessBonus: 40
              },
              description: "Weapon sharpness +40",
              skill: 44,
              skillName: "Handicraft"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Handicraft Charm V",
          skills: [
            {
              id: 146,
              level: 5,
              modifiers: {
                sharpnessBonus: 50
              },
              description: "Weapon sharpness +50",
              skill: 44,
              skillName: "Handicraft"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 299,
      name: "Mud Puppy Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Mud Puppy Charm",
          skills: [
            {
              id: 13,
              level: 1,
              modifiers: {},
              description: "Reduces limits on movement speed and evasion.",
              skill: 5,
              skillName: "Muck Resistance"
            },
            {
              id: 203,
              level: 1,
              modifiers: {},
              description: "Enables Leap of Faith.",
              skill: 65,
              skillName: "Leap of Faith"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 300,
      name: "Hunter's Life Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Hunter's Life Charm",
          skills: [
            {
              id: 247,
              level: 1,
              modifiers: {},
              description: "Increases the time window for reeling in fish, and makes it easier to catch large fish.",
              skill: 79,
              skillName: "Master Fisher"
            },
            {
              id: 300,
              level: 1,
              modifiers: {},
              description: "Makes it easier to cook well-done steaks.",
              skill: 105,
              skillName: "BBQ Master"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
                item: {
                  id: 177,
                  rarity: 6,
                  carryLimit: 99,
                  value: 320,
                  name: "High-quality Pelt",
                  description: "Rare pelt from a small animal. Feels wonderful to the touch and valued highly by the Commission."
                }
              },
              {
                quantity: 5,
                item: {
                  id: 176,
                  rarity: 4,
                  carryLimit: 99,
                  value: 120,
                  name: "Warm Pelt",
                  description: "A pelt from a small animal. Used for many things, but mostly just regular clothes."
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
              },
              {
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 301,
      name: "Procurer's Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Procurer's Charm",
          skills: [
            {
              id: 248,
              level: 1,
              modifiers: {},
              description: "Increases movement speed while transporting and reduces downtime on landings.",
              skill: 80,
              skillName: "Pro Transporter"
            },
            {
              id: 250,
              level: 1,
              modifiers: {},
              description: "One extra honey per gather.",
              skill: 82,
              skillName: "Honey Hunter"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 5,
                item: {
                  id: 196,
                  rarity: 4,
                  carryLimit: 99,
                  value: 230,
                  name: "Kestodon Scalp",
                  description: "Kestodon material. Obtained by carving. Unusual, used in select gear."
                }
              },
              {
                quantity: 5,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 302,
      name: "Gatherer's Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Gatherer's Charm",
          skills: [
            {
              id: 249,
              level: 1,
              modifiers: {},
              description: "Speeds up gathering and prevents knockbacks while gathering.",
              skill: 81,
              skillName: "Master Gatherer"
            },
            {
              id: 251,
              level: 1,
              modifiers: {},
              description: "Prevents knockback while carving.",
              skill: 83,
              skillName: "Carving Pro"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 5,
                item: {
                  id: 175,
                  rarity: 4,
                  carryLimit: 99,
                  value: 200,
                  name: "Mosswine Hide",
                  description: "A musty hide covered in moss."
                }
              },
              {
                quantity: 5,
                item: {
                  id: 202,
                  rarity: 6,
                  carryLimit: 99,
                  value: 340,
                  name: "Jagras Scale+",
                  description: "Rare Jagras material. Obtained by carving. Used for many purposes."
                }
              },
              {
                quantity: 5,
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 303,
      name: "Guard Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Guard Charm I",
          skills: [
            {
              id: 20,
              level: 1,
              modifiers: {},
              description: "Reduces the duration of Defense Down by 50%.",
              skill: 8,
              skillName: "Iron Skin"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 3,
                item: {
                  id: 194,
                  rarity: 6,
                  carryLimit: 99,
                  value: 820,
                  name: "Barnos Talon",
                  description: "Rare Barnos material. Obtained by carving. Unusual, used in select gear."
                }
              },
              {
                quantity: 3,
                item: {
                  id: 193,
                  rarity: 6,
                  carryLimit: 99,
                  value: 720,
                  name: "Barnos Hide+",
                  description: "Rare Barnos material. Obtained by carving. Supple, used to craft gear."
                }
              },
              {
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Guard Charm II",
          skills: [
            {
              id: 21,
              level: 2,
              modifiers: {},
              description: "Reduces the duration of Defense Down by 75%.",
              skill: 8,
              skillName: "Iron Skin"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 6,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 7,
          name: "Guard Charm III",
          skills: [
            {
              id: 22,
              level: 3,
              modifiers: {},
              description: "Prevents Defense Down.",
              skill: 8,
              skillName: "Iron Skin"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 1,
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
                quantity: 2,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 304,
      name: "Earplugs Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Earplugs Charm I",
          skills: [
            {
              id: 23,
              level: 1,
              modifiers: {},
              description: "Slightly reduces the effects of weak monster roars.",
              skill: 9,
              skillName: "Earplugs"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 6,
          name: "Earplugs Charm II",
          skills: [
            {
              id: 24,
              level: 2,
              modifiers: {},
              description: "Reduces the effects of weak monster roars.",
              skill: 9,
              skillName: "Earplugs"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 2,
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Earplugs Charm III",
          skills: [
            {
              id: 25,
              level: 3,
              modifiers: {},
              description: "Nullifies weak monster roars.",
              skill: 9,
              skillName: "Earplugs"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Earplugs Charm IV",
          skills: [
            {
              id: 410,
              level: 4,
              modifiers: {},
              description: "Nullifies weak monster roars and reduces the effects of strong monster roars.",
              skill: 9,
              skillName: "Earplugs"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Earplugs Charm V",
          skills: [
            {
              id: 411,
              level: 5,
              modifiers: {},
              description: "Nullifies weak and strong monster roars.",
              skill: 9,
              skillName: "Earplugs"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 305,
      name: "Tremor Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Tremor Charm I",
          skills: [
            {
              id: 33,
              level: 1,
              modifiers: {},
              description: "Nullifies minor ground tremors.",
              skill: 11,
              skillName: "Tremor Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Tremor Charm II",
          skills: [
            {
              id: 34,
              level: 2,
              modifiers: {},
              description: "Nullifies minor ground tremors and reduces the effects of major ground tremors.",
              skill: 11,
              skillName: "Tremor Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 417,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4750,
                  name: "Vaal Hazak Talon",
                  description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Tremor Charm III",
          skills: [
            {
              id: 35,
              level: 3,
              modifiers: {},
              description: "Nullifies minor and major ground tremors.",
              skill: 11,
              skillName: "Tremor Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 306,
      name: "Exploiter Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Exploiter Charm I",
          skills: [
            {
              id: 133,
              level: 1,
              modifiers: {},
              description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
              skill: 41,
              skillName: "Weakness Exploit"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Exploiter Charm II",
          skills: [
            {
              id: 134,
              level: 2,
              modifiers: {},
              description: "Attacks that hit weak spots have 15% increased affinity, with an extra 15% on wounded parts.",
              skill: 41,
              skillName: "Weakness Exploit"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Exploiter Charm III",
          skills: [
            {
              id: 135,
              level: 3,
              modifiers: {},
              description: "Attacks that hit weak spots have 30% increased affinity, with an extra 20% on wounded parts.",
              skill: 41,
              skillName: "Weakness Exploit"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 307,
      name: "Focus Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Focus Charm I",
          skills: [
            {
              id: 136,
              level: 1,
              modifiers: {},
              description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
              skill: 42,
              skillName: "Focus"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Focus Charm II",
          skills: [
            {
              id: 137,
              level: 2,
              modifiers: {},
              description: "Increases gauge fill rate by 10% and reduces charge times by 10%.",
              skill: 42,
              skillName: "Focus"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 417,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4750,
                  name: "Vaal Hazak Talon",
                  description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                }
              },
              {
                quantity: 1,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Focus Charm III",
          skills: [
            {
              id: 138,
              level: 3,
              modifiers: {},
              description: "Increases gauge fill rate by 20% and reduces charge times by 15%.",
              skill: 42,
              skillName: "Focus"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 308,
      name: "Breaker Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Breaker Charm I",
          skills: [
            {
              id: 150,
              level: 1,
              modifiers: {},
              description: "Part damage +10%",
              skill: 46,
              skillName: "Partbreaker"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Breaker Charm II",
          skills: [
            {
              id: 151,
              level: 2,
              modifiers: {},
              description: "Part damage +20%",
              skill: 46,
              skillName: "Partbreaker"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Breaker Charm III",
          skills: [
            {
              id: 152,
              level: 3,
              modifiers: {},
              description: "Part damage +30%",
              skill: 46,
              skillName: "Partbreaker"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 309,
      name: "Fury Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Fury Charm I",
          skills: [
            {
              id: 180,
              level: 1,
              modifiers: {},
              description: "While active, grants attack +5.",
              skill: 56,
              skillName: "Resentment"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Fury Charm II",
          skills: [
            {
              id: 181,
              level: 2,
              modifiers: {},
              description: "While active, grants attack +10.",
              skill: 56,
              skillName: "Resentment"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 6,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Fury Charm III",
          skills: [
            {
              id: 182,
              level: 3,
              modifiers: {},
              description: "While active, grants attack +15.",
              skill: 56,
              skillName: "Resentment"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Fury Charm IV",
          skills: [
            {
              id: 183,
              level: 4,
              modifiers: {},
              description: "While active, grants attack +20.",
              skill: 56,
              skillName: "Resentment"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Fury Charm V",
          skills: [
            {
              id: 184,
              level: 5,
              modifiers: {},
              description: "While active, grants attack +25.",
              skill: 56,
              skillName: "Resentment"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 310,
      name: "Grit Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Grit Charm I",
          skills: [
            {
              id: 174,
              level: 1,
              modifiers: {},
              description: "While active, increases defense by 50 points",
              skill: 54,
              skillName: "Heroics"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Grit Charm II",
          skills: [
            {
              id: 175,
              level: 2,
              modifiers: {},
              description: "While active, increases attack power by 5% and increases defense by 50 points.",
              skill: 54,
              skillName: "Heroics"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Grit Charm III",
          skills: [
            {
              id: 176,
              level: 3,
              modifiers: {},
              description: "While active, increases attack power by 5% and increases defense by 100 points.",
              skill: 54,
              skillName: "Heroics"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Grit Charm IV",
          skills: [
            {
              id: 177,
              level: 4,
              modifiers: {},
              description: "While active, increases attack power by 10% and increases defense by 100 points.",
              skill: 54,
              skillName: "Heroics"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Grit Charm V",
          skills: [
            {
              id: 178,
              level: 5,
              modifiers: {},
              description: "While active, increases attack power by 15% and increases defense by 100 points.",
              skill: 54,
              skillName: "Heroics"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 311,
      name: "Maintenance Charm",
      ranks: [
        {
          level: 1,
          rarity: 6,
          name: "Maintenance Charm I",
          skills: [
            {
              id: 301,
              level: 1,
              modifiers: {},
              description: "Shortens time until reuse by 10%.",
              skill: 106,
              skillName: "Tool Specialist"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 2,
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
                quantity: 3,
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
                  id: 128,
                  rarity: 6,
                  carryLimit: 99,
                  value: 800,
                  name: "Spiritcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Maintenance Charm II",
          skills: [
            {
              id: 302,
              level: 2,
              modifiers: {},
              description: "Shortens time until reuse by 20%.",
              skill: 106,
              skillName: "Tool Specialist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                quantity: 2,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Maintenance Charm III",
          skills: [
            {
              id: 303,
              level: 3,
              modifiers: {},
              description: "Shortens time until reuse by 30%.",
              skill: 106,
              skillName: "Tool Specialist"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 438,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4300,
                  name: "Xeno'jiiva Veil",
                  description: "A rare Xeno'jiiva organ that stores energy that can be released in a violent torrent."
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
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 312,
      name: "Power Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Power Charm I",
          skills: [
            {
              id: 161,
              level: 1,
              modifiers: {},
              description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
              skill: 51,
              skillName: "Latent Power"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Power Charm II",
          skills: [
            {
              id: 162,
              level: 2,
              modifiers: {},
              description: "While active, increases affinity by 20% and reduces stamina depletion by 30%.",
              skill: 51,
              skillName: "Latent Power"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Power Charm III",
          skills: [
            {
              id: 163,
              level: 3,
              modifiers: {},
              description: "While active, increases affinity by 30% and reduces stamina depletion by 50%.",
              skill: 51,
              skillName: "Latent Power"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Power Charm IV",
          skills: [
            {
              id: 164,
              level: 4,
              modifiers: {},
              description: "While active, increases affinity by 40% and reduces stamina depletion by 50%.",
              skill: 51,
              skillName: "Latent Power"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Power Charm V",
          skills: [
            {
              id: 165,
              level: 5,
              modifiers: {},
              description: "While active, increases affinity by 50% and reduces stamina depletion by 50%.",
              skill: 51,
              skillName: "Latent Power"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 313,
      name: "Challenger Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Challenger Charm I",
          skills: [
            {
              id: 166,
              level: 1,
              modifiers: {},
              description: "While active, grants attack +4 and increases affinity by 5%.",
              skill: 52,
              skillName: "Agitator"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Challenger Charm II",
          skills: [
            {
              id: 167,
              level: 2,
              modifiers: {},
              description: "While active, grants attack +8 and increases affinity by 5%.",
              skill: 52,
              skillName: "Agitator"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 1,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Challenger Charm III",
          skills: [
            {
              id: 168,
              level: 3,
              modifiers: {},
              description: "While active, grants attack +12 and increases affinity by 7%.",
              skill: 52,
              skillName: "Agitator"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 4,
          rarity: 12,
          name: "Challenger Charm IV",
          skills: [
            {
              id: 169,
              level: 4,
              modifiers: {},
              description: "While active, grants attack +16 and increases affinity by 7%.",
              skill: 52,
              skillName: "Agitator"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 5,
          rarity: 12,
          name: "Challenger Charm V",
          skills: [
            {
              id: 170,
              level: 5,
              modifiers: {},
              description: "While active, grants attack +20 and increases affinity by 10%.",
              skill: 52,
              skillName: "Agitator"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 314,
      name: "Unscathed Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Unscathed Charm I",
          skills: [
            {
              id: 171,
              level: 1,
              modifiers: {},
              description: "While active, grants attack +5.",
              skill: 53,
              skillName: "Peak Performance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Unscathed Charm II",
          skills: [
            {
              id: 172,
              level: 2,
              modifiers: {},
              description: "While active, grants attack +10.",
              skill: 53,
              skillName: "Peak Performance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 417,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4750,
                  name: "Vaal Hazak Talon",
                  description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
                }
              },
              {
                quantity: 1,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Unscathed Charm III",
          skills: [
            {
              id: 173,
              level: 3,
              modifiers: {},
              description: "While active, grants attack +20.",
              skill: 53,
              skillName: "Peak Performance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
              {
                quantity: 5,
                item: {
                  id: 1174,
                  rarity: 11,
                  carryLimit: 99,
                  value: 9000,
                  name: "Annihilating Temperhorn",
                  description: "Very rare Tempered Ruiner Nergigante material. A product of the brutal power struggle in the Guiding Lands."
                }
              },
              {
                quantity: 3,
                item: {
                  id: 1183,
                  rarity: 11,
                  carryLimit: 99,
                  value: 2000,
                  name: "Guiding Tundra Dragonbone",
                  description: "Bone obtained in the Guiding Lands' tundra region. Traces of a bygone overlord, drawn by an unknown force."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 989,
                  rarity: 11,
                  carryLimit: 99,
                  value: 21000,
                  name: "Great Spiritvein Gem",
                  description: "Gem obtained from tempered monsters in the Guiding Lands. Rife with power from the dawn of creation."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 657,
                  rarity: 11,
                  carryLimit: 99,
                  value: 4000,
                  name: "Shadowcore Ore",
                  description: "A valuable mineral used to create charms. Its shine somehow saps the light away from its surroundings."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 315,
      name: "Mighty Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Mighty Charm I",
          skills: [
            {
              id: 267,
              level: 1,
              modifiers: {},
              description: "While active, increases affinity by 10%.",
              skill: 88,
              skillName: "Maximum Might"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                quantity: 1,
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Mighty Charm II",
          skills: [
            {
              id: 268,
              level: 2,
              modifiers: {},
              description: "While active, increases affinity by 20%.",
              skill: 88,
              skillName: "Maximum Might"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Mighty Charm III",
          skills: [
            {
              id: 269,
              level: 3,
              modifiers: {},
              description: "While active, increases affinity by 30%.",
              skill: 88,
              skillName: "Maximum Might"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 316,
      name: "Impact Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Impact Charm I",
          skills: [
            {
              id: 276,
              level: 1,
              modifiers: {},
              description: "Prevents knockbacks.",
              skill: 91,
              skillName: "Flinch Free"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Impact Charm II",
          skills: [
            {
              id: 277,
              level: 2,
              modifiers: {},
              description: "Prevents standard knockbacks. Tripping is reduced to a knockback. Increases some Kinsect extract effects.",
              skill: 91,
              skillName: "Flinch Free"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
              {
                quantity: 5,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Impact Charm III",
          skills: [
            {
              id: 278,
              level: 3,
              modifiers: {},
              description: "Prevents knockbacks and tripping. Increases some Kinsect extract effects.",
              skill: 91,
              skillName: "Flinch Free"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 317,
      name: "Miasma Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Miasma Charm I",
          skills: [
            {
              id: 294,
              level: 1,
              modifiers: {},
              description: "Reduces effluvial buildup.",
              skill: 101,
              skillName: "Effluvia Resistance"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 7,
          name: "Miasma Charm II",
          skills: [
            {
              id: 295,
              level: 2,
              modifiers: {},
              description: "Greatly reduces effluvial buildup.",
              skill: 101,
              skillName: "Effluvia Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                  id: 124,
                  rarity: 5,
                  carryLimit: 99,
                  value: 1150,
                  name: "Lightcrystal",
                  description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 8,
          name: "Miasma Charm III",
          skills: [
            {
              id: 296,
              level: 3,
              modifiers: {},
              description: "Prevents effluvial buildup.",
              skill: 101,
              skillName: "Effluvia Resistance"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
                quantity: 3,
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
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 318,
      name: "Normal Shots Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Normal Shots Charm",
          skills: [
            {
              id: 117,
              level: 1,
              modifiers: {},
              description: "Increases the power of normal ammo and normal arrows.",
              skill: 35,
              skillName: "Normal Shots"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 2,
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
                quantity: 1,
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
                  id: 172,
                  rarity: 7,
                  carryLimit: 99,
                  value: 4000,
                  name: "Bird Wyvern Gem",
                  description: "A valuable gem that can be harvested from bird wyverns. Said to fetch a high price on the market."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 11,
          name: "Normal Shots Charm II",
          skills: [
            {
              id: 352,
              level: 2,
              modifiers: {},
              description: "Greatly increases the power of normal ammo and normal arrows.",
              skill: 35,
              skillName: "Normal Shots"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 319,
      name: "Clearmind Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Clearmind Charm",
          skills: [
            {
              id: 37,
              level: 1,
              modifiers: {},
              description: "Nullifies damage from effluvia and reduces damage from acids.",
              skill: 13,
              skillName: "Effluvial Expert"
            },
            {
              id: 38,
              level: 1,
              modifiers: {},
              description: "Nullfies heat damage.",
              skill: 14,
              skillName: "Heat Guard"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 5,
                item: {
                  id: 413,
                  rarity: 7,
                  carryLimit: 99,
                  value: 3350,
                  name: "Vaal Hazak Carapace",
                  description: "Rare Vaal Hazak material. Mostly obtained as a reward. Solid, used to craft gear."
                }
              },
              {
                quantity: 2,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 320,
      name: "Rider's Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Rider's Charm",
          skills: [
            {
              id: 159,
              level: 1,
              modifiers: {},
              description: "Makes it easier to mount monsters and down mounted monsters.",
              skill: 49,
              skillName: "Master Mounter"
            },
            {
              id: 281,
              level: 1,
              modifiers: {},
              description: "Negates knockback during jumps.",
              skill: 94,
              skillName: "Jump Master"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 321,
      name: "Surveyor's Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Surveyor's Charm",
          skills: [
            {
              id: 279,
              level: 1,
              modifiers: {},
              description: "Expands your scoutflies' detection range.",
              skill: 92,
              skillName: "Scoutfly Range Up"
            },
            {
              id: 290,
              level: 1,
              modifiers: {},
              description: "Speeds up progress on research levels and special investigations.",
              skill: 99,
              skillName: "Scholar"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 5,
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
                quantity: 3,
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
                quantity: 2,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 322,
      name: "Critical Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Critical Charm I",
          skills: [
            {
              id: 130,
              level: 1,
              modifiers: {},
              description: "Increases damage dealt by critical hits by 30%.",
              skill: 40,
              skillName: "Critical Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 282,
                  rarity: 7,
                  carryLimit: 99,
                  value: 6000,
                  name: "Rathian Ruby",
                  description: "A rare gem said to have formed within Rathian tissue. Used to dramatically improve gear."
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
              },
              {
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 12,
          name: "Critical Charm II",
          skills: [
            {
              id: 131,
              level: 2,
              modifiers: {},
              description: "Increases damage dealt by critical hits by 35%.",
              skill: 40,
              skillName: "Critical Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Critical Charm III",
          skills: [
            {
              id: 132,
              level: 3,
              modifiers: {},
              description: "Increases damage dealt by critical hits by 40%.",
              skill: 40,
              skillName: "Critical Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 323,
      name: "Invigorate Charm",
      ranks: [
        {
          level: 1,
          rarity: 7,
          name: "Invigorate Charm I",
          skills: [
            {
              id: 139,
              level: 1,
              modifiers: {},
              description: "Bonus duration +10%",
              skill: 43,
              skillName: "Power Prolonger"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
              {
                quantity: 1,
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
                  id: 125,
                  rarity: 7,
                  carryLimit: 99,
                  value: 2440,
                  name: "Novacrystal",
                  description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
                }
              },
              {
                quantity: 1,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Invigorate Charm II",
          skills: [
            {
              id: 140,
              level: 2,
              modifiers: {},
              description: "Bonus duration +20%",
              skill: 43,
              skillName: "Power Prolonger"
            }
          ],
          crafting: {
            craftable: false,
            materials: [
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
              },
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 3,
          rarity: 11,
          name: "Invigorate Charm III",
          skills: [
            {
              id: 141,
              level: 3,
              modifiers: {},
              description: "Bonus duration +30%",
              skill: 43,
              skillName: "Power Prolonger"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 324,
      name: "Penetration Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Penetration Charm",
          skills: [
            {
              id: 118,
              level: 1,
              modifiers: {},
              description: "Increases the power of piercing ammo and Dragon Piercer.",
              skill: 36,
              skillName: "Piercing Shots"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 443,
                  rarity: 8,
                  carryLimit: 99,
                  value: 15000,
                  name: "Xeno'jiiva Gem",
                  description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
                }
              },
              {
                quantity: 3,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 11,
          name: "Penetration Charm II",
          skills: [
            {
              id: 380,
              level: 2,
              modifiers: {},
              description: "Greatly increases the power of piercing ammo and Dragon Piercer.",
              skill: 36,
              skillName: "Piercing Shots"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 325,
      name: "Dispersal Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Dispersal Charm",
          skills: [
            {
              id: 119,
              level: 1,
              modifiers: {},
              description: "Increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
              skill: 37,
              skillName: "Spread/Power Shots"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 411,
                  rarity: 8,
                  carryLimit: 99,
                  value: 12000,
                  name: "Nergigante Gem",
                  description: "A rare gem said to have formed within Nergigante tissue. Holds untold potential."
                }
              },
              {
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        },
        {
          level: 2,
          rarity: 11,
          name: "Dispersal Charm II",
          skills: [
            {
              id: 348,
              level: 2,
              modifiers: {},
              description: "Greatly increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
              skill: 37,
              skillName: "Spread/Power Shots"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 326,
      name: "Poison Coating Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Poison Coating Charm",
          skills: [
            {
              id: 328,
              level: 1,
              modifiers: {},
              description: "Lets you use poison coating.",
              skill: 129,
              skillName: "Poison Functionality"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
              },
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
                quantity: 3,
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
                quantity: 1,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 327,
      name: "Para Coating Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Para Coating Charm",
          skills: [
            {
              id: 329,
              level: 1,
              modifiers: {},
              description: "Lets you use paralysis coating.",
              skill: 130,
              skillName: "Para Functionality"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
              {
                quantity: 5,
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
                  id: 305,
                  rarity: 4,
                  carryLimit: 99,
                  value: 850,
                  name: "Great Girros Tail",
                  description: "Great Girros material. Obtained by carving its severed tail. Stiff, used to craft gear."
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 328,
      name: "Sleep Coating Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Sleep Coating Charm",
          skills: [
            {
              id: 330,
              level: 1,
              modifiers: {},
              description: "Lets you use sleep coating.",
              skill: 131,
              skillName: "Sleep Functionality"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 329,
      name: "Blast Coating Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Blast Coating Charm",
          skills: [
            {
              id: 331,
              level: 1,
              modifiers: {},
              description: "Lets you use blast coating.",
              skill: 132,
              skillName: "Blast Functionality"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 3,
                item: {
                  id: 400,
                  rarity: 6,
                  carryLimit: 99,
                  value: 3600,
                  name: "Bazelgeuse Tail",
                  description: "Rare Bazelgeuse material. Obtained by carving its severed tail. Stiff, used to craft gear."
                }
              },
              {
                quantity: 3,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 330,
      name: "Geomancy Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Geomancy Charm",
          skills: [
            {
              id: 298,
              level: 1,
              modifiers: {},
              description: "Increases the likelihood of rare gathering points respawning.",
              skill: 103,
              skillName: "Forager's Luck"
            },
            {
              id: 299,
              level: 1,
              modifiers: {},
              description: "Marks rare sites on the wildlife map.",
              skill: 104,
              skillName: "Detector"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 2,
                item: {
                  id: 129,
                  rarity: 7,
                  carryLimit: 99,
                  value: 1200,
                  name: "Dreamcore Ore",
                  description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 331,
      name: "Gale Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Gale Charm",
          skills: [
            {
              id: 160,
              level: 1,
              modifiers: {},
              description: "Jumping attack power +30%",
              skill: 50,
              skillName: "Airborne"
            },
            {
              id: 304,
              level: 1,
              modifiers: {
                affinity: 30
              },
              description: "+30% Affinity for 15 seconds after sliding.",
              skill: 107,
              skillName: "Affinity Sliding"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 339,
                  rarity: 7,
                  carryLimit: 99,
                  value: 7200,
                  name: "Odogaron Gem",
                  description: "A rare gem said to have formed within Odogaron tissue. Used to dramatically improve gear."
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
              },
              {
                quantity: 2,
                item: {
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 332,
      name: "Wyrmslayer Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Wyrmslayer Charm",
          skills: [
            {
              id: 100,
              level: 1,
              modifiers: {
                damageDragon: 30
              },
              description: "Dragon attack +30",
              skill: 30,
              skillName: "Dragon Attack"
            },
            {
              id: 332,
              level: 1,
              modifiers: {},
              description: "Boosts Elderseal one level.",
              skill: 133,
              skillName: "Elderseal Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                quantity: 1,
                item: {
                  id: 443,
                  rarity: 8,
                  carryLimit: 99,
                  value: 15000,
                  name: "Xeno'jiiva Gem",
                  description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
                }
              },
              {
                quantity: 1,
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 333,
      name: "Bulwark Charm",
      ranks: [
        {
          level: 1,
          rarity: 8,
          name: "Bulwark Charm",
          skills: [
            {
              id: 185,
              level: 1,
              modifiers: {},
              description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
              skill: 57,
              skillName: "Resuscitate"
            },
            {
              id: 318,
              level: 1,
              modifiers: {},
              description: "Allows you to guard against ordinarily unblockable attacks.",
              skill: 119,
              skillName: "Guard Up"
            }
          ],
          crafting: {
            craftable: true,
            materials: [
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
                  id: 130,
                  rarity: 8,
                  carryLimit: 99,
                  value: 2000,
                  name: "Dragoncore Ore",
                  description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 334,
      name: "Fair Wind Charm",
      ranks: [
        {
          level: 1,
          rarity: 3,
          name: "Fair Wind Charm",
          skills: [
            {
              id: 39,
              level: 1,
              modifiers: {
                attack: 3
              },
              description: "Attack +3",
              skill: 15,
              skillName: "Attack Boost"
            },
            {
              id: 252,
              level: 1,
              modifiers: {},
              description: "While active, reduces damage taken by 15%.",
              skill: 84,
              skillName: "Divine Blessing"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    },
    {
      id: 335,
      name: "Special Shot Charm",
      ranks: [
        {
          level: 1,
          rarity: 5,
          name: "Special Shot Charm I",
          skills: [
            {
              id: 188,
              level: 1,
              modifiers: {},
              description: "Increases the power of bowgun special ammo and Dragon Piercer by 10%.",
              skill: 60,
              skillName: "Special Ammo Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        },
        {
          level: 2,
          rarity: 8,
          name: "Special Shot Charm II",
          skills: [
            {
              id: 189,
              level: 2,
              modifiers: {},
              description: "Increases the power of bowgun special ammo and Dragon Piercer by 20%.",
              skill: 60,
              skillName: "Special Ammo Boost"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 336,
      name: "Guardian Charm",
      ranks: [
        {
          level: 1,
          rarity: 9,
          name: "Guardian Charm I",
          skills: [
            {
              id: 338,
              level: 1,
              modifiers: {},
              description: "While active, increases attack power by 5%.",
              skill: 138,
              skillName: "Offensive Guard"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        },
        {
          level: 2,
          rarity: 10,
          name: "Guardian Charm II",
          skills: [
            {
              id: 339,
              level: 2,
              modifiers: {},
              description: "While active, increases attack power by 10%.",
              skill: 138,
              skillName: "Offensive Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Guardian Charm III",
          skills: [
            {
              id: 340,
              level: 3,
              modifiers: {},
              description: "While active, increases attack power by 15%.",
              skill: 138,
              skillName: "Offensive Guard"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 337,
      name: "Phoenix Charm",
      ranks: [
        {
          level: 1,
          rarity: 11,
          name: "Phoenix Charm I",
          skills: [
            {
              id: 356,
              level: 1,
              modifiers: {},
              description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
              skill: 146,
              skillName: "Coalescence"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        },
        {
          level: 2,
          rarity: 12,
          name: "Phoenix Charm II",
          skills: [
            {
              id: 357,
              level: 2,
              modifiers: {},
              description: "While active, grants attack +15, element attack power +60, and status buildup + 10%.",
              skill: 146,
              skillName: "Coalescence"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        },
        {
          level: 3,
          rarity: 12,
          name: "Phoenix Charm III",
          skills: [
            {
              id: 358,
              level: 3,
              modifiers: {},
              description: "While active, grants attack +18, element attack power +90, and status buildup + 15%.",
              skill: 146,
              skillName: "Coalescence"
            }
          ],
          crafting: {
            craftable: false,
            materials: []
          }
        }
      ]
    },
    {
      id: 338,
      name: "Adamantine Charm",
      ranks: [
        {
          level: 1,
          rarity: 11,
          name: "Adamantine Charm I",
          skills: [
            {
              id: 315,
              level: 1,
              modifiers: {},
              description: "Raises attack as your weapon loses sharpness. Also boosts ranged weapon melee attacks and odds of stunning.",
              skill: 116,
              skillName: "Bludgeoner"
            },
            {
              id: 316,
              level: 1,
              modifiers: {},
              description: "Powers up non-elemental weapons you have equipped.",
              skill: 117,
              skillName: "Non-elemental Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    },
    {
      id: 339,
      name: "Sealer's Charm",
      ranks: [
        {
          level: 1,
          rarity: 11,
          name: "Sealer's Charm I",
          skills: [
            {
              id: 311,
              level: 1,
              modifiers: {},
              description: "Temporarily reduces stamina depletion when health is at 40% or lower.",
              skill: 112,
              skillName: "Adrenaline"
            },
            {
              id: 332,
              level: 1,
              modifiers: {},
              description: "Boosts Elderseal one level.",
              skill: 133,
              skillName: "Elderseal Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    },
    {
      id: 340,
      name: "Razor Sharp Charm",
      ranks: [
        {
          level: 1,
          rarity: 11,
          name: "Razor Sharp Charm I",
          skills: [
            {
              id: 322,
              level: 1,
              modifiers: {},
              description: "Halves sharpness loss. For bows and bowguns, shots have a chance not to expend coatings or ammo.",
              skill: 123,
              skillName: "Razor Sharp/Spare Shot"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    },
    {
      id: 341,
      name: "Gutsy Charm",
      ranks: [
        {
          level: 1,
          rarity: 11,
          name: "Gutsy Charm I",
          skills: [
            {
              id: 319,
              level: 1,
              modifiers: {},
              description: "Above a certain health threshold, you withstand an attack that would normally cart you (once only).",
              skill: 120,
              skillName: "Guts"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    },
    {
      id: 342,
      name: "Shaver Charm",
      ranks: [
        {
          level: 1,
          rarity: 9,
          name: "Shaver Charm I",
          skills: [
            {
              id: 288,
              level: 1,
              modifiers: {},
              description: "Reduces stamina depletion while climbing by 50%.",
              skill: 97,
              skillName: "Cliffhanger"
            },
            {
              id: 426,
              level: 1,
              modifiers: {},
              description: "Clutch claw weapon attacks wound monsters easier, and have a better chance of dropping slinger ammo.",
              skill: 181,
              skillName: "Clutch Claw Boost"
            }
          ],
          crafting: {
            craftable: true,
            materials: []
          }
        }
      ]
    }
  ]