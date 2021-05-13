import cors from "cors";
import express from "express";
import { consults } from "./queries";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
//app.use(express.json());
//app.use(cookieParser());
//app.set("trust proxy", 1);
//app.get("/", allUsers);

app.use("/", consults);

app.listen(3030, () => {
  console.log("The application is listening on port 3030!");
});
