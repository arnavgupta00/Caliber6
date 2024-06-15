"use server";
import { sanityClient } from "./configSanity";

export async function getBlogs() {
  const query = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(_createdAt asc)`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getBlogByID(id: string) {
  const query = `*[_type == "blogPost" && _id == "${id}"]`;
  const data = await sanityClient.fetch(query);
  console.log(data);
  return data;
}

export async function getClientReviews() {
  const query = `*[_type == "clientReviews" && !(_id in path("drafts.**"))] | order(_createdAt asc)`;
  const data = await sanityClient.fetch(query);
  return data;
}


export async function getServicesNameAndShortDescription() {
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt asc) {serviceName, shortDescription , serviceImage , _id}`;
  const data = await sanityClient.fetch(query);
  return data;

}
export async function getServicesNameAndImage() {
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt asc) {serviceName, serviceImage , _id}`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getServiceByID(id: string) {
  const query = `*[_type == "service" && _id == "${id}" && !(_id in path("drafts.**"))]`;
  const data = await sanityClient.fetch(query);
  return data.length > 0 ? data[0] : null;
}


export async function getServicesNameAndId(){
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt asc) {serviceName, _id}`;
  const data = await sanityClient.fetch(query);
  return data;
}