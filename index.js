import express from 'express';
import cors from 'cors';
import TempatWisataManadoRoute from './routes/TempatWisataManadoRoute.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(TempatWisataManadoRoute);

app.listen(5000, () => console.log('Server running on port 5000'));