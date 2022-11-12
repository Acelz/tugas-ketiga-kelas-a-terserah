import { Sequelize } from 'sequelize';

const db = new Sequelize('tempat_wisatamanado', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;