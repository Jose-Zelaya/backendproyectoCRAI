import { Schema, model } from 'mongoose';

const SalaSchema = new Schema(
  {
    sede: { type: String, trim: true },
    numsala: { type: String, trim: true },
 
  },
  {
    versionKey: false,
    collection: 'Sala'
  }
);

export default model('Sala', SalaSchema);
