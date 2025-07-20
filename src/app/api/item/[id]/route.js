import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {

const p = await params;
const result = await dbConnect("jobs").findOne({_id: new ObjectId(p.id)})
 
  return Response.json(result)
}
export async function DELETE(req, {params}) {

const p = await params;
const result = await dbConnect("jobs").deleteOne({_id: new ObjectId(p.id)})
 
  return Response.json(result)
}
export async function PATCH(req, {params}) {
const postedData = await req.json()
const p = await params;
const filter = {_id: new ObjectId(p.id)}
const result = await dbConnect("jobs").updateOne(filter, {$set: {...postedData}}, {upsert: true})
 
  return Response.json(result)
}