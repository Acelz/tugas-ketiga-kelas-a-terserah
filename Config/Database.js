import { Sequelize } from 'sequelize';

const db = new Sequelize('db_traveloke', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;