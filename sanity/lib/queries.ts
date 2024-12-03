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

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
    title, 
    slug,
    views,
    _createdAt,
    description,
    category, 
    image, 
    pitch,
    author -> {
    _id, name, username, image,bio
  }
}`)