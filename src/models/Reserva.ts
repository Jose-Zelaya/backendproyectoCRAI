import { Schema, model } from 'mongoose';

const ReservaSchema = new Schema(
  {
    id_sala : {type : String},
    nombre: { type: String, trim: true },
    apellido: { type: String, trim: true },
    numcuenta: { type: Number },
    horas_reservadas: { type: Number }, 
    integrantes: { type: String, trim: true }
  },
  {
    versionKey: false,
    collection: 'Reserva'
  }
);

export default model('Reserva', ReservaSchema);
