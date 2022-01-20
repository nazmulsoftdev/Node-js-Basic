const fs = require("fs");

// app object scaffold

const app = {};

// create a file

app.CreateFile = (name, userText) => {
  fs.writeFile(`${name}.txt`, `${userText}`, "utf-8", (err) => {
    if (err) throw err;
  });
};

//  read file

app.ReadFile = (name) => {
  fs.readFile(`${__dirname}/${name}.txt`, "utf-8", (err, data) => {
    console.log(data.toString());
  });
};

// add text in previous file

app.addContent = (name, newContent) => {
  fs.appendFile(`${__dirname}/${name}.txt`, `${newContent}`, (err) => {
    if (err) throw err;
  });
};

// rename a file

app.RenameFile = (oldPath, newPath) => {
  fs.rename(`${oldPath}.txt`, `${newPath}.txt`, (err) => {
    if (err) throw err;
  });
};

// remove a file from file system

app.RemoveFile = (name) => {
  fs.unlink(`${name}.txt`, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  app,
};
