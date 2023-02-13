const { client } = require("./client");


const createOneAilment = async({id, name, description, recovery, protection})=>{
  try{
      const {rows: [ailment]} = await client.query(`
          INSERT INTO ailments(id, name, description, recovery, protection)
          VALUES($1, $2, $3, $4, $5)
          RETURNING *;
          `, [id, name, description, recovery, protection]);
      

      //output
      return ailment;
  }catch(err){
      console.error(err);
  }
}

const ailments = [
    
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
            items: [],
            skills: [
              {
                id: 6,
                name: "Blast Resistance",
                description: "Grants protection against blastblight."
              }
            ]
          }
        },
        {
          id: 2,
          name: "Bleeding",
          description: "Bleeding causes damage when performing certain actions, such as running, dodging, or attacking.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
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
            ],
            skills: [
              {
                id: 7,
                name: "Bleeding Resistance",
                description: "Grants protection against bleeding."
              }
            ]
          }
        },
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
            items: [],
            skills: []
          }
        },
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
            items: [],
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
            items: [],
            skills: []
          }
        },
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
            items: [],
            skills: []
          }
        },
        {
          id: 7,
          name: "Paralysis",
          description: "Paralysis renders the hunter or monster immobilized and susceptible to increased damage for the duration. Hunters can unparalyzed if they are hit.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            items: [],
            skills: [
              {
                id: 2,
                name: "Paralysis Resistance",
                description: "Reduces the duration of paralysis."
              }
            ]
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
            items: [],
            skills: [
              {
                id: 1,
                name: "Poison Resistance",
                description: "Reduces damage while poisoned."
              }
            ]
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
            items: [
              {
                id: 8,
                rarity: 2,
                value: 6,
                carryLimit: 10,
                name: "Energy Drink",
                description: "A Guild-approved beverage that boosts your stamina. Helps shake off sleep, too!"
              }
            ],
            skills: [
              {
                id: 3,
                name: "Sleep Resistance",
                description: "Reduces the duration of sleep."
              }
            ]
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
            items: [],
            skills: [
              {
                id: 4,
                name: "Stun Resistance",
                description: "Reduces stun duration."
              }
            ]
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
            items: [],
            skills: []
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
            items: [],
            skills: []
          }
        },
        {
          id: 13,
          name: "Wind Pressure",
          description: "Wind pressure causes the hunter to brace against powerful winds, causing temporarily imobility.",
          recovery: {
            actions: [],
            items: []
          },
          protection: {
            items: [],
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
            ]
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
            items: [],
            skills: []
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
            items: [],
            skills: []
          }
        }
];

module.exports = {
    ailments,
    createOneAilment
}