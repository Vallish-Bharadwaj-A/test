const express = require("express");
require("dotenv").config();

const port = 4000;
const app = express();
const data = {
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-05-24T19:10:30Z",
  "updated_at": "2024-10-05T18:57:59Z"
};

app.get("/", (req, res) => {
  res.send("Hello pappu");
});

app.get("/login",(req, res) => {
  res.send("Hello login lowdu");
})

app.get("/github",(req,res)=>{
  res.json(data);
})

app.listen(process.env.PORT, () => {
  console.log("listening to the port " + process.env.PORT);
});

