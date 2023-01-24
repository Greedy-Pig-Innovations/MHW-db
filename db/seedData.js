const {ailments, createOneAilment} = require('./ailments');
const { client } = require("./client");
const {test} = require("./test")


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

const createArmors = async() => {
  console.log("Starting to create armors")

  try {
    
    await Promise.all(test.map())

  } catch (error) {
    console.error("Error armors")    
  }
}


/////////////////////////// INITIALIZE FUNCTIONS WITH POSTGRESQL /////////////////////////////  
const dropTables = async () => {
    try {
      console.log("Starting to drop tables...");

      await client.query(`
      DROP TABLE IF EXISTS ailments;
      DROP TABLE IF EXISTS armor;
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
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        recovery JSON NOT NULL,
        protection JSON NOT NULL
      );
      CREATE TABLE armor(
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        rank VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        defence JSON NOT NULL,
        resistances JSON NOT NULL,
        slots JSON[] NOT NULL,
        skills JSON[] NOT NULL,
        set JSON NOT NULL,
        assets JSON NOT NULL,
        crafting JSON[] NOT NULL,
        attributes JSON
      );
      CREATE TABLE sets (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rank VARCHAR(255) NOT NULL,
        pieces JSON[] NOT NULL,
        bonus JSON NOT NULL
      );
      CREATE TABLE charms(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        ranks JSON[] NOT NULL
      );
      CREATE TABLE decorations(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rarity INTEGER NOT NULL,
        slot INTEGER NOT NULL,
        skills JSON[] NOT NULL
      );
      CREATE TABLE events(
        id SERIAL PRIMARY KEY,
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
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        rarity INTEGER NOT NULL,
        "carryLimit" INTEGER NOT NULL,
        value INTEGER NOT NULL
      );
      CREATE TABLE locations(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        zones INTEGER NOT NULL,
        camps JSON[] NOT NULL
      );
      CREATE TABLE monsters(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        species VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        elements TEXT[] NOT NULL,
        ailments JSON[] NOT NULL,
        locations JSON[] NOT NULL,
        resistances JSON[] NOT NULL,
        weakness JSON[] NOT NULL,
        rewards JSON[] NOT NULL,
        assets JSON NOT NULL
      );
      CREATE TABLE skills(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        ranks JSON[] NOT NULL
      );
      CREATE TABLE weapons(
        id SERIAL PRIMARY KEY,
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