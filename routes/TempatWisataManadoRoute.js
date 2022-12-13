import express from 'express';
import {
    getTempatWisataManado,
    getTempatWisataManadoById,
    createTempatWisataManado,
    updateTempatWisataManado,
    deleteTempatWisataManado,
} from '../backend/controller/TempatWisataManado.js';

const router = express.Router();

// http://localhost:5000/TempatWisataManado
router.get('/tempatwisata', getTempatWisataManado);
router.get('/tempatwisata/:id', getTempatWisataManadoById);
router.post('/tempatwisata', createTempatWisataManado);
router.patch('/tempatwisata/:id', updateTempatWisataManado);
router.delete('/tempatwisata/:id', deleteTempatWisataManado);

export default router;