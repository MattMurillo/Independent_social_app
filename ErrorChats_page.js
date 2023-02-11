var firebaseConfig = {
    apiKey: "AIzaSyC9Ja9DkYu5J1p7no2WZ_WgnlrO17E20ok",
    authDomain: "errorchatsdb.firebaseapp.com",
    projectId: "errorchatsdb",
    storageBucket: "errorchatsdb.appspot.com",
    messagingSenderId: "409501704760",
    appId: "1:409501704760:web:8673229cceb1e7ba957ccd",
    measurementId: "G-R11G1G0V3X"
  };

firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like:0 
  });
  document.getElementById("msg").value ="";
}