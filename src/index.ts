/*git commit -m "first commit"
git remote add origin git@github.com:ErikGarfia/REST-API.git
git push -u origin master*/
import express from 'express'
import "reflect-metadata";
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'


import userRoutes from './routes/user.routes'

const app = express()
createConnection();

//MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());        //para interpretar lo que llega al servidor en formato json

//ROUTES
app.use(userRoutes);        //SON RUTAS DE USER.ROUTES.TS



app.listen(3000);
console.log('Servidor en puerto', 3000);