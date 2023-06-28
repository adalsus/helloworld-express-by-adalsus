// init project
const server = require('./app.js');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// listen for requests :)
const listener = server.listen(PORT, function(error) {
  if (!error) console.log("Your app is listening on port " + listener.address().port)
  else console.log(error.message);
});
