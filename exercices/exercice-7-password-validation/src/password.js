module.exports = class Password {
  constructor() {}

  
  passWodrLength(password) {
    if (password.length < 8) {
      return "Le mot de passe doit comporter au moins 8 caractères";
    }

    // Supprime tous les caractères qui ne sont pas des chiffres
    const numberCount = password.replace(/[^0-9]/g, "").length;
    if (numberCount < 2) {
      return "Le mot de passe doit contenir au moins 2 chiffres";
    }
  
    return "Mot de passe valide";
  }

};
