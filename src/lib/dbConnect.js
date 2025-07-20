import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

export const collectionName = {
  ALL_DATA: "jobs",
};

const dbConnect = (collectionName) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db("careerCode").collection(collectionName);
};

export default dbConnect;
