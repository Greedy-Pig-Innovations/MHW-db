const { client } = require("./client");

const createItems = async ({id, rarity, carryLimit, value, name, description}) => {

  try {

    const {rows: [item]} = await client.query(`
    INSERT INTO items(id, rarity, "carryLimit", value, name, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `,[id, rarity, carryLimit, value, name, description]);

    return item;
    
  } catch (error) {
    console.error(error)
  }
} 


const itemData = [
    {
      id: 1,
      rarity: 1,
      carryLimit: 10,
      value: 8,
      name: "Potion",
      description: "Restores a small amount of health."
    },
    {
      id: 2,
      rarity: 2,
      carryLimit: 10,
      value: 16,
      name: "Mega Potion",
      description: "Restores a moderate amount of health."
    },
    {
      id: 3,
      rarity: 3,
      carryLimit: 2,
      value: 210,
      name: "Max Potion",
      description: "Fully restores health and maximizes the size of your Health Gauge."
    },
    {
      id: 4,
      rarity: 5,
      carryLimit: 1,
      value: 345,
      name: "Ancient Potion",
      description: "Fully restores health and maximizes the size of your Health and Stamina Gauges."
    },
    {
      id: 5,
      rarity: 1,
      carryLimit: 10,
      value: 6,
      name: "Antidote",
      description: "A cure for poison."
    },
    {
      id: 6,
      rarity: 2,
      carryLimit: 5,
      value: 25,
      name: "Herbal Medicine",
      description: "Removes all traces of poison and restores a slight amount of health."
    },
    {
      id: 7,
      rarity: 2,
      carryLimit: 10,
      value: 120,
      name: "Nulberry",
      description: "A mysterious berry that cures various blights."
    },
    {
      id: 8,
      rarity: 2,
      carryLimit: 10,
      value: 6,
      name: "Energy Drink",
      description: "A Guild-approved beverage that boosts your stamina. Helps shake off sleep, too!"
    },
    {
      id: 9,
      rarity: 1,
      carryLimit: 10,
      value: 3,
      name: "Ration",
      description: "Food that restores a bit of stamina."
    },
    {
      id: 10,
      rarity: 1,
      carryLimit: 10,
      value: 3,
      name: "Rare Steak",
      description: "Provides a moderate boost to your stamina. This one's still red in the middle."
    },
    {
      id: 11,
      rarity: 2,
      carryLimit: 10,
      value: 48,
      name: "Well-done Steak",
      description: "Provides a moderate boost to your stamina and keeps it at max for a longer period. Meat done right!"
    },
    {
      id: 12,
      rarity: 1,
      carryLimit: 10,
      value: 1,
      name: "Burnt Meat",
      description: "Provides a small boost to your stamina. Can be eaten quickly."
    },
    {
      id: 13,
      rarity: 1,
      carryLimit: 5,
      value: 30,
      name: "Cool Drink",
      description: "Provides temporary relief from extreme heat."
    },
    {
      id: 14,
      rarity: 2,
      carryLimit: 5,
      value: 25,
      name: "Nutrients",
      description: "Very slightly increases your maximum health level."
    },
    {
      id: 15,
      rarity: 3,
      carryLimit: 5,
      value: 92,
      name: "Mega Nutrients",
      description: "Slightly increases your maximum health level."
    },
    {
      id: 16,
      rarity: 3,
      carryLimit: 10,
      value: 92,
      name: "Immunizer",
      description: "Boosts your natural ability to heal."
    },
    {
      id: 17,
      rarity: 2,
      carryLimit: 5,
      value: 10,
      name: "Astera Jerky",
      description: "Juicy, dried meat made by Astera's chef. Boosts natural healing and cures bleeding."
    },
    {
      id: 18,
      rarity: 2,
      carryLimit: 5,
      value: 29,
      name: "Dash Juice",
      description: "Dulls one's sense of exhaustion. Reduces stamina depletion for a time."
    },
    {
      id: 20,
      rarity: 2,
      carryLimit: 10,
      value: 140,
      name: "Might Seed",
      description: "Temporarily strengthens your attacks when ingested by improving energy flow."
    },
    {
      id: 21,
      rarity: 4,
      carryLimit: 5,
      value: 67,
      name: "Demondrug",
      description: "Boosts your attack power by filling you with - guess what? - demonic strength."
    },
    {
      id: 22,
      rarity: 5,
      carryLimit: 5,
      value: 283,
      name: "Mega Demondrug",
      description: "Boosts your attack power even more than a regular Demondrug."
    },
    {
      id: 23,
      rarity: 4,
      carryLimit: 5,
      value: 280,
      name: "Might Pill",
      description: "Temporarily endows you with the strength of a mighty god. Potent!"
    },
    {
      id: 24,
      rarity: 2,
      carryLimit: 10,
      value: 110,
      name: "Adamant Seed",
      description: "Temporarily raises your defense when ingested by hardening tissue."
    },
    {
      id: 25,
      rarity: 4,
      carryLimit: 5,
      value: 58,
      name: "Armorskin",
      description: "Boosts your defense by turning your skin as hard as rock."
    },
    {
      id: 26,
      rarity: 5,
      carryLimit: 5,
      value: 269,
      name: "Mega Armorskin",
      description: "Boosts your defense even more than a regular armorskin."
    },
    {
      id: 27,
      rarity: 4,
      carryLimit: 5,
      value: 260,
      name: "Adamant Pill",
      description: "Temporarily makes your skin as hard as adamant. Potent!"
    },
    {
      id: 28,
      rarity: 4,
      carryLimit: 3,
      value: 315,
      name: "Lifepowder",
      description: "Produces a healing cloud in the area around the user."
    },
    {
      id: 29,
      rarity: 3,
      carryLimit: 3,
      value: 315,
      name: "Herbal Powder",
      description: "A mysterious powder that produces a cloud around the area that restores health and neutralizes poison."
    },
    {
      id: 30,
      rarity: 4,
      carryLimit: 3,
      value: 315,
      name: "Demon Powder",
      description: "A mysterious powder that produces a cloud around the area that temporarily strengthens attacks."
    },
    {
      id: 31,
      rarity: 4,
      carryLimit: 3,
      value: 315,
      name: "Hardshell Powder",
      description: "A mysterious powder that produces a cloud around the area that temporarily strengthens defense."
    },
    {
      id: 32,
      rarity: 2,
      carryLimit: 10,
      value: 45,
      name: "Honey",
      description: "Highly nutritious honey. Combine this with Potions to craft Mega Potions for maximum potency."
    },
    {
      id: 33,
      rarity: 1,
      carryLimit: 10,
      value: 2,
      name: "Herb",
      description: "A primary ingredient in potions."
    },
    {
      id: 34,
      rarity: 1,
      carryLimit: 10,
      value: 2,
      name: "Antidote Herb",
      description: "A primary ingredient in antidotes."
    },
    {
      id: 35,
      rarity: 2,
      carryLimit: 20,
      value: 4,
      name: "Fire Herb",
      description: "A wondrous, flammable plant. Useful for crafting explosives."
    },
    {
      id: 36,
      rarity: 1,
      carryLimit: 20,
      value: 4,
      name: "Flowfern",
      description: "This plant's leaves store a great amount of water. A component for making Water Ammo."
    },
    {
      id: 37,
      rarity: 2,
      carryLimit: 20,
      value: 6,
      name: "Snow Herb",
      description: "A plant that radiates ice-cold air. Use in combinations to create freeze ammo."
    },
    {
      id: 38,
      rarity: 1,
      carryLimit: 10,
      value: 5,
      name: "Sleep Herb",
      description: "A plant containing sleeping agents. Used to craft tranquilizers."
    },
    {
      id: 39,
      rarity: 1,
      carryLimit: 10,
      value: 8,
      name: "Ivy",
      description: "A lightweight and extremely strong plant. Used to make nets for pitfall traps."
    },
    {
      id: 40,
      rarity: 1,
      carryLimit: 10,
      value: 4,
      name: "Smokenut",
      description: "A nut that produces a copious amount of smoke. Combine with other items to create smoke with various properties."
    },
    {
      id: 41,
      rarity: 4,
      carryLimit: 10,
      value: 78,
      name: "Dragonfell Berry",
      description: "A mysterious berry, rumored for eons to be loathed by dragons. Required to craft Dragon Ammo."
    },
    {
      id: 42,
      rarity: 2,
      carryLimit: 10,
      value: 2,
      name: "Blue Mushroom",
      description: "A mushroom infused with power-enhancing effects. Used in restorative items."
    },
    {
      id: 43,
      rarity: 3,
      carryLimit: 10,
      value: 40,
      name: "Mandragora",
      description: "A dangerous fungus said to draw the life out of people. Beware. Required to craft Max Potions."
    },
    {
      id: 44,
      rarity: 2,
      carryLimit: 20,
      value: 6,
      name: "Nitroshroom",
      description: "A hard-to-find mushroom with the power to generate blazing heat. Required to craft Gunpowder."
    },
    {
      id: 45,
      rarity: 2,
      carryLimit: 10,
      value: 60,
      name: "Devil's Blight",
      description: "A very rare fungus that pulses with extreme heat. Add to a barrel bomb for a dramatically stronger blast."
    },
    {
      id: 46,
      rarity: 3,
      carryLimit: 10,
      value: 15,
      name: "Parashroom",
      description: "A mushroom that induces paralysis. Required to craft Tranq Bombs."
    },
    {
      id: 47,
      rarity: 2,
      carryLimit: 10,
      value: 8,
      name: "Toadstool",
      description: "A poisonous fungus. Can be used as a toxin for knives."
    },
    {
      id: 48,
      rarity: 3,
      carryLimit: 10,
      value: 18,
      name: "Exciteshroom",
      description: "This one has a very strange aroma. Is it edible? Only one way to find out! Required to craft Farcasters."
    },
    {
      id: 49,
      rarity: 3,
      carryLimit: 10,
      value: 18,
      name: "Chillshroom",
      description: "This mushroom is a primary ingredient in cool drinks."
    },
    {
      id: 50,
      rarity: 1,
      carryLimit: 10,
      value: 2,
      name: "Bitterbug",
      description: "A sharp-tasting bug with innate healing abilities. Used as an ingredient in many medicines."
    },
    {
      id: 51,
      rarity: 2,
      carryLimit: 10,
      value: 48,
      name: "Flashbug",
      description: "An insect that emits a powerful flash when it dies. Required to craft Flash Pods."
    },
    {
      id: 52,
      rarity: 4,
      carryLimit: 10,
      value: 120,
      name: "Godbug",
      description: "An insect said to live a millennium. Combine it with other items to add their properties to the powder."
    },
    {
      id: 53,
      rarity: 4,
      carryLimit: 10,
      value: 80,
      name: "Thunderbug",
      description: "An insect that emits electricity when struck. Required to craft Shock Traps and Thunder Ammo."
    },
    {
      id: 54,
      rarity: 3,
      carryLimit: 10,
      value: 2,
      name: "Baitbug",
      description: "An insect used as fishing bait. A fish favorite, it practically races down the nearest gilly gullet."
    },
    {
      id: 55,
      rarity: 4,
      carryLimit: 99,
      value: 52,
      name: "Kelbi Horn",
      description: "While not practical for forging purposes, Kelbi horns are a vital component of many items."
    },
    {
      id: 56,
      rarity: 4,
      carryLimit: 20,
      value: 56,
      name: "Dash Extract",
      description: "A mysterious substance culled from certain monsters that increases endurance."
    },
    {
      id: 57,
      rarity: 4,
      carryLimit: 20,
      value: 122,
      name: "Nourishing Extract",
      description: "Can be obtained from certain large monsters. Has the ability to amplify the effects of certain medicines."
    },
    {
      id: 58,
      rarity: 2,
      carryLimit: 10,
      value: 15,
      name: "Screamer Sac",
      description: "A monster organ that emits an earsplitting sonic blast when ruptured. Used to craft screamer pods."
    },
    {
      id: 59,
      rarity: 2,
      carryLimit: 5,
      value: 48,
      name: "Catalyst",
      description: "Works with other materials to enhance their effects. Cannot be used by itself."
    },
    {
      id: 60,
      rarity: 3,
      carryLimit: 8,
      value: 35,
      name: "Tranq Bomb",
      description: "A hand grenade used to capture monsters ensnared in traps. Can be slammed against the ground."
    },
    {
      id: 61,
      rarity: 2,
      carryLimit: 3,
      value: 57,
      name: "Flash Pod",
      description: "Slinger ammo that flashes brightly on impact. Fire it right under a monster's nose to blind it."
    },
    {
      id: 62,
      rarity: 2,
      carryLimit: 3,
      value: 45,
      name: "Screamer Pod",
      description: "Used as ammo for your slinger. Emits a harsh, high-frequency sound that can disrupt sensitive monsters."
    },
    {
      id: 63,
      rarity: 2,
      carryLimit: 10,
      value: 20,
      name: "Dung Pod",
      description: "Slinger ammo that releases a strong odor on impact. Causes certain monsters to flee."
    },
    {
      id: 64,
      rarity: 2,
      carryLimit: 3,
      value: 44,
      name: "Smoke Bomb",
      description: "Creates a large cloud of smoke wherever it lands."
    },
    {
      id: 65,
      rarity: 2,
      carryLimit: 5,
      value: 60,
      name: "Poison Smoke Bomb",
      description: "Releases a toxic cloud of mist when used. Also popular as a household bug bomb."
    },
    {
      id: 66,
      rarity: 3,
      carryLimit: 1,
      value: 30,
      name: "Farcaster",
      description: "Call for a wingdrake to transport you to the nearest camp. Can also be used during battles."
    },
    {
      id: 67,
      rarity: 1,
      carryLimit: 10,
      value: 5,
      name: "Raw Meat",
      description: "Meat carved from a monster. Can be cooked, combined, or used to set a trap."
    },
    {
      id: 68,
      rarity: 2,
      carryLimit: 10,
      value: 19,
      name: "Poisoned Meat",
      description: "Raw meat that poisons whatever eats it. Makes great bait for traps."
    },
    {
      id: 69,
      rarity: 2,
      carryLimit: 10,
      value: 30,
      name: "Tinged Meat",
      description: "Raw meat that paralyzes whatever eats it. Makes great bait for traps."
    },
    {
      id: 70,
      rarity: 2,
      carryLimit: 10,
      value: 32,
      name: "Drugged Meat",
      description: "Raw meat that puts whatever eats it to sleep. Makes great bait for traps."
    },
    {
      id: 71,
      rarity: 2,
      carryLimit: 20,
      value: 45,
      name: "Gunpowder",
      description: "A dangerous substance that explodes when struct or heated."
    },
    {
      id: 72,
      rarity: 1,
      carryLimit: 10,
      value: 8,
      name: "Small Barrel",
      description: "A small, empty barrel."
    },
    {
      id: 73,
      rarity: 2,
      carryLimit: 10,
      value: 16,
      name: "Barrel Bomb",
      description: "A small time bomb."
    },
    {
      id: 74,
      rarity: 2,
      carryLimit: 5,
      value: 18,
      name: "Bounce Bomb",
      description: "Launches into the air when set. This modified bomb requires skill to use."
    },
    {
      id: 75,
      rarity: 4,
      carryLimit: 5,
      value: 68,
      name: "Mega Bounce Bomb",
      description: "An improved version of the bounce bomb. Requires some skill to use."
    },
    {
      id: 76,
      rarity: 2,
      carryLimit: 5,
      value: 21,
      name: "Large Barrel",
      description: "A large, empty barrel. Combine with gunpowder to make it into a bomb."
    },
    {
      id: 77,
      rarity: 3,
      carryLimit: 2,
      value: 52,
      name: "Large Barrel Bomb",
      description: "A powerful bomb triggered by external physical impact."
    },
    {
      id: 78,
      rarity: 4,
      carryLimit: 2,
      value: 80,
      name: "Mega Barrel Bomb",
      description: "An upgraded large barrel bomb. Effective against large monsters."
    },
    {
      id: 79,
      rarity: 1,
      carryLimit: 10,
      value: 6,
      name: "Spider Web",
      description: "A very sticky web. Used to craft pitfall traps."
    },
    {
      id: 80,
      rarity: 2,
      carryLimit: 10,
      value: 54,
      name: "Net",
      description: "A sturdy net that supports a certain amount of weight without breaking. Perfect for pitfall traps."
    },
    {
      id: 81,
      rarity: 3,
      carryLimit: 2,
      value: 20,
      name: "Trap Tool",
      description: "A must-have item for putting together pitfall traps and other kinds of traps."
    },
    {
      id: 82,
      rarity: 3,
      carryLimit: 1,
      value: 200,
      name: "Pitfall Trap",
      description: "A trap for catching certain large monsters. It is tripped by a heavy weight."
    },
    {
      id: 83,
      rarity: 3,
      carryLimit: 1,
      value: 160,
      name: "Shock Trap",
      description: "A trap that immobilizes a target. Use it to capture monsters."
    },
    {
      id: 84,
      rarity: 1,
      carryLimit: 20,
      value: 10,
      name: "Rolled-up Dung",
      description: "A ball of condensed monster dung. Used to make dung pods for your slinger."
    },
    {
      id: 85,
      rarity: 1,
      carryLimit: 10,
      value: 1,
      name: "Dung",
      description: "Exudes a prodigious smell. Used to make ammo for your slinger called dung pods."
    },
    {
      id: 86,
      rarity: 2,
      carryLimit: 10,
      value: 15,
      name: "Arowana Bait",
      description: "A ball of bait favored by fish of the Arowana family."
    },
    {
      id: 87,
      rarity: 2,
      carryLimit: 10,
      value: 15,
      name: "Gunpowderfish Bait",
      description: "A ball of bait favored by fish of the Gunpowderfish family."
    },
    {
      id: 88,
      rarity: 2,
      carryLimit: 10,
      value: 30,
      name: "Goldenfish Bait",
      description: "A ball of bait favored by fish of the Goldenfish family."
    },
    {
      id: 89,
      rarity: 4,
      carryLimit: 5,
      value: 15,
      name: "Boomerang",
      description: "An unusually-shaped weapon from abroad that returns to its user when thrown."
    },
    {
      id: 90,
      rarity: 1,
      carryLimit: 1,
      value: 5,
      name: "Binoculars",
      description: "Allows you to see farther and observe from a distance."
    },
    {
      id: 91,
      rarity: 5,
      carryLimit: 1,
      value: 3600,
      name: "Powercharm",
      description: "An amulet that strengthens attacks. Just carrying this gives you demonic strength."
    },
    {
      id: 92,
      rarity: 5,
      carryLimit: 1,
      value: 6840,
      name: "Powertalon",
      description: "A charm that strengthens attacks. Its effects are amplified by the dragon parts it contains."
    },
    {
      id: 93,
      rarity: 5,
      carryLimit: 1,
      value: 2400,
      name: "Armorcharm",
      description: "An amulet that increases defense. Just carrying this hardens your skin like stone."
    },
    {
      id: 94,
      rarity: 5,
      carryLimit: 1,
      value: 5040,
      name: "Armortalon",
      description: "A charm that increases defense. Its effects are amplified by the dragon parts it contains."
    },
    {
      id: 95,
      rarity: 1,
      carryLimit: 99,
      value: 1,
      name: "Needleberry",
      description: "A nut covered in needle-like spines. Used to make spread ammo."
    },
    {
      id: 96,
      rarity: 1,
      carryLimit: 30,
      value: 4,
      name: "Blastnut",
      description: "A nut used to make sticky ammo."
    },
    {
      id: 97,
      rarity: 2,
      carryLimit: 5,
      value: 12,
      name: "Dragonstrike Nut",
      description: "A nut that explodes on impact. Used to make wyvern ammo."
    },
    {
      id: 98,
      rarity: 1,
      carryLimit: 30,
      value: 4,
      name: "Slashberry",
      description: "Used to make slicing ammo."
    },
    {
      id: 99,
      rarity: 1,
      carryLimit: 99,
      value: 4,
      name: "Latchberry",
      description: "A nut that bears a spiral groove. Used to make pierce ammo."
    },
    {
      id: 100,
      rarity: 2,
      carryLimit: 10,
      value: 12,
      name: "Bomberry",
      description: "A nut that ruptures on impact. Used to make cluster bombs."
    },
    {
      id: 101,
      rarity: 2,
      carryLimit: 80,
      value: 12,
      name: "Flamenut",
      description: "Used to make gunpowder that increases ammo firepower."
    },
    {
      id: 102,
      rarity: 2,
      carryLimit: 60,
      value: 12,
      name: "Blazenut",
      description: "Used to make gunpowder that greatly increases ammo firepower."
    },
    {
      id: 103,
      rarity: 2,
      carryLimit: 80,
      value: 1,
      name: "Gunpowder Level 2",
      description: "Combustible powser. Combine with level 1 ammo to raise its level."
    },
    {
      id: 105,
      rarity: 2,
      carryLimit: 10,
      value: 45,
      name: "Whetfish Fin",
      description: "A fish fin used to sharpen weapons. Restores sharpness greatly, but good for fewer uses than a whetstone."
    },
    {
      id: 106,
      rarity: 4,
      carryLimit: 5,
      value: 45,
      name: "Whetfish Fin+",
      description: "A fish fin used to sharpen weapons. Works better than a whetstone, and can be reused if you're lucky."
    },
    {
      id: 107,
      rarity: 2,
      carryLimit: 10,
      value: 45,
      name: "Sushifish Scale",
      description: "A scale from a Sushifish. Eat to restore a small amount of health. Also works to treat bleeding."
    },
    {
      id: 108,
      rarity: 4,
      carryLimit: 5,
      value: 45,
      name: "Great Sushifish Scale",
      description: "Scale from a Great Sushifish. Eat to get large health boost, a natural healing boost, and treat bleeding."
    },
    {
      id: 109,
      rarity: 3,
      carryLimit: 5,
      value: 150,
      name: "Gunpowderfish Scale",
      description: "The scales of a Gunpowderfish. Combine with a large barrel bomb to dramatically increase its firepower."
    },
    {
      id: 110,
      rarity: 4,
      carryLimit: 5,
      value: 150,
      name: "Great Gunpowderfish Scale",
      description: "The scales of a Great Gunpowderfish. Combine with a large barrel bomb to make a mega barrel bomb."
    },
    {
      id: 111,
      rarity: 2,
      carryLimit: 5,
      value: 45,
      name: "Burst Arowana Scale",
      description: "The scales of a Burst Arowana. Combine with fire herb to make a large amount of level 2 gunpowder."
    },
    {
      id: 112,
      rarity: 4,
      carryLimit: 5,
      value: 45,
      name: "Great Burst Arowana Scale",
      description: "The scales of a Great Burst Arowana. Combine with fire herb to make a vast amount of level 2 gunpowder."
    },
    {
      id: 113,
      rarity: 2,
      carryLimit: 5,
      value: 135,
      name: "Bomb Arowana Scale",
      description: "The scales of a Bomb Arowana. Combine with fire herb to make a large amount of Lv3 gunpowder."
    },
    {
      id: 114,
      rarity: 4,
      carryLimit: 5,
      value: 135,
      name: "Great Bomb Arowana Scale",
      description: "The scales of a Great Bomb Arowana. Combine with fire herb to make a vast amount of Lv3 gunpowder."
    },
    {
      id: 115,
      rarity: 1,
      carryLimit: 99,
      value: 1,
      name: "Empty Phial",
      description: "A regularly old empty phial. Nothing more, nothing less."
    },
    {
      id: 116,
      rarity: 4,
      carryLimit: 99,
      value: 60,
      name: "Iron Ore",
      description: "Ore that can be smelted into metal and used for many different purposes."
    },
    {
      id: 117,
      rarity: 4,
      carryLimit: 99,
      value: 160,
      name: "Machalite Ore",
      description: "Ore that's more difficult to procure than Iron Ore. Produces fine metal."
    },
    {
      id: 118,
      rarity: 4,
      carryLimit: 99,
      value: 480,
      name: "Dragonite Ore",
      description: "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor."
    },
    {
      id: 119,
      rarity: 6,
      carryLimit: 99,
      value: 680,
      name: "Carbalite Ore",
      description: "Ore obtained from mining outcrops. Still under research, but known to yield highly pure metal."
    },
    {
      id: 120,
      rarity: 6,
      carryLimit: 99,
      value: 1020,
      name: "Fucium Ore",
      description: "Ore obtained from the Elder's Recess. A mysterious metal, capable of fusing nearly any two materials together."
    },
    {
      id: 121,
      rarity: 4,
      carryLimit: 99,
      value: 80,
      name: "Earth Crystal",
      description: "Crystallized microbes prized as an abrasive when forging weapons. Mainly found in the Wildspire Waste."
    },
    {
      id: 122,
      rarity: 4,
      carryLimit: 99,
      value: 600,
      name: "Coral Crystal - Rarity 4",
      description: "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands."
    },
    {
      id: 123,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Dragonvein Crystal",
      description: "Mined from high rank areas. Many expect this newly-discovered crystal to usher in a new era of metalwork."
    },
    {
      id: 124,
      rarity: 5,
      carryLimit: 99,
      value: 1150,
      name: "Lightcrystal",
      description: "A precious and extremely hard substance with a faint glow. Sometimes used for crafting tools."
    },
    {
      id: 125,
      rarity: 7,
      carryLimit: 99,
      value: 2440,
      name: "Novacrystal",
      description: "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking."
    },
    {
      id: 126,
      rarity: 7,
      carryLimit: 99,
      value: 1720,
      name: "Firecell Stone",
      description: "A magma-like deposit that only trained hands can work with. Armor made from it is first-class."
    },
    {
      id: 127,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Aquacore Ore",
      description: "A valuable mineral used to create charms. Gives off a vibrant glow that mirrors the ocean."
    },
    {
      id: 128,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Spiritcore Ore",
      description: "A valuable mineral used to create charms. Gives off a warm, sunny glow."
    },
    {
      id: 129,
      rarity: 7,
      carryLimit: 99,
      value: 1200,
      name: "Dreamcore Ore",
      description: "A valuable mineral used to create charms. Gives off a blazing glow reminiscent of a bonfire."
    },
    {
      id: 130,
      rarity: 8,
      carryLimit: 99,
      value: 2000,
      name: "Dragoncore Ore",
      description: "A valuable mineral used to create charms. Gives off a mysterious glow that grants the holder sagely wisdom."
    },
    {
      id: 131,
      rarity: 4,
      carryLimit: 99,
      value: 80,
      name: "Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to improve it by a tiny amount."
    },
    {
      id: 132,
      rarity: 5,
      carryLimit: 99,
      value: 200,
      name: "Armor Sphere+",
      description: "Reacts uniquely to heat. Fuse this to armor to improve it by a small amount."
    },
    {
      id: 133,
      rarity: 6,
      carryLimit: 99,
      value: 300,
      name: "Advanced Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to improve it."
    },
    {
      id: 134,
      rarity: 7,
      carryLimit: 99,
      value: 400,
      name: "Hard Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to significantly improve it."
    },
    {
      id: 135,
      rarity: 8,
      carryLimit: 99,
      value: 600,
      name: "Heavy Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to greatly improve it."
    },
    {
      id: 136,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Sturdy Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands and Rotten Vale."
    },
    {
      id: 137,
      rarity: 6,
      carryLimit: 99,
      value: 750,
      name: "Quality Bone",
      description: "A bone used as crafting material. Its ease of use and hardness allow it to be shaped into better gear."
    },
    {
      id: 138,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Ancient Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
    },
    {
      id: 139,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Boulder Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Wildspire Waste. Its size evokes a certain primal quality."
    },
    {
      id: 140,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Coral Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Coral Highlands. Its size evokes a certain primal quality."
    },
    {
      id: 141,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Warped Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Rotten Vale. Its size evokes a certain primal quality."
    },
    {
      id: 142,
      rarity: 6,
      carryLimit: 99,
      value: 1200,
      name: "Brutal Bone",
      description: "A bone used as crafting material. Can be found in bonepiles in the Elder's Recess. Its size evokes a certain primal quality."
    },
    {
      id: 143,
      rarity: 7,
      carryLimit: 99,
      value: 1600,
      name: "Dragonbone Relic",
      description: "A high quality material found in bone piles. The only remains left of a species of dragon now lost to time."
    },
    {
      id: 144,
      rarity: 7,
      carryLimit: 99,
      value: 1800,
      name: "Unknown Skull",
      description: "A rare material found in bonepiles in the Elder's Recess. It appears to be some kind of animal skull."
    },
    {
      id: 145,
      rarity: 5,
      carryLimit: 99,
      value: 200,
      name: "Great Hornfly",
      description: "Discovered by Botanical Research. An insect with a giant horn, massive shell, and butterfly-like wings."
    },
    {
      id: 146,
      rarity: 5,
      carryLimit: 99,
      value: 350,
      name: "Sinister Cloth",
      description: "Suspect cloth the Tailraider Safari dug up from who-knows-where. Drips with an aura of pure evil."
    },
    {
      id: 147,
      rarity: 3,
      carryLimit: 99,
      value: 30,
      name: "Monster Bone S",
      description: "A material found in bonepiles. Indispensable for both hunting and daily life."
    },
    {
      id: 148,
      rarity: 4,
      carryLimit: 99,
      value: 300,
      name: "Monster Bone M",
      description: "Bone obtained from large monsters. Strong yet flexible, it's as reliable as steel or wood."
    },
    {
      id: 149,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Monster Bone L",
      description: "Bone obtained from large monsters. Hard to work with due to its size, but vital when crafting larger items."
    },
    {
      id: 150,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Monster Bone+",
      description: "Bone obtained from large monsters. Hard to obtain, but vital for crafting powerful equipment."
    },
    {
      id: 151,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Monster Keenbone",
      description: "Bone obtained from high rank large monsters. It has a razor-sharp tip that retains its strength after forging."
    },
    {
      id: 152,
      rarity: 6,
      carryLimit: 99,
      value: 1200,
      name: "Monster Hardbone",
      description: "Precious bone obtained from high rank large monsters. Their rarity makes them highly sought after."
    },
    {
      id: 153,
      rarity: 7,
      carryLimit: 99,
      value: 1600,
      name: "Elder Dragon Bone",
      description: "A bone from an elder dragon. It exudes the great majesty of the beast that bore it."
    },
    {
      id: 154,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Sharp Claw",
      description: "Obtained from small fanged wyverns. Unlike wyvern claws, this is shaped to grip objects."
    },
    {
      id: 155,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Piercing Claw",
      description: "Material from high rank small fanged wyverns. Sharp enough that it might serve as a makeshift knife."
    },
    {
      id: 156,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Monster Fluid",
      description: "Material obtained from small insects. Mixes with insect gastric fluids to form adhesive."
    },
    {
      id: 157,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Monster Broth",
      description: "Material from high rank insects. A rich broth made from only the thickest of monster juices."
    },
    {
      id: 158,
      rarity: 4,
      carryLimit: 99,
      value: 600,
      name: "Poison Sac",
      description: "A monster organ that contains a lethal toxin. Handle with extreme care."
    },
    {
      id: 159,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Toxin Sac",
      description: "A monster organ filled with an extremely potent toxin. Just touching it is dangerous."
    },
    {
      id: 160,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Paralysis Sac",
      description: "A monster organ that contains paralyzing neurotoxins."
    },
    {
      id: 161,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Omniplegia Sac",
      description: "A monster organ filled with potent neurotoxins. A single touch can cause paralysis."
    },
    {
      id: 162,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Sleep Sac",
      description: "A monster organ that contains a knockout powder capable of inducing sleep."
    },
    {
      id: 163,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Coma Sac",
      description: "A monster organ that contains dangerous powder. One whiff can induce a coma."
    },
    {
      id: 164,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Flame Sac",
      description: "A monster organ filled with flammable powder. Handle with extreme care."
    },
    {
      id: 165,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Inferno Sac",
      description: "A monster organ filled with powder that ignites if it so much as touches air. Danger!"
    },
    {
      id: 166,
      rarity: 4,
      carryLimit: 99,
      value: 600,
      name: "Aqua Sac",
      description: "A monster organ designed to hold and preserve water."
    },
    {
      id: 167,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Torrent Sac",
      description: "A monster organ designed to hold and preserve copious amounts of water."
    },
    {
      id: 168,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Frost Sac",
      description: "A monster internal organ, filled with extremely low temperature fluid. Handle with care."
    },
    {
      id: 169,
      rarity: 6,
      carryLimit: 99,
      value: 2400,
      name: "Freezer Sac",
      description: "A monster organ with tremendous freezing power. Turns its surroundings to ice."
    },
    {
      id: 170,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Electro Sac",
      description: "A monster organ that can store up electricity, which is released on impact."
    },
    {
      id: 171,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Thunder Sac",
      description: "A monster organ that can store up large amounts of high voltage electricity."
    },
    {
      id: 172,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Bird Wyvern Gem",
      description: "A valuable gem that can be harvested from bird wyverns. Said to fetch a high price on the market."
    },
    {
      id: 173,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Wyvern Gem",
      description: "Throughout a wyvern's life, impurities gather and form this peculiar gem."
    },
    {
      id: 174,
      rarity: 7,
      carryLimit: 99,
      value: 1600,
      name: "Elder Dragon Blood",
      description: "Contains an unknown compound. The object of much scholarly research."
    },
    {
      id: 175,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Mosswine Hide",
      description: "A musty hide covered in moss."
    },
    {
      id: 176,
      rarity: 4,
      carryLimit: 99,
      value: 120,
      name: "Warm Pelt",
      description: "A pelt from a small animal. Used for many things, but mostly just regular clothes."
    },
    {
      id: 177,
      rarity: 6,
      carryLimit: 99,
      value: 320,
      name: "High-quality Pelt",
      description: "Rare pelt from a small animal. Feels wonderful to the touch and valued highly by the Commission."
    },
    {
      id: 178,
      rarity: 4,
      carryLimit: 99,
      value: 160,
      name: "Vespoid Shell",
      description: "Vespoid material. Obtained by carving. Used for many purposes."
    },
    {
      id: 179,
      rarity: 6,
      carryLimit: 99,
      value: 460,
      name: "Vespoid Carapace",
      description: "Rare Vespoid material. Obtained by carving. Used for many purposes."
    },
    {
      id: 180,
      rarity: 4,
      carryLimit: 99,
      value: 210,
      name: "Vespoid Wing",
      description: "Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
    },
    {
      id: 181,
      rarity: 6,
      carryLimit: 99,
      value: 560,
      name: "Vespoid Innerwing",
      description: "Rare Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
    },
    {
      id: 182,
      rarity: 4,
      carryLimit: 99,
      value: 260,
      name: "Hornetaur Shell",
      description: "Hornetaur material. Obtained by carving. Used for many purposes."
    },
    {
      id: 183,
      rarity: 4,
      carryLimit: 99,
      value: 310,
      name: "Hornetaur Wing",
      description: "Hornetaur material. Obtained by carving. Used for many purposes."
    },
    {
      id: 184,
      rarity: 4,
      carryLimit: 99,
      value: 360,
      name: "Hornetaur Head",
      description: "Hornetaur material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 185,
      rarity: 6,
      carryLimit: 99,
      value: 560,
      name: "Hornetaur Carapace",
      description: "Rare Hornetaur material. Obtained by carving. Used for many purposes."
    },
    {
      id: 186,
      rarity: 6,
      carryLimit: 99,
      value: 660,
      name: "Hornetaur Innerwing",
      description: "Rare Hornetaur material. Obtained by carving. Light and sharp, used in many weapons."
    },
    {
      id: 187,
      rarity: 4,
      carryLimit: 99,
      value: 220,
      name: "Gajau Skin",
      description: "Gajau material. Obtained by carving. Water-resistant, used to craft gear."
    },
    {
      id: 188,
      rarity: 4,
      carryLimit: 99,
      value: 270,
      name: "Gajau Whisker",
      description: "Gajau material. Obtained by carving. Hardy, used to craft gear."
    },
    {
      id: 189,
      rarity: 6,
      carryLimit: 99,
      value: 420,
      name: "Gajau Scale",
      description: "Rare Gajau material. Obtained by carving. Water-resistant, used to craft gear."
    },
    {
      id: 190,
      rarity: 6,
      carryLimit: 99,
      value: 520,
      name: "Grand Gajau Whisker",
      description: "Rare Gajau material. Obtained by carving. Hardy, used to craft gear."
    },
    {
      id: 191,
      rarity: 4,
      carryLimit: 99,
      value: 180,
      name: "Wingdrake Hide",
      description: "A material carved from wingdrakes. Lightweight and often used when crafting armor."
    },
    {
      id: 192,
      rarity: 6,
      carryLimit: 99,
      value: 380,
      name: "Wingdrake Hide+",
      description: "A rare material carved from wingdrakes. Lightweight and often used when crafting armor."
    },
    {
      id: 193,
      rarity: 6,
      carryLimit: 99,
      value: 720,
      name: "Barnos Hide+",
      description: "Rare Barnos material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 194,
      rarity: 6,
      carryLimit: 99,
      value: 820,
      name: "Barnos Talon",
      description: "Rare Barnos material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 195,
      rarity: 4,
      carryLimit: 99,
      value: 180,
      name: "Kestodon Shell",
      description: "Kestodon material. Obtained by carving. Sturdy, used to craft gear."
    },
    {
      id: 196,
      rarity: 4,
      carryLimit: 99,
      value: 230,
      name: "Kestodon Scalp",
      description: "Kestodon material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 197,
      rarity: 6,
      carryLimit: 99,
      value: 430,
      name: "Kestodon Carapace",
      description: "Superior Kestodon material. Obtained by carving. Sturdy, used to craft gear."
    },
    {
      id: 198,
      rarity: 6,
      carryLimit: 99,
      value: 760,
      name: "Gastodon Carapace",
      description: "Rare Gastodon material. Obtained by carving. Sturdy, used to craft gear."
    },
    {
      id: 199,
      rarity: 6,
      carryLimit: 99,
      value: 860,
      name: "Gastodon Horn",
      description: "Rare Gastodon material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 200,
      rarity: 4,
      carryLimit: 99,
      value: 140,
      name: "Jagras Scale",
      description: "Jagras material. Obtained by carving. Used for many purposes."
    },
    {
      id: 201,
      rarity: 4,
      carryLimit: 99,
      value: 180,
      name: "Jagras Hide",
      description: "Jagras material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 202,
      rarity: 6,
      carryLimit: 99,
      value: 340,
      name: "Jagras Scale+",
      description: "Rare Jagras material. Obtained by carving. Used for many purposes."
    },
    {
      id: 203,
      rarity: 6,
      carryLimit: 99,
      value: 480,
      name: "Jagras Hide+",
      description: "Rare Jagras material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 204,
      rarity: 4,
      carryLimit: 99,
      value: 220,
      name: "Shamos Scale",
      description: "Shamos material. Obtained by carving. Used for many purposes."
    },
    {
      id: 205,
      rarity: 4,
      carryLimit: 99,
      value: 280,
      name: "Shamos Hide",
      description: "Shamos material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 206,
      rarity: 6,
      carryLimit: 99,
      value: 420,
      name: "Shamos Scale+",
      description: "Rare Shamos material. Obtained by carving. Used for many purposes."
    },
    {
      id: 207,
      rarity: 6,
      carryLimit: 99,
      value: 480,
      name: "Shamos Hide+",
      description: "Rare Shamos material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 208,
      rarity: 4,
      carryLimit: 99,
      value: 240,
      name: "Girros Scale",
      description: "Girros material. Obtained by carving. Used for many purposes."
    },
    {
      id: 209,
      rarity: 4,
      carryLimit: 99,
      value: 300,
      name: "Girros Hide",
      description: "Girros material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 210,
      rarity: 4,
      carryLimit: 99,
      value: 260,
      name: "Girros Fang",
      description: "Girros material. Obtained by carving. Grants paralytic properties."
    },
    {
      id: 211,
      rarity: 6,
      carryLimit: 99,
      value: 460,
      name: "Girros Scale+",
      description: "Rare Girros material. Obtained by carving. Used for many purposes."
    },
    {
      id: 212,
      rarity: 6,
      carryLimit: 99,
      value: 520,
      name: "Girros Hide+",
      description: "Rare Girros material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 213,
      rarity: 4,
      carryLimit: 99,
      value: 260,
      name: "Great Jagras Scale",
      description: "Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 214,
      rarity: 4,
      carryLimit: 99,
      value: 360,
      name: "Great Jagras Hide",
      description: "Great Jagras material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 215,
      rarity: 4,
      carryLimit: 99,
      value: 440,
      name: "Great Jagras Mane",
      description: "Great Jagras material. Obtained by breaking its head. Used for many purposes."
    },
    {
      id: 216,
      rarity: 4,
      carryLimit: 99,
      value: 420,
      name: "Great Jagras Claw",
      description: "Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 217,
      rarity: 6,
      carryLimit: 99,
      value: 860,
      name: "Great Jagras Scale+",
      description: "Rare Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 218,
      rarity: 6,
      carryLimit: 99,
      value: 1220,
      name: "Great Jagras Hide+",
      description: "Rare Great Jagras material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 219,
      rarity: 6,
      carryLimit: 99,
      value: 1620,
      name: "Great Jagras Claw+",
      description: "Rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 220,
      rarity: 4,
      carryLimit: 99,
      value: 290,
      name: "Kulu-Ya-Ku Scale",
      description: "Kulu-Ya-Ku material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 221,
      rarity: 4,
      carryLimit: 99,
      value: 390,
      name: "Kulu-Ya-Ku Hide",
      description: "Kulu-Ya-Ku material. Mostly obtained by carving. Supple, often used in gear."
    },
    {
      id: 222,
      rarity: 4,
      carryLimit: 99,
      value: 460,
      name: "Kulu-Ya-Ku Plume",
      description: "Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
    },
    {
      id: 223,
      rarity: 4,
      carryLimit: 99,
      value: 490,
      name: "Kulu-Ya-Ku Beak",
      description: "Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
    },
    {
      id: 224,
      rarity: 6,
      carryLimit: 99,
      value: 890,
      name: "Kulu-Ya-Ku Scale+",
      description: "Rare Kulu-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 225,
      rarity: 6,
      carryLimit: 99,
      value: 1290,
      name: "Kulu-Ya-Ku Hide+",
      description: "Rare Kulu-Ya-Ku material. Mostly obtained as a reward. Supple, often used in gear."
    },
    {
      id: 226,
      rarity: 6,
      carryLimit: 99,
      value: 1660,
      name: "Kulu-Ya-Ku Plume+",
      description: "Rare Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
    },
    {
      id: 227,
      rarity: 6,
      carryLimit: 99,
      value: 1660,
      name: "Kulu-Ya-Ku Beak+",
      description: "Rare Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
    },
    {
      id: 228,
      rarity: 4,
      carryLimit: 99,
      value: 360,
      name: "Pukei-Pukei Scale",
      description: "Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 229,
      rarity: 4,
      carryLimit: 99,
      value: 470,
      name: "Pukei-Pukei Shell",
      description: "Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 230,
      rarity: 4,
      carryLimit: 99,
      value: 640,
      name: "Pukei-Pukei Quill",
      description: "Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
    },
    {
      id: 231,
      rarity: 4,
      carryLimit: 99,
      value: 660,
      name: "Pukei-Pukei Sac",
      description: "Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
    },
    {
      id: 232,
      rarity: 4,
      carryLimit: 99,
      value: 620,
      name: "Pukei-Pukei Tail",
      description: "Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
    },
    {
      id: 233,
      rarity: 6,
      carryLimit: 99,
      value: 950,
      name: "Pukei-Pukei Scale+",
      description: "Rare Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 234,
      rarity: 6,
      carryLimit: 99,
      value: 1350,
      name: "Pukei-Pukei Carapace",
      description: "Rare Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 235,
      rarity: 6,
      carryLimit: 99,
      value: 1700,
      name: "Pukei-Pukei Wing",
      description: "Rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
    },
    {
      id: 236,
      rarity: 6,
      carryLimit: 99,
      value: 1750,
      name: "Pukei-Pukei Sac+",
      description: "Rare Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
    },
    {
      id: 237,
      rarity: 4,
      carryLimit: 99,
      value: 330,
      name: "Barroth Shell",
      description: "Barroth material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 238,
      rarity: 4,
      carryLimit: 99,
      value: 480,
      name: "Barroth Ridge",
      description: "Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 239,
      rarity: 4,
      carryLimit: 99,
      value: 630,
      name: "Barroth Claw",
      description: "Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
    },
    {
      id: 240,
      rarity: 4,
      carryLimit: 99,
      value: 870,
      name: "Barroth Scalp",
      description: "Barroth material. Obtained by breaking its head. Tough, used in many weapons."
    },
    {
      id: 241,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Barroth Tail",
      description: "Barroth material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 242,
      rarity: 4,
      carryLimit: 99,
      value: 390,
      name: "Fertile Mud",
      description: "Barroth material. Obtained by breaking its mud covering. Unusual, used in select gear."
    },
    {
      id: 243,
      rarity: 6,
      carryLimit: 99,
      value: 870,
      name: "Barroth Carapace",
      description: "Rare Barroth material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 244,
      rarity: 6,
      carryLimit: 99,
      value: 1270,
      name: "Barroth Ridge+",
      description: "Rare Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 245,
      rarity: 6,
      carryLimit: 99,
      value: 1670,
      name: "Barroth Claw+",
      description: "Rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
    },
    {
      id: 246,
      rarity: 4,
      carryLimit: 99,
      value: 340,
      name: "Jyuratodus Scale",
      description: "Jyuratodus material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 247,
      rarity: 4,
      carryLimit: 99,
      value: 490,
      name: "Jyuratodus Shell",
      description: "Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
    },
    {
      id: 248,
      rarity: 4,
      carryLimit: 99,
      value: 640,
      name: "Jyuratodus Fang",
      description: "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 249,
      rarity: 4,
      carryLimit: 99,
      value: 720,
      name: "Jyuratodus Fin",
      description: "Jyuratodus material. Obtained by breaking its back. Used for many purposes."
    },
    {
      id: 250,
      rarity: 6,
      carryLimit: 99,
      value: 1040,
      name: "Jyuratodus Scale+",
      description: "Rare Jyuratodus material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 251,
      rarity: 6,
      carryLimit: 99,
      value: 1540,
      name: "Jyuratodus Carapace",
      description: "Rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
    },
    {
      id: 252,
      rarity: 6,
      carryLimit: 99,
      value: 2040,
      name: "Jyuratodus Fang+",
      description: "Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 253,
      rarity: 6,
      carryLimit: 99,
      value: 2120,
      name: "Jyuratodus Fin+",
      description: "Rare Jyuratodus material. Obtained by breaking its back. Used for many purposes."
    },
    {
      id: 254,
      rarity: 4,
      carryLimit: 99,
      value: 360,
      name: "Tobi-Kadachi Scale",
      description: "Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 255,
      rarity: 4,
      carryLimit: 99,
      value: 510,
      name: "Tobi-Kadachi Pelt",
      description: "Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear."
    },
    {
      id: 256,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Tobi-Kadachi Membrane",
      description: "Tobi-Kadachi material. Mostly obtained by carving. Supple, used to craft gear."
    },
    {
      id: 257,
      rarity: 4,
      carryLimit: 99,
      value: 660,
      name: "Tobi-Kadachi Claw",
      description: "Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
    },
    {
      id: 258,
      rarity: 4,
      carryLimit: 99,
      value: 720,
      name: "Tobi-Kadachi Electrode",
      description: "Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
    },
    {
      id: 259,
      rarity: 6,
      carryLimit: 99,
      value: 1050,
      name: "Tobi-Kadachi Scale+",
      description: "Rare Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 260,
      rarity: 6,
      carryLimit: 99,
      value: 1550,
      name: "Tobi-Kadachi Pelt+",
      description: "Rare Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear."
    },
    {
      id: 261,
      rarity: 6,
      carryLimit: 99,
      value: 1650,
      name: "Tobi-Kadachi Claw+",
      description: "Rare Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
    },
    {
      id: 262,
      rarity: 6,
      carryLimit: 99,
      value: 1750,
      name: "Tobi-Kadachi Electrode+",
      description: "Rare Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
    },
    {
      id: 263,
      rarity: 4,
      carryLimit: 99,
      value: 430,
      name: "Anjanath Scale",
      description: "Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 264,
      rarity: 4,
      carryLimit: 99,
      value: 630,
      name: "Anjanath Pelt",
      description: "Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
    },
    {
      id: 265,
      rarity: 4,
      carryLimit: 99,
      value: 830,
      name: "Anjanath Fang",
      description: "Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 266,
      rarity: 4,
      carryLimit: 99,
      value: 890,
      name: "Anjanath Nosebone",
      description: "Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
    },
    {
      id: 267,
      rarity: 4,
      carryLimit: 99,
      value: 860,
      name: "Anjanath Tail",
      description: "Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 268,
      rarity: 5,
      carryLimit: 99,
      value: 2400,
      name: "Anjanath Plate",
      description: "Anjanath material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 269,
      rarity: 6,
      carryLimit: 99,
      value: 1060,
      name: "Anjanath Scale+",
      description: "Rare Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 270,
      rarity: 6,
      carryLimit: 99,
      value: 1560,
      name: "Anjanath Pelt+",
      description: "Rare Anjanath material. Mostly obtained as a reward. Highly heat-resistant, used to craft gear."
    },
    {
      id: 271,
      rarity: 6,
      carryLimit: 99,
      value: 2060,
      name: "Anjanath Fang+",
      description: "Rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 272,
      rarity: 6,
      carryLimit: 99,
      value: 2120,
      name: "Anjanath Nosebone+",
      description: "Rare Anjanath material. Obtained by breaking its head. Unusual and difficult to handle."
    },
    {
      id: 273,
      rarity: 7,
      carryLimit: 99,
      value: 6000,
      name: "Anjanath Gem",
      description: "A rare gem said to have formed within Anjanath tissue. Used to dramatically improve gear."
    },
    {
      id: 274,
      rarity: 4,
      carryLimit: 99,
      value: 460,
      name: "Rathian Scale",
      description: "Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 275,
      rarity: 4,
      carryLimit: 99,
      value: 660,
      name: "Rathian Shell",
      description: "Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 276,
      rarity: 4,
      carryLimit: 99,
      value: 860,
      name: "Rathian Webbing",
      description: "Rathian material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 277,
      rarity: 4,
      carryLimit: 99,
      value: 980,
      name: "Rathian Spike",
      description: "Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
    },
    {
      id: 278,
      rarity: 5,
      carryLimit: 99,
      value: 2400,
      name: "Rathian Plate",
      description: "Rathian material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 279,
      rarity: 6,
      carryLimit: 99,
      value: 1060,
      name: "Rathian Scale+",
      description: "Rare Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 280,
      rarity: 6,
      carryLimit: 99,
      value: 1560,
      name: "Rathian Carapace",
      description: "Rare Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 281,
      rarity: 6,
      carryLimit: 99,
      value: 2240,
      name: "Rathian Spike+",
      description: "Rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
    },
    {
      id: 282,
      rarity: 7,
      carryLimit: 99,
      value: 6000,
      name: "Rathian Ruby",
      description: "A rare gem said to have formed within Rathian tissue. Used to dramatically improve gear."
    },
    {
      id: 283,
      rarity: 6,
      carryLimit: 99,
      value: 1260,
      name: "Pink Rathian Scale+",
      description: "Rare Pink Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 284,
      rarity: 6,
      carryLimit: 99,
      value: 1860,
      name: "Pink Rathian Carapace",
      description: "Rare Pink Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 285,
      rarity: 4,
      carryLimit: 99,
      value: 440,
      name: "Tzitzi-Ya-Ku Scale",
      description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 286,
      rarity: 4,
      carryLimit: 99,
      value: 640,
      name: "Tzitzi-Ya-Ku Hide",
      description: "Tzitzi-Ya-Ku material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 287,
      rarity: 4,
      carryLimit: 99,
      value: 840,
      name: "Tzitzi-Ya-Ku Claw",
      description: "Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 288,
      rarity: 4,
      carryLimit: 99,
      value: 920,
      name: "Tzitzi-Ya-Ku Photophore",
      description: "Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
    },
    {
      id: 289,
      rarity: 6,
      carryLimit: 99,
      value: 840,
      name: "Tzitzi-Ya-Ku Scale+",
      description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 290,
      rarity: 6,
      carryLimit: 99,
      value: 1240,
      name: "Tzitzi-Ya-Ku Hide+",
      description: "Tzitzi-Ya-Ku material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 291,
      rarity: 6,
      carryLimit: 99,
      value: 1640,
      name: "Tzitzi-Ya-Ku Claw+",
      description: "Rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 292,
      rarity: 6,
      carryLimit: 99,
      value: 1680,
      name: "Tzitzi-Ya-Ku Photophore+",
      description: "Rare Tzitzi-Ya-Ku material. Obtained by breaking its pulse organs. Unusual, used for many purposes."
    },
    {
      id: 293,
      rarity: 4,
      carryLimit: 99,
      value: 650,
      name: "Paolumu Pelt",
      description: "Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 294,
      rarity: 4,
      carryLimit: 99,
      value: 450,
      name: "Paolumu Scale",
      description: "Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 295,
      rarity: 4,
      carryLimit: 99,
      value: 950,
      name: "Paolumu Shell",
      description: "Paolumu material. Obtained by breaking its tail. Used for many purposes."
    },
    {
      id: 296,
      rarity: 4,
      carryLimit: 99,
      value: 850,
      name: "Paolumu Webbing",
      description: "Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 297,
      rarity: 6,
      carryLimit: 99,
      value: 1570,
      name: "Paolumu Pelt+",
      description: "Rare Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 298,
      rarity: 6,
      carryLimit: 99,
      value: 1070,
      name: "Paolumu Scale+",
      description: "Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 299,
      rarity: 6,
      carryLimit: 99,
      value: 2140,
      name: "Paolumu Carapace+",
      description: "Rare Paolumu material. Obtained by breaking its tail. Used for many purposes."
    },
    {
      id: 300,
      rarity: 6,
      carryLimit: 99,
      value: 2070,
      name: "Paolumu Wing",
      description: "Rare Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 301,
      rarity: 4,
      carryLimit: 99,
      value: 450,
      name: "Great Girros Scale",
      description: "Great Girros material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 302,
      rarity: 4,
      carryLimit: 99,
      value: 650,
      name: "Great Girros Hide",
      description: "Great Girros material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 303,
      rarity: 4,
      carryLimit: 99,
      value: 950,
      name: "Great Girros Hood",
      description: "Great Girros material. Obtained by breaking its head. Unusual and difficult to handle."
    },
    {
      id: 304,
      rarity: 4,
      carryLimit: 99,
      value: 750,
      name: "Great Girros Fang",
      description: "Great Girros material. Obtained by breaking its head. Grants paralytic properties."
    },
    {
      id: 305,
      rarity: 4,
      carryLimit: 99,
      value: 850,
      name: "Great Girros Tail",
      description: "Great Girros material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 306,
      rarity: 6,
      carryLimit: 99,
      value: 1060,
      name: "Great Girros Scale+",
      description: "Rare Great Girros material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 307,
      rarity: 6,
      carryLimit: 99,
      value: 1560,
      name: "Great Girros Hide+",
      description: "Rare Great Girros material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 308,
      rarity: 6,
      carryLimit: 99,
      value: 2180,
      name: "Great Girros Hood+",
      description: "Rare Great Girros material. Obtained by breaking its head. Unusual, used in select gear."
    },
    {
      id: 309,
      rarity: 6,
      carryLimit: 99,
      value: 2060,
      name: "Great Girros Fang+",
      description: "Rare Great Girros material. Obtained by breaking its head. Grants paralytic properties."
    },
    {
      id: 310,
      rarity: 4,
      carryLimit: 99,
      value: 480,
      name: "Radobaan Scale",
      description: "Radobaan material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 311,
      rarity: 4,
      carryLimit: 99,
      value: 680,
      name: "Radobaan Shell",
      description: "Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 312,
      rarity: 4,
      carryLimit: 99,
      value: 960,
      name: "Radobaan Oilshell",
      description: "Radobaan material. Obtained by carving its severed tail. Impact-resistant, used to craft gear."
    },
    {
      id: 313,
      rarity: 4,
      carryLimit: 99,
      value: 880,
      name: "Wyvern Bonemass",
      description: "Radobaan material. Obtained by collecting rare drops. Highly dense, used for many purposes."
    },
    {
      id: 314,
      rarity: 4,
      carryLimit: 99,
      value: 1120,
      name: "Radobaan Marrow",
      description: "Radobaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 315,
      rarity: 6,
      carryLimit: 99,
      value: 1080,
      name: "Radobaan Scale+",
      description: "Rare Radobaan material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 316,
      rarity: 6,
      carryLimit: 99,
      value: 1580,
      name: "Radobaan Carapace",
      description: "Rare Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 317,
      rarity: 6,
      carryLimit: 99,
      value: 2240,
      name: "Radobaan Medulla",
      description: "Rare Radobaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 318,
      rarity: 4,
      carryLimit: 99,
      value: 540,
      name: "Legiana Scale",
      description: "Legiana material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 319,
      rarity: 4,
      carryLimit: 99,
      value: 790,
      name: "Legiana Hide",
      description: "Legiana material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 320,
      rarity: 4,
      carryLimit: 99,
      value: 1040,
      name: "Legiana Claw",
      description: "Legiana material. Mostly obtained by carving. Grants ice elemental properties."
    },
    {
      id: 321,
      rarity: 4,
      carryLimit: 99,
      value: 1080,
      name: "Legiana Webbing",
      description: "Legiana material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 322,
      rarity: 4,
      carryLimit: 99,
      value: 1160,
      name: "Legiana Tail Webbing",
      description: "Legiana material. Obtained by breaking its tail. Supple, used to craft gear."
    },
    {
      id: 323,
      rarity: 5,
      carryLimit: 99,
      value: 3000,
      name: "Legiana Plate",
      description: "Legiana material. A rare find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 324,
      rarity: 6,
      carryLimit: 99,
      value: 1230,
      name: "Legiana Scale+",
      description: "Rare Legiana material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 325,
      rarity: 6,
      carryLimit: 99,
      value: 1830,
      name: "Legiana Hide+",
      description: "Rare Legiana material. Mostly obtained as a reward. Lightweight, used to craft gear."
    },
    {
      id: 326,
      rarity: 6,
      carryLimit: 99,
      value: 2430,
      name: "Legiana Claw+",
      description: "Rare Legiana material. Mostly obtained by carving. Grants ice elemental properties."
    },
    {
      id: 327,
      rarity: 6,
      carryLimit: 99,
      value: 2460,
      name: "Legiana Wing",
      description: "Rare Legiana material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 328,
      rarity: 7,
      carryLimit: 99,
      value: 7200,
      name: "Legiana Gem",
      description: "A rare gem said to have formed within Legiana tissue. Used to dramatically improve gear."
    },
    {
      id: 329,
      rarity: 4,
      carryLimit: 99,
      value: 560,
      name: "Odogaron Scale",
      description: "Odogaron material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 330,
      rarity: 4,
      carryLimit: 99,
      value: 810,
      name: "Odogaron Sinew",
      description: "Odogaron material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 331,
      rarity: 4,
      carryLimit: 99,
      value: 1060,
      name: "Odogaron Claw",
      description: "Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 332,
      rarity: 4,
      carryLimit: 99,
      value: 1120,
      name: "Odogaron Fang",
      description: "Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 333,
      rarity: 4,
      carryLimit: 99,
      value: 1240,
      name: "Odogaron Tail",
      description: "Odogaron material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 334,
      rarity: 5,
      carryLimit: 99,
      value: 3000,
      name: "Odogaron Plate",
      description: "Odogaron material. A rare find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 335,
      rarity: 6,
      carryLimit: 99,
      value: 1240,
      name: "Odogaron Scale+",
      description: "Rare Odogaron material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 336,
      rarity: 6,
      carryLimit: 99,
      value: 1840,
      name: "Odogaron Sinew+",
      description: "Rare Odogaron material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 337,
      rarity: 6,
      carryLimit: 99,
      value: 2440,
      name: "Odogaron Claw+",
      description: "Rare Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 338,
      rarity: 6,
      carryLimit: 99,
      value: 2480,
      name: "Odogaron Fang+",
      description: "Rare Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 339,
      rarity: 7,
      carryLimit: 99,
      value: 7200,
      name: "Odogaron Gem",
      description: "A rare gem said to have formed within Odogaron tissue. Used to dramatically improve gear."
    },
    {
      id: 340,
      rarity: 4,
      carryLimit: 99,
      value: 590,
      name: "Rathalos Scale",
      description: "Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 341,
      rarity: 4,
      carryLimit: 99,
      value: 840,
      name: "Rathalos Shell",
      description: "Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 342,
      rarity: 4,
      carryLimit: 99,
      value: 1180,
      name: "Rathalos Webbing",
      description: "Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 343,
      rarity: 4,
      carryLimit: 99,
      value: 1270,
      name: "Rathalos Tail",
      description: "Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
    },
    {
      id: 344,
      rarity: 4,
      carryLimit: 99,
      value: 1090,
      name: "Rath Wingtalon",
      description: "Material from Rathian and Rathalos. Obtained by breaking its wings. Sharp, used in many weapons."
    },
    {
      id: 345,
      rarity: 4,
      carryLimit: 99,
      value: 1360,
      name: "Rathalos Marrow",
      description: "Rathalos material. Obtained by carving. Grants fire element properties."
    },
    {
      id: 346,
      rarity: 5,
      carryLimit: 99,
      value: 3000,
      name: "Rathalos Plate",
      description: "Rathalos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 347,
      rarity: 6,
      carryLimit: 99,
      value: 1250,
      name: "Rathalos Scale+",
      description: "Rare Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 348,
      rarity: 6,
      carryLimit: 99,
      value: 1850,
      name: "Rathalos Carapace",
      description: "Rare Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 349,
      rarity: 6,
      carryLimit: 99,
      value: 2500,
      name: "Rathalos Wing",
      description: "Rare Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 350,
      rarity: 6,
      carryLimit: 99,
      value: 2600,
      name: "Rathalos Medulla",
      description: "Rare Rathalos material. Obtained by carving. Grants fire element properties."
    },
    {
      id: 351,
      rarity: 7,
      carryLimit: 99,
      value: 7200,
      name: "Rathalos Ruby",
      description: "A rare gem said to have formed within Rathalos tissue. Almost too nice to use."
    },
    {
      id: 352,
      rarity: 6,
      carryLimit: 99,
      value: 1450,
      name: "Azure Rathalos Scale+",
      description: "Rare Azure Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 353,
      rarity: 6,
      carryLimit: 99,
      value: 2150,
      name: "Azure Rathalos Carapace",
      description: "Rare Azure Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 354,
      rarity: 6,
      carryLimit: 99,
      value: 3000,
      name: "Azure Rathalos Tail",
      description: "Rare Azure Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
    },
    {
      id: 355,
      rarity: 6,
      carryLimit: 99,
      value: 2850,
      name: "Azure Rathalos Wing",
      description: "Rare Azure Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 356,
      rarity: 4,
      carryLimit: 99,
      value: 620,
      name: "Diablos Shell",
      description: "Diablos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 357,
      rarity: 4,
      carryLimit: 99,
      value: 870,
      name: "Diablos Ridge",
      description: "Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 358,
      rarity: 4,
      carryLimit: 99,
      value: 1240,
      name: "Diablos Tailcase",
      description: "Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle."
    },
    {
      id: 359,
      rarity: 4,
      carryLimit: 99,
      value: 1120,
      name: "Diablos Fang",
      description: "Diablos material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 360,
      rarity: 4,
      carryLimit: 99,
      value: 1360,
      name: "Twisted Horn",
      description: "Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 361,
      rarity: 4,
      carryLimit: 99,
      value: 1480,
      name: "Diablos Marrow",
      description: "Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 362,
      rarity: 6,
      carryLimit: 99,
      value: 1260,
      name: "Diablos Carapace",
      description: "Rare Diablos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 363,
      rarity: 6,
      carryLimit: 99,
      value: 1860,
      name: "Diablos Ridge+",
      description: "Rare Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 364,
      rarity: 6,
      carryLimit: 99,
      value: 2980,
      name: "Majestic Horn",
      description: "Rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 365,
      rarity: 6,
      carryLimit: 99,
      value: 3040,
      name: "Blos Medulla",
      description: "Rare Diablos material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 366,
      rarity: 6,
      carryLimit: 99,
      value: 1450,
      name: "Black Diablos Carapace",
      description: "Rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 367,
      rarity: 6,
      carryLimit: 99,
      value: 2150,
      name: "Black Diablos Ridge+",
      description: "Rare Black Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 368,
      rarity: 6,
      carryLimit: 99,
      value: 5700,
      name: "Black Spiral Horn+",
      description: "Rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 369,
      rarity: 4,
      carryLimit: 99,
      value: 750,
      name: "Kirin Hide",
      description: "Kirin material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 370,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Kirin Tail",
      description: "Kirin material. Mostly obtained as a reward. Compatible with thunder element."
    },
    {
      id: 371,
      rarity: 4,
      carryLimit: 99,
      value: 1250,
      name: "Kirin Mane",
      description: "Kirin material. Mostly obtained by carving. Highly thunder-resistant, used to craft gear."
    },
    {
      id: 372,
      rarity: 4,
      carryLimit: 99,
      value: 1750,
      name: "Kirin Thunderhorn",
      description: "Kirin material. Obtain by breaking its horn. Grants thunder element properties."
    },
    {
      id: 373,
      rarity: 7,
      carryLimit: 99,
      value: 1630,
      name: "Kirin Hide+",
      description: "Rare Kirin material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 374,
      rarity: 7,
      carryLimit: 99,
      value: 2430,
      name: "Kirin Thundertail",
      description: "Rare Kirin material. Mostly obtained as a reward. Compatible with thunder element."
    },
    {
      id: 375,
      rarity: 7,
      carryLimit: 99,
      value: 3200,
      name: "Kirin Azure Horn",
      description: "Rare Kirin material. Obtain by breaking its horn. Grants thunder element properties."
    },
    {
      id: 376,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Zorah Magdaros Heat Scale",
      description: "Zorah Magdaros material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 377,
      rarity: 6,
      carryLimit: 99,
      value: 1200,
      name: "Zorah Magdaros Carapace",
      description: "Zorah Magdaros material. Obtained as a rare drop or by mining. Solid, used to craft gear."
    },
    {
      id: 378,
      rarity: 6,
      carryLimit: 99,
      value: 1400,
      name: "Zorah Magdaros Ridge",
      description: "Zorah Magdaros material. Mostly obtained as a reward. Stout, used in many weapons."
    },
    {
      id: 379,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Zorah Magdaros Pleura",
      description: "Zorah Magdaros material. Obtained by breaking its chest. Heavy, used to craft armor."
    },
    {
      id: 380,
      rarity: 6,
      carryLimit: 99,
      value: 3200,
      name: "Zorah Magdaros Magma",
      description: "Zorah Magdaros material. Obtained by breaking its head. Unusual and difficult to handle."
    },
    {
      id: 381,
      rarity: 7,
      carryLimit: 99,
      value: 6000,
      name: "Zorah Magdaros Gem",
      description: "A rare gem said to have formed with Zorah Magdaros tissue. Holds untold potential."
    },
    {
      id: 382,
      rarity: 6,
      carryLimit: 99,
      value: 1030,
      name: "Dodogama Scale+",
      description: "Rare Dodogama material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 383,
      rarity: 6,
      carryLimit: 99,
      value: 1530,
      name: "Dodogama Hide+",
      description: "Rare Dodogama material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 384,
      rarity: 6,
      carryLimit: 99,
      value: 2120,
      name: "Dodogama Jaw",
      description: "Rare Dodogama material. Obtained by breaking its head. Unusual and difficult to handle."
    },
    {
      id: 385,
      rarity: 6,
      carryLimit: 99,
      value: 2060,
      name: "Dodogama Talon",
      description: "Rare Dodogama material. Obtained by breaking its forelegs. Heavy, used to craft armor."
    },
    {
      id: 386,
      rarity: 6,
      carryLimit: 99,
      value: 2210,
      name: "Dodogama Tail",
      description: "Rare Dodogama material. Obtained by carving its severed tail. Tough, used in many weapons."
    },
    {
      id: 387,
      rarity: 6,
      carryLimit: 99,
      value: 1280,
      name: "Lavasioth Scale+",
      description: "Rare Lavasioth material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 388,
      rarity: 6,
      carryLimit: 99,
      value: 1880,
      name: "Lavasioth Carapace",
      description: "Rare Lavasioth material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 389,
      rarity: 6,
      carryLimit: 99,
      value: 2480,
      name: "Lavasioth Fang+",
      description: "Rare Lavasioth material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 390,
      rarity: 6,
      carryLimit: 99,
      value: 2560,
      name: "Lavasioth Fin+",
      description: "Rare Lavasioth material. Obtained by breaking its dorsal fin. Used for many purposes."
    },
    {
      id: 391,
      rarity: 6,
      carryLimit: 99,
      value: 1460,
      name: "Uragaan Scale+",
      description: "Rare Uragaan material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 392,
      rarity: 6,
      carryLimit: 99,
      value: 2160,
      name: "Uragaan Carapace",
      description: "Rare Uragaan material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 393,
      rarity: 6,
      carryLimit: 99,
      value: 2980,
      name: "Uragaan Jaw",
      description: "Rare Uragaan material. Obtained from breaking its jaw. Unusual, used in select gear."
    },
    {
      id: 394,
      rarity: 6,
      carryLimit: 99,
      value: 2880,
      name: "Uragaan Scute",
      description: "Rare Uragaan material. Obtained by carving its severed tail. Highly heat-resistant, used to craft gear."
    },
    {
      id: 395,
      rarity: 6,
      carryLimit: 99,
      value: 3100,
      name: "Uragaan Marrow",
      description: "Rare Uragaan material. A valuable find, used to fortify gear. Said to be quite hard to come by."
    },
    {
      id: 396,
      rarity: 7,
      carryLimit: 99,
      value: 8400,
      name: "Uragaan Ruby",
      description: "A rare gem said to have formed within Uragaan tissue. Used to dramatically improve gear."
    },
    {
      id: 397,
      rarity: 6,
      carryLimit: 99,
      value: 1580,
      name: "Lava Nugget",
      description: "A rare conglomerate ore found growing on an Uragaan. Composed of various ores, melted together."
    },
    {
      id: 398,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Bazelgeuse Scale+",
      description: "Rare Bazelgeuse material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 399,
      rarity: 6,
      carryLimit: 99,
      value: 2400,
      name: "Bazelgeuse Carapace",
      description: "Rare Bazelgeuse material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 400,
      rarity: 6,
      carryLimit: 99,
      value: 3600,
      name: "Bazelgeuse Tail",
      description: "Rare Bazelgeuse material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 401,
      rarity: 6,
      carryLimit: 99,
      value: 4000,
      name: "Bazelgeuse Fuse",
      description: "Rare Bazelgeuse material. Obtained by breaking its head. Grants blast element properties."
    },
    {
      id: 402,
      rarity: 6,
      carryLimit: 99,
      value: 3200,
      name: "Bazelgeuse Talon",
      description: "Rare Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
    },
    {
      id: 403,
      rarity: 6,
      carryLimit: 99,
      value: 3400,
      name: "Bazelgeuse Wing",
      description: "Rare Bazelgeuse material. Obtained by breaking its wings. Hard, used in many weapons."
    },
    {
      id: 404,
      rarity: 7,
      carryLimit: 99,
      value: 9600,
      name: "Bazelgeuse Gem",
      description: "A rare gem said to have formed within Bazelgeuse tissue. Used to dramatically improve gear."
    },
    {
      id: 405,
      rarity: 7,
      carryLimit: 99,
      value: 2100,
      name: "Immortal Dragonscale",
      description: "Rare Nergigante material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 406,
      rarity: 7,
      carryLimit: 99,
      value: 3200,
      name: "Nergigante Carapace",
      description: "Rare Nergigante material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 407,
      rarity: 7,
      carryLimit: 99,
      value: 4300,
      name: "Nergigante Tail",
      description: "Rare Nergigante material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 408,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Nergigante Horn+",
      description: "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 409,
      rarity: 7,
      carryLimit: 99,
      value: 4500,
      name: "Nergigante Talon",
      description: "Rare Nergigante material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 410,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Nergigante Regrowth Plate",
      description: "Rare Nergigante material. Obtained by collecting rare drops. Unusual, used to craft gear."
    },
    {
      id: 411,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Nergigante Gem",
      description: "A rare gem said to have formed within Nergigante tissue. Holds untold potential."
    },
    {
      id: 412,
      rarity: 7,
      carryLimit: 99,
      value: 2250,
      name: "Deceased Scale",
      description: "Rare Vaal Hazak material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 413,
      rarity: 7,
      carryLimit: 99,
      value: 3350,
      name: "Vaal Hazak Carapace",
      description: "Rare Vaal Hazak material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 414,
      rarity: 7,
      carryLimit: 99,
      value: 3500,
      name: "Vaal Hazak Membrane",
      description: "Rare Vaal Hazak material. Obtained by collecting rare drops. Grants dragon element properties."
    },
    {
      id: 415,
      rarity: 7,
      carryLimit: 99,
      value: 4900,
      name: "Vaal Hazak Tail",
      description: "Rare Vaal Hazak material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 416,
      rarity: 7,
      carryLimit: 99,
      value: 4600,
      name: "Vaal Hazak Fang+",
      description: "Rare Vaal Hazak material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 417,
      rarity: 7,
      carryLimit: 99,
      value: 4750,
      name: "Vaal Hazak Talon",
      description: "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 418,
      rarity: 7,
      carryLimit: 99,
      value: 4450,
      name: "Vaal Hazak Wing",
      description: "Rare Vaal Hazak material. Obtained by carving its torso. Light yet firm, used to craft gear."
    },
    {
      id: 419,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Vaal Hazak Gem",
      description: "A rare gem said to have formed within Vaal Hazak Tissue. Holds untold potential."
    },
    {
      id: 420,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Teostra Carapace",
      description: "Rare Teostra material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 421,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Teostra Mane",
      description: "Rare Teostra material. Obtained by breaking its head. Highly fire-resistant, used to craft gear."
    },
    {
      id: 422,
      rarity: 7,
      carryLimit: 99,
      value: 4900,
      name: "Teostra Tail",
      description: "Rare Teostra material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 423,
      rarity: 7,
      carryLimit: 99,
      value: 5500,
      name: "Teostra Horn+",
      description: "Rare Teostra material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 424,
      rarity: 7,
      carryLimit: 99,
      value: 2300,
      name: "Fire Dragon Scale+",
      description: "Rare Teostra material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 425,
      rarity: 7,
      carryLimit: 99,
      value: 4700,
      name: "Teostra Claw+",
      description: "Rare Teostra material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 426,
      rarity: 7,
      carryLimit: 99,
      value: 4500,
      name: "Teostra Webbing",
      description: "Rare Teostra material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 427,
      rarity: 7,
      carryLimit: 99,
      value: 3600,
      name: "Teostra Powder",
      description: "Rare Teostra material. Obtained by collecting rare drops. Unusual, used in select gear."
    },
    {
      id: 428,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Teostra Gem",
      description: "A rare gem said to have formed within Teostra tissue. Within it lies unimaginable power."
    },
    {
      id: 429,
      rarity: 7,
      carryLimit: 99,
      value: 3300,
      name: "Daora Carapace",
      description: "Rare Kushala Daora material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 430,
      rarity: 7,
      carryLimit: 99,
      value: 2200,
      name: "Daora Dragon Scale+",
      description: "Rare Kushala Daora material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 431,
      rarity: 7,
      carryLimit: 99,
      value: 4300,
      name: "Daora Webbing",
      description: "Rare Kushala Daora material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 432,
      rarity: 7,
      carryLimit: 99,
      value: 4500,
      name: "Daora Horn+",
      description: "Rare Kushala Daora material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 433,
      rarity: 7,
      carryLimit: 99,
      value: 4800,
      name: "Daora Tail",
      description: "Rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 434,
      rarity: 7,
      carryLimit: 99,
      value: 4400,
      name: "Daora Claw+",
      description: "Rare Kushala Daora material. Mostly obtained by carving. Imbued with potent ice element."
    },
    {
      id: 435,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Daora Gem",
      description: "A rare gem said to have formed within Kushala Daora tissue. Holds untold potential."
    },
    {
      id: 436,
      rarity: 7,
      carryLimit: 99,
      value: 3000,
      name: "Xeno'jiiva Soulscale",
      description: "Rare Xeno'jiiva material. The burnt scale still radiates vestiges of the hereafter."
    },
    {
      id: 437,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Xeno'jiiva Shell",
      description: "A rare piece of Xeno'jiiva shell, tempered to act as a vessel for the flames of the underworld."
    },
    {
      id: 438,
      rarity: 7,
      carryLimit: 99,
      value: 4300,
      name: "Xeno'jiiva Veil",
      description: "A rare Xeno'jiiva organ that stores energy that can be released in a violent torrent."
    },
    {
      id: 439,
      rarity: 7,
      carryLimit: 99,
      value: 6000,
      name: "Xeno'jiiva Tail",
      description: "A rare, strong Xeno'jiiva tail that can brush aside all enemies in a single lash."
    },
    {
      id: 440,
      rarity: 7,
      carryLimit: 99,
      value: 5600,
      name: "Xeno'jiiva Horn",
      description: "A rare Xeno'jiiva horn. During growth, it's theorized that it helps control the beast's power."
    },
    {
      id: 441,
      rarity: 7,
      carryLimit: 99,
      value: 5300,
      name: "Xeno'jiiva Claw",
      description: "A rare Xeno'jiiva claw, said to cleave soul from flesh."
    },
    {
      id: 442,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Xeno'jiiva Wing",
      description: "A rare Xeno'jiiva wing. The wing membrane shines with the divine light of a powerful deity."
    },
    {
      id: 443,
      rarity: 8,
      carryLimit: 99,
      value: 15000,
      name: "Xeno'jiiva Gem",
      description: "A phantasmal gem formed inside the tissue of Xeno'jiiva. The power it holds defies comprehension."
    },
    {
      id: 444,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Tailraider Voucher",
      description: "Proof of friendship with the Lynians of the new continent. Show it to the Smithy and see what happens!"
    },
    {
      id: 445,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Gajalaka Sketch",
      description: "Proof of friendship with the Gajalaka tribes of the new continent. Show it to the Smithy and see what happens!"
    },
    {
      id: 446,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Black Bandage",
      description: "Cloth made from the glossy black hide of a monster. Not obtainable by normal means."
    },
    {
      id: 447,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Black Crystal Ticket",
      description: "A ticket you can trade for a crystal that emits a darkness-sucking light. Not obtainable by normal means."
    },
    {
      id: 448,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Wiggler Ticket",
      description: "A ticket given to those who help with Wiggler research. Comes with a rough sketch from a researcher."
    },
    {
      id: 449,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Watcher Lens",
      description: "Material obtained from a Machine. Its unusual circuitry can be used to craft special Palico equipment."
    },
    {
      id: 450,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Nora Brave Trophy",
      description: "Proof that you have completed the Proving. Grants you the right to craft special equipment."
    },
    {
      id: 451,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "SFV Ticket",
      description: "A ticket for a special Street Fighter tie-in. Wait...does that mean that legendary fighter is going to...!?"
    },
    {
      id: 452,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Azure Star Shard",
      description: "Special material given to those who complete USJ's challenge. Glows a beautiful, transparent blue."
    },
    {
      id: 453,
      rarity: 4,
      carryLimit: 10,
      value: 25,
      name: "Mysterious Feystone",
      description: "A jewel that conceals faint traces of power within it. (Appraisal Item)"
    },
    {
      id: 454,
      rarity: 5,
      carryLimit: 10,
      value: 25,
      name: "Glowing Feystone",
      description: "A jewel that conceals an unknown power within it. (Appraisal Item)"
    },
    {
      id: 455,
      rarity: 6,
      carryLimit: 10,
      value: 25,
      name: "Worn Feystone",
      description: "A jewel that conceals considerable power within it. (Appraisal Item)"
    },
    {
      id: 456,
      rarity: 7,
      carryLimit: 10,
      value: 25,
      name: "Warped Feystone",
      description: "A jewel that conceals a mystical power within it. (Appraisal Item)"
    },
    {
      id: 457,
      rarity: 6,
      carryLimit: 10,
      value: 25,
      name: "Sullied Streamstone",
      description: "Though dirty, this stone pulses with undeniable power. (Appraisal Item)"
    },
    {
      id: 458,
      rarity: 8,
      carryLimit: 10,
      value: 25,
      name: "Shining Streamstone",
      description: "A stone that shines with the brilliance of endless possibility. (Appraisal Item)"
    },
    {
      id: 459,
      rarity: 6,
      carryLimit: 99,
      value: 1000,
      name: "Streamstone Shard",
      description: "A rare stone taken from a tempered monster. The longer a beast's reign of terror, the larger the shard."
    },
    {
      id: 460,
      rarity: 7,
      carryLimit: 99,
      value: 2000,
      name: "Streamstone",
      description: "A rare stone taken from a tempered monster. A crystal of pure power, born of a beast's endless desires."
    },
    {
      id: 461,
      rarity: 8,
      carryLimit: 99,
      value: 3000,
      name: "Gleaming Streamstone",
      description: "A rare stone taken from a tempered monster. Proof that it ruled for an age as a tyrant unchallenged."
    },
    {
      id: 462,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Sword",
      description: "A material used by champions of old. Used to bring out the hidden power in long swords and great swords."
    },
    {
      id: 463,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Blade",
      description: "A material used by champions of old. Used to bring out the hidden power in swords and shields and dual blades."
    },
    {
      id: 464,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Hammer",
      description: "A material used by champions of old. Used to bring out the hidden power in hammers and hunting horns."
    },
    {
      id: 465,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Lance",
      description: "A material used by champions of old. Used to bring out the hidden power in lances and gunlances."
    },
    {
      id: 466,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Axe",
      description: "A material used by champions of old. Used to bring out the hidden power in switch axes and charge blades."
    },
    {
      id: 467,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Shaft",
      description: "A material used by champions of old. Used to bring out the hidden power in insect glaives and bows."
    },
    {
      id: 468,
      rarity: 6,
      carryLimit: 10,
      value: 10000,
      name: "Warrior's Streamstone: Ranged",
      description: "A material used by champions of old. Used to bring out the hidden power in light bowguns and heavy bowguns."
    },
    {
      id: 469,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Sword",
      description: "A material used by legendary heroes. Used to bring out the hidden power in long swords and great swords."
    },
    {
      id: 470,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Blade",
      description: "A material used by legendary heroes. Used to bring out the hidden power in swords and shields and dual blades."
    },
    {
      id: 471,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Hammer",
      description: "A material used by legendary heroes. Used to bring out the hidden power in hammers and hunting horns."
    },
    {
      id: 472,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Lance",
      description: "A material used by legendary heroes. Used to bring out the hidden power in lances and gunlances."
    },
    {
      id: 473,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Axe",
      description: "A material used by legendary heroes. Used to bring out the hidden power in switch axes and charge blades."
    },
    {
      id: 474,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Shaft",
      description: "A material used by legendary heroes. Used to bring out the hidden power in insect glaives and bows."
    },
    {
      id: 475,
      rarity: 8,
      carryLimit: 10,
      value: 20000,
      name: "Hero's Streamstone: Ranged",
      description: "A material used by legendary heroes. Used to bring out the hidden power in light bowguns and heavy bowguns."
    },
    {
      id: 476,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Voucher",
      description: "Redeem this for a special meal with stronger effects than usual."
    },
    {
      id: 477,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "First Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. You can exchange it for items at the Melding Pot."
    },
    {
      id: 478,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "Deluxe First Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. You can exchange it for items at the Melding Pot."
    },
    {
      id: 479,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "Steel Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. Exchange it for materials at the Melding Pot."
    },
    {
      id: 480,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "Silver Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. Exchange it for rare materials at the Melding Pot."
    },
    {
      id: 481,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "Gold Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. Exchange it for very rare materials at the Melding Pot."
    },
    {
      id: 482,
      rarity: 5,
      carryLimit: 99,
      value: 0,
      name: "Commendation",
      description: "A ticket awarded for demonstrating courage. Collect them and something wonderful may happen!"
    },
    {
      id: 483,
      rarity: 7,
      carryLimit: 99,
      value: 0,
      name: "High Commendation",
      description: "A ticket awarded for demonstrating tremendous courage. Collect them and something wonderful may happen!"
    },
    {
      id: 484,
      rarity: 7,
      carryLimit: 99,
      value: 0,
      name: "Research Commission Ticket",
      description: "A ticket issued by the commander to those who have aided the Research Commission. Show it to the Smithy!"
    },
    {
      id: 485,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Pukei Coin",
      description: "A coin given to those who have bested a Pukei-Pukei in the Arena."
    },
    {
      id: 486,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Kulu Coin",
      description: "A coin given to those who have bested a Kulu-Ya-Ku in the Arena."
    },
    {
      id: 487,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Rathian Coin",
      description: "A coin given to those who have bested a Rathian in the Arena."
    },
    {
      id: 488,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Tzitzi Coin",
      description: "A coin given to those who have bested a Tzitzi-Ya-Ku in the Arena."
    },
    {
      id: 489,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Barroth Coin",
      description: "A coin given to those who have bested a Barroth in the Arena."
    },
    {
      id: 490,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Gama Coin",
      description: "A coin given to those who have bested a Dodogama in the Arena."
    },
    {
      id: 491,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Rathalos Coin",
      description: "A coin given to those who have bested a Rathalos in the Arena."
    },
    {
      id: 492,
      rarity: 4,
      carryLimit: 99,
      value: 1500,
      name: "Brute Coin",
      description: "A coin given to those who have bested multiple brute Wyverns at the same time in the Arena."
    },
    {
      id: 493,
      rarity: 4,
      carryLimit: 99,
      value: 1500,
      name: "Flying Coin",
      description: "A coin given to those who have bested multiple flying Wyverns at the same time in the Arena."
    },
    {
      id: 494,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Pinnacle Coin",
      description: "A commemorative coin bestowed on hunters who have mastered the craft. The value of its sheen? Priceless."
    },
    {
      id: 495,
      rarity: 6,
      carryLimit: 99,
      value: 1200,
      name: "Hunter King Coin",
      description: "A silver coin given to true hunters. It shines with all the glory of the Hunter King."
    },
    {
      id: 496,
      rarity: 8,
      carryLimit: 99,
      value: 2000,
      name: "Ace Hunter Coin",
      description: "A golden coin given to hunters at the pinnacle of their field. Only a small handful ever know such honor."
    },
    {
      id: 497,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Steel Egg",
      description: "An egg of glittering steel. Valuable and rare, but of no use to a hunter. (Trade-in Item)"
    },
    {
      id: 498,
      rarity: 4,
      carryLimit: 99,
      value: 10000,
      name: "Silver Egg",
      description: "An egg of glittering silver. Valuable and rare, but of no use to a hunter. (Trade-in Item)"
    },
    {
      id: 499,
      rarity: 4,
      carryLimit: 99,
      value: 20000,
      name: "Golden Egg",
      description: "An egg of glittering gold. Super valuable and rare, but of no use to a hunter. (Trade-in Item)"
    },
    {
      id: 500,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Chipped Scale",
      description: "Acquired by using the Bandit Mantle. Chipped, but still prized by collectors. (Trade-in Item)"
    },
    {
      id: 501,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Large Scale",
      description: "Acquired by using the Bandit Mantle. Consistently popular among collectors. (Trade-in Item)"
    },
    {
      id: 502,
      rarity: 5,
      carryLimit: 99,
      value: 2000,
      name: "Beautiful Scale",
      description: "Acquired by using the Bandit Mantle. In perpetual demand among collectors. (Trade-in Item)"
    },
    {
      id: 503,
      rarity: 6,
      carryLimit: 99,
      value: 3000,
      name: "Lustrous Scale",
      description: "Acquired by using the Bandit Mantle. A source of pride for any collector. (Trade-in Item)"
    },
    {
      id: 504,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Glimmering Scale",
      description: "Acquired by using the Bandit Mantle. A must-have for any collector. (Trade-in Item)"
    },
    {
      id: 505,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Bhernastone",
      description: "An Old World import. Beautiful, but not suitable for crafting (Trade-in Item)"
    },
    {
      id: 506,
      rarity: 4,
      carryLimit: 99,
      value: 800,
      name: "Dundormarin",
      description: "An Old World import. Beautiful, but not suitable for crafting (Trade-in Item)"
    },
    {
      id: 507,
      rarity: 5,
      carryLimit: 99,
      value: 1500,
      name: "Loc Lac Ore",
      description: "An Old World import. Beautiful, but not suitable for crafting. (Trade-in Item)"
    },
    {
      id: 508,
      rarity: 6,
      carryLimit: 99,
      value: 2000,
      name: "Val Habar Quartz",
      description: "An Old World import. Beautiful, but not suitable for crafting. (Trade-in Item)"
    },
    {
      id: 509,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Minegardenite",
      description: "An Old World import. Beautiful, but not suitable for crafting. (Trade-in Item)"
    },
    {
      id: 510,
      rarity: 4,
      carryLimit: 99,
      value: 1000,
      name: "Golden Scale",
      description: "The scales of a Goldenfish. They shimmer like only pure gold can. (Trade-in Item)"
    },
    {
      id: 511,
      rarity: 5,
      carryLimit: 99,
      value: 10000,
      name: "Golden Scale+",
      description: "The scales of a Great Goldenfish. Trades at the same price as actual gold. (Trade-in Item)"
    },
    {
      id: 512,
      rarity: 4,
      carryLimit: 99,
      value: 2000,
      name: "Platinum Scale",
      description: "The scales of a Platinumfish. They give off a beautiful gleam. (Trade-in Item)"
    },
    {
      id: 513,
      rarity: 5,
      carryLimit: 99,
      value: 20000,
      name: "Platinum Scale+",
      description: "The scales of a Great Platinumfish. Their shine is nigh on blinding. (Trade-in Item)"
    },
    {
      id: 514,
      rarity: 4,
      carryLimit: 99,
      value: 500,
      name: "Gilded Scale",
      description: "The scales of a Goldenfry. Used by artisans in their crafts. (Trade-in Item)"
    },
    {
      id: 515,
      rarity: 5,
      carryLimit: 99,
      value: 5000,
      name: "Gilded Scale+",
      description: "The scales of a Great Goldenfry. Used in the very finest of crafts. (Trade-in Item)"
    },
    {
      id: 516,
      rarity: 6,
      carryLimit: 99,
      value: 1600,
      name: "Deviljho Scale",
      description: "Rare Deviljho material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 517,
      rarity: 6,
      carryLimit: 99,
      value: 2400,
      name: "Deviljho Hide",
      description: "Rare Deviljho material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 518,
      rarity: 6,
      carryLimit: 99,
      value: 3200,
      name: "Deviljho Tallfang",
      description: "Rare Deviljho material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 519,
      rarity: 6,
      carryLimit: 99,
      value: 3400,
      name: "Deviljho Talon",
      description: "Rare Deviljho material. Mostly obtained by carving. Compatible with dragon element."
    },
    {
      id: 520,
      rarity: 6,
      carryLimit: 99,
      value: 4000,
      name: "Deviljho Scalp",
      description: "Rare Deviljho material. Obtained by breaking its head. Unusual, used in select gear."
    },
    {
      id: 521,
      rarity: 6,
      carryLimit: 99,
      value: 3600,
      name: "Deviljho Tail",
      description: "Rare Deviljho material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 522,
      rarity: 6,
      carryLimit: 99,
      value: 2200,
      name: "Deviljho Saliva",
      description: "Rare Deviljho material. Obtained by collecting rare drops. Unusual and difficult to handle."
    },
    {
      id: 523,
      rarity: 7,
      carryLimit: 99,
      value: 9600,
      name: "Deviljho Gem",
      description: "A rare gem said to have formed within Deviljho tissue. Used to dramatically improve gear."
    },
    {
      id: 524,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Kulu-Ya-Ku Ticket",
      description: "A ticket given to those who help with Kulu-Ya-Ku research. Includes a very accurate sketch."
    },
    {
      id: 525,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Spring Blossom Ticket",
      description: "A ticket you receive for attending the Spring Blossom Fest. Can be exchanged for special equipment or fireworks."
    },
    {
      id: 526,
      rarity: 6,
      carryLimit: 99,
      value: 800,
      name: "Master Craftsman's Blueprint",
      description: "A blueprint for a revolutionary Great Sword, designed by a famed craftsman."
    },
    {
      id: 528,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Spring Insect Field Guide",
      description: "A field guide containing must-know info about Great Hornflies. Show it to the Smithy for a...novel armor set."
    },
    {
      id: 529,
      rarity: 7,
      carryLimit: 99,
      value: 3000,
      name: "Kulve Taroth Golden Scale",
      description: "Rare Kulve Taroth material. Mostly obtained as a reward. Many have fallen trying to obtain just one of these."
    },
    {
      id: 530,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Kulve Taroth Golden Shell",
      description: "Rare Kulve Taroth material. Mostly obtained as a reward. Its value is tied to its brilliant gold shine."
    },
    {
      id: 531,
      rarity: 7,
      carryLimit: 99,
      value: 1000,
      name: "Kulve Taroth Golden Nugget",
      description: "Rare Kulve Taroth material. Obtained by collecting rare drops. Emits an exotic light towards those that look at it."
    },
    {
      id: 532,
      rarity: 7,
      carryLimit: 99,
      value: 6000,
      name: "Kulve Taroth Golden Spiralhorn",
      description: "Rare Kulve Taroth material. Obtained by breaking its head. It defiantly glows despite its age and weight."
    },
    {
      id: 533,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Kulve Taroth Golden Tailshell",
      description: "Rare Kulve Taroth material. Obtained by breaking its tail. It shimmers a lustrous gold."
    },
    {
      id: 534,
      rarity: 8,
      carryLimit: 99,
      value: 15000,
      name: "Kulve Taroth Golden Glimstone",
      description: "A rare gem said to have formed within Kulve Taroth tissue. Within it lies unimaginable power."
    },
    {
      id: 536,
      rarity: 3,
      carryLimit: 10,
      value: 7,
      name: "Blossom Fireworks",
      description: "Fireworks you receive for attending the Spring Blossom Fest. Light up the sky and enjoy the festivities!"
    },
    {
      id: 537,
      rarity: 3,
      carryLimit: 8,
      value: 4,
      name: "Tranq Ammo",
      description: "Bowgun ammo used to capture monsters ensnared in traps."
    },
    {
      id: 538,
      rarity: 2,
      carryLimit: 50,
      value: 2,
      name: "Power Coating",
      description: "An arrow coating that increases the attack power of arrows."
    },
    {
      id: 539,
      rarity: 4,
      carryLimit: 0,
      value: 0,
      name: "Close Range Coating",
      description: "Arrows designed to deal more damage to nearby targets, at the cost of a reduced maxmimum range."
    },
    {
      id: 540,
      rarity: 3,
      carryLimit: 20,
      value: 2,
      name: "Poison Coating",
      description: "An arrow coating that applies poison effects to arrows."
    },
    {
      id: 541,
      rarity: 3,
      carryLimit: 20,
      value: 3,
      name: "Paralysis Coating",
      description: "An arrow coating that applies paralysis effects to arrows."
    },
    {
      id: 542,
      rarity: 3,
      carryLimit: 20,
      value: 2,
      name: "Sleep Coating",
      description: "An arrow coating that induces sleep."
    },
    {
      id: 543,
      rarity: 3,
      carryLimit: 20,
      value: 6,
      name: "Blast Coating",
      description: "An arrow coating that applies explosives powder to arrows."
    },
    {
      id: 544,
      rarity: 1,
      carryLimit: 0,
      value: 0,
      name: "Normal Ammo 1",
      description: "Ammo for novices. Gets the job done, but it doesn't pack much oomph."
    },
    {
      id: 545,
      rarity: 2,
      carryLimit: 99,
      value: 1,
      name: "Normal Ammo 2",
      description: "Non-specialized ammo. More powerful than Normal Ammo 1."
    },
    {
      id: 546,
      rarity: 3,
      carryLimit: 99,
      value: 2,
      name: "Normal Ammo 3",
      description: "Ammo made with high-quality gunpowder. Each shot packs considerable punch."
    },
    {
      id: 547,
      rarity: 2,
      carryLimit: 60,
      value: 1,
      name: "Pierce Ammo 1",
      description: "Armor-piercing ammo that deals multiple hits to some monsters."
    },
    {
      id: 548,
      rarity: 3,
      carryLimit: 60,
      value: 3,
      name: "Pierce Ammo 3",
      description: "Max-grade armor-piercing ammo. Deals numerous hits."
    },
    {
      id: 549,
      rarity: 1,
      carryLimit: 80,
      value: 1,
      name: "Spread Ammo 1",
      description: "Ammo that covers a wide area. Deals multiple hits at close range."
    },
    {
      id: 550,
      rarity: 2,
      carryLimit: 70,
      value: 2,
      name: "Spread Ammo 2",
      description: "High-grade ammo that covers a wide area. Deals more hits than Spread Ammo 1."
    },
    {
      id: 551,
      rarity: 3,
      carryLimit: 60,
      value: 2,
      name: "Spread Ammo 3",
      description: "Max-garde ammo that covers a wide area and deals numerous hits."
    },
    {
      id: 552,
      rarity: 1,
      carryLimit: 9,
      value: 2,
      name: "Sticky Ammo 1",
      description: "Powerful ammo that lodges in a target and explodes. Also stuns."
    },
    {
      id: 553,
      rarity: 2,
      carryLimit: 9,
      value: 3,
      name: "Sticky Ammo 2",
      description: "Very powerful ammo that lodges in a target and explodes. Also stuns."
    },
    {
      id: 554,
      rarity: 3,
      carryLimit: 9,
      value: 4,
      name: "Sticky Ammo 3",
      description: "Extremely powerful ammo that lodges in a target and explodes. Also stuns."
    },
    {
      id: 555,
      rarity: 2,
      carryLimit: 3,
      value: 4,
      name: "Cluster Bomb 1",
      description: "Ammo that fragments into three shells upon impact. Beware of friendly fire!"
    },
    {
      id: 556,
      rarity: 3,
      carryLimit: 3,
      value: 6,
      name: "Cluster Bomb 2",
      description: "Ammo that fragments into four shells upon impact. Beware of friendly fire!"
    },
    {
      id: 557,
      rarity: 4,
      carryLimit: 3,
      value: 10,
      name: "Cluster Bomb 3",
      description: "Ammo that fragments into five shells upon impact. Beware of friendly fire!"
    },
    {
      id: 558,
      rarity: 2,
      carryLimit: 30,
      value: 3,
      name: "Slicing Ammo",
      description: "Ammo that ejects sharp blades on impact, which can sever tails."
    },
    {
      id: 559,
      rarity: 2,
      carryLimit: 60,
      value: 2,
      name: "Flaming Ammo",
      description: "Ammo that packs a punch against monsters susceptible to fire."
    },
    {
      id: 560,
      rarity: 2,
      carryLimit: 60,
      value: 2,
      name: "Water Ammo",
      description: "Ammo that packs a punch against monsters susceptible to water."
    },
    {
      id: 561,
      rarity: 2,
      carryLimit: 60,
      value: 2,
      name: "Thunder Ammo",
      description: "Ammo that packs a punch against monsters susceptible to thunder."
    },
    {
      id: 562,
      rarity: 2,
      carryLimit: 60,
      value: 2,
      name: "Freeze Ammo",
      description: "Ammo that packs a punch against monsters susceptible to ice."
    },
    {
      id: 563,
      rarity: 3,
      carryLimit: 3,
      value: 10,
      name: "Dragon Ammo",
      description: "Elderseal-imbued ammo that packs a punch against monsters weak to dragon."
    },
    {
      id: 564,
      rarity: 2,
      carryLimit: 12,
      value: 2,
      name: "Poison Ammo 1",
      description: "Poisons target, but may require several shots."
    },
    {
      id: 565,
      rarity: 3,
      carryLimit: 12,
      value: 2,
      name: "Poison Ammo 2",
      description: "Enhanced ammo that inflicts poison. Some targets require multiple shots."
    },
    {
      id: 566,
      rarity: 2,
      carryLimit: 12,
      value: 3,
      name: "Paralysis Ammo 1",
      description: "Ammo that causes paralysis. Some targets require multiple shots."
    },
    {
      id: 567,
      rarity: 3,
      carryLimit: 8,
      value: 5,
      name: "Paralysis Ammo 2",
      description: "Enhanced ammo that causes paralysis. Some targets require multiple shots."
    },
    {
      id: 568,
      rarity: 2,
      carryLimit: 12,
      value: 2,
      name: "Sleep Ammo 1",
      description: "Ammo that induces sleep. Some targets require multiple shots."
    },
    {
      id: 569,
      rarity: 3,
      carryLimit: 8,
      value: 3,
      name: "Sleep Ammo 2",
      description: "Enhanced ammo that induces sleep. Some targets require multiple shots."
    },
    {
      id: 570,
      rarity: 2,
      carryLimit: 12,
      value: 3,
      name: "Exhaust Ammo 1",
      description: "Ammo that drains a monster's stamina."
    },
    {
      id: 571,
      rarity: 3,
      carryLimit: 8,
      value: 5,
      name: "Exhaust Ammo 2",
      description: "Enhanced ammo that drains a monster's stamina."
    },
    {
      id: 572,
      rarity: 2,
      carryLimit: 12,
      value: 2,
      name: "Recover Ammo 1",
      description: "Ammo that restores a small amount of health to an ally upon impact."
    },
    {
      id: 573,
      rarity: 3,
      carryLimit: 12,
      value: 2,
      name: "Recover Ammo 2",
      description: "Ammo that restores a moderate amount of health to an ally upon impact."
    },
    {
      id: 574,
      rarity: 4,
      carryLimit: 5,
      value: 9,
      name: "Demon Ammo",
      description: "Ammo that fills the target with savage amounts of strength."
    },
    {
      id: 575,
      rarity: 4,
      carryLimit: 5,
      value: 7,
      name: "Armor Ammo",
      description: "Ammo that makes the target's skin as hard as stone."
    },
    {
      id: 576,
      rarity: 3,
      carryLimit: 5,
      value: 6,
      name: "Wyvern Ammo",
      description: "Ammo created through years of research into Wyvern's Fire."
    },
    {
      id: 577,
      rarity: 2,
      carryLimit: 80,
      value: 3,
      name: "Gunpowder Level 3",
      description: "Highly combustible powder. Combine with level 1 ammo to raise its level."
    },
    {
      id: 579,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Azure Stargem",
      description: "Special material for those who overcome the USJ challenge. Shines a miraculous blue."
    },
    {
      id: 580,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Red Orb",
      description: "Blood of demonic beings condensed into stone. Can be used to craft stylish devil hunter equipment."
    },
    {
      id: 581,
      rarity: 7,
      carryLimit: 99,
      value: 5000,
      name: "Aetheryte Shard",
      description: "A fragment of a glittering crystal. Contains an unknown, otherworldly energy called \"aether\"."
    },
    {
      id: 584,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "First Fleet Ticket",
      description: "A ticket with the First Fleet's flag and emblem. Redeem at the Smithy for something nice!?"
    },
    {
      id: 585,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Kirin Ticket",
      description: "A ticket bearing Kirin, caressed by lightning. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 586,
      rarity: 7,
      carryLimit: 99,
      value: 8000,
      name: "Behemoth Mane",
      description: "Rare Behemoth material. Tinged with magical power that can summon meteors from the heavens."
    },
    {
      id: 587,
      rarity: 7,
      carryLimit: 99,
      value: 7000,
      name: "Behemoth Bone",
      description: "Rare Behemoth material. Bone so absurdly strong that it can even knock out legendary heroes."
    },
    {
      id: 588,
      rarity: 8,
      carryLimit: 99,
      value: 15000,
      name: "Behemoth Great Horn",
      description: "Rare Behemoth material. The ominous light that this horn emits leaves even the Warriors of Light shaken."
    },
    {
      id: 589,
      rarity: 8,
      carryLimit: 99,
      value: 10000,
      name: "Behemoth Shearclaw",
      description: "Rare Behemoth material. These claws cut down weaker prey in a single blow."
    },
    {
      id: 590,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Behemoth Tail",
      description: "Rare Behemoth material. A thick, muscular tail that sweeps away all threats."
    },
    {
      id: 591,
      rarity: 7,
      carryLimit: 99,
      value: 2300,
      name: "Lunastra Scale+",
      description: "Rare Lunastra material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 592,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Lunastra Carapace",
      description: "Rare Lunastra material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 593,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Lunastra Mane",
      description: "Rare Lunastra material. Obtained by collecting rare drops. Valuable, fire resistant material."
    },
    {
      id: 594,
      rarity: 7,
      carryLimit: 99,
      value: 4500,
      name: "Lunastra Wing",
      description: "Rare Lunastra material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 595,
      rarity: 7,
      carryLimit: 99,
      value: 4900,
      name: "Lunastra Tail",
      description: "Rare Lunastra material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 596,
      rarity: 7,
      carryLimit: 99,
      value: 5500,
      name: "Lunastra Horn",
      description: "Rare Lunastra material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 597,
      rarity: 8,
      carryLimit: 99,
      value: 12000,
      name: "Lunastra Gem",
      description: "A rare gem said to have formed within Lunastra tissue. Within it lies unimaginable power."
    },
    {
      id: 598,
      rarity: 3,
      carryLimit: 0,
      value: 0,
      name: "Wyvern Tear",
      description: "Bitter tears wept by wyverns on certain occasions. (Account Item)"
    },
    {
      id: 599,
      rarity: 5,
      carryLimit: 0,
      value: 0,
      name: "Large Wyvern Tear",
      description: "Large, bitter tears wept by wyverns on certain occasions. (Account Item)"
    },
    {
      id: 600,
      rarity: 3,
      carryLimit: 0,
      value: 0,
      name: "Dragon Treasure",
      description: "A shiny rock that elder dragons like to collect. (Account Item)"
    },
    {
      id: 601,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Vaal Hazak Ticket",
      description: "A ticket bearing Vaal Hazak, engulfed in eternal darkness. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 602,
      rarity: 8,
      carryLimit: 99,
      value: 2000,
      name: "Kulve Taroth Emperor Nugget",
      description: "A glittering white gold nugget from Kulve Taroth. Bring it to the Smithy to craft new equipment!"
    },
    {
      id: 603,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Lunastra Ticket",
      description: "A ticket with Lunastra and Teostra, roaring in unison. Redeem at the Smithy for special equipment."
    },
    {
      id: 604,
      rarity: 9,
      carryLimit: 99,
      value: 1280,
      name: "Eltalite Ore",
      description: "Ore obtained from mining outcrops. This transcendent ore refines into metal even stronger than carbalite."
    },
    {
      id: 605,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Xeno'jiiva Ticket",
      description: "A ticket bearing Xeno'jiiva, elder dragon transcended. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 606,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Zorah Magdaros Ticket",
      description: "A ticket bearing Zorah, trampling over the New World. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 607,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Nergigante Ticket",
      description: "A ticket bearing Nergigante, utter destruction incarnate. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 608,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Kushala Daora Ticket",
      description: "A ticket bearing Kushala Daora, commanding the winds. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 609,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Teostra Ticket",
      description: "A ticket bearing Teostra, ruling over purgatory. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 611,
      rarity: 11,
      carryLimit: 99,
      value: 0,
      name: "Research Commission Ticket+",
      description: "A ticket issued by the commander to those who greatly aid the Research Commission. Show it to the Smithy!"
    },
    {
      id: 612,
      rarity: 11,
      carryLimit: 99,
      value: 0,
      name: "Steam Ticket",
      description: "A ticket issued by the Tech Chief to those who support the Steamworks. Show it to the smithy!"
    },
    {
      id: 613,
      rarity: 11,
      carryLimit: 99,
      value: 5000,
      name: "Tigrex Coin",
      description: "A coin given to those who have bested a Tigrex in the master rank Arena."
    },
    {
      id: 614,
      rarity: 10,
      carryLimit: 99,
      value: 2000,
      name: "Hero King Coin",
      description: "A silver coin given to true hunters. It shines with all the glory of the Hunter King."
    },
    {
      id: 615,
      rarity: 9,
      carryLimit: 99,
      value: 540,
      name: "Ancient Fragment",
      description: "A metal scrap the Tailraider Safari found on a master rank outing. Hard enough to be useful for...something?"
    },
    {
      id: 616,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Banbaro Coin",
      description: "A coin given to those who have bested a Banbaro in the master rank Arena."
    },
    {
      id: 617,
      rarity: 9,
      carryLimit: 99,
      value: 1500,
      name: "Black Belt Coin",
      description: "A black coin with an abyssal gleam awarded to those who complete master rank Arena quests."
    },
    {
      id: 618,
      rarity: 9,
      carryLimit: 99,
      value: 500,
      name: "Boaboa Ticket",
      description: "Proof of friendship with the Lynians of the Hoarfrost Reach. Show it to the smithy and see what happens!"
    },
    {
      id: 619,
      rarity: 9,
      carryLimit: 99,
      value: 0,
      name: "Conqueror's Seal",
      description: "A prize claimed only by those who have overcome myriad trials. Proves the bearer's valor beyond question."
    },
    {
      id: 620,
      rarity: 9,
      carryLimit: 99,
      value: 500,
      name: "Freezer Ticket",
      description: "Named for the new Hoarfrost Reach invention that keeps food cold! Bring it to the Smithy for a nice surprise!"
    },
    {
      id: 621,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Glavenus Coin",
      description: "A coin given to those who have bested a Glavenus in the master rank Arena."
    },
    {
      id: 622,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Nargacuga Coin",
      description: "A coin given to those who have bested a Nargacuga in the master rank Arena."
    },
    {
      id: 623,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Odogaron Coin",
      description: "A coin given to those who have bested a Odogaron in the master rank Arena."
    },
    {
      id: 624,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Paolumu Coin",
      description: "A coin given to those who have bested a Paolumu in the master rank Arena."
    },
    {
      id: 625,
      rarity: 9,
      carryLimit: 99,
      value: 500,
      name: "Pearlspring Ticket",
      description: "A ticket featuring a Pearlspring Macaque bathing in a spring. Bring it to the Smithy for a nice surprise!"
    },
    {
      id: 626,
      rarity: 9,
      carryLimit: 99,
      value: 0,
      name: "Thermae Ticket",
      description: "A ticket issued to the most fervent of hot springs fanatics. Bring it to the Smithy for a nice surprise!"
    },
    {
      id: 627,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Zinogre Coin",
      description: "A coin given to those who have bested a Zinogre in the master rank Arena."
    },
    {
      id: 628,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Aloy Ticket",
      description: "A ticket with an imge of a terrifying machine beast and a brave hunter. Allows you to craft special equipment."
    },
    {
      id: 629,
      rarity: 8,
      carryLimit: 99,
      value: 5000,
      name: "Ancient Leshen Skull",
      description: "Rare ancient leshen material. Embued with powerful magic and harboring unfathomable darkness."
    },
    {
      id: 630,
      rarity: 8,
      carryLimit: 99,
      value: 9600,
      name: "Mutagen",
      description: "A substance used to augment a witcher's abilities. Bring it to the Smithy for a nice surprise!"
    },
    {
      id: 631,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Leshen Skull",
      description: "Proof of defeating a leshen. In another world, hunters hang this from their horse saddle to show off."
    },
    {
      id: 632,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "Mega Man Ticket",
      description: "A ticket for a special Mega Man tie-in. Gives you access to special 8-bit retro Palico equipment."
    },
    {
      id: 633,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "SFV Ticket II",
      description: "A Street Fighter V collaboration ticket. Wait, that female fighter is also going to hunt monsters!?"
    },
    {
      id: 634,
      rarity: 6,
      carryLimit: 99,
      value: 400,
      name: "SFV Ticket III",
      description: "A Street Fighter V collaboration ticket. Has that legendary world warrior leveled up his game!?"
    },
    {
      id: 635,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Appreciation Ticket",
      description: "A ticket you receive for attending the Appreciation Fest. Can be exchanged for special equipment or fireworks."
    },
    {
      id: 636,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Autumn Harvest Ticket",
      description: "A ticket you receive for attending the Autumn Harvest Fest. Can be exchanged for special equipment or fireworks."
    },
    {
      id: 637,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Beetle Ticket",
      description: "A ticket with the heroic black ruler drawn on it. Redeem at the Resource Center for something nice?!"
    },
    {
      id: 638,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Bristly Crake Ticket",
      description: "A ticket with the heroic black ruler drawn on it. Redeem at the Resource Center for something nice?!"
    },
    {
      id: 639,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Bushi Ticket",
      description: "A voucher given to those who assisted in the special investigation. Be sure to show it to the resource center."
    },
    {
      id: 640,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Downy Crake Ticket",
      description: "A ticket with a pair of Downy Crakes drawn on it. Redeem at the Smithy for something nice!?"
    },
    {
      id: 641,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Faux Ticket",
      description: "A ticket with a Mosswine and Felyne drawn on it. Redeem at the Resource Center for something nice!?"
    },
    {
      id: 642,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Faux Ticket II",
      description: "A ticket with a Wiggler and eyepatch drawn on it. Redeem at the Resource Center for something nice!?"
    },
    {
      id: 643,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Faux Ticket III",
      description: "A ticket with Kulu-Ya-Ku drawn on it. Redeem at the Resource Center for something nice!?"
    },
    {
      id: 644,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Summer Insect Field Guide",
      description: "A field guide containing new info about Great Hornflies. Show it to the smithy for a ... novel armor set."
    },
    {
      id: 645,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Summer Twilight Ticket",
      description: "A ticket you receive for attending the Summer Twilight Fest. Can be exchanged for special equipment or firework."
    },
    {
      id: 646,
      rarity: 4,
      carryLimit: 99,
      value: 200,
      name: "Winter Star Ticket",
      description: "A ticket you receive for attending the Winter Star Fest. Can be exchanged for special equipment or fireworks."
    },
    {
      id: 648,
      rarity: 2,
      carryLimit: 60,
      value: 2,
      name: "Pierce Ammo 2",
      description: "High-grade armor-piercing ammo. Deals more hits than Pierce Ammo 1."
    },
    {
      id: 649,
      rarity: 3,
      carryLimit: 10,
      value: 7,
      name: "Twilight Fireworks",
      description: "Fireworks you receive for attending the Summer Twilight Fest. Enjoy the summer heat with a bang!"
    },
    {
      id: 650,
      rarity: 3,
      carryLimit: 10,
      value: 7,
      name: "Harvest Fireworks",
      description: "Fireworks you receive for attending the Autumn Harvest Fest. Dance till the ground lights up in a blaze!"
    },
    {
      id: 651,
      rarity: 3,
      carryLimit: 10,
      value: 7,
      name: "Star Fireworks",
      description: "Fireworks you receive for attending the Winter Star Fest. Enjoy the festivities with a bang!"
    },
    {
      id: 652,
      rarity: 3,
      carryLimit: 10,
      value: 7,
      name: "Appreciation Fireworks",
      description: "Fireworks you receive for attending the Appreciation Fest. Show your thanks by lighting these fireworks!"
    },
    {
      id: 653,
      rarity: 1,
      carryLimit: 5,
      value: 30,
      name: "Hot Drink",
      description: ""
    },
    {
      id: 654,
      rarity: 10,
      carryLimit: 99,
      value: 4600,
      name: "Fulgurbug",
      description: "Very rare Zinogre material, obtained with capture net while it's toppled. Compatible with thunder element."
    },
    {
      id: 655,
      rarity: 4,
      carryLimit: 99,
      value: 40,
      name: "Gloamgrass Bud",
      description: "A plant with healing properties. Combine it with a Godbug to bring out its full potency."
    },
    {
      id: 656,
      rarity: 1,
      carryLimit: 10,
      value: 8,
      name: "Hot Pepper",
      description: ""
    },
    {
      id: 657,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Shadowcore Ore",
      description: "A valuable mineral used to create charms. Its shine somehow saps the light away from its surroundings."
    },
    {
      id: 658,
      rarity: 10,
      carryLimit: 99,
      value: 3200,
      name: "Phantomcore Ore",
      description: "A valuable mineral used to create charms. Its otherworldy shimmering speaks to the power it contains."
    },
    {
      id: 659,
      rarity: 10,
      carryLimit: 99,
      value: 7320,
      name: "Purecrystal",
      description: "Very rare lightcrystal. Used by the forge workers to craft their tools due to its incredible hardness."
    },
    {
      id: 660,
      rarity: 9,
      carryLimit: 99,
      value: 1620,
      name: "Bathycite Ore",
      description: "Ore from Coral Highlands. Formed by millennia of pressure acting upon the bones of ancient organisms."
    },
    {
      id: 661,
      rarity: 9,
      carryLimit: 99,
      value: 1540,
      name: "Gracium",
      description: "Ore from the Hoarfrost Reach. When the light catches this rare and useful metal it takes on a pale blue shine."
    },
    {
      id: 662,
      rarity: 9,
      carryLimit: 99,
      value: 1920,
      name: "Meldspar Ore",
      description: "Ore often found in the Rotten Vale. Malleable but strong, it is broadly used in creating alloys for crafting."
    },
    {
      id: 663,
      rarity: 9,
      carryLimit: 99,
      value: 1280,
      name: "Spiritvein Crystal",
      description: "Mined from master rank areas. Little is known about these crystals save the complexity of their balance."
    },
    {
      id: 664,
      rarity: 5,
      carryLimit: 99,
      value: 600,
      name: "Dragonvein Coal",
      description: "Special coal that contains the earth's energy within. Prized as fuel at the Commission's new base."
    },
    {
      id: 665,
      rarity: 4,
      carryLimit: 99,
      value: 300,
      name: "Dragonvein Shard",
      description: "The leavings of special coal that contains the earth's energy within. Even these scrapes make fine fuel."
    },
    {
      id: 666,
      rarity: 10,
      carryLimit: 99,
      value: 2000,
      name: "Dragonbone Artifact",
      description: "A very rare bone from bonepiles. Evidence of an unknown elder dragon that once ruled the land."
    },
    {
      id: 667,
      rarity: 10,
      carryLimit: 99,
      value: 2300,
      name: "Monster Slogbone",
      description: "Bone obtained from large master rank monsters. Far heavier than its outward appearance would suggest."
    },
    {
      id: 668,
      rarity: 10,
      carryLimit: 99,
      value: 2600,
      name: "Monster Solidbone",
      description: "Bone obtained from large master rank monsters. Sturdy enough to withstand even the most ferocious of impacts."
    },
    {
      id: 669,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Conflagrant Sac",
      description: "A monster organ that contains highly volatile and extremely explosive powder. Exquisitely dangerous."
    },
    {
      id: 670,
      rarity: 9,
      carryLimit: 99,
      value: 4200,
      name: "Cryo Sac",
      description: "A monster organ that contains a potent freezing agent. Able to cover a broad area in ice instantaneously."
    },
    {
      id: 671,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Deadly Poison Sac",
      description: "A monster organ that contains an extremely virulent toxin. Handle with extreme care."
    },
    {
      id: 672,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Flood Sac",
      description: "A monster organ designed to hold and preserve tremendous amounts of water."
    },
    {
      id: 673,
      rarity: 9,
      carryLimit: 99,
      value: 2400,
      name: "Frozen Bone",
      description: "A bone found in bonepiles in the Hoarfrost Reach. Tempered by years of the tundra's unrelenting cold."
    },
    {
      id: 674,
      rarity: 9,
      carryLimit: 99,
      value: 8000,
      name: "Large Wyvern Gem",
      description: "A wyvern gem that has grown further over the ages. Emits a mesmerizing shimmer."
    },
    {
      id: 675,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Lightning Sac",
      description: "A monster organ that can store electricity as strong as lightning. It rumbles like thunder."
    },
    {
      id: 676,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Monster Toughbone",
      description: "Bone obtained from large master rank monsters. It emits a potent aura of near-limitless potential."
    },
    {
      id: 677,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Thick Bone",
      description: "Very rare bone uses as crafting material. While laborious to work, it yields results like no other."
    },
    {
      id: 678,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Torpor Sac",
      description: "A monster organ that contains a sleeping agent capable of instantly knocking out even a raging monster."
    },
    {
      id: 679,
      rarity: 9,
      carryLimit: 99,
      value: 3400,
      name: "Ultraplegia Sac",
      description: "A monster organ filled with highly concentrated neurotoxins. Handle with extreme care."
    },
    {
      id: 680,
      rarity: 7,
      carryLimit: 99,
      value: 3400,
      name: "Ancient Cursed Bone",
      description: "Rare ancient leshen material. A bone entangled in countless magical branches."
    },
    {
      id: 681,
      rarity: 7,
      carryLimit: 99,
      value: 4000,
      name: "Ancient Leshen Antlers",
      description: "Rare ancient leshen material. Huge, solemn antlers that inspire fear in other creatures."
    },
    {
      id: 682,
      rarity: 7,
      carryLimit: 99,
      value: 3600,
      name: "Ancient Leshen Claw",
      description: "Rare material. The claw of an ancient leshen, worshipped as an indigenous god in another world."
    },
    {
      id: 683,
      rarity: 6,
      carryLimit: 99,
      value: 2800,
      name: "Cursed Bone",
      description: "Rare material. The bone of a creature that fell prey to a leshen's cunning cruelty."
    },
    {
      id: 684,
      rarity: 6,
      carryLimit: 99,
      value: 3400,
      name: "Leshen Antlers",
      description: "Rare material. The horrifying antlers of a leshen, nourished by the innate powers of primeval woods."
    },
    {
      id: 685,
      rarity: 6,
      carryLimit: 99,
      value: 3000,
      name: "Leshen Claw",
      description: "A rare sharp leshen claw. One hit is enough to leave a deep gash on its victim."
    },
    {
      id: 686,
      rarity: 6,
      carryLimit: 99,
      value: 2600,
      name: "Leshen Resin",
      description: "A lump of resin excreted by the leshen. Contains arcane components that should be handled with care."
    },
    {
      id: 687,
      rarity: 9,
      carryLimit: 99,
      value: 460,
      name: "Anteka Antler",
      description: "Very rare Anteka material. Obtained by carving. Used for many purposes."
    },
    {
      id: 688,
      rarity: 9,
      carryLimit: 99,
      value: 1020,
      name: "Prized Pelt",
      description: "Very rare small monster material. Obtained by carving. Warm and durable, used to craft gear."
    },
    {
      id: 689,
      rarity: 9,
      carryLimit: 99,
      value: 2280,
      name: "Barnos Hardclaw",
      description: "Very rare Barnos material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 690,
      rarity: 9,
      carryLimit: 99,
      value: 1450,
      name: "Cortos Hardclaw",
      description: "Very rare Cortos material. Obtained by carving. Unusual, used in select gear."
    },
    {
      id: 691,
      rarity: 9,
      carryLimit: 99,
      value: 1240,
      name: "Wingdrake Finehide",
      description: "A very rare material carved from wingdrakes. Lightweight, used to craft gear."
    },
    {
      id: 692,
      rarity: 9,
      carryLimit: 99,
      value: 2120,
      name: "Hornetaur Razorwing",
      description: "Very rare Hornetaur material. Light and sharp used in many weapons."
    },
    {
      id: 693,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Monster Essence",
      description: "Material obtained from master rank small insects. The densest, most viscious fluids available. Very icky."
    },
    {
      id: 694,
      rarity: 9,
      carryLimit: 99,
      value: 1960,
      name: "Vespoid Razorwing",
      description: "Very rare Vespoid material. Obtained by carving. Light and sharp, used in many weapons."
    },
    {
      id: 695,
      rarity: 10,
      carryLimit: 99,
      value: 4360,
      name: "Lavasioth Cortex",
      description: "Very rare Lavasioth material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 696,
      rarity: 10,
      carryLimit: 99,
      value: 5920,
      name: "Lavasioth Grandfin",
      description: "Very rare Lavasioth material. Obtained by breaking its dorsal fins. Used for many purposes."
    },
    {
      id: 697,
      rarity: 10,
      carryLimit: 99,
      value: 5860,
      name: "Lavasioth Hardfang",
      description: "Very rare Lavasioth material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 698,
      rarity: 10,
      carryLimit: 99,
      value: 2860,
      name: "Lavasioth Shard",
      description: "Very rare Lavasioth material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 699,
      rarity: 9,
      carryLimit: 99,
      value: 2230,
      name: "Beotodus Cortex",
      description: "Very rare Beotodus material. Mostly obtained as a reward. Hardly, used to craft gear."
    },
    {
      id: 700,
      rarity: 9,
      carryLimit: 99,
      value: 3190,
      name: "Beotodus Grandfin",
      description: "Very rare Beotodus material. Obtained by breaking its back. Used for many purposes."
    },
    {
      id: 701,
      rarity: 9,
      carryLimit: 99,
      value: 2930,
      name: "Beotodus Hardhorn",
      description: "Very rare Beotodus material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 702,
      rarity: 9,
      carryLimit: 99,
      value: 1530,
      name: "Beotodus Shard",
      description: "Very rare Beotodus material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 703,
      rarity: 9,
      carryLimit: 99,
      value: 1680,
      name: "Gajau Thickhide",
      description: "Very rare Gajau material. Obtained by carving. Water-resistant, used to craft gear."
    },
    {
      id: 704,
      rarity: 9,
      carryLimit: 99,
      value: 2180,
      name: "Jyuratodus Cortex",
      description: "Very rare Jyuratodus material. Mostly obtained as a reward. Hardy, used to craft gear."
    },
    {
      id: 705,
      rarity: 9,
      carryLimit: 99,
      value: 3040,
      name: "Jyuratodus Grandfin",
      description: "Very rare Jyuratodus material. Obtained by breaking its back. Used for many purposes."
    },
    {
      id: 706,
      rarity: 9,
      carryLimit: 99,
      value: 2880,
      name: "Jyuratodus Hardfang",
      description: "Very rare Jyuratodus material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 707,
      rarity: 9,
      carryLimit: 99,
      value: 1480,
      name: "Jyuratodus Shard",
      description: "Very rare Jyuratodus material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 708,
      rarity: 9,
      carryLimit: 99,
      value: 1920,
      name: "Steel Gajau Whisker",
      description: "Very rare Gajau material. Obtained by carving. Hardy, used to craft gear."
    },
    {
      id: 709,
      rarity: 10,
      carryLimit: 99,
      value: 5920,
      name: "Garuga Auricle",
      description: "Very rare Yian Garuga material. Obtained by breaking its head. Supple, used to craft gear."
    },
    {
      id: 710,
      rarity: 10,
      carryLimit: 99,
      value: 5520,
      name: "Garuga Cortex",
      description: "Very rare Yian Garuga material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 711,
      rarity: 10,
      carryLimit: 99,
      value: 7540,
      name: "Garuga Fellwing",
      description: "Very rare Yian Garuga material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 712,
      rarity: 10,
      carryLimit: 99,
      value: 7660,
      name: "Garuga Lash",
      description: "Very rare Yian Garuga material. Mostly obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 713,
      rarity: 10,
      carryLimit: 99,
      value: 3620,
      name: "Garuga Shard",
      description: "Very rare Yian Garuga material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 714,
      rarity: 10,
      carryLimit: 99,
      value: 7420,
      name: "Garuga Silverpelt",
      description: "Very rare Yian Garuga material. Obtained by breaking its back. Used for many purposes."
    },
    {
      id: 715,
      rarity: 10,
      carryLimit: 99,
      value: 6040,
      name: "Fancy Beak",
      description: "Very rare Yian Garuga material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 716,
      rarity: 10,
      carryLimit: 99,
      value: 6600,
      name: "Scratched Shell",
      description: "Very rare Yian Garuga material. Mostly obtained as a reward. Hardened by a lifetime of battles."
    },
    {
      id: 717,
      rarity: 9,
      carryLimit: 99,
      value: 3360,
      name: "Coral Pukei-Pukei Cortex",
      description: "Very rare Coral Pukei-Pukei material. Mostly obtained as a reward Solid, used to craft gear."
    },
    {
      id: 718,
      rarity: 9,
      carryLimit: 99,
      value: 4460,
      name: "Coral Pukei-Pukei Fellwing",
      description: "Very rare Coral Pukei-Pukei material. Obtained by breaking its wings. used for many purposes."
    },
    {
      id: 719,
      rarity: 9,
      carryLimit: 99,
      value: 4540,
      name: "Large Coral Pukei-Pukei Sac",
      description: "Very rare Coral Pukei-Pukei material. Obtained by breaking its head. Grants water element properties."
    },
    {
      id: 720,
      rarity: 9,
      carryLimit: 99,
      value: 4380,
      name: "Coral Pukei-Pukei Lash",
      description: "Very rare Coral Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
    },
    {
      id: 721,
      rarity: 9,
      carryLimit: 99,
      value: 2340,
      name: "Coral Pukei-Pukei Shard",
      description: "Very rare Coral Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 722,
      rarity: 9,
      carryLimit: 99,
      value: 8000,
      name: "Fey Wyvern Gem",
      description: "An exceptionally pure gem taken from a bird wyvern. Its fragility makes it difficult to carve."
    },
    {
      id: 723,
      rarity: 9,
      carryLimit: 99,
      value: 2550,
      name: "Large Kulu-Ya-Ku Beak",
      description: "Very rare Kulu-Ya-Ku material. Obtained by breaking its head. Hard, used in many weapons."
    },
    {
      id: 724,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Large Kulu-Ya-Ku Plume",
      description: "Very rare Kulu-Ya-Ku material. Obtained by breaking its forelimbs. Used for many purposes."
    },
    {
      id: 725,
      rarity: 9,
      carryLimit: 99,
      value: 1350,
      name: "Kulu-Ya-Ku Shard",
      description: "Very rare Kulu-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 726,
      rarity: 9,
      carryLimit: 99,
      value: 1950,
      name: "Kulu-Ya-Ku Thickhide",
      description: "Very rare Kulu-Ya-Ku material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 727,
      rarity: 9,
      carryLimit: 99,
      value: 2220,
      name: "Pukei-Pukei Cortex",
      description: "Very rare Pukei-Pukei material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 728,
      rarity: 9,
      carryLimit: 99,
      value: 2920,
      name: "Pukei-Pukei Fellwing",
      description: "Very rare Pukei-Pukei material. Obtained by breaking its wings. Used for many purposes."
    },
    {
      id: 729,
      rarity: 9,
      carryLimit: 99,
      value: 2980,
      name: "Large Pukei-Pukei Sac",
      description: "Very rare Pukei-Pukei material. Obtained by breaking its head. Grants poisonous properties."
    },
    {
      id: 730,
      rarity: 9,
      carryLimit: 99,
      value: 2860,
      name: "Pukei-Pukei Lash",
      description: "Very rare Pukei-Pukei material. Obtained by carving its severed tail. Unusual, used to craft gear."
    },
    {
      id: 731,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Tzitzi-Ya-Ku Hardclaw",
      description: "Very rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 732,
      rarity: 9,
      carryLimit: 99,
      value: 2600,
      name: "Tzitzi-Ya-Ku Photomembrane",
      description: "Very rare Tzitzi-Ya-Kumaterial obtained by breaking its pulse organs. Used for many purposes."
    },
    {
      id: 733,
      rarity: 9,
      carryLimit: 99,
      value: 1300,
      name: "Tzitzi-Ya-Ku Shard",
      description: "Very rare Tzitzi-Ya-Ku material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 734,
      rarity: 9,
      carryLimit: 99,
      value: 1900,
      name: "Tzitzi-Ya-Ku Thickhide",
      description: "Very rare Tzitzi-Ya-Ku material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 735,
      rarity: 11,
      carryLimit: 99,
      value: 21000,
      name: "Gold Rajang Pelt+",
      description: "Very rare Rajang material. Hard to obtain, but greatly increases the effectiveness of equipment."
    },
    {
      id: 736,
      rarity: 11,
      carryLimit: 99,
      value: 9370,
      name: "Rajang Hardhorn",
      description: "Very rare Rajang material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 737,
      rarity: 11,
      carryLimit: 99,
      value: 9750,
      name: "Rajang Tail",
      description: "Very Rare Rajang material. Obtained by breaking its tail. Stiff, used to craft gear."
    },
    {
      id: 738,
      rarity: 11,
      carryLimit: 99,
      value: 9180,
      name: "Rajang Hardclaw",
      description: "Very rare Rajang, material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
    },
    {
      id: 739,
      rarity: 11,
      carryLimit: 99,
      value: 6690,
      name: "Rajang Wildpelt",
      description: "Very rare Rajang material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 740,
      rarity: 11,
      carryLimit: 99,
      value: 18000,
      name: "Ebony Odogaron Mantle",
      description: "Very rare Ebony Odogaron material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 741,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Odogaron Mantle",
      description: "Very rare Odogaron material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 742,
      rarity: 11,
      carryLimit: 99,
      value: 18000,
      name: "Zinogre Skymerald",
      description: "Very rare Zinogre material. USed to craft weapons powerful enough to take over the world."
    },
    {
      id: 743,
      rarity: 10,
      carryLimit: 99,
      value: 7380,
      name: "Ebony Odogaron Hardclaw",
      description: "A very rare Ebony Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 744,
      rarity: 10,
      carryLimit: 99,
      value: 7460,
      name: "Ebony Odogaron Hardfang",
      description: "A very rare Ebony Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 745,
      rarity: 10,
      carryLimit: 99,
      value: 7620,
      name: "Ebony Odogaron Lash",
      description: "A very rare Ebony Odogaron material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 746,
      rarity: 10,
      carryLimit: 99,
      value: 3580,
      name: "Ebony Odogaron Shard",
      description: "A very rare Ebony Odogaron material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 747,
      rarity: 10,
      carryLimit: 99,
      value: 5480,
      name: "Hard Ebony Odogaron Sinew",
      description: "A very rare Ebony Odogaron material. Obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 748,
      rarity: 10,
      carryLimit: 99,
      value: 5850,
      name: "Odogaron Hardclaw",
      description: "Very rare Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 749,
      rarity: 10,
      carryLimit: 99,
      value: 5900,
      name: "Odogaron Hardfang",
      description: "Very rare Odogaron material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 750,
      rarity: 10,
      carryLimit: 99,
      value: 6000,
      name: "Odogaron Lash",
      description: "Very rare Odogaron material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 751,
      rarity: 10,
      carryLimit: 99,
      value: 2850,
      name: "Odogaron Shard",
      description: "Very rare Odogaron material. Mostly obtained by carving. Broadly used in many purposes."
    },
    {
      id: 752,
      rarity: 10,
      carryLimit: 99,
      value: 4350,
      name: "Hard Odogaron Sinew",
      description: "Very rare Odogaron material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 753,
      rarity: 9,
      carryLimit: 99,
      value: 3040,
      name: "Dodogama Hardclaw",
      description: "Very rare Dodogama material. Obtained by breakings its forelegs. Heavy, used in many weapons."
    },
    {
      id: 754,
      rarity: 9,
      carryLimit: 99,
      value: 3520,
      name: "Dodogama Lash",
      description: "Very rare Dodogama material. Obtained by carving its severed tail. Tough, used in many weapons."
    },
    {
      id: 755,
      rarity: 9,
      carryLimit: 99,
      value: 3280,
      name: "Dodogama Mandible",
      description: "Very rare Dodogama material. Obtained by breakings its head. Unusual and difficult to handle."
    },
    {
      id: 756,
      rarity: 9,
      carryLimit: 99,
      value: 1520,
      name: "Dodogama Shard",
      description: "Very rare Dodogama material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 757,
      rarity: 9,
      carryLimit: 99,
      value: 2220,
      name: "Dodogama Thickhide",
      description: "Very rare Dodogama material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 758,
      rarity: 9,
      carryLimit: 99,
      value: 2140,
      name: "Gastodon Husk",
      description: "Very rare Gastodon material. Obtained by carving. Studry, used to craft gear."
    },
    {
      id: 759,
      rarity: 9,
      carryLimit: 99,
      value: 1760,
      name: "Girros Shard",
      description: "Very rare Girros material. Obtained by carving. Used for many purposes."
    },
    {
      id: 760,
      rarity: 9,
      carryLimit: 99,
      value: 2730,
      name: "Great Girros Hardhood",
      description: "Very rare Great Girros material. Obtained by breaking its head. Unusual, used in select gear."
    },
    {
      id: 761,
      rarity: 9,
      carryLimit: 99,
      value: 2130,
      name: "Great Girros Hardfang",
      description: "Very rare Great Girros material. Obtained by breakings its head. Grants paralytic properties."
    },
    {
      id: 762,
      rarity: 9,
      carryLimit: 99,
      value: 2510,
      name: "Great Girros Lash",
      description: "Very rare Great Girros material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 763,
      rarity: 9,
      carryLimit: 99,
      value: 1310,
      name: "Great Girros Shard",
      description: "Very rare Great Girros material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 764,
      rarity: 9,
      carryLimit: 99,
      value: 1910,
      name: "Great Girros Thickhide",
      description: "Very rare Great Girros material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 765,
      rarity: 9,
      carryLimit: 99,
      value: 2440,
      name: "Great Jagras Hardclaw",
      description: "Very rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 766,
      rarity: 9,
      carryLimit: 99,
      value: 2480,
      name: "Great Jagras Mane+",
      description: "Very rare Great Jagras material. Obtained by breaking its head. Used for many purposes."
    },
    {
      id: 767,
      rarity: 9,
      carryLimit: 99,
      value: 1320,
      name: "Great Jagras Shard",
      description: "Very rare Great Jagras material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 768,
      rarity: 9,
      carryLimit: 99,
      value: 1840,
      name: "Great Jagras Thickhide",
      description: "Very rare Great Jagras material. Mostly obtained as a reward. Supple, used to craft gear."
    },
    {
      id: 769,
      rarity: 9,
      carryLimit: 99,
      value: 960,
      name: "Jagras Shard",
      description: "Very rare Jagras material. Obtained by carving. Used for many purposes."
    },
    {
      id: 770,
      rarity: 9,
      carryLimit: 99,
      value: 1320,
      name: "Kestodon Husk",
      description: "Very rare Kestodon material. Obtained by carving. Sturdy, used to craft gear."
    },
    {
      id: 771,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Tough Claw",
      description: "Material from master rank small fanged wyverns. So sharp and sturdy that it could be used as a weapon."
    },
    {
      id: 772,
      rarity: 9,
      carryLimit: 99,
      value: 1580,
      name: "Shamos Shard",
      description: "Very rare Shamos material. Obtained by carving. Used for many purposes."
    },
    {
      id: 773,
      rarity: 9,
      carryLimit: 99,
      value: 3070,
      name: "Tobi-Kadachi Cathode",
      description: "Very rare Tobi-Kadachi material. Obtained by breaking its head. Grants thunder element properties."
    },
    {
      id: 774,
      rarity: 9,
      carryLimit: 99,
      value: 2890,
      name: "Tobi-Kadachi Hardclaw",
      description: "Very rare Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
    },
    {
      id: 775,
      rarity: 9,
      carryLimit: 99,
      value: 3200,
      name: "Tobi-Kadachi Membrane+",
      description: "Very rare Tobi-Kadachi material. Obtained by carving. Supple, used to craft gear."
    },
    {
      id: 776,
      rarity: 9,
      carryLimit: 99,
      value: 1490,
      name: "Tobi-Kadachi Shard",
      description: "Very rare Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 777,
      rarity: 9,
      carryLimit: 99,
      value: 2190,
      name: "Tobi-Kadachi Thickfur",
      description: "Very rare Tobi-Kadachi material. Mostly obtained as a reward. Highly thunder-resistant, used to craft gear."
    },
    {
      id: 778,
      rarity: 9,
      carryLimit: 99,
      value: 4390,
      name: "Viper Tobi-Kadachi Hardclaw",
      description: "Very rare Viper Tobi-Kadachi material. Obtained by breaking its forelimbs. Sharp, used in many weapons."
    },
    {
      id: 779,
      rarity: 9,
      carryLimit: 99,
      value: 4700,
      name: "Viper Tobi-Kadachi Membrane+",
      description: "Very rare Tobi-Kadachi material. Mostly obtained by carving. Supple, used to craft gear."
    },
    {
      id: 780,
      rarity: 9,
      carryLimit: 99,
      value: 2190,
      name: "Viper Tobi-Kadachi Shard",
      description: "Very rare Viper Tobi-Kadachi material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 781,
      rarity: 9,
      carryLimit: 99,
      value: 3290,
      name: "Viper Tobi-Kadachi Thickfur",
      description: "Very rare Viper Tobi-Kadachi material. Mostly obtained as a reward. Highly thuder-resistant, used to craft gear."
    },
    {
      id: 782,
      rarity: 9,
      carryLimit: 99,
      value: 4570,
      name: "Viper Tobi-Kadachi Thorn",
      description: "Very rare Viper Tobi-Kadachi material. Obtained by breaking its head. Grants poisonous properties."
    },
    {
      id: 783,
      rarity: 9,
      carryLimit: 99,
      value: 1240,
      name: "Wulg Thickfur",
      description: "Ver rare Wulg material. Obtained by carving. Used for many purposes."
    },
    {
      id: 784,
      rarity: 9,
      carryLimit: 99,
      value: 5560,
      name: "Zinogre Cortex",
      description: "Very rare Zinogre material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 785,
      rarity: 9,
      carryLimit: 99,
      value: 7620,
      name: "Zinogre Deathly Shocker",
      description: "Very rare Zinogre material. Mostly obtained by carving. Compatible with thunder element."
    },
    {
      id: 786,
      rarity: 9,
      carryLimit: 99,
      value: 3660,
      name: "Zinogre Electrofur+",
      description: "Very rare Zinogre material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 787,
      rarity: 9,
      carryLimit: 99,
      value: 7460,
      name: "Zinogre Hardclaw",
      description: "Very rare Zinogre material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 788,
      rarity: 9,
      carryLimit: 99,
      value: 7780,
      name: "Zinogre Hardhorn",
      description: "Very rare Zinogre material. Obtained by breaking its head . Stout, used in many weapons."
    },
    {
      id: 789,
      rarity: 9,
      carryLimit: 99,
      value: 8100,
      name: "Zinogre Lash",
      description: "Very rare Zinogre material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 790,
      rarity: 12,
      carryLimit: 99,
      value: 21000,
      name: "Deviljho Crook",
      description: "Very rare Savage Deviljho material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 791,
      rarity: 11,
      carryLimit: 99,
      value: 8840,
      name: "Black Blood",
      description: "Very rare Savage Deviljho material. Obtained by collecting rare drops. Unusual and difficult to handle."
    },
    {
      id: 792,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Brachydios Pallium",
      description: "Very rare Brachydios material. Used to craft weapons powerful enought to take over the world."
    },
    {
      id: 793,
      rarity: 9,
      carryLimit: 99,
      value: 6540,
      name: "Deviljho Blackpiel",
      description: "Very rare Savage Devilho material. Mostly obtained as a reward. Tough, used to craft gear."
    },
    {
      id: 794,
      rarity: 9,
      carryLimit: 99,
      value: 9200,
      name: "Deviljho Flail",
      description: "Very rare Savage Deviljho material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 795,
      rarity: 11,
      carryLimit: 99,
      value: 8920,
      name: "Deviljho Ripper",
      description: "Very rare Savage Deviljho material. Mostly obtained by carving. Compatible with dragon element."
    },
    {
      id: 796,
      rarity: 9,
      carryLimit: 99,
      value: 4240,
      name: "Deviljho Shard",
      description: "Very rare Savage Deviljho material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 797,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Glavenus Mantle",
      description: "Very rare Glavenus material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 798,
      rarity: 10,
      carryLimit: 99,
      value: 5470,
      name: "Uragaan Scute+",
      description: "Very rare Uragaan material. Obtained by carving its severed tail. Highly heat-resistant, used to craft gear."
    },
    {
      id: 799,
      rarity: 11,
      carryLimit: 99,
      value: 9000,
      name: "Vile Fang",
      description: "Very rare Savage Deviljho material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 800,
      rarity: 10,
      carryLimit: 99,
      value: 5470,
      name: "Acidic Glavenus Cortex",
      description: "Very rare Acidic Glavenus material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 801,
      rarity: 10,
      carryLimit: 99,
      value: 7370,
      name: "Acidic Glavenus Hardfang",
      description: "Very rare Acidic Glavenus material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 802,
      rarity: 10,
      carryLimit: 99,
      value: 3570,
      name: "Acidic Glavenus Shard",
      description: "Very rare Acidic Glavenus material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 803,
      rarity: 10,
      carryLimit: 99,
      value: 7510,
      name: "Acidic Glavenus Spineshell",
      description: "Very rare Acidic Glavenus material. Obtained by breaking its back. Often used to craft gear."
    },
    {
      id: 804,
      rarity: 10,
      carryLimit: 99,
      value: 7650,
      name: "Acidic Glavenus Tailedge",
      description: "Very rare Acidic Glavenus material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 805,
      rarity: 10,
      carryLimit: 99,
      value: 2950,
      name: "Brachydios Cortex",
      description: "Very rare Brachydios material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 806,
      rarity: 10,
      carryLimit: 99,
      value: 5950,
      name: "Brachydios Crown",
      description: "Very rare Brachydios material. Obtained by breaking its head. Tough, used in many weapons."
    },
    {
      id: 807,
      rarity: 10,
      carryLimit: 99,
      value: 4450,
      name: "Fine Brachydios Ebonshell",
      description: "Very rare Brachydios material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 808,
      rarity: 10,
      carryLimit: 99,
      value: 6250,
      name: "Brachydios Lash",
      description: "Very rare Brachydios material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 809,
      rarity: 10,
      carryLimit: 99,
      value: 6100,
      name: "Brachydios Pounder+",
      description: "Very rare Brachydios material. Obtained by breakings its forelimbs. Tough, used to craft gear."
    },
    {
      id: 810,
      rarity: 10,
      carryLimit: 99,
      value: 5900,
      name: "Fulgur Anjanath Hardfang",
      description: "Very rare Fulgur Anjanath material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 811,
      rarity: 10,
      carryLimit: 99,
      value: 6100,
      name: "Heavy Fulgur Anjanath Nosebone",
      description: "Very rare Fulgur Anjanath material. Obtained by breaking its head. Has a unique composition."
    },
    {
      id: 812,
      rarity: 10,
      carryLimit: 99,
      value: 6000,
      name: "Fulgur Anjanath Lash",
      description: "Very rare Fulgur Anjanath material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 813,
      rarity: 10,
      carryLimit: 99,
      value: 15000,
      name: "Fulgur Anjanath Mantle",
      description: "Very rare Fulgur Anjanath material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 814,
      rarity: 10,
      carryLimit: 99,
      value: 2900,
      name: "Fulgur Anjanath Shard",
      description: "Very rare Fulgur Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 815,
      rarity: 10,
      carryLimit: 99,
      value: 4400,
      name: "Fulgur Anjanath Thickfur",
      description: "Very rare Fulgur Anjanath material. Mostly obtained as a reward. Used to craft gear."
    },
    {
      id: 816,
      rarity: 10,
      carryLimit: 99,
      value: 4430,
      name: "Glavenus Cortex",
      description: "Very rare Glavenus material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 817,
      rarity: 10,
      carryLimit: 99,
      value: 5930,
      name: "Glavenus Hardfang",
      description: "Very rare Glavenus material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 818,
      rarity: 10,
      carryLimit: 99,
      value: 6190,
      name: "Glavenus Hellshell",
      description: "Very rare Glavenus material. Obtained by breaking its back. Highly heat-resistant, used to craft gear."
    },
    {
      id: 819,
      rarity: 10,
      carryLimit: 99,
      value: 2930,
      name: "Glavenus Shard",
      description: "Very rare Glavenus material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 820,
      rarity: 10,
      carryLimit: 99,
      value: 6450,
      name: "Glavenus Tailedge",
      description: "Very rare Glavenus material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 821,
      rarity: 10,
      carryLimit: 99,
      value: 4600,
      name: "Glowing Slime",
      description: "Very rare Brachydios material. Obtained by collecting rare drops. Highly dense, used for many purposes."
    },
    {
      id: 822,
      rarity: 10,
      carryLimit: 99,
      value: 7440,
      name: "Honed Acidcryst",
      description: "Very rare Acidic Glavenus material. Obtained by collecting rare drops. Unusual, used to craft gear."
    },
    {
      id: 823,
      rarity: 10,
      carryLimit: 99,
      value: 6060,
      name: "Molten Bursa",
      description: "Very rare Glavenus material. Obtained by collecting rare drops. Unusual, used to craft gear."
    },
    {
      id: 824,
      rarity: 10,
      carryLimit: 99,
      value: 4390,
      name: "Uragaan Cortex",
      description: "Very rare Uragaan material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 827,
      rarity: 10,
      carryLimit: 99,
      value: 2890,
      name: "Uragaan Shard",
      description: "Very rare Uragaan material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 828,
      rarity: 9,
      carryLimit: 99,
      value: 4360,
      name: "Anjanath Hardfang",
      description: "Very rare Anjanath material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 829,
      rarity: 9,
      carryLimit: 99,
      value: 4480,
      name: "Heavy Anjanath Nosebone",
      description: "Very rare Anjanath material. Obtained by breaking its head. Used in select gear."
    },
    {
      id: 830,
      rarity: 9,
      carryLimit: 99,
      value: 4420,
      name: "Anjanath Lash",
      description: "Very rare Anjanath material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 831,
      rarity: 11,
      carryLimit: 99,
      value: 12000,
      name: "Anjanath Mantle",
      description: "Very rare Anjanath material.Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 832,
      rarity: 9,
      carryLimit: 99,
      value: 2160,
      name: "Anjanath Shard",
      description: "Very rare Anjanath material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 833,
      rarity: 9,
      carryLimit: 99,
      value: 3260,
      name: "Anjanath Fur",
      description: "Very rare Anjanath material. Mostly obtained as a reward. highly heat-resistant, used to craft gear."
    },
    {
      id: 834,
      rarity: 9,
      carryLimit: 99,
      value: 2240,
      name: "Banbaro Chine",
      description: "Very rare Banbaro material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 835,
      rarity: 9,
      carryLimit: 99,
      value: 2940,
      name: "Banbaro Great Horn",
      description: "Very rare Banbaro material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 836,
      rarity: 9,
      carryLimit: 99,
      value: 1540,
      name: "Banbaro Cortex",
      description: "Very rare Banbaro material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 837,
      rarity: 9,
      carryLimit: 99,
      value: 3220,
      name: "Banbaro Lash",
      description: "Very rare Banbaro material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 838,
      rarity: 9,
      carryLimit: 99,
      value: 2170,
      name: "Barroth Chine",
      description: "Very rare Barroth material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 839,
      rarity: 9,
      carryLimit: 99,
      value: 1470,
      name: "Barroth Cortex",
      description: "Very rare Barroth material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 840,
      rarity: 9,
      carryLimit: 99,
      value: 3430,
      name: "Barroth Crown",
      description: "Very rare Barroth material. Obtained by breaking its scalp. Tough, used in many weapons."
    },
    {
      id: 841,
      rarity: 9,
      carryLimit: 99,
      value: 2870,
      name: "Barroth Hardclaw",
      description: "Very rare Barroth material. Obtained by breaking its forelimbs. Hardy, used in many weapons."
    },
    {
      id: 842,
      rarity: 9,
      carryLimit: 99,
      value: 3280,
      name: "Barroth Lash",
      description: "Very rare Barroth material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 843,
      rarity: 9,
      carryLimit: 99,
      value: 4350,
      name: "Large Wyvern Bonemass",
      description: "Very rare Radobaan material. Obtained by collecting rare drops. Highly dense, used for many purposes."
    },
    {
      id: 844,
      rarity: 9,
      carryLimit: 99,
      value: 3250,
      name: "Radobaan Cortex",
      description: "Very rare Radobaan material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 845,
      rarity: 9,
      carryLimit: 99,
      value: 4400,
      name: "Radobaan Oilshell+",
      description: "Very rare Radobaan material. Obtained by carving its severed tail. Impact-resistant, used to craft gear."
    },
    {
      id: 846,
      rarity: 9,
      carryLimit: 99,
      value: 2150,
      name: "Radobaan Shard",
      description: "Very rare Radobaan material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 847,
      rarity: 9,
      carryLimit: 99,
      value: 1610,
      name: "Rich Mud",
      description: "Very rare Barroth material. Obtained by breaking its mud covering. Unusual, used in select gear."
    },
    {
      id: 848,
      rarity: 11,
      carryLimit: 99,
      value: 21000,
      name: "Bazelgeuse Mantle",
      description: "Very rare Seething Bazelgeuse material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 849,
      rarity: 11,
      carryLimit: 99,
      value: 8880,
      name: "Bazelgeuse Flail",
      description: "Very rare Seething Bazelgeuse material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 850,
      rarity: 11,
      carryLimit: 99,
      value: 8840,
      name: "Bazelgeuse Hardclaw",
      description: "Very rare Seething Bazelgeuse material. Mostly obtained by carving. Compatible with blast element."
    },
    {
      id: 851,
      rarity: 11,
      carryLimit: 99,
      value: 4220,
      name: "Bazelgeuse Shard",
      description: "Very rare Seething Bazelgeuse material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 852,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Diablos Hardhorn",
      description: "Very rare material from Diablos and its subspecies. Obtained by breaking its horns."
    },
    {
      id: 853,
      rarity: 11,
      carryLimit: 99,
      value: 8920,
      name: "Distilled Blast Fluid",
      description: "Very rare Seething Bazelgeuse material. Obtained by breaking its head. Compatible with blast element."
    },
    {
      id: 854,
      rarity: 11,
      carryLimit: 99,
      value: 6520,
      name: "Flickering Silvershell",
      description: "Very rare Seething Bazelgeuse material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 855,
      rarity: 11,
      carryLimit: 99,
      value: 6650,
      name: "Gold Rathian Cortex",
      description: "Very rare Gold Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 856,
      rarity: 11,
      carryLimit: 99,
      value: 4350,
      name: "Gold Rathian Shard",
      description: "Very rare Gold Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 857,
      rarity: 11,
      carryLimit: 99,
      value: 9150,
      name: "Gold Rathian Surspike",
      description: "Very rare Gold Rathian material. Obtained by carving its servered tail. Compatible with poison."
    },
    {
      id: 858,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Nargacuga Mantle",
      description: "Very rare Nargacuga material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 859,
      rarity: 11,
      carryLimit: 99,
      value: 8970,
      name: "Rath Gleam",
      description: "Very rare material from Rathian or Rathalos. Obtained by breaking the head."
    },
    {
      id: 860,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Rathalos Mantle",
      description: "Very rare Rathalos material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 861,
      rarity: 11,
      carryLimit: 99,
      value: 8860,
      name: "Scorching Silverwing",
      description: "Very rare Seething Bazelgeuse material. Obtained by breaking its wings. Used in many weapons."
    },
    {
      id: 862,
      rarity: 11,
      carryLimit: 99,
      value: 6670,
      name: "Silver Rathalos Cortex",
      description: "Very rare Silver Rathalos material. Mostly obtained as reward. Solid, used to craft gear."
    },
    {
      id: 863,
      rarity: 11,
      carryLimit: 99,
      value: 9140,
      name: "Silver Rathalos Fellwing",
      description: "Very rare Silver Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 864,
      rarity: 11,
      carryLimit: 99,
      value: 9480,
      name: "Silver Rathalos Lash",
      description: "Very rare Silver Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
    },
    {
      id: 865,
      rarity: 11,
      carryLimit: 99,
      value: 4370,
      name: "Silver Rathalos Shard",
      description: "Very rare Silver Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 866,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Tigrex Mantle",
      description: "Very rare Tigrex material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 867,
      rarity: 10,
      carryLimit: 99,
      value: 6240,
      name: "Amber Hardfang",
      description: "Very rare Barioth material. Obtained by breaking its head. Sharp used in many weapons."
    },
    {
      id: 868,
      rarity: 10,
      carryLimit: 99,
      value: 5450,
      name: "Azure Rathalos Cortex",
      description: "Very rare Azure Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 869,
      rarity: 10,
      carryLimit: 99,
      value: 7350,
      name: "Azure Rathalos Fellwing",
      description: "Very rare Azure Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 870,
      rarity: 10,
      carryLimit: 99,
      value: 7500,
      name: "Azure Rathalos Lash",
      description: "Very rare Azure Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
    },
    {
      id: 871,
      rarity: 10,
      carryLimit: 99,
      value: 3550,
      name: "Azure Rathalos Shard",
      description: "Very rare Azure Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 872,
      rarity: 10,
      carryLimit: 99,
      value: 2910,
      name: "Barioth Cortex",
      description: "Very rare Barioth material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 873,
      rarity: 10,
      carryLimit: 99,
      value: 6020,
      name: "Barioth Greatspike",
      description: "Very rare Barioth material. Obtained by breaking its wings. Tough, used in many weapons."
    },
    {
      id: 874,
      rarity: 10,
      carryLimit: 99,
      value: 5910,
      name: "Barioth Hardclaw",
      description: "Very rare Barioth material. Obtained as a reward and by carving. Sharp, used in many weapons."
    },
    {
      id: 875,
      rarity: 10,
      carryLimit: 99,
      value: 6130,
      name: "Barioth Lash",
      description: "Very rare Barioth material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 876,
      rarity: 10,
      carryLimit: 99,
      value: 4410,
      name: "Barioth Thickfur",
      description: "Very rare Barioth material. Mostly obtained as a reward. Broadly usedfor many purposes."
    },
    {
      id: 877,
      rarity: 10,
      carryLimit: 99,
      value: 5440,
      name: "Black Diablos Chine",
      description: "Very rare Black Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 878,
      rarity: 10,
      carryLimit: 99,
      value: 3450,
      name: "Black Diablos Cortex",
      description: "Very rare Black Diablos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 879,
      rarity: 10,
      carryLimit: 99,
      value: 8140,
      name: "Blackcurl Stouthorn",
      description: "Very rare Black Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 880,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Blackcurl Tyranthorn",
      description: "Very rare Black Diablos material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 883,
      rarity: 10,
      carryLimit: 99,
      value: 5540,
      name: "Brute Tigrex Cortex",
      description: "Very rare Brute Tigrex material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 884,
      rarity: 10,
      carryLimit: 99,
      value: 7440,
      name: "Brute Tigrex Hardclaw",
      description: "Very rare Brute Tigrex material. Obtained by breaking its forelegs. Used in many weapons."
    },
    {
      id: 885,
      rarity: 10,
      carryLimit: 99,
      value: 7720,
      name: "Brute Tigrex Hardfang",
      description: "Very rare Brute Tigrex material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 886,
      rarity: 10,
      carryLimit: 99,
      value: 3640,
      name: "Brute Tigrex Shard",
      description: "Very rare Brute Tigrex material. Moslty obtained by carving. Broadly used for many purposes."
    },
    {
      id: 887,
      rarity: 10,
      carryLimit: 99,
      value: 4380,
      name: "Diablos Chine",
      description: "Very rare Diablos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 888,
      rarity: 10,
      carryLimit: 99,
      value: 2880,
      name: "Diablos Cortex",
      description: "Very rare Diablos material. Mostly obtained by carving Broadly used for many purposes."
    },
    {
      id: 889,
      rarity: 10,
      carryLimit: 99,
      value: 5960,
      name: "Diablos Tailcase+",
      description: "Very rare Diablos material. Obtained by carving its severed tail. Sturdy, but difficult to handle."
    },
    {
      id: 890,
      rarity: 10,
      carryLimit: 99,
      value: 5880,
      name: "Legiana Fellwing",
      description: "Very rare Legiana maeterial. Obtained by breaking its wings . Supple, used to craft gear."
    },
    {
      id: 891,
      rarity: 10,
      carryLimit: 99,
      value: 5840,
      name: "Legiana Hardclaw",
      description: "Very rare Legiana material. Mostly obtained by carving. Grants ice elements properties."
    },
    {
      id: 892,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Legiana Mantle",
      description: "Very rare Legiana material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 893,
      rarity: 10,
      carryLimit: 99,
      value: 2840,
      name: "Legiana Shard",
      description: "Very rare Legiana material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 894,
      rarity: 10,
      carryLimit: 99,
      value: 5920,
      name: "Legiana Tail Webbing+",
      description: "Very rare Legiana material. Obtained by breaking its tail. Supple, used to craft gear."
    },
    {
      id: 895,
      rarity: 10,
      carryLimit: 99,
      value: 4340,
      name: "Legiana Thickhide",
      description: "Very rare Legiana material. Mostly obtained as a reward. Lightweight, used to craft gear."
    },
    {
      id: 896,
      rarity: 10,
      carryLimit: 99,
      value: 4440,
      name: "Nargacuga Blackfur+",
      description: "Very rare Nargacuga material. mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 897,
      rarity: 10,
      carryLimit: 99,
      value: 5940,
      name: "Nargacuga Cutwing+",
      description: "Very rare Nargacuga material. Obtained by breaking its wings. Sharp, used in many weapons."
    },
    {
      id: 898,
      rarity: 10,
      carryLimit: 99,
      value: 6080,
      name: "Nargacuga Hardfang",
      description: "Very rare Nargacuga material. Obtained by breaking its head. Tough, used in many weapons."
    },
    {
      id: 899,
      rarity: 10,
      carryLimit: 99,
      value: 6220,
      name: "Nargacuga Lash",
      description: "Very rare Nargacuga material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 900,
      rarity: 10,
      carryLimit: 99,
      value: 2940,
      name: "Nargacuga Shard",
      description: "Very rare Nargacuga material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 901,
      rarity: 10,
      carryLimit: 99,
      value: 6340,
      name: "Nargacuga Tailspear",
      description: "Very rare Nargacuga material. Obtained by collecting rare drops. Broadly usedfor many purposes."
    },
    {
      id: 902,
      rarity: 10,
      carryLimit: 99,
      value: 7360,
      name: "Obsidian Icetalon",
      description: "Very rare Shrieking Legiana material. Mostly obtained by carving. Grants ice element properties."
    },
    {
      id: 903,
      rarity: 10,
      carryLimit: 99,
      value: 4370,
      name: "Rathalos Cortex",
      description: "Very rare Rathalos material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 904,
      rarity: 10,
      carryLimit: 99,
      value: 5940,
      name: "Rathalos Fellwing",
      description: "Very rare Rathalos material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 905,
      rarity: 10,
      carryLimit: 99,
      value: 6010,
      name: "Rathalos Lash",
      description: "Very rare Rathalos material. Obtained by carving its severed tail. Compatible with fire element."
    },
    {
      id: 906,
      rarity: 10,
      carryLimit: 99,
      value: 5870,
      name: "Rath Wingtalon+",
      description: "Very rare material from Rathian and Rathalos. Obtained by breaking its wings."
    },
    {
      id: 908,
      rarity: 10,
      carryLimit: 99,
      value: 2870,
      name: "Rathalos Shard",
      description: "Very rare Rathalos material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 909,
      rarity: 10,
      carryLimit: 99,
      value: 5460,
      name: "Rimed Hide",
      description: "Very rare Shrieking Legiana material. Mostly obtained as a reward. Lightweight, used to craft gear."
    },
    {
      id: 910,
      rarity: 10,
      carryLimit: 99,
      value: 7420,
      name: "Stark Wing",
      description: "Very rare Shrieking Legiana material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 911,
      rarity: 10,
      carryLimit: 99,
      value: 4420,
      name: "Tigrex Cortex",
      description: "Very rare Tigrex material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 912,
      rarity: 10,
      carryLimit: 99,
      value: 6040,
      name: "Tigrex Hardclaw",
      description: "Very rare Tigrex material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 913,
      rarity: 10,
      carryLimit: 99,
      value: 5920,
      name: "Tigrex Hardfang",
      description: "Very rare Tigrex material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 914,
      rarity: 10,
      carryLimit: 99,
      value: 6160,
      name: "Tigrex Lash",
      description: "Very rare Tigrex material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 915,
      rarity: 10,
      carryLimit: 99,
      value: 2920,
      name: "Tigrex Shard",
      description: "Very rare Tigrex material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 916,
      rarity: 10,
      carryLimit: 99,
      value: 7540,
      name: "Twisted Stouthorn",
      description: "Very rare Diablos material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 917,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Twisted Bravehorn",
      description: "Very rare Diablos material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 918,
      rarity: 9,
      carryLimit: 99,
      value: 4400,
      name: "Nightshade Paolumu Fellwing",
      description: "Very rare Nightshade Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 919,
      rarity: 9,
      carryLimit: 99,
      value: 2200,
      name: "Nightshade Paolumu Shard",
      description: "Very rare Nightshade Paolumu material. Mostly obtained by carving. Solid, used to craft gear."
    },
    {
      id: 920,
      rarity: 9,
      carryLimit: 99,
      value: 3300,
      name: "Nightshade Paolumu Thickfur",
      description: "Very rare Nightshade Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 921,
      rarity: 9,
      carryLimit: 99,
      value: 4380,
      name: "Paolumu Cortex",
      description: "Very rare material from Paolumu and its subspecies Obtained by breaking its tail."
    },
    {
      id: 922,
      rarity: 9,
      carryLimit: 99,
      value: 4340,
      name: "Paolumu Fellwing",
      description: "Very rare Paolumu material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 923,
      rarity: 9,
      carryLimit: 99,
      value: 2140,
      name: "Paolumu Shard",
      description: "Very rare Paolumu material Obtained by carving. Warm and durable, used to craft gear."
    },
    {
      id: 924,
      rarity: 9,
      carryLimit: 99,
      value: 3240,
      name: "Paolumu Thickfur",
      description: "Very rare Paolumu material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 925,
      rarity: 9,
      carryLimit: 99,
      value: 3530,
      name: "Pink Rathian Cortex",
      description: "Very rare Pink Rathian material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 926,
      rarity: 9,
      carryLimit: 99,
      value: 2430,
      name: "Pink Rathian Shard",
      description: "Very rare Pink Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 927,
      rarity: 9,
      carryLimit: 99,
      value: 3270,
      name: "Rathian Cortex",
      description: "Very rare Rathian material. Mostly obtained as a reward. Soid, used to craft gear."
    },
    {
      id: 928,
      rarity: 11,
      carryLimit: 99,
      value: 12000,
      name: "Rathian Mantle",
      description: "Very rare Rathian material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 929,
      rarity: 9,
      carryLimit: 99,
      value: 2170,
      name: "Rathian Shard",
      description: "Very rare Rathian material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 930,
      rarity: 9,
      carryLimit: 99,
      value: 4510,
      name: "Rathian Surspike",
      description: "Very rare Rathian material. Obtained by carving its severed tail. Grants poisonous properties."
    },
    {
      id: 931,
      rarity: 9,
      carryLimit: 99,
      value: 4370,
      name: "Rathian Weave",
      description: "Very rare Rathian material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 932,
      rarity: 12,
      carryLimit: 99,
      value: 3200,
      name: "Large Elder Dragon Bone",
      description: "Material from master rank elder dragons. Equal parts austere and wild, it seems untouched by time."
    },
    {
      id: 933,
      rarity: 12,
      carryLimit: 99,
      value: 21000,
      name: "Large Elder Dragon Gem",
      description: "A giant, ultra-rare stone that forms inside an Elder Dragon once in a millennium."
    },
    {
      id: 934,
      rarity: 12,
      carryLimit: 99,
      value: 24000,
      name: "Shara Ishvalda Gem",
      description: "Very rare Shara Ishvalda material. Used to creaft weapons powerful enought to take over the world."
    },
    {
      id: 935,
      rarity: 12,
      carryLimit: 99,
      value: 21000,
      name: "Velkhana Crystal",
      description: "Very rare Velkhana material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 936,
      rarity: 11,
      carryLimit: 99,
      value: 9340,
      name: "Annihilating Greathorn",
      description: "Very rare Ruiner Nergigante material. Obtained by breaking its horns. Stout, used in many weapons."
    },
    {
      id: 937,
      rarity: 11,
      carryLimit: 99,
      value: 4340,
      name: "Crystal Shard",
      description: "Very rare Velkhana material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 938,
      rarity: 11,
      carryLimit: 99,
      value: 6560,
      name: "Daora Cortex",
      description: "Very rare Kushala Daora material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 939,
      rarity: 11,
      carryLimit: 99,
      value: 8800,
      name: "Daora Fellwing",
      description: "Very rare Kushala Daora material. Obtained by breaking its wings. Lightweight, used to craft gear."
    },
    {
      id: 940,
      rarity: 11,
      carryLimit: 99,
      value: 8860,
      name: "Daora Hardclaw",
      description: "Very rare Kushala Daora material. Mostly obtained by carving. Imbued with potent ice element."
    },
    {
      id: 941,
      rarity: 11,
      carryLimit: 99,
      value: 8920,
      name: "Daora Hardhorn",
      description: "Very rare Kushala Daora material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 942,
      rarity: 11,
      carryLimit: 99,
      value: 9100,
      name: "Daora Lash",
      description: "Very rare Kushala Daora material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 943,
      rarity: 11,
      carryLimit: 99,
      value: 4260,
      name: "Daora Shard",
      description: "Very rare Kushala Daora material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 944,
      rarity: 11,
      carryLimit: 99,
      value: 6740,
      name: "Deathweaver Membrane",
      description: "Very rare Blackveil Vaal Hazak material. Obtained from rare drops. Grants dragon element properties."
    },
    {
      id: 945,
      rarity: 11,
      carryLimit: 99,
      value: 4320,
      name: "Deceased Shard",
      description: "Very rare Blackveil Vaal Hazak material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 946,
      rarity: 11,
      carryLimit: 99,
      value: 6860,
      name: "Eternal Regrowth Plate",
      description: "Very rare Ruiner Nergigante material. Obtained by collecting rare drops. Unusual, used to craft gear."
    },
    {
      id: 948,
      rarity: 11,
      carryLimit: 99,
      value: 8960,
      name: "Fire Dragon Hardclaw",
      description: "Very rare Teostra material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 949,
      rarity: 11,
      carryLimit: 99,
      value: 4280,
      name: "Hellfire Shard",
      description: "Very rare Teostra material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 950,
      rarity: 11,
      carryLimit: 99,
      value: 4380,
      name: "Immortal Shard",
      description: "Very rare Ruiner Nergigante material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 951,
      rarity: 11,
      carryLimit: 99,
      value: 9100,
      name: "Kirin Azure Horn+",
      description: "Very rare Kirin material. Obtained by breaking its horn. Grants thunder element properties."
    },
    {
      id: 952,
      rarity: 11,
      carryLimit: 99,
      value: 4300,
      name: "Kirin Finehide",
      description: "Very Rare Kirin material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 953,
      rarity: 11,
      carryLimit: 99,
      value: 8900,
      name: "Kirin Silvermane",
      description: "Very Rare Kirin material. Mostly obtained by carving. Highly thunder-resistant, used to craft gear."
    },
    {
      id: 954,
      rarity: 11,
      carryLimit: 99,
      value: 6600,
      name: "Kirin Thundertail+",
      description: "Very Rare Kirin material. Mostly obtained as a reward. Compatible with thunder element."
    },
    {
      id: 955,
      rarity: 11,
      carryLimit: 99,
      value: 6610,
      name: "Lunastra Cortex",
      description: "Very rare Lunastra material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 956,
      rarity: 11,
      carryLimit: 99,
      value: 8910,
      name: "Lunastra Fellwing",
      description: "Very rare Lunastra material. Obtained by breaking its wings. Used to craft gear."
    },
    {
      id: 957,
      rarity: 11,
      carryLimit: 99,
      value: 9460,
      name: "Lunastra Hardhorn",
      description: "Very rare Lunastra material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 958,
      rarity: 11,
      carryLimit: 99,
      value: 9130,
      name: "Lunastra Lash",
      description: "Very rare Lunastra material. Obtained by carving its severed tail. Used for craft gear."
    },
    {
      id: 959,
      rarity: 11,
      carryLimit: 99,
      value: 6610,
      name: "Lunastra Mane+",
      description: "Very rare Lunastra material. Obtained by collecting rare drops. Valuable, fire resistant material."
    },
    {
      id: 960,
      rarity: 11,
      carryLimit: 99,
      value: 4310,
      name: "Lunastra Shard",
      description: "Very rare Lunastra material. Mostly obtained by carving. Used for many purposes."
    },
    {
      id: 961,
      rarity: 11,
      carryLimit: 99,
      value: 8960,
      name: "Namielle Fellwing",
      description: "Very rare Namielle material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 962,
      rarity: 11,
      carryLimit: 99,
      value: 4360,
      name: "Namielle Finehide",
      description: "Very rare Namielle material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 963,
      rarity: 11,
      carryLimit: 99,
      value: 9120,
      name: "Namielle Hardclaw",
      description: "Very rare Namielle material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 964,
      rarity: 11,
      carryLimit: 99,
      value: 9280,
      name: "Namielle Lash",
      description: "Very rare Namielle material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 965,
      rarity: 11,
      carryLimit: 99,
      value: 9600,
      name: "Namielle Whisker",
      description: "Very rare Namielle material. Obtained by breaking its head. Grants thunder element properties."
    },
    {
      id: 966,
      rarity: 11,
      carryLimit: 99,
      value: 6680,
      name: "Nergigante Cortex",
      description: "Very Rare Ruiner Nergigante material. Mostly obtained as a reward . Solid, used to craft gear."
    },
    {
      id: 967,
      rarity: 11,
      carryLimit: 99,
      value: 8980,
      name: "Nergigante Flail",
      description: "Very Rare Ruiner Nergigante material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 968,
      rarity: 11,
      carryLimit: 99,
      value: 9160,
      name: "Nergigante Hardclaw",
      description: "Very Rare Ruiner Nergigante material. Mostly obtaiend by carving. Sharp, used in many weapons."
    },
    {
      id: 969,
      rarity: 11,
      carryLimit: 99,
      value: 4800,
      name: "Pure Dragon Blood",
      description: "Elder dragon blood that contains a more potent mix of its mysterious ingredient."
    },
    {
      id: 970,
      rarity: 11,
      carryLimit: 99,
      value: 9040,
      name: "Shadowpierce Fang",
      description: "Very rare Blackveil Vaal Hazak material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 971,
      rarity: 11,
      carryLimit: 99,
      value: 4900,
      name: "Shara Ishvalda Boulderplate",
      description: "Very rare Shara Ishvalda material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 972,
      rarity: 11,
      carryLimit: 99,
      value: 4900,
      name: "Shara Ishvalda Petalstone",
      description: "Very rare Shara Ishvalda material. Obtained by collecting rare drops. Used to craft gear."
    },
    {
      id: 973,
      rarity: 11,
      carryLimit: 99,
      value: 10300,
      name: "Shara Ishvalda Tenderclaw",
      description: "Very rare Shara Ishvalda material. Obtained by breaking its wingsarms. Used in many weapons."
    },
    {
      id: 974,
      rarity: 11,
      carryLimit: 99,
      value: 10300,
      name: "Shara Ishvalda Tenderplate",
      description: "Very rare Shara Ishvalda material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 975,
      rarity: 11,
      carryLimit: 99,
      value: 7600,
      name: "Shara Ishvalda Tenderscale",
      description: "Very rare Shara Ishvalda material. Mostly obtained by carving. Broadly used for its extreme versatility."
    },
    {
      id: 976,
      rarity: 11,
      carryLimit: 99,
      value: 6580,
      name: "Teostra Cortex",
      description: "Very rare Teostra material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 977,
      rarity: 11,
      carryLimit: 99,
      value: 9280,
      name: "Teostra Hardhorn",
      description: "Very rare Teostra material. Obtained by breaking its head. Used in many weapons."
    },
    {
      id: 978,
      rarity: 11,
      carryLimit: 99,
      value: 9040,
      name: "Teostra Lash",
      description: "Very rare Teostra material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 979,
      rarity: 11,
      carryLimit: 99,
      value: 6580,
      name: "Teostra Mane+",
      description: "Very rare Teostra material. Obtained by breaking its head. Highly fire-resistant."
    },
    {
      id: 980,
      rarity: 11,
      carryLimit: 99,
      value: 8920,
      name: "Vaal Hazak Fellwing",
      description: "Very rare Blackveil Vaal Hazak material. Obtained by breaking its torso. Used to craft gear."
    },
    {
      id: 981,
      rarity: 11,
      carryLimit: 99,
      value: 9280,
      name: "Vaal Hazak Flail",
      description: "Very rare Blackveil Vaal Hazak material. Obtained by carving its severed tail. Used to craft gear."
    },
    {
      id: 982,
      rarity: 11,
      carryLimit: 99,
      value: 9160,
      name: "Vaal Hazak Hardclaw",
      description: "Very rare Blackveil Vaal Hazak material. Obtained by breaking its forelegs. Used in many weapons."
    },
    {
      id: 983,
      rarity: 11,
      carryLimit: 99,
      value: 6620,
      name: "Vaal Hazak Cortex",
      description: "Very rare Blackveil Vaal Hazak material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 984,
      rarity: 11,
      carryLimit: 99,
      value: 6640,
      name: "Velkhana Cortex",
      description: "Very rare Velkhana material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 985,
      rarity: 11,
      carryLimit: 99,
      value: 9640,
      name: "Velkhana Crownhorn",
      description: "Very rare Velkhana material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 986,
      rarity: 11,
      carryLimit: 99,
      value: 8940,
      name: "Velkhana Fellwing",
      description: "Very rare Velkhana material. Obtained by breaking its wings. Supple, used to craft gear."
    },
    {
      id: 987,
      rarity: 11,
      carryLimit: 99,
      value: 9220,
      name: "Velkhana Lash",
      description: "Very rare Velkhana material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 988,
      rarity: 8,
      carryLimit: 99,
      value: 800,
      name: "Glamour Prism",
      description: "A strange stone that projects illusions. Show this to the Resource Center and...!?"
    },
    {
      id: 989,
      rarity: 11,
      carryLimit: 99,
      value: 21000,
      name: "Great Spiritvein Gem",
      description: "Gem obtained from tempered monsters in the Guiding Lands. Rife with power from the dawn of creation."
    },
    {
      id: 990,
      rarity: 11,
      carryLimit: 99,
      value: 14000,
      name: "Spiritvein Gem",
      description: "Gem obtained from tempered monsters in the Guiding Lands. Raw subterranean power given form."
    },
    {
      id: 991,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Forest Crystal",
      description: "Ore obtained in the Guiding Lands' forest region. A massive crystal formed by miraculous earthen energy."
    },
    {
      id: 992,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Magma Crystal",
      description: "Ore obtained in the Guiding Lands' volcanic region. A massive crystal formed by miraculous earthen energy."
    },
    {
      id: 993,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Coral Crystal",
      description: "Ore obtained in the Guiding Lands' coral region. The energy it holds is palpable to the touch."
    },
    {
      id: 994,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Effluvial Crystal",
      description: "Ore obtained in the Guiding Lands' rotted region. A massive crystal formed by miraculous earthen energy."
    },
    {
      id: 995,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Wasteland Crystal",
      description: "Ore obtained in the Guiding Lands' wildspire region. A massive crystal formed by miraculous earthen energy."
    },
    {
      id: 996,
      rarity: 11,
      carryLimit: 99,
      value: 3500,
      name: "Elder Dragonvein Bone",
      description: "Bone obtained from elder dragons in the Guiding Lands. More imposing for having absored earthen energy."
    },
    {
      id: 997,
      rarity: 11,
      carryLimit: 99,
      value: 5000,
      name: "Elder Spiritvein Bone",
      description: "Bone obtained from tempered monsters in the Guiding Lands. Proof of their status as true masters of the land."
    },
    {
      id: 998,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Forest Dragonbone",
      description: "Bone obtained in the Guiding Lands' forest region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 999,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Volcanic Dragonbone",
      description: "Bone obtained in the Guiding Lands' volcanic region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 1000,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Coral Dragonbone",
      description: "Bone obtained in the Guiding Lands' coral region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 1001,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Rotted Dragonbone",
      description: "Bone obtained in the Guiding Lands' rotted region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 1002,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Wasteland Dragonbone",
      description: "Bone obtained in the Guiding Lands' wildspire region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 1003,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Aurora Crownhorn",
      description: "Very rare Velkhana material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1004,
      rarity: 11,
      carryLimit: 99,
      value: 4500,
      name: "Azure Mane",
      description: "Very rare Lunastra material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1005,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Enchanting Finehide",
      description: "Very Rare Namielle material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1006,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Extinction Greathorn",
      description: "Very rare Ruiner Nergigante material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1007,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Hellfire Mane",
      description: "Very rare Teostra material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1008,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Solemn Azure Horn",
      description: "Very rare Kirin material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1009,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Stormcall Steelwing",
      description: "Very rare Kushala Daora material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1010,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Azure Horn",
      description: "Very rare Tempered Kirin material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1011,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Azure Mane",
      description: "Very rare Tempered Lunastra material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1012,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Crownhorn",
      description: "Very Rare Tempered Velkhana material. A product of the brutal power strugglein the Guiding Lands."
    },
    {
      id: 1013,
      rarity: 11,
      carryLimit: 99,
      value: 600,
      name: "Tempered Crimson Mane",
      description: "Very rare Tempered Teostra meterial. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1014,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Steelwing",
      description: "Very rare Tempered Kushala Daora material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1015,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Trancehide",
      description: "Very rare Tempered Namielle material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1016,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Twilight Fang",
      description: "Very rare Tempered Blackveil Vaal Hazak material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1017,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Twilight Fang",
      description: "Very rare Blackveil Vaal Hazak material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1018,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Bloodstained Ebonhide",
      description: "Very rare Savage Devilho material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1019,
      rarity: 11,
      carryLimit: 99,
      value: 4000,
      name: "Crimson Blastscale",
      description: "Very rare Seething Bazelgeuse material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1020,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Moonlight Scale",
      description: "Very rare Gold Rathian material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1021,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Scorching Scale",
      description: "Very rare Silver Rathalos material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1022,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Tempered Blastscale",
      description: "Very rare Tempered Seething Bazelgeuse material. A product of the brutal power struggle in the Guidings Lands."
    },
    {
      id: 1023,
      rarity: 11,
      carryLimit: 99,
      value: 6000,
      name: "Spattered Hide",
      description: "Very rare Tempered Savage Deviljho material. A product of the brutal power struggle in the Guilding Lands."
    },
    {
      id: 1024,
      rarity: 10,
      carryLimit: 99,
      value: 7000,
      name: "Spiritvein Gem Shard",
      description: "Gem obtained from tempered monsters in the Guiding Lands. Even a tiny sliver holds miraculous potential."
    },
    {
      id: 1025,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Prosperous Crystal",
      description: "Ore obtained in the Guiding Lands' forest region. The energy it holds is palpable to the touch."
    },
    {
      id: 1026,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Hellfire Crystal",
      description: "Ore obtained in the Guiding Lands' volcanic region. The energy it holds is palpable to the touch."
    },
    {
      id: 1027,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Deepsea Crystal",
      description: "Ore obtained in the Guiding Lands' coral region. The energy it holds is palpable to the touch."
    },
    {
      id: 1028,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Twilight Crystal",
      description: "Ore obtained in the Guiding Lands' rotted region. The energy it holds is palpable to the touch."
    },
    {
      id: 1029,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Serene Crystal",
      description: "Ore obtained in the Guiding Lands' wildspire region. The energy it holds is palpable to the touch."
    },
    {
      id: 1030,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Dragonvein Solidbone",
      description: "Bone obtained from large monsters in the Guiding Lands. Strong as steel after absorbing earthen energy."
    },
    {
      id: 1031,
      rarity: 10,
      carryLimit: 99,
      value: 4500,
      name: "Spiritvein Solidbone",
      description: "Bone obtained from tempered monsters in the Guiding Lands. Drew in earthen energy to slake its endless thrist."
    },
    {
      id: 1032,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Slumbering Greatbone",
      description: "Bone obtained in the Guiding Lands' forest region. Its curious form suggests untold potential."
    },
    {
      id: 1033,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Dragonscorched Wildbone",
      description: "Bone obtained in the Guiding Lands' volcanic region. Its curious form suggests untold potential."
    },
    {
      id: 1034,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Vibrant Crimsonbone",
      description: "Bone obtained in the Guiding Lands' coral region. Its curious form suggests untold potential."
    },
    {
      id: 1035,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Afflicted Frenzybone",
      description: "Bone obtained in the Guiding Lands' rotted region. Its curious form suggests untold potential."
    },
    {
      id: 1036,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Tempered Cragbone",
      description: "Bone obtained in the Guiding Lands' wildspire region. Its curious form suggests untold potential."
    },
    {
      id: 1037,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Blackcurl Temperhorn",
      description: "Very rare Tempered Black Diablos material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1038,
      rarity: 11,
      carryLimit: 99,
      value: 9000,
      name: "Tempered Gold Scale",
      description: "Very rare Tempered Gold Rathian material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1039,
      rarity: 11,
      carryLimit: 99,
      value: 9000,
      name: "Tempered Silver Scale",
      description: "Very rare Tempered Silver Rathalos material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1040,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Glimmerpelt",
      description: "Very rare Tempered Rajang material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1041,
      rarity: 11,
      carryLimit: 99,
      value: 4500,
      name: "Bloodthirsty Glimmerpelt",
      description: "Very rare Rajang material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1042,
      rarity: 10,
      carryLimit: 99,
      value: 4500,
      name: "Charged Deathly Shocker",
      description: "Very rare Zinogre material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1043,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Fatal Rendclaw",
      description: "Very rare Odogaron material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1044,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Soulrender Talon",
      description: "Very rare Ebony Odogaron material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1045,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Rendclaw",
      description: "Very rare Tempered Odogaron material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1046,
      rarity: 10,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Shocker",
      description: "Very rare Tempered Zinogre material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1047,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Tempered Talon",
      description: "Very rare Tempered Ebony Odogaron material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1048,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Crackling Thunderpelt",
      description: "Very rare Fulgur Anjanath material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1049,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Glossy Ebonshell",
      description: "Very rare Brachydios material. The Guiding Lands' energy fortifies the monsters living here."
    },
    {
      id: 1050,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Honed Tailblade",
      description: "Very rare Acidic Glavenus material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1051,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Metallic Scute",
      description: "Very rare Uragaan material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1052,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Smoldering Tailedge",
      description: "Very rare Glavenus material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1053,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Ebonshell",
      description: "Very rare Tempered Brachydios material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1054,
      rarity: 11,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Scute",
      description: "Very rare Tempered Uragaan material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1055,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Tempered Tailblade",
      description: "Very rare Tempered Acidic Glavenus material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1056,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Tailedge",
      description: "Very rare Tempered Glavenus material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1057,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Tempered Thunderpelt",
      description: "Very rare Tempered Fulgur Anjanath material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1058,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Assassin Cutwing",
      description: "Very rare Nargacuga material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1059,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Azure Scale",
      description: "Very rare Azure Rathalos material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1061,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "King's Scale",
      description: "Very rare Rathalos material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1062,
      rarity: 10,
      carryLimit: 99,
      value: 4500,
      name: "Shuddering Darkjaw",
      description: "Very rare Brute Tigrex material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1063,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Smooth Icehide",
      description: "Very rare Legiana material. The Guiding lands' energy fortifies the monsters living there."
    },
    {
      id: 1064,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Strongman's Jaw",
      description: "Very rare Tigrex material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1065,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Tempered Azure Scale",
      description: "Very rare Tempered Azure Rathalos material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1066,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Cutwing",
      description: "Very rare Tempered Nragacuga material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1067,
      rarity: 10,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Ebonjaw",
      description: "Very rare Tempered Brute Tigrex material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1068,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Icehide",
      description: "Very rare Tempered Legiana material. A product if the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1069,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Jaw",
      description: "Very rare Tempered Tigrex material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1070,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Red Scale",
      description: "Very rare Tempered Rathalos material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1071,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Twisted Temperhorn",
      description: "Very rare Tempered Diablos material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1072,
      rarity: 10,
      carryLimit: 99,
      value: 3000,
      name: "Incandescent Magmafin",
      description: "Very rare Lavasioth material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1073,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Magmafin",
      description: "Very rare Tempered Lavasioth material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1074,
      rarity: 10,
      carryLimit: 99,
      value: 4500,
      name: "Sinister Silverpelt",
      description: "Very rare Yian Garuga material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1075,
      rarity: 10,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Silverpelt",
      description: "Very rare Tempered Scarred Yian Garuga material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1076,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Decayed Crystal",
      description: "Ore obtained in the Guiding Lands' forest region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1077,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Forest Crystal",
      description: "Ore obtained in the Guiding Lands' forest region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1078,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Magma Crystal",
      description: "Ore obtained in the Guiding Lands' volcanic region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1079,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Melted Crystal",
      description: "Ore obtained in the Guiding Lands' volcanic region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1082,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Coral Crystal - Rarity 9",
      description: "Ore obtained in the Guiding Lands' coral region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1083,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Pale Crystal",
      description: "Ore obtained in the Guiding Lands' coral region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1084,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Distorted Crystal",
      description: "Ore obtained in the Guiding Lands' rotted region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1085,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Effluvial Crystal",
      description: "Ore obtained in the Guiding Lands' rotted region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1086,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Cracked Crystal",
      description: "Ore obtained in the Guiding Lands' wildspire region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1087,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Wasteland Crystal",
      description: "Ore obtained in the Guiding Lands' wildspire region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1088,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Fierce Dragonvein Bone",
      description: "Bone obtained from large monsters in the Guiding Lands. Visibly stronger for having absorbed earthen energy."
    },
    {
      id: 1089,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Heavy Dragonvein Bone",
      description: "Bone obtained from large monsters in the Guiding Lands. Notably heavier for having absorbed earthen energy."
    },
    {
      id: 1090,
      rarity: 9,
      carryLimit: 99,
      value: 4000,
      name: "Spiritvein Slogbone",
      description: "Bone obtained from tempered monsters in the Guiding Lands. Imbued with the same power as a streamstone."
    },
    {
      id: 1091,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Mossy Greatbone",
      description: "Bone obtained in the Guiding Lands' forest region. Subterranean energy has altered its material properties."
    },
    {
      id: 1092,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Woodland Greatbone",
      description: "Bone obtained in the Guiding Lands' forest region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1093,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Simmering Wildbone",
      description: "Bone obtained in the Guiding Lands' volcanic region. Subterranean energy has altered its material properties."
    },
    {
      id: 1094,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Volcanic Wildbone",
      description: "Bone obtained in the Guiding Lands' volcanic region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1095,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Coral Crimsonbone",
      description: "Bone obtained in the Guiding Lands' coral region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1096,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Vivid Crimsonbone",
      description: "Bone obtained in the Guiding Lands' coral region. Subterranean energy has altered its material properties."
    },
    {
      id: 1097,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Effluvial Frenzybone",
      description: "Bone obtained in the Guiding Lands' rotted region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1098,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Malformed Frenzybone",
      description: "Bone obtained in the Guiding Lands' rotted region. Subterranean energy has altered its material properties."
    },
    {
      id: 1099,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Wasteland Cragbone",
      description: "Bone obtained in the Guiding Lands' wildspire region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1100,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Weathered Cragbone",
      description: "Bone obtained in the Guiding Lands' wildspire region. Subterranean energy has altered its material properties."
    },
    {
      id: 1101,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Blinding Cathode",
      description: "Very rare Tobi-Kadachi material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1102,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Heavy Jaw",
      description: "Very rare Dodogama material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1103,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Night Hood",
      description: "Very rare Great Girros material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1104,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Rugged Mane",
      description: "Very rare Great Jagras material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1105,
      rarity: 9,
      carryLimit: 99,
      value: 4000,
      name: "Tempered Cathode",
      description: "Very rare Tobi-Kadachi material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1106,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Ancient Great Horn",
      description: "Very rare Banbaro material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1107,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Flickering Flamepelt",
      description: "Very rare Anjanath material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1108,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Inkstained Oilshell+",
      description: "Very rare Radobaan material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1109,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Muddy Crown",
      description: "Very rare Barroth material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1110,
      rarity: 9,
      carryLimit: 99,
      value: 4000,
      name: "Tempered Crown",
      description: "Very rare Tempered Barroth material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1111,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Flamepelt",
      description: "Very rare Tempered Anjanath material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1112,
      rarity: 9,
      carryLimit: 99,
      value: 4000,
      name: "Tempered Great Horn",
      description: "Very rare Tempered Banbaro material. A product of the brutal power struggle of the Guiding Lands."
    },
    {
      id: 1113,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Oilshell+",
      description: "Very rare Tempered Radobaan material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1114,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Obsidian Fur",
      description: "Very rare Nightshade Paolumu material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1115,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Pink Scale",
      description: "Very rare Pink Rathian material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1116,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Queen's Scale",
      description: "Very rare Rathian material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1117,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Rubbery Shell",
      description: "Very rare Paolumu material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1118,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Green Scale",
      description: "Very rare Tempered Rathian material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1119,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Hide",
      description: "Very rare Tempered Nightshade Paolumu material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1120,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Pink Scale",
      description: "Very rare Tempered Pink Rathian material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1121,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Rubbery Shell",
      description: "Very Rare Tempered Paolumu material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1122,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Colorful Plume",
      description: "Very rare Kulu-Ya-Ku material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1123,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Dazzling Photophore+",
      description: "Very rare Tzitzi-Ya-Ku material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1124,
      rarity: 9,
      carryLimit: 99,
      value: 2000,
      name: "Fragrant Poison Sac",
      description: "Very rare Pukei-Pukei material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1125,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Hydrated Sac",
      description: "Very rare Coral Pukei-Pukei material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1126,
      rarity: 9,
      carryLimit: 99,
      value: 4000,
      name: "Tempered Poison Sac",
      description: "Very rare Tempered Pukei-Pukei material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1127,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Torrent Sac",
      description: "Very rare Tempered Coral Pukei-Pukei material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1128,
      rarity: 4,
      carryLimit: 1,
      value: 0,
      name: "Hunter Runestone",
      description: "To the Hunter of Astera. An otherworldy stone gifted by Gerald. Depicts a magic sign for controlling fire."
    },
    {
      id: 1129,
      rarity: 4,
      carryLimit: 99,
      value: 750,
      name: "Golden Fragment",
      description: "A fragment of pure gold. It fetches a high price despite its size. (Trade-in Item)"
    },
    {
      id: 1130,
      rarity: 4,
      carryLimit: 99,
      value: 1500,
      name: "Golden Chunk",
      description: "A precious lump of gold. Its brilliance can bewitch the purest of hearts. (Trade-in Item)"
    },
    {
      id: 1131,
      rarity: 4,
      carryLimit: 99,
      value: 300,
      name: "Gold Chip Fragment",
      description: "A fragment that a Copper Calappa harvested from a Kulve Taroth track. (Trade-in Item)"
    },
    {
      id: 1132,
      rarity: 4,
      carryLimit: 99,
      value: 0,
      name: "Dissolved Weapon",
      description: "A weapon carved from Kulve Tarroth. Must be repaired before it can be used. (Appraised after investigation)"
    },
    {
      id: 1133,
      rarity: 5,
      carryLimit: 99,
      value: 0,
      name: "Melded Weapon",
      description: "A weapon carved from Kulve Tarroth. Some parts have been infused with gold. (Appraised after investigation)"
    },
    {
      id: 1134,
      rarity: 6,
      carryLimit: 99,
      value: 0,
      name: "Sublimated Weapon",
      description: "A weapon carved from Kulve Tarroth. Strengthened by being infused with gold. (Appraised after investigation)"
    },
    {
      id: 1135,
      rarity: 4,
      carryLimit: 99,
      value: 1500,
      name: "Emerald Shell",
      description: "An emerald Helmcrab carapace, every bit as lovely at its gem namesake. (Trade-in Item)"
    },
    {
      id: 1136,
      rarity: 4,
      carryLimit: 99,
      value: 400,
      name: "Senu's Feather",
      description: "A feather from Senu, loyal to an assassin who stands against injustice and oppression. Show it to the Smithy."
    },
    {
      id: 1137,
      rarity: 8,
      carryLimit: 1,
      value: 0,
      name: "Nekker Card (Weapon)",
      description: "A gift from Geralt to the Endemic Life Researcher. Redeem at the Smithy for a Palico Weapon."
    },
    {
      id: 1138,
      rarity: 8,
      carryLimit: 1,
      value: 0,
      name: "Nekker Card (Armor)",
      description: "A gift from Geralt to the Endemic Life Researcher. Redeem at the Smithy for a Palico Armor."
    },
    {
      id: 1139,
      rarity: 5,
      carryLimit: 99,
      value: 1000,
      name: "Gourmet Voucher",
      description: "The ultimate ticket, granting you a free meal using only the freshest of ingredients."
    },
    {
      id: 1140,
      rarity: 9,
      carryLimit: 99,
      value: 700,
      name: "King Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to vastly improve it."
    },
    {
      id: 1141,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "True Armor Sphere",
      description: "Reacts uniquely to heat. Fuse this to armor to extremely improve it."
    },
    {
      id: 1142,
      rarity: 9,
      carryLimit: 99,
      value: 1580,
      name: "Pukei-Pukei Shard",
      description: "Very rare Pukei-Pukei material. Mostly obtained by carving. Broadly used for many purposes."
    },
    {
      id: 1143,
      rarity: 10,
      carryLimit: 99,
      value: 6070,
      name: "Uragaan Jaw+",
      description: "Very rare Uragaan material. Obtained from breaking its jaw. Unusual, used in select gear."
    },
    {
      id: 1144,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Uragaan Pallium",
      description: "Very rare Uragaan material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 1145,
      rarity: 11,
      carryLimit: 99,
      value: 9080,
      name: "Velkhana Hardclaw",
      description: "Very rare Velkhana material. Obtained by collecting rare drops. Sharp, used in many weapons."
    },
    {
      id: 1146,
      rarity: 11,
      carryLimit: 99,
      value: 8880,
      name: "Teostra Fellwing",
      description: "Very rare Teostra material. Obtained by breaking its wings. Used to craft gear."
    },
    {
      id: 1147,
      rarity: 9,
      carryLimit: 99,
      value: 0,
      name: "Celestial Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. Exchange it for very rare materials at the Melding Pot."
    },
    {
      id: 1148,
      rarity: 9,
      carryLimit: 99,
      value: 8000,
      name: "Giant Scale",
      description: "Acquired by using the Bandit Mantle. Its size consistently amazes collectors. (Trade-in Item)"
    },
    {
      id: 1149,
      rarity: 10,
      carryLimit: 99,
      value: 10000,
      name: "Magnificent Scale",
      description: "Acquired by using the Bandit Mantle. Makes any collector's mouth water. (Trade-in Item)"
    },
    {
      id: 1150,
      rarity: 6,
      carryLimit: 99,
      value: 900,
      name: "Dragonvein Coal Chunk",
      description: "Special coal that containes the earth's energy within. A deposit this size can fuel a base for days."
    },
    {
      id: 1151,
      rarity: 6,
      carryLimit: 99,
      value: 0,
      name: "Sublime First Wyverian Print",
      description: "A ticket with a handprint, used by the First Wyverians. Exchange it for useful items at the Melding Pot."
    },
    {
      id: 1152,
      rarity: 7,
      carryLimit: 99,
      value: 1200,
      name: "Giant Dragonvein Coal",
      description: "Special coal that contains the earth's energy within. Quite huge. It's the ideal fuel for easy living!"
    },
    {
      id: 1153,
      rarity: 11,
      carryLimit: 99,
      value: 8990,
      name: "Rajang Hardfang",
      description: "Very rare Rajang material. Mostly obtained by carving. Sharp, used in many weapons."
    },
    {
      id: 1154,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Black Eagle Blueprint",
      description: "A blueprint left by the Black Eagle, an elder dragon-obsessed hunter. Show it to the Smithy and see what happens!"
    },
    {
      id: 1155,
      rarity: 12,
      carryLimit: 99,
      value: 1500,
      name: "S.T.A.R.S. Badge",
      description: "A special badge for R.P.D.'s special forces division, S.T.A.R.S. Traded for special gear and decor."
    },
    {
      id: 1156,
      rarity: 9,
      carryLimit: 99,
      value: 500,
      name: "Wiggler Pot",
      description: "Lynians crafted this pot to house Wigglers, hence its name. Show it to the Smithy and see what happens!"
    },
    {
      id: 1157,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Banuk Warrior Symbol",
      description: "Given to warriors who can boast of braving the Frozen Wilds. Allows you to craft special equipment."
    },
    {
      id: 1158,
      rarity: 9,
      carryLimit: 99,
      value: 9060,
      name: "Stygian Zinogre Dragonhold",
      description: "Very rare Stygian Zinogre material. Mostly obtained by carving. Compatible with dragon element."
    },
    {
      id: 1159,
      rarity: 11,
      carryLimit: 99,
      value: 21000,
      name: "Stygian Zinogre Skymerald",
      description: "Very rare Stygian Zinogre material. Used to craft weapons powerful enough to take over the world."
    },
    {
      id: 1160,
      rarity: 9,
      carryLimit: 99,
      value: 8930,
      name: "Stygian Zinogre Hardclaw",
      description: "Very rare Stygian Zinogre material. Obtained by breaking its forelegs. Sharp, used in many weapons."
    },
    {
      id: 1161,
      rarity: 9,
      carryLimit: 99,
      value: 4330,
      name: "Stygian Zinogre Dragonlocks",
      description: "Very rare Stygian Zinogre material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 1162,
      rarity: 9,
      carryLimit: 99,
      value: 9190,
      name: "Stygian Zinogre Hardhorn",
      description: "Very rare Stygian Zinogre material. Obtained by breaking its head. Stout, used in many weapons."
    },
    {
      id: 1163,
      rarity: 9,
      carryLimit: 99,
      value: 6630,
      name: "Stygian Zinogre Cortex",
      description: "Very rare Stygian Zinogre material. Mostly obtained as a reward. Solid, used to craft gear."
    },
    {
      id: 1164,
      rarity: 10,
      carryLimit: 99,
      value: 5520,
      name: "Dracophage Bug",
      description: "Very rare Stygian Zinogre material. Can be gathered when it's toppled. Grants dragon element properties."
    },
    {
      id: 1165,
      rarity: 9,
      carryLimit: 99,
      value: 9450,
      name: "Stygian Zinogre Lash",
      description: "Very rare Stygian Zinogre material. Obtained by carving its severed tail. Stiff, used to craft gear."
    },
    {
      id: 1166,
      rarity: 11,
      carryLimit: 99,
      value: 11300,
      name: "Safi'jiiva Hardhorn",
      description: "Very rare Safi'jiiva material. Obtained by breaking its horns. Excessive growth has caused the horns to curl."
    },
    {
      id: 1167,
      rarity: 11,
      carryLimit: 99,
      value: 4900,
      name: "Safi'jiiva Shard",
      description: "Very rare Safi'jiiva material. Mostly obtained by carving. Its maturation has caused patterns to appear."
    },
    {
      id: 1168,
      rarity: 11,
      carryLimit: 99,
      value: 10300,
      name: "Safi'jiiva Fellwing",
      description: "Very rare Safi'jiiva material. Obtained by breaking its wings. Feel the oppressive power of the emperor."
    },
    {
      id: 1169,
      rarity: 12,
      carryLimit: 99,
      value: 24000,
      name: "Zionium Crystal",
      description: "Very rare Safi'jiiva material. The grand energy of the descended emperor lies within its core."
    },
    {
      id: 1170,
      rarity: 11,
      carryLimit: 99,
      value: 7600,
      name: "Safi'jiiva Cortex",
      description: "Very rare Safi'jiiva material. Mostly obtainend as a reward. Its maturatioon has created complex layers to appear."
    },
    {
      id: 1171,
      rarity: 11,
      carryLimit: 99,
      value: 10800,
      name: "Safi'jiiva Hardclaw",
      description: "Very rare Safi'jiiva material. Obtained by breaking its legs. Touch them to feel the torrent of the earth below."
    },
    {
      id: 1172,
      rarity: 11,
      carryLimit: 99,
      value: 8100,
      name: "Pulsing Dragonshell",
      description: "Very rare Safi'jiiva material. Eternal time, along with its inherent power has caused brilliant light to seep out."
    },
    {
      id: 1173,
      rarity: 11,
      carryLimit: 99,
      value: 11800,
      name: "Safi'jiiva Lash",
      description: "Very rare Safi'jiiva material. Obtained by carving its severed tail. A single swipe is said to cause cyclones."
    },
    {
      id: 1174,
      rarity: 11,
      carryLimit: 99,
      value: 9000,
      name: "Annihilating Temperhorn",
      description: "Very rare Tempered Ruiner Nergigante material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1175,
      rarity: 11,
      carryLimit: 99,
      value: 6500,
      name: "Tempered Dragonhold",
      description: "Very rare Tempered Stygian Zinogre material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1176,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Frozen Crystal",
      description: "Ore obtained in the Guiding Lands' tundra region. Subterranean energy has caused the ore to crystallize."
    },
    {
      id: 1177,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Rime Crystal",
      description: "Ore obtained in the Guiding Lands' tundra region. Greater underground energy has yielded larger crystals."
    },
    {
      id: 1178,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Daybreak Crystal",
      description: "Ore obtained in the Guiding Lands' tundra region. The energy it holds is palpable to the touch."
    },
    {
      id: 1179,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Rime Crystal",
      description: "Ore obtained in the Guiding Lands' tundra region. A massive crystal formed by miraculous earthen energy."
    },
    {
      id: 1180,
      rarity: 9,
      carryLimit: 99,
      value: 800,
      name: "Hoary Icebone",
      description: "Bone obtained in the Guiding Lands' tundra region. Subterranean energy has altered its material properties."
    },
    {
      id: 1181,
      rarity: 9,
      carryLimit: 99,
      value: 1200,
      name: "Tundra Icebone",
      description: "Bone obtained in the Guiding Lands' tundra region. Weathered as it is, its weight attests to its power."
    },
    {
      id: 1182,
      rarity: 10,
      carryLimit: 99,
      value: 1600,
      name: "Everfrost Icebone",
      description: "Bone obtained in the Guiding Lands' tundra region. Its curious form suggests untold potential."
    },
    {
      id: 1183,
      rarity: 11,
      carryLimit: 99,
      value: 2000,
      name: "Guiding Tundra Dragonbone",
      description: "Bone obtained in the Guiding Lands' tundra region. Traces of a bygone overlord, drawn by an unknown force."
    },
    {
      id: 1184,
      rarity: 11,
      carryLimit: 99,
      value: 4500,
      name: "Gushing Dragonhold",
      description: "Very rare Stygian Zinogre material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1185,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Tempered Icefang",
      description: "Very rare Temperede Barioth material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1186,
      rarity: 10,
      carryLimit: 99,
      value: 5500,
      name: "Tempered Frosthide",
      description: "Very rare Tempered Shrieking Legiana material. A product of the brutal power struggle in the Guilding Lands."
    },
    {
      id: 1187,
      rarity: 10,
      carryLimit: 99,
      value: 5000,
      name: "Coldblooded Icefang",
      description: "Very rare Tempered Barioth material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1188,
      rarity: 9,
      carryLimit: 99,
      value: 2500,
      name: "Enticing Viperthorn",
      description: "Very rare Viper Tobi-Kadachi material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1189,
      rarity: 9,
      carryLimit: 99,
      value: 4500,
      name: "Tempered Viperthorn",
      description: "Very rare Tempered Viper Tobi-Kadachi material. A product of the brutal power struggle in the Guiding Lands."
    },
    {
      id: 1190,
      rarity: 10,
      carryLimit: 99,
      value: 3500,
      name: "Crystal Frozenhide",
      description: "Very rare Shrieking Legiana material. The Guiding Lands' energy fortifies the monsters living there."
    },
    {
      id: 1191,
      rarity: 12,
      carryLimit: 99,
      value: 10000,
      name: "Vip Gratitude Ticket",
      description: "A rare ticket obtained during the Grand Appreciation Fest. Can be used to craft layered armor and charms."
    },
    {
      id: 1192,
      rarity: 12,
      carryLimit: 99,
      value: 10000,
      name: "VIP Joyful Ticket",
      description: "A rare ticket obtained during the Holiday Joy Fest. Can be used to craft layered armor and charms."
    },
    {
      id: 1193,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Unity Symbol",
      description: "Recent good tidings from friends the world over. They speak of unreal tales! Show it to the Smithy!"
    },
    {
      id: 1194,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Meaty Canteen Ticket",
      description: "The chef's cooked up a juicy and beefy meal, just for you! Show this order to the Smithy!"
    },
    {
      id: 1195,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Pickaxe Ticket",
      description: "Blueprints for hunters who need a handy companion when searching for rare ores. Show it to the Smithy!"
    },
    {
      id: 1196,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Fest Ticket",
      description: "A gold foil leaf ticket, used as decoration for the guild's festivals. Bring it to the Smithy and...!?"
    },
    {
      id: 1197,
      rarity: 11,
      carryLimit: 99,
      value: 1000,
      name: "Bluegleam",
      description: "Crystal that builds on the bodies of machines in the oldest ice. Trade it in for valuable equipment."
    },
    {
      id: 1198,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Wyverian Ticket",
      description: "Proof of your friendly relations with the Wyverians. A mysterious seal is printed on it. Show it to the Smithy!"
    },
    {
      id: 1199,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Sealed Dragon Cloth",
      description: "Proof of your friendly relations with the Wyverians. A mysterious seal is printed on it. Show it to the Smithy!"
    },
    {
      id: 1200,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Penguin Ticket",
      description: "A pair of Duffel Penguis adorn this ticket. Their expression is unreadable. Show it to the Smithy!"
    },
    {
      id: 1201,
      rarity: 10,
      carryLimit: 99,
      value: 800,
      name: "Buff Ticket",
      description: "The product of you defining those muscles and getting pumped up! Show it to the Smithy!"
    },
    {
      id: 1202,
      rarity: 12,
      carryLimit: 99,
      value: 1500,
      name: "Daemon Ticket",
      description: "Warriors are dawn on this ticket defending the Blue Light from the Daemons. Used for special equipment."
    },
    {
      id: 1203,
      rarity: 9,
      carryLimit: 99,
      value: 400,
      name: "Gratitude Ticket",
      description: "A ticket you receive for attending the Grand Appreciation Fest. Exchange it for special equipment or items."
    },
    {
      id: 1204,
      rarity: 9,
      carryLimit: 99,
      value: 400,
      name: "Joyful Ticket",
      description: "A ticket you receive for attending the Holiday Joy Fest. Exchange it for special equipment or items."
    },
    {
      id: 1205,
      rarity: 11,
      carryLimit: 99,
      value: 7800,
      name: "Rajang Apoplexy",
      description: "Very rare Furious Rajang material. A long, fine mane that is extremely robust."
    },
    {
      id: 1206,
      rarity: 11,
      carryLimit: 99,
      value: 10900,
      name: "Ghoulish Gold Gorer",
      description: "Very rare Furious Rajang material. A golden horn that, even when broken, is filled with the rage of a Rajang."
    },
    {
      id: 1207,
      rarity: 11,
      carryLimit: 99,
      value: 24000,
      name: "Rajang Heart",
      description: "Very rare furious Rajang material. Its flesh-searing rage unleashes massive power with every beat."
    },
    {
      id: 1208,
      rarity:11,
      carryLimit: 99,
      value: 7800,
      name: "Indestructible Ebonshell",
      description: "Very rare Raging Brachydios material. The sturdiest material known, capable of withstanding any blast."
    },
    {
      id: 1209,
      rarity: 11,
      carryLimit: 99,
      value: 10600,
      name: "Brach Warhead",
      description: "Very rare raging brachydios material. A skull that rage has turned into something far worse."
    },
    {
      id: 1210,
      rarity: 11,
      carryLimit: 99,
      value: 7900,
      name: "Brach Obliterator",
      description: "Very rare Raging Brachydios material. A violent core capable of instantly obliterating targets."
    },
    {
      id: 1211,
      rarity: 11,
      carryLimit: 99,
      value: 7900,
      name: "Flashpoint Slime",
      description: "Very rare Raging Brachydios material. Red Brachydios slime at its most volatile."
    },
    {
      id: 1212,
      rarity: 12,
      carryLimit: 99,
      value: 24000,
      name: "Immortal Reactor",
      description: "Very rare Raging Brachydios material. A rare organ used to render slime more volatile when in peril."
    },
    {
      id: 1213,
      rarity: 9,
      carryLimit: 99,
      value: 400,
      name: "Full Bloom Ticket",
      description: "A ticket you receive for attending the Full Bloom Fest. Can be exchanged for special equipment or items"
    },
    {
      id: 1214,
      rarity: 11,
      carryLimit: 99,
      value: 9000,
      name: "Kulve Taroth Golden Scale+",
      description: "Very rare Kulve Taroth material. Mostly obtained as a reward. Many have fallen trying to obtain just one of these."
    },
    {
      id: 1215,
      rarity: 11,
      carryLimit: 99,
      value: 12000,
      name: "Kulve Taroth Golden Shell+",
      description: "Very rare Kulve Taroth material. Mostly obtained as a reward. Its value is tied to its brilliant gold shine."
    },
    {
      id: 1216,
      rarity: 11,
      carryLimit: 99,
      value: 18000,
      name: "Kulve Taroth Golden Spiralhorn+",
      description: "Very rare Kulve Taroth material. Obtained by breaking its head. It glows despite its age and weight."
    },
    {
      id: 1217,
      rarity: 12,
      carryLimit: 99,
      value: 24000,
      name: "Golden Dragonsphire",
      description: "Very rare Kulve Taroth material. A gem rumored to stain the world gold once obtained."
    },
    {
      id: 1218,
      rarity: 11,
      carryLimit: 99,
      value: 3000,
      name: "Kulve Taroth Golden Nugget+",
      description: "Very rare Kulve Taroth material. Obtained from rare drops. Emits an exotic light to those that look at it."
    },
    {
      id: 1219,
      rarity: 11,
      carryLimit: 99,
      value: 15000,
      name: "Kulve Taroth Golden Tailshell+",
      description: "Very rare Kulve Taroth material. Obtained by breaking its tail. It shimmers a lustrous gold."
    },
    {
      id: 1220,
      rarity: 12,
      carryLimit: 99,
      value: 1600,
      name: "Namielle Ticket",
      description: "A ticket bearing Namielle, master of the torrent. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 1221,
      rarity: 11,
      carryLimit: 99,
      value: 8800,
      name: "Alatreon Pallium",
      description: "Very rare Alatreon material. Mostly obtained as a reward. The bearer receives heaven's love."
    },
    {
      id: 1222,
      rarity: 11,
      carryLimit: 99,
      value: 7800,
      name: "Alatreon Mantle",
      description: "Very rare Alatreon material. Mostly obtained by carving. Said to contain every element within."
    },
    {
      id: 1223,
      rarity: 11,
      carryLimit: 99,
      value: 11500,
      name: "Skyswayer",
      description: "Very rare Alatreon material. These convoluted horns are the finest specimen known to exist."
    },
    {
      id: 1224,
      rarity: 11,
      carryLimit: 99,
      value: 8000,
      name: "Alatreon Riptalon",
      description: "Very rare Alatreon material. Emits malevolence that makes one think of only evil intentions."
    },
    {
      id: 1225,
      rarity: 11,
      carryLimit: 99,
      value: 10700,
      name: "Alatreon Direwing",
      description: "Very rare Alatreon material. Rumored to be capable of ripping through space, time, and the world."
    },
    {
      id: 1226,
      rarity: 11,
      carryLimit: 99,
      value: 11000,
      name: "Alatreon Diretail",
      description: "Very rare Alatreon material. Obtained by carving its severed tail. Is this real, or merely a dream?"
    },
    {
      id: 1227,
      rarity: 12,
      carryLimit: 99,
      value: 24000,
      name: "Azure Dragonsphire",
      description: "Very rare Alatreon material. Obtaining this brilliant gem heralds the end of the world."
    },
    {
      id: 1228,
      rarity: 11,
      carryLimit: 99,
      value: 1400,
      name: "Frostfang Ticket",
      description: "Proof that you've hunted a tempered Frostfang Barioth. Bring it to the Smithy for a nice surprise!"
    },
    {
      id: 1229,
      rarity: 11,
      carryLimit: 99,
      value: 4900,
      name: "Silversnow Pelt",
      description: "Very rare Frostfang Barioth material. Mostly obtained as a reward. Broadly used for many purposes."
    },
    {
      id: 1230,
      rarity: 11,
      carryLimit: 99,
      value: 7600,
      name: "Bergcrusher Claw",
      description: "Very rare Frostfang Barioth material. Obtained as a reward and by carving. Sharp, used in many weapons."
    },
    {
      id: 1231,
      rarity: 11,
      carryLimit: 99,
      value: 10300,
      name: "Silverwhite Frostfang",
      description: "Very rare Frostfang Barioth material. Obtained by breaking its head. Sharp, used in many weapons."
    },
    {
      id: 1232,
      rarity: 9,
      carryLimit: 99,
      value: 400,
      name: "Sizzling Spice Ticket",
      description: "A ticket you receive for attending the Sizzling Spice Fest. Can be exchanged for special equipment or items."
    },
    {
      id: 1233,
      rarity: 11,
      carryLimit: 99,
      value: 84000,
      name: "Fatalis Cortex",
      description: "Very rare Fatalis material. Its multiple layers cannot be damaged by normal weaponry."
    },
    {
      id: 1234,
      rarity: 12,
      carryLimit: 99,
      value: 30000,
      name: "Fatalis Evil Eye",
      description: "Very rare Fatalis material. An unusual aura surrounds the eye of Fatalis. Perhaps it's possessed..."
    },
    {
      id: 1235,
      rarity: 11,
      carryLimit: 99,
      value: 12900,
      name: "Fatalis Hardhorn",
      description: "Very rare Fatalis material. A horn of immense strength. The horn's black glow gives off a strange attraction."
    },
    {
      id: 1236,
      rarity: 11,
      carryLimit: 99,
      value: 10300,
      name: "Fatalis Pectus",
      description: "Very rare Fatalis material. A truly fiendish carapace that sports the melted gear of its fallen foes."
    },
    {
      id: 1237,
      rarity: 11,
      carryLimit: 99,
      value: 11200,
      name: "Fatalis Fellwing",
      description: "Very rare Fatalis material. A wing hard as any metal, yet still very malleable, if the craftsman is skilled."
    },
    {
      id: 1238,
      rarity: 11,
      carryLimit: 99,
      value: 8400,
      name: "Fatalis Shard",
      description: "Very rare Fatalis material. Mostly obtained by carving. Its thick rings show its old age."
    },
    {
      id: 1239,
      rarity: 9,
      carryLimit: 99,
      value: 400,
      name: "Fun Fright Ticket",
      description: "A ticket you receive for attending the Fun Fright Fest. Exchange it for special equipment or items."
    },
    {
      id: 1240,
      rarity: 12,
      carryLimit: 99,
      value: 1600,
      name: "Velkhana Ticket",
      description: "A ticket depicting Velkhana, ruler of the frost. Redeem at the Smithy to make novel equipment."
    },
    {
      id: 1241,
      rarity: 12,
      carryLimit: 99,
      value: 1500,
      name: "Azure Large Era Gem",
      description: "Special material from USJ, to one who gives everyone a dream. The azure light blazes a path to a bright future."
    }
  ]

 module.exports = {
  itemData,
  createItems
 }