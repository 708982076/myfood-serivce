import express from 'express';
import config from './config';
import chalk from 'chalk';
import db from './db';

const app = express();
app.use(express.static( __dirname + '/assets' ));

app.listen(config.port, () => {
  console.log(chalk.green(`服务器已启动${config.port}端口`));
});