import { Router } from 'express';
import { getProducts } from '../controllers/product';

const router = Router();

router.get('/', (req, res) => {
  return getProducts(req, res);
});

export default router;
