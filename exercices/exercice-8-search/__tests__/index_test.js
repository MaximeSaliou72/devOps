let Search = require("../src/search.js");

test("Aucun résultat", () => {
  const search = new Search();
  expect(search.searchCities("P")).toBe("aucun résultat");
});

test("Search Start", () => {
  const search = new Search();
  expect(search.searchCities("Va")).toEqual(["Valence", "Vancouver"]);
});

test("Search n'importe ou dans le nom", () => {
  const search = new Search();
  expect(search.searchCities("ape")).toEqual(["Budapest"]);
});


test("Renvoie toutes les villes", () => {
  const search = new Search();
  expect(search.searchCities("*")).toEqual(["Paris", "Budapest", "Skopje", "Rotterdam", "Valence",
  "Vancouver", "Amsterdam", "Vienne", "Sydney", "New York City",
  "Londres", "Bangkok", "Hong Kong", "Dubaï", "Rome", "Istanbul"]);
});