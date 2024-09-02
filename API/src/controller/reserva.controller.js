const reservaRepository = require('../models/Reserva')
const hotelRepository = require('../models/Hotel')
const { Op } = require('sequelize');

exports.Listar = async(req, res) => {
    try {
        const retorno = await reservaRepository.findAll();
        res.status(200).send(retorno);
    } catch (error) {
        res.status(500).send({message:error});
    }
}
exports.Criar = async(req, res) => {
    const {nome,reservaInicio, reservaFim,clienteId,hotelId} = req.body;
    console.log(req.body);
    const hotel =  await hotelRepository.findOne({
        where : {id : hotelId,
            qtdeVagas :{[Op.gt]: [0]}  
        }
                
    });
    if(hotel){
        console.log("teste");
        try {   
             await reservaRepository.create({
                 nome:nome,
                 reservaInicio:reservaInicio,
                 reservaFim:reservaFim,
                 clienteId: clienteId,
                 hotelId: hotelId
             });
             await hotelRepository.update(
                {qtdeVagas : (hotel.qtdeVagas - 1)},
                { where : {id: hotelId}}
             )
             res.status(200).send("Reserva criaada com sucesso!");
        }   
        catch (error) {
           res.status(500).send({message:error})
       }
    }
    else{
        res.status(500).send("Hotel sem vagas no momento")
    }
}
