const { client } = require("./client");

const ailments = [
    {
        name: "a1",
        description:"a1-des",
        recovery: {a1_rec:0},
        protection: {a1_prot:0}
    },
    {
        name: "a2",
        description:"a2-des",
        recovery: {a1_rec:0},
        protection: {a1_prot:0}
    },
    {
        name: "a3",
        description:"a3-des",
        recovery: {a1_rec:0},
        protection: {a1_prot:0}
    },
    {
        name: "a4",
        description:"a4-des",
        recovery: {a1_rec:0},
        protection: {a1_prot:0}
    },
];

// CREATE TABLE ailments(
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         description TEXT NOT NULL,
//         recovery JSON NOT NULL,
//         protection JSON NOT NULL
//       );
const createOneAilment = async({name, description, recovery, protection})=>{
    try{
        const {rows: [ailment]} = await client.query(`
            INSERT INTO ailments(name, description, recovery, protection)
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `, [name, description, recovery, protection]);
        

        //output
        return ailment;
    }catch(err){
        console.error(err);
    }
}
module.exports = {
    ailments,
    createOneAilment
}