import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mirrrofilms.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.mirrrofilms.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.mirrrofilms.com/films",
      lastModified: new Date(),
    },
    {
      url: "https://www.mirrrofilms.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://www.mirrrofilms.com/news",
      lastModified: new Date(),
    },
    {
      url: "https://www.mirrrofilms.com/contact",
      lastModified: new Date(),
    },
  ];
}
