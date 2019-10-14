import express from "express";
import config from "./config";
import chalk from "chalk";
import bodyParser from "body-parser";
import routes from "./routes";
import "./db";

const app = express();
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", allowOrigin);
	res.header("Access-Control-Allow-Headers", "Content-Type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
	if (req.method == 'OPTIONS') {
  	res.sendStatus(200);
	} else {
    next();
	}
});
app.get("/", (req, res) => {
  res.send("程鹏的服务器");
});
routes(app);

app.listen(config.port, () => {
  console.log(chalk.green(`服务器已启动${config.port}端口`));
});