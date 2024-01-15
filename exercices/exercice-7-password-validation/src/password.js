module.exports = class Password {
  constructor() {}

  passWodrLength(password) {
    let errors = [];

    if (password.length < 8) {
      errors.push("Le mot de passe doit comporter au moins 8 caractères");
    }

    // Supprime tous les caractères qui ne sont pas des chiffres
    const numberCount = password.replace(/[^0-9]/g, "").length;
    if (numberCount < 2) {
      errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    }

    if (errors.length > 0) {
      return errors.join(". ");
    }

    return "Mot de passe valide";
  }
};
