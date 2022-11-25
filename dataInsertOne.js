const {client} = require("./config");


const insertData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const patientData = {Name: " Mahbub Faruque", Age: "25Years"};

        const result = await collectionName.insertOne(patientData);
        console.log(`data collection success & _id: ${result.insertedId}`);

    }catch(error){

    }finally{
        await client.close();
    }
}

insertData();