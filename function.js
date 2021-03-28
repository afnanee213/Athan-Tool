const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

exports.FirebaseMessage = functions.firestore.document('files/{newFile}').onCreate
((data, context) => {



const token = data.data().token;


var message = {

notification: {

title: "name",
body: "message"

}


};

  return admin.messaging().sendToDevice(token, message);
})
