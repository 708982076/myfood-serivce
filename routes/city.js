import express from 'express';
import city from '../dao/city';

const router = express.Router();

router.get('/city', city.getAllCity);
router.get('/location', city.getPosition);

export default router;