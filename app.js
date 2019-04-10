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

// 3. Create button for adding new trains - then update the html + update the database
$("#addTrain").on("click", function(train){
  event.preventDefault();
  

  var newTrain = {
    name: form.trainName.value,
    destination: form.destinationName.value,
    time: form.trainTimeName.value,
    frequency: form.frequencyName.value
  }
  alert(JSON.stringify(newTrain, null, 2));

  database.ref().push(newTrain);
});

// fire everytime the firebase recieves new object, will run this function
// childSnapshot is item being pushed
database.ref().on("child_added", function(childSnapshot){
  console.log("Train added " + childSnapshot.val().name)

// create variables to store everything in
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFreq = childSnapshot.val().frequency;
  var nextArrival = childSnapshot.val().nextArrival;


// create a new row to display user input in
var newRow= $("<tr>").append(
  $("<td>").text(trainName),
  $("<td>").text(trainDestination),
  $("<td>").text(trainFreq),
  $("<td>").text(trainTime),
  $("<td>").text(nextArrival)
);


$("#trainTable").append(newRow);



// start using jquery here ------------------

// include table data
// 5. Create a way to calculate the time way. Using difference between start and current time.
  // use moment to calculate when the next train stop would be

// current time
var currentTime = moment().format("HH:mm");
console.log("The Current Time is: " + currentTime);

// assuming the train comes every 15 mins
var trainFrequency = 15;

// first train arrives at 6: 00am
var firstTrain = "6:00";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
console.log(firstTrainConverted);

// time difference
var timeDiff = moment().diff(moment(firstTrainConverted), "minutes");
console.log("Time Difference: " + moment(timeDiff).format("HH:mm"));

// time apart (modulus)
var timeRemaining = timeDiff % trainFrequency;
console.log(timeRemaining);

// next Train arrival
var nextTrain = moment().add(timeRemaining, "minutes");
console.log("Train Arrives: " + moment(nextTrain).format("HH:mm"));
//    Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)


});


// 4. Create a way to retrieve trains from the trainlist.
var userTrainName = $("#trainInput").val().trim();
var userDestination = $("#destinationInput").val().trim();
var userFirstTrainTime = $("#firstTrainTimeInput").val().trim();
var userTrainFrequency = $("#frequencyInput").val().trim();

console.log(userTrainName);
console.log(userDestination);
console.log(userFirstTrainTime);
console.log(userTrainFrequency);




