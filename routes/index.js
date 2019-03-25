import storeRouter from './store';
import cityRouter from './city';

export default (app) => {
  app.use(storeRouter);
  app.use(cityRouter);
}