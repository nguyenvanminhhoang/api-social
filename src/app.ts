import { Route } from "core/interfaces";
import express from "express";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.initializeRoutes(routes);
    this.connectToMongo();
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private connectToMongo() {
    try {
      const connectionString = process.env.MONGODB_URI;
      if(!connectionString) {
        console.log("Connection string is invalid");
        return;
      }
      mongoose.connect(connectionString);
      console.log("Mongoose is connected...");
    } catch (error) {
      console.log("Can't connect to MongoDB, please check and try again...");
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at port ${this.port}`);
    });
  }
}

export default App;
