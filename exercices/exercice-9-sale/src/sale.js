module.exports = class Sale {
  constructor() {
    this.prices = {
      "12345": 7.25,
      "23456": 12.50
    }
  }

  searchPrice(search) {

    if (search === "") {
      return "Erreur : code-barres vide";
    }

    const price = this.prices[search];

    if (price !== undefined) {
      return `$${price.toFixed(2)}`;
    }

    if (search === "99999") {
      return("Erreur : code-barres non trouvé")
    }
    
  }
};
