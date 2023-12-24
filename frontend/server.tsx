const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/images", express.static("src/media/wishes/"));

app.get("/wishes", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.sendFile(__dirname + "/wishlist.json");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
