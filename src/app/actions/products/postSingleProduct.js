"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleProduct = async (postData) => {
  const result = await dbConnect("jobs").insertOne(postData);
  revalidatePath("/products");
  return result || null
};
