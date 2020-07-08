let notesData = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) { 
    let newNote = req.body;
    newNote.id = notesData.length + 1;
    console.log(newNote);
    notesData.push(newNote);
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notesData, null, 4), "utf-8", (err) => {
      if (err) throw err;
      console.log("successful");
    });
    res.json(notesData);
  });

  /* https://www.w3schools.com/jsref/jsref_filter.asp */
  /* data = data.filter(x=>x.id!=req.params.id) */
  app.delete("/api/notes/:id", function(req, res){
    let chosen = req.params.id;
    notesData = notesData.filter(note => note.id != chosen);
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notesData, null, 4), "utf-8", (err) => {
      if (err) throw err;
      console.log("successful");
    });
    res.json(chosen);
  });

};
