import mongoose from 'mongoose';
import config from './config';

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Aleeguzman:AGNT2517@cluster0.ysaqf.mongodb.net/CRAI`
    );
    console.log('Connected to CraiDev');
  } catch (error) {
    console.error(error);
  }
})();
