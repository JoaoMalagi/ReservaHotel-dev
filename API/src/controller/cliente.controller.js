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
   
    const {nome, cpf} = req.body;
    console.log(req.body);
    console.log(nome);
    try{
        await clienteRepository.create({
            nome: nome,
            cpf : cpf
        });
        res.status(200).send("Cliente criado com sucesso");
    }
    catch(error){
        res.status(500).send({message: error});
    }
}
exports.Editar = async (req, res) => {
    const {nome, cpf} = req.body;
    const { id } = req.params

    try {
        await clienteRepository.update({
            nome: nome,
            cpf: cpf,
            where : {id : id}
        });
        res.status(200).send("Cliente editado com sucesso");
    } catch (error) {
        res.status(500).send({message : error});
    }
}
exports.Deletar = async (req, body) => {
    const { id } = req.params
    try {
        await clienteRepository.destroy({
            where: {id : id }
        });
        res.stauts(200).send("Cliente deletado com sucesso")
    } catch (error) {
        res.status(500).send({message : error})
    }
}