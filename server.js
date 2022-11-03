import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandleMiddleware from './middleware/error-handler.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);
const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on por ${port}`);
    });
  } catch (err) {
    console.log('Error: ', err);
  }
};

start();
