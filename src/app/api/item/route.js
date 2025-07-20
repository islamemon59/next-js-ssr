import dbConnect, { collectionName } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect(collectionName.ALL_DATA).find({}).toArray();

  return Response.json(data);
}
export async function POST(req) {
  const postData = await req.json();
  const result = await dbConnect(collectionName.ALL_DATA).insertOne(postData);

  revalidatePath("/products");
  return Response.json(result);
}
