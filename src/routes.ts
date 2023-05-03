import { Express } from "express";

import userRouter from "./routes/user.route";
import sessionRouter from "./routes/session.route";
import productRouter from "./routes/product.route";

export default function routes(app: Express) {
  app.get("/", (_, res) => {
    return res.send("OK");
  });

  app.use("/users", userRouter);

  app.use("/sessions", sessionRouter);

  app.use("/products", productRouter);
}
