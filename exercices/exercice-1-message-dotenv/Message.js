require('dotenv').config();
module.exports = class Message {
    constructor() {
        this._lang = process.env.LANGUAGE;
        this._translates = {
            'fr': 'Bonjour tout le monde!',
            'en': 'Hello World!'
        };
        this._array = [];
    }

    get() {
        return this._translates[this._lang];
    }

    setLang(lang) {
        this._lang = lang;
    }

    getArray() {
        return this._array;
    }

    add(number) {
        this._array.push(number);
    }
}
