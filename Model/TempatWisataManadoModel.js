import { Sequelize } from 'sequelize';
import db from '../Config/Database.js';

const { DataTypes } = Sequelize;

const TempatWisataManado = db.define('TempatWisataManado', {
    nama_tempatwisatamanado: DataTypes.STRING,
    alamat_tempatwisatamanado: DataTypes.STRING,
    jambuka_tempatwisata: DataTypes.VARCHAR,
    jamtutup_tempatwisata: DataTypes.VARCHAR,
    tiket_masuktempatwisata: DataTypes.VARCHAR,
}, {
    freezeTableName: true
});

export default TempatWisataManado;

(async()=> {
        await db.sync();
})();