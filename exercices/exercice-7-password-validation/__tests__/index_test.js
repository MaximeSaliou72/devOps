let Password = require("../src/password.js");

test("Le mot de passe doit comporter au moins 8 caractères", () => {
  const password = new Password();
  expect(password.passWodrLength("qwerty")).toBe(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
});

test("Le mot de passe doit contenir au moins 2 chiffres", () => {
    const password = new Password();
    expect(password.passWodrLength("qwertyuiop2")).toBe("Le mot de passe doit contenir au moins 2 chiffres");
});

test("Mot de passe valide", () => {
  const password = new Password();
  expect(password.passWodrLength("qwertyuiop22")).toBe("Mot de passe valide");
});
