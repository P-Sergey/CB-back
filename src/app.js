import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 9000;

app.use('/users', userRoutes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to this API.',
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
