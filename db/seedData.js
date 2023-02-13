const {ailments, createOneAilment} = require('./ailments');
const {armorData,createArmor} = require('./armor');
const {charmData, createCharms} = require('./charms');
const {decoData,createDecos} = require('./decorations');
const {itemData,createItems} = require('./items');
const {locationData, createLocs} = require('./locations');
const {monsterData, createMonsters} = require('./monsters');
const {setData, createSets} = require('./sets');
const {skillData, createSkills} = require('./skills');
const {bowData, createBows, 
  chargeBladeData, createCB, 
  dualBladesData, createDB, 
  glaiveData, createGlaive, 
  greatSwordData, createGS,
  gunlanceData, createGL,
  hammerData, createHammer,
  hbgData, createHbg,
  huntingHornData, createHorn, 
  lanceData, createLance,
  lbgData, createLbg,
  longSwordData, createLs,
  snsData, createSns,
  switchAxeData, createSwaxe
  } = require('./weapons')
const { client } = require("./client");

const createAllWeapons = async () => {
  console.log('Creating Weapons')

  try {
    console.log('Bows start')
    await Promise.all(bowData.map(createBows));
    console.log('Bows done')

    console.log('Charge Blade start')
    await Promise.all(chargeBladeData.map(createCB));
    console.log('Charge Blade done')

    console.log('Dual Blades start')
    await Promise.all(dualBladesData.map(createDB));
    console.log('Dual Blades done')

    console.log('Glaive start')
    await Promise.all(glaiveData.map(createGlaive));
    console.log('Glaive done')

    console.log('Great Sword start')
    await Promise.all(greatSwordData.map(createGS));
    console.log('Great Sword done')

    console.log('Gunlance start')
    await Promise.all(gunlanceData.map(createGL));
    console.log('Gunlance done')

    console.log('Hammer start')
    await Promise.all(hammerData.map(createHammer));
    console.log('Hammer done')

    console.log('Heavy bow gun start')
    await Promise.all(hbgData.map(createHbg));
    console.log(' done')

    console.log('Hunting horn start')
    await Promise.all(huntingHornData.map(createHorn));
    console.log('Hunting horn done')

    console.log('Lance start')
    await Promise.all(lanceData.map(createLance));
    console.log('Lance done')

    console.log('Light bow gun start')
    await Promise.all(lbgData.map(createLbg));
    console.log('Light bow gun done')

    console.log('Long Sword start')
    await Promise.all(longSwordData.map(createLs));
    console.log('Long Sword done')

    console.log('Sword and Shield start')
    await Promise.all(snsData.map(createSns));
    console.log('Sword and Shield done')

    console.log('Switch Axe start')
    await Promise.all(switchAxeData.map(createSwaxe));
    console.log('Switch Axe done')

    
  } catch (error) {
    throw error
  }
}


const createAilments = async()=>{
    console.log('\n\t CREATING ailments');
    try{
        console.log('\t trying...');

        await Promise.all(ailments.map(createOneAilment));


        console.log('\t ailments CREATED!\n');
    }catch(err){
        console.error(err);
    }
}

const createAllArmors = async() => {
  console.log("Starting to create armors")

  try {
    
    await Promise.all(armorData.map(createArmor))

    console.log("Finished creating armors")
  } catch (error) {
    console.error("Error armors")    
  }
}


const createAllCharms = async() => {
  console.log("Starting to create charms")

  try {
    
    await Promise.all(charmData.map(createCharms))

    console.log("Finished creating charms")
  } catch (error) {
    console.error("Error charms")    
  }
}

const createAllDecos = async() => {
  console.log("Starting to create decos")

  try {
    
    await Promise.all(decoData.map(createDecos))

    console.log("Finished creating decos")
  } catch (error) {
    console.error("Error decos")    
  }
}

const createAllItems = async() => {
  console.log("Starting to create items")

  try {
    
    await Promise.all(itemData.map(createItems))

    console.log("Finished creating items")
  } catch (error) {
    console.error("Error items")    
  }
}


const createAllLocs = async() => {
  console.log("Starting to create Locs")

  try {
    
    await Promise.all(locationData.map(createLocs))

    console.log("Finished creating Locs")
  } catch (error) {
    console.error("Error Locs")    
  }
}

const createAllMonsters = async() => {
  console.log("Starting to create Monsters")

  try {
    
    await Promise.all(monsterData.map(createMonsters))

    console.log("Finished creating Monsters")
  } catch (error) {
    console.error("Error Monsters")    
  }
}

const createAllSets = async() => {
  console.log("Starting to create Sets")

  try {
    
    await Promise.all(setData.map(createSets))

    console.log("Finished creating Sets")
  } catch (error) {
    console.error("Error Sets")    
  }
}

const createAllSkills = async() => {
  console.log("Starting to create Skill")

  try {
    
    await Promise.all(skillData.map(createSkills))

    console.log("Finished creating skills")
  } catch (error) {
    console.error("Error skills")    
  }
}

/////////////////////////// INITIALIZE FUNCTIONS WITH POSTGRESQL /////////////////////////////  
const dropTables = async () => {
    try {
      console.log("Starting to drop tables...");

      await client.query(`
      DROP TABLE IF EXISTS ailments;
      DROP TABLE IF EXISTS armors;
      DROP TABLE IF EXISTS sets;
      DROP TABLE IF EXISTS charms;
      DROP TABLE IF EXISTS decorations;
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS items;
      DROP TABLE IF EXISTS locations;
      DROP TABLE IF EXISTS monsters;
      DROP TABLE IF EXISTS skills;
      DROP TABLE IF EXISTS bow;
      DROP TABLE IF EXISTS cb;
      DROP TABLE IF EXISTS db;
      DROP TABLE IF EXISTS glaive;
      DROP TABLE IF EXISTS gs;
      DROP TABLE IF EXISTS gl;
      DROP TABLE IF EXISTS hammer;
      DROP TABLE IF EXISTS hbg;
      DROP TABLE IF EXISTS horn;
      DROP TABLE IF EXISTS lance;
      DROP TABLE IF EXISTS lbg;
      DROP TABLE IF EXISTS ls;
      DROP TABLE IF EXISTS sns;
      DROP TABLE IF EXISTS swaxe;

      `);
  
      console.log("Finished dropping tables!");
    } catch (error) {
      console.error("Error dropping tables!");
      throw error;
    }
  };
  /////armor id leaves off at 155-1
  const createTables = async () => {
    try {
      console.log("Starting to build tables...");

      await client.query(`
      CREATE TABLE ailments(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        recovery JSON NOT NULL,
        protection JSON NOT NULL
      );
      CREATE TABLE armors(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        rank VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        defense JSON NOT NULL,
        resistances JSON NOT NULL,
        slots JSON[] NOT NULL,
        skills JSON[],
        "armorSet" JSON,
        assets JSON NOT NULL,
        crafting JSON NOT NULL,
        attributes JSON
      );
      CREATE TABLE sets(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rank VARCHAR(255) NOT NULL,
        pieces JSON[] NOT NULL,
        bonus JSON 
      );
      CREATE TABLE charms(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        ranks JSON[] NOT NULL
      );
      CREATE TABLE decorations(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        slot INTEGER NOT NULL,
        skills JSON[] NOT NULL
      );
      CREATE TABLE events(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        platform VARCHAR(255) NOT NULL,
        exclusive VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        expansion BOOLEAN default false,
        description TEXT NOT NULL,
        requires TEXT NOT NULL,
        rank INTEGER NOT NULL,
        conditions TEXT NOT NULL,
        location JSON NOT NULL
      );
      CREATE TABLE items(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        rarity INTEGER NOT NULL,
        "carryLimit" INTEGER NOT NULL,
        value INTEGER NOT NULL
      );
      CREATE TABLE locations(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        "zoneCount" INTEGER NOT NULL,
        camps JSON[] NOT NULL
      );
      CREATE TABLE monsters(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        species VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        elements TEXT[] NOT NULL,
        ailments JSON[] NOT NULL,
        locations JSON[] NOT NULL,
        resistances JSON[] NOT NULL,
        weaknesses JSON[] NOT NULL,
        rewards JSON[] NOT NULL,
        assets JSON 
      );
      CREATE TABLE skills(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        ranks JSON[] NOT NULL
      );
      CREATE TABLE bow(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        coatings TEXT[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE cb(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        phial JSON NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE db(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE glaive(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        "boostType" TEXT NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE gs(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE gl(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        shelling JSON NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE hammer(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE hbg(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        "specialAmmo" TEXT,
        deviation TEXT, 
        ammo JSON[] NOT NULL, 
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE horn(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE lance(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE lbg(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        "specialAmmo" TEXT,
        deviation TEXT, 
        ammo JSON[] NOT NULL, 
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE ls(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE sns(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE swaxe(
        id INTEGER PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        elderseal TEXT,
        attributes JSON NOT NULL,
        "damageType" TEXT,     
        name VARCHAR(255) NOT NULL,
        durability JSON[] NOT NULL,
        phial JSON NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL
      );

      `);

  
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  };
  
  const rebuildDB = async () => {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createAilments();
      await createAllArmors();
      await createAllCharms();
      await createAllDecos();
      await createAllItems();
      await createAllLocs();
      await createAllMonsters();
      await createAllSets();
      await createAllSkills();
      await createAllWeapons();

    } catch (error) {
      console.error("Error rebuilding database!");
      throw error;
    }
  };
  
  const testDB = async () => {
    try {
      console.log("Starting to test database...");
  
      console.log("Success!");
    } catch (error) {
      console.error("Error testing database");
      throw error;
    }
  };
  
  module.exports = {
    rebuildDB,
    testDB,
    dropTables,
    createTables,
  };
