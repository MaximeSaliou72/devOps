module.exports = class Password {
  constructor() {}

  
  passWodrLength(password) {
    if (password.length < 8) {
      return "Le mot de passe doit comporter au moins 8 caractères";
    }
    return "Mot de passe valide";
  }

};
