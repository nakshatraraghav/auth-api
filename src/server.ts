import express from "express";
import { config } from "dotenv";

import connect from "./utils/db-connect";
import routes from "./routes";

config();

const port = process.env.PORT as string;
const connection_string = process.env.CONNECTION_STRING as string;

const app = express();
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`server started on localhost:${port}`);
  connect(connection_string);
});
