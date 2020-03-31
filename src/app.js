import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import taskRoutes from './routes/tasks';
import projectRoutes from './routes/projects';


//Initialization 
const app = express();

//Midelwares
app.use( morgan( 'dev' ) ); //Ver peticiones en desarrollo
app.use(json()); //Entender los JSON

//routes
app.use( '/api/task', taskRoutes );
app.use( '/api/project' , projectRoutes );





export default app;