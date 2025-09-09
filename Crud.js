const {MongoClient }= require("mongodb");
const URI="mongodb+srv://hema:Hema300323@namastenodejscourse.khfnerj.mongodb.net/";
const client=new MongoClient(URI);
const dbname="CRUD_OP";
async function crudOP(){
    await client.connect();
    console.log("connected to CRUD DB successfully");
    const db=client.db(dbname);
    const collection=db.collection("Friends");
    console.log(collection);
    // //To insert a single document
    // const insertedOne=await collection.insertOne({name:"Ruchi",surName:"P",city:"Giddalur"});
    // console.log("document inserted" , insertedOne);
    // //To insert multiple documents
    // const insertedMany =await collection.insertMany([
    //     {name:"Rachana",surName:"Vankala",city:"Srikakulam"},
    //     {name:"Pooja",surName:"T",city:"Mysore"},
    //     {name:"Priya",surName:"ch",city:"Giddalur"}
    // ]);
    // console.log("multiple documents inserted" , insertedMany);

    // //to Find Documents
    // const findDocuments=await collection.find({}).toArray();
    // console.log("Found documents =>", findDocuments);
    // return "done";

    //to Find documents with a condition
    const FindDocumentsOfGiddalurCity = await collection.find({city:"Giddalur"}).toArray();
    console.log("Found documents of Giddalur city =>", FindDocumentsOfGiddalurCity);
}

crudOP().then((res)=>{
    return res;
}).catch((err)=>{
    return err;
}).finally(()=>{
    client.close();
})