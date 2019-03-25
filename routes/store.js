import store from '../dao/store/store';
import express from 'express';
const router = express.Router();

router.get('/store', store.getStoreList);
router.get('/storeItem', store.getStoreItem);
router.get('/storeComment', store.getComment);
router.get('/storeInfo', store.getStoreInfo);
router.get('/storeWordSerach', store.getKeywordStore);

export default router;