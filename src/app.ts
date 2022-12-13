import express from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import campusRoutes from './routes/Campus.Routes';

import reservaRoutes from './routes/Reserva.Routes';
import salaRoutes from './routes/Sala.Routes';

const app = express();
app.set('port', config.MONGO_PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(campusRoutes);
app.use(reservaRoutes);
app.use(salaRoutes);
export default app;