import TempatWisataManado from '../Model/TempatWisataManadoModel.js';

export const getTempatWisataManado = async (req, res) => {
    try {
        //SELECT * FROM TempatWisataManado
        const response = await TempatWisataManado.findAll();
        res.status(200).json(response);

    } catch (error) {
        console.log(error.message);
    }
}

export const getTempatWisataManadoById = async (req, res) => {
    try {
        //SELECT * FROM TempatWisataManado WHERE id = ?
        const response = await TempatWisataManado.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTempatWisataManado = async (req, res) => {
    try {
        // INSERT
        await TempatWisataManado.create(req.body);
        res.status(201).json({
            msg: 'Tempat Wisata Created'
        })
    } catch (error) {
        console.log(error.messagge);
    }
}


export const updateTempatWisataManado = async (req, res) => {
    try {
        await TempatWisataManado.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            msg: 'Tempat Wisata Updated'
        });
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteTempatWisataManado = async (req, res) => {
    try {
        await TempatWisataManado.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            msg: 'Product Deleted'
        })
    } catch (error) {
        console.log(error.messagge);
    }
}

export const sorting = async (req, res) => {
    try {
        //SELECT * FROM TempatWisataManado
        const response = await TempatWisataManado.findAll({
            limit: 5,
            order: [
                ['result', 'DESC']
            ]
        });
        res.status(200).json(response);

    } catch (error) {
        console.log(error.message);
    }
}