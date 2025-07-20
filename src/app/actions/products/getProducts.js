"use server"
import dbConnect from "@/lib/dbConnect"

export const getProducts = async () => {
        const data = await dbConnect("jobs").find({}).toArray()
        return data || []
}