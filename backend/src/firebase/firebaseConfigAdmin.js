const admin = require("firebase-admin");

var serviceAccount = require("./services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://users-ef06d.firebaseio.com"
});

module.exports = admin 
