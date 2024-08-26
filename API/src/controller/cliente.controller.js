const clienteRepository = require('../models/Cliente');

exports.Listar = async (req, res) => {
    try {
        const retorno = await clienteRepository.findAll();
        res.status(200).send(retorno);
    }
    catch (error){
        console.log(error)
        res.status(500).send({message: error});

    }
};

exports.Criar = async (req, res) => {
   
    const {nome} = req.body;
    console.log(req.body);
    console.log(nome);
    try{
        await clienteRepository.create({
            nome: nome
        });
        res.status(200).send("Cliente criado com sucesso");
    }
    catch(error){
        res.status(500).send({message: error});
    }
}