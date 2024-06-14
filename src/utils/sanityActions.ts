"use server";
import { sanityClient } from "./configSanity";

export async function getBlogs() {
    const query = `*[ _type == "blogPost"] | order(_createdAt asc)`;
    const data = await sanityClient.fetch(query);
  
    return data;
  }
  

export async function getBlogByID(Id: string) {
    const query = `*[ _type == "blogPost" && _id == "${Id}"]`;
    const data = await sanityClient.fetch(query);
  
    return data;
}