"use server"
import dbConnect, { collectionName } from "@/lib/dbConnect"

export const getProducts = async () => {
        const data = await dbConnect(collectionName.ALL_DATA).find({}).toArray()
        return data || []
}