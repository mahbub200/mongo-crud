const {client} = require("./config");


const findData = async()=>{
    try{

        const databaseName = await client.db("hospital");
        const collectionName = databaseName.collection("patients");
        const findDataWithCondition = {Age : "26Yrs"};


        const options = {
            
            sort: { "imdb.rating": -1 },
          
            projection: { _id: 0, Name: 1, Age: 1},
          };

        const result = await collectionName.findOne(findDataWithCondition, options);
        console.log(result);

    }catch(error){

    }finally{
        await client.close();
    }
}

findData();