const fs = require("fs");

// app Object scaffold

const app = {};

app.ReadstreamFile = (name) => {
  const readStr = fs.createReadStream(`${__dirname}/${name}.txt`);
  readStr.on("data", (chunk) => {
    console.log(chunk);
  });
};

app.WritestreamFile = (name, newName) => {
  const readStr = fs.createReadStream(`${__dirname}/${name}.txt`, "utf-8");
  const writeStr = fs.createWriteStream(`${newName}.txt`, "utf-8");
  readStr.pipe(writeStr);
};

module.exports = {
  app,
};
