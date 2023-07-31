import express from "express";
import bodyParser from "body-parser";
import reviewController from "@routes/example";
import reviewRouter from "@routes/review.route";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req: any, res: any) => res.json({ ocdq: "Hello world!" }));
app.use("/example", reviewController);
app.use("/review", reviewRouter);

/* Error handler middleware */
app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
