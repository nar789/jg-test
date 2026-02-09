import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { Route } from "./Route.js";
import path from "path";
import { fileURLToPath } from "url";

export default class App {
  constructor() {
    this.app = express();
    this.bodyParser = bodyParser;
    const __filename = fileURLToPath(import.meta.url);
    this.__dirname = path.dirname(__filename);
  }

  route() {
    const route = new Route(this.app, this.__dirname);
    route.route();
  }

  init() {
    this.app.set("view engine", "ejs");
    this.app.engine("html", ejs.renderFile);
    this.app.use("/assets", express.static(this.__dirname + "/../assets"));
    this.app.use(
      this.bodyParser.urlencoded({
        extended: true,
      })
    );
    this.app.use(this.bodyParser.json());
  }

  start() {
    this.init();
    this.route();
  }
}
