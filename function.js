const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

exports.FirebaseMessage = functions.firestore.document('files/{newFile}').onCreate
((data, context) => {



const deviceToken = data.data().token;


var message = {

notification: {

title: "name",
body: "message"

}


};

  return admin.messaging().sendToDevice(deviceToken, message);
})