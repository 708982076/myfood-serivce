import express from 'express';
import config from './config';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import db from './db';
import routes from './routes';

const app = express();
app.use(express.static( __dirname + '/assets' ));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Credentials','true');
  next();
})
routes(app);

app.listen(config.port, () => {
  console.log(chalk.green(`服务器已启动${config.port}端口`));
});