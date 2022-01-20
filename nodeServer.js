const http = require("http");

// app object scaffold
const app = {};

app.WebServer = () => {
  http
    .createServer((req, res) => {
      if (req.url === "/") {
        res.write("This is Home Page ");
        res.end();
      } else if (req.url === "/about") {
        res.write("This is about page");
        res.end();
      } else if (req.url === "/service") {
        res.write("This is service page");
        res.end();
      } else if (req.url === "/contact") {
        res.write("This is contact page");
        res.end();
      } else {
        res.write("Sorry Nothis is found !");
        res.end();
      }
    })
    .listen(3000);
};

module.exports = {
  app,
};
