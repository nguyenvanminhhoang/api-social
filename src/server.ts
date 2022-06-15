import "dotenv/config";
import App from "./app";
import { IndexRoute } from "@modules/index";
import { ValidENV } from "@core/utils";

ValidENV();

const routes = [new IndexRoute()];

const app = new App(routes);

app.listen();
