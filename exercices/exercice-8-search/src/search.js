module.exports = class Search {
  constructor() {
    this.cities = [
      "Paris", "Budapest", "Skopje", "Rotterdam", "Valence",
      "Vancouver", "Amsterdam", "Vienne", "Sydney", "New York City",
      "Londres", "Bangkok", "Hong Kong", "Dubaï", "Rome", "Istanbul"
    ];
  }

  searchCities(search) {

    if (search === "*") {
      return this.cities;
    }

    if (search.length < 2) {
      return "aucun résultat";
    }

    const foundCity = this.cities.filter(city =>
      city.toLowerCase().includes(search.toLowerCase())
    );

    return foundCity;
  }
};
