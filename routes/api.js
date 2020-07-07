let notesData = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notesData), "utf-8", (err) => {
      if (err) throw err;
      console.log("successful");
    });
    res.json(notesData);
  });

  app.delete("/api/notes/title", function(req, res){
    let chosen = req.params.notesData;
  });

};
