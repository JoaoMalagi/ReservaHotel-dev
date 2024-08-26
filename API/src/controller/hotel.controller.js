const hotelRepository = require('../models/Hotel');

exports.Criar = async (req, res) => {
    const {nome} = req.body;
    try{
        await hotelRepository.create({
            nome:nome
        });
        res.status(200).send("Hotel criado com sucesso")
    }
    catch(error){
        res.status(500).send({message:error})

    }
}
exports.Listar = async (req, res) => {
    try {
        const retorno = await hotelRepository.findAll()
        res.status(200).send(retorno);
    } catch (error) {
        res.status(500).send({message: error})
    }
}