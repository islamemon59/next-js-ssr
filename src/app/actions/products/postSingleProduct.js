"use server";

import dbConnect, { collectionName } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleProduct = async (postData) => {
  const result = await dbConnect(collectionName.ALL_DATA).insertOne(postData);
  revalidatePath("/products");
  return result || null
};
