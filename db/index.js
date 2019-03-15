import mongoose from 'mongoose';
import config from '../config';
import chalk from 'chalk';

mongoose.connect(config.db.url, { useNewUrlParser: true });

const db = mongoose.connection;

mongoose.connection.on('connected', () => {
  console.log( chalk.green('数据库连接成功') );
}); 

db.on('error', (err) => {
  console.log( chalk.red('数据库异常') );
  mongoose.disconnect();
})

db.on('close', () => {
  console.log( chalk.red('数据库已关闭') );
  mongoose.connect(config.db.url, { useNewUrlParser: true });
})

export default mongoose;