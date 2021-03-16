const featuredStores = [
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
  {
    title: "Moose-Owned Businesses",
    description: "",
    searchFor: { mooseOwned: "=true" },
  },
];

export default featuredStores;
