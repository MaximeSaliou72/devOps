const Message = require("../../exercices/exercice-1-message-dotenv/Message.js");


test('nous renvoie le texte', () => {
    console.log(new Message().get());
})