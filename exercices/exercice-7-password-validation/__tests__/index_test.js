let Password = require("../src/password.js");

test("Le mot de passe doit comporter au moins 8 caractères", () => {
  const password = new Password();
  expect(password.passWodrLength("qwerty")).toBe(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
});

test("Mot de passe valide", () => {
  const password = new Password();
  expect(password.passWodrLength("qwertyuiop")).toBe("Mot de passe valide");
});
