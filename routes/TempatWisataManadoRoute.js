import express from 'express';
import {
    getTempatWisataManado,
    getTempatWisataManadoById,
    createTempatWisataManado,
    updateTempatWisataManado,
    deleteTempatWisataManado,
} from '../controller/TempatWisataManado.js';

const router = express.Router();

// http://localhost:5000/TempatWisataManado
router.get('/products', getTempatWisataManado);
router.get('/product/:id', getTempatWisataManadoById);
router.post('/product', createTempatWisataManado);
router.patch('/product/:id', updateTempatWisataManado);
router.delete('/product/:id', deleteTempatWisataManado);

export default router;