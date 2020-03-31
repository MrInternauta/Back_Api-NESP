import Sequelize from 'sequelize';
export const SEQUELIZE_CONFIG = new Sequelize(
    'feliperamirez',
    'feliperamirez',
    'FramirezGC.20',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);