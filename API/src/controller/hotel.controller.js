const { where } = require('sequelize');
const hotelRepository = require('../models/Hotel');

exports.Criar = async (req, res) => {
    const {nome, qtdeVagas, precoVaga, descricaoVaga} = req.body;
    try{
        await hotelRepository.create({
            nome:nome,
            qtdeVagas:qtdeVagas,
            precoVaga:precoVaga,
            descricaoVaga:descricaoVaga
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
        res.status(500).send({message: error});
    }
}
exports.ListarById = async (req, res) =>{
    const { id } = req.params; 
    
    try {
        const retorno = await hotelRepository.findOne({
            where : {id : id}
        });
        res.status(200).send(retorno);
    } catch (error) {
        res.status(500).send({message: error});
    }
}
exports.Editar = async(req, res) => {
    const { id } = req.params;
    const {nome, qtdeVagas, precoVaga, descricaoVaga} = req.body;
    try {
        await hotelRepository.update({
            nome:nome,
            qtdeVagas:qtdeVagas,
            precoVaga:precoVaga,
            descricaoVaga:descricaoVaga,
            },
            {
                where : {id : id},
            }
    )
        res.status(200).send("Hotel editado com sucesso")
    } catch (error) {
        res.status(500).send({message: error});
    }
}
exports.Deletar = async (req, res) => {
    const { id } = req.params
    try {
        await hotelRepository.destroy({
            where: {id : id }
        });
        res.stauts(200).send("Hotel deletado com sucesso")
    } catch (error) {
        res.status(500).send({message : error})
    }
}