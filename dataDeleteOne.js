const {client} = require("./config");


const dataDelete = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");

        const deleteData = {Age : "26Yrs"};
      
        const result = await collectionName.deleteOne(deleteData);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched . Deleted 0 documents.");
          };

    }catch(error){

    }finally{
        await client.close();
    }
}

dataDelete();