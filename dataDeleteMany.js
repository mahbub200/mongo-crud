const {client} = require("./config");


const dataDelete = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        
        const deleteDataAll = {};

      
        // const deleteDataCondition = {Age : "25Yrs"};
      
        const result = await collectionName.deleteMany(deleteDataAll);
        console.log("Successfully deleted document.");


    }catch(error){

    }finally{
        await client.close();
    }
}

dataDelete();