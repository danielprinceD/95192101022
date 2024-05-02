const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { default: axios } = require("axios");
const AUTH = require("../../auth");
dotenv.config();
app.use(cors({ origin: "*" }));
data = {
  companyName: "PSR Engineering College",
  clientID: "d37a1870-1c12-41a2-8fbe-dba8546dd931",
  clientSecret: "xpcXtMvaOiymUmXM",
  ownerName: "Daniel Prince D",
  ownerEmail: "d.danielprince2003@gmail.com",
  rollNo: "95192101022",
};

app.get("/categories/:categoryname/products", async (req, result) => {
  const param = req.params;
  axios.post("http://20.244.56.144/test/auth", data).then((res) => {
    axios
      .get(
        `${process.env.SERVER}/test/companies/AMZ/categories/${param.categoryname}/products?top=50&minPrice=10&maxPrice=10000`,
        {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        }
      )
      .then((data) => {
        result.json(data.data);
      })
      .catch((err) => {
        result.json({ result: "Not Found" });
      });
  });
});

app.listen(4000);
