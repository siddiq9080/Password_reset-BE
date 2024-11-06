import express from "express";
import { dbConnection } from "./DB-connection/mongoose-db.js";
import { userserver } from "./registerapi.js";
import cors from "cors";

let server = express();

server.use(express.json());
server.use(cors());

const port = 4500;

server.use("/", userserver);

await dbConnection();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
