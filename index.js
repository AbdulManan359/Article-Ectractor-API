import express from "express";
import { extract } from '@extractus/article-extractor'

const app = express();



app.get("/extract", async (req, res) => {
  const articleUrl = req.query.articleUrl;

  const APIkey = process.env.my_API_KEY;
  const headerAPI = req.headers['x-api-key'];

  if (headerAPI === APIkey) {
    try {
      const data = await extract(articleUrl);
      const outputOfApi = {
        requestStatus: "Completed",
        data: data,
      }
      res.json(outputOfApi);
    } catch (err) {
      console.log(err);
      err = {
        requestStatus: "Incomplete",
        error: err
      }
      res.status(404).json(err);
    }
  } else {
    res.sendStatus(401);
  }
});


app.listen(3000, () => {
  console.log("index.js Listening on port 3000");
})




