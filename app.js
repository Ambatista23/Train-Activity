// Steps to complete:

// 1. Create Firebase link
// 1a. Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyK2Jj_OYqH5p5TKJaSrl5_knlpfUTZgo",
    authDomain: "train-homework-bcs.firebaseapp.com",
    databaseURL: "https://train-homework-bcs.firebaseio.com",
    projectId: "train-homework-bcs",
    storageBucket: "train-homework-bcs.appspot.com",
    messagingSenderId: "427880116663"
  };

  firebase.initializeApp(config);

// 2. Create initial train data in database (You can do this through the Firebase console online)
var database = firebase.database();


var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;

function currentTime() {
  var timeNow = moment().format("HH:mm");
  $("#currentTime").html(timeNow);
};

// 3. Create button for adding new trains - then update the html + update the database

$("#addTrain").on("click", function(event){
  event.preventDefault();
trainName = $("#trainInput").val().trim();
trainDestination = $("#destinationInput").val().trim();
startTime = $("#firstTrainTimeInput").val().trim();
frequency = $("#frequencyInput").val().trim();

$("#addTrain").val("");


  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: startTime,
    frequency: frequency
  }
  alert(JSON.stringify(newTrain, null, 2));
  database.ref().push(newTrain);

});


database.ref().on("child_added", function(childSnapshot){
  var firstTrainConverted = moment(childSnapshot.val().startTime, "HH:mm").subtract(1, "years");
  var timeDiff = moment().diff(moment(firstTrainConverted), "HH:mm");
  var timeRemaining = timeDiff % childSnapshot.val().frequency;
  var minToArrival = childSnapshot.val().frequency - timeRemaining;
  var nextArrival = moment().add(minToArrival, "HH:mm");
  var key = childSnapshot.key;

var newRow= $("<tr>");
  newRow.append($("<td>" + childSnapshot.val().name + "</td>"));
  newRow.append($("<td>" + childSnapshot.val().destination + "</td>"));
  newRow.append($("<td class='text-center'>" + childSnapshot.val().frequency + "</td>"));
  newRow.append($("<td class='text-center'>" + nextArrival.format("HH:mm") + "</td>"));
  newRow.append($("<td class='text-center'>" + timeRemaining + "</td>"));
  
 


$("#trainTable").append(newRow);


});



// --------------- below is everything before the edit --------------
//   var newTrain = {
//     name: form.trainName.value,
//     destination: form.destinationName.value,
//     time: form.trainTimeName.value,
//     frequency: form.frequencyName.value
//   }
//   alert(JSON.stringify(newTrain, null, 2));

//   database.ref().push(newTrain);
// });

// // fire everytime the firebase recieves new object, will run this function
// // childSnapshot is item being pushed
// database.ref().on("child_added", function(childSnapshot){
//   console.log("Train added " + childSnapshot.val().name)

// // create variables to store everything in
//   var trainName = childSnapshot.val().name;
//   var trainDestination = childSnapshot.val().destination;
//   var trainFirstTime = childSnapshot.val().time;
//   var trainFreq = childSnapshot.val().frequency;



// // create a new row to display user input in
// var newRow= $("<tr>").append(
//   $("<td>").text(trainName),
//   $("<td>").text(trainDestination),
//   $("<td>").text(trainFreq),
//   $("<td>").text(trainFirstTime),
 
// );


// $("#trainTable").append(newRow);



// // start using jquery here ------------------

// // include table data
// // 5. Create a way to calculate the time way. Using difference between start and current time.
//   // use moment to calculate when the next train stop would be

// // current time
// var currentTime = moment().format("HH:mm");
// console.log("The Current Time is: " + currentTime);


// // needs userinput
// // var trainFrequency = 15;

// // first train arrives at 6: 00am

// // needs user input
// // var firstTrain = "6:00";

// // First Time (pushed back 1 year to make sure it comes before current time)
// var firstTrainConverted = moment(firstFirstTrain, "HH:mm").subtract(1, "years");
// console.log(moment(firstTrainConverted).format("HH:mm"));

// // time difference
// var timeDiff = moment(currentTime).diff(moment(firstTrainConverted), "minutes");
// console.log("Time Difference: " + moment(timeDiff).format("HH:mm"));

// // time apart (modulus)
// // var timeRemaining = timeDiff % ;
// console.log(timeRemaining);

// // next Train arrival
// var nextTrain = moment().add(timeRemaining, "minutes");
// console.log("Train Arrives: " + moment(nextTrain).format("HH:mm"));
// //    Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)


// });


// // 4. Create a way to retrieve trains from the trainlist.
// var userTrainName = $("#trainInput").val().trim();
// var userDestination = $("#destinationInput").val().trim();
// var userFirstTrainTime = $("#firstTrainTimeInput").val().trim();
// var userTrainFrequency = $("#frequencyInput").val().trim();

// console.log(userTrainName);
// console.log(userDestination);
// console.log(userFirstTrainTime);
// console.log(userTrainFrequency);




