const { client } = require("./client");


/////////////////////////// INITIALIZE FUNCTIONS WITH POSTGRESQL /////////////////////////////  
const dropTables = async () => {
    try {
      console.log("Starting to drop tables...");
  
      console.log("Finished dropping tables!");
    } catch (error) {
      console.error("Error dropping tables!");
      throw error;
    }
  };
  
  const createTables = async () => {
    try {
      console.log("Starting to build tables...");
  
      console.log("Finished building tables!");
    } catch (error) {
      console.error("Error building tables!");
      throw error;
    }
  };
  
  const rebuildDB = async () => {
    try {
      client.connect();
  
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