//creating mongo DB  database
//importing MongoClient form Mongodb package
const {MongoClient}=require("mongodb");
//connection url
const URI="mongodb+srv://yannamhema30:pTmfjgdVwfM0Ahid@namastenodejscourse.khfnerj.mongodb.net/";
//creating a new ckient
const client = new MongoClient(URI);
//creating a database name
const dbName="NamasteNodeJS";

//function to make a connection to database
 async function connection(){
    //conect will help to connect to the server
    await client.connect();
    console.log("connected to the database sucessfully");
    const db= client.db(dbName);
    const collection=db.collection("Hema");
    console.log(collection);

    //insert data into the collection
//  const insertedDocuments= await collection.insertMany([
//     {sur_name:"yannam" , name:"lahari"}
//  ]);
//  console.log("documents inserted" , insertedDocuments);

 const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

    return "yeah! done";
 }

 
 connection().then((res)=>{
    return res;
 }).catch((err)=>{
    console.log(err);
 }).finally(()=>{
    client.close();
 })