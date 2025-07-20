"use server"
import dbConnect from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const result = await dbConnect("jobs").insertOne(payload)
    return result
}