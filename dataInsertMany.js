const {client} = require("./config");


const insertManyData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = [
            {Name: "Pavel ", Age: "25Years"},
            {Name: "Rafi", Age: "26Years"},
            {Name: "Arham", Age: "26Years"},
           
        ];

        const options = { ordered: true };

        const result = await collectionName.insertMany(patientData);
        console.log(`data collection success & _id: ${result.insertedCount}`);

    }catch(error){

    }finally{
        await client.close();
    }
}

insertManyData();