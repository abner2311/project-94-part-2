var firebaseConfig = {
    apiKey: "AIzaSyCRwZyd5JeJHo3v2erUAJi6P2XXlgraKgA",
    authDomain: "class-test-7f0c3.firebaseapp.com",
    databaseURL: "https://class-test-7f0c3-default-rtdb.firebaseio.com",
    projectId: "class-test-7f0c3",
    storageBucket: "class-test-7f0c3.appspot.com",
    messagingSenderId: "1036933914607",
    appId: "1:1036933914607:web:f76a5afbf1c7ef91b4e01a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
    user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
    user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }