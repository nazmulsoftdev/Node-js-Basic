const Server = require("./nodeServer");
const FS_Action = require("./fsAction");
const My_Stream = require("./Streaming");

/*define a http request server */

Server.app.WebServer();

/* define a fs module Create file Method */

FS_Action.app.CreateFile("morning", "Good morning ");

/*  define a fs module Read file Method   */

FS_Action.app.ReadFile("morning");

/*  define a fs module append text file Method   */

FS_Action.app.addContent("morning", " I like to wake up early morning ");

/*  define a fs module rename file Method   */

FS_Action.app.RenameFile("data", "db");

/*  define a fs module remove file Method   */

FS_Action.app.RemoveFile("db");

/*  define a fs module readcStream  Method   */

My_Stream.app.ReadstreamFile("bigData");

/*  define a fs module write Stream  Method   */

My_Stream.app.WritestreamFile("bigData", "DataBase");
