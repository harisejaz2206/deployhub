import express, { Express } from "express";
import cors from "cors";
import simpleGit from "simple-git";
import { generate } from "./utilities/generate.utilities";

const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

app.post("deploy", async (req, res) => {
    const repoUrl = req.body.repoUrl;

    const id = generate();
    await simpleGit().clone(repoUrl, `output/${id}`);
    res.json({})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

