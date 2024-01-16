let Sale = require("../src/sale.js");

test("Retourne $7.25", () => {
  const sale = new Sale();
  expect(sale.searchPrice("12345")).toBe("$7.25");
});

test("Retourne $12.50", () => {
  const sale = new Sale();
  expect(sale.searchPrice("23456")).toBe("$12.50");
});

test("Retourne erreur", () => {
  const sale = new Sale();
  expect(sale.searchPrice("99999")).toBe("Erreur : code-barres non trouvé");
});

test("Code barre vide", () => {
  const sale = new Sale();
  expect(sale.searchPrice("")).toBe("Erreur : code-barres vide");
});
