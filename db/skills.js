const { client } = require("./client");

const createSkills = async ({id, name, description, ranks}) => {

  try {

    const {rows: [skill]} = await client.query(`
    INSERT INTO skills(id, name, description, ranks)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,[id, name, description, ranks]);

    return skill;
    
  } catch (error) {
    console.error(error)
  }
} 

const skillData = [
    {
      id: 1,
      name: "Poison Resistance",
      description: "Reduces damage while poisoned.",
      ranks: [
        {
          id: 1,
          skill: 1,
          level: 1,
          modifiers: {},
          description: "Reduces the number of times you take poison damage.",
          skillName: "Poison Resistance"
        },
        {
          id: 2,
          skill: 1,
          level: 2,
          modifiers: {},
          description: "Greatly reduces the number of times you take poison damage.",
          skillName: "Poison Resistance"
        },
        {
          id: 3,
          skill: 1,
          level: 3,
          modifiers: {},
          description: "Prevents poison.",
          skillName: "Poison Resistance"
        }
      ]
    },
    {
      id: 2,
      name: "Paralysis Resistance",
      description: "Reduces the duration of paralysis.",
      ranks: [
        {
          id: 4,
          skill: 2,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of paralysis by 30%.",
          skillName: "Paralysis Resistance"
        },
        {
          id: 5,
          skill: 2,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of paralysis by 60%.",
          skillName: "Paralysis Resistance"
        },
        {
          id: 6,
          skill: 2,
          level: 3,
          modifiers: {},
          description: "Prevents paralysis.",
          skillName: "Paralysis Resistance"
        }
      ]
    },
    {
      id: 3,
      name: "Sleep Resistance",
      description: "Reduces the duration of sleep.",
      ranks: [
        {
          id: 7,
          skill: 3,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of sleep by 30%.",
          skillName: "Sleep Resistance"
        },
        {
          id: 8,
          skill: 3,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of sleep by 60%.",
          skillName: "Sleep Resistance"
        },
        {
          id: 9,
          skill: 3,
          level: 3,
          modifiers: {},
          description: "Prevents sleep.",
          skillName: "Sleep Resistance"
        }
      ]
    },
    {
      id: 4,
      name: "Stun Resistance",
      description: "Reduces stun duration.",
      ranks: [
        {
          id: 10,
          skill: 4,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of stun by 60%.",
          skillName: "Stun Resistance"
        },
        {
          id: 11,
          skill: 4,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of stun by 90%.",
          skillName: "Stun Resistance"
        },
        {
          id: 12,
          skill: 4,
          level: 3,
          modifiers: {},
          description: "Prevents stun.",
          skillName: "Stun Resistance"
        }
      ]
    },
    {
      id: 5,
      name: "Muck Resistance",
      description: "Reduces impairments to mobility while stuck in monster muck.",
      ranks: [
        {
          id: 13,
          skill: 5,
          level: 1,
          modifiers: {},
          description: "Reduces limits on movement speed and evasion.",
          skillName: "Muck Resistance"
        }
      ]
    },
    {
      id: 6,
      name: "Blast Resistance",
      description: "Grants protection against blastblight.",
      ranks: [
        {
          id: 14,
          skill: 6,
          level: 1,
          modifiers: {},
          description: "Delays blastblight and reduces blast damage.",
          skillName: "Blast Resistance"
        },
        {
          id: 15,
          skill: 6,
          level: 2,
          modifiers: {},
          description: "Greatly delays blastblight and greatly reduces blast damage.",
          skillName: "Blast Resistance"
        },
        {
          id: 16,
          skill: 6,
          level: 3,
          modifiers: {},
          description: "Prevents blastblight.",
          skillName: "Blast Resistance"
        }
      ]
    },
    {
      id: 7,
      name: "Bleeding Resistance",
      description: "Grants protection against bleeding.",
      ranks: [
        {
          id: 17,
          skill: 7,
          level: 1,
          modifiers: {},
          description: "Reduces damage while bleeding.",
          skillName: "Bleeding Resistance"
        },
        {
          id: 18,
          skill: 7,
          level: 2,
          modifiers: {},
          description: "Greatly reduces damage while bleeding.",
          skillName: "Bleeding Resistance"
        },
        {
          id: 19,
          skill: 7,
          level: 3,
          modifiers: {},
          description: "Prevents bleeding.",
          skillName: "Bleeding Resistance"
        }
      ]
    },
    {
      id: 8,
      name: "Iron Skin",
      description: "Grants protection against Defense Down.",
      ranks: [
        {
          id: 20,
          skill: 8,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of Defense Down by 50%.",
          skillName: "Iron Skin"
        },
        {
          id: 21,
          skill: 8,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of Defense Down by 75%.",
          skillName: "Iron Skin"
        },
        {
          id: 22,
          skill: 8,
          level: 3,
          modifiers: {},
          description: "Prevents Defense Down.",
          skillName: "Iron Skin"
        }
      ]
    },
    {
      id: 9,
      name: "Earplugs",
      description: "Grants protection from large monsters' roars.",
      ranks: [
        {
          id: 23,
          skill: 9,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skillName: "Earplugs"
        },
        {
          id: 24,
          skill: 9,
          level: 2,
          modifiers: {},
          description: "Reduces the effects of weak monster roars.",
          skillName: "Earplugs"
        },
        {
          id: 25,
          skill: 9,
          level: 3,
          modifiers: {},
          description: "Nullifies weak monster roars.",
          skillName: "Earplugs"
        },
        {
          id: 410,
          skill: 9,
          level: 4,
          modifiers: {},
          description: "Nullifies weak monster roars and reduces the effects of strong monster roars.",
          skillName: "Earplugs"
        },
        {
          id: 411,
          skill: 9,
          level: 5,
          modifiers: {},
          description: "Nullifies weak and strong monster roars.",
          skillName: "Earplugs"
        }
      ]
    },
    {
      id: 10,
      name: "Windproof",
      description: "Grants protection against wind pressure.",
      ranks: [
        {
          id: 28,
          skill: 10,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skillName: "Windproof"
        },
        {
          id: 29,
          skill: 10,
          level: 2,
          modifiers: {},
          description: "Reduces the effects of minor wind pressure.",
          skillName: "Windproof"
        },
        {
          id: 30,
          skill: 10,
          level: 3,
          modifiers: {},
          description: "Negates minor wind pressure.",
          skillName: "Windproof"
        },
        {
          id: 31,
          skill: 10,
          level: 4,
          modifiers: {},
          description: "Negates minor wind pressure and reduces the effects of major wind pressure.",
          skillName: "Windproof"
        },
        {
          id: 32,
          skill: 10,
          level: 5,
          modifiers: {},
          description: "Negates minor and major wind pressure.",
          skillName: "Windproof"
        }
      ]
    },
    {
      id: 11,
      name: "Tremor Resistance",
      description: "Grants protection against ground tremors.",
      ranks: [
        {
          id: 33,
          skill: 11,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skillName: "Tremor Resistance"
        },
        {
          id: 34,
          skill: 11,
          level: 2,
          modifiers: {},
          description: "Nullifies minor ground tremors and reduces the effects of major ground tremors.",
          skillName: "Tremor Resistance"
        },
        {
          id: 35,
          skill: 11,
          level: 3,
          modifiers: {},
          description: "Nullifies minor and major ground tremors.",
          skillName: "Tremor Resistance"
        }
      ]
    },
    {
      id: 12,
      name: "Dungmaster",
      description: "Makes monsters hit with slinger dung pods more likely to run.",
      ranks: [
        {
          id: 36,
          skill: 12,
          level: 1,
          modifiers: {},
          description: "Makes slinger dung pods more effective at making monsters run away.",
          skillName: "Dungmaster"
        }
      ]
    },
    {
      id: 13,
      name: "Effluvial Expert",
      description: "Nullifies or reduces environmental damage in the Rotten Vale.",
      ranks: [
        {
          id: 37,
          skill: 13,
          level: 1,
          modifiers: {},
          description: "Nullifies damage from effluvia and reduces damage from acids.",
          skillName: "Effluvial Expert"
        }
      ]
    },
    {
      id: 14,
      name: "Heat Guard",
      description: "Nullifies damage from heat.",
      ranks: [
        {
          id: 38,
          skill: 14,
          level: 1,
          modifiers: {},
          description: "Nullfies heat damage.",
          skillName: "Heat Guard"
        }
      ]
    },
    {
      id: 15,
      name: "Attack Boost",
      description: "Increases attack power. Also improves affinity at higher levels.",
      ranks: [
        {
          id: 39,
          skill: 15,
          level: 1,
          modifiers: {
            attack: 3
          },
          description: "Attack +3",
          skillName: "Attack Boost"
        },
        {
          id: 40,
          skill: 15,
          level: 2,
          modifiers: {
            attack: 6
          },
          description: "Attack +6",
          skillName: "Attack Boost"
        },
        {
          id: 41,
          skill: 15,
          level: 3,
          modifiers: {
            attack: 9
          },
          description: "Attack +9",
          skillName: "Attack Boost"
        },
        {
          id: 42,
          skill: 15,
          level: 4,
          modifiers: {
            attack: 12,
            affinity: 5
          },
          description: "Attack +12 Affinity +5%",
          skillName: "Attack Boost"
        },
        {
          id: 43,
          skill: 15,
          level: 5,
          modifiers: {
            attack: 15,
            affinity: 5
          },
          description: "Attack +15 Affinity +5%",
          skillName: "Attack Boost"
        },
        {
          id: 44,
          skill: 15,
          level: 6,
          modifiers: {
            attack: 18,
            affinity: 5
          },
          description: "Attack +18 Affinity +5%",
          skillName: "Attack Boost"
        },
        {
          id: 45,
          skill: 15,
          level: 7,
          modifiers: {
            attack: 21,
            affinity: 5
          },
          description: "Attack +21 Affinity +5%",
          skillName: "Attack Boost"
        }
      ]
    },
    {
      id: 16,
      name: "Defense Boost",
      description: "Increases defense. Level up to improve resistances as well.",
      ranks: [
        {
          id: 46,
          skill: 16,
          level: 1,
          modifiers: {
            defense: 5
          },
          description: "Defense +5",
          skillName: "Defense Boost"
        },
        {
          id: 47,
          skill: 16,
          level: 2,
          modifiers: {
            defense: 10
          },
          description: "Defense +10",
          skillName: "Defense Boost"
        },
        {
          id: 48,
          skill: 16,
          level: 3,
          modifiers: {
            defense: 10
          },
          description: "Defense +5%\nBonus: +10",
          skillName: "Defense Boost"
        },
        {
          id: 49,
          skill: 16,
          level: 4,
          modifiers: {
            defense: 20,
            resistAll: 3
          },
          description: "Defense +5%\nBonus: +20\nAll Elemental Resistances +3",
          skillName: "Defense Boost"
        },
        {
          id: 50,
          skill: 16,
          level: 5,
          modifiers: {
            defense: 20,
            resistAll: 3
          },
          description: "Defense +8%\nBonus: +20\nAll Elemental Resistances +3",
          skillName: "Defense Boost"
        },
        {
          id: 51,
          skill: 16,
          level: 6,
          modifiers: {
            defense: 35,
            resistAll: 5
          },
          description: "Defense +8%\nBonus: +35\nAll Elemental Resistances +5",
          skillName: "Defense Boost"
        },
        {
          id: 52,
          skill: 16,
          level: 7,
          modifiers: {
            defense: 35,
            resistAll: 5
          },
          description: "Defense +10%\nBonus: +35\nAll Elemental Resistances +5",
          skillName: "Defense Boost"
        }
      ]
    },
    {
      id: 17,
      name: "Health Boost",
      description: "Increases health.",
      ranks: [
        {
          id: 53,
          skill: 17,
          level: 1,
          modifiers: {
            health: 15
          },
          description: "Health +15",
          skillName: "Health Boost"
        },
        {
          id: 54,
          skill: 17,
          level: 2,
          modifiers: {
            health: 30
          },
          description: "Health +30",
          skillName: "Health Boost"
        },
        {
          id: 55,
          skill: 17,
          level: 3,
          modifiers: {
            health: 50
          },
          description: "Health +50",
          skillName: "Health Boost"
        }
      ]
    },
    {
      id: 18,
      name: "Recovery Up",
      description: "Increases the amount recovered when restoring health.",
      ranks: [
        {
          id: 56,
          skill: 18,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skillName: "Recovery Up"
        },
        {
          id: 57,
          skill: 18,
          level: 2,
          modifiers: {},
          description: "Recovery +20%",
          skillName: "Recovery Up"
        },
        {
          id: 58,
          skill: 18,
          level: 3,
          modifiers: {},
          description: "Recovery +30%",
          skillName: "Recovery Up"
        }
      ]
    },
    {
      id: 19,
      name: "Recovery Speed",
      description: "Speeds healing of recoverable damage (the red portion of the health gauge).",
      ranks: [
        {
          id: 59,
          skill: 19,
          level: 1,
          modifiers: {},
          description: "Doubles the speed at which you heal recoverable damage.",
          skillName: "Recovery Speed"
        },
        {
          id: 60,
          skill: 19,
          level: 2,
          modifiers: {},
          description: "Triples the speed at which you heal recoverable damage.",
          skillName: "Recovery Speed"
        },
        {
          id: 61,
          skill: 19,
          level: 3,
          modifiers: {},
          description: "Quadruples the speed at which you heal recoverable damage.",
          skillName: "Recovery Speed"
        }
      ]
    },
    {
      id: 20,
      name: "Fire Resistance",
      description: "Increases fire resistance. Also improves defense at higher levels.",
      ranks: [
        {
          id: 62,
          skill: 20,
          level: 1,
          modifiers: {
            resistFire: 6
          },
          description: "Fire resistance +6",
          skillName: "Fire Resistance"
        },
        {
          id: 63,
          skill: 20,
          level: 2,
          modifiers: {
            resistFire: 12
          },
          description: "Fire resistance +12",
          skillName: "Fire Resistance"
        },
        {
          id: 64,
          skill: 20,
          level: 3,
          modifiers: {
            defense: 10,
            resistFire: 20
          },
          description: "Fire resistance +20 Defense +10",
          skillName: "Fire Resistance"
        }
      ]
    },
    {
      id: 21,
      name: "Water Resistance",
      description: "Increases water resistance. Also improves defense at higher levels.",
      ranks: [
        {
          id: 65,
          skill: 21,
          level: 1,
          modifiers: {
            resistWater: 6
          },
          description: "Water resistance +6",
          skillName: "Water Resistance"
        },
        {
          id: 66,
          skill: 21,
          level: 2,
          modifiers: {
            resistWater: 12
          },
          description: "Water resistance +12",
          skillName: "Water Resistance"
        },
        {
          id: 67,
          skill: 21,
          level: 3,
          modifiers: {
            defense: 10,
            resistWater: 20
          },
          description: "Water resistance +20 Defense +10",
          skillName: "Water Resistance"
        }
      ]
    },
    {
      id: 22,
      name: "Ice Resistance",
      description: "Increases ice resistance. Also improves defense at higher levels.",
      ranks: [
        {
          id: 68,
          skill: 22,
          level: 1,
          modifiers: {
            resistIce: 6
          },
          description: "Ice resistance +6",
          skillName: "Ice Resistance"
        },
        {
          id: 69,
          skill: 22,
          level: 2,
          modifiers: {
            resistIce: 12
          },
          description: "Ice resistance +12",
          skillName: "Ice Resistance"
        },
        {
          id: 70,
          skill: 22,
          level: 3,
          modifiers: {
            defense: 10,
            resistIce: 20
          },
          description: "Ice resistance +20 Defense +10",
          skillName: "Ice Resistance"
        }
      ]
    },
    {
      id: 23,
      name: "Thunder Resistance",
      description: "Increases thunder resistance. Also improves defense at higher levels.",
      ranks: [
        {
          id: 71,
          skill: 23,
          level: 1,
          modifiers: {
            resistThunder: 6
          },
          description: "Thunder resistance +6",
          skillName: "Thunder Resistance"
        },
        {
          id: 72,
          skill: 23,
          level: 2,
          modifiers: {
            resistThunder: 12
          },
          description: "Thunder resistance +12",
          skillName: "Thunder Resistance"
        },
        {
          id: 73,
          skill: 23,
          level: 3,
          modifiers: {
            defense: 10,
            resistThunder: 20
          },
          description: "Thunder resistance +20 Defense +10",
          skillName: "Thunder Resistance"
        }
      ]
    },
    {
      id: 24,
      name: "Dragon Resistance",
      description: "Increases dragon resistance. Also improves defense at higher levels.",
      ranks: [
        {
          id: 74,
          skill: 24,
          level: 1,
          modifiers: {
            resistDragon: 6
          },
          description: "Dragon resistance +6",
          skillName: "Dragon Resistance"
        },
        {
          id: 75,
          skill: 24,
          level: 2,
          modifiers: {
            resistDragon: 12
          },
          description: "Dragon resistance +12",
          skillName: "Dragon Resistance"
        },
        {
          id: 76,
          skill: 24,
          level: 3,
          modifiers: {
            defense: 10,
            resistDragon: 20
          },
          description: "Dragon resistance +20 Defense +10",
          skillName: "Dragon Resistance"
        }
      ]
    },
    {
      id: 25,
      name: "Blight Resistance",
      description: "Grants protection against all elemental blights.",
      ranks: [
        {
          id: 77,
          skill: 25,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skillName: "Blight Resistance"
        },
        {
          id: 78,
          skill: 25,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 75%.",
          skillName: "Blight Resistance"
        },
        {
          id: 79,
          skill: 25,
          level: 3,
          modifiers: {},
          description: "Nullifies all elemental blights.",
          skillName: "Blight Resistance"
        }
      ]
    },
    {
      id: 26,
      name: "Fire Attack",
      description: "Increases fire element attack power. (Elemental attack power has a maximum limit.)",
      ranks: [
        {
          id: 80,
          skill: 26,
          level: 1,
          modifiers: {
            damageFire: 30
          },
          description: "Fire attack +30",
          skillName: "Fire Attack"
        },
        {
          id: 81,
          skill: 26,
          level: 2,
          modifiers: {
            damageFire: 60
          },
          description: "Fire attack +60",
          skillName: "Fire Attack"
        },
        {
          id: 82,
          skill: 26,
          level: 3,
          modifiers: {
            damageFire: 100
          },
          description: "Fire attack +100",
          skillName: "Fire Attack"
        },
        {
          id: 83,
          skill: 26,
          level: 4,
          modifiers: {
            damageFire: "100+5%"
          },
          description: "Fire attack +5% Bonus: +100",
          skillName: "Fire Attack"
        },
        {
          id: 84,
          skill: 26,
          level: 5,
          modifiers: {
            damageFire: "100+10%"
          },
          description: "Fire attack +10% Bonus: +100",
          skillName: "Fire Attack"
        },
        {
          id: 375,
          skill: 26,
          level: 6,
          modifiers: {
            damageFire: "100+20%"
          },
          description: "Fire attack +20% Bonus: +100",
          skillName: "Fire Attack"
        }
      ]
    },
    {
      id: 27,
      name: "Water Attack",
      description: "Increases water element attack power. (Elemental attack power has a maximum limit.)",
      ranks: [
        {
          id: 85,
          skill: 27,
          level: 1,
          modifiers: {
            damageWater: 30
          },
          description: "Water attack +30",
          skillName: "Water Attack"
        },
        {
          id: 86,
          skill: 27,
          level: 2,
          modifiers: {
            damageWater: 60
          },
          description: "Water attack +60",
          skillName: "Water Attack"
        },
        {
          id: 87,
          skill: 27,
          level: 3,
          modifiers: {
            damageWater: 100
          },
          description: "Water attack +100",
          skillName: "Water Attack"
        },
        {
          id: 88,
          skill: 27,
          level: 4,
          modifiers: {
            damageWater: "100+5%"
          },
          description: "Water attack +5% Bonus: +100",
          skillName: "Water Attack"
        },
        {
          id: 89,
          skill: 27,
          level: 5,
          modifiers: {
            damageWater: "100+10%"
          },
          description: "Water attack +10% Bonus: +100",
          skillName: "Water Attack"
        },
        {
          id: 390,
          skill: 27,
          level: 6,
          modifiers: {
            damageWater: "100+20%"
          },
          description: "Water attack +20% Bonus: +100",
          skillName: "Water Attack"
        }
      ]
    },
    {
      id: 28,
      name: "Ice Attack",
      description: "Increases ice element attack power. (Elemental attack power has as maximum limit.)",
      ranks: [
        {
          id: 90,
          skill: 28,
          level: 1,
          modifiers: {
            damageIce: 30
          },
          description: "Ice attack +30",
          skillName: "Ice Attack"
        },
        {
          id: 91,
          skill: 28,
          level: 2,
          modifiers: {
            damageIce: 60
          },
          description: "Ice attack +60",
          skillName: "Ice Attack"
        },
        {
          id: 92,
          skill: 28,
          level: 3,
          modifiers: {
            damageIce: 100
          },
          description: "Ice attack +100",
          skillName: "Ice Attack"
        },
        {
          id: 93,
          skill: 28,
          level: 4,
          modifiers: {
            damageIce: "100+5%"
          },
          description: "Ice attack +5% Bonus: +100",
          skillName: "Ice Attack"
        },
        {
          id: 94,
          skill: 28,
          level: 5,
          modifiers: {
            damageIce: "100+10%"
          },
          description: "Ice attack +10% Bonus: +100",
          skillName: "Ice Attack"
        },
        {
          id: 378,
          skill: 28,
          level: 6,
          modifiers: {
            damageIce: "100+20%"
          },
          description: "Ice attack +20% Bonus: +100",
          skillName: "Ice Attack"
        }
      ]
    },
    {
      id: 29,
      name: "Thunder Attack",
      description: "Increases thunder element attack power. (Elemental attack power has a maximum limit.)",
      ranks: [
        {
          id: 95,
          skill: 29,
          level: 1,
          modifiers: {
            damageThunder: 30
          },
          description: "Thunder attack +30",
          skillName: "Thunder Attack"
        },
        {
          id: 96,
          skill: 29,
          level: 2,
          modifiers: {
            damageThunder: 60
          },
          description: "Thunder attack +60",
          skillName: "Thunder Attack"
        },
        {
          id: 97,
          skill: 29,
          level: 3,
          modifiers: {
            damageThunder: 100
          },
          description: "Thunder attack +100",
          skillName: "Thunder Attack"
        },
        {
          id: 98,
          skill: 29,
          level: 4,
          modifiers: {
            damageThunder: "100+5%"
          },
          description: "Thunder attack +5% Bonus: +100",
          skillName: "Thunder Attack"
        },
        {
          id: 99,
          skill: 29,
          level: 5,
          modifiers: {
            damageThunder: "100+10%"
          },
          description: "Thunder attack +10% Bonus: +100",
          skillName: "Thunder Attack"
        },
        {
          id: 387,
          skill: 29,
          level: 6,
          modifiers: {
            damageThunder: "100+20%"
          },
          description: "Thunder attack +20% Bonus: +100",
          skillName: "Thunder Attack"
        }
      ]
    },
    {
      id: 30,
      name: "Dragon Attack",
      description: "Increases dragon element attack power. (Elemental attack power has a maximum limit.)",
      ranks: [
        {
          id: 100,
          skill: 30,
          level: 1,
          modifiers: {
            damageDragon: 30
          },
          description: "Dragon attack +30",
          skillName: "Dragon Attack"
        },
        {
          id: 101,
          skill: 30,
          level: 2,
          modifiers: {
            damageDragon: 60
          },
          description: "Dragon attack +60",
          skillName: "Dragon Attack"
        },
        {
          id: 102,
          skill: 30,
          level: 3,
          modifiers: {
            damageDragon: 100
          },
          description: "Dragon attack +100",
          skillName: "Dragon Attack"
        },
        {
          id: 103,
          skill: 30,
          level: 4,
          modifiers: {
            damageDragon: "100+5%"
          },
          description: "Dragon attack +5% Bonus: +100",
          skillName: "Dragon Attack"
        },
        {
          id: 104,
          skill: 30,
          level: 5,
          modifiers: {
            damageDragon: "100+10%"
          },
          description: "Dragon attack +10% Bonus: +100",
          skillName: "Dragon Attack"
        },
        {
          id: 374,
          skill: 30,
          level: 6,
          modifiers: {
            damageDragon: "100+20%"
          },
          description: "Dragon attack +20% Bonus: +100",
          skillName: "Dragon Attack"
        }
      ]
    },
    {
      id: 31,
      name: "Poison Attack",
      description: "Increases the rate of poison buildup. (Elemental buildup has a maximum limit.)",
      ranks: [
        {
          id: 105,
          skill: 31,
          level: 1,
          modifiers: {},
          description: "Poison buildup +5% Bonus: +10",
          skillName: "Poison Attack"
        },
        {
          id: 106,
          skill: 31,
          level: 2,
          modifiers: {},
          description: "Poison buildup +10% Bonus: +10",
          skillName: "Poison Attack"
        },
        {
          id: 107,
          skill: 31,
          level: 3,
          modifiers: {},
          description: "Poison buildup +20% Bonus: +10",
          skillName: "Poison Attack"
        },
        {
          id: 381,
          skill: 31,
          level: 4,
          modifiers: {},
          description: "Poison buildup +30% Bonus: +10",
          skillName: "Poison Attack"
        }
      ]
    },
    {
      id: 32,
      name: "Paralysis Attack",
      description: "Increases the rate of paralysis buildup. (Elemental buildup has a maximum limit.)",
      ranks: [
        {
          id: 108,
          skill: 32,
          level: 1,
          modifiers: {},
          description: "Paralysis buildup +5% Bonus: +10",
          skillName: "Paralysis Attack"
        },
        {
          id: 109,
          skill: 32,
          level: 2,
          modifiers: {},
          description: "Paralysis buildup +10% Bonus: +10",
          skillName: "Paralysis Attack"
        },
        {
          id: 110,
          skill: 32,
          level: 3,
          modifiers: {},
          description: "Paralysis buildup +20% Bonus: +10",
          skillName: "Paralysis Attack"
        },
        {
          id: 379,
          skill: 32,
          level: 4,
          modifiers: {},
          description: "Paralysis buildup +30% Bonus: +10",
          skillName: "Paralysis Attack"
        }
      ]
    },
    {
      id: 33,
      name: "Sleep Attack",
      description: "Increases the rate of sleep buildup. (Elemental buildup has maximum limit.)",
      ranks: [
        {
          id: 111,
          skill: 33,
          level: 1,
          modifiers: {},
          description: "Sleep buildup +5% Bonus: +10",
          skillName: "Sleep Attack"
        },
        {
          id: 112,
          skill: 33,
          level: 2,
          modifiers: {},
          description: "Sleep buildup +10% Bonus: +10",
          skillName: "Sleep Attack"
        },
        {
          id: 113,
          skill: 33,
          level: 3,
          modifiers: {},
          description: "Sleep buildup +20% Bonus: +10",
          skillName: "Sleep Attack"
        },
        {
          id: 382,
          skill: 33,
          level: 4,
          modifiers: {},
          description: "Sleep buildup +30% Bonus: +10",
          skillName: "Sleep Attack"
        }
      ]
    },
    {
      id: 34,
      name: "Blast Attack",
      description: "Increases the rate of the blast buildup. (Elemental buildup has a maximum limit.)",
      ranks: [
        {
          id: 114,
          skill: 34,
          level: 1,
          modifiers: {},
          description: "Blast buildup +5% Bonus: +10",
          skillName: "Blast Attack"
        },
        {
          id: 115,
          skill: 34,
          level: 2,
          modifiers: {},
          description: "Blast buildup +10% Bonus: +10",
          skillName: "Blast Attack"
        },
        {
          id: 116,
          skill: 34,
          level: 3,
          modifiers: {},
          description: "Blast buildup +20% Bonus: +10",
          skillName: "Blast Attack"
        },
        {
          id: 371,
          skill: 34,
          level: 4,
          modifiers: {},
          description: "Blast buildup +30% Bonus: +10",
          skillName: "Blast Attack"
        }
      ]
    },
    {
      id: 35,
      name: "Normal Shots",
      description: "Increases the attack power of normal ammo and normal arrows.",
      ranks: [
        {
          id: 117,
          skill: 35,
          level: 1,
          modifiers: {},
          description: "Increases the power of normal ammo and normal arrows.",
          skillName: "Normal Shots"
        },
        {
          id: 352,
          skill: 35,
          level: 2,
          modifiers: {},
          description: "Greatly increases the power of normal ammo and normal arrows.",
          skillName: "Normal Shots"
        }
      ]
    },
    {
      id: 36,
      name: "Piercing Shots",
      description: "Increases the attack power of piercing ammo and Dragon Piercer.",
      ranks: [
        {
          id: 118,
          skill: 36,
          level: 1,
          modifiers: {},
          description: "Increases the power of piercing ammo and Dragon Piercer.",
          skillName: "Piercing Shots"
        },
        {
          id: 380,
          skill: 36,
          level: 2,
          modifiers: {},
          description: "Greatly increases the power of piercing ammo and Dragon Piercer.",
          skillName: "Piercing Shots"
        }
      ]
    },
    {
      id: 37,
      name: "Spread/Power Shots",
      description: "Increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
      ranks: [
        {
          id: 119,
          skill: 37,
          level: 1,
          modifiers: {},
          description: "Increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
          skillName: "Spread/Power Shots"
        },
        {
          id: 348,
          skill: 37,
          level: 2,
          modifiers: {},
          description: "Greatly increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
          skillName: "Spread/Power Shots"
        }
      ]
    },
    {
      id: 38,
      name: "Free Elem/Ammo Up",
      description: "Unlocks your weapon's hidden element. Also increases bowgun loading capacity. (There is a cap to loading capacity.)",
      ranks: [
        {
          id: 120,
          skill: 38,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 121,
          skill: 38,
          level: 2,
          modifiers: {},
          description: "Draws out 66% of hidden element and expands clip size for some ammo.",
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 122,
          skill: 38,
          level: 3,
          modifiers: {},
          description: "Draws out 100% of hidden element and expands clip size for some ammo.",
          skillName: "Free Elem/Ammo Up"
        }
      ]
    },
    {
      id: 39,
      name: "Critical Eye",
      description: "Increases affinity.",
      ranks: [
        {
          id: 123,
          skill: 39,
          level: 1,
          modifiers: {
            affinity: 5
          },
          description: "Affinity +5%",
          skillName: "Critical Eye"
        },
        {
          id: 124,
          skill: 39,
          level: 2,
          modifiers: {
            affinity: 10
          },
          description: "Affinity +10%",
          skillName: "Critical Eye"
        },
        {
          id: 125,
          skill: 39,
          level: 3,
          modifiers: {
            affinity: 15
          },
          description: "Affinity +15%",
          skillName: "Critical Eye"
        },
        {
          id: 126,
          skill: 39,
          level: 4,
          modifiers: {
            affinity: 20
          },
          description: "Affinity +20%",
          skillName: "Critical Eye"
        },
        {
          id: 127,
          skill: 39,
          level: 5,
          modifiers: {
            affinity: 25
          },
          description: "Affinity +25%",
          skillName: "Critical Eye"
        },
        {
          id: 128,
          skill: 39,
          level: 6,
          modifiers: {
            affinity: 30
          },
          description: "Affinity +30%",
          skillName: "Critical Eye"
        },
        {
          id: 129,
          skill: 39,
          level: 7,
          modifiers: {
            affinity: 40
          },
          description: "Affinity +40%",
          skillName: "Critical Eye"
        }
      ]
    },
    {
      id: 40,
      name: "Critical Boost",
      description: "Increases the damage of critical hits.",
      ranks: [
        {
          id: 130,
          skill: 40,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skillName: "Critical Boost"
        },
        {
          id: 131,
          skill: 40,
          level: 2,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 35%.",
          skillName: "Critical Boost"
        },
        {
          id: 132,
          skill: 40,
          level: 3,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 40%.",
          skillName: "Critical Boost"
        }
      ]
    },
    {
      id: 41,
      name: "Weakness Exploit",
      description: "Increases the affinity of attacks that exploit a monster weak spot.",
      ranks: [
        {
          id: 133,
          skill: 41,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skillName: "Weakness Exploit"
        },
        {
          id: 134,
          skill: 41,
          level: 2,
          modifiers: {},
          description: "Attacks that hit weak spots have 15% increased affinity, with an extra 15% on wounded parts.",
          skillName: "Weakness Exploit"
        },
        {
          id: 135,
          skill: 41,
          level: 3,
          modifiers: {},
          description: "Attacks that hit weak spots have 30% increased affinity, with an extra 20% on wounded parts.",
          skillName: "Weakness Exploit"
        }
      ]
    },
    {
      id: 42,
      name: "Focus",
      description: "Increases the fill rate for weapons with gauges and the charge rate for weapons with charge attacks.",
      ranks: [
        {
          id: 136,
          skill: 42,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skillName: "Focus"
        },
        {
          id: 137,
          skill: 42,
          level: 2,
          modifiers: {},
          description: "Increases gauge fill rate by 10% and reduces charge times by 10%.",
          skillName: "Focus"
        },
        {
          id: 138,
          skill: 42,
          level: 3,
          modifiers: {},
          description: "Increases gauge fill rate by 20% and reduces charge times by 15%.",
          skillName: "Focus"
        }
      ]
    },
    {
      id: 43,
      name: "Power Prolonger",
      description: "Allows long swords, dual blades, insect glaives, switch axes, and charge blades to stay powered up longer.",
      ranks: [
        {
          id: 139,
          skill: 43,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skillName: "Power Prolonger"
        },
        {
          id: 140,
          skill: 43,
          level: 2,
          modifiers: {},
          description: "Bonus duration +20%",
          skillName: "Power Prolonger"
        },
        {
          id: 141,
          skill: 43,
          level: 3,
          modifiers: {},
          description: "Bonus duration +30%",
          skillName: "Power Prolonger"
        }
      ]
    },
    {
      id: 44,
      name: "Handicraft",
      description: "Extends the weapon sharpness gauage. However, it will not increase the gauge past its maximum.",
      ranks: [
        {
          id: 142,
          skill: 44,
          level: 1,
          modifiers: {
            sharpnessBonus: 10
          },
          description: "Weapon sharpness +10",
          skillName: "Handicraft"
        },
        {
          id: 143,
          skill: 44,
          level: 2,
          modifiers: {
            sharpnessBonus: 20
          },
          description: "Weapon sharpness +20",
          skillName: "Handicraft"
        },
        {
          id: 144,
          skill: 44,
          level: 3,
          modifiers: {
            sharpnessBonus: 30
          },
          description: "Weapon sharpness +30",
          skillName: "Handicraft"
        },
        {
          id: 145,
          skill: 44,
          level: 4,
          modifiers: {
            sharpnessBonus: 40
          },
          description: "Weapon sharpness +40",
          skillName: "Handicraft"
        },
        {
          id: 146,
          skill: 44,
          level: 5,
          modifiers: {
            sharpnessBonus: 50
          },
          description: "Weapon sharpness +50",
          skillName: "Handicraft"
        }
      ]
    },
    {
      id: 45,
      name: "Critical Draw",
      description: "Increases affinity when performing draw attacks.",
      ranks: [
        {
          id: 147,
          skill: 45,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skillName: "Critical Draw"
        },
        {
          id: 148,
          skill: 45,
          level: 2,
          modifiers: {},
          description: "Draw attack affinity +60%",
          skillName: "Critical Draw"
        },
        {
          id: 149,
          skill: 45,
          level: 3,
          modifiers: {},
          description: "Draw attack affinity +100%",
          skillName: "Critical Draw"
        }
      ]
    },
    {
      id: 46,
      name: "Partbreaker",
      description: "Makes it easier to break or sever parts of large monsters.",
      ranks: [
        {
          id: 150,
          skill: 46,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skillName: "Partbreaker"
        },
        {
          id: 151,
          skill: 46,
          level: 2,
          modifiers: {},
          description: "Part damage +20%",
          skillName: "Partbreaker"
        },
        {
          id: 152,
          skill: 46,
          level: 3,
          modifiers: {},
          description: "Part damage +30%",
          skillName: "Partbreaker"
        }
      ]
    },
    {
      id: 47,
      name: "Slugger",
      description: "Makes it easier to stun monsters.",
      ranks: [
        {
          id: 153,
          skill: 47,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skillName: "Slugger"
        },
        {
          id: 154,
          skill: 47,
          level: 2,
          modifiers: {},
          description: "Stun power +30%",
          skillName: "Slugger"
        },
        {
          id: 155,
          skill: 47,
          level: 3,
          modifiers: {},
          description: "Stun power +40%",
          skillName: "Slugger"
        },
        {
          id: 383,
          skill: 47,
          level: 4,
          modifiers: {},
          description: "Stun power +50%",
          skillName: "Slugger"
        },
        {
          id: 384,
          skill: 47,
          level: 5,
          modifiers: {},
          description: "Stun power +60%",
          skillName: "Slugger"
        }
      ]
    },
    {
      id: 48,
      name: "Stamina Thief",
      description: "Increases certain attacks' ability to exhaust monsters.",
      ranks: [
        {
          id: 156,
          skill: 48,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skillName: "Stamina Thief"
        },
        {
          id: 157,
          skill: 48,
          level: 2,
          modifiers: {},
          description: "Exhaust power +30%",
          skillName: "Stamina Thief"
        },
        {
          id: 158,
          skill: 48,
          level: 3,
          modifiers: {},
          description: "Exhaust power +40%",
          skillName: "Stamina Thief"
        },
        {
          id: 385,
          skill: 48,
          level: 4,
          modifiers: {},
          description: "Exhaust power +50%",
          skillName: "Stamina Thief"
        },
        {
          id: 386,
          skill: 48,
          level: 5,
          modifiers: {},
          description: "Exhaust power +60%",
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 49,
      name: "Master Mounter",
      description: "Makes it easier to mount monsters.",
      ranks: [
        {
          id: 159,
          skill: 49,
          level: 1,
          modifiers: {},
          description: "Makes it easier to mount monsters and down mounted monsters.",
          skillName: "Master Mounter"
        }
      ]
    },
    {
      id: 50,
      name: "Airborne",
      description: "Increases the damage caused by jumping attacks.",
      ranks: [
        {
          id: 160,
          skill: 50,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 51,
      name: "Latent Power",
      description: "Temporarily increases affinity and reduces stamina depletion when certain conditions are met.",
      ranks: [
        {
          id: 161,
          skill: 51,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skillName: "Latent Power"
        },
        {
          id: 162,
          skill: 51,
          level: 2,
          modifiers: {},
          description: "While active, increases affinity by 20% and reduces stamina depletion by 30%.",
          skillName: "Latent Power"
        },
        {
          id: 163,
          skill: 51,
          level: 3,
          modifiers: {},
          description: "While active, increases affinity by 30% and reduces stamina depletion by 50%.",
          skillName: "Latent Power"
        },
        {
          id: 164,
          skill: 51,
          level: 4,
          modifiers: {},
          description: "While active, increases affinity by 40% and reduces stamina depletion by 50%.",
          skillName: "Latent Power"
        },
        {
          id: 165,
          skill: 51,
          level: 5,
          modifiers: {},
          description: "While active, increases affinity by 50% and reduces stamina depletion by 50%.",
          skillName: "Latent Power"
        },
        {
          id: 350,
          skill: 51,
          level: 6,
          modifiers: {},
          description: "While active, increases affinity by 50% and reduces stamina depletion by 50%. Triggers easier.",
          skillName: "Latent Power"
        },
        {
          id: 351,
          skill: 51,
          level: 7,
          modifiers: {},
          description: "While active, increases affinity by 60% and reduces stamina depletion by 50%. Triggers easier.",
          skillName: "Latent Power"
        }
      ]
    },
    {
      id: 52,
      name: "Agitator",
      description: "Increases attack power and affinity when large monsters become enraged.",
      ranks: [
        {
          id: 166,
          skill: 52,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skillName: "Agitator"
        },
        {
          id: 167,
          skill: 52,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +8 and increases affinity by 5%.",
          skillName: "Agitator"
        },
        {
          id: 168,
          skill: 52,
          level: 3,
          modifiers: {},
          description: "While active, grants attack +12 and increases affinity by 7%.",
          skillName: "Agitator"
        },
        {
          id: 169,
          skill: 52,
          level: 4,
          modifiers: {},
          description: "While active, grants attack +16 and increases affinity by 7%.",
          skillName: "Agitator"
        },
        {
          id: 170,
          skill: 52,
          level: 5,
          modifiers: {},
          description: "While active, grants attack +20 and increases affinity by 10%.",
          skillName: "Agitator"
        },
        {
          id: 369,
          skill: 52,
          level: 6,
          modifiers: {},
          description: "While active, grants Attack +24 and increases Affinity by 15%",
          skillName: "Agitator"
        },
        {
          id: 370,
          skill: 52,
          level: 7,
          modifiers: {},
          description: "While active, grants Attack +28 and increases Affinity by 20%",
          skillName: "Agitator"
        }
      ]
    },
    {
      id: 53,
      name: "Peak Performance",
      description: "Increases attack when your health is full.",
      ranks: [
        {
          id: 171,
          skill: 53,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skillName: "Peak Performance"
        },
        {
          id: 172,
          skill: 53,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +10.",
          skillName: "Peak Performance"
        },
        {
          id: 173,
          skill: 53,
          level: 3,
          modifiers: {},
          description: "While active, grants attack +20.",
          skillName: "Peak Performance"
        }
      ]
    },
    {
      id: 54,
      name: "Heroics",
      description: "Increases attack power and defense when health drops to 35% or lower.",
      ranks: [
        {
          id: 174,
          skill: 54,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skillName: "Heroics"
        },
        {
          id: 175,
          skill: 54,
          level: 2,
          modifiers: {},
          description: "While active, increases attack power by 5% and increases defense by 50 points.",
          skillName: "Heroics"
        },
        {
          id: 176,
          skill: 54,
          level: 3,
          modifiers: {},
          description: "While active, increases attack power by 5% and increases defense by 100 points.",
          skillName: "Heroics"
        },
        {
          id: 177,
          skill: 54,
          level: 4,
          modifiers: {},
          description: "While active, increases attack power by 10% and increases defense by 100 points.",
          skillName: "Heroics"
        },
        {
          id: 178,
          skill: 54,
          level: 5,
          modifiers: {},
          description: "While active, increases attack power by 15% and increases defense by 100 points.",
          skillName: "Heroics"
        },
        {
          id: 418,
          skill: 54,
          level: 6,
          modifiers: {},
          description: "While active, increases attack power by 25% and increases defense by 150 points.",
          skillName: "Heroics"
        },
        {
          id: 419,
          skill: 54,
          level: 7,
          modifiers: {},
          description: "While active, increases attack power by 40% and increases defense by 150 points.",
          skillName: "Heroics"
        }
      ]
    },
    {
      id: 55,
      name: "Fortify",
      description: "Temporarily increases your attack and defense every time you faint up to 2 times.",
      ranks: [
        {
          id: 179,
          skill: 55,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 56,
      name: "Resentment",
      description: "Increases attack when you have recoverable damage (the red portion of your health gauge).",
      ranks: [
        {
          id: 180,
          skill: 56,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skillName: "Resentment"
        },
        {
          id: 181,
          skill: 56,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +10.",
          skillName: "Resentment"
        },
        {
          id: 182,
          skill: 56,
          level: 3,
          modifiers: {},
          description: "While active, grants attack +15.",
          skillName: "Resentment"
        },
        {
          id: 183,
          skill: 56,
          level: 4,
          modifiers: {},
          description: "While active, grants attack +20.",
          skillName: "Resentment"
        },
        {
          id: 184,
          skill: 56,
          level: 5,
          modifiers: {},
          description: "While active, grants attack +25.",
          skillName: "Resentment"
        }
      ]
    },
    {
      id: 57,
      name: "Resuscitate",
      description: "Improves evasion and reduces stamina depletion when afflicted with abnormal status effects.",
      ranks: [
        {
          id: 185,
          skill: 57,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 58,
      name: "Horn Maestro",
      description: "Increases the effect duration of hunting horn melodies.",
      ranks: [
        {
          id: 186,
          skill: 58,
          level: 1,
          modifiers: {},
          description: "Extends melody effect duration and increases health recovery.",
          skillName: "Horn Maestro"
        },
        {
          id: 337,
          skill: 58,
          level: 2,
          modifiers: {},
          description: "Greatly increases the effect duration of hunting horn melodies.",
          skillName: "Horn Maestro"
        }
      ]
    },
    {
      id: 59,
      name: "Capacity Boost",
      description: "Increases the gunlance's shell capacity and charge blade's phial capacity.",
      ranks: [
        {
          id: 187,
          skill: 59,
          level: 1,
          modifiers: {},
          description: "Loading capacity +1",
          skillName: "Capacity Boost"
        }
      ]
    },
    {
      id: 60,
      name: "Special Ammo Boost",
      description: "Increases the power of bowgun special ammo and Dragon Piercer.",
      ranks: [
        {
          id: 188,
          skill: 60,
          level: 1,
          modifiers: {},
          description: "Increases the power of bowgun special ammo and Dragon Piercer by 10%.",
          skillName: "Special Ammo Boost"
        },
        {
          id: 189,
          skill: 60,
          level: 2,
          modifiers: {},
          description: "Increases the power of bowgun special ammo and Dragon Piercer by 20%.",
          skillName: "Special Ammo Boost"
        }
      ]
    },
    {
      id: 61,
      name: "Artillery",
      description: "Strengthens explosive attacks like gunlance shells, Wyvern's Fire, charge blade phial attacks, and sticky ammo.",
      ranks: [
        {
          id: 190,
          skill: 61,
          level: 1,
          modifiers: {},
          description: "Increases power of each attack by 10% and reduces Wyvern's Fire cooldown by 15%.",
          skillName: "Artillery"
        },
        {
          id: 191,
          skill: 61,
          level: 2,
          modifiers: {},
          description: "Increases power of each attack by 20% and reduces Wyvern's Fire cooldown by 30%.",
          skillName: "Artillery"
        },
        {
          id: 192,
          skill: 61,
          level: 3,
          modifiers: {},
          description: "Increases power of each attack by 30% and reduces Wyvern's Fire cooldown by 50%.",
          skillName: "Artillery"
        },
        {
          id: 354,
          skill: 61,
          level: 4,
          modifiers: {},
          description: "Increases power of each attack by 40% and reduces Wyvern's Fire cooldown by 60%.",
          skillName: "Artillery"
        },
        {
          id: 355,
          skill: 61,
          level: 5,
          modifiers: {},
          description: "Increases power of each attack by 50% and reduces Wyvern's Fire cooldown by 70%.",
          skillName: "Artillery"
        }
      ]
    },
    {
      id: 62,
      name: "Heavy Artillery",
      description: "Increases the firepower of ballistae and cannons.",
      ranks: [
        {
          id: 193,
          skill: 62,
          level: 1,
          modifiers: {},
          description: "Firepower +50%",
          skillName: "Heavy Artillery"
        },
        {
          id: 194,
          skill: 62,
          level: 2,
          modifiers: {},
          description: "Firepower +100%",
          skillName: "Heavy Artillery"
        }
      ]
    },
    {
      id: 63,
      name: "Marathon Runner",
      description: "Slows down stamina depletion for actions which continuously drain stamina (such as dashing).",
      ranks: [
        {
          id: 195,
          skill: 63,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skillName: "Marathon Runner"
        },
        {
          id: 196,
          skill: 63,
          level: 2,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 30%.",
          skillName: "Marathon Runner"
        },
        {
          id: 197,
          skill: 63,
          level: 3,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 50%.",
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 64,
      name: "Constitution",
      description: "Reduces stamina depletion when performing stamina-draining moves such as evading, etc.",
      ranks: [
        {
          id: 198,
          skill: 64,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skillName: "Constitution"
        },
        {
          id: 199,
          skill: 64,
          level: 2,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 20%.",
          skillName: "Constitution"
        },
        {
          id: 200,
          skill: 64,
          level: 3,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 30%.",
          skillName: "Constitution"
        },
        {
          id: 201,
          skill: 64,
          level: 4,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 40%.",
          skillName: "Constitution"
        },
        {
          id: 202,
          skill: 64,
          level: 5,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 50%.",
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 65,
      name: "Leap of Faith",
      description: "Allows you to do a dive-evade when facing towards large monsters, and extends the dive-evade distance.",
      ranks: [
        {
          id: 203,
          skill: 65,
          level: 1,
          modifiers: {},
          description: "Enables Leap of Faith.",
          skillName: "Leap of Faith"
        }
      ]
    },
    {
      id: 66,
      name: "Stamina Surge",
      description: "Speeds up stamina recovery.",
      ranks: [
        {
          id: 204,
          skill: 66,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skillName: "Stamina Surge"
        },
        {
          id: 205,
          skill: 66,
          level: 2,
          modifiers: {},
          description: "Stamina recovery speed +20%",
          skillName: "Stamina Surge"
        },
        {
          id: 206,
          skill: 66,
          level: 3,
          modifiers: {},
          description: "Stamina recovery speed +30%",
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 67,
      name: "Hunger Resistance",
      description: "Reduces maximum stamina depletion over time. However, does not work against cold environments that reduce stamina.",
      ranks: [
        {
          id: 207,
          skill: 67,
          level: 1,
          modifiers: {},
          description: "Extends the time until your stamina cap decreases by 50%.",
          skillName: "Hunger Resistance"
        },
        {
          id: 208,
          skill: 67,
          level: 2,
          modifiers: {},
          description: "Extends the time until your stamina cap decreases by 100%.",
          skillName: "Hunger Resistance"
        },
        {
          id: 209,
          skill: 67,
          level: 3,
          modifiers: {},
          description: "Prevents your stamina cap from decreasing.",
          skillName: "Hunger Resistance"
        }
      ]
    },
    {
      id: 68,
      name: "Evade Window",
      description: "Extends the invulnerability period when evading.",
      ranks: [
        {
          id: 210,
          skill: 68,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skillName: "Evade Window"
        },
        {
          id: 211,
          skill: 68,
          level: 2,
          modifiers: {},
          description: "Slightly increases invulnerability window.",
          skillName: "Evade Window"
        },
        {
          id: 212,
          skill: 68,
          level: 3,
          modifiers: {},
          description: "Increases invulnerability window.",
          skillName: "Evade Window"
        },
        {
          id: 213,
          skill: 68,
          level: 4,
          modifiers: {},
          description: "Greatly increases invulnerability window.",
          skillName: "Evade Window"
        },
        {
          id: 214,
          skill: 68,
          level: 5,
          modifiers: {},
          description: "Massively increases invulnerability window.",
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 69,
      name: "Evade Extender",
      description: "Increases evade distance.",
      ranks: [
        {
          id: 215,
          skill: 69,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skillName: "Evade Extender"
        },
        {
          id: 216,
          skill: 69,
          level: 2,
          modifiers: {},
          description: "Extends evasion distance.",
          skillName: "Evade Extender"
        },
        {
          id: 217,
          skill: 69,
          level: 3,
          modifiers: {},
          description: "Greatly extends evasion distance.",
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 70,
      name: "Guard",
      description: "Reduces knockbacks and stamina depletion when guarding.",
      ranks: [
        {
          id: 218,
          skill: 70,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skillName: "Guard"
        },
        {
          id: 219,
          skill: 70,
          level: 2,
          modifiers: {},
          description: "Slightly decreases the impact of attacks and reduces stamina depletion by 15%.",
          skillName: "Guard"
        },
        {
          id: 220,
          skill: 70,
          level: 3,
          modifiers: {},
          description: "Greatly decreases the impact of attacks and redcues stamina depletion by 15%.",
          skillName: "Guard"
        },
        {
          id: 221,
          skill: 70,
          level: 4,
          modifiers: {},
          description: "Greatly decreases the impact of attacks and redcues stamina depletion by 30%.",
          skillName: "Guard"
        },
        {
          id: 222,
          skill: 70,
          level: 5,
          modifiers: {},
          description: "Greatly decreases the impact of attacks and redcues stamina depletion by 50%.",
          skillName: "Guard"
        }
      ]
    },
    {
      id: 71,
      name: "Quick Sheath",
      description: "Speeds up weapon sheathing.",
      ranks: [
        {
          id: 223,
          skill: 71,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skillName: "Quick Sheath"
        },
        {
          id: 224,
          skill: 71,
          level: 2,
          modifiers: {},
          description: "Moderately increases sheathing speed.",
          skillName: "Quick Sheath"
        },
        {
          id: 225,
          skill: 71,
          level: 3,
          modifiers: {},
          description: "Greatly increases sheathing speed.",
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 72,
      name: "Wide-Range",
      description: "Allows the effects of certain items to also affect nearby allies.",
      ranks: [
        {
          id: 226,
          skill: 72,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skillName: "Wide-Range"
        },
        {
          id: 227,
          skill: 72,
          level: 2,
          modifiers: {},
          description: "Items affect nearby allies in a wider radius with 33% of their efficacy.",
          skillName: "Wide-Range"
        },
        {
          id: 228,
          skill: 72,
          level: 3,
          modifiers: {},
          description: "Items affect nearby allies in a wider radius with 66% of their efficacy.",
          skillName: "Wide-Range"
        },
        {
          id: 229,
          skill: 72,
          level: 4,
          modifiers: {},
          description: "Items affect nearby allies in a much wider radius with 66% of their efficacy.",
          skillName: "Wide-Range"
        },
        {
          id: 230,
          skill: 72,
          level: 5,
          modifiers: {},
          description: "Items affect nearby allies in a wider radius with full efficacy.",
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 73,
      name: "Item Prolonger",
      description: "Extends the duration of some item effects.",
      ranks: [
        {
          id: 231,
          skill: 73,
          level: 1,
          modifiers: {},
          description: "Item effect duration +10%",
          skillName: "Item Prolonger"
        },
        {
          id: 232,
          skill: 73,
          level: 2,
          modifiers: {},
          description: "Item effect duration +25%",
          skillName: "Item Prolonger"
        },
        {
          id: 233,
          skill: 73,
          level: 3,
          modifiers: {},
          description: "Item effect duration +50%",
          skillName: "Item Prolonger"
        }
      ]
    },
    {
      id: 74,
      name: "Free Meal",
      description: "Gives you a predetermined chance of consuming a food or drink item for free.",
      ranks: [
        {
          id: 234,
          skill: 74,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skillName: "Free Meal"
        },
        {
          id: 376,
          skill: 74,
          level: 2,
          modifiers: {},
          description: "Activates 50% of the time.",
          skillName: "Free Meal"
        },
        {
          id: 377,
          skill: 74,
          level: 3,
          modifiers: {},
          description: "Activates 75% of the time.",
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 75,
      name: "Speed Eating",
      description: "Increases meat-eating and item-consumption speed.",
      ranks: [
        {
          id: 235,
          skill: 75,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skillName: "Speed Eating"
        },
        {
          id: 236,
          skill: 75,
          level: 2,
          modifiers: {},
          description: "Moderately increases item use speed.",
          skillName: "Speed Eating"
        },
        {
          id: 237,
          skill: 75,
          level: 3,
          modifiers: {},
          description: "Greatly increases item use speed.",
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 76,
      name: "Speed Sharpening",
      description: "Speeds up weapon sharpening when using a whetstone.",
      ranks: [
        {
          id: 238,
          skill: 76,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skillName: "Speed Sharpening"
        },
        {
          id: 239,
          skill: 76,
          level: 2,
          modifiers: {},
          description: "Removes two cycles from the sharpening process.",
          skillName: "Speed Sharpening"
        },
        {
          id: 240,
          skill: 76,
          level: 3,
          modifiers: {},
          description: "Removes three cycles from the sharpening process.",
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 77,
      name: "Bombardier",
      description: "Increases the damage of explosive items.",
      ranks: [
        {
          id: 241,
          skill: 77,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skillName: "Bombardier"
        },
        {
          id: 242,
          skill: 77,
          level: 2,
          modifiers: {},
          description: "Explosive power +20%",
          skillName: "Bombardier"
        },
        {
          id: 243,
          skill: 77,
          level: 3,
          modifiers: {},
          description: "Explosive power +30%",
          skillName: "Bombardier"
        },
        {
          id: 372,
          skill: 77,
          level: 4,
          modifiers: {},
          description: "Explosive power +40%",
          skillName: "Bombardier"
        },
        {
          id: 373,
          skill: 77,
          level: 5,
          modifiers: {},
          description: "Explosive power +50%",
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 78,
      name: "Mushroomancer",
      description: "Lets you digest mushrooms that would otherwise be inedible and gain their advantageous effects.",
      ranks: [
        {
          id: 244,
          skill: 78,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skillName: "Mushroomancer"
        },
        {
          id: 245,
          skill: 78,
          level: 2,
          modifiers: {},
          description: "Additionally lets you digest nitroshrooms and parashrooms.",
          skillName: "Mushroomancer"
        },
        {
          id: 246,
          skill: 78,
          level: 3,
          modifiers: {},
          description: "Additionally lets you digest mandragoras, devil's blight, and exciteshrooms.",
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 79,
      name: "Master Fisher",
      description: "Improves your skill at fishing.",
      ranks: [
        {
          id: 247,
          skill: 79,
          level: 1,
          modifiers: {},
          description: "Increases the time window for reeling in fish, and makes it easier to catch large fish.",
          skillName: "Master Fisher"
        }
      ]
    },
    {
      id: 80,
      name: "Pro Transporter",
      description: "Increases your speed while transporting items and decreases the likelihood of dropping them.",
      ranks: [
        {
          id: 248,
          skill: 80,
          level: 1,
          modifiers: {},
          description: "Increases movement speed while transporting and reduces downtime on landings.",
          skillName: "Pro Transporter"
        }
      ]
    },
    {
      id: 81,
      name: "Master Gatherer",
      description: "Allows you to gather more quickly, and also prevents attacks from knocking you back while gathering.",
      ranks: [
        {
          id: 249,
          skill: 81,
          level: 1,
          modifiers: {},
          description: "Speeds up gathering and prevents knockbacks while gathering.",
          skillName: "Master Gatherer"
        }
      ]
    },
    {
      id: 82,
      name: "Honey Hunter",
      description: "Increases the quantity of honey you receive when gathering in the field.",
      ranks: [
        {
          id: 250,
          skill: 82,
          level: 1,
          modifiers: {},
          description: "One extra honey per gather.",
          skillName: "Honey Hunter"
        }
      ]
    },
    {
      id: 83,
      name: "Carving Pro",
      description: "Prevents knockback from attacks while carving.",
      ranks: [
        {
          id: 251,
          skill: 83,
          level: 1,
          modifiers: {},
          description: "Prevents knockback while carving.",
          skillName: "Carving Pro"
        }
      ]
    },
    {
      id: 84,
      name: "Divine Blessing",
      description: "Has a predetermined chance of reducing the damage you take.",
      ranks: [
        {
          id: 252,
          skill: 84,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skillName: "Divine Blessing"
        },
        {
          id: 253,
          skill: 84,
          level: 2,
          modifiers: {},
          description: "While active, reduces damage taken by 30%.",
          skillName: "Divine Blessing"
        },
        {
          id: 254,
          skill: 84,
          level: 3,
          modifiers: {},
          description: "While active, reduces damage taken by 50%.",
          skillName: "Divine Blessing"
        },
        {
          id: 344,
          skill: 84,
          level: 4,
          modifiers: {},
          description: "While active, reduces damage taken by 60%.",
          skillName: "Divine Blessing"
        },
        {
          id: 345,
          skill: 84,
          level: 5,
          modifiers: {},
          description: "While active, reduces damage taken by 60%. Skill becomes easier to activate as well.",
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 85,
      name: "Palico Rally",
      description: "Powers up Palicoes.",
      ranks: [
        {
          id: 255,
          skill: 85,
          level: 1,
          modifiers: {},
          description: "Increases Palico attack power and defense by 5%.",
          skillName: "Palico Rally"
        },
        {
          id: 256,
          skill: 85,
          level: 2,
          modifiers: {},
          description: "Increases Palico attack power and defense by 10%.",
          skillName: "Palico Rally"
        },
        {
          id: 257,
          skill: 85,
          level: 3,
          modifiers: {},
          description: "Increases Palico attack power and defense by 15%.",
          skillName: "Palico Rally"
        },
        {
          id: 258,
          skill: 85,
          level: 4,
          modifiers: {},
          description: "Increases Palico attack power and defense by 20%.",
          skillName: "Palico Rally"
        },
        {
          id: 259,
          skill: 85,
          level: 5,
          modifiers: {},
          description: "Increases Palico attack power and defense by 25%.",
          skillName: "Palico Rally"
        }
      ]
    },
    {
      id: 86,
      name: "Botanist",
      description: "Increases the quantity of herbs and other consumable items you gather.",
      ranks: [
        {
          id: 260,
          skill: 86,
          level: 1,
          modifiers: {},
          description: "One extra consumable herb item per gather.",
          skillName: "Botanist"
        },
        {
          id: 261,
          skill: 86,
          level: 2,
          modifiers: {},
          description: "One extra consumable herb, fruit, nut, or seed item per gather.",
          skillName: "Botanist"
        },
        {
          id: 262,
          skill: 86,
          level: 3,
          modifiers: {},
          description: "One extra consumable herb, fruit, nut, seed, or insect item per gather.",
          skillName: "Botanist"
        },
        {
          id: 263,
          skill: 86,
          level: 4,
          modifiers: {},
          description: "One extra consumable herb, fruit, nut, seed, insect or mushroom item per gather.",
          skillName: "Botanist"
        }
      ]
    },
    {
      id: 87,
      name: "Geologist",
      description: "Increases the number of times you can use a gathering point.",
      ranks: [
        {
          id: 264,
          skill: 87,
          level: 1,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles.",
          skillName: "Geologist"
        },
        {
          id: 265,
          skill: 87,
          level: 2,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles and special item gathering points.",
          skillName: "Geologist"
        },
        {
          id: 266,
          skill: 87,
          level: 3,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles, gathering points, and mining outcrops.",
          skillName: "Geologist"
        }
      ]
    },
    {
      id: 88,
      name: "Maximum Might",
      description: "Increases affinity as long as stamina is kept full for a period of time.",
      ranks: [
        {
          id: 267,
          skill: 88,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skillName: "Maximum Might"
        },
        {
          id: 268,
          skill: 88,
          level: 2,
          modifiers: {},
          description: "While active, increases affinity by 20%.",
          skillName: "Maximum Might"
        },
        {
          id: 269,
          skill: 88,
          level: 3,
          modifiers: {},
          description: "While active, increases affinity by 30%.",
          skillName: "Maximum Might"
        },
        {
          id: 335,
          skill: 88,
          level: 4,
          modifiers: {},
          description: "While active, increases affinity by 40%.",
          skillName: "Maximum Might"
        },
        {
          id: 336,
          skill: 88,
          level: 5,
          modifiers: {},
          description: "Increases affinity by 40% as soon as the stamina gauge is full.",
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 89,
      name: "Slinger Capacity",
      description: "Increases the loading capacity for slinger ammo obtained in the field.",
      ranks: [
        {
          id: 270,
          skill: 89,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skillName: "Slinger Capacity"
        },
        {
          id: 271,
          skill: 89,
          level: 2,
          modifiers: {},
          description: "In addition, increases the loading capacity for some slinger ammo dropped by monsters.",
          skillName: "Slinger Capacity"
        },
        {
          id: 272,
          skill: 89,
          level: 3,
          modifiers: {},
          description: "In addition, increases the loading capacity for all slinger ammo dropped by monsters.",
          skillName: "Slinger Capacity"
        },
        {
          id: 391,
          skill: 89,
          level: 4,
          modifiers: {},
          description: "Increases the loading capacity for the slinger ammo collected from the ground or plants even more",
          skillName: "Slinger Capacity"
        },
        {
          id: 392,
          skill: 89,
          level: 5,
          modifiers: {},
          description: "Increases the loading capacity for all slinger ammo",
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 90,
      name: "Stealth",
      description: "Makes it easier for monsters to lose sight of you.",
      ranks: [
        {
          id: 273,
          skill: 90,
          level: 1,
          modifiers: {},
          description: "Makes it slightly easier for monsters to lose sight of you.",
          skillName: "Stealth"
        },
        {
          id: 274,
          skill: 90,
          level: 2,
          modifiers: {},
          description: "Makes it moderately easier for monsters to lose sight of you.",
          skillName: "Stealth"
        },
        {
          id: 275,
          skill: 90,
          level: 3,
          modifiers: {},
          description: "Makes it much easier for monsters to lose sight of you.",
          skillName: "Stealth"
        }
      ]
    },
    {
      id: 91,
      name: "Flinch Free",
      description: "Prevents knockbacks and other reactions to small damage.",
      ranks: [
        {
          id: 276,
          skill: 91,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skillName: "Flinch Free"
        },
        {
          id: 277,
          skill: 91,
          level: 2,
          modifiers: {},
          description: "Prevents standard knockbacks. Tripping is reduced to a knockback. Increases some Kinsect extract effects.",
          skillName: "Flinch Free"
        },
        {
          id: 278,
          skill: 91,
          level: 3,
          modifiers: {},
          description: "Prevents knockbacks and tripping. Increases some Kinsect extract effects.",
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 92,
      name: "Scoutfly Range Up",
      description: "Expands your scoutflies' detection range.",
      ranks: [
        {
          id: 279,
          skill: 92,
          level: 1,
          modifiers: {},
          description: "Expands your scoutflies' detection range.",
          skillName: "Scoutfly Range Up"
        }
      ]
    },
    {
      id: 93,
      name: "Speed Crawler",
      description: "Increases movement speed while crouching.",
      ranks: [
        {
          id: 280,
          skill: 93,
          level: 1,
          modifiers: {},
          description: "Increases movement speed while crouching.",
          skillName: "Speed Crawler"
        }
      ]
    },
    {
      id: 94,
      name: "Jump Master",
      description: "Prevents attacks from knocking you back during a jump.",
      ranks: [
        {
          id: 281,
          skill: 94,
          level: 1,
          modifiers: {},
          description: "Negates knockback during jumps.",
          skillName: "Jump Master"
        }
      ]
    },
    {
      id: 95,
      name: "Survival Expert",
      description: "Extra health is recovered from environmental interactables like Sporepuffs or Wiggly Litchi.",
      ranks: [
        {
          id: 282,
          skill: 95,
          level: 1,
          modifiers: {},
          description: "Interactables restore an additional 50 health.",
          skillName: "Survival Expert"
        },
        {
          id: 283,
          skill: 95,
          level: 2,
          modifiers: {},
          description: "Interactables restore an additional 80 health.",
          skillName: "Survival Expert"
        },
        {
          id: 284,
          skill: 95,
          level: 3,
          modifiers: {},
          description: "Interactables restore an additional 100 health.",
          skillName: "Survival Expert"
        }
      ]
    },
    {
      id: 96,
      name: "Aquatic/Polar Mobility",
      description: "Lets you move more freely in water. Also prevents you from being slowed down by terrain effects, such as deep snow.",
      ranks: [
        {
          id: 285,
          skill: 96,
          level: 1,
          modifiers: {},
          description: "Prevents lowered movement speed.",
          skillName: "Aquatic/Polar Mobility"
        },
        {
          id: 286,
          skill: 96,
          level: 2,
          modifiers: {},
          description: "Increases your evade window and prevents lowered movement speed.",
          skillName: "Aquatic/Polar Mobility"
        },
        {
          id: 287,
          skill: 96,
          level: 3,
          modifiers: {},
          description: "Greatly increases your evade window and prevents lowered movement speed.",
          skillName: "Aquatic/Polar Mobility"
        }
      ]
    },
    {
      id: 97,
      name: "Cliffhanger",
      description: "Decreases stamina depletion when evading while clinging to walls or ivy, or when moving while grappling onto an enemy.",
      ranks: [
        {
          id: 288,
          skill: 97,
          level: 1,
          modifiers: {},
          description: "Reduces stamina depletion while climbing by 50%.",
          skillName: "Cliffhanger"
        }
      ]
    },
    {
      id: 98,
      name: "Blindsider",
      description: "Improves the effectiveness of flash attacks and items.",
      ranks: [
        {
          id: 289,
          skill: 98,
          level: 1,
          modifiers: {},
          description: "Increases the success rate of flash effects.",
          skillName: "Blindsider"
        }
      ]
    },
    {
      id: 99,
      name: "Scholar",
      description: "Speeds up progress on research levels and special investigations. (Effect is applied at the quest results screen.)",
      ranks: [
        {
          id: 290,
          skill: 99,
          level: 1,
          modifiers: {},
          description: "Speeds up progress on research levels and special investigations.",
          skillName: "Scholar"
        }
      ]
    },
    {
      id: 100,
      name: "Entomologist",
      description: "Decreases the chances of destroying the bodies of small insect monsters, allowing them to be carved.",
      ranks: [
        {
          id: 291,
          skill: 100,
          level: 1,
          modifiers: {},
          description: "Increases the chances of a corpse being left behind.",
          skillName: "Entomologist"
        },
        {
          id: 292,
          skill: 100,
          level: 2,
          modifiers: {},
          description: "Greatly increases the chances of a corpse being left behind.",
          skillName: "Entomologist"
        },
        {
          id: 293,
          skill: 100,
          level: 3,
          modifiers: {},
          description: "Makes it so corpses will always be left behind.",
          skillName: "Entomologist"
        }
      ]
    },
    {
      id: 101,
      name: "Effluvia Resistance",
      description: "Gain a resistance to effluvial buildup.",
      ranks: [
        {
          id: 294,
          skill: 101,
          level: 1,
          modifiers: {},
          description: "Reduces effluvial buildup.",
          skillName: "Effluvia Resistance"
        },
        {
          id: 295,
          skill: 101,
          level: 2,
          modifiers: {},
          description: "Greatly reduces effluvial buildup.",
          skillName: "Effluvia Resistance"
        },
        {
          id: 296,
          skill: 101,
          level: 3,
          modifiers: {},
          description: "Prevents effluvial buildup.",
          skillName: "Effluvia Resistance"
        }
      ]
    },
    {
      id: 102,
      name: "Scenthound",
      description: "Increases your scoutflies' gauge fill rate when you find tracks and other traces left by monsters.",
      ranks: [
        {
          id: 297,
          skill: 102,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 50%.",
          skillName: "Scenthound"
        }
      ]
    },
    {
      id: 103,
      name: "Forager's Luck",
      description: "Increases the chance of finding rare gathering points.",
      ranks: [
        {
          id: 298,
          skill: 103,
          level: 1,
          modifiers: {},
          description: "Increases the likelihood of rare gathering points respawning.",
          skillName: "Forager's Luck"
        }
      ]
    },
    {
      id: 104,
      name: "Detector",
      description: "Shows rare gathering points on the Wildlife Map.",
      ranks: [
        {
          id: 299,
          skill: 104,
          level: 1,
          modifiers: {},
          description: "Marks rare sites on the wildlife map.",
          skillName: "Detector"
        }
      ]
    },
    {
      id: 105,
      name: "BBQ Master",
      description: "Improves your skill at cooking meat.",
      ranks: [
        {
          id: 300,
          skill: 105,
          level: 1,
          modifiers: {},
          description: "Makes it easier to cook well-done steaks.",
          skillName: "BBQ Master"
        }
      ]
    },
    {
      id: 106,
      name: "Tool Specialist",
      description: "Reduces the recharge time for specialized tools.",
      ranks: [
        {
          id: 301,
          skill: 106,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skillName: "Tool Specialist"
        },
        {
          id: 302,
          skill: 106,
          level: 2,
          modifiers: {},
          description: "Shortens time until reuse by 20%.",
          skillName: "Tool Specialist"
        },
        {
          id: 303,
          skill: 106,
          level: 3,
          modifiers: {},
          description: "Shortens time until reuse by 30%.",
          skillName: "Tool Specialist"
        },
        {
          id: 388,
          skill: 106,
          level: 4,
          modifiers: {},
          description: "Shortens time until reuse by 40%.",
          skillName: "Tool Specialist"
        },
        {
          id: 389,
          skill: 106,
          level: 5,
          modifiers: {},
          description: "Shortens time until reuse by 50%.",
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 107,
      name: "Affinity Sliding",
      description: "Sliding increases your affinity for a short time.",
      ranks: [
        {
          id: 304,
          skill: 107,
          level: 1,
          modifiers: {
            affinity: 30
          },
          description: "+30% Affinity for 15 seconds after sliding.",
          skillName: "Affinity Sliding"
        }
      ]
    },
    {
      id: 108,
      name: "Intimidator",
      description: "Reduces the chances small monsters will attack after spotting you. (No effect on certain monsters.)",
      ranks: [
        {
          id: 305,
          skill: 108,
          level: 1,
          modifiers: {},
          description: "Discourages monsters from engaging you even if you've been spotted.",
          skillName: "Intimidator"
        },
        {
          id: 306,
          skill: 108,
          level: 2,
          modifiers: {},
          description: "Highly discourages monsters from engaging you even if you've been spotted.",
          skillName: "Intimidator"
        },
        {
          id: 307,
          skill: 108,
          level: 3,
          modifiers: {},
          description: "Prevents monsters from engaging you even if you've been spotted.",
          skillName: "Intimidator"
        }
      ]
    },
    {
      id: 109,
      name: "Hasten Recovery",
      description: "Regenerates your health as you continually attack a monster. Recovery varies by weapon.",
      ranks: [
        {
          id: 308,
          skill: 109,
          level: 1,
          modifiers: {},
          description: "Regenerates your health as you continually attack a monster. Recovery varies by weapon.",
          skillName: "Hasten Recovery"
        }
      ]
    },
    {
      id: 110,
      name: "Super Recovery",
      description: "Allows recovery to exceed the red portion of the health gauge.",
      ranks: [
        {
          id: 309,
          skill: 110,
          level: 1,
          modifiers: {},
          description: "Allows recovery to exceed the red portion of the health gauge.",
          skillName: "Super Recovery"
        }
      ]
    },
    {
      id: 111,
      name: "Poison Duration Up",
      description: "Extends the duration of your poison's effect on monsters.",
      ranks: [
        {
          id: 310,
          skill: 111,
          level: 1,
          modifiers: {},
          description: "Extends the duration of your poison's effect on monsters.",
          skillName: "Poison Duration Up"
        }
      ]
    },
    {
      id: 112,
      name: "Adrenaline",
      description: "Temporarily reduces stamina depletion when health is at 40% or lower.",
      ranks: [
        {
          id: 311,
          skill: 112,
          level: 1,
          modifiers: {},
          description: "Temporarily reduces stamina depletion when health is at 40% or lower.",
          skillName: "Adrenaline"
        }
      ]
    },
    {
      id: 113,
      name: "Stamina Cap Up",
      description: "Increases stamina cap.",
      ranks: [
        {
          id: 312,
          skill: 113,
          level: 1,
          modifiers: {},
          description: "Increases stamina cap.",
          skillName: "Stamina Cap Up"
        }
      ]
    },
    {
      id: 114,
      name: "Critical Element",
      description: "Increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.",
      ranks: [
        {
          id: 313,
          skill: 114,
          level: 1,
          modifiers: {},
          description: "Increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.",
          skillName: "Critical Element"
        }
      ]
    },
    {
      id: 115,
      name: "Mind's Eye/Ballistics",
      description: "Prevents attacks from being deflected. Also shortens the distance before ammo and arrows reach maximum power.",
      ranks: [
        {
          id: 314,
          skill: 115,
          level: 1,
          modifiers: {},
          description: "Prevents attacks from being deflected. Also shortens the distance before ammo and arrows reach maximum power.",
          skillName: "Mind's Eye/Ballistics"
        }
      ]
    },
    {
      id: 116,
      name: "Bludgeoner",
      description: "Raises attack as your weapon loses sharpness. Also boosts ranged weapon melee attacks and odds of stunning.",
      ranks: [
        {
          id: 315,
          skill: 116,
          level: 1,
          modifiers: {},
          description: "Raises attack as your weapon loses sharpness. Also boosts ranged weapon melee attacks and odds of stunning.",
          skillName: "Bludgeoner"
        }
      ]
    },
    {
      id: 117,
      name: "Non-elemental Boost",
      description: "Powers up non-elemental weapons you have equipped.",
      ranks: [
        {
          id: 316,
          skill: 117,
          level: 1,
          modifiers: {},
          description: "Powers up non-elemental weapons you have equipped.",
          skillName: "Non-elemental Boost"
        }
      ]
    },
    {
      id: 118,
      name: "Capture Master",
      description: "High chance of increased capture rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 317,
          skill: 118,
          level: 1,
          modifiers: {},
          description: "High chance of increased capture rewards. (No effect when joining mid-quest.)",
          skillName: "Capture Master"
        }
      ]
    },
    {
      id: 119,
      name: "Guard Up",
      description: "Allows you to guard against ordinarily unblockable attacks.",
      ranks: [
        {
          id: 318,
          skill: 119,
          level: 1,
          modifiers: {},
          description: "Allows you to guard against ordinarily unblockable attacks.",
          skillName: "Guard Up"
        }
      ]
    },
    {
      id: 120,
      name: "Guts",
      description: "Above a certain health threshold, you withstand an attack that would normally cart you (once only).",
      ranks: [
        {
          id: 319,
          skill: 120,
          level: 1,
          modifiers: {},
          description: "Above a certain health threshold, you withstand an attack that would normally cart you (once only).",
          skillName: "Guts"
        }
      ]
    },
    {
      id: 121,
      name: "Master's Touch",
      description: "Prevents your weapon from losing sharpness during critical hits.",
      ranks: [
        {
          id: 320,
          skill: 121,
          level: 1,
          modifiers: {},
          description: "Prevents your weapon from losing sharpness during critical hits.",
          skillName: "Master's Touch"
        }
      ]
    },
    {
      id: 122,
      name: "Nullify Wind Pressure",
      description: "Negates all wind pressure.",
      ranks: [
        {
          id: 321,
          skill: 122,
          level: 1,
          modifiers: {},
          description: "Negates all wind pressure.",
          skillName: "Nullify Wind Pressure"
        }
      ]
    },
    {
      id: 123,
      name: "Razor Sharp/Spare Shot",
      description: "Halves sharpness loss. For bows and bowguns, shots have a chance not to expend coatings or ammo.",
      ranks: [
        {
          id: 322,
          skill: 123,
          level: 1,
          modifiers: {},
          description: "Halves sharpness loss. For bows and bowguns, shots have a chance not to expend coatings or ammo.",
          skillName: "Razor Sharp/Spare Shot"
        }
      ]
    },
    {
      id: 124,
      name: "Critical Status",
      description: "Increases abnormal status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
      ranks: [
        {
          id: 323,
          skill: 124,
          level: 1,
          modifiers: {},
          description: "Increases abnormal status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
          skillName: "Critical Status"
        }
      ]
    },
    {
      id: 125,
      name: "Good Luck",
      description: "Good chance of increased quest rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 324,
          skill: 125,
          level: 1,
          modifiers: {},
          description: "Good chance of increased quest rewards. (No effect when joining mid-quest.)",
          skillName: "Good Luck"
        }
      ]
    },
    {
      id: 126,
      name: "Bow Charge Plus",
      description: "Increases max bow charge level by one.",
      ranks: [
        {
          id: 325,
          skill: 126,
          level: 1,
          modifiers: {},
          description: "Increases max bow charge level by one.",
          skillName: "Bow Charge Plus"
        }
      ]
    },
    {
      id: 127,
      name: "Punishing Draw",
      description: "Adds a stun effect to draw attacks and slightly increases attack power.",
      ranks: [
        {
          id: 326,
          skill: 127,
          level: 1,
          modifiers: {},
          description: "Adds a stun effect to draw attacks and slightly increases attack power.",
          skillName: "Punishing Draw"
        }
      ]
    },
    {
      id: 128,
      name: "Protective Polish",
      description: "Weapon sharpness does not decrease for a set time after sharpening.",
      ranks: [
        {
          id: 327,
          skill: 128,
          level: 1,
          modifiers: {},
          description: "Weapon sharpness does not decrease for a set time after sharpening.",
          skillName: "Protective Polish"
        }
      ]
    },
    {
      id: 129,
      name: "Poison Functionality",
      description: "Allows you to apply poison coatings.",
      ranks: [
        {
          id: 328,
          skill: 129,
          level: 1,
          modifiers: {},
          description: "Lets you use poison coating.",
          skillName: "Poison Functionality"
        }
      ]
    },
    {
      id: 130,
      name: "Para Functionality",
      description: "Allows you to apply paralysis coatings.",
      ranks: [
        {
          id: 329,
          skill: 130,
          level: 1,
          modifiers: {},
          description: "Lets you use paralysis coating.",
          skillName: "Para Functionality"
        }
      ]
    },
    {
      id: 131,
      name: "Sleep Functionality",
      description: "Allows you to apply sleep coatings.",
      ranks: [
        {
          id: 330,
          skill: 131,
          level: 1,
          modifiers: {},
          description: "Lets you use sleep coating.",
          skillName: "Sleep Functionality"
        }
      ]
    },
    {
      id: 132,
      name: "Blast Functionality",
      description: "Allows you to apply blast coatings.",
      ranks: [
        {
          id: 331,
          skill: 132,
          level: 1,
          modifiers: {},
          description: "Lets you use blast coating.",
          skillName: "Blast Functionality"
        }
      ]
    },
    {
      id: 133,
      name: "Elderseal Boost",
      description: "Increases the Elderseal of weapons and dragon ammo.",
      ranks: [
        {
          id: 332,
          skill: 133,
          level: 1,
          modifiers: {},
          description: "Boosts Elderseal one level.",
          skillName: "Elderseal Boost"
        }
      ]
    },
    {
      id: 134,
      name: "Great Luck",
      description: "High chance of increased quest rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 333,
          skill: 134,
          level: 1,
          modifiers: {},
          description: "High chance of increased quest rewards. (No effect when joining mid-quest.)",
          skillName: "Great Luck"
        }
      ]
    },
    {
      id: 135,
      name: "Carving Master",
      description: "Lets you carve one additional time. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 334,
          skill: 135,
          level: 1,
          modifiers: {},
          description: "Lets you carve one additional time. (No effect when joining mid-quest.)",
          skillName: "Carving Master"
        }
      ]
    },
    {
      id: 136,
      name: "Elemental Airborne",
      description: "Elemental damage increased for jumping attacks.",
      ranks: [
        {
          id: 367,
          skill: 136,
          level: 1,
          modifiers: {},
          description: "Elemental damage increased for jumping attacks.",
          skillName: "Elemental Airborne"
        }
      ]
    },
    {
      id: 137,
      name: "Igni Intensity",
      description: "Only those who complete the rigorous witcher training are allowed to use the powerful magic of the Igni Sign.",
      ranks: [
        {
          id: 368,
          skill: 137,
          level: 1,
          modifiers: {},
          description: "Only those who complete the rigorous witcher training are allowed to use the powerful magic of the Igni Sign.",
          skillName: "Igni Intensity"
        }
      ]
    },
    {
      id: 138,
      name: "Offensive Guard",
      description: "Temporarily increases attack power after executing a perfectly-timed guard.",
      ranks: [
        {
          id: 338,
          skill: 138,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skillName: "Offensive Guard"
        },
        {
          id: 339,
          skill: 138,
          level: 2,
          modifiers: {},
          description: "While active, increases attack power by 10%.",
          skillName: "Offensive Guard"
        },
        {
          id: 340,
          skill: 138,
          level: 3,
          modifiers: {},
          description: "While active, increases attack power by 15%.",
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 139,
      name: "Bombardier Secret",
      description: "Raises the maximum level of the Bombardier skill.",
      ranks: [
        {
          id: 341,
          skill: 139,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Bombardier skill.",
          skillName: "Bombardier Secret"
        }
      ]
    },
    {
      id: 140,
      name: "Slinger Capacity Secret",
      description: "Raises the maximum level of the Slinger Capacity skill.",
      ranks: [
        {
          id: 342,
          skill: 140,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Slinger Capacity skill.",
          skillName: "Slinger Capacity Secret"
        }
      ]
    },
    {
      id: 141,
      name: "True Critical Element",
      description: "Greatly increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.",
      ranks: [
        {
          id: 343,
          skill: 141,
          level: 1,
          modifiers: {},
          description: "Greatly increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.",
          skillName: "True Critical Element"
        }
      ]
    },
    {
      id: 142,
      name: "Divine Blessing Secret",
      description: "Raises the maximum level of the Divine Blessing skill.",
      ranks: [
        {
          id: 346,
          skill: 142,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Divine Blessing skill.",
          skillName: "Divine Blessing Secret"
        }
      ]
    },
    {
      id: 143,
      name: "True Critical Status",
      description: "Greatly increases status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
      ranks: [
        {
          id: 347,
          skill: 143,
          level: 1,
          modifiers: {},
          description: "Greatly increases status effect damage (paralysis, poison, sleep, blast) when landing critical hits.",
          skillName: "True Critical Status"
        }
      ]
    },
    {
      id: 144,
      name: "Latent Power Secret",
      description: "Raises the maximum level of the Latent Power skill.",
      ranks: [
        {
          id: 349,
          skill: 144,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Latent Power skill.",
          skillName: "Latent Power Secret"
        }
      ]
    },
    {
      id: 145,
      name: "Artillery Secret",
      description: "Raises the maximum level of the Artillery skill.",
      ranks: [
        {
          id: 353,
          skill: 145,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Artillery skill.",
          skillName: "Artillery Secret"
        }
      ]
    },
    {
      id: 146,
      name: "Coalescence",
      description: "Temporarily enhances attacks after recovering from blights or abnormal status.",
      ranks: [
        {
          id: 356,
          skill: 146,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skillName: "Coalescence"
        },
        {
          id: 357,
          skill: 146,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +15, element attack power +60, and status buildup + 10%.",
          skillName: "Coalescence"
        },
        {
          id: 358,
          skill: 146,
          level: 3,
          modifiers: {},
          description: "While active, grants attack +18, element attack power +90, and status buildup + 15%.",
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 147,
      name: "Gaia's Veil",
      description: "While wearing a mantle, gain Windproof Lv3, Earplugs Lv3, Tremor Res Lv3, and Flinch Free.",
      ranks: [
        {
          id: 359,
          skill: 147,
          level: 1,
          modifiers: {},
          description: "While wearing a mantle, gain Windproof Lv3, Earplugs Lv3, Tremor Res Lv3, and Flinch Free.",
          skillName: "Gaia's Veil"
        }
      ]
    },
    {
      id: 148,
      name: "True Gaia's Veil",
      description: "While wearing a mantle, gain Tremor Resistance Lv3, Earplugs Lv5, max Windproof, and Flinch Free.",
      ranks: [
        {
          id: 360,
          skill: 148,
          level: 1,
          modifiers: {},
          description: "While wearing a mantle, gain Tremor Resistance Lv3, Earplugs Lv5, max Windproof, and Flinch Free.",
          skillName: "True Gaia's Veil"
        }
      ]
    },
    {
      id: 149,
      name: "Element Acceleration",
      description: "Continually attacking a monster activates Free Element/Ammo Up Lv2 and increases elemental damage.",
      ranks: [
        {
          id: 361,
          skill: 149,
          level: 1,
          modifiers: {},
          description: "Continually attacking a monster activates Free Element/Ammo Up Lv2 and increases elemental damage.",
          skillName: "Element Acceleration"
        }
      ]
    },
    {
      id: 150,
      name: "True Element Acceleration",
      description: "Continually attacking a monster activates Free Element/Ammo Up Lv3 and increases elemental damage.",
      ranks: [
        {
          id: 362,
          skill: 150,
          level: 1,
          modifiers: {},
          description: "Continually attacking a monster activates Free Element/Ammo Up Lv3 and increases elemental damage.",
          skillName: "True Element Acceleration"
        }
      ]
    },
    {
      id: 151,
      name: "Frostcraft",
      description: "An aura of frost builds when your weapon is sheathed, raising attack. Wanes each melee hit or shot fired.",
      ranks: [
        {
          id: 363,
          skill: 151,
          level: 1,
          modifiers: {},
          description: "An aura of frost builds when your weapon is sheathed, raising attack. Wanes each melee hit or shot fired.",
          skillName: "Frostcraft"
        }
      ]
    },
    {
      id: 152,
      name: "Stamina Thief Secret",
      description: "Raises the maximum level of the Stamina Thief skill.",
      ranks: [
        {
          id: 364,
          skill: 152,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Stamina Thief skill.",
          skillName: "Stamina Thief Secret"
        }
      ]
    },
    {
      id: 153,
      name: "Free Meal Secret",
      description: "Raises the maximum level of the Free Meal skill.",
      ranks: [
        {
          id: 365,
          skill: 153,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Free Meal skill.",
          skillName: "Free Meal Secret"
        }
      ]
    },
    {
      id: 154,
      name: "Agitator Secret",
      description: "Raises the maximum level of the Agitator skill.",
      ranks: [
        {
          id: 366,
          skill: 154,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Agitator skill.",
          skillName: "Agitator Secret"
        }
      ]
    },
    {
      id: 155,
      name: "Slugger Secret",
      description: "Raises the maximum level of the Slugger skill to 5.",
      ranks: [
        {
          id: 393,
          skill: 155,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Slugger skill to 5.",
          skillName: "Slugger Secret"
        }
      ]
    },
    {
      id: 157,
      name: "True Razor Sharp/Spare Shot",
      description: "Greatly reduces sharpness loss. Bows and bowguns have a chance not to expend coatings or ammo.",
      ranks: [
        {
          id: 395,
          skill: 157,
          level: 1,
          modifiers: {},
          description: "Greatly reduces sharpness loss. Bows and bowguns have a chance not to expend coatings or ammo.",
          skillName: "True Razor Sharp/Spare Shot"
        }
      ]
    },
    {
      id: 158,
      name: "Maximum Might Secret",
      description: "Raises  the maximum level of the Maximum Might skill.",
      ranks: [
        {
          id: 396,
          skill: 158,
          level: 1,
          modifiers: {},
          description: "Raises  the maximum level of the Maximum Might skill.",
          skillName: "Maximum Might Secret"
        }
      ]
    },
    {
      id: 162,
      name: "Tool Specialist Secret",
      description: "Raises the maximum level of the Tool Specialist skill.",
      ranks: [
        {
          id: 397,
          skill: 162,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Tool Specialist skill.",
          skillName: "Tool Specialist Secret"
        }
      ]
    },
    {
      id: 163,
      name: "Zombie & Effluvia Res",
      description: "Prevents zombie and effluvial buildup.",
      ranks: [
        {
          id: 398,
          skill: 163,
          level: 1,
          modifiers: {},
          description: "Prevents zombie and effluvial buildup.",
          skillName: "Zombie & Effluvia Res"
        }
      ]
    },
    {
      id: 164,
      name: "Provoker",
      description: "Increases the attention drawn when attacking a monster.",
      ranks: [
        {
          id: 399,
          skill: 164,
          level: 1,
          modifiers: {},
          description: "Increases the attention drawn when attacking a monster.",
          skillName: "Provoker"
        }
      ]
    },
    {
      id: 165,
      name: "Safe Landing",
      description: "Allows you to quickly recover from heavy attacks that blow you back when you have your weapon unsheathed.",
      ranks: [
        {
          id: 400,
          skill: 165,
          level: 1,
          modifiers: {},
          description: "Allows you to quickly recover from heavy attacks that blow you back when you have your weapon unsheathed.",
          skillName: "Safe Landing"
        }
      ]
    },
    {
      id: 166,
      name: "Coldproof",
      description: "Nullifies the effects of cold weather.",
      ranks: [
        {
          id: 401,
          skill: 166,
          level: 1,
          modifiers: {},
          description: "Activates skill effect.",
          skillName: "Coldproof"
        }
      ]
    },
    {
      id: 167,
      name: "Dragonvein Awakening",
      description: "Elem., abnormal status, & affinity up with weapon drawn. Take damage when attacking, but can be recovered by continually attacking.",
      ranks: [
        {
          id: 402,
          skill: 167,
          level: 1,
          modifiers: {
            affinity: 20
          },
          description: "Elem., abnormal status, & affinity up with weapon drawn. Take damage when attacking, but can be recovered by continually attacking.",
          skillName: "Dragonvein Awakening"
        }
      ]
    },
    {
      id: 168,
      name: "True Dragonvein Awakening",
      description: "Enhances attacks even more with weapon drawn. Take damage when attacking, but can be recovered by continually attacking.",
      ranks: [
        {
          id: 403,
          skill: 168,
          level: 1,
          modifiers: {
            affinity: 40
          },
          description: "Enhances attacks even more with weapon drawn. Take damage when attacking, but can be recovered by continually attacking.",
          skillName: "True Dragonvein Awakening"
        }
      ]
    },
    {
      id: 169,
      name: "Ancient Armory",
      description: "Increases defense and eliminates damage reactions. Taking several hits knoocks it out, but reactivates over time.",
      ranks: [
        {
          id: 412,
          skill: 169,
          level: 1,
          modifiers: {},
          description: "Increases defense and eliminates damage reactions. Taking several hits knoocks it out, but reactivates over time.",
          skillName: "Ancient Armory"
        }
      ]
    },
    {
      id: 170,
      name: "Gratitudes's Blessing",
      description: "Greatly increases odds of getting special Grand Appreciation rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 413,
          skill: 170,
          level: 1,
          modifiers: {},
          description: "Greatly increases odds of getting special Grand Appreciation rewards. (No effect when joining mid-quest.)",
          skillName: "Gratitudes's Blessing"
        }
      ]
    },
    {
      id: 171,
      name: "Gratitude's Gift",
      description: "Increases odds of getting special Grand Appreciation rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 414,
          skill: 171,
          level: 1,
          modifiers: {},
          description: "Increases odds of getting special Grand Appreciation rewards. (No effect when joining mid-quest.)",
          skillName: "Gratitude's Gift"
        }
      ]
    },
    {
      id: 172,
      name: "Joy's Gratitude",
      description: "Greatly increases odds of getting special Holiday Joy rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 415,
          skill: 172,
          level: 1,
          modifiers: {},
          description: "Greatly increases odds of getting special Holiday Joy rewards. (No effect when joining mid-quest.)",
          skillName: "Joy's Gratitude"
        }
      ]
    },
    {
      id: 173,
      name: "Joy's Gift",
      description: "Increases odds of getting special Holiday Joy rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 416,
          skill: 173,
          level: 1,
          modifiers: {},
          description: "Increases odds of getting special Holiday Joy rewards. (No effect when joining mid-quest.)",
          skillName: "Joy's Gift"
        }
      ]
    },
    {
      id: 174,
      name: "Heroics Secret",
      description: "Raises the maximum level of the Heroics skill.",
      ranks: [
        {
          id: 417,
          skill: 174,
          level: 1,
          modifiers: {},
          description: "Raises the maximum level of the Heroics skill.",
          skillName: "Heroics Secret"
        }
      ]
    },
    {
      id: 175,
      name: "Full Bloom's Gift",
      description: "Increases odds of getting special Full Bloom rewards.",
      ranks: [
        {
          id: 420,
          skill: 175,
          level: 1,
          modifiers: {},
          description: "Increases odds of getting special Full Bloom rewards.",
          skillName: "Full Bloom's Gift"
        }
      ]
    },
    {
      id: 176,
      name: "Full Bloom's Gratitude",
      description: "Greatly increases odds of getting special Full Bloom rewards.",
      ranks: [
        {
          id: 421,
          skill: 176,
          level: 1,
          modifiers: {},
          description: "Greatly increases odds of getting special Full Bloom rewards.",
          skillName: "Full Bloom's Gratitude"
        }
      ]
    },
    {
      id: 177,
      name: "Sizzling Gift",
      description: "Increases odds of getting special Sizzling Spice rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 422,
          skill: 177,
          level: 1,
          modifiers: {},
          description: "Increases odds of getting special Sizzling Spice rewards. (No effect when joining mid-quest.)",
          skillName: "Sizzling Gift"
        }
      ]
    },
    {
      id: 178,
      name: "Sizzling Gratitude",
      description: "Greatly increases odds of getting special Sizzling Spice rewards. (No effect when joining mid-quest.)",
      ranks: [
        {
          id: 423,
          skill: 178,
          level: 1,
          modifiers: {},
          description: "Greatly increases odds of getting special Sizzling Spice rewards. (No effect when joining mid-quest.)",
          skillName: "Sizzling Gratitude"
        }
      ]
    },
    {
      id: 179,
      name: "Element Conversion",
      description: "Equipped weapon's elemental power increases as your armor's elemental resistance increases.",
      ranks: [
        {
          id: 424,
          skill: 179,
          level: 1,
          modifiers: {},
          description: "Equipped weapon's elemental power increases as your armor's elemental resistance increases.",
          skillName: "Element Conversion"
        }
      ]
    },
    {
      id: 180,
      name: "All Elemental Resistance",
      description: "Increases all elemental resistances +20%.",
      ranks: [
        {
          id: 425,
          skill: 180,
          level: 1,
          modifiers: {},
          description: "Increases all elemental resistances +20%.",
          skillName: "All Elemental Resistance"
        }
      ]
    },
    {
      id: 181,
      name: "Clutch Claw Boost",
      description: "Clutch claw weapon attacks wound monsters easier, and have a better chance of dropping slinger ammo.",
      ranks: [
        {
          id: 426,
          skill: 181,
          level: 1,
          modifiers: {},
          description: "Clutch claw weapon attacks wound monsters easier, and have a better chance of dropping slinger ammo.",
          skillName: "Clutch Claw Boost"
        }
      ]
    },
    {
      id: 182,
      name: "Fun Fright's Gift",
      description: "Increases odds of getting special Fun Fright rewards. (No effect when joining mid quest.)",
      ranks: [
        {
          id: 427,
          skill: 182,
          level: 1,
          modifiers: {},
          description: "Increases odds of getting special Fun Fright rewards. (No effect when joining mid quest.)",
          skillName: "Fun Fright's Gift"
        }
      ]
    },
    {
      id: 183,
      name: "Fun Fright's Gratitude",
      description: "Greatly increases odds of getting special Fun Fright rewards. (No effect when joining mid quest.)",
      ranks: [
        {
          id: 428,
          skill: 183,
          level: 1,
          modifiers: {},
          description: "Greatly increases odds of getting special Fun Fright rewards. (No effect when joining mid quest.)",
          skillName: "Fun Fright's Gratitude"
        }
      ]
    },
    {
      id: 184,
      name: "Inheritance",
      description: "Removes the skill level cap for the skill secrets.",
      ranks: [
        {
          id: 429,
          skill: 184,
          level: 1,
          modifiers: {},
          description: "Removes the skill level cap for the skill secrets.",
          skillName: "Inheritance"
        }
      ]
    },
    {
      id: 185,
      name: "Transcendence",
      description: "Grants True Razor Sharp/Sharp Shot. Health/Stamina +100 at the start of a Quest or after fainting. (Effect doesn't stack.)",
      ranks: [
        {
          id: 430,
          skill: 185,
          level: 1,
          modifiers: {},
          description: "Grants True Razor Sharp/Sharp Shot. Health/Stamina +100 at the start of a Quest or after fainting. (Effect doesn't stack.)",
          skillName: "Transcendence"
        }
      ]
    }
  ]


  module.exports = {
    skillData,
    createSkills
  }