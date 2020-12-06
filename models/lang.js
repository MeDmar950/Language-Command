const { Schema, model } = require('mongoose');

const NewLang = new Schema({
    guildID: {
        type: String
    },
    lang: {
        type: String
    },
});

module.exports = model('Language', NewLang)