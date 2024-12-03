import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author -> name match $search ] | order(_createdAt desc) {
  _id, 
  title, 
  views, 
  slug,
  _createdAt,
  description,
  category, 
  image, 
  author -> {
    _id, name, image,bio
  }
}`)