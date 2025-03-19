const mongoose = require('mongoose');   

const connectToDatabaase = async () => {
    
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.qedke.mongodb.net/?retryWrites=true&w=majority&appName=CursoNode`);
            return console.log('Conectado ao banco de dados!');
    } catch(error) {
        return console.log('Erro ao conectar ao banco de dados', error);
    }

}

module.exports = connectToDatabaase;