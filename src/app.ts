import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import botRoutes from './routes/botRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/bot', botRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default app;