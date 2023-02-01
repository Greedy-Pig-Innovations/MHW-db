const { client } = require("./client");

const createDecos = async ({id,rarity,slot,name,skills}) => {

  try {

    const {rows: [deco]} = await client.query(`
    INSERT INTO decorations(id, rarity, slot, name, skills)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,[id,rarity,slot,name,skills]);

    return deco;
    
  } catch (error) {
    console.error(error)
  }
} 


const decoData = [
    {
      id: 1,
      rarity: 5,
      slot: 1,
      name: "Antidote Jewel 1",
      skills: [
        {
          id: 1,
          level: 1,
          modifiers: {},
          description: "Reduces the number of times you take poison damage.",
          skill: 1,
          skillName: "Poison Resistance"
        }
      ]
    },
    {
      id: 2,
      rarity: 5,
      slot: 1,
      name: "Geology Jewel 1",
      skills: [
        {
          id: 264,
          level: 1,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles.",
          skill: 87,
          skillName: "Geologist"
        }
      ]
    },
    {
      id: 3,
      rarity: 5,
      slot: 1,
      name: "Heavy Artillery Jewel 1",
      skills: [
        {
          id: 193,
          level: 1,
          modifiers: {},
          description: "Firepower +50%",
          skill: 62,
          skillName: "Heavy Artillery"
        }
      ]
    },
    {
      id: 4,
      rarity: 5,
      slot: 1,
      name: "Hungerless Jewel 1",
      skills: [
        {
          id: 207,
          level: 1,
          modifiers: {},
          description: "Extends the time until your stamina cap decreases by 50%.",
          skill: 67,
          skillName: "Hunger Resistance"
        }
      ]
    },
    {
      id: 5,
      rarity: 5,
      slot: 1,
      name: "Satiated Jewel 1",
      skills: [
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 6,
      rarity: 5,
      slot: 1,
      name: "Protection Jewel 1",
      skills: [
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 7,
      rarity: 5,
      slot: 1,
      name: "Meowster Jewel 1",
      skills: [
        {
          id: 255,
          level: 1,
          modifiers: {},
          description: "Increases Palico attack power and defense by 5%.",
          skill: 85,
          skillName: "Palico Rally"
        }
      ]
    },
    {
      id: 8,
      rarity: 5,
      slot: 1,
      name: "Botany Jewel 1",
      skills: [
        {
          id: 260,
          level: 1,
          modifiers: {},
          description: "One extra consumable herb item per gather.",
          skill: 86,
          skillName: "Botanist"
        }
      ]
    },
    {
      id: 9,
      rarity: 5,
      slot: 1,
      name: "Tip Toe Jewel 1",
      skills: [
        {
          id: 273,
          level: 1,
          modifiers: {},
          description: "Makes it slightly easier for monsters to lose sight of you.",
          skill: 90,
          skillName: "Stealth"
        }
      ]
    },
    {
      id: 10,
      rarity: 5,
      slot: 2,
      name: "Flight Jewel 2",
      skills: [
        {
          id: 160,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skill: 50,
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 11,
      rarity: 5,
      slot: 1,
      name: "Smoke Jewel 1",
      skills: [
        {
          id: 282,
          level: 1,
          modifiers: {},
          description: "Interactables restore an additional 50 health.",
          skill: 95,
          skillName: "Survival Expert"
        }
      ]
    },
    {
      id: 12,
      rarity: 5,
      slot: 1,
      name: "Mirewalker Jewel 1",
      skills: [
        {
          id: 285,
          level: 1,
          modifiers: {},
          description: "Prevents lowered movement speed.",
          skill: 96,
          skillName: "Aquatic/Polar Mobility"
        }
      ]
    },
    {
      id: 13,
      rarity: 5,
      slot: 1,
      name: "Specimen Jewel 1",
      skills: [
        {
          id: 291,
          level: 1,
          modifiers: {},
          description: "Increases the chances of a corpse being left behind.",
          skill: 100,
          skillName: "Entomologist"
        }
      ]
    },
    {
      id: 14,
      rarity: 5,
      slot: 1,
      name: "Miasma Jewel 1",
      skills: [
        {
          id: 294,
          level: 1,
          modifiers: {},
          description: "Reduces effluvial buildup.",
          skill: 101,
          skillName: "Effluvia Resistance"
        }
      ]
    },
    {
      id: 15,
      rarity: 5,
      slot: 1,
      name: "Scent Jewel 1",
      skills: [
        {
          id: 297,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 50%.",
          skill: 102,
          skillName: "Scenthound"
        }
      ]
    },
    {
      id: 16,
      rarity: 5,
      slot: 1,
      name: "Intimidator Jewel 1",
      skills: [
        {
          id: 305,
          level: 1,
          modifiers: {},
          description: "Discourages monsters from engaging you even if you've been spotted.",
          skill: 108,
          skillName: "Intimidator"
        }
      ]
    },
    {
      id: 17,
      rarity: 5,
      slot: 1,
      name: "Crisis Jewel 1",
      skills: [
        {
          id: 185,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skill: 57,
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 18,
      rarity: 5,
      slot: 1,
      name: "Antipara Jewel 1",
      skills: [
        {
          id: 4,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of paralysis by 30%.",
          skill: 2,
          skillName: "Paralysis Resistance"
        }
      ]
    },
    {
      id: 19,
      rarity: 5,
      slot: 1,
      name: "Fortitude Jewel 1",
      skills: [
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 20,
      rarity: 5,
      slot: 1,
      name: "Water Res Jewel 1",
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
      ]
    },
    {
      id: 21,
      rarity: 5,
      slot: 1,
      name: "Suture Jewel 1",
      skills: [
        {
          id: 17,
          level: 1,
          modifiers: {},
          description: "Reduces damage while bleeding.",
          skill: 7,
          skillName: "Bleeding Resistance"
        }
      ]
    },
    {
      id: 22,
      rarity: 5,
      slot: 1,
      name: "Dragon Res Jewel 1",
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
      ]
    },
    {
      id: 23,
      rarity: 5,
      slot: 1,
      name: "Fire Res Jewel 1",
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
      ]
    },
    {
      id: 24,
      rarity: 5,
      slot: 1,
      name: "Ice Res Jewel 1",
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
      ]
    },
    {
      id: 25,
      rarity: 5,
      slot: 1,
      name: "Def Lock Jewel 1",
      skills: [
        {
          id: 20,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of Defense Down by 50%.",
          skill: 8,
          skillName: "Iron Skin"
        }
      ]
    },
    {
      id: 26,
      rarity: 5,
      slot: 1,
      name: "Thunder Res Jewel 1",
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
      ]
    },
    {
      id: 27,
      rarity: 5,
      slot: 1,
      name: "Pep Jewel 1",
      skills: [
        {
          id: 7,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of sleep by 30%.",
          skill: 3,
          skillName: "Sleep Resistance"
        }
      ]
    },
    {
      id: 28,
      rarity: 5,
      slot: 1,
      name: "Antiblast Jewel 1",
      skills: [
        {
          id: 14,
          level: 1,
          modifiers: {},
          description: "Delays blastblight and reduces blast damage.",
          skill: 6,
          skillName: "Blast Resistance"
        }
      ]
    },
    {
      id: 29,
      rarity: 6,
      slot: 1,
      name: "Gobbler Jewel 1",
      skills: [
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 30,
      rarity: 6,
      slot: 2,
      name: "Physique Jewel 2",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 31,
      rarity: 6,
      slot: 1,
      name: "Blaze Jewel 1",
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
      ]
    },
    {
      id: 32,
      rarity: 6,
      slot: 2,
      name: "Evasion Jewel 2",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 33,
      rarity: 6,
      slot: 2,
      name: "Jumping Jewel 2",
      skills: [
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 34,
      rarity: 6,
      slot: 1,
      name: "Sheath Jewel 1",
      skills: [
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 35,
      rarity: 6,
      slot: 1,
      name: "Friendship Jewel 1",
      skills: [
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 36,
      rarity: 6,
      slot: 1,
      name: "Enduring Jewel 1",
      skills: [
        {
          id: 231,
          level: 1,
          modifiers: {},
          description: "Item effect duration +10%",
          skill: 73,
          skillName: "Item Prolonger"
        }
      ]
    },
    {
      id: 37,
      rarity: 6,
      slot: 1,
      name: "Medicine Jewel 1",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        }
      ]
    },
    {
      id: 38,
      rarity: 6,
      slot: 1,
      name: "Grinder Jewel 1",
      skills: [
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 39,
      rarity: 6,
      slot: 1,
      name: "Steadfast Jewel 1",
      skills: [
        {
          id: 10,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of stun by 60%.",
          skill: 4,
          skillName: "Stun Resistance"
        }
      ]
    },
    {
      id: 40,
      rarity: 6,
      slot: 1,
      name: "Bomber Jewel 1",
      skills: [
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 41,
      rarity: 6,
      slot: 1,
      name: "Recovery Jewel 1",
      skills: [
        {
          id: 59,
          level: 1,
          modifiers: {},
          description: "Doubles the speed at which you heal recoverable damage.",
          skill: 19,
          skillName: "Recovery Speed"
        }
      ]
    },
    {
      id: 42,
      rarity: 6,
      slot: 2,
      name: "Slider Jewel 2",
      skills: [
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
      ]
    },
    {
      id: 43,
      rarity: 6,
      slot: 1,
      name: "Defense Jewel 1",
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
      ]
    },
    {
      id: 44,
      rarity: 6,
      slot: 1,
      name: "Stonethrower Jewel 1",
      skills: [
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 45,
      rarity: 6,
      slot: 2,
      name: "Footing Jewel 2",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        }
      ]
    },
    {
      id: 46,
      rarity: 6,
      slot: 3,
      name: "Brace Jewel 3",
      skills: [
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 47,
      rarity: 6,
      slot: 2,
      name: "Wind Resist Jewel 2",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        }
      ]
    },
    {
      id: 48,
      rarity: 6,
      slot: 3,
      name: "Earplug Jewel 3",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        }
      ]
    },
    {
      id: 49,
      rarity: 6,
      slot: 1,
      name: "Vitality Jewel 1",
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
      ]
    },
    {
      id: 50,
      rarity: 6,
      slot: 1,
      name: "Resistor Jewel 1",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        }
      ]
    },
    {
      id: 51,
      rarity: 6,
      slot: 1,
      name: "Sonorous Jewel 1",
      skills: [
        {
          id: 186,
          level: 1,
          modifiers: {},
          description: "Extends melody effect duration and increases health recovery.",
          skill: 58,
          skillName: "Horn Maestro"
        }
      ]
    },
    {
      id: 52,
      rarity: 6,
      slot: 2,
      name: "KO Jewel 2",
      skills: [
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        }
      ]
    },
    {
      id: 53,
      rarity: 6,
      slot: 1,
      name: "Stream Jewel 1",
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
      ]
    },
    {
      id: 54,
      rarity: 6,
      slot: 1,
      name: "Frost Jewel 1",
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
      ]
    },
    {
      id: 55,
      rarity: 6,
      slot: 1,
      name: "Bolt Jewel 1",
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
      ]
    },
    {
      id: 56,
      rarity: 6,
      slot: 1,
      name: "Dragon Jewel 1",
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
      ]
    },
    {
      id: 57,
      rarity: 6,
      slot: 1,
      name: "Venom Jewel 1",
      skills: [
        {
          id: 105,
          level: 1,
          modifiers: {},
          description: "Poison buildup +5% Bonus: +10",
          skill: 31,
          skillName: "Poison Attack"
        }
      ]
    },
    {
      id: 58,
      rarity: 6,
      slot: 3,
      name: "Poisoncoat Jewel 3",
      skills: [
        {
          id: 328,
          level: 1,
          modifiers: {},
          description: "Lets you use poison coating.",
          skill: 129,
          skillName: "Poison Functionality"
        }
      ]
    },
    {
      id: 59,
      rarity: 6,
      slot: 1,
      name: "Expert Jewel 1",
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
      ]
    },
    {
      id: 60,
      rarity: 6,
      slot: 2,
      name: "Tenderizer Jewel 2",
      skills: [
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        }
      ]
    },
    {
      id: 61,
      rarity: 6,
      slot: 2,
      name: "Destroyer Jewel 2",
      skills: [
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        }
      ]
    },
    {
      id: 62,
      rarity: 6,
      slot: 2,
      name: "Elementless Jewel 2",
      skills: [
        {
          id: 316,
          level: 1,
          modifiers: {},
          description: "Powers up non-elemental weapons you have equipped.",
          skill: 117,
          skillName: "Non-elemental Boost"
        }
      ]
    },
    {
      id: 63,
      rarity: 6,
      slot: 1,
      name: "Drain Jewel 1",
      skills: [
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 64,
      rarity: 7,
      slot: 3,
      name: "Paracoat Jewel 3",
      skills: [
        {
          id: 329,
          level: 1,
          modifiers: {},
          description: "Lets you use paralysis coating.",
          skill: 130,
          skillName: "Para Functionality"
        }
      ]
    },
    {
      id: 65,
      rarity: 7,
      slot: 2,
      name: "Sharp Jewel 2",
      skills: [
        {
          id: 327,
          level: 1,
          modifiers: {},
          description: "Weapon sharpness does not decrease for a set time after sharpening.",
          skill: 128,
          skillName: "Protective Polish"
        }
      ]
    },
    {
      id: 66,
      rarity: 7,
      slot: 2,
      name: "Shield Jewel 2",
      skills: [
        {
          id: 318,
          level: 1,
          modifiers: {},
          description: "Allows you to guard against ordinarily unblockable attacks.",
          skill: 119,
          skillName: "Guard Up"
        }
      ]
    },
    {
      id: 67,
      rarity: 7,
      slot: 3,
      name: "Dragonseal Jewel 3",
      skills: [
        {
          id: 332,
          level: 1,
          modifiers: {},
          description: "Boosts Elderseal one level.",
          skill: 133,
          skillName: "Elderseal Boost"
        }
      ]
    },
    {
      id: 68,
      rarity: 7,
      slot: 1,
      name: "Trueshot Jewel 1",
      skills: [
        {
          id: 188,
          level: 1,
          modifiers: {},
          description: "Increases the power of bowgun special ammo and Dragon Piercer by 10%.",
          skill: 60,
          skillName: "Special Ammo Boost"
        }
      ]
    },
    {
      id: 69,
      rarity: 7,
      slot: 2,
      name: "Enhancer Jewel 2",
      skills: [
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        }
      ]
    },
    {
      id: 70,
      rarity: 7,
      slot: 3,
      name: "Forceshot Jewel 3",
      skills: [
        {
          id: 117,
          level: 1,
          modifiers: {},
          description: "Increases the power of normal ammo and normal arrows.",
          skill: 35,
          skillName: "Normal Shots"
        }
      ]
    },
    {
      id: 71,
      rarity: 7,
      slot: 2,
      name: "Furor Jewel 2",
      skills: [
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        }
      ]
    },
    {
      id: 72,
      rarity: 7,
      slot: 2,
      name: "Potential Jewel 2",
      skills: [
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        }
      ]
    },
    {
      id: 73,
      rarity: 7,
      slot: 1,
      name: "Paralyzer Jewel 1",
      skills: [
        {
          id: 108,
          level: 1,
          modifiers: {},
          description: "Paralysis buildup +5% Bonus: +10",
          skill: 32,
          skillName: "Paralysis Attack"
        }
      ]
    },
    {
      id: 74,
      rarity: 7,
      slot: 1,
      name: "Sleep Jewel 1",
      skills: [
        {
          id: 111,
          level: 1,
          modifiers: {},
          description: "Sleep buildup +5% Bonus: +10",
          skill: 33,
          skillName: "Sleep Attack"
        }
      ]
    },
    {
      id: 75,
      rarity: 7,
      slot: 1,
      name: "Ironwall Jewel 1",
      skills: [
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 76,
      rarity: 7,
      slot: 2,
      name: "Refresh Jewel 2",
      skills: [
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 77,
      rarity: 7,
      slot: 1,
      name: "Blast Jewel 1",
      skills: [
        {
          id: 114,
          level: 1,
          modifiers: {},
          description: "Blast buildup +5% Bonus: +10",
          skill: 34,
          skillName: "Blast Attack"
        }
      ]
    },
    {
      id: 78,
      rarity: 7,
      slot: 3,
      name: "Sleepcoat Jewel 3",
      skills: [
        {
          id: 330,
          level: 1,
          modifiers: {},
          description: "Lets you use sleep coating.",
          skill: 131,
          skillName: "Sleep Functionality"
        }
      ]
    },
    {
      id: 79,
      rarity: 7,
      slot: 3,
      name: "Blastcoat Jewel 3",
      skills: [
        {
          id: 331,
          level: 1,
          modifiers: {},
          description: "Lets you use blast coating.",
          skill: 132,
          skillName: "Blast Functionality"
        }
      ]
    },
    {
      id: 80,
      rarity: 7,
      slot: 2,
      name: "Throttle Jewel 2",
      skills: [
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        }
      ]
    },
    {
      id: 81,
      rarity: 7,
      slot: 2,
      name: "Challenger Jewel 2",
      skills: [
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        }
      ]
    },
    {
      id: 82,
      rarity: 7,
      slot: 1,
      name: "Attack Jewel 1",
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
      ]
    },
    {
      id: 83,
      rarity: 7,
      slot: 2,
      name: "Flawless Jewel 2",
      skills: [
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        }
      ]
    },
    {
      id: 84,
      rarity: 7,
      slot: 2,
      name: "Magazine Jewel 2",
      skills: [
        {
          id: 187,
          level: 1,
          modifiers: {},
          description: "Loading capacity +1",
          skill: 59,
          skillName: "Capacity Boost"
        }
      ]
    },
    {
      id: 85,
      rarity: 7,
      slot: 2,
      name: "Mighty Jewel 2",
      skills: [
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 86,
      rarity: 8,
      slot: 2,
      name: "Sprinter Jewel 2",
      skills: [
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 87,
      rarity: 8,
      slot: 2,
      name: "Critical Jewel 2",
      skills: [
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        }
      ]
    },
    {
      id: 88,
      rarity: 8,
      slot: 1,
      name: "Artillery Jewel 1",
      skills: [
        {
          id: 190,
          level: 1,
          modifiers: {},
          description: "Increases power of each attack by 10% and reduces Wyvern's Fire cooldown by 15%.",
          skill: 61,
          skillName: "Artillery"
        }
      ]
    },
    {
      id: 89,
      rarity: 8,
      slot: 1,
      name: "Fungiform Jewel 1",
      skills: [
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 90,
      rarity: 8,
      slot: 3,
      name: "Release Jewel 3",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        }
      ]
    },
    {
      id: 91,
      rarity: 8,
      slot: 3,
      name: "Spread Jewel 3",
      skills: [
        {
          id: 119,
          level: 1,
          modifiers: {},
          description: "Increases the attack power of spread ammo, power shot arrows, and Thousand Dragons.",
          skill: 37,
          skillName: "Spread/Power Shots"
        }
      ]
    },
    {
      id: 92,
      rarity: 8,
      slot: 2,
      name: "Charger Jewel 2",
      skills: [
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        }
      ]
    },
    {
      id: 93,
      rarity: 8,
      slot: 3,
      name: "Handicraft Jewel 3",
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
      ]
    },
    {
      id: 94,
      rarity: 8,
      slot: 2,
      name: "Mighty Bow Jewel 2",
      skills: [
        {
          id: 325,
          level: 1,
          modifiers: {},
          description: "Increases max bow charge level by one.",
          skill: 126,
          skillName: "Bow Charge Plus"
        }
      ]
    },
    {
      id: 95,
      rarity: 8,
      slot: 2,
      name: "Mind's Eye Jewel 2",
      skills: [
        {
          id: 314,
          level: 1,
          modifiers: {},
          description: "Prevents attacks from being deflected. Also shortens the distance before ammo and arrows reach maximum power.",
          skill: 115,
          skillName: "Mind's Eye/Ballistics"
        }
      ]
    },
    {
      id: 96,
      rarity: 8,
      slot: 2,
      name: "Draw Jewel 2",
      skills: [
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        }
      ]
    },
    {
      id: 97,
      rarity: 8,
      slot: 3,
      name: "Pierce Jewel 3",
      skills: [
        {
          id: 118,
          level: 1,
          modifiers: {},
          description: "Increases the power of piercing ammo and Dragon Piercer.",
          skill: 36,
          skillName: "Piercing Shots"
        }
      ]
    },
    {
      id: 98,
      rarity: 5,
      slot: 1,
      name: "Maintenance Jewel 1",
      skills: [
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 99,
      rarity: 9,
      slot: 1,
      name: "Survival Jewel 1",
      skills: [
        {
          id: 282,
          level: 1,
          modifiers: {},
          description: "Interactables restore an additional 50 health.",
          skill: 95,
          skillName: "Survival Expert"
        }
      ]
    },
    {
      id: 100,
      rarity: 10,
      slot: 2,
      name: "Guardian Jewel 2",
      skills: [
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 101,
      rarity: 9,
      slot: 2,
      name: "Cooling Jewel 2",
      skills: [
        {
          id: 38,
          level: 1,
          modifiers: {},
          description: "Nullfies heat damage.",
          skill: 14,
          skillName: "Heat Guard"
        }
      ]
    },
    {
      id: 102,
      rarity: 9,
      slot: 2,
      name: "Warming Jewel 2",
      skills: [
        {
          id: 401,
          level: 1,
          modifiers: {},
          description: "Activates skill effect.",
          skill: 166,
          skillName: "Coldproof"
        }
      ]
    },
    {
      id: 103,
      rarity: 11,
      slot: 3,
      name: "Phoenix Jewel 3",
      skills: [
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 104,
      rarity: 9,
      slot: 4,
      name: "Fire Res Jewel+ 4",
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
      ]
    },
    {
      id: 105,
      rarity: 9,
      slot: 4,
      name: "Water Res Jewel+ 4",
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
      ]
    },
    {
      id: 106,
      rarity: 9,
      slot: 4,
      name: "Ice Res Jewel+ 4",
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
      ]
    },
    {
      id: 107,
      rarity: 9,
      slot: 4,
      name: "Thunder Res Jewel+ 4",
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
      ]
    },
    {
      id: 108,
      rarity: 9,
      slot: 4,
      name: "Dragon Res Jewel+ 4",
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
      ]
    },
    {
      id: 109,
      rarity: 11,
      slot: 4,
      name: "Blaze Jewel+ 4",
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
      ]
    },
    {
      id: 110,
      rarity: 11,
      slot: 4,
      name: "Stream Jewel+ 4",
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
      ]
    },
    {
      id: 111,
      rarity: 11,
      slot: 4,
      name: "Frost Jewel+ 4",
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
      ]
    },
    {
      id: 112,
      rarity: 11,
      slot: 4,
      name: "Bolt Jewel+ 4",
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
      ]
    },
    {
      id: 113,
      rarity: 11,
      slot: 4,
      name: "Dragon Jewel+ 4",
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
      ]
    },
    {
      id: 114,
      rarity: 11,
      slot: 4,
      name: "Venom Jewel+ 4",
      skills: [
        {
          id: 106,
          level: 2,
          modifiers: {},
          description: "Poison buildup +10% Bonus: +10",
          skill: 31,
          skillName: "Poison Attack"
        }
      ]
    },
    {
      id: 115,
      rarity: 11,
      slot: 4,
      name: "Paralyzer Jewel+ 4",
      skills: [
        {
          id: 109,
          level: 2,
          modifiers: {},
          description: "Paralysis buildup +10% Bonus: +10",
          skill: 32,
          skillName: "Paralysis Attack"
        }
      ]
    },
    {
      id: 116,
      rarity: 11,
      slot: 4,
      name: "Sleep Jewel+ 4",
      skills: [
        {
          id: 112,
          level: 2,
          modifiers: {},
          description: "Sleep buildup +10% Bonus: +10",
          skill: 33,
          skillName: "Sleep Attack"
        }
      ]
    },
    {
      id: 117,
      rarity: 11,
      slot: 4,
      name: "Blast Jewel+ 4",
      skills: [
        {
          id: 115,
          level: 2,
          modifiers: {},
          description: "Blast buildup +10% Bonus: +10",
          skill: 34,
          skillName: "Blast Attack"
        }
      ]
    },
    {
      id: 118,
      rarity: 11,
      slot: 4,
      name: "Hard Fire Res Jewel 4",
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
      ]
    },
    {
      id: 119,
      rarity: 11,
      slot: 4,
      name: "Hard Water Res Jewel 4",
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
      ]
    },
    {
      id: 120,
      rarity: 11,
      slot: 4,
      name: "Hard Ice Res Jewel 4",
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
      ]
    },
    {
      id: 121,
      rarity: 11,
      slot: 4,
      name: "Hard Thunder Res Jewel 4",
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
      ]
    },
    {
      id: 122,
      rarity: 11,
      slot: 4,
      name: "Hard Dragon Res Jewel 4",
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
      ]
    },
    {
      id: 123,
      rarity: 9,
      slot: 4,
      name: "Antidote Jewel+ 4",
      skills: [
        {
          id: 2,
          level: 2,
          modifiers: {},
          description: "Greatly reduces the number of times you take poison damage.",
          skill: 1,
          skillName: "Poison Resistance"
        }
      ]
    },
    {
      id: 124,
      rarity: 9,
      slot: 4,
      name: "Antipara Jewel+ 4",
      skills: [
        {
          id: 5,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of paralysis by 60%.",
          skill: 2,
          skillName: "Paralysis Resistance"
        }
      ]
    },
    {
      id: 125,
      rarity: 9,
      slot: 4,
      name: "Pep Jewel+ 4",
      skills: [
        {
          id: 8,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of sleep by 60%.",
          skill: 3,
          skillName: "Sleep Resistance"
        }
      ]
    },
    {
      id: 126,
      rarity: 9,
      slot: 4,
      name: "Steadfast Jewel+ 4",
      skills: [
        {
          id: 11,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of stun by 90%.",
          skill: 4,
          skillName: "Stun Resistance"
        }
      ]
    },
    {
      id: 127,
      rarity: 9,
      slot: 4,
      name: "Antiblast Jewel+ 4",
      skills: [
        {
          id: 15,
          level: 2,
          modifiers: {},
          description: "Greatly delays blastblight and greatly reduces blast damage.",
          skill: 6,
          skillName: "Blast Resistance"
        }
      ]
    },
    {
      id: 128,
      rarity: 9,
      slot: 4,
      name: "Suture Jewel+ 4",
      skills: [
        {
          id: 18,
          level: 2,
          modifiers: {},
          description: "Greatly reduces damage while bleeding.",
          skill: 7,
          skillName: "Bleeding Resistance"
        }
      ]
    },
    {
      id: 129,
      rarity: 9,
      slot: 4,
      name: "Def Lock Jewel+ 4",
      skills: [
        {
          id: 21,
          level: 2,
          modifiers: {},
          description: "Reduces the duration of Defense Down by 75%.",
          skill: 8,
          skillName: "Iron Skin"
        }
      ]
    },
    {
      id: 130,
      rarity: 9,
      slot: 4,
      name: "Miasma Jewel+ 4",
      skills: [
        {
          id: 295,
          level: 2,
          modifiers: {},
          description: "Greatly reduces effluvial buildup.",
          skill: 101,
          skillName: "Effluvia Resistance"
        }
      ]
    },
    {
      id: 131,
      rarity: 9,
      slot: 4,
      name: "Hungerless Jewel+ 4",
      skills: [
        {
          id: 208,
          level: 2,
          modifiers: {},
          description: "Extends the time until your stamina cap decreases by 100%.",
          skill: 67,
          skillName: "Hunger Resistance"
        }
      ]
    },
    {
      id: 132,
      rarity: 9,
      slot: 4,
      name: "Recovery Jewel+ 4",
      skills: [
        {
          id: 60,
          level: 2,
          modifiers: {},
          description: "Triples the speed at which you heal recoverable damage.",
          skill: 19,
          skillName: "Recovery Speed"
        }
      ]
    },
    {
      id: 133,
      rarity: 9,
      slot: 4,
      name: "Tip Toe Jewel+ 4",
      skills: [
        {
          id: 274,
          level: 2,
          modifiers: {},
          description: "Makes it moderately easier for monsters to lose sight of you.",
          skill: 90,
          skillName: "Stealth"
        }
      ]
    },
    {
      id: 134,
      rarity: 9,
      slot: 4,
      name: "Intimidator Jewel+ 4",
      skills: [
        {
          id: 306,
          level: 2,
          modifiers: {},
          description: "Highly discourages monsters from engaging you even if you've been spotted.",
          skill: 108,
          skillName: "Intimidator"
        }
      ]
    },
    {
      id: 135,
      rarity: 9,
      slot: 4,
      name: "Meowster Jewel+ 4",
      skills: [
        {
          id: 256,
          level: 2,
          modifiers: {},
          description: "Increases Palico attack power and defense by 10%.",
          skill: 85,
          skillName: "Palico Rally"
        }
      ]
    },
    {
      id: 136,
      rarity: 9,
      slot: 4,
      name: "Hard Tip Toe Jewel 4",
      skills: [
        {
          id: 275,
          level: 3,
          modifiers: {},
          description: "Makes it much easier for monsters to lose sight of you.",
          skill: 90,
          skillName: "Stealth"
        }
      ]
    },
    {
      id: 137,
      rarity: 9,
      slot: 4,
      name: "Hard Intimidator Jewel 4",
      skills: [
        {
          id: 307,
          level: 3,
          modifiers: {},
          description: "Prevents monsters from engaging you even if you've been spotted.",
          skill: 108,
          skillName: "Intimidator"
        }
      ]
    },
    {
      id: 138,
      rarity: 9,
      slot: 4,
      name: "Hard Meowster Jewel 4",
      skills: [
        {
          id: 257,
          level: 3,
          modifiers: {},
          description: "Increases Palico attack power and defense by 15%.",
          skill: 85,
          skillName: "Palico Rally"
        }
      ]
    },
    {
      id: 139,
      rarity: 12,
      slot: 4,
      name: "Trueshot Jewel+ 4",
      skills: [
        {
          id: 189,
          level: 2,
          modifiers: {},
          description: "Increases the power of bowgun special ammo and Dragon Piercer by 20%.",
          skill: 60,
          skillName: "Special Ammo Boost"
        }
      ]
    },
    {
      id: 140,
      rarity: 9,
      slot: 4,
      name: "Heavy Artillery Jewel+ 4",
      skills: [
        {
          id: 194,
          level: 2,
          modifiers: {},
          description: "Firepower +100%",
          skill: 62,
          skillName: "Heavy Artillery"
        }
      ]
    },
    {
      id: 141,
      rarity: 9,
      slot: 4,
      name: "Botany Jewel+ 4",
      skills: [
        {
          id: 261,
          level: 2,
          modifiers: {},
          description: "One extra consumable herb, fruit, nut, or seed item per gather.",
          skill: 86,
          skillName: "Botanist"
        }
      ]
    },
    {
      id: 142,
      rarity: 9,
      slot: 4,
      name: "Geology Jewel+ 4",
      skills: [
        {
          id: 265,
          level: 2,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles and special item gathering points.",
          skill: 87,
          skillName: "Geologist"
        }
      ]
    },
    {
      id: 143,
      rarity: 9,
      slot: 4,
      name: "Survival Jewel+ 4",
      skills: [
        {
          id: 283,
          level: 2,
          modifiers: {},
          description: "Interactables restore an additional 80 health.",
          skill: 95,
          skillName: "Survival Expert"
        }
      ]
    },
    {
      id: 144,
      rarity: 9,
      slot: 4,
      name: "Mirewalker Jewel+ 4",
      skills: [
        {
          id: 286,
          level: 2,
          modifiers: {},
          description: "Increases your evade window and prevents lowered movement speed.",
          skill: 96,
          skillName: "Aquatic/Polar Mobility"
        }
      ]
    },
    {
      id: 145,
      rarity: 9,
      slot: 4,
      name: "Specimen Jewel+ 4",
      skills: [
        {
          id: 292,
          level: 2,
          modifiers: {},
          description: "Greatly increases the chances of a corpse being left behind.",
          skill: 100,
          skillName: "Entomologist"
        }
      ]
    },
    {
      id: 146,
      rarity: 9,
      slot: 4,
      name: "Sonorous Jewel+ 4",
      skills: [
        {
          id: 337,
          level: 2,
          modifiers: {},
          description: "Greatly increases the effect duration of hunting horn melodies.",
          skill: 58,
          skillName: "Horn Maestro"
        }
      ]
    },
    {
      id: 147,
      rarity: 11,
      slot: 4,
      name: "Hard Botany Jewel+ 4",
      skills: [
        {
          id: 263,
          level: 4,
          modifiers: {},
          description: "One extra consumable herb, fruit, nut, seed, insect or mushroom item per gather.",
          skill: 86,
          skillName: "Botanist"
        }
      ]
    },
    {
      id: 148,
      rarity: 11,
      slot: 4,
      name: "Hard Geology Jewel 4",
      skills: [
        {
          id: 266,
          level: 3,
          modifiers: {},
          description: "Allows you to gather one extra time from bonepiles, gathering points, and mining outcrops.",
          skill: 87,
          skillName: "Geologist"
        }
      ]
    },
    {
      id: 149,
      rarity: 11,
      slot: 4,
      name: "Hard Survival Jewel 4",
      skills: [
        {
          id: 284,
          level: 3,
          modifiers: {},
          description: "Interactables restore an additional 100 health.",
          skill: 95,
          skillName: "Survival Expert"
        }
      ]
    },
    {
      id: 150,
      rarity: 11,
      slot: 4,
      name: "Hard Specimen Jewel 4",
      skills: [
        {
          id: 293,
          level: 3,
          modifiers: {},
          description: "Makes it so corpses will always be left behind.",
          skill: 100,
          skillName: "Entomologist"
        }
      ]
    },
    {
      id: 151,
      rarity: 9,
      slot: 4,
      name: "Enduring Jewel+ 4",
      skills: [
        {
          id: 232,
          level: 2,
          modifiers: {},
          description: "Item effect duration +25%",
          skill: 73,
          skillName: "Item Prolonger"
        }
      ]
    },
    {
      id: 152,
      rarity: 9,
      slot: 4,
      name: "Defense Jewel+ 4",
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
      ]
    },
    {
      id: 153,
      rarity: 11,
      slot: 4,
      name: "Hard Enduring Jewel 4",
      skills: [
        {
          id: 233,
          level: 3,
          modifiers: {},
          description: "Item effect duration +50%",
          skill: 73,
          skillName: "Item Prolonger"
        }
      ]
    },
    {
      id: 154,
      rarity: 10,
      slot: 4,
      name: "Hard Defense Jewel 4",
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
      ]
    },
    {
      id: 155,
      rarity: 9,
      slot: 4,
      name: "Artillery Jewel+ 4",
      skills: [
        {
          id: 191,
          level: 2,
          modifiers: {},
          description: "Increases power of each attack by 20% and reduces Wyvern's Fire cooldown by 30%.",
          skill: 61,
          skillName: "Artillery"
        }
      ]
    },
    {
      id: 156,
      rarity: 12,
      slot: 4,
      name: "Earplug Jewel+ 4",
      skills: [
        {
          id: 24,
          level: 2,
          modifiers: {},
          description: "Reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        }
      ]
    },
    {
      id: 157,
      rarity: 12,
      slot: 4,
      name: "Wind Resist Jewel+ 4",
      skills: [
        {
          id: 29,
          level: 2,
          modifiers: {},
          description: "Reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        }
      ]
    },
    {
      id: 158,
      rarity: 12,
      slot: 4,
      name: "Attack Jewel+ 4",
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
      ]
    },
    {
      id: 159,
      rarity: 12,
      slot: 4,
      name: "Expert Jewel+ 4",
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
      ]
    },
    {
      id: 160,
      rarity: 12,
      slot: 4,
      name: "Handicraft Jewel+ 4",
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
      ]
    },
    {
      id: 161,
      rarity: 11,
      slot: 4,
      name: "Throttle Jewel+ 4",
      skills: [
        {
          id: 162,
          level: 2,
          modifiers: {},
          description: "While active, increases affinity by 20% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        }
      ]
    },
    {
      id: 162,
      rarity: 11,
      slot: 4,
      name: "Challenger Jewel+ 4",
      skills: [
        {
          id: 167,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +8 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        }
      ]
    },
    {
      id: 163,
      rarity: 11,
      slot: 4,
      name: "Potential Jewel+ 4",
      skills: [
        {
          id: 175,
          level: 2,
          modifiers: {},
          description: "While active, increases attack power by 5% and increases defense by 50 points.",
          skill: 54,
          skillName: "Heroics"
        }
      ]
    },
    {
      id: 164,
      rarity: 11,
      slot: 4,
      name: "Furor Jewel+ 4",
      skills: [
        {
          id: 181,
          level: 2,
          modifiers: {},
          description: "While active, grants attack +10.",
          skill: 56,
          skillName: "Resentment"
        }
      ]
    },
    {
      id: 165,
      rarity: 10,
      slot: 4,
      name: "Physique Jewel+ 4",
      skills: [
        {
          id: 199,
          level: 2,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 20%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 166,
      rarity: 11,
      slot: 4,
      name: "Evasion Jewel+ 4",
      skills: [
        {
          id: 211,
          level: 2,
          modifiers: {},
          description: "Slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 167,
      rarity: 10,
      slot: 4,
      name: "Ironwall Jewel+ 4",
      skills: [
        {
          id: 219,
          level: 2,
          modifiers: {},
          description: "Slightly decreases the impact of attacks and reduces stamina depletion by 15%.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 168,
      rarity: 10,
      slot: 4,
      name: "Friendship Jewel+ 4",
      skills: [
        {
          id: 227,
          level: 2,
          modifiers: {},
          description: "Items affect nearby allies in a wider radius with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 169,
      rarity: 10,
      slot: 4,
      name: "Drain/Physique Jewel 4",
      skills: [
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 170,
      rarity: 9,
      slot: 4,
      name: "Fortitude/Physique Jewel 4",
      skills: [
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 171,
      rarity: 9,
      slot: 4,
      name: "Crisis/Physique Jewel 4",
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
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 172,
      rarity: 10,
      slot: 4,
      name: "Ironwall/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 173,
      rarity: 10,
      slot: 4,
      name: "Friendship/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 174,
      rarity: 9,
      slot: 4,
      name: "Satiated/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 175,
      rarity: 9,
      slot: 4,
      name: "Stonethrower/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 176,
      rarity: 10,
      slot: 4,
      name: "Resistor/Physique Jewel 4",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 177,
      rarity: 10,
      slot: 4,
      name: "Flight/Physique Jewel 4",
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
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 178,
      rarity: 10,
      slot: 4,
      name: "Sprinter/Physique Jewel 4",
      skills: [
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 179,
      rarity: 10,
      slot: 4,
      name: "Refresh/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 180,
      rarity: 10,
      slot: 4,
      name: "Jumping/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 181,
      rarity: 10,
      slot: 4,
      name: "Sheath/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 182,
      rarity: 10,
      slot: 4,
      name: "Gobbler/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 183,
      rarity: 10,
      slot: 4,
      name: "Grinder/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 184,
      rarity: 10,
      slot: 4,
      name: "Bomber/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 185,
      rarity: 10,
      slot: 4,
      name: "Fungiform/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 186,
      rarity: 9,
      slot: 4,
      name: "Slider/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
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
      ]
    },
    {
      id: 187,
      rarity: 9,
      slot: 4,
      name: "Guardian/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 188,
      rarity: 10,
      slot: 4,
      name: "Drain/Evasion Jewel 4",
      skills: [
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 189,
      rarity: 9,
      slot: 4,
      name: "Fortitude/Evasion Jewel 4",
      skills: [
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 190,
      rarity: 9,
      slot: 4,
      name: "Crisis/Evasion Jewel 4",
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
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 191,
      rarity: 10,
      slot: 4,
      name: "Ironwall/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 192,
      rarity: 10,
      slot: 4,
      name: "Friendship/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 193,
      rarity: 9,
      slot: 4,
      name: "Satiated/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 194,
      rarity: 9,
      slot: 4,
      name: "Stonethrower/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 195,
      rarity: 10,
      slot: 4,
      name: "Resistor/Evasion Jewel 4",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 196,
      rarity: 10,
      slot: 4,
      name: "Flight/Evasion Jewel 4",
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
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 197,
      rarity: 10,
      slot: 4,
      name: "Sprinter/Evasion Jewel 4",
      skills: [
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 198,
      rarity: 10,
      slot: 4,
      name: "Refresh/Evasion Jewel 4",
      skills: [
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 199,
      rarity: 10,
      slot: 4,
      name: "Jumping/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 200,
      rarity: 10,
      slot: 4,
      name: "Sheath/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 201,
      rarity: 10,
      slot: 4,
      name: "Gobbler/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 202,
      rarity: 10,
      slot: 4,
      name: "Grinder/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 203,
      rarity: 10,
      slot: 4,
      name: "Bomber/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 204,
      rarity: 10,
      slot: 4,
      name: "Fungiform/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 205,
      rarity: 9,
      slot: 4,
      name: "Slider/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
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
      ]
    },
    {
      id: 206,
      rarity: 9,
      slot: 4,
      name: "Guardian/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 207,
      rarity: 10,
      slot: 4,
      name: "Drain/Attack Jewel 4",
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
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 208,
      rarity: 9,
      slot: 4,
      name: "Fortitude/Attack Jewel 4",
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
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 209,
      rarity: 9,
      slot: 4,
      name: "Crisis/Attack Jewel 4",
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
          id: 185,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skill: 57,
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 210,
      rarity: 10,
      slot: 4,
      name: "Ironwall/Attack Jewel 4",
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
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 211,
      rarity: 10,
      slot: 4,
      name: "Friendship/Attack Jewel 4",
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
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 212,
      rarity: 9,
      slot: 4,
      name: "Satiated/Attack Jewel 4",
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
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 213,
      rarity: 9,
      slot: 4,
      name: "Stonethrower/Attack Jewel 4",
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
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 214,
      rarity: 10,
      slot: 4,
      name: "Resistor/Attack Jewel 4",
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
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        }
      ]
    },
    {
      id: 215,
      rarity: 10,
      slot: 4,
      name: "Flight/Attack Jewel 4",
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
          id: 160,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skill: 50,
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 216,
      rarity: 10,
      slot: 4,
      name: "Sprinter/Attack Jewel 4",
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
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 217,
      rarity: 10,
      slot: 4,
      name: "Refresh/Attack Jewel 4",
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
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 218,
      rarity: 10,
      slot: 4,
      name: "Jumping/Attack Jewel 4",
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
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 219,
      rarity: 10,
      slot: 4,
      name: "Sheath/Attack Jewel 4",
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
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 220,
      rarity: 10,
      slot: 4,
      name: "Gobbler/Attack Jewel 4",
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
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 221,
      rarity: 10,
      slot: 4,
      name: "Grinder/Attack Jewel 4",
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
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 222,
      rarity: 10,
      slot: 4,
      name: "Bomber/Attack Jewel 4",
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
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 223,
      rarity: 10,
      slot: 4,
      name: "Fungiform/Attack Jewel 4",
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
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 224,
      rarity: 9,
      slot: 4,
      name: "Slider/Attack Jewel 4",
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
          id: 304,
          level: 1,
          modifiers: {
            affinity: 30
          },
          description: "+30% Affinity for 15 seconds after sliding.",
          skill: 107,
          skillName: "Affinity Sliding"
        }
      ]
    },
    {
      id: 225,
      rarity: 9,
      slot: 4,
      name: "Guardian/Attack Jewel 4",
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
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 226,
      rarity: 10,
      slot: 4,
      name: "Drain/Expert Jewel 4",
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
        },
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 227,
      rarity: 9,
      slot: 4,
      name: "Fortitude/Expert Jewel 4",
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
        },
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 228,
      rarity: 9,
      slot: 4,
      name: "Crisis/Expert Jewel 4",
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
        },
        {
          id: 185,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skill: 57,
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 229,
      rarity: 10,
      slot: 4,
      name: "Ironwall/Expert Jewel 4",
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
        },
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 230,
      rarity: 10,
      slot: 4,
      name: "Friendship/Expert Jewel 4",
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
        },
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 231,
      rarity: 9,
      slot: 4,
      name: "Satiated/Expert Jewel 4",
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
        },
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 232,
      rarity: 9,
      slot: 4,
      name: "Stonethrower/Expert Jewel 4",
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
        },
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 233,
      rarity: 10,
      slot: 4,
      name: "Resistor/Expert Jewel 4",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        },
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
      ]
    },
    {
      id: 234,
      rarity: 10,
      slot: 4,
      name: "Flight/Expert Jewel 4",
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
        },
        {
          id: 160,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skill: 50,
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 235,
      rarity: 10,
      slot: 4,
      name: "Sprinter/Expert Jewel 4",
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
        },
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 236,
      rarity: 10,
      slot: 4,
      name: "Refresh/Expert Jewel 4",
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
        },
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 237,
      rarity: 10,
      slot: 4,
      name: "Jumping/Expert Jewel 4",
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
        },
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 238,
      rarity: 10,
      slot: 4,
      name: "Sheath/Expert Jewel 4",
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
        },
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 239,
      rarity: 10,
      slot: 4,
      name: "Gobbler/Expert Jewel 4",
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
        },
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 240,
      rarity: 10,
      slot: 4,
      name: "Grinder/Expert Jewel 4",
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
        },
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 241,
      rarity: 10,
      slot: 4,
      name: "Bomber/Expert Jewel 4",
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
        },
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 242,
      rarity: 10,
      slot: 4,
      name: "Fungiform/Expert Jewel 4",
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
        },
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 243,
      rarity: 9,
      slot: 4,
      name: "Slider/Expert Jewel 4",
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
      ]
    },
    {
      id: 244,
      rarity: 9,
      slot: 4,
      name: "Guardian/Expert Jewel 4",
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
        },
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 245,
      rarity: 11,
      slot: 4,
      name: "Drain/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 246,
      rarity: 10,
      slot: 4,
      name: "Fortitude/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 247,
      rarity: 10,
      slot: 4,
      name: "Crisis/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 185,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skill: 57,
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 248,
      rarity: 11,
      slot: 4,
      name: "Ironwall/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 249,
      rarity: 11,
      slot: 4,
      name: "Friendship/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 250,
      rarity: 10,
      slot: 4,
      name: "Satiated/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 251,
      rarity: 10,
      slot: 4,
      name: "Stonethrower/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 252,
      rarity: 11,
      slot: 4,
      name: "Resistor/Release Jewel 4",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        },
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        }
      ]
    },
    {
      id: 253,
      rarity: 11,
      slot: 4,
      name: "Flight/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 160,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skill: 50,
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 254,
      rarity: 11,
      slot: 4,
      name: "Sprinter/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 255,
      rarity: 11,
      slot: 4,
      name: "Refresh/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 256,
      rarity: 11,
      slot: 4,
      name: "Jumping/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 257,
      rarity: 11,
      slot: 4,
      name: "Sheath/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 258,
      rarity: 11,
      slot: 4,
      name: "Gobbler/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 259,
      rarity: 11,
      slot: 4,
      name: "Grinder/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 260,
      rarity: 11,
      slot: 4,
      name: "Bomber/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 261,
      rarity: 11,
      slot: 4,
      name: "Fungiform/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 262,
      rarity: 10,
      slot: 4,
      name: "Slider/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
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
      ]
    },
    {
      id: 263,
      rarity: 10,
      slot: 4,
      name: "Guardian/Release Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 264,
      rarity: 11,
      slot: 4,
      name: "Drain/Handicraft Jewel 4",
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
        },
        {
          id: 156,
          level: 1,
          modifiers: {},
          description: "Exhaust power +20%",
          skill: 48,
          skillName: "Stamina Thief"
        }
      ]
    },
    {
      id: 265,
      rarity: 10,
      slot: 4,
      name: "Fortitude/Handicraft Jewel 4",
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
        },
        {
          id: 179,
          level: 1,
          modifiers: {},
          description: "Increases attack by 10% and defense by 15% with each use.",
          skill: 55,
          skillName: "Fortify"
        }
      ]
    },
    {
      id: 266,
      rarity: 10,
      slot: 4,
      name: "Crisis/Handicraft Jewel 4",
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
        },
        {
          id: 185,
          level: 1,
          modifiers: {},
          description: "While active, greatly improves evasion invulnerability time and reduces stamina depletion.",
          skill: 57,
          skillName: "Resuscitate"
        }
      ]
    },
    {
      id: 267,
      rarity: 11,
      slot: 4,
      name: "Ironwall/Handicraft Jewel 4",
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
        },
        {
          id: 218,
          level: 1,
          modifiers: {},
          description: "Very slightly decreases the impact of attacks.",
          skill: 70,
          skillName: "Guard"
        }
      ]
    },
    {
      id: 268,
      rarity: 11,
      slot: 4,
      name: "Friendship/Handicraft Jewel 4",
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
        },
        {
          id: 226,
          level: 1,
          modifiers: {},
          description: "Items affect nearby allies with 33% of their efficacy.",
          skill: 72,
          skillName: "Wide-Range"
        }
      ]
    },
    {
      id: 269,
      rarity: 10,
      slot: 4,
      name: "Satiated/Handicraft Jewel 4",
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
        },
        {
          id: 234,
          level: 1,
          modifiers: {},
          description: "Activates 25% of the time.",
          skill: 74,
          skillName: "Free Meal"
        }
      ]
    },
    {
      id: 270,
      rarity: 10,
      slot: 4,
      name: "Stonethrower/Handicraft Jewel 4",
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
        },
        {
          id: 270,
          level: 1,
          modifiers: {},
          description: "Increases the loading capacity for slinger ammo collected from the ground or plants.",
          skill: 89,
          skillName: "Slinger Capacity"
        }
      ]
    },
    {
      id: 271,
      rarity: 11,
      slot: 4,
      name: "Resistor/Handicraft Jewel 4",
      skills: [
        {
          id: 77,
          level: 1,
          modifiers: {},
          description: "Reduces the duration of all elemental blights by 50%.",
          skill: 25,
          skillName: "Blight Resistance"
        },
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
      ]
    },
    {
      id: 272,
      rarity: 11,
      slot: 4,
      name: "Flight/Handicraft Jewel 4",
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
        },
        {
          id: 160,
          level: 1,
          modifiers: {},
          description: "Jumping attack power +30%",
          skill: 50,
          skillName: "Airborne"
        }
      ]
    },
    {
      id: 273,
      rarity: 11,
      slot: 4,
      name: "Sprinter/Handicraft Jewel 4",
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
        },
        {
          id: 195,
          level: 1,
          modifiers: {},
          description: "Reduces continuous stamina depletion by 15%.",
          skill: 63,
          skillName: "Marathon Runner"
        }
      ]
    },
    {
      id: 274,
      rarity: 11,
      slot: 4,
      name: "Refresh/Handicraft Jewel 4",
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
        },
        {
          id: 204,
          level: 1,
          modifiers: {},
          description: "Stamina recovery speed +10%",
          skill: 66,
          skillName: "Stamina Surge"
        }
      ]
    },
    {
      id: 275,
      rarity: 11,
      slot: 4,
      name: "Jumping/Handicraft Jewel 4",
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
        },
        {
          id: 215,
          level: 1,
          modifiers: {},
          description: "Slightly extends evasion distance.",
          skill: 69,
          skillName: "Evade Extender"
        }
      ]
    },
    {
      id: 276,
      rarity: 11,
      slot: 4,
      name: "Sheath/Handicraft Jewel 4",
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
        },
        {
          id: 223,
          level: 1,
          modifiers: {},
          description: "Slightly increases sheathing speed.",
          skill: 71,
          skillName: "Quick Sheath"
        }
      ]
    },
    {
      id: 277,
      rarity: 11,
      slot: 4,
      name: "Gobbler/Handicraft Jewel 4",
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
        },
        {
          id: 235,
          level: 1,
          modifiers: {},
          description: "Slightly increases item use speed.",
          skill: 75,
          skillName: "Speed Eating"
        }
      ]
    },
    {
      id: 278,
      rarity: 11,
      slot: 4,
      name: "Grinder/Handicraft Jewel 4",
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
        },
        {
          id: 238,
          level: 1,
          modifiers: {},
          description: "Removes one cycle from the sharpening process.",
          skill: 76,
          skillName: "Speed Sharpening"
        }
      ]
    },
    {
      id: 279,
      rarity: 11,
      slot: 4,
      name: "Bomber/Handicraft Jewel 4",
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
        },
        {
          id: 241,
          level: 1,
          modifiers: {},
          description: "Explosive power +10%",
          skill: 77,
          skillName: "Bombardier"
        }
      ]
    },
    {
      id: 280,
      rarity: 11,
      slot: 4,
      name: "Fungiform/Handicraft Jewel 4",
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
        },
        {
          id: 244,
          level: 1,
          modifiers: {},
          description: "Lets you digest blue mushrooms and toadstools.",
          skill: 78,
          skillName: "Mushroomancer"
        }
      ]
    },
    {
      id: 281,
      rarity: 10,
      slot: 4,
      name: "Slider/Handicraft Jewel 4",
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
      ]
    },
    {
      id: 282,
      rarity: 10,
      slot: 4,
      name: "Guardian/Handicraft Jewel 4",
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
        },
        {
          id: 338,
          level: 1,
          modifiers: {},
          description: "While active, increases attack power by 5%.",
          skill: 138,
          skillName: "Offensive Guard"
        }
      ]
    },
    {
      id: 283,
      rarity: 10,
      slot: 4,
      name: "Footing/Protection Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 284,
      rarity: 10,
      slot: 4,
      name: "Charger/Protection Jewel 4",
      skills: [
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 285,
      rarity: 10,
      slot: 4,
      name: "Enhancer/Protection Jewel 4",
      skills: [
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 286,
      rarity: 10,
      slot: 4,
      name: "Destroyer/Protection Jewel 4",
      skills: [
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 287,
      rarity: 10,
      slot: 4,
      name: "KO/Protection Jewel 4",
      skills: [
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 288,
      rarity: 10,
      slot: 4,
      name: "Potential/Protection Jewel 4",
      skills: [
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 289,
      rarity: 10,
      slot: 4,
      name: "Wind Resist/Protection Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 290,
      rarity: 10,
      slot: 4,
      name: "Draw/Protection Jewel 4",
      skills: [
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 291,
      rarity: 10,
      slot: 4,
      name: "Throttle/Protection Jewel 4",
      skills: [
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 292,
      rarity: 10,
      slot: 4,
      name: "Challenger/Protection Jewel 4",
      skills: [
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 293,
      rarity: 10,
      slot: 4,
      name: "Flawless/Protection Jewel 4",
      skills: [
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 294,
      rarity: 10,
      slot: 4,
      name: "Furor/Protection Jewel 4",
      skills: [
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 295,
      rarity: 10,
      slot: 4,
      name: "Mighty/Protection Jewel 4",
      skills: [
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        },
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 296,
      rarity: 10,
      slot: 4,
      name: "Brace/Protection Jewel 4",
      skills: [
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        },
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 297,
      rarity: 11,
      slot: 4,
      name: "Phoenix/Protection Jewel 4",
      skills: [
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 298,
      rarity: 11,
      slot: 4,
      name: "Earplug/Protection Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 299,
      rarity: 11,
      slot: 4,
      name: "Critical/Protection Jewel 4",
      skills: [
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 300,
      rarity: 11,
      slot: 4,
      name: "Tenderizer/Protection Jewel 4",
      skills: [
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 301,
      rarity: 11,
      slot: 4,
      name: "Handicraft/Protection Jewel 4",
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
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 302,
      rarity: 10,
      slot: 4,
      name: "Release/Protection Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 252,
          level: 1,
          modifiers: {},
          description: "While active, reduces damage taken by 15%.",
          skill: 84,
          skillName: "Divine Blessing"
        }
      ]
    },
    {
      id: 303,
      rarity: 10,
      slot: 4,
      name: "Footing/Medicine Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        }
      ]
    },
    {
      id: 304,
      rarity: 10,
      slot: 4,
      name: "Charger/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        }
      ]
    },
    {
      id: 305,
      rarity: 10,
      slot: 4,
      name: "Enhancer/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        }
      ]
    },
    {
      id: 306,
      rarity: 10,
      slot: 4,
      name: "Destroyer/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        }
      ]
    },
    {
      id: 307,
      rarity: 10,
      slot: 4,
      name: "KO/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        }
      ]
    },
    {
      id: 308,
      rarity: 10,
      slot: 4,
      name: "Potential/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        }
      ]
    },
    {
      id: 309,
      rarity: 10,
      slot: 4,
      name: "Wind Resist/Medicine Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        }
      ]
    },
    {
      id: 310,
      rarity: 10,
      slot: 4,
      name: "Draw/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        }
      ]
    },
    {
      id: 311,
      rarity: 10,
      slot: 4,
      name: "Throttle/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        }
      ]
    },
    {
      id: 312,
      rarity: 10,
      slot: 4,
      name: "Challenger/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        }
      ]
    },
    {
      id: 313,
      rarity: 10,
      slot: 4,
      name: "Flawless/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        }
      ]
    },
    {
      id: 314,
      rarity: 10,
      slot: 4,
      name: "Furor/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        }
      ]
    },
    {
      id: 315,
      rarity: 10,
      slot: 4,
      name: "Mighty/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 316,
      rarity: 10,
      slot: 4,
      name: "Brace/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 317,
      rarity: 11,
      slot: 4,
      name: "Phoenix/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 318,
      rarity: 11,
      slot: 4,
      name: "Earplug/Medicine Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        }
      ]
    },
    {
      id: 319,
      rarity: 11,
      slot: 4,
      name: "Critical/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        }
      ]
    },
    {
      id: 320,
      rarity: 11,
      slot: 4,
      name: "Tenderizer/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        }
      ]
    },
    {
      id: 321,
      rarity: 11,
      slot: 4,
      name: "Handicraft/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
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
      ]
    },
    {
      id: 322,
      rarity: 11,
      slot: 4,
      name: "Release/Medicine Jewel 4",
      skills: [
        {
          id: 56,
          level: 1,
          modifiers: {},
          description: "Recovery +10%",
          skill: 18,
          skillName: "Recovery Up"
        },
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        }
      ]
    },
    {
      id: 323,
      rarity: 10,
      slot: 4,
      name: "Footing/Vitality Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
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
      ]
    },
    {
      id: 324,
      rarity: 10,
      slot: 4,
      name: "Charger/Vitality Jewel 4",
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
        },
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        }
      ]
    },
    {
      id: 325,
      rarity: 10,
      slot: 4,
      name: "Enhancer/Vitality Jewel 4",
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
        },
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        }
      ]
    },
    {
      id: 326,
      rarity: 10,
      slot: 4,
      name: "Destroyer/Vitality Jewel 4",
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
        },
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        }
      ]
    },
    {
      id: 327,
      rarity: 10,
      slot: 4,
      name: "KO/Vitality Jewel 4",
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
        },
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        }
      ]
    },
    {
      id: 328,
      rarity: 10,
      slot: 4,
      name: "Potential/Vitality Jewel 4",
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
        },
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        }
      ]
    },
    {
      id: 329,
      rarity: 10,
      slot: 4,
      name: "Wind Resist/Vitality Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
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
      ]
    },
    {
      id: 330,
      rarity: 10,
      slot: 4,
      name: "Draw/Vitality Jewel 4",
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
        },
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        }
      ]
    },
    {
      id: 331,
      rarity: 10,
      slot: 4,
      name: "Throttle/Vitality Jewel 4",
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
        },
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        }
      ]
    },
    {
      id: 332,
      rarity: 10,
      slot: 4,
      name: "Challenger/Vitality Jewel 4",
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
        },
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        }
      ]
    },
    {
      id: 333,
      rarity: 10,
      slot: 4,
      name: "Flawless/Vitality Jewel 4",
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
        },
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        }
      ]
    },
    {
      id: 334,
      rarity: 10,
      slot: 4,
      name: "Furor/Vitality Jewel 4",
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
        },
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        }
      ]
    },
    {
      id: 335,
      rarity: 10,
      slot: 4,
      name: "Mighty/Vitality Jewel 4",
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
        },
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 336,
      rarity: 10,
      slot: 4,
      name: "Brace/Vitality Jewel 4",
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
        },
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 337,
      rarity: 11,
      slot: 4,
      name: "Phoenix/Vitality Jewel 4",
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
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 338,
      rarity: 11,
      slot: 4,
      name: "Earplug/Vitality Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
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
      ]
    },
    {
      id: 339,
      rarity: 11,
      slot: 4,
      name: "Critical/Vitality Jewel 4",
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
        },
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        }
      ]
    },
    {
      id: 340,
      rarity: 11,
      slot: 4,
      name: "Tenderizer/Vitality Jewel 4",
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
        },
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        }
      ]
    },
    {
      id: 341,
      rarity: 11,
      slot: 4,
      name: "Handicraft/Vitality Jewel 4",
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
        },
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
      ]
    },
    {
      id: 342,
      rarity: 11,
      slot: 4,
      name: "Release/Vitality Jewel 4",
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
        },
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        }
      ]
    },
    {
      id: 343,
      rarity: 10,
      slot: 4,
      name: "Footing/Maintenance Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 344,
      rarity: 10,
      slot: 4,
      name: "Charger/Maintenance Jewel 4",
      skills: [
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 345,
      rarity: 10,
      slot: 4,
      name: "Enhancer/Maintenance Jewel 4",
      skills: [
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 346,
      rarity: 10,
      slot: 4,
      name: "Destroyer/Maintenance Jewel 4",
      skills: [
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 347,
      rarity: 10,
      slot: 4,
      name: "KO/Maintenance Jewel 4",
      skills: [
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 348,
      rarity: 10,
      slot: 4,
      name: "Potential/Maintenance Jewel 4",
      skills: [
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 349,
      rarity: 10,
      slot: 4,
      name: "Wind Resist/Maintenance Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 350,
      rarity: 10,
      slot: 4,
      name: "Draw/Maintenance Jewel 4",
      skills: [
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 351,
      rarity: 10,
      slot: 4,
      name: "Throttle/Maintenance Jewel 4",
      skills: [
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 352,
      rarity: 10,
      slot: 4,
      name: "Challenger/Maintenance Jewel 4",
      skills: [
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 353,
      rarity: 10,
      slot: 4,
      name: "Flawless/Maintenance Jewel 4",
      skills: [
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 354,
      rarity: 10,
      slot: 4,
      name: "Furor/Maintenance Jewel 4",
      skills: [
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 355,
      rarity: 10,
      slot: 4,
      name: "Mighty/Maintenance Jewel 4",
      skills: [
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 356,
      rarity: 10,
      slot: 4,
      name: "Brace/Maintenance Jewel 4",
      skills: [
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 357,
      rarity: 11,
      slot: 4,
      name: "Phoenix/Maintenance Jewel 4",
      skills: [
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 358,
      rarity: 11,
      slot: 4,
      name: "Earplug/Maintenance Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 359,
      rarity: 11,
      slot: 4,
      name: "Critical/Maintenance Jewel 4",
      skills: [
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 360,
      rarity: 11,
      slot: 4,
      name: "Tenderizer/Maintenance Jewel 4",
      skills: [
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 361,
      rarity: 11,
      slot: 4,
      name: "Handicraft/Maintenance Jewel 4",
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
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 362,
      rarity: 11,
      slot: 4,
      name: "Release/Maintenance Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 301,
          level: 1,
          modifiers: {},
          description: "Shortens time until reuse by 10%.",
          skill: 106,
          skillName: "Tool Specialist"
        }
      ]
    },
    {
      id: 363,
      rarity: 11,
      slot: 4,
      name: "Footing/Physique Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 364,
      rarity: 11,
      slot: 4,
      name: "Charger/Physique Jewel 4",
      skills: [
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 365,
      rarity: 11,
      slot: 4,
      name: "Enhancer/Physique Jewel 4",
      skills: [
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 366,
      rarity: 11,
      slot: 4,
      name: "Destroyer/Physique Jewel 4",
      skills: [
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 367,
      rarity: 11,
      slot: 4,
      name: "KO/Physique Jewel 4",
      skills: [
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 368,
      rarity: 11,
      slot: 4,
      name: "Potential/Physique Jewel 4",
      skills: [
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 369,
      rarity: 11,
      slot: 4,
      name: "Wind Resist/Physique Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 370,
      rarity: 11,
      slot: 4,
      name: "Draw/Physique Jewel 4",
      skills: [
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 371,
      rarity: 11,
      slot: 4,
      name: "Throttle/Physique Jewel 4",
      skills: [
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 372,
      rarity: 11,
      slot: 4,
      name: "Challenger/Physique Jewel 4",
      skills: [
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 373,
      rarity: 11,
      slot: 4,
      name: "Flawless/Physique Jewel 4",
      skills: [
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 374,
      rarity: 11,
      slot: 4,
      name: "Furor/Physique Jewel 4",
      skills: [
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 375,
      rarity: 11,
      slot: 4,
      name: "Mighty/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 376,
      rarity: 11,
      slot: 4,
      name: "Brace/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 377,
      rarity: 12,
      slot: 4,
      name: "Phoenix/Physique Jewel 4",
      skills: [
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 378,
      rarity: 12,
      slot: 4,
      name: "Earplug/Physique Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 379,
      rarity: 12,
      slot: 4,
      name: "Critical/Physique Jewel 4",
      skills: [
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 380,
      rarity: 12,
      slot: 4,
      name: "Tenderizer/Physique Jewel 4",
      skills: [
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 381,
      rarity: 12,
      slot: 4,
      name: "Handicraft/Physique Jewel 4",
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
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 382,
      rarity: 12,
      slot: 4,
      name: "Release/Physique Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 383,
      rarity: 11,
      slot: 4,
      name: "Footing/Evasion Jewel 4",
      skills: [
        {
          id: 33,
          level: 1,
          modifiers: {},
          description: "Nullifies minor ground tremors.",
          skill: 11,
          skillName: "Tremor Resistance"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 384,
      rarity: 11,
      slot: 4,
      name: "Charger/Evasion Jewel 4",
      skills: [
        {
          id: 136,
          level: 1,
          modifiers: {},
          description: "Increases gauge fill rate by 5% and reduces charge times by 5%.",
          skill: 42,
          skillName: "Focus"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 385,
      rarity: 11,
      slot: 4,
      name: "Enhancer/Evasion Jewel 4",
      skills: [
        {
          id: 139,
          level: 1,
          modifiers: {},
          description: "Bonus duration +10%",
          skill: 43,
          skillName: "Power Prolonger"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 386,
      rarity: 11,
      slot: 4,
      name: "Destroyer/Evasion Jewel 4",
      skills: [
        {
          id: 150,
          level: 1,
          modifiers: {},
          description: "Part damage +10%",
          skill: 46,
          skillName: "Partbreaker"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 387,
      rarity: 11,
      slot: 4,
      name: "KO/Evasion Jewel 4",
      skills: [
        {
          id: 153,
          level: 1,
          modifiers: {},
          description: "Stun power +20%",
          skill: 47,
          skillName: "Slugger"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 388,
      rarity: 11,
      slot: 4,
      name: "Potential/Evasion Jewel 4",
      skills: [
        {
          id: 174,
          level: 1,
          modifiers: {},
          description: "While active, increases defense by 50 points",
          skill: 54,
          skillName: "Heroics"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 389,
      rarity: 11,
      slot: 4,
      name: "Wind Resist/Evasion Jewel 4",
      skills: [
        {
          id: 28,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of minor wind pressure.",
          skill: 10,
          skillName: "Windproof"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 390,
      rarity: 11,
      slot: 4,
      name: "Draw/Evasion Jewel 4",
      skills: [
        {
          id: 147,
          level: 1,
          modifiers: {},
          description: "Draw attack affinity +30%",
          skill: 45,
          skillName: "Critical Draw"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 391,
      rarity: 11,
      slot: 4,
      name: "Throttle/Evasion Jewel 4",
      skills: [
        {
          id: 161,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10% and reduces stamina depletion by 30%.",
          skill: 51,
          skillName: "Latent Power"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 392,
      rarity: 11,
      slot: 4,
      name: "Challenger/Evasion Jewel 4",
      skills: [
        {
          id: 166,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +4 and increases affinity by 5%.",
          skill: 52,
          skillName: "Agitator"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 393,
      rarity: 11,
      slot: 4,
      name: "Flawless/Evasion Jewel 4",
      skills: [
        {
          id: 171,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 53,
          skillName: "Peak Performance"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 394,
      rarity: 11,
      slot: 4,
      name: "Furor/Evasion Jewel 4",
      skills: [
        {
          id: 180,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +5.",
          skill: 56,
          skillName: "Resentment"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 395,
      rarity: 11,
      slot: 4,
      name: "Mighty/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 267,
          level: 1,
          modifiers: {},
          description: "While active, increases affinity by 10%.",
          skill: 88,
          skillName: "Maximum Might"
        }
      ]
    },
    {
      id: 396,
      rarity: 11,
      slot: 4,
      name: "Brace/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 276,
          level: 1,
          modifiers: {},
          description: "Prevents knockbacks.",
          skill: 91,
          skillName: "Flinch Free"
        }
      ]
    },
    {
      id: 397,
      rarity: 12,
      slot: 4,
      name: "Phoenix/Evasion Jewel 4",
      skills: [
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        },
        {
          id: 356,
          level: 1,
          modifiers: {},
          description: "While active, grants attack +12, element attack power +30, and status buildup + 5%.",
          skill: 146,
          skillName: "Coalescence"
        }
      ]
    },
    {
      id: 398,
      rarity: 12,
      slot: 4,
      name: "Earplug/Evasion Jewel 4",
      skills: [
        {
          id: 23,
          level: 1,
          modifiers: {},
          description: "Slightly reduces the effects of weak monster roars.",
          skill: 9,
          skillName: "Earplugs"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 399,
      rarity: 12,
      slot: 4,
      name: "Critical/Evasion Jewel 4",
      skills: [
        {
          id: 130,
          level: 1,
          modifiers: {},
          description: "Increases damage dealt by critical hits by 30%.",
          skill: 40,
          skillName: "Critical Boost"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 400,
      rarity: 12,
      slot: 4,
      name: "Tenderizer/Evasion Jewel 4",
      skills: [
        {
          id: 133,
          level: 1,
          modifiers: {},
          description: "Attacks that hit weak spots have 10% increased affinity, with an extra 5% on wounded parts.",
          skill: 41,
          skillName: "Weakness Exploit"
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 401,
      rarity: 12,
      slot: 4,
      name: "Handicraft/Evasion Jewel 4",
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
        },
        {
          id: 210,
          level: 1,
          modifiers: {},
          description: "Very slightly increases invulnerability window.",
          skill: 68,
          skillName: "Evade Window"
        }
      ]
    },
    {
      id: 402,
      rarity: 12,
      slot: 4,
      name: "Release/Evasion Jewel 4",
      skills: [
        {
          id: 120,
          level: 1,
          modifiers: {},
          description: "Draws out 33% of hidden element and expands clip size for some ammo.",
          skill: 38,
          skillName: "Free Elem/Ammo Up"
        },
        {
          id: 198,
          level: 1,
          modifiers: {},
          description: "Reduces fixed stamina depletion by 10%.",
          skill: 64,
          skillName: "Constitution"
        }
      ]
    },
    {
      id: 403,
      rarity: 9,
      slot: 3,
      name: "Diversion Jewel 3",
      skills: [
        {
          id: 399,
          level: 1,
          modifiers: {},
          description: "Increases the attention drawn when attacking a monster.",
          skill: 164,
          skillName: "Provoker"
        }
      ]
    },
    {
      id: 404,
      rarity: 9,
      slot: 3,
      name: "Acrobat Jewel 3",
      skills: [
        {
          id: 400,
          level: 1,
          modifiers: {},
          description: "Allows you to quickly recover from heavy attacks that blow you back when you have your weapon unsheathed.",
          skill: 165,
          skillName: "Safe Landing"
        }
      ]
    },
    {
      id: 405,
      rarity: 9,
      slot: 3,
      name: "Shaver Jewel 3",
      skills: [
        {
          id: 426,
          level: 1,
          modifiers: {},
          description: "Clutch claw weapon attacks wound monsters easier, and have a better chance of dropping slinger ammo.",
          skill: 181,
          skillName: "Clutch Claw Boost"
        }
      ]
    }
  ]


  module.exports = {
    decoData,
    createDecos
  }