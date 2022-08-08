const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email:String,
    pass:String
});

mongoose.model.exports = mongoose.model('usuario',usuarioSchema);