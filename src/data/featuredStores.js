const featuredStores = [
  {
    title: "Black-Owned Businesses",
    description: "",
    searchFor: { blackOwned: "=true" },
  },
  {
    title: "National Favorites",
    description: "",
    searchFor: { nationalFavorite: "=true" },
  },
  {
    title: "Local Favorites",
    description: "",
    searchFor: { localFavorite: "=true" },
  },
  {
    title: "Fastest Near You",
    description: "",
    searchFor: {},
  },
  {
    title: "More Than Three Stars",
    description: "",
    searchFor: { stars: "[$gt]=3" },
  },
];

export default featuredStores;
