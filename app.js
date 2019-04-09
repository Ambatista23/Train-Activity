// Steps to complete:

// 1. Create Firebase link
    

    <script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>

  // Initialize Firebase
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
// 3. Create button for adding new trains - then update the html + update the database
// 4. Create a way to retrieve trains from the trainlist.
// 5. Create a way to calculate the time way. Using difference between start and current time.
//    Then take the difference and modulus by frequency. (This step can be completed in either 3 or 4)