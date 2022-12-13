import {
    Sequelize
} from 'sequelize';
import db from '../Config/Database.js';

const {
    DataTypes
} = Sequelize;

const TempatWisataManado = db.define(
    'tempatwisata', 
    {
        uuid: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
            notEmpty: true,
            },
        }, 
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            len: [3, 100],
            },
        },
        alamat: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            len: [3, 100],
            },
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            len: [3, 255],  
            },
        },
        jarak: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true,
            len: [3, 100],
            },
        },
        image: DataTypes.STRING,
        url: DataTypes.STRING,
    }, 
    {
    freezeTableName: true
    });

export default TempatWisataManado;

(async () => {
    await db.sync();
})();