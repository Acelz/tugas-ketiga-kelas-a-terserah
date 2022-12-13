import TempatWisataManado from '../Model/TempatWisataManadoModel.js';
import path from "path";
import fs from "fs";


export const getTempatWisataManado = async (req, res) => {
    //SELECT * FROM TempatWisataManado
    try {
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
     // INSERT INTO tempatwisata VALUES
     if (req.files === null || req.files === undefined)
        return res.status(400).json({ msg: "Gambar belum diupload" });
    const { nama, alamat, deskripsi, jarak } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
        return res.status(422).json({msg:"Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({msg: err.message});
        try{
            await TempatWisataManado.create({
                nama: nama,
                alamat: alamat,
                deskripsi:deskripsi,
                jarak: jarak,
                image: fileName,
                url: url,
            });
            res.status(201).json({msg: "Product Created Successfuly"})
        } catch (error) {
            console.log(error.message);
        }
    })
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