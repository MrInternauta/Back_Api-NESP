import Sequelize from 'Sequelize';
import { SEQUELIZE_CONFIG }  from '../config/database';

const TASKS = SEQUELIZE_CONFIG.define(
    'tasks',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type: Sequelize.TEXT
        },
        done: {
            type: Sequelize.BOOLEAN
        },
        projectId: {
            type: Sequelize.INTEGER,
        }
    },
    {
        timestamps: false
    }


);
export default TASKS;