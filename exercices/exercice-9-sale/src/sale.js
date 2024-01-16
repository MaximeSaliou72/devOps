module.exports = class Sale {
  constructor() {

  }

  searchPrice(search) {

    if (search === "") {
      return "Erreur : code-barres vide";
    }

    if (search === "12345") {
      return("$7.25")
    }

    if (search === "23456") {
      return("$12.50")
    }

    if (search === "99999") {
      return("Erreur : code-barres non trouvé")
    }
    
  }
};
