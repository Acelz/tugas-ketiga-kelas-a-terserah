import express from 'express';
import cors from 'cors';
import FileUpload from "express-fileupload";
import TempatWisataManadoRoute from './routes/TempatWisataManadoRoute.js'
import db from "./Config/Database.js"
const app = express();

(async () => {
    await db.sync();
})();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(TempatWisataManadoRoute);

app.listen(5001, () => console.log('Server running on port 5001'));