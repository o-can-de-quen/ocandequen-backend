import express from "express";
import bodyParser from "body-parser";
import programmingLanguagesRouter from "@routes/programmingLanguages.route";
import testRouter from "@routes/test.route";

const app = express();
const port = Number(process.env.PORT) || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.json({ ocdq: "Hello world!" });
});

app.use("/programming-languages", programmingLanguagesRouter);
app.use("/test", testRouter);

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
