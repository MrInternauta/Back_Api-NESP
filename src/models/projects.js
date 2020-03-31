import Sequelize from 'sequelize';
import { SEQUELIZE_CONFIG } from '../config/database';
import TASKS  from './tasks';
const PROJECTS = SEQUELIZE_CONFIG.define(
  'projects',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    priority: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    deliverydate: {
      type: Sequelize.DATE
    }
  },
  { 
      timestamps: false 
  }
);

//Un proyecto tiene muchas tareas
PROJECTS.hasMany(TASKS, {
    foreingKey: 'projectId',
    sourceKey: 'id'
});

//Muchas tareas tiene muchos proyectos
TASKS.belongsTo(PROJECTS, {
    foreingKey: 'projectId',
    sourceKey: 'id'
});

export default PROJECTS;
