const {client} = require("./config");

const dataUpdate = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const filter = { Name: "Rumon Ahmed" };
        const options = { upsert: true };

        const updateData = {
            $set: {Name : "Rumon Rahman"}
          };
      
        const result = await collectionName.updateOne(filter, updateData);
        console.log("Data Update Success");

    }catch(error){

    }finally{
        await client.close();
    }
}

dataUpdate();