const {ailments, createOneAilment} = require('./ailments');
const {armorData,createArmor} = require('./armor');
const {charmData, createCharms} = require('./charms');
const {decoData,createDecos} = require('./decorations');
const {itemData,createItems} = require('./items');
const {locationData, createLocs} = require('./locations');
const {monsterData, createMonsters} = require('./monsters');
const {setData, createSets} = require('./sets');
const {skillData, createSkills} = require('./skills');
const { client } = require("./client");


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
      DROP TABLE IF exists skills;
      DROP TABLE IF EXISTS weapons;
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
      CREATE TABLE weapons(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        attack JSON NOT NULL,
        slots JSON[] NOT NULL,
        elements JSON[] NOT NULL,
        crafting JSON NOT NULL,
        assets JSON NOT NULL,
        durability JSON[],
        attributes JSON NOT NULL     
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