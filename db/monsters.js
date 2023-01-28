
const monsterData = [
    {
      id: 1,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Aptonoth",
      description: "Docile herbivores that graze in packs. Their meat is considered a delicacy and is rich in nutrients. If one member of the herd is attacked, the rest will flee immediately.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 31,
          item: {
            id: 67,
            rarity: 1,
            carryLimit: 10,
            value: 5,
            name: "Raw Meat",
            description: "Meat carved from a monster. Can be cooked, combined, or used to set a trap."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: "Body"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      type: "small",
      species: "fanged wyvern",
      elements: [],
      name: "Jagras",
      description: "Members of the Great Jagras pack, these smaller monsters will flee upon seeing one of their own perish. They're also known for ambushing larger monsters at a moment's notice.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 3,
      type: "small",
      species: "wingdrake",
      elements: [],
      name: "Mernos",
      description: "Wingdrakes that feast on scatternuts. The flock will travel great distances when startled, making them an invaluable mode of transportation for clever hunters.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 4,
      type: "small",
      species: "neopteron",
      elements: [],
      name: "Vespoid",
      description: "Insects that paralyze their targets with their long stingers. They break easily, so attack them with poison or slinger ammo if you want to carve them.",
      ailments: [
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 5,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Mosswine",
      description: "Mosswine are known for their excellent sense of smell, and are often found foraging for fungi. If you're hunting for mushrooms, follow the Mosswine to the motherlode.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 6,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Apceros",
      description: "Herbivores that inhabit the Wildspire Waste. They've developed particularly hard hide to ward off attackers, and are known to gather in groups to defend themselves.",
      ailments: [],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 30,
          item: {
            id: 67,
            rarity: 1,
            carryLimit: 10,
            value: 5,
            name: "Raw Meat",
            description: "Meat carved from a monster. Can be cooked, combined, or used to set a trap."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: "Body"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Kestodon",
      description: "Female Kestodon will alert the pack of danger, while the males will violently charge would-be threats. Their rushing charges can be blocked, however, leaving them open to attacks.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 8,
      type: "small",
      species: "wingdrake",
      elements: [],
      name: "Noios",
      description: "Wingdrakes that produce a sound similar to screamer pods when startled. Use meat to get their attention, and then hunt them for materials, or use them for transportation.",
      ailments: [],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 9,
      type: "small",
      species: "fish",
      elements: [],
      name: "Gajau",
      description: "Vicious piscine that form groups to defend their territory from intruders. Be sure not to venture too closely to their habitat!",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 10,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Kelbi",
      description: "Small herbivores known for their gentle demeanor and the medicinal properties of their horns. Those wishing to harvest a horn should aim for the head when attacking them.",
      ailments: [],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 11,
      type: "small",
      species: "wingdrake",
      elements: [],
      name: "Raphinos",
      description: "Wingdrakes inhabiting the Coral Highlands. They group up to steal the eggs of other animals, but this in turn exposes them to the attention of larger, more vicious predators.",
      ailments: [],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 12,
      type: "small",
      species: "fanged wyvern",
      elements: [],
      name: "Shamos",
      description: "Small nocturnal monsters. They're particularly vulnerable to Tzitzi-Ya-Ku's blinding flash, but have been known to gang up on enemies.",
      ailments: [],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 13,
      type: "small",
      species: "fanged wyvern",
      elements: [],
      name: "Girros",
      description: "Monsters known to attack in packs, using the deadly vapor of the Rotten Vale to their advantage. They're known for crippling targets with paralyzing fangs.",
      ailments: [
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 14,
      type: "small",
      species: "neopteron",
      elements: [],
      name: "Hornetaur",
      description: "Small insects that are found primarily on land. They're highly territorial and will attack anything that approaches them. Gather their materials by attacking them with the slinger.",
      ailments: [],
      locations: [
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 15,
      type: "small",
      species: "herbivore",
      elements: [],
      name: "Gastodon",
      description: "Pack monsters that inhabit the Elder's Recess. They are easily angered by intruders, and will charge at monsters twice their size.",
      ailments: [],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "thunder",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 16,
      type: "small",
      species: "wingdrake",
      elements: [],
      name: "Barnos",
      description: "Fervid wingdrakes that have flourished under harsh living conditions. They target intruders with a unique acidic agent, and then attack as a swarm.",
      ailments: [
        {
          id: 14,
          name: "Defense Down",
          description: "Some monsters may inflict a status that lowers a hunter's defense. Lasts for a certain period of time but can also be cured with defense-increasing items.",
          recovery: {
            actions: [],
            items: [
              {
                id: 25,
                rarity: 4,
                value: 58,
                carryLimit: 5,
                name: "Armorskin",
                description: "Boosts your defense by turning your skin as hard as rock."
              },
              {
                id: 26,
                rarity: 5,
                value: 269,
                carryLimit: 5,
                name: "Mega Armorskin",
                description: "Boosts your defense even more than a regular armorskin."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        },
        {
          id: 6,
          zoneCount: 1,
          name: "Great Ravine"
        },
        {
          id: 8,
          zoneCount: 1,
          name: "Everstream"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "dragon",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 44,
          item: {
            id: 7,
            rarity: 2,
            carryLimit: 10,
            value: 120,
            name: "Nulberry",
            description: "A mysterious berry that cures various blights."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 3,
              chance: 20,
              subtype: null
            }
          ]
        },
        {
          id: 43,
          item: {
            id: 67,
            rarity: 1,
            carryLimit: 10,
            value: 5,
            name: "Raw Meat",
            description: "Meat carved from a monster. Can be cooked, combined, or used to set a trap."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: null
            }
          ]
        },
        {
          id: 46,
          item: {
            id: 136,
            rarity: 4,
            carryLimit: 99,
            value: 500,
            name: "Sturdy Bone",
            description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands and Rotten Vale."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: null
            }
          ]
        },
        {
          id: 45,
          item: {
            id: 147,
            rarity: 3,
            carryLimit: 99,
            value: 30,
            name: "Monster Bone S",
            description: "A material found in bonepiles. Indispensable for both hunting and daily life."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 2,
              chance: 15,
              subtype: null
            }
          ]
        },
        {
          id: 42,
          item: {
            id: 191,
            rarity: 4,
            carryLimit: 99,
            value: 180,
            name: "Wingdrake Hide",
            description: "A material carved from wingdrakes. Lightweight and often used when crafting armor."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 70,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 30,
              subtype: null
            }
          ]
        },
        {
          id: 47,
          item: {
            id: 193,
            rarity: 6,
            carryLimit: 99,
            value: 720,
            name: "Barnos Hide+",
            description: "Rare Barnos material. Obtained by carving. Supple, used to craft gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 70,
              subtype: "Body"
            }
          ]
        },
        {
          id: 48,
          item: {
            id: 194,
            rarity: 6,
            carryLimit: 99,
            value: 820,
            name: "Barnos Talon",
            description: "Rare Barnos material. Obtained by carving. Unusual, used in select gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Body"
            }
          ]
        }
      ]
    },
    {
      id: 17,
      type: "large",
      species: "fanged wyvern",
      elements: [],
      name: "Great Jagras",
      description: "The pack leader of the Jagras. When hungry, Great Jagras are known to attack monsters even stronger than themselves. It balloons to unbelievable proportions after swallowing prey.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 18,
      type: "large",
      species: "bird wyvern",
      elements: [],
      name: "Kulu-Ya-Ku",
      description: "An odd bird wyvern that has developed limbs capable of carrying weapons. It's been spotted stealing eggs from nests found in the Ancient Forest and Wildspire Waste.",
      ailments: [],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 19,
      type: "large",
      species: "bird wyvern",
      elements: [],
      name: "Pukei-Pukei",
      description: "A bird wyvern known to possess poisonous toxins in its body. It's been spotted storing scatternuts in its mouth or tail, coating them with poison and spitting them out at threats.",
      ailments: [
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        },
        {
          id: 10,
          name: "Stun",
          description: "Stun renders the target inactive, and sometimes causes them to fall over.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 20,
      type: "large",
      species: "brute wyvern",
      elements: [],
      name: "Barroth",
      description: "Barroth seek out ants, their favorite snack, and mark their territory with mud. They attack potential rivals with their devastating charging attack.",
      ailments: [
        {
          id: 12,
          name: "Waterblight",
          description: "Waterblight slows down stamina recovery rate.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 15,
          name: "Muddy",
          description: "A status effect inflicted when mud thrown by a monster covers the Hunter and makes movement more difficult. Slows all actions until the hunter leaves the mud.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: "covered in mud"
        },
        {
          element: "water",
          condition: null
        },
        {
          element: "thunder",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "water",
          stars: 3,
          condition: "covered in mud"
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 3,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 22,
          item: {
            id: 148,
            rarity: 4,
            carryLimit: 99,
            value: 300,
            name: "Monster Bone M",
            description: "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 27,
          item: {
            id: 151,
            rarity: 6,
            carryLimit: 99,
            value: 800,
            name: "Monster Keenbone",
            description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: null
            }
          ]
        },
        {
          id: 26,
          item: {
            id: 173,
            rarity: 7,
            carryLimit: 99,
            value: 4000,
            name: "Wyvern Gem",
            description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: "Body"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            }
          ]
        },
        {
          id: 16,
          item: {
            id: 237,
            rarity: 4,
            carryLimit: 99,
            value: 330,
            name: "Barroth Shell",
            description: "Barroth material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "wound",
              rank: "low",
              quantity: 2,
              chance: 100,
              subtype: "Hindlegs"
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 37,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 31,
              subtype: "Body"
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Tail"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 17,
          item: {
            id: 238,
            rarity: 4,
            carryLimit: 99,
            value: 480,
            name: "Barroth Ridge",
            description: "Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 30,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Head Shell"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 14,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 18,
          item: {
            id: 239,
            rarity: 4,
            carryLimit: 99,
            value: 630,
            name: "Barroth Claw",
            description: "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: "Forearms"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 25,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Body"
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: null
            }
          ]
        },
        {
          id: 19,
          item: {
            id: 240,
            rarity: 4,
            carryLimit: 99,
            value: 870,
            name: "Barroth Scalp",
            description: "Barroth material. Obtained by breaking its head. Tough, used in many weapons."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 80,
              subtype: "Head Shell"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 80,
              subtype: "Head Shell"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 18,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 11,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        },
        {
          id: 20,
          item: {
            id: 241,
            rarity: 4,
            carryLimit: 99,
            value: 800,
            name: "Barroth Tail",
            description: "Barroth material. Obtained by carving its severed tail. Stiff, used to craft gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 80,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 80,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 12,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 11,
              subtype: "Body"
            }
          ]
        },
        {
          id: 21,
          item: {
            id: 242,
            rarity: 4,
            carryLimit: 99,
            value: 390,
            name: "Fertile Mud",
            description: "Barroth material. Obtained by breaking its mud covering. Unusual, used in select gear."
          },
          conditions: [
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 23,
          item: {
            id: 243,
            rarity: 6,
            carryLimit: 99,
            value: 870,
            name: "Barroth Carapace",
            description: "Rare Barroth material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "wound",
              rank: "high",
              quantity: 2,
              chance: 100,
              subtype: "Hindlegs"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 43,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Body"
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Tail"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 24,
          item: {
            id: 244,
            rarity: 6,
            carryLimit: 99,
            value: 1270,
            name: "Barroth Ridge+",
            description: "Rare Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 32,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 25,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Head Shell"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 14,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 25,
          item: {
            id: 245,
            rarity: 6,
            carryLimit: 99,
            value: 1670,
            name: "Barroth Claw+",
            description: "Rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: "Forearms"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: "Gold"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 23,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: null
            }
          ]
        },
        {
          id: 28,
          item: {
            id: 598,
            rarity: 3,
            carryLimit: 0,
            value: 0,
            name: "Wyvern Tear",
            description: "Bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 21,
      type: "large",
      species: "piscine wyvern",
      elements: [
        "water"
      ],
      name: "Jyuratodus",
      description: "A large piscine wyvern that inhabits the swamps of the Wildspire Waste. It uses mud to capture prey, and it's known to battle Barroth over territory.",
      ailments: [
        {
          id: 12,
          name: "Waterblight",
          description: "Waterblight slows down stamina recovery rate.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 15,
          name: "Muddy",
          description: "A status effect inflicted when mud thrown by a monster covers the Hunter and makes movement more difficult. Slows all actions until the hunter leaves the mud.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: "covered in mud"
        },
        {
          element: "thunder",
          condition: "covered in mud"
        },
        {
          element: "water",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 3,
          condition: "covered in mud"
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 22,
      type: "large",
      species: "fanged wyvern",
      elements: [
        "thunder"
      ],
      name: "Tobi-Kadachi",
      description: "A fanged wyvern that flies among the trees of the Ancient Forest. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur.",
      ailments: [
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [
        {
          element: "thunder",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 23,
      type: "large",
      species: "brute wyvern",
      elements: [
        "fire"
      ],
      name: "Anjanath",
      description: "The Anjanath patrols the Ancient Forest, looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without hesitation.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: [
        {
          id: 7,
          item: {
            id: 149,
            rarity: 4,
            carryLimit: 99,
            value: 400,
            name: "Monster Bone L",
            description: "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 2,
              chance: 10,
              subtype: null
            }
          ]
        },
        {
          id: 14,
          item: {
            id: 151,
            rarity: 6,
            carryLimit: 99,
            value: 800,
            name: "Monster Keenbone",
            description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 10,
              subtype: null
            }
          ]
        },
        {
          id: 8,
          item: {
            id: 164,
            rarity: 4,
            carryLimit: 99,
            value: 800,
            name: "Flame Sac",
            description: "A monster organ filled with flammable powder. Handle with extreme care."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 11,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 15,
          item: {
            id: 165,
            rarity: 6,
            carryLimit: 99,
            value: 1600,
            name: "Inferno Sac",
            description: "A monster organ filled with powder that ignites if it so much as touches air. Danger!"
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 2,
          item: {
            id: 263,
            rarity: 4,
            carryLimit: 99,
            value: 430,
            name: "Anjanath Scale",
            description: "Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 25,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 25,
              subtype: "Tail"
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "wound",
              rank: "low",
              quantity: 2,
              chance: 100,
              subtype: "Hindlegs"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 40,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 10,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 9,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 1,
          item: {
            id: 264,
            rarity: 4,
            carryLimit: 99,
            value: 630,
            name: "Anjanath Pelt",
            description: "Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 27,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 32,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 10,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 35,
              subtype: "Body"
            }
          ]
        },
        {
          id: 3,
          item: {
            id: 265,
            rarity: 4,
            carryLimit: 99,
            value: 830,
            name: "Anjanath Fang",
            description: "Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 62,
              subtype: "Head"
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 4,
          item: {
            id: 266,
            rarity: 4,
            carryLimit: 99,
            value: 890,
            name: "Anjanath Nosebone",
            description: "Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Body"
            },
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 35,
              subtype: "Head"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 12,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 17,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 6,
          item: {
            id: 267,
            rarity: 4,
            carryLimit: 99,
            value: 860,
            name: "Anjanath Tail",
            description: "Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 70,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 70,
              subtype: "Tail"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 5,
          item: {
            id: 268,
            rarity: 5,
            carryLimit: 99,
            value: 2400,
            name: "Anjanath Plate",
            description: "Anjanath material. A valuable find, used to fortify gear. Said to be quite hard to come by."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 5,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 5,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 3,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 2,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 7,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 5,
              subtype: "Tail"
            },
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 3,
              subtype: "Head"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 10,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 10,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 9,
          item: {
            id: 269,
            rarity: 6,
            carryLimit: 99,
            value: 1060,
            name: "Anjanath Scale+",
            description: "Rare Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 40,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 34,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 11,
              subtype: "Gold"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 2,
              chance: 100,
              subtype: "Hindlegs"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: null
            }
          ]
        },
        {
          id: 10,
          item: {
            id: 270,
            rarity: 6,
            carryLimit: 99,
            value: 1560,
            name: "Anjanath Pelt+",
            description: "Rare Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 27,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 33,
              subtype: null
            }
          ]
        },
        {
          id: 12,
          item: {
            id: 271,
            rarity: 6,
            carryLimit: 99,
            value: 2060,
            name: "Anjanath Fang+",
            description: "Rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 62,
              subtype: "Head"
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 23,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 11,
          item: {
            id: 272,
            rarity: 6,
            carryLimit: 99,
            value: 2120,
            name: "Anjanath Nosebone+",
            description: "Rare Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Body"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 35,
              subtype: "Head"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 19,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 13,
          item: {
            id: 273,
            rarity: 7,
            carryLimit: 99,
            value: 6000,
            name: "Anjanath Gem",
            description: "A rare gem said to have formed within Anjanath tissue. Used to dramatically improve gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Tail"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Head"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 6,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 29,
          item: {
            id: 598,
            rarity: 3,
            carryLimit: 0,
            value: 0,
            name: "Wyvern Tear",
            description: "Bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 24,
      type: "large",
      species: "flying wyvern",
      elements: [
        "fire"
      ],
      name: "Azure Rathalos",
      description: "An azure-colored subspecies of Rathalos. More mobile than their standard cousins, they locate prey from the air and quickly swoop in for the kill.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: [
        {
          id: 58,
          item: {
            id: 152,
            rarity: 6,
            carryLimit: 99,
            value: 1200,
            name: "Monster Hardbone",
            description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 10,
              subtype: null
            }
          ]
        },
        {
          id: 39,
          item: {
            id: 165,
            rarity: 6,
            carryLimit: 99,
            value: 1600,
            name: "Inferno Sac",
            description: "A monster organ filled with powder that ignites if it so much as touches air. Danger!"
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 40,
          item: {
            id: 344,
            rarity: 4,
            carryLimit: 99,
            value: 1090,
            name: "Rath Wingtalon",
            description: "Material from Rathian and Rathalos. Obtained by breaking its wings. Sharp, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 2,
              chance: 35,
              subtype: "Wings"
            }
          ]
        },
        {
          id: 37,
          item: {
            id: 346,
            rarity: 5,
            carryLimit: 99,
            value: 3000,
            name: "Rathalos Plate",
            description: "Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 7,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 5,
              subtype: "Tail"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 3,
              chance: 4,
              subtype: "Head"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: null
            }
          ]
        },
        {
          id: 36,
          item: {
            id: 350,
            rarity: 6,
            carryLimit: 99,
            value: 2600,
            name: "Rathalos Medulla",
            description: "Rare Rathalos material. Obtained by carving. Grants fire element properties."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Back"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 7,
              subtype: "Tail"
            }
          ]
        },
        {
          id: 38,
          item: {
            id: 351,
            rarity: 7,
            carryLimit: 99,
            value: 7200,
            name: "Rathalos Ruby",
            description: "A rare gem said to have formed within Rathalos tissue. Almost too nice to use."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 7,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: "Body"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: "Head"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: "Back"
            }
          ]
        },
        {
          id: 32,
          item: {
            id: 352,
            rarity: 6,
            carryLimit: 99,
            value: 1450,
            name: "Azure Rathalos Scale+",
            description: "Rare Azure Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Head"
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 33,
              subtype: "Body"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Tail"
            }
          ]
        },
        {
          id: 33,
          item: {
            id: 353,
            rarity: 6,
            carryLimit: 99,
            value: 2150,
            name: "Azure Rathalos Carapace",
            description: "Rare Azure Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 69,
              subtype: "Back"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 42,
              subtype: null
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Head"
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 27,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 35,
          item: {
            id: 354,
            rarity: 6,
            carryLimit: 99,
            value: 3000,
            name: "Azure Rathalos Tail",
            description: "Rare Azure Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Gold"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        },
        {
          id: 34,
          item: {
            id: 355,
            rarity: 6,
            carryLimit: 99,
            value: 2850,
            name: "Azure Rathalos Wing",
            description: "Rare Azure Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Wings"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Gold"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: null
            }
          ]
        },
        {
          id: 41,
          item: {
            id: 599,
            rarity: 5,
            carryLimit: 0,
            value: 0,
            name: "Large Wyvern Tear",
            description: "Large, bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 25,
      type: "large",
      species: "flying wyvern",
      elements: [
        "fire"
      ],
      name: "Bazelgeuse",
      description: "A nefarious flying wyvern that travels the New World in search of prey. It scatters explosive scales over a wide area to prey on whatever gets caught in the blast.",
      ailments: [
        {
          id: 1,
          name: "Blastblight",
          description: "Blastblight will cause a damaging explosion after a certain amount of time has passed, or upon sustaining a heavy impact.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: []
          },
          protection: {
            skills: [
              {
                id: 6,
                name: "Blast Resistance",
                description: "Grants protection against blastblight."
              }
            ],
            items: []
          }
        },
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 56,
          item: {
            id: 152,
            rarity: 6,
            carryLimit: 99,
            value: 1200,
            name: "Monster Hardbone",
            description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 11,
              subtype: null
            }
          ]
        },
        {
          id: 49,
          item: {
            id: 398,
            rarity: 6,
            carryLimit: 99,
            value: 1600,
            name: "Bazelgeuse Scale+",
            description: "Rare Bazelgeuse material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 41,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 32,
              subtype: "Body"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 2,
              chance: 32,
              subtype: "Head"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 50,
          item: {
            id: 399,
            rarity: 6,
            carryLimit: 99,
            value: 2400,
            name: "Bazelgeuse Carapace",
            description: "Rare Bazelgeuse material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 69,
              subtype: "Back"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 33,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 27,
              subtype: "Tail"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 55,
          item: {
            id: 400,
            rarity: 6,
            carryLimit: 99,
            value: 3600,
            name: "Bazelgeuse Tail",
            description: "Rare Bazelgeuse material. Obtained by carving its severed tail. Stiff, used to craft gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 70,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: "Gold"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 8,
              subtype: null
            }
          ]
        },
        {
          id: 52,
          item: {
            id: 401,
            rarity: 6,
            carryLimit: 99,
            value: 4000,
            name: "Bazelgeuse Fuse",
            description: "Rare Bazelgeuse material. Obtained by breaking its head. Grants blast element properties."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 66,
              subtype: "Head"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Back"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: null
            }
          ]
        },
        {
          id: 51,
          item: {
            id: 402,
            rarity: 6,
            carryLimit: 99,
            value: 3200,
            name: "Bazelgeuse Talon",
            description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 35,
              subtype: "Wings"
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 25,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 23,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 17,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: null
            }
          ]
        },
        {
          id: 53,
          item: {
            id: 403,
            rarity: 6,
            carryLimit: 99,
            value: 3400,
            name: "Bazelgeuse Wing",
            description: "Rare Bazelgeuse material. Obtained by breaking its wings. Hard, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Wings"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 11,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        },
        {
          id: 54,
          item: {
            id: 404,
            rarity: 7,
            carryLimit: 99,
            value: 9600,
            name: "Bazelgeuse Gem",
            description: "A rare gem said to have formed within Bazelgeuse tissue. Used to dramatically improve gear."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 6,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: "Body"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: "Head"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: "Back"
            }
          ]
        },
        {
          id: 57,
          item: {
            id: 599,
            rarity: 5,
            carryLimit: 0,
            value: 0,
            name: "Large Wyvern Tear",
            description: "Large, bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 26,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire",
        "thunder"
      ],
      name: "Behemoth",
      description: "A powerful beast from another world. Its large horns and muscular frame defy nature. Unique strategies are required to battle it.",
      ailments: [
        {
          id: 2,
          name: "Bleeding",
          description: "Bleeding causes damage when performing certain actions, such as running, dodging, or attacking.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 7,
                name: "Bleeding Resistance",
                description: "Grants protection against bleeding."
              }
            ],
            items: [
              {
                id: 11,
                rarity: 2,
                value: 48,
                carryLimit: 10,
                name: "Well-done Steak",
                description: "Provides a moderate boost to your stamina and keeps it at max for a longer period. Meat done right!"
              },
              {
                id: 17,
                rarity: 2,
                value: 10,
                carryLimit: 5,
                name: "Astera Jerky",
                description: "Juicy, dried meat made by Astera's chef. Boosts natural healing and cures bleeding."
              },
              {
                id: 107,
                rarity: 2,
                value: 45,
                carryLimit: 10,
                name: "Sushifish Scale",
                description: "A scale from a Sushifish. Eat to restore a small amount of health. Also works to treat bleeding."
              }
            ]
          }
        },
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 27,
      type: "large",
      species: "brute wyvern",
      elements: [
        "dragon"
      ],
      name: "Deviljho",
      description: "A monster that must feed constantly and will devour anything in its path, even feeding on the largest of monsters with its massive jowls.",
      ailments: [
        {
          id: 3,
          name: "Dragonblight",
          description: "Dragonblight causes your weapon's elemental properties are nullified.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 14,
          name: "Defense Down",
          description: "Some monsters may inflict a status that lowers a hunter's defense. Lasts for a certain period of time but can also be cured with defense-increasing items.",
          recovery: {
            actions: [],
            items: [
              {
                id: 25,
                rarity: 4,
                value: 58,
                carryLimit: 5,
                name: "Armorskin",
                description: "Boosts your defense by turning your skin as hard as rock."
              },
              {
                id: 26,
                rarity: 5,
                value: 269,
                carryLimit: 5,
                name: "Mega Armorskin",
                description: "Boosts your defense even more than a regular armorskin."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        },
        {
          id: 6,
          zoneCount: 1,
          name: "Great Ravine"
        },
        {
          id: 7,
          zoneCount: 3,
          name: "Confluence of Fates"
        },
        {
          id: 8,
          zoneCount: 1,
          name: "Everstream"
        },
        {
          id: 9,
          zoneCount: 4,
          name: "Caverns of El Dorado"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 28,
      type: "large",
      species: "flying wyvern",
      elements: [],
      name: "Diablos",
      description: "The apex monster of the Wildspire Waste.\nA menacing, territorial beast that lurks underground.\nLoud noises will cause it to lunge out of the sand in search of prey.",
      ailments: [
        {
          id: 10,
          name: "Stun",
          description: "Stun renders the target inactive, and sometimes causes them to fall over.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 88,
          item: {
            id: 56,
            rarity: 4,
            carryLimit: 20,
            value: 56,
            name: "Dash Extract",
            description: "A mysterious substance culled from certain monsters that increases endurance."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 16,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 89,
          item: {
            id: 150,
            rarity: 4,
            carryLimit: 99,
            value: 500,
            name: "Monster Bone+",
            description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 94,
          item: {
            id: 152,
            rarity: 6,
            carryLimit: 99,
            value: 1200,
            name: "Monster Hardbone",
            description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 93,
          item: {
            id: 173,
            rarity: 7,
            carryLimit: 99,
            value: 4000,
            name: "Wyvern Gem",
            description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 3,
              subtype: "Tail"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            }
          ]
        },
        {
          id: 82,
          item: {
            id: 356,
            rarity: 4,
            carryLimit: 99,
            value: 620,
            name: "Diablos Shell",
            description: "Diablos material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 42,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 31,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 11,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 83,
          item: {
            id: 357,
            rarity: 4,
            carryLimit: 99,
            value: 870,
            name: "Diablos Ridge",
            description: "Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 70,
              subtype: "Back"
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 31,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 86,
          item: {
            id: 358,
            rarity: 4,
            carryLimit: 99,
            value: 1240,
            name: "Diablos Tailcase",
            description: "Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle."
          },
          conditions: [
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 72,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 40,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 12,
              subtype: "Body"
            }
          ]
        },
        {
          id: 84,
          item: {
            id: 359,
            rarity: 4,
            carryLimit: 99,
            value: 1120,
            name: "Diablos Fang",
            description: "Diablos material. Mostly obtained by carving. Sharp, used in many weapons."
          },
          conditions: [
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 27,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 25,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 10,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 8,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 90,
          item: {
            id: 360,
            rarity: 4,
            carryLimit: 99,
            value: 1360,
            name: "Twisted Horn",
            description: "Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: "Horns"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 2,
              chance: 35,
              subtype: "Horns"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            }
          ]
        },
        {
          id: 85,
          item: {
            id: 361,
            rarity: 4,
            carryLimit: 99,
            value: 1480,
            name: "Diablos Marrow",
            description: "Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
          },
          conditions: [
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 30,
              subtype: "Back"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: "Tail"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 17,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        },
        {
          id: 91,
          item: {
            id: 362,
            rarity: 6,
            carryLimit: 99,
            value: 1260,
            name: "Diablos Carapace",
            description: "Rare Diablos material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 42,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 35,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 92,
          item: {
            id: 363,
            rarity: 6,
            carryLimit: 99,
            value: 1860,
            name: "Diablos Ridge+",
            description: "Rare Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 70,
              subtype: "Back"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 95,
          item: {
            id: 364,
            rarity: 6,
            carryLimit: 99,
            value: 2980,
            name: "Majestic Horn",
            description: "Rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Horns"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Silver"
            }
          ]
        },
        {
          id: 87,
          item: {
            id: 598,
            rarity: 3,
            carryLimit: 0,
            value: 0,
            name: "Wyvern Tear",
            description: "Bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 29,
      type: "large",
      species: "flying wyvern",
      elements: [],
      name: "Black Diablos",
      description: "These black-shelled Diablos are actually female Diablos in heat. The color signals their aggressiveness and heightened hostility to other creatures in their habitat.",
      ailments: [],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        },
        {
          element: "dragon",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 67,
          item: {
            id: 56,
            rarity: 4,
            carryLimit: 20,
            value: 56,
            name: "Dash Extract",
            description: "A mysterious substance culled from certain monsters that increases endurance."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 68,
          item: {
            id: 152,
            rarity: 6,
            carryLimit: 99,
            value: 1200,
            name: "Monster Hardbone",
            description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 2,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 64,
          item: {
            id: 173,
            rarity: 7,
            carryLimit: 99,
            value: 4000,
            name: "Wyvern Gem",
            description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 4,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 4,
              subtype: "Tail"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 2,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            }
          ]
        },
        {
          id: 63,
          item: {
            id: 358,
            rarity: 4,
            carryLimit: 99,
            value: 1240,
            name: "Diablos Tailcase",
            description: "Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 40,
              subtype: "Tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: "Body"
            }
          ]
        },
        {
          id: 62,
          item: {
            id: 359,
            rarity: 4,
            carryLimit: 99,
            value: 1120,
            name: "Diablos Fang",
            description: "Diablos material. Mostly obtained by carving. Sharp, used in many weapons."
          },
          conditions: [
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 25,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 10,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 8,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 96,
          item: {
            id: 360,
            rarity: 4,
            carryLimit: 99,
            value: 1360,
            name: "Twisted Horn",
            description: "Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 35,
              subtype: "Horn"
            }
          ]
        },
        {
          id: 66,
          item: {
            id: 361,
            rarity: 4,
            carryLimit: 99,
            value: 1480,
            name: "Diablos Marrow",
            description: "Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: "Tail"
            }
          ]
        },
        {
          id: 61,
          item: {
            id: 365,
            rarity: 6,
            carryLimit: 99,
            value: 3040,
            name: "Blos Medulla",
            description: "Rare Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "Back"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        },
        {
          id: 59,
          item: {
            id: 366,
            rarity: 6,
            carryLimit: 99,
            value: 1450,
            name: "Black Diablos Carapace",
            description: "Rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 34,
              subtype: "Tail"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 42,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 60,
          item: {
            id: 367,
            rarity: 6,
            carryLimit: 99,
            value: 2150,
            name: "Black Diablos Ridge+",
            description: "Rare Black Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 70,
              subtype: "Back"
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 20,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 69,
          item: {
            id: 368,
            rarity: 6,
            carryLimit: 99,
            value: 5700,
            name: "Black Spiral Horn+",
            description: "Rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 65,
              subtype: "Horn"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 14,
              subtype: "Silver"
            }
          ]
        },
        {
          id: 65,
          item: {
            id: 599,
            rarity: 5,
            carryLimit: 0,
            value: 0,
            name: "Large Wyvern Tear",
            description: "Large, bitter tears wept by wyverns on certain occasions. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 30,
      type: "large",
      species: "fanged wyvern",
      elements: [
        "fire"
      ],
      name: "Dodogama",
      description: "A monster that devours rock as its primary diet. The Crystals it devours mix with its saliva to produce explosive minerals that it can spit at its enemies.",
      ailments: [
        {
          id: 1,
          name: "Blastblight",
          description: "Blastblight will cause a damaging explosion after a certain amount of time has passed, or upon sustaining a heavy impact.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: []
          },
          protection: {
            skills: [
              {
                id: 6,
                name: "Blast Resistance",
                description: "Grants protection against blastblight."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: [
        {
          id: 103,
          item: {
            id: 57,
            rarity: 4,
            carryLimit: 20,
            value: 122,
            name: "Nourishing Extract",
            description: "Can be obtained from certain large monsters. Has the ability to amplify the effects of certain medicines."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 16,
              subtype: "silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 14,
              subtype: "gold"
            }
          ]
        },
        {
          id: 102,
          item: {
            id: 151,
            rarity: 6,
            carryLimit: 99,
            value: 800,
            name: "Monster Keenbone",
            description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 99,
          item: {
            id: 382,
            rarity: 6,
            carryLimit: 99,
            value: 1030,
            name: "Dodogama Scale+",
            description: "Rare Dodogama material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 31,
              subtype: "body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: null
            },
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 43,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 8,
              subtype: "gold"
            }
          ]
        },
        {
          id: 97,
          item: {
            id: 383,
            rarity: 6,
            carryLimit: 99,
            value: 1530,
            name: "Dodogama Hide+",
            description: "Rare Dodogama material. Mostly obtained as a reward. Supple, used to craft gear."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 24,
              subtype: "body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 35,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "tail"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 17,
              subtype: "silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "gold"
            }
          ]
        },
        {
          id: 98,
          item: {
            id: 384,
            rarity: 6,
            carryLimit: 99,
            value: 2120,
            name: "Dodogama Jaw",
            description: "Rare Dodogama material. Obtained by breaking its head. Unusual and difficult to handle."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: "head"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "body"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 25,
              subtype: "silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "gold"
            }
          ]
        },
        {
          id: 101,
          item: {
            id: 385,
            rarity: 6,
            carryLimit: 99,
            value: 2060,
            name: "Dodogama Talon",
            description: "Rare Dodogama material. Obtained by breaking its forelegs. Heavy, used to craft armor."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: "forearms"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 30,
              subtype: "silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: "gold"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: "body"
            }
          ]
        },
        {
          id: 100,
          item: {
            id: 386,
            rarity: 6,
            carryLimit: 99,
            value: 2210,
            name: "Dodogama Tail",
            description: "Rare Dodogama material. Obtained by carving its severed tail. Tough, used in many weapons."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 80,
              subtype: "tail"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 12,
              subtype: "body"
            }
          ]
        }
      ]
    },
    {
      id: 31,
      type: "large",
      species: "fanged wyvern",
      elements: [],
      name: "Great Girros",
      description: "A monster that scavenges for meals dropped from the Coral Highlands.\nIt acts as the alpha leader of a Girros pack, and sports giant fangs that paralyze its prey.",
      ailments: [
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [
        {
          element: "thunder",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 32,
      type: "large",
      species: "elder dragon",
      elements: [
        "thunder"
      ],
      name: "Kirin",
      description: "Kirin are so rarely sighted that little is known of their ecology. It's been said they envelop themselves in pure electricity when they are provoked.\nThe lightning a Kirin cloaks itself with has been confirmed to toughen its skin. The key to hunting a Kirin lies in staggering it, using Elderseal weapons, and protecting yourself from and avoiding its lightning attacks.",
      ailments: [
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ],
            items: []
          }
        },
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        }
      ],
      resistances: [
        {
          element: "thunder",
          condition: null
        },
        {
          element: "paralysis",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: [
        {
          id: 74,
          item: {
            id: 124,
            rarity: 5,
            carryLimit: 99,
            value: 1150,
            name: "Lightcrystal",
            description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
          },
          conditions: [
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 1,
              subtype: null
            }
          ]
        },
        {
          id: 80,
          item: {
            id: 125,
            rarity: 7,
            carryLimit: 99,
            value: 2440,
            name: "Novacrystal",
            description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
          },
          conditions: [
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 22,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 1,
              subtype: null
            }
          ]
        },
        {
          id: 79,
          item: {
            id: 153,
            rarity: 7,
            carryLimit: 99,
            value: 1600,
            name: "Elder Dragon Bone",
            description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 8,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 8,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 78,
          item: {
            id: 174,
            rarity: 7,
            carryLimit: 99,
            value: 1600,
            name: "Elder Dragon Blood",
            description: "Contains an unknown compound. The object of much scholarly research."
          },
          conditions: [
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 70,
          item: {
            id: 369,
            rarity: 4,
            carryLimit: 99,
            value: 750,
            name: "Kirin Hide",
            description: "Kirin material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 68,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 68,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 43,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 14,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 10,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 71,
          item: {
            id: 370,
            rarity: 4,
            carryLimit: 99,
            value: 1000,
            name: "Kirin Tail",
            description: "Kirin material. Mostly obtained as a reward. Compatible with thunder element."
          },
          conditions: [
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 34,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 34,
              subtype: null
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 30,
              subtype: "Gold"
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 28,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: "Silver"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 20,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 72,
          item: {
            id: 371,
            rarity: 4,
            carryLimit: 99,
            value: 1250,
            name: "Kirin Mane",
            description: "Kirin material. Mostly obtained by carving. Highly thunder-resistant, used to craft gear."
          },
          conditions: [
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 35,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 23,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 23,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 21,
              subtype: "Body"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: "Body"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 2,
              chance: 18,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 3,
              chance: 14,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 73,
          item: {
            id: 372,
            rarity: 4,
            carryLimit: 99,
            value: 1750,
            name: "Kirin Thunderhorn",
            description: "Kirin material. Obtain by breaking its horn. Grants thunder element properties."
          },
          conditions: [
            {
              type: "wound",
              rank: "low",
              quantity: 1,
              chance: 100,
              subtype: "Horn"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 24,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "low",
              quantity: 1,
              chance: 22,
              subtype: "Silver"
            },
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 20,
              subtype: "Horn"
            },
            {
              type: "reward",
              rank: "low",
              quantity: 1,
              chance: 16,
              subtype: null
            },
            {
              type: "carve",
              rank: "low",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            }
          ]
        },
        {
          id: 75,
          item: {
            id: 373,
            rarity: 7,
            carryLimit: 99,
            value: 1630,
            name: "Kirin Hide+",
            description: "Rare Kirin material. Mostly obtained by carving. Broadly used for many purposes."
          },
          conditions: [
            {
              type: "track",
              rank: "high",
              quantity: 1,
              chance: 100,
              subtype: null
            },
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 50,
              subtype: null
            },
            {
              type: "plunderblade",
              rank: "high",
              quantity: 1,
              chance: 43,
              subtype: null
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 36,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 21,
              subtype: null
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 2,
              chance: 12,
              subtype: "Silver"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 3,
              chance: 12,
              subtype: "Gold"
            }
          ]
        },
        {
          id: 76,
          item: {
            id: 374,
            rarity: 7,
            carryLimit: 99,
            value: 2430,
            name: "Kirin Thundertail",
            description: "Rare Kirin material. Mostly obtained as a reward. Compatible with thunder element."
          },
          conditions: [
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 28,
              subtype: "Body"
            },
            {
              type: "reward",
              rank: "high",
              quantity: 1,
              chance: 13,
              subtype: null
            }
          ]
        },
        {
          id: 77,
          item: {
            id: 375,
            rarity: 7,
            carryLimit: 99,
            value: 3200,
            name: "Kirin Azure Horn",
            description: "Rare Kirin material. Obtain by breaking its horn. Grants thunder element properties."
          },
          conditions: [
            {
              type: "wound",
              rank: "high",
              quantity: 1,
              chance: 80,
              subtype: "Horn"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 26,
              subtype: "Gold"
            },
            {
              type: "investigation",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: "Silver"
            },
            {
              type: "carve",
              rank: "high",
              quantity: 1,
              chance: 15,
              subtype: "Body"
            }
          ]
        },
        {
          id: 81,
          item: {
            id: 600,
            rarity: 3,
            carryLimit: 0,
            value: 0,
            name: "Dragon Treasure",
            description: "A shiny rock that elder dragons like to collect. (Account Item)"
          },
          conditions: [
            {
              type: "shiny",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "palico",
              rank: "high",
              quantity: 1,
              chance: 22,
              subtype: null
            },
            {
              type: "shiny",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            },
            {
              type: "palico",
              rank: "low",
              quantity: 1,
              chance: 9,
              subtype: null
            }
          ]
        }
      ]
    },
    {
      id: 33,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire"
      ],
      name: "Kulve Taroth",
      description: "An Elder Dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance, thus the need for a thorough investigation. An exhaustive investigation is required in order to break Kulve Taroth's giant gold plated horns. Pursue the monster to learn more about it. Gather tracks and recruit hunters to help you further your investigation.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 9,
          zoneCount: 4,
          name: "Caverns of El Dorado"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        },
        {
          element: "thunder",
          condition: null
        },
        {
          element: "ice",
          condition: "covered in gold"
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: "covered in gold"
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: "covered in gold"
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: "covered in gold"
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 34,
      type: "large",
      species: "elder dragon",
      elements: [],
      name: "Kushala Daora",
      description: "An elder dragon that shields itself with fierce winds, preventing anyone from approaching it. Its skin consists of hard, metallic scales.",
      ailments: [
        {
          id: 10,
          name: "Stun",
          description: "Stun renders the target inactive, and sometimes causes them to fall over.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        },
        {
          element: "ice",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 3,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 35,
      type: "large",
      species: "piscine wyvern",
      elements: [
        "fire"
      ],
      name: "Lavasioth",
      description: "Lavasioth utilizes molten lava as armor. They are extremely aggressive and will attack without prejudice until the threat has been eliminated.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        },
        {
          element: "thunder",
          condition: "hardened"
        },
        {
          element: "ice",
          condition: "hardened"
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: "hardened"
        },
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: "hardened"
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 36,
      type: "large",
      species: "flying wyvern",
      elements: [
        "ice"
      ],
      name: "Legiana",
      description: "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos. It emits a chilling wind from its body, which dulls its prey's ability to escape.",
      ailments: [
        {
          id: 6,
          name: "Iceblight",
          description: "Iceblight causes stamina usage to increase when performing actions.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [
        {
          element: "ice",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 37,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire"
      ],
      name: "Lunastra",
      description: "A rare female Elder Dragon that litters the air with hot blue dust. Reports of it traveling with her mate, Teostra, are still unconfirmed.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 38,
      type: "large",
      species: "elder dragon",
      elements: [],
      name: "Nergigante",
      description: "A terrible elder dragon that appears when other elders are in the vicinity. Its penchant for destruction is well documented.",
      ailments: [],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 39,
      type: "large",
      species: "fanged wyvern",
      elements: [],
      name: "Odogaron",
      description: "A terrifying monster that scours the Rotten Vale for carrion. Its highly aggressive nature means that anything, be it monster or man, is a potential meal.",
      ailments: [
        {
          id: 2,
          name: "Bleeding",
          description: "Bleeding causes damage when performing certain actions, such as running, dodging, or attacking.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 7,
                name: "Bleeding Resistance",
                description: "Grants protection against bleeding."
              }
            ],
            items: [
              {
                id: 11,
                rarity: 2,
                value: 48,
                carryLimit: 10,
                name: "Well-done Steak",
                description: "Provides a moderate boost to your stamina and keeps it at max for a longer period. Meat done right!"
              },
              {
                id: 17,
                rarity: 2,
                value: 10,
                carryLimit: 5,
                name: "Astera Jerky",
                description: "Juicy, dried meat made by Astera's chef. Boosts natural healing and cures bleeding."
              },
              {
                id: 107,
                rarity: 2,
                value: 45,
                carryLimit: 10,
                name: "Sushifish Scale",
                description: "A scale from a Sushifish. Eat to restore a small amount of health. Also works to treat bleeding."
              }
            ]
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [
        {
          element: "dragon",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 3,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 40,
      type: "large",
      species: "flying wyvern",
      elements: [],
      name: "Paolumu",
      description: "Paolumu feast on eggs found in the Coral Highlands. They are able to propel through the air using unique sacs in their bodies, and attack with their extremely hard tails.",
      ailments: [
        {
          id: 13,
          name: "Wind Pressure",
          description: "Wind pressure causes the hunter to brace against powerful winds, causing temporarily imobility.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 10,
                name: "Windproof",
                description: "Grants protection against wind pressure."
              },
              {
                id: 122,
                name: "Nullify Wind Pressure",
                description: "Negates all wind pressure."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 3,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 41,
      type: "large",
      species: "brute wyvern",
      elements: [],
      name: "Radobaan",
      description: "A gigantic brute wyvern that eats the bones of carcasses found in the Rotten Vale, using some of it as armor. It also rolls into a ball as a form of attack and transportation.",
      ailments: [
        {
          id: 9,
          name: "Sleep",
          description: "Sleep renders the hunter or monster inactive and susceptible to increased damage, but only for the first hit, as it will then wake them up.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 3,
                name: "Sleep Resistance",
                description: "Reduces the duration of sleep."
              }
            ],
            items: [
              {
                id: 8,
                rarity: 2,
                value: 6,
                carryLimit: 10,
                name: "Energy Drink",
                description: "A Guild-approved beverage that boosts your stamina. Helps shake off sleep, too!"
              }
            ]
          }
        }
      ],
      locations: [
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 42,
      type: "large",
      species: "flying wyvern",
      elements: [
        "fire"
      ],
      name: "Rathalos",
      description: "The apex monster of the Ancient Forest, also known as the \"King of the Skies\". A fierce wyvern that descends upon invaders, attacking with its venomous claws and fiery breath.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        },
        {
          id: 10,
          name: "Stun",
          description: "Stun renders the target inactive, and sometimes causes them to fall over.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 43,
      type: "large",
      species: "flying wyvern",
      elements: [
        "fire"
      ],
      name: "Rathian",
      description: "A wyvern known as the \"Queen of the Land.\" Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 44,
      type: "large",
      species: "flying wyvern",
      elements: [
        "fire"
      ],
      name: "Pink Rathian",
      description: "A subspecies with vibrant pink scales. Pink Rathians wield their toxic tails more deftly than normal Rathians, weakening prey with poison before moving in for the kill.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 45,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire"
      ],
      name: "Teostra",
      description: "A brutal elder dragon wreathed in flames that spits blazing fire. Teostra are of such a fierce and deadly nature that the Guild closely monitors their movements.",
      ailments: [
        {
          id: 1,
          name: "Blastblight",
          description: "Blastblight will cause a damaging explosion after a certain amount of time has passed, or upon sustaining a heavy impact.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: []
          },
          protection: {
            skills: [
              {
                id: 6,
                name: "Blast Resistance",
                description: "Grants protection against blastblight."
              }
            ],
            items: []
          }
        },
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 3,
          zoneCount: 15,
          name: "Wildspire Waste"
        },
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 48,
      type: "large",
      species: "bird wyvern",
      elements: [],
      name: "Tzitzi-Ya-Ku",
      description: "This odd monster blinds both prey and enemies with a special pulsing organ near its head. It then uses its strong legs to deliver finishing blows.",
      ailments: [
        {
          id: 10,
          name: "Stun",
          description: "Stun renders the target inactive, and sometimes causes them to fall over.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 49,
      type: "large",
      species: "brute wyvern",
      elements: [
        "fire"
      ],
      name: "Uragaan",
      description: "Large Brute Wyverns that feed on ore, using their mighty jaws to crush solid rock to powder. They've been known to confront Lavasioths over territory disputes.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 9,
          name: "Sleep",
          description: "Sleep renders the hunter or monster inactive and susceptible to increased damage, but only for the first hit, as it will then wake them up.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 3,
                name: "Sleep Resistance",
                description: "Reduces the duration of sleep."
              }
            ],
            items: [
              {
                id: 8,
                rarity: 2,
                value: 6,
                carryLimit: 10,
                name: "Energy Drink",
                description: "A Guild-approved beverage that boosts your stamina. Helps shake off sleep, too!"
              }
            ]
          }
        }
      ],
      locations: [
        {
          id: 5,
          zoneCount: 16,
          name: "Elder's Recess"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 50,
      type: "large",
      species: "elder dragon",
      elements: [],
      name: "Vaal Hazak",
      description: "A grotesque Elder Dragon, that inhabits the deepest part of the Rotten Vale. It uses the fatal vapor of the vale in what appears to be a symbiotic relationship.",
      ailments: [
        {
          id: 4,
          name: "Effluvial Buildup",
          description: "Effluvial buildup causes damage over time, and eventually cuts your maximum health in half if ignored for too long.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 13,
                name: "Effluvial Expert",
                description: "Nullifies or reduces environmental damage in the Rotten Vale."
              },
              {
                id: 101,
                name: "Effluvia Resistance",
                description: "Gain a resistance to effluvial buildup."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 4,
          zoneCount: 16,
          name: "Rotten Vale"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 51,
      type: "large",
      species: "elder dragon",
      elements: [
        "dragon"
      ],
      name: "Xeno'jiiva",
      description: "RESEARCHING. Threat level unknown.",
      ailments: [
        {
          id: 3,
          name: "Dragonblight",
          description: "Dragonblight causes your weapon's elemental properties are nullified.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 7,
          zoneCount: 3,
          name: "Confluence of Fates"
        }
      ],
      resistances: [
        {
          element: "sleep",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 52,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire"
      ],
      name: "Zorah Magdaros",
      description: "An elder dragon that rises from the earth like a volcano. Where it's headed, and why, the Research Commission has yet to figure out.",
      ailments: [
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 6,
          zoneCount: 1,
          name: "Great Ravine"
        },
        {
          id: 8,
          zoneCount: 1,
          name: "Everstream"
        }
      ],
      resistances: [
        {
          element: "fire",
          condition: null
        },
        {
          element: "poison",
          condition: null
        },
        {
          element: "sleep",
          condition: null
        },
        {
          element: "paralysis",
          condition: null
        },
        {
          element: "blast",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "water",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 3,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 53,
      type: "large",
      species: "relict",
      elements: [],
      name: "Leshen",
      description: "Dwelling deep inside the forest, these creatures use their innate magic to control all flora and fauna within their territory.",
      ailments: [
        {
          id: 2,
          name: "Bleeding",
          description: "Bleeding causes damage when performing certain actions, such as running, dodging, or attacking.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 7,
                name: "Bleeding Resistance",
                description: "Grants protection against bleeding."
              }
            ],
            items: [
              {
                id: 11,
                rarity: 2,
                value: 48,
                carryLimit: 10,
                name: "Well-done Steak",
                description: "Provides a moderate boost to your stamina and keeps it at max for a longer period. Meat done right!"
              },
              {
                id: 17,
                rarity: 2,
                value: 10,
                carryLimit: 5,
                name: "Astera Jerky",
                description: "Juicy, dried meat made by Astera's chef. Boosts natural healing and cures bleeding."
              },
              {
                id: 107,
                rarity: 2,
                value: 45,
                carryLimit: 10,
                name: "Sushifish Scale",
                description: "A scale from a Sushifish. Eat to restore a small amount of health. Also works to treat bleeding."
              }
            ]
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        },
        {
          element: "sleep",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 3,
          condition: null
        },
        {
          element: "paralysis",
          stars: 2,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 54,
      type: "large",
      species: "relict",
      elements: [],
      name: "Ancient Leshen",
      description: "An old leshen that arrived through a portal to assume control over the Ancient Forest. Sometimes revered as an indigenous deity.",
      ailments: [
        {
          id: 2,
          name: "Bleeding",
          description: "Bleeding causes damage when performing certain actions, such as running, dodging, or attacking.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 7,
                name: "Bleeding Resistance",
                description: "Grants protection against bleeding."
              }
            ],
            items: [
              {
                id: 11,
                rarity: 2,
                value: 48,
                carryLimit: 10,
                name: "Well-done Steak",
                description: "Provides a moderate boost to your stamina and keeps it at max for a longer period. Meat done right!"
              },
              {
                id: 17,
                rarity: 2,
                value: 10,
                carryLimit: 5,
                name: "Astera Jerky",
                description: "Juicy, dried meat made by Astera's chef. Boosts natural healing and cures bleeding."
              },
              {
                id: 107,
                rarity: 2,
                value: 45,
                carryLimit: 10,
                name: "Sushifish Scale",
                description: "A scale from a Sushifish. Eat to restore a small amount of health. Also works to treat bleeding."
              }
            ]
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        },
        {
          element: "sleep",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 55,
      type: "large",
      species: "elder dragon",
      elements: [
        "fire",
        "dragon"
      ],
      name: "Safi'jiiva",
      description: "The fully-grown form of Xeno'jiiva. It absorbs energy from its environment to heal itself and change the ecosystem.",
      ailments: [
        {
          id: 3,
          name: "Dragonblight",
          description: "Dragonblight causes your weapon's elemental properties are nullified.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 5,
          name: "Fireblight",
          description: "Fireblight causes damage over time, and negates regular health recovery.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 14,
          zoneCount: 1,
          name: "Secluded Valley"
        }
      ],
      resistances: [
        {
          element: "sleep",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "dragon",
          stars: 3,
          condition: "Elderseal"
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "thunder",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 56,
      type: "large",
      species: "fanged wyvern",
      elements: [
        "dragon"
      ],
      name: "Stygian Zinogre",
      description: "Has a symbiotic relationship with Dracophage Bugs, which it releases like bullets. Becomes even more dangerous when covered in light.",
      ailments: [
        {
          id: 3,
          name: "Dragonblight",
          description: "Dragonblight causes your weapon's elemental properties are nullified.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 13,
          zoneCount: 15,
          name: "Guiding Lands"
        }
      ],
      resistances: [
        {
          element: "ice",
          condition: null
        },
        {
          element: "fire",
          condition: null
        },
        {
          element: "water",
          condition: null
        },
        {
          element: "dragon",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "fire",
          stars: 2,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 57,
      type: "large",
      species: "fanged beast",
      elements: [
        "thunder"
      ],
      name: "Rajang",
      description: "An ultra-aggressive creature that few have a chance of surviving against. Sports powerful arms that pack a punch, and turns gold when angry.",
      ailments: [
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 13,
          zoneCount: 15,
          name: "Guiding Lands"
        }
      ],
      resistances: [
        {
          element: "thunder",
          condition: null
        },
        {
          element: "fire",
          condition: null
        },
        {
          element: "dragon",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 1,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "stun",
          stars: 1,
          condition: null
        },
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "water",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 58,
      type: "large",
      species: "fanged wyvern",
      elements: [],
      name: "Viper Tobi-Kadachi",
      description: "The tail of this subspecies secretes a toxin while its fangs paralyze prey. It can also glide without climbing trees.",
      ailments: [
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ],
            items: []
          }
        },
        {
          id: 8,
          name: "Poison",
          description: "Poison slowly drains the target's health.",
          recovery: {
            actions: [],
            items: [
              {
                id: 5,
                rarity: 1,
                value: 6,
                carryLimit: 10,
                name: "Antidote",
                description: "A cure for poison."
              },
              {
                id: 6,
                rarity: 2,
                value: 25,
                carryLimit: 5,
                name: "Herbal Medicine",
                description: "Removes all traces of poison and restores a slight amount of health."
              }
            ]
          },
          protection: {
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 12,
          zoneCount: 17,
          name: "Hoarfrost Reach"
        }
      ],
      resistances: [],
      weaknesses: [
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "thunder",
          stars: 3,
          condition: null
        },
        {
          element: "ice",
          stars: 2,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        },
        {
          element: "poison",
          stars: 1,
          condition: null
        },
        {
          element: "sleep",
          stars: 2,
          condition: null
        },
        {
          element: "paralysis",
          stars: 1,
          condition: null
        },
        {
          element: "blast",
          stars: 2,
          condition: null
        },
        {
          element: "stun",
          stars: 2,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 59,
      type: "large",
      species: "elder dragon",
      elements: [
        "water",
        "thunder"
      ],
      name: "Namielle",
      description: "An Elder Dragon said to be able to command water and use it as a shield. Though very few sightings have ever been reported, they mention 'exploding water' and 'bright glowing lights.' Its existence remains shrouded in mystery.",
      ailments: [
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        },
        {
          id: 12,
          name: "Waterblight",
          description: "Waterblight slows down stamina recovery rate.",
          recovery: {
            actions: [],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        }
      ],
      resistances: [
        {
          element: "water",
          condition: null
        },
        {
          element: "thunder",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "fire",
          stars: 3,
          condition: null
        },
        {
          element: "dragon",
          stars: 2,
          condition: null
        },
        {
          element: "ice",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    },
    {
      id: 60,
      type: "large",
      species: "fanged wyvern",
      elements: [
        "thunder"
      ],
      name: "Zinogre",
      description: "Lightning courses through the fur and unique plating of this fanged wyvern. It is most deadly in its supercharged state.",
      ailments: [
        {
          id: 11,
          name: "Thunderblight",
          description: "Thunderblight increases the chance of being stunned.",
          recovery: {
            actions: [
              "dodge"
            ],
            items: [
              {
                id: 7,
                rarity: 2,
                value: 120,
                carryLimit: 10,
                name: "Nulberry",
                description: "A mysterious berry that cures various blights."
              }
            ]
          },
          protection: {
            skills: [],
            items: []
          }
        }
      ],
      locations: [
        {
          id: 1,
          zoneCount: 17,
          name: "Ancient Forest"
        },
        {
          id: 2,
          zoneCount: 15,
          name: "Coral Highlands"
        },
        {
          id: 13,
          zoneCount: 15,
          name: "Guiding Lands"
        }
      ],
      resistances: [
        {
          element: "thunder",
          condition: null
        }
      ],
      weaknesses: [
        {
          element: "ice",
          stars: 3,
          condition: null
        },
        {
          element: "water",
          stars: 2,
          condition: null
        },
        {
          element: "fire",
          stars: 1,
          condition: null
        },
        {
          element: "dragon",
          stars: 1,
          condition: null
        }
      ],
      rewards: []
    }
  ]