import express, { Application } from "express";

export class App {
  private app: Application;
  private port?: number | string;

  constructor(port?: number | string) {
    this.app = express();
    this.port = port;
    this.settings();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("listen on server", this.port);
  }
}
