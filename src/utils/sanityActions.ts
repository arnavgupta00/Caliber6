"use server";
import { sanityClient } from "./configSanity";

export async function getBlogs() {
  const query = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(_createdAt desc)`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getBlogByID(id: string) {
  const query = `*[_type == "blogPost" && _id == "${id}"]`;
  const data = await sanityClient.fetch(query);
  //console.log(data);
  return data;
}

export async function getClientReviews() {
  const query = `*[_type == "clientReviews" && !(_id in path("drafts.**"))] | order(_createdAt desc)`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getServicesNameAndShortDescription() {
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt desc) {serviceName, shortDescription , serviceImage , _id}[0...3]`;
  const data = await sanityClient.fetch(query);
  return data;
}
export async function getServicesNameAndImage() {
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt desc) {serviceName, serviceImage , _id}`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getServiceByID(id: string) {
  const query = `*[_type == "service" && _id == "${id}" && !(_id in path("drafts.**"))]`;
  const data = await sanityClient.fetch(query);
  return data.length > 0 ? data[0] : null;
}

export async function getServicesNameAndId() {
  const query = `*[_type == "service" && !(_id in path("drafts.**"))] | order(_createdAt desc) {serviceName, _id}`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getCareers() {
  const query = `*[_type == "career" && !(_id in path("drafts.**"))] | order(_createdAt desc) `;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getJobs() {
  const query = `*[_type == "job" && !(_id in path("drafts.**"))] | order(_createdAt desc) `;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getIndustrialBlogs() {
  const query = `*[_type == "industrialBlogPost" && !(_id in path("drafts.**"))] | order(_createdAt desc) `;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getIndustrialBlogByID(id: string) {
  const query = `*[_type == "industrialBlogPost" && _id == "${id}"]`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function getIndustrialBlogCategories() {
  const query = `*[_type == "industrialBlogPost"] | order(_createdAt desc) {category, _id}`;
  const data = await sanityClient.fetch(query);

  const categories = data.map((item: any) => {
    return {
      category: item.category,
      href: item._id,
    };
  });

  const uniqueCategories = Array.from(
    new Set(categories.map((a: any) => a.category))
  );

  return uniqueCategories;
}

export async function getIndustrialBlogsByCategory(category: string) {
  const query = `*[_type == "industrialBlogPost" && category == "${category}"] | order(_createdAt desc) `;
  const data = await sanityClient.fetch(query);
  return data;
}