"use server"
import dbConnect, { collectionName } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const result = await dbConnect(collectionName.ALL_DATA).insertOne(payload)
    return result
}