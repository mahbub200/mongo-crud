const {client} = require("./config");


const dataUpdate = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        

     
        const filterAge = { Age: "25Yrs" };
        const options = { upsert: true };

        const updateData = {
            $set: {Time : "5.00PM"}
          };
      
        const result = await collectionName.updateMany(filterAge, updateData);
        console.log("Data Update Success");

    }catch(error){

    }finally{
        await client.close();
    }
}

dataUpdate();