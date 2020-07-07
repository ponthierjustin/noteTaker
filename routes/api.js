let notesData = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) { 
    let newNote = req.body;
    newNote.id = notesData.length;
    console.log(newNote);
    notesData.push(newNote);
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notesData, null, 4), "utf-8", (err) => {
      if (err) throw err;
      console.log("successful");
    });
    res.json(notesData);
  });

  app.delete("/api/notes/:id", function(req, res){
    let chosen = req.params.id;
    res.json(chosen);
  });

};
