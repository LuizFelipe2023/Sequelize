import express from 'express';
import livroController from '../controllers/modeloController.js';
const router = express.Router();


router.post('/livros',livroController.createLivros);
router.get('/livros',livroController.getLivros);
router.get('/livros/:id',livroController.getlivrosporId);
router.put('/livros/:id',livroController.updateLivro);
router.delete('/livros/:id',livroController.deleteLivro);


export default router;