import {
    Sequelize
} from 'sequelize';
import db from '../Config/Database.js';

const {
    DataTypes
} = Sequelize;

const TempatWisataManado = db.define('TempatWisataManado', {
    nama_tempatwisatamanado: DataTypes.STRING,
    alamat_tempatwisatamanado: DataTypes.STRING,
    jarak_tempatwisatamanado: DataTypes.STRING,
    jambuka_tempatwisata: DataTypes.STRING,
    jamtutup_tempatwisata: DataTypes.STRING,
    tiket_masuktempatwisata: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default TempatWisataManado;

(async () => {
    await db.sync();
})();