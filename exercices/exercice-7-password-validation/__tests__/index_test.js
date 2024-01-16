let Password = require("../src/password.js");

test("Le mot de passe doit comporter au moins 8 caractères", () => {
  const password = new Password();
  expect(password.passWodrLength("Qwt!22")).toBe(
    "Le mot de passe doit comporter au moins 8 caractères"
  );
});

test("Le mot de passe doit contenir au moins 2 chiffres", () => {
    const password = new Password();
    expect(password.passWodrLength("Qwertyuiop2@")).toBe("Le mot de passe doit contenir au moins 2 chiffres");
});

test("Doubel Erreur", () => {
    const password = new Password();
    expect(password.passWodrLength("Qwer2@")).toBe("Le mot de passe doit comporter au moins 8 caractères. Le mot de passe doit contenir au moins 2 chiffres");
});

test("Majuscule", () => {
    const password = new Password();
    expect(password.passWodrLength("qwerdsadsa22@")).toBe("Le mot de passe doit contenir au moins une lettre majuscule");
});


test("Caractères spéciaux", () => {
  const password = new Password();
  expect(password.passWodrLength("Qwerdsghh22")).toBe("le mot de passe doit contenir au moins un caractère spécial");
});

test("Mot de passe valide", () => {
  const password = new Password();
  expect(password.passWodrLength("Qwertyuiop22!@")).toBe("Mot de passe valide");
});
