import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import goalRoutes from './routes/goalRoutes.js';
import { userRouter } from './routes/usersAuth.js';
import userRoutes from './routes/user.js';

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/auth', userRouter);

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose connected');
    app.listen(PORT, () =>
      console.log(`Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));
