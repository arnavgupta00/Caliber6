import {createClient} from "next-sanity"
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: "juk3mbjd",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source:any) {
  return builder.image(source);
}