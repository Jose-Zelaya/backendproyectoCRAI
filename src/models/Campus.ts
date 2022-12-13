import { Schema, model } from 'mongoose';

const campusSchema = new Schema(
  {
    _id: { type: Number },
    nameImg: { type: String, trim: true },
    campusName: { type: String, trim: true },
    sedeName: { type: String, trim: true },
    campusPlace: { type: String, trim: true },
    campusDirection: { type: String, trim: true },
  },
  {
    versionKey: false,
    collection: 'Campus'
  }
);

export default model('Campus', campusSchema);
