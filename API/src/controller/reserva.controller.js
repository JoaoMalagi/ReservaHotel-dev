const reservaRepository = require('../models/Reserva')

exports.Listar = async(req, res) => {
    try {
        const retorno = await reservaRepository.findAll();
        res.status(200).send(retorno);
    } catch (error) {
        res.status(500).send({message:error});
    }
}
exports.Criar = async(req, res) => {
    const {nome} = req.body;
    try {   
        await reservaRepository.create({
            nome:nome
        })
        send.status(200).send("Reserva criaada com sucesso!");
    } catch (error) {
        send.status(500).send({message:error})
    }
}
