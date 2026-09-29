const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://priyanshis_db_user:IBDcDXPfXgRGOGuU@nodejslearning.wd7d9vs.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

//   const data = {
//     firstname: "Piyu",
//     lastname: "Patel",
//     city: "Ahmedabad",
//     phoneNumber: "1234567890",
//   };

//   const insertResult = await collection.insertMany([data]);
//   console.log("Inserted documents =>", insertResult);

  const filteredDocs = await collection.find({ city: "Ahmedabad" }).toArray();
  console.log(
    "Found documents filtered by { city: 'Ahmedabad' } =>",
    filteredDocs,
  );

  const findResult = await collection.find({ lastname: "Savalia" }).toArray();
  console.log("Found documents =>", findResult);

//   const deleteResult = await collection.deleteMany({
//     city: "Ahmedabad",
//   });
//   console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
